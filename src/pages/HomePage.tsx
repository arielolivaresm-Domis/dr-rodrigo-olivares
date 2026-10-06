import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronRight, MapPin, Instagram, Menu, X, Star, Shield } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'motion/react';

const BUPA_URL = "https://agendaclinicas.bupa.cl/clinicas/consulta-medica/reserva-consulta-medica?ref=cbs&profesional=Rodrigo+Andres+Olivares+Miranda&especialidad=Traumatologia+Cadera";

const ESPECIALIDADES = [
  {
    label: 'Artroplastia Total',
    slug: '/blog/reemplazo-total-cadera-artroplastia',
    desc: 'Reemplazo total de la articulación coxofemoral. Dr. Olivares realiza artroplastia total de cadera en Clínica Bupa Santiago.',
  },
  {
    label: 'Cirugía de Revisión',
    slug: '/blog/cirugia-revision-cadera',
    desc: 'Revisión de prótesis de cadera fallida o con desgaste. Cirugía compleja realizada por el Dr. Olivares en Clínica Bupa Santiago.',
  },
  {
    label: 'Cadera del Deportista',
    slug: '/blog/cadera-deportista-artroscopia',
    desc: 'Artroscopía de cadera, pinzamiento femoroacetabular (FAI) y lesión de labrum. Tratamiento mínimamente invasivo en Clínica Bupa Santiago.',
  },
  {
    label: 'Fractura de Cadera',
    slug: '/blog/fractura-cadera',
    desc: 'Tratamiento quirúrgico de fracturas de cuello femoral y pertrocantéreas. El Dr. Olivares atiende fracturas de cadera en Clínica Bupa Santiago.',
  },
  {
    label: 'Necrosis Avascular',
    slug: '/blog/necrosis-avascular-cadera',
    desc: 'Osteonecrosis de la cabeza femoral: desde descompresión central hasta reemplazo total según el estadio. Atención en Clínica Bupa Santiago.',
  },
  {
    label: 'Artrosis de Cadera',
    slug: '/blog/artrosis-cadera-sintomas-tratamiento',
    desc: 'Diagnóstico y tratamiento de artrosis de cadera (coxartrosis) en todas sus etapas. Dr. Olivares, Clínica Bupa Santiago.',
  },
];

const NAV_LINKS = [
  { label: 'Especialidades', id: 'especialidades' },
  { label: 'Sobre mí', id: 'sobre-mi' },
  { label: 'Opiniones', id: 'opiniones' },
  { label: 'Ubicación', id: 'ubicacion' },
];

function CountUp({ end, prefix = '', suffix = '', duration = 2000, className = '' }: { end: number, prefix?: string, suffix?: string, duration?: number, className?: string, enableScrollSpy?: boolean, scrollSpyOnce?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (end <= 1) { setCount(end); return; }
    if (!isInView) return;
    let startTime: number | null = null;
    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref} className={className}>{prefix}{count}{suffix}</span>;
}

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string; key?: React.Key }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type PatientReview = { name: string; date: string; text: string; stars?: number };
type ReviewPlatform = {
  id: string;
  name: string;
  rating: string;
  stars: number;
  total: number;
  profileUrl?: string;
  logoUrl?: string;
  reviewUrl?: string;
  reviews: PatientReview[];
};

// Reseñas reales de plataformas externas. Sin JSON-LD (Google no premia reseñas propias/copiadas).
// Excluidas hasta confirmar (posible relación con el doctor/agencia): "Ariel" en Doctoralia 2020 y Top Doctors 2026.
const REVIEW_PLATFORMS: ReviewPlatform[] = [
  {
    id: 'doctoralia',
    name: 'Doctoralia',
    rating: '5.0',
    stars: 5,
    total: 4,
    profileUrl: 'https://www.doctoralia.cl/perfil/rodrigo-olivares-miranda#profile-reviews',
    reviewUrl: 'https://www.doctoralia.cl/anade-opinion/rodrigo-olivares-miranda',
    reviews: [
      { name: 'Alfonso', date: '4 sep 2026', stars: 5, text: 'Muy buena la experiencia lograda en la cirugia a mi cadera... excelente profesional, claro en las indicaciones pre y pos operatorias' },
      { name: 'Mario', date: '1 sep 2026', stars: 5, text: 'Muy claro y sincero, me sugirio tratamiento kinesiologico en vez de quirúrgico y he andado super' },
      { name: 'Mia', date: '13 ago 2026', stars: 5, text: 'Dr muy recomendado, desde la primera consulta hasta el post operatorio a salido todo muy bien' },
    ],
  },
  {
    id: 'google',
    name: 'Google',
    rating: '5.0',
    stars: 5,
    total: 2,
    profileUrl: 'https://g.page/r/CdzR6hYoj-f2EBM',
    reviewUrl: 'https://g.page/r/CdzR6hYoj-f2EBM/review',
    // El logo de Google lleva directo a dejar reseña
    logoUrl: 'https://g.page/r/CdzR6hYoj-f2EBM/review',
    reviews: [
      { name: 'Kazar Propiedades', date: 'Sep 2026', stars: 5, text: 'Elegí al Dr. Olivares por tincada, fui a la consulta y quedé decidida por sus manos y su seguridad al expresarse. Me dejó muyyyyyyyy tranquila y por supuesto, ahora que me operé hace un mes y dos días, lo súper recomiendo. Camino ya sin bastones, la prótesis quedó realmente impecable y yo feliz.' },
      // TODO(Ariel): segunda reseña de Google (texto pendiente)
    ],
  },
  {
    id: 'topdoctors',
    name: 'Top Doctors',
    rating: '5.0',
    stars: 5,
    total: 2,
    profileUrl: 'https://www.topdoctors.cl/doctor/rodrigo-andres-olivares-miranda/#reviews',
    reviewUrl: 'https://www.topdoctors.cl/reviewme/cm9kcmlnby1hbmRyZXMtb2xpdmFyZXMtbWlyYW5kYSYmcHBsLXBob25lJiY3/',
    reviews: [
      { name: 'Estefany B.', date: '13 ago 2026', stars: 5, text: 'Recomiendo a Dr Rodrigo Olivares, fue super acertivo y claro en toda la información entregada. Muy preocupado y atento de mi seguimiento' },
    ],
  },
];
const REVIEWS_VISIBLE = 2;

