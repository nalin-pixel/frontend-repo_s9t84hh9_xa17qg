import React from 'react';
import Hero from './components/Hero.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import WhyChoose from './components/WhyChoose.jsx';
import JoinNetwork from './components/JoinNetwork.jsx';
import TestimonialsFAQ from './components/TestimonialsFAQ.jsx';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/60 bg-black/70 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8 flex items-center justify-between">
          <a href="#" className="text-white text-lg font-semibold tracking-tight">
            Dove <span className="text-red-500">Mangiare</span>
          </a>
          <nav className="hidden gap-6 text-sm text-neutral-300 md:flex">
            <a href="#come-funziona" className="hover:text-white">Come funziona</a>
            <a href="#attiva" className="hover:text-white">Attiva</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
          <a href="#attiva" className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700">
            Attiva a 500 €
          </a>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <HowItWorks />
        <WhyChoose />
        <JoinNetwork />
        <TestimonialsFAQ />

        {/* Simple lead capture/CTA form anchor */}
        <section id="cta-form" className="bg-neutral-950">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold">Attiva la tua visibilità annuale a 500 €</h3>
                <p className="mt-3 text-neutral-300">
                  Compila il modulo: ti contatteremo per completare l’attivazione e pubblicarti nel network.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-neutral-300">
                  <li>• Zero commissioni sulle prenotazioni</li>
                  <li>• Visibilità locale e articoli editoriali</li>
                  <li>• Disdetta in qualsiasi momento</li>
                </ul>
              </div>
              <form className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-white">Nome ristorante</label>
                    <input type="text" className="mt-1 w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-white placeholder:text-neutral-500 focus:border-red-500 focus:outline-none" placeholder="Es. Braceria Fuoco Vivo" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white">Città</label>
                    <input type="text" className="mt-1 w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-white placeholder:text-neutral-500 focus:border-red-500 focus:outline-none" placeholder="Es. Verona" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white">Telefono</label>
                    <input type="tel" className="mt-1 w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-white placeholder:text-neutral-500 focus:border-red-500 focus:outline-none" placeholder="Es. 045 123 4567" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-white">Email</label>
                    <input type="email" className="mt-1 w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-white placeholder:text-neutral-500 focus:border-red-500 focus:outline-none" placeholder="nome@ristorante.it" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-white">Messaggio</label>
                    <textarea rows="4" className="mt-1 w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-white placeholder:text-neutral-500 focus:border-red-500 focus:outline-none" placeholder="Raccontaci la tua proposta di carne e i giorni di maggior affluenza."></textarea>
                  </div>
                </div>
                <button type="button" className="mt-6 w-full rounded-md bg-red-600 px-4 py-3 font-semibold text-white transition hover:bg-red-700">
                  Richiedi informazioni / Attiva
                </button>
                <p className="mt-3 text-center text-xs text-neutral-400">Nessun pagamento ora. Ti ricontattiamo entro 24 ore.</p>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
