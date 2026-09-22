"use client";

import { useState } from "react";

const CONTACT_MAILTO = "mailto:arenibus@polascin.net";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvzebqzj";

function buildMailto(name: string, email: string, message: string) {
  const subject = encodeURIComponent("Správa z webu Arenibus");
  const body = encodeURIComponent(`Meno: ${name}\nE-mail: ${email}\n\n${message}`);
  return `${CONTACT_MAILTO}?subject=${subject}&body=${body}`;
}

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [fallbackMailto, setFallbackMailto] = useState(CONTACT_MAILTO);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const mailto = buildMailto(name, email, message);
    setFallbackMailto(mailto);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
        return;
      }
    } catch {
      // Parent-host CSP may block Formspree; fall through to the mailto fallback.
    }

    setFormStatus("error");
  };

  return (
    <form onSubmit={handleContactSubmit} className="space-y-4" aria-label="Kontaktný formulár">
      <noscript>
        <p className="text-sm text-foreground-2">
          Bez JavaScriptu nám napíšte na{" "}
          <a href={CONTACT_MAILTO} className="text-brand hover:text-brand-strong transition-colors">
            arenibus@polascin.net
          </a>
          .
        </p>
      </noscript>
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-foreground-2 mb-1">Vaše meno</label>
        <input
          id="contact-name"
          type="text"
          name="name"
          autoComplete="name"
          placeholder="Vaše meno"
          required
          maxLength={200}
          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent bg-surface text-foreground"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-foreground-2 mb-1">Váš e-mail</label>
        <input
          id="contact-email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="vas@email.sk"
          required
          maxLength={254}
          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent bg-surface text-foreground"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-foreground-2 mb-1">Vaša správa</label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Vaša správa"
          rows={4}
          required
          maxLength={5000}
          autoComplete="off"
          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent bg-surface text-foreground"
        ></textarea>
      </div>
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        hidden
        className="hidden"
      />
      <button
        type="submit"
        disabled={formStatus === "submitting"}
        className="w-full px-6 py-3 bg-brand text-brand-text rounded-lg font-semibold hover:bg-brand-strong transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {formStatus === "submitting" ? "Odosielam..." : "Odoslať Správu"}
      </button>
      <p
        role={formStatus === "error" ? "alert" : "status"}
        aria-live={formStatus === "error" ? "assertive" : "polite"}
        className={
          formStatus === "success"
            ? "text-ok font-medium text-center"
            : formStatus === "error"
              ? "text-danger font-medium text-center"
              : "sr-only"
        }
      >
        {formStatus === "success" && "Správa bola úspešne odoslaná. Čoskoro sa vám ozveme."}
        {formStatus === "error" && (
          <>
            Správu sa nepodarilo odoslať cez formulár. Napíšte nám na{" "}
            <a
              href={CONTACT_MAILTO}
              onClick={(event) => {
                if (fallbackMailto !== CONTACT_MAILTO) {
                  event.preventDefault();
                  window.location.href = fallbackMailto;
                }
              }}
              className="underline text-brand hover:text-brand-strong transition-colors"
            >
              arenibus@polascin.net
            </a>
            .
          </>
        )}
      </p>
    </form>
  );
}
