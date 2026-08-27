"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle, Calendar, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      {/* Flight path signature element */}
      <svg
        aria-hidden
        viewBox="0 0 1200 700"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="pathGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0f2e7a" stopOpacity="0" />
            <stop offset="45%" stopColor="#1d6bf0" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#4a8dff" stopOpacity="1" />
          </linearGradient>
        </defs>
        <motion.path
          d="M -50 620 C 250 560, 380 420, 520 380 C 700 330, 780 200, 1000 90 L 1260 -40"
          fill="none"
          stroke="url(#pathGradient)"
          strokeWidth="2"
          strokeDasharray="6 10"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: "easeOut", delay: 0.2 }}
        />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 pb-28 pt-20 sm:px-6 lg:px-8 lg:pb-40 lg:pt-28">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-medium uppercase tracking-[0.2em] text-blue-light"
        >
          Relation Digitale
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl"
        >
          Votre relation, notre expertise, vos réussites.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg text-white/70"
        >
          Démarches administratives, communication, technologie, voyage & études :
          un accompagnement professionnel, suivi de bout en bout, à Lomé.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
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
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
          >
            <MessageCircle className="h-4 w-4" />
            Nous contacter sur WhatsApp
          </a>
          <Link
            href="/rendez-vous"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Calendar className="h-4 w-4" />
            Prendre rendez-vous
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
