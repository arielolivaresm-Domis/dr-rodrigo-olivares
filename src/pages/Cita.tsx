import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

const BUPA_PROFILE_URL = "https://www.clinicabupasantiago.cl/nuestros-especialistas/dr-rodrigo-olivares-miranda";

// TODO: reemplazar por la access key real de Web3Forms
// (entrar a web3forms.com, ingresar Dr.olivaresm@gmail.com, "Create Access Key" — la entrega al instante)
const WEB3FORMS_ACCESS_KEY = "e5c99e8b-95b5-4a84-92b4-b8e96ebde48d";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.004 2C6.486 2 2 6.486 2 12.004c0 1.887.52 3.653 1.425 5.163L2 22l4.964-1.394A9.96 9.96 0 0012.004 22C17.522 22 22 17.522 22 12.004 22 6.486 17.522 2 12.004 2zm0 18.184a8.153 8.153 0 01-4.417-1.295l-.317-.19-3.05.857.83-3.007-.207-.31a8.16 8.16 0 01-1.25-4.32c0-4.516 3.673-8.19 8.19-8.19 4.516 0 8.19 3.674 8.19 8.19 0 4.517-3.674 8.191-8.19 8.191z" />
    </svg>
  );
}

export default function Cita() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Agendar consulta | Dr. Rodrigo Olivares M.";
    const metaDescEl = document.querySelector('meta[name="description"]');
    const prevDescription = metaDescEl?.getAttribute('content') ?? null;
    metaDescEl?.setAttribute('content', 'Agenda una consulta con el Dr. Rodrigo Olivares M., cirujano de cadera en Santiago. Completa el formulario de contacto o agenda directamente en Clínica Bupa Santiago.');
    return () => {
      document.title = prevTitle;
      if (prevDescription !== null) metaDescEl?.setAttribute('content', prevDescription);
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
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-brand-600 transition-colors">
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
                <p className="font-serif text-xl text-brand-600 mb-2">Agenda directa</p>
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

              <div className="border border-slate-200 rounded-sm p-6">
                <div className="flex items-center gap-3 mb-2">
                  <WhatsAppIcon className="w-6 h-6 text-green-600" />
                  <p className="font-serif text-xl text-slate-900">WhatsApp</p>
                </div>
                <p className="text-sm text-slate-500 font-light leading-relaxed">
                  Número disponible próximamente.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <footer className="bg-slate-50 text-slate-900 py-8 border-t border-slate-200">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">Dr. Rodrigo Olivares Miranda © {new Date().getFullYear()}</p>
          <Link to="/" className="text-xs text-slate-500 hover:text-brand-600 transition-colors">← Volver al inicio</Link>
        </div>
      </footer>
    </div>
  );
}
