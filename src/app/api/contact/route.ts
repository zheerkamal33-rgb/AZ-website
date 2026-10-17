import { NextResponse } from "next/server";
import {
  mailConfigured,
  sendContactEmail,
  type ContactPayload,
} from "@/lib/contact-mail";

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

/** Simple per-IP rate limit (best-effort in-process). */
const hits = new Map<string, { count: number; reset: number }>();
const WINDOW_MS = 60_000;
const MAX_HITS = 5;

function rateLimited(ip: string) {
  const now = Date.now();
  const row = hits.get(ip);
  if (!row || now > row.reset) {
    hits.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  row.count += 1;
  return row.count > MAX_HITS;
}

function clientIp(req: Request) {
  const xf = req.headers.get("x-forwarded-for");
  if (xf) return xf.split(",")[0]?.trim() || "unknown";
  return req.headers.get("x-real-ip") || "unknown";
}

export async function POST(req: Request) {
  if (!mailConfigured()) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Contact email is not configured yet. Add GMAIL_APP_PASSWORD (or RESEND_API_KEY) and restart the server.",
        code: "not_configured",
      },
      { status: 503 },
    );
  }

  const ip = clientIp(req);
  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many messages. Try again in a minute.", code: "rate_limit" },
      { status: 429 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request.", code: "bad_json" },
      { status: 400 },
    );
  }

  // Honeypot — bots fill this; humans never see it.
  if (String(body.website ?? "").trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Name, email, and message are required.", code: "required" },
      { status: 400 },
    );
  }

  if (name.length > 120 || email.length > 200 || message.length > 5000) {
    return NextResponse.json(
      { ok: false, error: "Message is too long.", code: "too_long" },
      { status: 400 },
    );
  }

  if (!emailOk(email)) {
    return NextResponse.json(
      { ok: false, error: "Enter a valid email address.", code: "bad_email" },
      { status: 400 },
    );
  }

  const payload: ContactPayload = { name, email, message };

  try {
    const via = await sendContactEmail(payload);
    return NextResponse.json({ ok: true, via });
  } catch (err) {
    console.error("[contact]", err);
    return NextResponse.json(
      {
        ok: false,
        error: "Could not send the message. Please try again or call us.",
        code: "send_failed",
      },
      { status: 502 },
    );
  }
}
