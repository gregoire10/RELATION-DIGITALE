import { motDePasseOublieAction } from "@/app/actions/auth";

export default async function MotDePasseOubliePage({
  searchParams,
}: {
  searchParams: Promise<{ envoye?: string }>;
}) {
  const { envoye } = await searchParams;

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-4 py-16">
      <h1 className="text-2xl font-semibold">Mot de passe oublié</h1>
      <p className="mt-2 text-sm text-ink/60">
        Recevez un lien de réinitialisation par email.
      </p>

      {envoye && (
        <p className="mt-4 rounded-lg bg-blue/10 px-4 py-3 text-sm text-navy">
          Si un compte existe avec cet email, un lien de réinitialisation vient d&apos;être envoyé.
        </p>
      )}

      <form action={motDePasseOublieAction} className="mt-8 space-y-4">
        <div>
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <input id="email" name="email" type="email" required className="mt-1 w-full rounded-lg border border-black/10 px-4 py-2.5 outline-none focus:border-blue" />
        </div>
        <button
          type="submit"
          className="w-full rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
        >
          Envoyer le lien
        </button>
      </form>
    </div>
  );
}
