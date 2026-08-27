import { FileText, MessageSquare, Package, Smartphone, GraduationCap, Palette } from "lucide-react";

const DOMAINS = [
  { icon: FileText, title: "Démarches administratives", desc: "Inscriptions en ligne et démarches diverses, prises en charge de bout en bout." },
  { icon: MessageSquare, title: "Rédaction & communication", desc: "CV, lettres, rapports, stratégies de contenu et de communication." },
  { icon: Package, title: "Commandes & achats", desc: "Commandes depuis la Chine, groupage et suivi de vos colis." },
  { icon: Smartphone, title: "Technologie", desc: "Téléphones, ordinateurs et accessoires, avec conseil personnalisé." },
  { icon: GraduationCap, title: "Voyage & Études", desc: "Campus France, Belgique et autres destinations : dossiers et procédures." },
  { icon: Palette, title: "Conception graphique", desc: "Logos, cartes de visite, affiches, flyers et supports de communication." },
];

export default function Expertise() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold sm:text-4xl">Nos domaines d&apos;expertise</h2>
        <p className="mt-4 text-ink/60">
          Six pôles d&apos;accompagnement, un seul interlocuteur pour vos démarches.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {DOMAINS.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group rounded-2xl border border-black/5 bg-paper p-6 transition-all hover:-translate-y-1 hover:border-blue/30 hover:shadow-lg hover:shadow-blue/5"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy/10 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-ink/60">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
