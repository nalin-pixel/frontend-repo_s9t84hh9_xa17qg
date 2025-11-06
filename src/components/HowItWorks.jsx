import React from 'react';
import { MapPin, CalendarCheck, BadgeEuro } from 'lucide-react';

const Item = ({ icon: Icon, title, description }) => (
  <div className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-red-600/15 ring-1 ring-red-500/30">
        <Icon className="h-6 w-6 text-red-400" />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <p className="mt-3 text-sm leading-6 text-neutral-300">{description}</p>
  </div>
);

const HowItWorks = () => {
  return (
    <section id="come-funziona" className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Come funziona</h2>
          <p className="mt-3 text-neutral-300">
            Un sistema semplice pensato per riempire i tavoli senza complicazioni.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Item
            icon={MapPin}
            title="Visibilità locale garantita"
            description="Appari nelle ricerche e negli articoli di zona. Ti mettiamo davanti alle persone giuste nella tua città."
          />
          <Item
            icon={CalendarCheck}
            title="Richieste dirette di prenotazione"
            description="Ricevi contatti da clienti reali pronti a prenotare: niente intermediazioni, niente confusione."
          />
          <Item
            icon={BadgeEuro}
            title="Nessuna commissione"
            description="Paghi solo una quota annuale fissa di 500 €. Zero costi nascosti, zero percentuali sulle prenotazioni."
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;