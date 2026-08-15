import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

const BUPA_PROFILE_URL = "https://www.clinicabupasantiago.cl/nuestros-especialistas/dr-rodrigo-olivares-miranda";

// TODO: reemplazar por la access key real de Web3Forms
// (entrar a web3forms.com, ingresar Dr.olivaresm@gmail.com, "Create Access Key" — la entrega al instante)
const WEB3FORMS_ACCESS_KEY = "e5c99e8b-95b5-4a84-92b4-b8e96ebde48d";

export default function Cita() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Agendar consulta | Dr. Rodrigo Olivares M.";
    const metaDescEl = document.querySelector('meta[name="description"]');
    const prevDescription = metaDescEl?.getAttribute('content') ?? null;
    metaDescEl?.setAttribute('content', 'Agenda una consulta con el Dr. Rodrigo Olivares M., cirujano de cadera en Santiago. Completa el formulario de contacto o agenda directamente en Clínica Bupa Santiago.');
    const canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const prevCanonical = canonicalEl?.getAttribute('href') ?? null;
    canonicalEl?.setAttribute('href', 'https://www.drolivaresm.cl/cita');
    const ogUrlEl = document.querySelector('meta[property="og:url"]') as HTMLMetaElement | null;
    const prevOgUrl = ogUrlEl?.getAttribute('content') ?? null;
    ogUrlEl?.setAttribute('content', 'https://www.drolivaresm.cl/cita');
    return () => {
      document.title = prevTitle;
      if (prevDescription !== null) metaDescEl?.setAttribute('content', prevDescription);
      if (prevCanonical !== null) canonicalEl?.setAttribute('href', prevCanonical);
      if (prevOgUrl !== null) ogUrlEl?.setAttribute('content', prevOgUrl);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-600 font-sans">
      <nav className="border-b border-slate-100">
        <div className="container mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-sm flex items-center justify-center font-serif font-bold text-base bg-brand-900 text-white">RO</div>
            <span className="text-sm font-medium text-slate-900 hidden md:block">Dr. Rodrigo Olivares</span>
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-brand-700 transition-colors">
            <ArrowLeft size={16} /> Inicio
          </Link>
        </div>
      </nav>

      <section className="bg-brand-900 text-white py-20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-brand-100 mb-4">Dr. Rodrigo Olivares Miranda</p>
          <h1 className="font-serif text-4xl md:text-5xl mb-4">Agendar consulta</h1>
          <p className="text-brand-50 font-light max-w-xl mx-auto leading-relaxed">
            Completa el formulario y te contactaremos a la brevedad, o agenda directamente
            tu hora en Clínica Bupa Santiago.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">

            <div className="md:col-span-3">
              <h2 className="font-serif text-2xl text-slate-900 mb-6">Cuéntanos tu caso</h2>
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="space-y-5"
              >
                <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
                <input type="hidden" name="subject" value="Nueva solicitud de consulta — drolivaresm.cl" />
                <input type="hidden" name="redirect" value="https://www.drolivaresm.cl/cita/gracias" />
                <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-slate-700 mb-2">Nombre</label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    className="w-full border border-slate-200 rounded-sm px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full border border-slate-200 rounded-sm px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-slate-700 mb-2">Teléfono</label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    required
                    className="w-full border border-slate-200 rounded-sm px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-slate-700 mb-2">Mensaje</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={5}
                    required
                    className="w-full border border-slate-200 rounded-sm px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 bg-brand-600 text-white px-8 py-4 rounded-sm font-medium tracking-wide hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/30"
                >
                  ENVIAR SOLICITUD <ArrowUpRight size={20} />
                </button>
              </form>
            </div>

            <div className="md:col-span-2 space-y-6">
              <div className="border border-slate-200 rounded-sm p-6">
                <p className="font-serif text-xl text-brand-700 mb-2">Agenda directa</p>
                <p className="text-sm text-slate-500 font-light leading-relaxed mb-5">
                  Reserva tu hora directamente en la plataforma de Clínica Bupa Santiago.
                </p>
                <a
                  href={BUPA_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-600 text-white px-5 py-3 text-sm font-medium rounded-sm hover:bg-brand-700 transition-colors"
                >
                  VER EN CLÍNICA BUPA <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <footer className="bg-slate-50 text-slate-900 py-8 border-t border-slate-200">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">Dr. Rodrigo Olivares Miranda © {new Date().getFullYear()}</p>
          <Link to="/" className="text-xs text-slate-500 hover:text-brand-700 transition-colors">← Volver al inicio</Link>
        </div>
      </footer>
    </div>
  );
}
