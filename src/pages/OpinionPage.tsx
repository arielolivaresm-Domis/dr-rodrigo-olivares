import { useEffect } from 'react';
import { Star } from 'lucide-react';

const GOOGLE_REVIEW_URL = 'https://g.page/r/CdzR6hYoj-f2EBM/review';
const TOP_DOCTORS_URL = 'https://www.topdoctors.cl/reviewme/cm9kcmlnby1hbmRyZXMtb2xpdmFyZXMtbWlyYW5kYSYmcHBsLXBob25lJiY3/';
const DOCTORALIA_URL = 'https://www.doctoralia.cl/nova/profiles/doctor/118350';

export default function OpinionPage() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = 'Danos tu opinión | Dr. Rodrigo Olivares M.';

    let meta = document.querySelector('meta[name="robots"]');
    const hadMeta = !!meta;
    const prevContent = meta?.getAttribute('content') ?? null;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'robots');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', 'noindex');

    return () => {
      document.title = prevTitle;
      if (hadMeta && prevContent !== null) {
        meta!.setAttribute('content', prevContent);
      } else if (!hadMeta) {
        meta!.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-md flex flex-col items-center text-center">
        <div className="w-14 h-14 rounded-sm flex items-center justify-center bg-brand-900 mb-6">
          <Star size={26} className="text-white" fill="currentColor" />
        </div>

        <h1 className="font-serif text-3xl md:text-4xl text-slate-900 mb-3">
          ¿Cómo fue tu experiencia?
        </h1>
        <p className="text-slate-500 font-light leading-relaxed mb-10">
          Tu opinión ayuda a otros pacientes a encontrar el cuidado que necesitan.
        </p>

        <div className="w-full flex flex-col gap-4">
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center gap-4 border border-slate-200 bg-white py-5 px-5 rounded-sm hover:border-brand-500 hover:shadow-lg transition-all group"
          >
            <span className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0" style={{ backgroundColor: '#EA4335' }}>
              <Star size={18} className="text-white" fill="currentColor" />
            </span>
            <span className="font-medium tracking-wide text-slate-900 group-hover:text-brand-700">Google</span>
          </a>

          <a
            href={TOP_DOCTORS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center gap-4 border border-slate-200 bg-white py-5 px-5 rounded-sm hover:border-brand-500 hover:shadow-lg transition-all group"
          >
            <span className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0" style={{ backgroundColor: '#0057B7' }}>
              <Star size={18} className="text-white" fill="currentColor" />
            </span>
            <span className="font-medium tracking-wide text-slate-900 group-hover:text-brand-700">Top Doctors</span>
          </a>

          <a
            href={DOCTORALIA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center gap-4 border border-slate-200 bg-white py-5 px-5 rounded-sm hover:border-brand-500 hover:shadow-lg transition-all group"
          >
            <span className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0" style={{ backgroundColor: '#00A651' }}>
              <Star size={18} className="text-white" fill="currentColor" />
            </span>
            <span className="font-medium tracking-wide text-slate-900 group-hover:text-brand-700">Doctoralia</span>
          </a>
        </div>
      </div>

      <p className="text-xs text-slate-400 mt-16">
        Dr. Rodrigo Olivares M. · Cirujano de Cadera
      </p>
    </div>
  );
}
