import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { InstagramIcon } from "@/components/ui/icons/InstagramIcon";
import { Logo } from "@/components/ui/Logo";
import { navLinks } from "@/lib/site-data";
import { buildWhatsappLink, INSTAGRAM_URL, INSTAGRAM_HANDLE } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14 sm:px-8 md:flex-row md:justify-between">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-4 text-sm text-text-secondary">
            Sites que parecem caros. Preço que não é.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-xs font-medium tracking-wide text-text-secondary uppercase">
            Navegação
          </span>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-xs font-medium tracking-wide text-text-secondary uppercase">
            Contato
          </span>
          <a
            href={buildWhatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            <InstagramIcon size={16} />
            {INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>

      <div className="border-t border-border px-5 py-6 sm:px-8">
        <p className="mx-auto max-w-6xl text-xs text-text-secondary">
          © {year} Bora Pro Ar. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
