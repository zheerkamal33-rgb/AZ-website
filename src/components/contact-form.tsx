"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
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
      setError("Please fill in your name, email, and message.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setError("Enter a valid email so we can get back to you.");
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
          Thanks — we got it.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Zheer or Armand will follow up shortly. Prefer a call? Use the numbers
          on the left.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          placeholder="Your name"
          disabled={status === "loading"}
          className="h-11 bg-white"
          aria-invalid={status === "error" && !!error}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          disabled={status === "loading"}
          className="h-11 bg-white"
          aria-invalid={status === "error" && !!error}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          placeholder="What would you like to talk about?"
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
        <p className="text-sm text-muted-foreground">
          Introduce yourself — we usually reply within a day.
        </p>
      )}

      <Button
        type="submit"
        disabled={status === "loading"}
        className="az-cta h-11 bg-ink px-6 text-mist hover:bg-ink-soft"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
