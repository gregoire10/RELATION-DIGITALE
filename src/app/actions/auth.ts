"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function connexionAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const next = (formData.get("next") as string) || "/espace-client";

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    redirect(`/connexion?error=${encodeURIComponent(error.message)}`);
  }

  revalidatePath("/", "layout");
  redirect(next);
}

export async function inscriptionAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const nom = formData.get("nom") as string;
  const prenom = formData.get("prenom") as string;
  const telephone = formData.get("telephone") as string;

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    redirect(`/inscription?error=${encodeURIComponent(error.message)}`);
  }

  if (data.user) {
    await supabase.from("profiles").insert({
      id: data.user.id,
      nom,
      prenom,
      telephone,
      role: "client",
    });
  }

  revalidatePath("/", "layout");
  redirect("/espace-client");
}

export async function motDePasseOublieAction(formData: FormData) {
  const email = formData.get("email") as string;
  const supabase = await createClient();

  await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/reinitialiser-mot-de-passe`,
  });

  redirect("/mot-de-passe-oublie?envoye=1");
}

export async function deconnexionAction() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect("/");
}
