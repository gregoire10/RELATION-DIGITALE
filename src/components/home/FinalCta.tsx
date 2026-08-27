import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold sm:text-4xl">
          Prêt à faire avancer votre démarche ?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/70">
          Faites une demande, prenez rendez-vous ou contactez-nous directement — notre équipe vous répond rapidement.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/demande"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
          >
            Faire une demande
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="https://wa.me/22870679976"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