function PlatformLogo({ id }: { id: string }) {
  if (id === 'google') {
    return (
      <svg width="22" height="22" viewBox="0 0 48 48" aria-hidden="true">
        <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.1C12.4 13.6 17.7 9.5 24 9.5z"/>
        <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.2 5.5-4.7 7.2l7.5 5.8c4.4-4.1 7-10.1 7-17.5z"/>
        <path fill="#FBBC05" d="M10.5 28.7A14.5 14.5 0 0 1 9.5 24c0-1.6.3-3.2.8-4.7l-7.9-6.1A24 24 0 0 0 0 24c0 3.9.9 7.5 2.6 10.8l7.9-6.1z"/>
        <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.5-5.8c-2.1 1.4-4.9 2.3-8.4 2.3-6.3 0-11.6-4.1-13.5-9.8l-7.9 6.1C6.5 42.6 14.6 48 24 48z"/>
      </svg>
    );
  }
  if (id === 'doctoralia') {
    return <img src="/logos/doctoralia.webp" alt="Doctoralia" width={347} height={64} loading="lazy" decoding="async" className="h-7 w-auto" />;
  }
  if (id === 'topdoctors') {
    return <img src="/logos/topdoctors.webp" alt="Top Doctors" width={462} height={80} loading="lazy" decoding="async" className="h-8 w-auto" />;
  }
  return null;
}

function StarRow({ count, size = 14 }: { count: number; size?: number }) {
  return (
    <span className="flex gap-0.5" role="img" aria-label={`${count} de 5 estrellas`}>
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={size} className={i < count ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300'} />
      ))}
    </span>
  );
}

function ReviewCard({ r }: { r: PatientReview; key?: React.Key }) {
  return (
    <figure className="bg-white border border-slate-200 rounded-lg p-5 transition-[transform,box-shadow,border-color] duration-200 ease-out-strong hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 hover:border-white motion-reduce:hover:translate-y-0">
      {r.stars ? <div className="mb-2"><StarRow count={r.stars} size={13} /></div> : null}
      <blockquote className="text-slate-700 font-light leading-relaxed text-sm">“{r.text}”</blockquote>
      <figcaption className="mt-3 text-xs text-slate-500">
        <span className="font-medium text-slate-700">{r.name}</span> · {r.date}
      </figcaption>
    </figure>
  );
}

