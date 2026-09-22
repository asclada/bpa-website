"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { buildWhatsappLink } from "@/lib/constants";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const text = [
      `Oi! Meu nome é ${name || "___"}.`,
      phone ? `Meu WhatsApp/telefone: ${phone}.` : null,
      message ? `O que preciso: ${message}` : "Quero saber mais sobre os sites da Bora Pro Ar.",
    ]
      .filter(Boolean)
      .join(" ");

    window.open(buildWhatsappLink(text), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm text-text-secondary">
          Nome
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Como posso te chamar?"
          className="rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/60 focus:border-accent-muted focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="text-sm text-text-secondary">
          WhatsApp / telefone
        </label>
        <input
          id="phone"
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="(84) 99999-9999"
          className="rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/60 focus:border-accent-muted focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm text-text-secondary">
          O que você precisa?
        </label>
        <textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Conta rapidamente sobre o seu negócio e o tipo de site que procura."
          className="resize-none rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/60 focus:border-accent-muted focus:outline-none"
        />
      </div>

      <Button type="submit" size="md" className="w-full">
        Enviar pelo WhatsApp
        <Send size={16} />
      </Button>
    </form>
  );
}
