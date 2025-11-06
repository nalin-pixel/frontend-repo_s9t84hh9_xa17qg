import React from 'react';
import { Users, TrendingUp, ShieldCheck } from 'lucide-react';

const Stat = ({ icon: Icon, label, value }) => (
  <div className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-red-600/15 ring-1 ring-red-500/30">
        <Icon className="h-6 w-6 text-red-400" />
      </div>
      <div>
        <p className="text-sm text-neutral-300">{label}</p>
        <p className="text-xl font-semibold text-white">{value}</p>
      </div>
    </div>
  </div>
);

const WhyChoose = () => {
  return (
    <section className="bg-neutral-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Perché scegliere Dove Mangiare</h2>
            <p className="mt-4 text-neutral-300">
              A differenza di TripAdvisor o TheFork, non ti facciamo competere con sconti. Ti portiamo clienti veri che scelgono la qualità.
            </p>
            <ul className="mt-6 space-y-3 text-neutral-200">
              <li className="flex items-start gap-2"><ShieldCheck className="mt-1 h-5 w-5 text-red-400" /> Zero commissioni, zero costi nascosti.</li>
              <li className="flex items-start gap-2"><TrendingUp className="mt-1 h-5 w-5 text-red-400" /> Visibilità reale su ricerche locali e articoli editoriali.</li>
              <li className="flex items-start gap-2"><Users className="mt-1 h-5 w-5 text-red-400" /> Clienti che cercano carne di qualità, non solo sconti.</li>
            </ul>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <Stat icon={Users} label="Ristoranti iscritti" value="30+" />
            <Stat icon={TrendingUp} label="Ricerche mensili" value="1.200+" />
            <Stat icon={ShieldCheck} label="Commissioni" value="Zero" />
            <div className="rounded-xl bg-gradient-to-br from-red-600/20 via-red-700/10 to-transparent p-6 ring-1 ring-white/10">
              <p className="text-sm text-neutral-300">Quota fissa annua</p>
              <p className="mt-1 text-3xl font-bold text-white">500 €</p>
              <p className="mt-2 text-sm text-neutral-400">Fatturazione semplice, senza sorprese.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;