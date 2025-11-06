import React from 'react';
import { Quote, HelpCircle, MessageCircle } from 'lucide-react';

const TestimonialCard = ({ quote, author }) => (
  <div className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
    <Quote className="h-6 w-6 text-red-400" />
    <p className="mt-4 text-base text-neutral-200">“{quote}”</p>
    <p className="mt-2 text-sm text-neutral-400">{author}</p>
  </div>
);

const FAQItem = ({ q, a }) => (
  <details className="group rounded-lg bg-white/5 p-5 ring-1 ring-white/10">
    <summary className="flex cursor-pointer list-none items-center justify-between text-left font-medium text-white">
      <span>{q}</span>
      <HelpCircle className="h-5 w-5 text-neutral-300 transition group-open:rotate-180" />
    </summary>
    <p className="mt-3 text-sm text-neutral-300">{a}</p>
  </details>
);

const Footer = () => (
  <footer className="bg-black text-neutral-300">
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-4">
        <div>
          <h3 className="text-white text-xl font-semibold">Dove Mangiare</h3>
          <p className="mt-2 text-sm">Il network italiano dei ristoranti di carne.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold">Città</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="hover:text-white" href="#">Dove Mangiare Verona</a></li>
            <li><a className="hover:text-white" href="#">Dove Mangiare Bologna</a></li>
            <li><a className="hover:text-white" href="#">Dove Mangiare Roma</a></li>
            <li><a className="hover:text-white" href="#">Dove Mangiare Milano</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold">Contatti</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Email: info@dovemangiare.it</li>
            <li>P.IVA: 01234567890</li>
            <li><a className="inline-flex items-center gap-2 text-green-400 hover:text-green-300" href="https://wa.me/390000000000" target="_blank" rel="noreferrer"><MessageCircle className="h-4 w-4" /> WhatsApp</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold">Azione</h4>
          <a href="#cta-form" className="mt-3 inline-flex rounded-md bg-red-600 px-5 py-3 text-sm font-semibold text-white hover:bg-red-700">Unisciti al network</a>
        </div>
      </div>
      <div className="mt-10 border-t border-white/10 pt-6 text-xs text-neutral-500">© {new Date().getFullYear()} Dove Mangiare. Tutti i diritti riservati.</div>
    </div>
  </footer>
);

const TestimonialsFAQ = () => {
  return (
    <section className="bg-neutral-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Testimonianze</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <TestimonialCard quote="Grazie a Dove Mangiare riceviamo prenotazioni ogni settimana!" author="Braceria Fuoco Vivo" />
              <TestimonialCard quote="Finalmente un portale che porta clienti veri, non solo like." author="Steakhouse La Botte" />
              <TestimonialCard quote="Quota chiara, zero commissioni. Semplice e utile." author="Griglieria Il Re della Brace" />
              <TestimonialCard quote="Visibilità reale nella mia città. Consigliato." author="Osteria della Carne" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Domande frequenti</h2>
            <div className="mt-6 space-y-4">
              <FAQItem q="Quanto costa?" a="Solo 500 € l’anno, nessuna commissione." />
              <FAQItem q="Posso recedere?" a="Sì, in qualsiasi momento. Rimani visibile fino alla fine dell’anno già pagato." />
              <FAQItem q="Devo fare pubblicità?" a="No, ci pensiamo noi con articoli e campagne locali mirate alle ricerche di ristoranti di carne." />
              <FAQItem q="Che tipo di clienti arrivano?" a="Persone che cercano esperienze di qualità e sono pronte a prenotare." />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default TestimonialsFAQ;