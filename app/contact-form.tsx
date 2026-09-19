"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mvzebqzj", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <form onSubmit={handleContactSubmit} className="space-y-4" aria-label="Kontaktný formulár">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-foreground-2 mb-1">Vaše meno</label>
        <input
          id="contact-name"
          type="text"
          name="name"
          autoComplete="name"
          placeholder="Vaše meno"
          required
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
          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent bg-surface text-foreground"
        ></textarea>
      </div>
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
        {formStatus === "error" && "Správu sa nepodarilo odoslať. Skúste to prosím znova alebo nám napíšte e-mail."}
      </p>
    </form>
  );
}
