"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error" | "not_configured";

const inputClasses =
  "w-full border border-border-default bg-surface-card px-4 py-3 text-[15px] text-navy-900 outline-none transition-colors focus:border-navy-900";

const labelClasses =
  "block text-eyebrow font-medium uppercase tracking-[var(--tracking-wide)] text-text-muted";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.status === 501) {
        setStatus("not_configured");
        return;
      }
      if (!res.ok) throw new Error("request_failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-border-default bg-surface-card p-8">
        <p className="font-display text-lg font-medium text-navy-900">
          Vielen Dank für Ihre Nachricht.
        </p>
        <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
          Ich melde mich zeitnah bei Ihnen zurück.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot field — hidden from real visitors, catches simple bots */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Name *
          </label>
          <input id="name" name="name" type="text" required className={`${inputClasses} mt-2`} />
        </div>
        <div>
          <label htmlFor="unternehmen" className={labelClasses}>
            Unternehmen
          </label>
          <input id="unternehmen" name="unternehmen" type="text" className={`${inputClasses} mt-2`} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClasses}>
            E-Mail *
          </label>
          <input id="email" name="email" type="email" required className={`${inputClasses} mt-2`} />
        </div>
        <div>
          <label htmlFor="telefon" className={labelClasses}>
            Telefon (optional)
          </label>
          <input id="telefon" name="telefon" type="tel" className={`${inputClasses} mt-2`} />
        </div>
      </div>

      <div>
        <span className={labelClasses}>Ich bin</span>
        <div className="mt-2 flex flex-wrap gap-4">
          {["Unternehmen", "Personalberatung", "Sonstiges"].map((option) => (
            <label key={option} className="flex items-center gap-2 text-[15px] text-navy-900">
              <input type="radio" name="rolle" value={option} defaultChecked={option === "Unternehmen"} />
              {option}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Ihr Anliegen *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputClasses} mt-2 resize-none`}
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-text-secondary">
        <input type="checkbox" required className="mt-1" />
        <span>
          Ich habe die{" "}
          <a href="/datenschutz" className="underline decoration-taupe-600 underline-offset-4">
            Datenschutzerklärung
          </a>{" "}
          zur Kenntnis genommen. *
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-[var(--radius-sm)] bg-navy-900 px-6 py-3 text-sm font-medium text-text-inverse transition-colors hover:bg-navy-800 disabled:opacity-60"
      >
        {status === "submitting" ? "Wird gesendet …" : "Nachricht senden"}
      </button>

      {status === "not_configured" && (
        <p className="text-sm text-text-secondary">
          Das Kontaktformular ist technisch noch nicht final eingerichtet.
          Bitte schreiben Sie mir in der Zwischenzeit direkt an{" "}
          <a href={`mailto:${site.email}`} className="underline decoration-taupe-600 underline-offset-4">
            {site.email}
          </a>
          .
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-text-secondary">
          Da ist etwas schiefgelaufen. Bitte schreiben Sie mir direkt an{" "}
          <a href={`mailto:${site.email}`} className="underline decoration-taupe-600 underline-offset-4">
            {site.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
