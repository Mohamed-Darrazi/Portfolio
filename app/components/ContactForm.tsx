"use client";

import { useState } from "react";
import { FORMSPREE_ENDPOINT } from "@/app/lib/site";

// Formulaire de contact branché sur Formspree (envoi en AJAX, sans quitter
// la page). Comportement inchangé par rapport à la version une seule page.
export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p className="form-success">Message envoyé. Je vous réponds au plus vite.</p>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label className="field">
        <span className="field-label">Nom</span>
        <input
          className="field-input"
          type="text"
          name="name"
          required
          autoComplete="name"
        />
      </label>
      <label className="field">
        <span className="field-label">Email</span>
        <input
          className="field-input"
          type="email"
          name="email"
          required
          autoComplete="email"
        />
      </label>
      <label className="field">
        <span className="field-label">Message</span>
        <textarea
          className="field-input field-textarea"
          name="message"
          rows={5}
          required
        />
      </label>
      <button
        className="btn btn-primary btn-submit"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Envoi…" : "Envoyer"}
      </button>
      {status === "error" && (
        <p className="form-error">
          L&apos;envoi a échoué. Réessayez, ou écrivez-moi via LinkedIn.
        </p>
      )}
    </form>
  );
}
