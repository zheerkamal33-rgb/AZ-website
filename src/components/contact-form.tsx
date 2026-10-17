"use client";

import { useState, type FormEvent } from "react";
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

export function ContactForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

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
    await new Promise((r) => setTimeout(r, 700));
    setStatus("success");
    form.reset();
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
    <form onSubmit={onSubmit} className="az-contact-form space-y-8" noValidate>
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