function PlatformColumn({ p }: { p: ReviewPlatform }) {
  const [open, setOpen] = useState(false);
  const shown = p.reviews.slice(0, REVIEWS_VISIBLE);
  const extra = p.reviews.slice(REVIEWS_VISIBLE);
  const panelId = `reviews-extra-${p.id}`;
  const logo = (
    <span className="flex items-center gap-2 h-11 bg-white rounded-md px-3 origin-left transition-transform duration-200 ease-out-strong group-hover:scale-110 motion-reduce:transform-none">
      <PlatformLogo id={p.id} />
      {p.id === 'google' && <span className="font-semibold text-slate-900 text-lg">{p.name}</span>}
    </span>
  );
  return (
    <div className="flex flex-col gap-4">
      <div className="pb-4 border-b border-brand-800">
        <div className="flex items-center justify-between gap-3">
          {(p.logoUrl ?? p.profileUrl) ? (
            <a
              href={p.logoUrl ?? p.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={p.logoUrl ? `Dejar una reseña del Dr. Olivares en ${p.name} (abre en nueva pestaña)` : `Ver opiniones del Dr. Olivares en ${p.name} (abre en nueva pestaña)`}
              className="group inline-flex rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {logo}
            </a>
          ) : (
            <span className="group inline-flex">{logo}</span>
          )}
          {extra.length > 0 && (
            <button
              type="button"
              onClick={() => setOpen(o => !o)}
              aria-expanded={open}
              aria-controls={panelId}
              className="flex items-center gap-1 text-xs text-brand-100 shrink-0 cursor-pointer hover:text-white transition-colors"
            >
              {open ? 'Ver menos' : `Ver ${extra.length} más`}
              <ChevronRight size={14} className={`transition-transform ${open ? '-rotate-90' : 'rotate-90'}`} />
            </button>
          )}
        </div>
        <span className="flex items-center gap-2 mt-2">
          <StarRow count={p.stars} />
          <span className="text-sm text-brand-100">{p.rating} · {p.total} opiniones</span>
        </span>
      </div>
      {shown.map((r, i) => <ReviewCard key={i} r={r} />)}
      {extra.length > 0 && (
        <div
          id={panelId}
          className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
          {...(!open ? { inert: true } : {})}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-4">
              {extra.map((r, i) => <ReviewCard key={i} r={r} />)}
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
        {p.profileUrl && <a href={p.profileUrl} target="_blank" rel="noopener noreferrer" className="text-brand-100 underline underline-offset-2 hover:text-white transition-colors">Ver perfil en {p.name}</a>}
        {p.reviewUrl && <a href={p.reviewUrl} target="_blank" rel="noopener noreferrer" className="text-brand-100 underline underline-offset-2 hover:text-white transition-colors">Deja tu reseña</a>}
      </div>
    </div>
  );
}

// Video below the fold: no download until near viewport, then autoplay muted.
function LazyVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref, { once: true, margin: '200px' });
  useEffect(() => {
    const v = ref.current;
    if (!inView || !v) return;
    v.src = '/VideoCadera.mp4';
    v.play().catch(() => {});
  }, [inView]);
  return (
    <video
      ref={ref}
      className="max-h-[60vh] w-auto block opacity-90 group-hover:opacity-100 transition-opacity duration-500"
      poster="/VideoCadera-poster.webp"
      width={720}
      height={1280}
      preload="none"
      muted
      loop
      playsInline
      aria-label="Animación de artrosis de cadera y artroplastía"
    />
  );
}

const HOME_FAQ = [
  { q: '¿Cuándo es necesario el reemplazo total de cadera?', a: 'El reemplazo total de cadera (artroplastía) está indicado cuando el dolor limita las actividades diarias, los tratamientos conservadores (medicamentos, fisioterapia, infiltraciones) ya no controlan el dolor, y las imágenes confirman destrucción articular avanzada. La decisión se toma caso a caso con el especialista.' },
  { q: '¿Cuánto dura la recuperación de una cirugía de cadera?', a: 'La recuperación de un reemplazo total de cadera tiene varias etapas: los primeros días el paciente camina con ayuda, a las 6 semanas retoma actividades básicas, y entre 3 y 6 meses logra plena independencia. Los tiempos exactos dependen del estado previo del paciente y la técnica quirúrgica utilizada.' },
  { q: '¿Qué es la artrosis de cadera y cómo se trata?', a: 'La artrosis de cadera es el desgaste progresivo del cartílago articular de la articulación coxofemoral. El tratamiento va de menor a mayor invasividad: analgésicos y antiinflamatorios, fisioterapia, infiltraciones con ácido hialurónico o corticoides, y en casos avanzados, cirugía de reemplazo total de cadera.' },
  { q: '¿Existe cirujano de cadera en Santiago con atención privada?', a: 'Sí. El Dr. Rodrigo Olivares M. es cirujano de cadera y traumatólogo especialista con atención privada en Santiago. Realiza cirugías de reemplazo total de cadera, tratamiento de artrosis, displasia y fracturas. Atiende en Clínica Bupa Santiago.' },
  { q: '¿Cuánto cuesta una operación de cadera en Chile?', a: 'El costo de una cirugía de reemplazo de cadera en Chile varía según la clínica, el tipo de prótesis y la cobertura de salud (Isapre o Fonasa). La consulta con el especialista incluye evaluación y orientación sobre cobertura y costos estimados según el caso específico.' },
  { q: '¿Quién realiza artroplastia total de cadera en Clínica Bupa Santiago?', a: 'El Dr. Rodrigo Olivares M. es el especialista en artroplastia total de cadera de Clínica Bupa Santiago. Traumatólogo subespecializado en cirugía de cadera y pelvis, con Fellowship en Cirugía de Cadera. Agenda en clinicabupasantiago.cl.' },
  { q: '¿Quién opera fracturas de cadera en Clínica Bupa Santiago?', a: 'El Dr. Rodrigo Olivares M. atiende fracturas de cadera en Clínica Bupa Santiago, incluyendo fracturas de cuello femoral y fractura pertrocantérea. Cuenta con experiencia en fijación y en reemplazo articular como tratamiento definitivo según el caso.' },
  { q: '¿Hay especialista en cadera del deportista en Clínica Bupa Santiago?', a: 'Sí. El Dr. Rodrigo Olivares M. atiende patología de cadera del deportista en Clínica Bupa Santiago: pinzamiento femoroacetabular (FAI), lesión de labrum y artroscopía de cadera mínimamente invasiva para pacientes jóvenes y deportistas.' },
  { q: '¿Dónde se trata la necrosis avascular de cadera en Santiago?', a: 'La necrosis avascular de cadera (osteonecrosis de la cabeza femoral) se trata en Clínica Bupa Santiago con el Dr. Rodrigo Olivares M., especialista en cadera. El tratamiento varía según el estadio: desde descompresión central hasta reemplazo total de cadera en etapas avanzadas.' },
];

export default function HomePage() {
  const [pharosAnim, setPharosAnim] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [model1Loaded, setModel1Loaded] = useState(false);
  const [model2Loaded, setModel2Loaded] = useState(false);
  useEffect(() => {
    const s = document.createElement('script');
    s.id = 'home-faqpage-schema';
    s.type = 'application/ld+json';
    s.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: HOME_FAQ.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
    document.head.appendChild(s);
    return () => { document.getElementById('home-faqpage-schema')?.remove(); };
  }, []);

  useEffect(() => {
    const s = document.createElement('script');
    s.id = 'home-videoobject-schema';
    s.type = 'application/ld+json';
    s.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'VideoObject',
      name: 'Artrosis de Cadera — Qué es y cómo se trata | Dr. Rodrigo Olivares M.',
      description: 'Explicación médica de la artrosis de cadera: causas, síntomas, diagnóstico y opciones de tratamiento incluyendo reemplazo total de cadera.',
      thumbnailUrl: 'https://www.drolivaresm.cl/caradro.png',
      contentUrl: 'https://www.drolivaresm.cl/VideoCadera.mp4',
      uploadDate: '2026-06-27T00:00:00-04:00',
      publisher: { '@id': 'https://www.drolivaresm.cl/#business' },
    });
    document.head.appendChild(s);
    return () => { document.getElementById('home-videoobject-schema')?.remove(); };
  }, []);

  useEffect(() => {
    const s = document.createElement('script');
    s.id = 'home-speakable-schema';
    s.type = 'application/ld+json';
    s.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Dr. Rodrigo Olivares M. | Cirujano de Cadera Santiago',
      url: 'https://www.drolivaresm.cl/',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', 'h2', 'meta[name="description"]'],
      },
    });
    document.head.appendChild(s);
    return () => { document.getElementById('home-speakable-schema')?.remove(); };
  }, []);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  const handlePharosClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (pharosAnim) return;
    setPharosAnim(true);
    setTimeout(() => {
      window.open('https://pharoslab.cl/', '_blank');
      setTimeout(() => setPharosAnim(false), 500);
    }, 2000);
  };

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <div className="min-h-screen bg-white text-slate-600 font-sans selection:bg-brand-500 selection:text-white">

      {/* ── NAVBAR ─────────────────────────────────────── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 md:px-12 h-16 flex items-center justify-between">

          <button onClick={() => scrollTo('inicio')} className="flex items-center gap-3 p-2 -m-2">
            <div className={`w-9 h-9 rounded-sm flex items-center justify-center font-serif font-bold text-base transition-all ${navScrolled ? 'bg-brand-900 text-white' : 'bg-white/15 text-white border border-white/30'}`}>
              RO
            </div>
            <span className={`text-sm font-medium hidden md:block transition-colors ${navScrolled ? 'text-slate-900' : 'text-white'}`}>
              Dr. Rodrigo Olivares
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(l => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className={`text-sm transition-colors ${navScrolled ? 'text-slate-600 hover:text-brand-700' : 'text-white/75 hover:text-white'}`}
              >
                {l.label}
              </button>
            ))}
            <Link
              to="/blog"
              className={`text-sm transition-colors ${navScrolled ? 'text-slate-600 hover:text-brand-700' : 'text-white/75 hover:text-white'}`}
            >
              Blog
            </Link>
            <Link
              to="/opinion"
              className={`text-sm transition-colors ${navScrolled ? 'text-slate-600 hover:text-brand-700' : 'text-white/75 hover:text-white'}`}
            >
              Opinión
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={BUPA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:inline-flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-sm transition-all ${navScrolled ? 'bg-brand-700 text-white hover:bg-brand-800' : 'bg-white/15 text-white border border-white/30 hover:bg-white/25'}`}
            >
              Agendar <ArrowUpRight size={14} />
            </a>
            <button
              onClick={() => setMenuOpen(v => !v)}
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
              className={`md:hidden ${navScrolled ? 'text-slate-900' : 'text-white'}`}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white border-b border-slate-100 md:hidden overflow-hidden"
            >
              <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
                {NAV_LINKS.map(l => (
                  <button
                    key={l.id}
                    onClick={() => scrollTo(l.id)}
                    className="text-left text-slate-700 py-3 border-b border-slate-100 last:border-0 text-sm font-medium"
                  >
                    {l.label}
                  </button>
                ))}
                <Link
                  to="/blog"
                  onClick={() => setMenuOpen(false)}
                  className="text-left text-slate-700 py-3 border-b border-slate-100 last:border-0 text-sm font-medium"
                >
                  Blog
                </Link>
                <Link
                  to="/opinion"
                  onClick={() => setMenuOpen(false)}
                  className="text-left text-slate-700 py-3 border-b border-slate-100 last:border-0 text-sm font-medium"
                >
                  Opinión
                </Link>
                <a
                  href={BUPA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center justify-center gap-2 bg-brand-700 text-white px-6 py-3 rounded-sm font-medium text-sm"
                >
                  AGENDAR CONSULTA <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ── HERO ───────────────────────────────────────── */}
      <section id="inicio" className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden bg-brand-900 text-white">
        <div className="absolute inset-0 z-0 flex justify-end">
          <div className="w-full md:w-2/3 h-full relative overflow-hidden">
            <img
              src="/DrOlivares.webp"
              alt="Dr. Rodrigo Olivares Miranda"
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/75 to-brand-900/15 md:via-brand-900/40 md:to-transparent z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/85 via-brand-900/25 to-transparent md:from-brand-900/50 md:via-transparent md:to-transparent z-10"></div>
          </div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-20">
          <div className="max-w-2xl">
            <p className="text-sm tracking-[0.2em] uppercase text-brand-100 mb-4">
              Dr.
            </p>
            <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-6 text-white">
              Rodrigo <br />
              <span className="italic">Olivares Miranda</span>
              <span className="sr-only"> — Cirujano de Cadera Santiago</span>
            </h1>

            <div className="mb-10 max-w-md">
              <h2 className="text-xl font-medium mb-4 text-white">Recupera tu movilidad, transforma tu vida.</h2>
              <p className="text-brand-50 font-light leading-relaxed">
                Mi trabajo consiste en brindarte el mejor tratamiento para tus problemas de cadera,
                proporcionando alivio del dolor y mejorando tu calidad de vida. Me especializo en
                soluciones personalizadas y acompañamiento integral en cada etapa de tu recuperación.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={BUPA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-brand-700 text-white px-8 py-4 rounded-sm font-medium tracking-wide hover:bg-brand-800 transition-all shadow-lg shadow-black/20"
              >
                AGENDAR CONSULTA BUPA
                <ArrowUpRight size={20} />
              </a>
              <Link
                to="/cita"
                className="inline-flex items-center gap-3 bg-white/10 text-white border border-white/30 px-8 py-4 rounded-sm font-medium tracking-wide hover:bg-white/20 transition-all"
              >
                Agendar consulta online
              </Link>
            </div>
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-8 items-end border-t border-brand-800 pt-8">
            <div className="flex items-center gap-4">
              <img src="/caradro.webp" alt="Dr. Rodrigo Olivares" className="w-16 h-16 rounded-full object-cover" referrerPolicy="no-referrer" />
              <div>
                <p className="text-xs text-brand-100 tracking-wider">CLÍNICA BUPA SANTIAGO</p>
                <p className="font-medium text-white">Cirugía de Cadera</p>
              </div>
            </div>
            <div>
              <p className="font-serif text-4xl md:text-5xl mb-1 text-white"><CountUp end={500} prefix="+" /></p>
              <p className="text-sm text-brand-100 font-light">cirugías</p>
            </div>
            <div>
              <p className="font-serif text-4xl md:text-5xl mb-1 text-white"><CountUp end={12} prefix="+" /></p>
              <p className="text-sm text-brand-100 font-light">años experiencia</p>
            </div>
            <div>
              <p className="font-serif text-4xl md:text-5xl mb-1 text-white"><CountUp end={1} /></p>
              <p className="text-sm text-brand-100 font-light">sede Bupa Santiago</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ESPECIALIDADES ────────────────────────────── */}
      <section id="especialidades" className="bg-slate-50 text-slate-900 py-24 relative rounded-t-[3rem] -mt-8 z-30">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center">
          <div className="w-3 h-3 border-b-2 border-r-2 border-brand-600 transform rotate-45 -mt-1"></div>
        </div>
        <div className="container mx-auto px-6 md:px-12 text-center">
          <FadeIn>
            <p className="text-xs tracking-[0.2em] uppercase text-brand-700 font-semibold mb-6">Dr. Rodrigo Olivares Miranda</p>
            <h2 className="font-serif text-4xl md:text-5xl max-w-2xl mx-auto leading-tight mb-16 text-slate-900">
              Un cuidado único para <br /> cada tipo de adversidad:
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {ESPECIALIDADES.map((esp, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -6 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    to={esp.slug}
                    className="block border border-slate-200 bg-white py-7 px-5 hover:border-brand-500 hover:shadow-2xl transition-all rounded-sm text-left group"
                  >
                    <p className="font-serif text-xl text-brand-700 mb-3 group-hover:text-brand-700">{esp.label}</p>
                    <p className="text-sm text-slate-500 font-light leading-relaxed">{esp.desc}</p>
                    <span className="inline-flex items-center gap-1 text-xs text-brand-700 font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      Leer más <ArrowUpRight size={12} />
                    </span>
                  </Link>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO ──────────────────────────────────────── */}
      <section className="bg-slate-50 pb-24">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn className="text-center mb-10">
            <p className="text-xs tracking-[0.2em] uppercase text-brand-700 font-semibold mb-3">Educación al paciente</p>
            <h3 className="font-serif text-3xl md:text-4xl text-slate-900">Así funciona una Artroplastia de Cadera</h3>
          </FadeIn>
          <FadeIn>
            <div className="w-fit mx-auto rounded-2xl overflow-hidden shadow-2xl border border-brand-dark/10 relative group bg-black">
              <div style={{ marginTop: '-25%', marginBottom: '-25%' }}>
                <LazyVideo />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── PROPÓSITO ──────────────────────────────────── */}
      <section className="bg-white relative pb-24">
        <div className="absolute inset-0 overflow-hidden flex items-center justify-center pointer-events-none opacity-[0.03]">
          <span className="font-serif text-[20vw] whitespace-nowrap text-slate-900">Propósito</span>
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <FadeIn>
            <motion.div 
              whileHover={{ scale: 1.02, y: -8 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-brand-900 text-white rounded-2xl p-12 md:p-24 max-w-4xl mx-auto text-center shadow-2xl relative overflow-hidden cursor-pointer"
            >
              <h3 className="font-serif text-3xl md:text-4xl mb-8 relative z-10">Un propósito claro:</h3>
              <p className="text-brand-50 font-light leading-relaxed max-w-2xl mx-auto text-lg mb-10 relative z-10">
                Ayudarte a alcanzar una vida más saludable y plena, con un cuidado humanizado,
                acompañamiento atento y soluciones personalizadas que respetan tu historia y objetivos.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={BUPA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 inline-flex items-center gap-3 bg-white text-brand-900 px-8 py-4 rounded-sm font-medium tracking-wide hover:bg-brand-50 transition-all shadow-lg hover:shadow-xl"
              >
                AGENDAR CONSULTA <ArrowUpRight size={18} />
              </motion.a>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* ── QUIRÓFANO ──────────────────────────────────── */}
      <section className="bg-white pb-24">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="max-w-3xl mx-auto aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/operacion1.webp"
                alt="Dr. Rodrigo Olivares en pabellón quirúrgico"
                width={900}
                height={1600}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── ABOUT ──────────────────────────────────────── */}
      <section id="sobre-mi" className="bg-slate-50 text-slate-900 py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-start gap-16">

            <FadeIn className="md:w-1/3">
              <p className="text-sm text-brand-700 font-semibold mb-2">Mucho gusto, soy el</p>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-slate-900">
                Dr. Rodrigo <br /> Olivares Miranda.
              </h2>
            </FadeIn>

            <FadeIn delay={0.15} className="md:w-1/3 relative flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/5]">
                <div className="absolute inset-0 border-2 border-brand-500/50 rounded-tl-[10rem] rounded-br-[10rem] rounded-tr-3xl rounded-bl-3xl -translate-x-4 translate-y-4 z-0"></div>
                <div className="relative w-full h-full rounded-tl-[10rem] rounded-br-[10rem] rounded-tr-3xl rounded-bl-3xl overflow-hidden z-10 bg-brand-900">
                  <img
                    src="/DrOlivares.webp"
                    alt="Dr. Rodrigo Olivares"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 mix-blend-luminosity hover:mix-blend-normal"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.25} className="md:w-1/3 space-y-6 text-slate-600 font-light">
              <p>
                Con una sólida trayectoria dedicada exclusivamente a la patología de cadera, mi enfoque
                se centra en devolver la movilidad y calidad de vida a mis pacientes mediante técnicas
                quirúrgicas de vanguardia y protocolos de recuperación acelerada.
              </p>
              <div>
                <p className="font-semibold text-slate-800 mb-2">Especialidades</p>
                <ul className="space-y-2 list-none">
                  <li>· <span className="font-medium text-slate-700">Cirugía de Reemplazo Articular:</span> Especialista en Artroplastia de Cadera (Prótesis), con foco en la durabilidad de los componentes y la funcionalidad total.</li>
                  <li>· <span className="font-medium text-slate-700">Preservación de Cadera:</span> Experto en Artroscopía de Cadera, técnica mínimamente invasiva para tratar lesiones de labrum y pinzamiento femoroacetabular en pacientes jóvenes y deportistas.</li>
                  <li>· <span className="font-medium text-slate-700">Cirugía de Pelvis:</span> Tratamiento de fracturas complejas y patologías reconstructivas de la zona pélvica.</li>
                  <li>· <span className="font-medium text-slate-700">Protocolos ERAS:</span> Implementación de programas de Recuperación Acelerada después de la Cirugía, permitiendo que el paciente retome su vida cotidiana en el menor tiempo posible y con menor dolor.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">Formación Académica</p>
                <ul className="space-y-1 list-none">
                  <li>· Médico Cirujano</li>
                  <li>· Especialista en Ortopedia y Traumatología</li>
                  <li>· Subespecialidad (Fellowship): Cirugía de Cadera y Pelvis</li>
                  <li>· Formación Continua: cursos avanzados de preservación de cadera y nuevas tecnologías en artroplastia</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-slate-800 mb-2">Mi Compromiso con el Paciente</p>
                <ul className="space-y-2 list-none">
                  <li>· <span className="font-medium text-slate-700">Diagnóstico Preciso:</span> Uso de tecnología diagnóstica avanzada para identificar el origen exacto del dolor.</li>
                  <li>· <span className="font-medium text-slate-700">Tratamiento Personalizado:</span> No todos los casos requieren cirugía. Priorizamos la opción terapéutica más adecuada al estilo de vida de cada paciente.</li>
                  <li>· <span className="font-medium text-slate-700">Innovación Continua:</span> Aplicación de las últimas técnicas internacionales en cirugía ortopédica para garantizar resultados óptimos.</li>
                  <li>· <span className="font-medium text-slate-700">Respaldo Científico:</span> Todos los tratamientos que recomiendo están basados en evidencia científica actualizada.</li>
                </ul>
              </div>
              <p>
                Atiendo en Santiago, Chile, donde lidero el desarrollo de unidades especializadas en
                patología de cadera, asegurando un estándar de atención multidisciplinario.
              </p>
              <p className="italic text-slate-500 border-l-2 border-brand-500 pl-4">
                "Mi compromiso es acompañar al paciente en cada etapa — desde el diagnóstico inicial
                hasta recuperar la vida que merece."
              </p>
              <a
                href={BUPA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-brand-700 text-white px-7 py-3 rounded-sm font-medium hover:bg-brand-800 transition-all shadow-md shadow-black/15"
              >
                AGENDAR CONSULTA <ArrowUpRight size={18} />
              </a>
            </FadeIn>

          </div>

          {/* 3D Model 1 */}
          <FadeIn className="mt-24 max-w-4xl mx-auto">
            <h3 className="font-serif text-3xl md:text-4xl text-center mb-10 text-slate-900">
              Explora la anatomía de la cadera en 3D
            </h3>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
              {!model1Loaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10 bg-slate-100">
                  <div className="w-8 h-8 border-2 border-brand-600 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-sm text-slate-500">Cargando modelo 3D...</p>
                </div>
              )}
              <iframe
                title="Cadera con Deformidad"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; fullscreen; xr-spatial-tracking"
                src="https://sketchfab.com/models/2e1f343abbdf4bbeb481a076e8674330/embed?autostart=0&ui_infos=0&ui_watermark=0"
                className="w-full h-full"
                onLoad={() => setModel1Loaded(true)}
              ></iframe>
            </div>
            <p style={{fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A'}}>
              <a href="https://sketchfab.com/3d-models/cadera-con-deformidad-2e1f343abbdf4bbeb481a076e8674330?utm_medium=embed&utm_campaign=share-popup&utm_content=2e1f343abbdf4bbeb481a076e8674330" target="_blank" rel="nofollow" style={{fontWeight: 'bold', color: '#1CAAD9'}}>Cadera con Deformidad</a>
              {' '}by{' '}
              <a href="https://sketchfab.com/Biomedic-Lab3D?utm_medium=embed&utm_campaign=share-popup&utm_content=2e1f343abbdf4bbeb481a076e8674330" target="_blank" rel="nofollow" style={{fontWeight: 'bold', color: '#1CAAD9'}}>Biomedic-Lab3D</a>
              {' '}on{' '}
              <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=2e1f343abbdf4bbeb481a076e8674330" target="_blank" rel="nofollow" style={{fontWeight: 'bold', color: '#1CAAD9'}}>Sketchfab</a>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── OPINIONES DE PACIENTES (plataformas externas) ── */}
      <section id="opiniones" className="bg-brand-900 text-white py-24 border-t border-brand-800">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn className="mb-14">
            <h2 className="font-serif text-4xl md:text-5xl">Opiniones de pacientes</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
            {REVIEW_PLATFORMS.map((p, i) => (
              <FadeIn key={p.id} delay={i * 0.1} className={['order-2', 'order-1', 'order-3'][i] + ' md:order-none'}>
                <PlatformColumn p={p} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CREDENCIALES (reemplaza galería stock) ──────── */}
      <section className="bg-slate-900 py-20">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn className="text-center mb-14">
            <p className="text-xs tracking-[0.2em] uppercase text-brand-100 font-semibold mb-3">Trayectoria</p>
            <h3 className="font-serif text-3xl md:text-4xl text-white">Formación y experiencia</h3>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            {[
              { end: 500, prefix: '+', label: 'Cirugías realizadas' },
              { end: 12, prefix: '+', label: 'Años de experiencia' },
              { end: 1, prefix: '', label: 'Sede Clínica Bupa Santiago' },
              { end: 100, prefix: '', suffix: '%', label: 'Dedicación a la cadera' },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="border border-brand-800 rounded-lg p-8 text-center hover:border-brand-600 transition-all hover:bg-brand-800/30 cursor-pointer"
                >
                  <p className="font-serif text-4xl md:text-5xl text-white mb-2">
                    <CountUp end={item.end} prefix={item.prefix} suffix={item.suffix} enableScrollSpy={true} scrollSpyOnce={true} />
                  </p>
                  <p className="text-sm text-brand-100 font-light">{item.label}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Fellowship Cirugía de Cadera y Pelvis', desc: 'Subespecialización de alto nivel en cirugía compleja de cadera y pelvis.' },
              { title: 'Protocolos ERAS', desc: 'Recuperación acelerada post-cirugía. Menos dolor, más pronta autonomía para el paciente.' },
              { title: 'Clínica Bupa Santiago', desc: 'Atención en una de las redes de salud privada más reconocidas de Chile.' },
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <motion.div 
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="border border-brand-800 rounded-lg p-8 hover:border-brand-600 transition-all hover:bg-brand-800/30 cursor-pointer"
                >
                  <p className="font-medium text-white mb-2">{card.title}</p>
                  <p className="text-sm text-brand-100 font-light leading-relaxed">{card.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3D MODEL 2 ─────────────────────────────────── */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn className="max-w-4xl mx-auto">
            <h3 className="font-serif text-3xl md:text-4xl text-center mb-10 text-slate-900">
              Conoce la Prótesis de Cadera en 3D
            </h3>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
              {!model2Loaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10 bg-slate-100">
                  <div className="w-8 h-8 border-2 border-brand-600 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-sm text-slate-500">Cargando modelo 3D...</p>
                </div>
              )}
              <iframe
                title="Prótesis de Cadera"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; fullscreen; xr-spatial-tracking"
                src="https://sketchfab.com/models/419fcac19a4846dc852ea048f15cc85f/embed"
                className="w-full h-full"
                onLoad={() => setModel2Loaded(true)}
              ></iframe>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── UBICACIÓN ──────────────────────────────────── */}
      <section id="ubicacion" className="bg-white text-slate-900 py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <FadeIn className="md:w-1/2 w-full">
              <div className="aspect-video bg-slate-200 w-full rounded-sm overflow-hidden border border-slate-200 relative group">
                <div className="absolute inset-0 bg-brand-900/10 group-hover:bg-transparent transition-colors pointer-events-none z-10"></div>
                <iframe
                  title="Ubicación Clínica Bupa Santiago en Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.331405108428!2d-70.5986873!3d-33.518784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d06f15711683%3A0x6b4033068f23f81e!2sCl%C3%ADnica%20Bupa%20Santiago!5e0!3m2!1sen!2scl!4v1700000000000!5m2!1sen!2scl"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen={false} loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                ></iframe>
              </div>
            </FadeIn>
            <FadeIn delay={0.15} className="md:w-1/2">
              <h2 className="font-serif text-4xl mb-10 text-slate-900">Dirección y horarios:</h2>
              <div className="mb-8">
                <h3 className="font-medium text-lg mb-2 text-slate-900">Dónde estamos:</h3>
                <p className="font-light text-slate-600">Clínica Bupa Santiago</p>
                <p className="font-light text-slate-500">Av. Departamental 1455, La Florida, Región Metropolitana</p>
                <p className="font-light text-slate-400 text-sm mt-1">Accesible desde La Florida, Puente Alto, Macul y toda la Región Metropolitana.</p>
              </div>
              <div className="mb-10">
                <h3 className="font-medium text-lg mb-2 text-slate-900">Horario de Funcionamiento:</h3>
                <p className="font-light text-slate-600">Lunes a Viernes: 08:00 hrs a 18:00 hrs</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="https://waze.com/ul?ll=-33.518784,-70.5986873&navigate=yes" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-brand-700 text-brand-700 px-6 py-3 text-sm font-medium hover:bg-brand-700 hover:text-white transition-colors rounded-sm">
                  <MapPin size={16} /> IR CON WAZE
                </a>
                <a href="https://m.uber.com/ul/?action=setPickup&client_id=uber&pickup=my_location&dropoff[latitude]=-33.518784&dropoff[longitude]=-70.5986873&dropoff[nickname]=Clínica%20Bupa%20Santiago" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-brand-700 text-brand-700 px-6 py-3 text-sm font-medium hover:bg-brand-700 hover:text-white transition-colors rounded-sm">
                  <MapPin size={16} /> IR CON UBER
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ──────────────────────────────────── */}
      <section className="bg-brand-700 py-16 text-white text-center">
        <FadeIn>
          <p className="text-brand-100 mb-3 tracking-wide text-sm uppercase">¿Listo para dar el primer paso?</p>
          <h3 className="font-serif text-3xl md:text-4xl mb-8">Agenda tu consulta hoy</h3>
          <a
            href={BUPA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-brand-700 px-10 py-4 rounded-sm font-medium tracking-wide hover:bg-brand-50 transition-all shadow-xl"
          >
            AGENDAR EN CLÍNICA BUPA SANTIAGO <ArrowUpRight size={20} />
          </a>
        </FadeIn>
      </section>

      {/* ── FOOTER ─────────────────────────────────────── */}
      <footer className="bg-slate-50 text-slate-900 py-8 border-t border-slate-200">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <img src="/caradro.webp" alt="Dr. Rodrigo Olivares" className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
            <div>
              <p className="font-medium text-sm text-slate-900">Dr. Rodrigo Olivares Miranda</p>
              <p className="text-xs text-slate-500 uppercase tracking-wider">Cirugía de Cadera</p>
            </div>
          </div>

          <div className="text-xs text-slate-500">
            Dr. Rodrigo Olivares Miranda © {new Date().getFullYear()} | Todos los derechos reservados
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:gap-6">
            <button onClick={() => setPrivacyOpen(true)} className="text-xs text-slate-500 hover:text-brand-700 transition-colors p-2 -m-2">
              Política de Privacidad
            </button>
            <span className="flex items-center gap-1">
              <span className="text-xs text-slate-500">Creado por</span>
              <a
                href="https://pharoslab.cl/"
                rel="noopener noreferrer"
                className={`pharos-link text-lg font-bold p-2 -m-2 ${pharosAnim ? 'pharos-spin' : ''}`}
                onClick={handlePharosClick}
              >
                <span className={pharosAnim ? '' : 'pharos-glow'}>
                  {pharosAnim ? '🦴' : 'PharosLab'}
                </span>
              </a>
            </span>
            <a href="mailto:Dr.olivaresm@gmail.com" className="text-xs text-slate-500 hover:text-brand-700 transition-colors p-2 -m-2">
              Dr.olivaresm@gmail.com
            </a>
            <a href="https://www.instagram.com/dr.rodrigo.olivares/" target="_blank" rel="noopener noreferrer" aria-label="Instagram del Dr. Rodrigo Olivares" className="text-slate-500 hover:text-brand-700 transition-colors p-2 -m-2">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </footer>

      {/* ── PRIVACY MODAL ──────────────────────────────── */}
      <AnimatePresence>
        {privacyOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-6"
            onClick={() => setPrivacyOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 32, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 32, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl max-w-xl w-full max-h-[80vh] overflow-y-auto p-8 relative"
              onClick={e => e.stopPropagation()}
            >
              <button onClick={() => setPrivacyOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-700">
                <X size={20} />
              </button>
              <div className="flex items-center gap-3 mb-6">
                <Shield size={20} className="text-brand-700" />
                <h3 className="font-serif text-2xl text-slate-900">Política de Privacidad</h3>
              </div>
              <div className="text-sm text-slate-600 space-y-4 font-light leading-relaxed">
                <p><strong className="font-semibold text-slate-800">Responsable:</strong> Dr. Rodrigo Olivares Miranda, médico especialista en Traumatología y Cirugía de Cadera, Santiago, Chile.</p>
                <p><strong className="font-semibold text-slate-800">Datos recopilados:</strong> El sitio cuenta con un formulario de contacto en la sección "Agendar consulta" (nombre, email, teléfono y mensaje), procesado a través de Web3Forms y utilizado exclusivamente para responder tu solicitud. El agendamiento de consultas también puede realizarse a través de la plataforma segura de Clínica Bupa Santiago, sujeta a su propia política de privacidad.</p>
                <p><strong className="font-semibold text-slate-800">Cookies y analítica:</strong> Este sitio utiliza Google Analytics 4 (GA4) para medir visitas de forma anónima y mejorar la experiencia. No se recopilan datos personales identificables. Puede desactivar el seguimiento desde la configuración de su navegador.</p>
                <p><strong className="font-semibold text-slate-800">Contenido:</strong> Todo el contenido médico e imágenes publicadas tienen fines exclusivamente informativos y educativos. No constituyen consejo médico.</p>
                <p><strong className="font-semibold text-slate-800">Contacto:</strong> Para consultas sobre privacidad, puede escribir a <a href="mailto:Dr.olivaresm@gmail.com" className="text-brand-700 underline">Dr.olivaresm@gmail.com</a> o a través de Clínica Bupa Santiago.</p>
                <p className="text-slate-400 text-xs">Última actualización: Marzo 2026.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
