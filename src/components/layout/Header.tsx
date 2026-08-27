"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const NAV_LINKS = [
  { href: "/a-propos", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/voyage-etudes", label: "Voyage & Études" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const WHATSAPP_NUMBER = "22870679976";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 py-3">
          <Image
            src="/images/branding/relation-digitale-logo.jpeg"
            alt="Relation Digitale"
            width={180}
            height={72}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden lg:flex lg:items-center lg:gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/80 transition-colors hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-navy/15 px-4 py-2 text-sm font-medium text-navy transition-colors hover:bg-navy/5"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <Link
            href="/demande"
            className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
          >
            Faire une demande
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          className="inline-flex items-center justify-center rounded-md p-2 text-ink lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-black/5 bg-white px-4 py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-paper"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/demande"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Faire une demande
          </Link>
        </nav>
      )}
    </header>
  );
}
