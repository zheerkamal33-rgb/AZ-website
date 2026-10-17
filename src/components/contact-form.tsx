"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "loading" | "success" | "error";

const fieldClass =
  "h-12 rounded-none border-0 border-b border-white/20 bg-transparent px-0 text-base text-white shadow-none placeholder:text-white/35 focus-visible:border-teal focus-visible:ring-0 focus-visible:ring-offset-0 disabled:bg-transparent md:text-base";

const areaClass =
  "min-h-32 rounded-none border-0 border-b border-white/20 bg-transparent px-0 text-base text-white shadow-none placeholder:text-white/35 focus-visible:border-teal focus-visible:ring-0 focus-visible:ring-offset-0 disabled:bg-transparent md:text-base";

const web3Key = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();

export function ContactForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [redirectTo, setRedirectTo] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const fromNameRef = useRef<HTMLInputElement>(null);
  const replyToRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setRedirectTo(`${window.location.origin}/?sent=1#contact`);
    const q = new URLSearchParams(window.location.search);
    if (q.get("sent") === "1") {
      setStatus("success");
      const url = new URL(window.location.href);
      url.searchParams.delete("sent");
      window.history.replaceState(
        {},
        "",
        `${url.pathname}${url.hash || "#contact"}`,
      );
    }
  }, []);

  async function sendViaWeb3Forms(payload: {
    name: string;
    email: string;
    message: string;
  }) {
    if (!web3Key) return null;

    const payloadBody = {
      access_key: web3Key,
      name: payload.name,
      email: payload.email,
      message: payload.message,
      subject: `${payload.name} — ${payload.email}`,
      from_name: payload.name,
      replyto: payload.email,
    };

    let res: Response;
    try {
      res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payloadBody),
      });
    } catch {
      res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(payloadBody),
      });
    }

    const data = (await res.json().catch(() => ({}))) as {
      success?: boolean;
      message?: string;
    };

    if (!res.ok || !data.success) {
      throw new Error(data.message || t.formErrorSend);
    }
    return true;
  }

  async function sendViaApi(payload: {
    name: string;
    email: string;
    message: string;
  }) {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, website: "" }),
    });
    const data = (await res.json().catch(() => ({}))) as {
      ok?: boolean;
      error?: string;
    };
    if (!res.ok || !data.ok) {
      throw new Error(data.error || t.formErrorSend);
    }
    return true;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    // Honeypot (renamed — "website" was showing up in Web3Forms emails)
    const hp = String(data.get("az_hp") ?? "").trim();

    if (hp) {
      setStatus("success");
      form.reset();
      return;
    }

    if (!name || !email || !message) {
      setStatus("error");
      setError(t.formErrorRequired);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setError(t.formErrorEmail);
      return;
    }

    setStatus("loading");
    try {
      if (web3Key) {
        await sendViaWeb3Forms({ name, email, message });
      } else {
        await sendViaApi({ name, email, message });
      }
      setStatus("success");
      form.reset();
    } catch {
      if (web3Key && formRef.current) {
        if (fromNameRef.current) fromNameRef.current.value = name;
        if (replyToRef.current) replyToRef.current.value = email;
        if (subjectRef.current) {
          subjectRef.current.value = `${name} — ${email}`;
        }
        formRef.current.submit();
        return;
      }
      setStatus("error");
      setError(t.formErrorSend);
    }
  }

  if (status === "success") {
    return (
      <div className="az-contact-success py-2" role="status">
        <p className="font-display text-2xl font-semibold tracking-tight text-teal sm:text-3xl">
          {t.formSuccessTitle}
        </p>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60 sm:text-base">
          {t.formSuccessBody}
        </p>
        <button
          type="button"
          className="az-cta mt-8 inline-flex h-11 items-center border-b border-teal/60 text-sm font-medium text-teal transition-colors hover:border-teal hover:text-white"
          onClick={() => setStatus("idle")}
        >
          {t.formAnother}
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      className="az-contact-form space-y-8"
      noValidate
      action={web3Key ? "https://api.web3forms.com/submit" : undefined}
      method={web3Key ? "POST" : undefined}
    >
      {web3Key ? (
        <>
          <input type="hidden" name="access_key" value={web3Key} />
          <input
            ref={subjectRef}
            type="hidden"
            name="subject"
            defaultValue="Automated Zone contact"
          />
          <input
            ref={fromNameRef}
            type="hidden"
            name="from_name"
            defaultValue="Visitor"
          />
          <input ref={replyToRef} type="hidden" name="replyto" defaultValue="" />
          {redirectTo ? (
            <input type="hidden" name="redirect" value={redirectTo} />
          ) : null}
        </>
      ) : null}

      <div
        className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="az_hp">Company</label>
        <input
          id="az_hp"
          name="az_hp"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
        <input
          type="checkbox"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="name"
          className="text-xs font-medium tracking-wide text-white/50 uppercase"
        >
          {t.formName}
        </Label>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          placeholder={t.formNamePh}
          disabled={status === "loading"}
          className={fieldClass}
          aria-invalid={status === "error" && !!error}
        />
      </div>
      <div className="space-y-2">
        <Label
          htmlFor="email"
          className="text-xs font-medium tracking-wide text-white/50 uppercase"
        >
          {t.formEmail}
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder={t.formEmailPh}
          disabled={status === "loading"}
          className={`az-latin ${fieldClass}`}
          dir="ltr"
          lang="en"
          aria-invalid={status === "error" && !!error}
        />
      </div>
      <div className="space-y-2">
        <Label
          htmlFor="message"
          className="text-xs font-medium tracking-wide text-white/50 uppercase"
        >
          {t.formMessage}
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          placeholder={t.formMessagePh}
          disabled={status === "loading"}
          className={areaClass}
          aria-invalid={status === "error" && !!error}
        />
      </div>

      {status === "error" && error && (
        <p className="text-sm text-red-300" role="alert">
          {error}
        </p>
      )}

      {status === "idle" && (
        <p className="text-sm text-white/45">{t.formHint}</p>
      )}

      <Button
        type="submit"
        disabled={status === "loading"}
        className="az-cta h-12 rounded-md bg-teal px-8 text-sm font-semibold text-ink hover:bg-teal-deep disabled:opacity-60"
      >
        {status === "loading" ? t.formSending : t.formSubmit}
      </Button>
    </form>
  );
}
