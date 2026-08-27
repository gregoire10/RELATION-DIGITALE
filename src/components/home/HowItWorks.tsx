const STEPS = [
  { n: "01", title: "Choisissez votre service", desc: "Parcourez nos domaines d'expertise et sélectionnez ce dont vous avez besoin." },
  { n: "02", title: "Envoyez votre demande", desc: "Remplissez le formulaire, joignez vos documents si nécessaire." },
  { n: "03", title: "Nous analysons votre demande", desc: "Notre équipe étudie votre dossier et vous contacte si besoin." },
  { n: "04", title: "Suivez son évolution", desc: "Statut en temps réel depuis votre espace client, notifications à chaque étape." },
  { n: "05", title: "Finalisation", desc: "Votre demande est traitée jusqu'à son terme, avec confirmation." },
];

export default function HowItWorks() {
  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold sm:text-4xl">Comment ça fonctionne ?</h2>

        <ol className="mt-12 grid gap-8 md:grid-cols-5">
          {STEPS.map((step, i) => (
            <li key={step.n} className="relative">
              <span className="font-display text-4xl font-semibold text-blue/25">{step.n}</span>
              <h3 className="mt-3 text-base font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-ink/60">{step.desc}</p>
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden
                  className="absolute right-[-1rem] top-3 hidden h-px w-8 bg-blue/20 md:block"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
