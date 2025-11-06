import React from 'react';

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-black text-white">
      <img
        src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1974&auto=format&fit=crop"
        alt="Carne alla griglia"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 py-28 sm:py-32 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full bg-red-600/20 px-3 py-1 text-sm font-medium text-red-200 ring-1 ring-inset ring-red-500/40">
            Dove Mangiare • Ristoranti di carne
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Riempire i tavoli del tuo ristorante di carne ogni mese è finalmente possibile.
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-200">
            Con il sistema annuale Dove Mangiare porti nuovi clienti senza pubblicità, commissioni o stress.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#come-funziona"
              className="rounded-md bg-red-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
            >
              Scopri come funziona
            </a>
            <a
              href="#attiva"
              className="text-base font-semibold text-white/80 hover:text-white"
            >
              Attiva la tua visibilità →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;