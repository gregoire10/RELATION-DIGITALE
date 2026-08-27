import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

const PHONES = ["+228 70 67 99 76", "+228 97 87 12 91", "+228 97 74 84 86"];

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Image
              src="/images/branding/relation-digitale-logo.jpeg"
              alt="Relation Digitale"
              width={180}
              height={72}
              className="h-10 w-auto brightness-0 invert opacity-90"
            />
            <p className="mt-4 max-w-sm text-sm text-white/60">
              Votre relation, notre expertise, vos réussites.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/50">
              Liens rapides
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/voyage-etudes" className="hover:text-white">Voyage & Études</Link></li>
              <li><Link href="/realisations" className="hover:text-white">Réalisations</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/50">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {PHONES.map((phone) => (
                <li key={phone} className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-blue-light" />
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-white">
                    {phone}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-blue-light" />
                <a href="mailto:relationdigitale@gmail.com" className="hover:text-white">
                  relationdigitale@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/40">
          © {new Date().getFullYear()} Relation Digitale. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
