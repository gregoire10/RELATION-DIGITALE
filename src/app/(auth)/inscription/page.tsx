import Link from "next/link";
import { inscriptionAction } from "@/app/actions/auth";

export default async function InscriptionPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-4 py-16">
      <h1 className="text-2xl font-semibold">Créer un compte</h1>
      <p className="mt-2 text-sm text-ink/60">
        Suivez vos demandes et rendez-vous depuis votre espace client.
      </p>

      {error && (
        <p className="mt-4 rounded-lg bg-accent/10 px-4 py-3 text-sm text-accent">
          {decodeURIComponent(error)}
        </p>
      )}

      <form action={inscriptionAction} className="mt-8 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="prenom" className="text-sm font-medium">Prénom</label>
            <input id="prenom" name="prenom" required className="mt-1 w-full rounded-lg border border-black/10 px-4 py-2.5 outline-none focus:border-blue" />
          </div>
          <div>
            <label htmlFor="nom" className="text-sm font-medium">Nom</label>
            <input id="nom" name="nom" required className="mt-1 w-full rounded-lg border border-black/10 px-4 py-2.5 outline-none focus:border-blue" />
          </div>
        </div>
        <div>
          <label htmlFor="telephone" className="text-sm font-medium">Téléphone</label>
          <input id="telephone" name="telephone" type="tel" required className="mt-1 w-full rounded-lg border border-black/10 px-4 py-2.5 outline-none focus:border-blue" />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <input id="email" name="email" type="email" required className="mt-1 w-full rounded-lg border border-black/10 px-4 py-2.5 outline-none focus:border-blue" />
        </div>
        <div>
          <label htmlFor="password" className="text-sm font-medium">Mot de passe</label>
          <input id="password" name="password" type="password" minLength={8} required className="mt-1 w-full rounded-lg border border-black/10 px-4 py-2.5 outline-none focus:border-blue" />
        </div>
        <button
          type="submit"
          className="w-full rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
        >
          Créer mon compte
        </button>
      </form>

      <p className="mt-6 text-center text-sm">
        Déjà un compte ? <Link href="/connexion" className="text-blue hover:underline">Se connecter</Link>
      </p>
    </div>
  );
}
