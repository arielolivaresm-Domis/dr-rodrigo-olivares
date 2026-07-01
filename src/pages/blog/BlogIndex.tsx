import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

const ARTICLES = [
  {
    slug: 'artrosis-cadera-sintomas-tratamiento',
    title: 'Artrosis de Cadera: Síntomas y Tratamiento',
    description: 'Primeros síntomas, diagnóstico y opciones de tratamiento, desde manejo conservador hasta reemplazo total de cadera.',
    date: '1 de julio de 2026',
  },
];

export default function BlogIndex() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'Blog | Dr. Rodrigo Olivares M. — Ortopedista Cadera Santiago';
    return () => { document.title = prevTitle; };
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

      <div className="container mx-auto px-6 md:px-12 py-16 max-w-3xl">
        <p className="text-xs tracking-[0.2em] uppercase text-brand-600 font-semibold mb-3">Blog</p>
        <h1 className="font-serif text-3xl md:text-4xl text-slate-900 mb-10">
          Artículos sobre salud de cadera
        </h1>

        <div className="space-y-6">
          {ARTICLES.map(a => (
            <Link
              key={a.slug}
              to={`/blog/${a.slug}`}
              className="block border border-slate-200 rounded-sm p-6 hover:border-brand-500 hover:shadow-md transition-all"
            >
              <p className="text-xs text-slate-400 mb-2">{a.date}</p>
              <h2 className="font-serif text-xl text-slate-900 mb-2">{a.title}</h2>
              <p className="text-slate-600 font-light mb-3">{a.description}</p>
              <span className="inline-flex items-center gap-2 text-sm text-brand-600 font-medium">
                Leer artículo <ArrowUpRight size={14} />
              </span>
            </Link>
          ))}
        </div>

        <p className="text-sm text-slate-400 mt-10">Más artículos próximamente.</p>
      </div>
    </div>
  );
}
