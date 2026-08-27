import Link from "next/link";
import { connexionAction } from "@/app/actions/auth";

export default async function ConnexionPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; next?: string }>;
}) {
  const { error, next } = await searchParams;

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-4 py-16">
      <h1 className="text-2xl font-semibold">Connexion</h1>
      <p className="mt-2 text-sm text-ink/60">
        Accédez à votre espace client Relation Digitale.
      </p>

      {error && (
        <p className="mt-4 rounded-lg bg-accent/10 px-4 py-3 text-sm text-accent">
          {decodeURIComponent(error)}
        </p>
      )}

      <form action={connexionAction} className="mt-8 space-y-4">
        <input type="hidden" name="next" value={next ?? "/espace-client"} />
        <div>
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-lg border border-black/10 px-4 py-2.5 outline-none focus:border-blue"
          />
        </div>
        <div>
          <label htmlFor="password" className="text-sm font-medium">Mot de passe</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="mt-1 w-full rounded-lg border border-black/10 px-4 py-2.5 outline-none focus:border-blue"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
        >
          Se connecter
        </button>
      </form>

      <div className="mt-6 flex justify-between text-sm">
        <Link href="/mot-de-passe-oublie" className="text-blue hover:underline">
          Mot de passe oublié ?
        </Link>
        <Link href="/inscription" className="text-blue hover:underline">
          Créer un compte
        </Link>
      </div>
    </div>
  );
}
