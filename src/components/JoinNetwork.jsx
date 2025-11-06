import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Step = ({ number, title, description }) => (
  <div className="relative rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
    <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white text-sm font-semibold shadow">
      {number}
    </div>
    <h3 className="mt-2 text-lg font-semibold text-white">{title}</h3>
    <p className="mt-2 text-sm leading-6 text-neutral-300">{description}</p>
  </div>
);

const JoinNetwork = () => {
  return (
    <section id="attiva" className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Come entrare nel network</h2>
          <p className="mt-3 text-neutral-300">Tre passi semplici per partire e iniziare a ricevere richieste.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Step number="1" title="Compila il modulo di adesione" description="Inserisci i dati del tuo ristorante e i contatti per le richieste." />
          <Step number="2" title="Inserimento nel circuito" description="Ti pubblichiamo nel portale e avviamo il circuito pubblicitario locale." />
          <Step number="3" title="Ricevi richieste" description="I clienti ti trovano, ti contattano e prenotano direttamente." />
        </div>

        <div className="mt-10 flex justify-center">
          <a href="#cta-form" className="inline-flex items-center gap-2 rounded-md bg-red-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-red-700">
            <CheckCircle2 className="h-5 w-5" />
            Attiva ora la tua visibilità annuale
          </a>
        </div>
      </div>
    </section>
  );
};

export default JoinNetwork;