import { createClient } from "@/lib/supabase/server";
import { deconnexionAction } from "@/app/actions/auth";

export default async function AdminDashboardPage() {
  const supabase = await createClient();

  const [{ count: totalDemandes }, { count: nouvelles }, { count: clients }, { count: rdvAvenir }] =
    await Promise.all([
      supabase.from("service_requests").select("*", { count: "exact", head: true }),
      supabase.from("service_requests").select("*", { count: "exact", head: true }).eq("statut", "nouvelle"),
      supabase.from("profiles").select("*", { count: "exact", head: true }).eq("role", "client"),
      supabase
        .from("appointments")
        .select("*", { count: "exact", head: true })
        .gte("date", new Date().toISOString().slice(0, 10)),
    ]);

  const stats = [
    { label: "Demandes totales", value: totalDemandes ?? 0 },
    { label: "Nouvelles demandes", value: nouvelles ?? 0 },
    { label: "Clients", value: clients ?? 0 },
    { label: "RDV à venir", value: rdvAvenir ?? 0 },
  ];

  return (
    <div className="min-h-screen bg-ink text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Tableau de bord admin</h1>
          <form action={deconnexionAction}>
            <button type="submit" className="text-sm text-white/50 hover:text-white">
              Se déconnecter
            </button>
          </form>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-3xl font-semibold">{s.value}</p>
              <p className="mt-1 text-sm text-white/60">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
