import { useEffect } from 'react';
import { Star } from 'lucide-react';

const GOOGLE_REVIEW_URL = 'PLACEHOLDER_GOOGLE';
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
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-md flex flex-col items-center text-center">
        <Star size={40} className="text-brand-600 mb-6" fill="currentColor" />

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
            className="w-full flex items-center justify-center gap-3 text-white font-medium tracking-wide py-5 rounded-sm shadow-lg transition-transform active:scale-[0.98]"
            style={{ backgroundColor: '#EA4335' }}
          >
            <Star size={20} fill="currentColor" />
            Google
          </a>

          <a
            href={TOP_DOCTORS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 text-white font-medium tracking-wide py-5 rounded-sm shadow-lg transition-transform active:scale-[0.98]"
            style={{ backgroundColor: '#0057B7' }}
          >
            <Star size={20} fill="currentColor" />
            Top Doctors
          </a>

          <a
            href={DOCTORALIA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 text-white font-medium tracking-wide py-5 rounded-sm shadow-lg transition-transform active:scale-[0.98]"
            style={{ backgroundColor: '#00A651' }}
          >
            <Star size={20} fill="currentColor" />
            Doctoralia
          </a>
        </div>
      </div>

      <p className="text-xs text-slate-400 mt-16">
        Dr. Rodrigo Olivares M. · Cirujano de Cadera
      </p>
    </div>
  );
}
