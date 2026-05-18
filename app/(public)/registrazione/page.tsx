import type { Metadata } from "next";
import { RegisterForm } from "@/components/auth/RegisterForm";

export const metadata: Metadata = {
  title: "Registrazione",
  description: "Crea un account inserzionista o struttura ricettiva su Reverse Booking.",
};

export default function RegistrazionePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">Registrazione</h1>
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
          Compila i campi e accetta i documenti contrattuali per attivare il profilo.
        </p>
      </header>
      <div className="mt-10">
        <RegisterForm />
      </div>
    </div>
  );
}
