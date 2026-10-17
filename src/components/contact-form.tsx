"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "loading" | "success" | "error";

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
      <div
        className="rounded-md border border-teal/40 bg-teal/10 px-5 py-8"
        role="status"
      >
        <p className="font-display text-lg font-semibold text-ink">
          {t.formSuccessTitle}
        </p>
        <p className="mt-2 text-sm text-muted-foreground">{t.formSuccessBody}</p>
        <Button
          type="button"
          variant="outline"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          {t.formAnother}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="space-y-2">
        <Label htmlFor="name">{t.formName}</Label>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          placeholder={t.formNamePh}
          disabled={status === "loading"}
          className="h-11 bg-white"
          aria-invalid={status === "error" && !!error}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">{t.formEmail}</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder={t.formEmailPh}
          disabled={status === "loading"}
          className="h-11 bg-white"
          dir="ltr"
          aria-invalid={status === "error" && !!error}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">{t.formMessage}</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          placeholder={t.formMessagePh}
          disabled={status === "loading"}
          className="min-h-28 bg-white"
          aria-invalid={status === "error" && !!error}
        />
      </div>

      {status === "error" && error && (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      )}

      {status === "idle" && (
        <p className="text-sm text-muted-foreground">{t.formHint}</p>
      )}

      <Button
        type="submit"
        disabled={status === "loading"}
        className="az-cta h-11 bg-ink px-6 text-mist hover:bg-ink-soft"
      >
        {status === "loading" ? t.formSending : t.formSubmit}
      </Button>
    </form>
  );
}
