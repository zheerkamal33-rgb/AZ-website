import nodemailer from "nodemailer";

export const CONTACT_TO =
  process.env.CONTACT_TO_EMAIL?.trim() || "automated.zoneaz@gmail.com";

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function buildBodies({ name, email, message }: ContactPayload) {
  const text = [
    `New message from the Automated Zone site`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    ``,
    message,
  ].join("\n");

  const html = `
    <div style="font-family:system-ui,sans-serif;line-height:1.5;color:#0b1420">
      <p style="margin:0 0 12px"><strong>New message from the Automated Zone site</strong></p>
      <p style="margin:0 0 4px"><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p style="margin:0 0 16px"><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
      <div style="white-space:pre-wrap;border-top:1px solid #c8d2de;padding-top:16px">${escapeHtml(message)}</div>
    </div>
  `.trim();

  return { text, html };
}

async function sendWithResend(payload: ContactPayload) {
  const key = process.env.RESEND_API_KEY?.trim();
  if (!key) return null;

  const { text, html } = buildBodies(payload);
  const from =
    process.env.RESEND_FROM?.trim() ||
    "Automated Zone <onboarding@resend.dev>";

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [CONTACT_TO],
      reply_to: payload.email,
      subject: `Automated Zone contact — ${payload.name}`,
      text,
      html,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Resend failed (${res.status}): ${body.slice(0, 240)}`);
  }

  return "resend" as const;
}

async function sendWithGmail(payload: ContactPayload) {
  const user =
    process.env.GMAIL_USER?.trim() || "automated.zoneaz@gmail.com";
  const pass = process.env.GMAIL_APP_PASSWORD?.trim();
  if (!pass) return null;

  const { text, html } = buildBodies(payload);
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: `"Automated Zone" <${user}>`,
    to: CONTACT_TO,
    replyTo: `"${payload.name}" <${payload.email}>`,
    subject: `Automated Zone contact — ${payload.name}`,
    text,
    html,
  });

  return "gmail" as const;
}

export function mailConfigured() {
  return Boolean(
    process.env.RESEND_API_KEY?.trim() ||
      process.env.GMAIL_APP_PASSWORD?.trim(),
  );
}

/** Prefer Resend when set; otherwise Gmail SMTP app password. */
export async function sendContactEmail(payload: ContactPayload) {
  const viaResend = await sendWithResend(payload);
  if (viaResend) return viaResend;

  const viaGmail = await sendWithGmail(payload);
  if (viaGmail) return viaGmail;

  throw new Error(
    "Email is not configured. Set GMAIL_APP_PASSWORD or RESEND_API_KEY.",
  );
}
