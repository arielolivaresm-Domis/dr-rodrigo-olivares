import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';

export default function CitaGracias() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Solicitud recibida | Dr. Rodrigo Olivares M.";
    return () => { document.title = prevTitle; };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-600 font-sans flex flex-col">
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

      <section className="flex-1 flex items-center justify-center py-24">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-lg">
          <CheckCircle size={56} className="text-brand-600 mx-auto mb-6" />
          <h1 className="font-serif text-3xl md:text-4xl text-slate-900 mb-4">Solicitud recibida</h1>
          <p className="text-slate-500 font-light leading-relaxed mb-10">
            El Dr. Olivares se contactará a la brevedad.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-3 bg-brand-600 text-white px-8 py-4 rounded-sm font-medium tracking-wide hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/30"
          >
            <ArrowLeft size={18} /> VOLVER AL INICIO
          </Link>
        </div>
      </section>

      <footer className="bg-slate-50 text-slate-900 py-8 border-t border-slate-200">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <p className="text-xs text-slate-500">Dr. Rodrigo Olivares Miranda © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}
