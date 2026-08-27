import { createClient } from "@/lib/supabase/server";
import { deconnexionAction } from "@/app/actions/auth";

export default async function EspaceClientPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: profile } = await supabase
    .from("profiles")
    .select("nom, prenom")
    .eq("id", user?.id)
    .single();

  const { data: demandes } = await supabase
    .from("service_requests")
    .select("id, description, statut, created_at")
    .eq("client_id", user?.id)
    .order("created_at", { ascending: false });

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">
            Bonjour {profile?.prenom ?? ""} 👋
          </h1>
          <p className="mt-1 text-sm text-ink/60">Voici le suivi de vos demandes.</p>
        </div>
        <form action={deconnexionAction}>
          <button type="submit" className="text-sm text-ink/60 hover:text-accent">
            Se déconnecter
          </button>
        </form>
      </div>

      <div className="mt-10">
        {!demandes || demandes.length === 0 ? (
          <p className="rounded-2xl border border-black/5 bg-paper p-8 text-center text-sm text-ink/60">
            Vous n&apos;avez pas encore de demande. Depuis la page Services, vous pouvez en créer une.
          </p>
        ) : (
          <ul className="space-y-3">
            {demandes.map((d) => (
              <li key={d.id} className="rounded-2xl border border-black/5 bg-paper p-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium capitalize">{d.statut.replace(/_/g, " ")}</span>
                  <span className="text-xs text-ink/40">
                    {new Date(d.created_at).toLocaleDateString("fr-FR")}
                  </span>
                </div>
                <p className="mt-2 text-sm text-ink/70">{d.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
