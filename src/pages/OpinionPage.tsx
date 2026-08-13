import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Star } from 'lucide-react';
import { motion } from 'motion/react';

const GOOGLE_REVIEW_URL = 'https://g.page/r/CdzR6hYoj-f2EBM/review';
const TOP_DOCTORS_URL = 'https://www.topdoctors.cl/reviewme/cm9kcmlnby1hbmRyZXMtb2xpdmFyZXMtbWlyYW5kYSYmcHBsLXBob25lJiY3/';
const DOCTORALIA_URL = 'https://www.doctoralia.cl/nova/profiles/doctor/118350';

const PLATFORMS = [
  { name: 'Google', url: GOOGLE_REVIEW_URL, color: '#EA4335' },
  { name: 'Top Doctors', url: TOP_DOCTORS_URL, color: '#0057B7' },
  { name: 'Doctoralia', url: DOCTORALIA_URL, color: '#00A651' },
];

export default function OpinionPage() {
  const contentRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    const overlay = overlayRef.current;
    if (!content || !overlay) return;

    const setSpot = (clientX: number, clientY: number) => {
      const rect = content.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      overlay.style.setProperty('--spot-x', `${x}px`);
      overlay.style.setProperty('--spot-y', `${y}px`);
      overlay.style.opacity = '1';
    };

    const handlePointerMove = (e: PointerEvent) => setSpot(e.clientX, e.clientY);
    const handlePointerLeave = () => { overlay.style.opacity = '0'; };

    content.addEventListener('pointermove', handlePointerMove);
    content.addEventListener('pointerleave', handlePointerLeave);
    return () => {
      content.removeEventListener('pointermove', handlePointerMove);
      content.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  // On touch devices there's no real cursor, so the reveal plays once as an
  // automatic sweep the first time the visitor scrolls, then fades out.
  useEffect(() => {
    const content = contentRef.current;
    const overlay = overlayRef.current;
    if (!content || !overlay) return;
    if (!window.matchMedia('(pointer: coarse)').matches) return;

    const duration = 1600;
    const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

    const runSweep = () => {
      const rect = content.getBoundingClientRect();
      const startY = rect.height * 0.12;
      const endY = rect.height * 0.88;
      const x = rect.width * 0.5;
      const start = performance.now();

      const step = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const y = startY + (endY - startY) * ease(t);
        overlay.style.setProperty('--spot-x', `${x}px`);
        overlay.style.setProperty('--spot-y', `${y}px`);
        overlay.style.opacity = '1';
        if (t < 1) {
          requestAnimationFrame(step);
        } else {
          overlay.style.opacity = '0';
        }
      };
      requestAnimationFrame(step);
    };

    const handleScroll = () => {
      window.removeEventListener('scroll', handleScroll);
      runSweep();
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <div className="relative min-h-screen flex flex-col md:flex-row overflow-hidden bg-brand-900 text-white">
      <div className="relative w-full h-56 md:h-auto md:w-2/5 order-1 md:order-2 shrink-0">
        <img
          src="/DrOlivares.webp"
          alt="Dr. Rodrigo Olivares Miranda"
          className="w-full h-full object-cover object-top"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/10 to-transparent md:bg-gradient-to-r md:from-brand-900 md:via-brand-900/20 md:to-transparent"></div>
      </div>

      <div
        ref={contentRef}
        className="relative flex-1 flex flex-col items-center justify-center text-center px-6 py-12 order-2 md:order-1 overflow-hidden"
      >
        <div
          ref={overlayRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300"
          style={{
            backgroundImage: 'url(/Medical_X-ray_of_human_hip_202608131442.jpeg)',
            backgroundSize: '260px auto',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            mixBlendMode: 'screen',
            filter: 'brightness(1.15) contrast(1.1)',
            WebkitMaskImage: 'radial-gradient(110px circle at var(--spot-x, 50%) var(--spot-y, 50%), black 0%, black 55%, transparent 100%)',
            maskImage: 'radial-gradient(110px circle at var(--spot-x, 50%) var(--spot-y, 50%), black 0%, black 55%, transparent 100%)',
          }}
        />

        <div className="relative z-10 w-full max-w-md flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 border border-white/30 backdrop-blur-sm mb-7"
        >
          <Star size={28} className="text-white" fill="currentColor" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="font-serif text-4xl md:text-5xl leading-tight mb-4 text-white"
        >
          ¿Cómo fue <br /><span className="italic">tu experiencia?</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-brand-50 font-light leading-relaxed mb-10 max-w-sm"
        >
          Tu opinión ayuda a otros pacientes a encontrar el cuidado que necesitan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="w-full flex flex-col gap-4"
        >
          {PLATFORMS.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center gap-4 bg-white/10 border border-white/30 backdrop-blur-sm py-5 px-5 rounded-sm hover:bg-white/20 hover:border-white/50 transition-all group"
            >
              <span
                className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0"
                style={{ backgroundColor: platform.color }}
              >
                <Star size={18} className="text-white" fill="currentColor" />
              </span>
              <span className="font-medium tracking-wide text-white flex-1 text-left">{platform.name}</span>
              <ArrowUpRight size={20} className="text-white/50 group-hover:text-white transition-colors" />
            </a>
          ))}
        </motion.div>
      </div>

      <Link
        to="/"
        className="relative z-10 inline-flex items-center gap-2 text-sm text-brand-100 hover:text-white transition-colors mt-16"
      >
        <ArrowLeft size={16} /> Volver al sitio principal
      </Link>

        <p className="relative z-10 text-xs text-brand-100/70 mt-6">
          Dr. Rodrigo Olivares M. · Cirujano de Cadera
        </p>
      </div>
    </div>
  );
}
