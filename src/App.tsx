import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, MapPin, Instagram, Menu, X, Star, Shield } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'motion/react';

const BUPA_URL = "https://agendaclinicas.bupa.cl/clinicas/consulta-medica/reserva-consulta-medica?ref=cbs&profesional=Rodrigo+Andres+Olivares+Miranda&especialidad=Traumatologia+Cadera";

const NAV_LINKS = [
  { label: 'Especialidades', id: 'especialidades' },
  { label: 'Sobre mí', id: 'sobre-mi' },
  { label: 'Testimonios', id: 'testimonios' },
  { label: 'Ubicación', id: 'ubicacion' },
];

const TESTIMONIALS = [
  { name: "María González", date: "Enero 2025", text: "El Dr. Olivares es un excelente profesional. Me explicó todo detalladamente antes de mi cirugía de reemplazo de cadera. La recuperación fue excelente y ahora puedo caminar sin dolor. ¡Totalmente recomendado!" },
  { name: "Carlos Mendoza", date: "Noviembre 2024", text: "Atención maravillosa. El equipo médico es muy amable y educado, y el doctor es simplemente competentísimo. Me operó de una fractura y el resultado ha sido inmejorable." },
  { name: "Ana Silva", date: "Febrero 2025", text: "Llevo años atendiéndome con este excelente profesional y su equipo. Totalmente recomendado, agradezco toda la atención dirigida a lo largo de este tiempo. Que Dios lo bendiga inmensamente." },
];

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

export default function App() {
  const [olvaidAnim, setOlvaidAnim] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [navScrolled, setNavScrolled] = useState(false);
  const [model1Loaded, setModel1Loaded] = useState(false);
  const [model2Loaded, setModel2Loaded] = useState(false);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleOlvaidClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (olvaidAnim) return;
    setOlvaidAnim(true);
    setTimeout(() => {
      window.open('https://olvaid-studio.github.io', '_blank');
      setTimeout(() => setOlvaidAnim(false), 500);
    }, 1800);
  };

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const prevTestimonial = () => setTestimonialIdx(i => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const nextTestimonial = () => setTestimonialIdx(i => (i + 1) % TESTIMONIALS.length);

  return (
    <div className="min-h-screen bg-white text-slate-600 font-sans selection:bg-brand-500 selection:text-white">

      {/* ── NAVBAR ─────────────────────────────────────── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 md:px-12 h-16 flex items-center justify-between">

          <button onClick={() => scrollTo('inicio')} className="flex items-center gap-3">
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
                className={`text-sm transition-colors ${navScrolled ? 'text-slate-600 hover:text-brand-600' : 'text-white/75 hover:text-white'}`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={BUPA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:inline-flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-sm transition-all ${navScrolled ? 'bg-brand-600 text-white hover:bg-brand-700' : 'bg-white/15 text-white border border-white/30 hover:bg-white/25'}`}
            >
              Agendar <ArrowUpRight size={14} />
            </a>
            <button
              onClick={() => setMenuOpen(v => !v)}
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
                <a
                  href={BUPA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center justify-center gap-2 bg-brand-600 text-white px-6 py-3 rounded-sm font-medium text-sm"
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
          <div className="w-full md:w-2/3 h-full relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/40 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/50 via-transparent to-transparent z-10"></div>
            <img
              src="/DrOlivares.png"
              alt="Dr. Rodrigo Olivares Miranda"
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-20">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm tracking-[0.2em] uppercase text-brand-100 mb-4"
            >
              Dr.
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="font-serif text-5xl md:text-7xl leading-tight mb-6 text-white"
            >
              Rodrigo <br />
              <span className="italic">Olivares Miranda</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="mb-10 max-w-md"
            >
              <h2 className="text-xl font-medium mb-4 text-white">Recupera tu movilidad, transforma tu vida.</h2>
              <p className="text-brand-50 font-light leading-relaxed">
                Mi trabajo consiste en brindarte el mejor tratamiento para tus problemas de cadera,
                proporcionando alivio del dolor y mejorando tu calidad de vida. Me especializo en
                soluciones personalizadas y acompañamiento integral en cada etapa de tu recuperación.
              </p>
            </motion.div>

            <motion.a
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              href={BUPA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-600 text-white px-8 py-4 rounded-sm font-medium tracking-wide hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/30"
            >
              AGENDAR CONSULTA
              <ArrowUpRight size={20} />
            </motion.a>
          </div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-8 items-end border-t border-brand-800 pt-8">
            <div className="flex items-center gap-4">
              <img src="/caradro.png" alt="Profile" className="w-16 h-16 rounded-full object-cover" referrerPolicy="no-referrer" />
              <div>
                <p className="text-xs text-brand-100 tracking-wider">CLÍNICAS BUPA</p>
                <p className="font-medium text-white">Cirugía de Cadera</p>
              </div>
            </div>
            <div>
              <p className="font-serif text-4xl md:text-5xl mb-1 text-white">+500</p>
              <p className="text-sm text-brand-100 font-light">cirugías</p>
            </div>
            <div>
              <p className="font-serif text-4xl md:text-5xl mb-1 text-white">+12</p>
              <p className="text-sm text-brand-100 font-light">años experiencia</p>
            </div>
            <div>
              <p className="font-serif text-4xl md:text-5xl mb-1 text-white">3</p>
              <p className="text-sm text-brand-100 font-light">sedes Bupa</p>
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
            <p className="text-xs tracking-[0.2em] uppercase text-brand-600 font-semibold mb-6">Dr. Rodrigo Olivares Miranda</p>
            <h2 className="font-serif text-4xl md:text-5xl max-w-2xl mx-auto leading-tight mb-16 text-slate-900">
              Un cuidado único para <br /> cada tipo de adversidad:
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {["Artroplastia Total", "Cirugía de Revisión", "Cadera del Deportista", "Fractura de Cadera", "Necrosis Avascular", "Artrosis de Cadera"].map((s, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="border border-slate-200 bg-white py-8 px-4 hover:border-brand-500 hover:shadow-md transition-all cursor-pointer rounded-sm">
                  <p className="font-serif text-xl text-brand-600">{s}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO ──────────────────────────────────────── */}
      <section className="bg-slate-50 pb-24">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn className="text-center mb-10">
            <p className="text-xs tracking-[0.2em] uppercase text-brand-600 font-semibold mb-3">Educación al paciente</p>
            <h3 className="font-serif text-3xl md:text-4xl text-slate-900">Así funciona una Artroplastia de Cadera</h3>
          </FadeIn>
          <FadeIn>
            <div className="w-fit mx-auto rounded-2xl overflow-hidden shadow-2xl border border-brand-dark/10 relative group bg-black">
              <div style={{ marginTop: '-25%', marginBottom: '-25%' }}>
                <video
                  className="max-h-[60vh] w-auto block opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  autoPlay muted loop playsInline
                >
                  <source src="/VideoCadera.mp4" type="video/mp4" />
                </video>
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
            <div className="bg-brand-900 text-white rounded-2xl p-12 md:p-24 max-w-4xl mx-auto text-center shadow-2xl">
              <h3 className="font-serif text-3xl md:text-4xl mb-8">Un propósito claro:</h3>
              <p className="text-brand-50 font-light leading-relaxed max-w-2xl mx-auto text-lg mb-10">
                Ayudarte a alcanzar una vida más saludable y plena, con un cuidado humanizado,
                acompañamiento atento y soluciones personalizadas que respetan tu historia y objetivos.
              </p>
              <a
                href={BUPA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-brand-900 px-8 py-4 rounded-sm font-medium tracking-wide hover:bg-brand-50 transition-all"
              >
                AGENDAR CONSULTA <ArrowUpRight size={18} />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── ABOUT ──────────────────────────────────────── */}
      <section id="sobre-mi" className="bg-slate-50 text-slate-900 py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-start gap-16">

            <FadeIn className="md:w-1/3">
              <p className="text-sm text-brand-600 font-semibold mb-2">Mucho gusto, soy el</p>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-slate-900">
                Dr. Rodrigo <br /> Olivares Miranda.
              </h2>
            </FadeIn>

            <FadeIn delay={0.15} className="md:w-1/3 relative flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/5]">
                <div className="absolute inset-0 border-2 border-brand-500/50 rounded-tl-[10rem] rounded-br-[10rem] rounded-tr-3xl rounded-bl-3xl -translate-x-4 translate-y-4 z-0"></div>
                <div className="relative w-full h-full rounded-tl-[10rem] rounded-br-[10rem] rounded-tr-3xl rounded-bl-3xl overflow-hidden z-10 bg-brand-900">
                  <img
                    src="/DrOlivares.png"
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
                className="inline-flex items-center gap-3 bg-brand-600 text-white px-7 py-3 rounded-sm font-medium hover:bg-brand-700 transition-all shadow-md shadow-brand-600/20"
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
                src="https://sketchfab.com/models/2e1f343abbdf4bbeb481a076e8674330/embed"
                className="w-full h-full"
                onLoad={() => setModel1Loaded(true)}
              ></iframe>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── TESTIMONIOS ────────────────────────────────── */}
      <section id="testimonios" className="bg-brand-900 text-white py-24 border-t border-brand-800">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-brand-100 mb-4">Dr. Rodrigo Olivares Miranda</p>
                <h2 className="font-serif text-4xl md:text-5xl">Testimonios:</h2>
              </div>
              <div className="flex gap-4 mt-8 md:mt-0">
                <button onClick={prevTestimonial} className="w-12 h-12 border border-brand-700 flex items-center justify-center hover:bg-brand-800 transition-colors rounded-full">
                  <ChevronLeft size={20} />
                </button>
                <button onClick={nextTestimonial} className="w-12 h-12 border border-brand-700 flex items-center justify-center hover:bg-brand-800 transition-colors rounded-full">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {TESTIMONIALS.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <motion.div
                  animate={{ opacity: testimonialIdx === i ? 1 : 0.35, scale: testimonialIdx === i ? 1 : 0.97 }}
                  transition={{ duration: 0.3 }}
                  className="relative pt-6 cursor-pointer"
                  onClick={() => setTestimonialIdx(i)}
                >
                  <div className="text-8xl font-serif text-brand-800 absolute -top-6 -left-4 leading-none select-none">"</div>
                  <div className="flex gap-0.5 mb-3 relative z-10">
                    {[...Array(5)].map((_, s) => <Star key={s} size={14} className="fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <h4 className="font-medium text-lg mb-1 relative z-10">{t.name}</h4>
                  <p className="text-xs text-brand-400 font-medium italic mb-4 relative z-10">Paciente Verificado · Google · {t.date}</p>
                  <p className="text-brand-50 font-light italic leading-relaxed relative z-10">{t.text}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CREDENCIALES (reemplaza galería stock) ──────── */}
      <section className="bg-slate-900 py-20">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn className="text-center mb-14">
            <p className="text-xs tracking-[0.2em] uppercase text-brand-400 font-semibold mb-3">Trayectoria</p>
            <h3 className="font-serif text-3xl md:text-4xl text-white">Formación y experiencia</h3>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            {[
              { num: '+500', label: 'Cirugías realizadas' },
              { num: '+12', label: 'Años de experiencia' },
              { num: '3', label: 'Sedes Clínicas Bupa' },
              { num: '100%', label: 'Dedicación a la cadera' },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="border border-brand-800 rounded-lg p-8 text-center hover:border-brand-600 transition-colors">
                  <p className="font-serif text-4xl md:text-5xl text-white mb-2">{item.num}</p>
                  <p className="text-sm text-brand-300 font-light">{item.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Fellowship Cirugía de Cadera y Pelvis', desc: 'Subespecialización de alto nivel en cirugía compleja de cadera y pelvis.' },
              { title: 'Protocolos ERAS', desc: 'Recuperación acelerada post-cirugía. Menos dolor, más pronta autonomía para el paciente.' },
              { title: 'Clínicas Bupa', desc: 'Atención en una de las redes de salud privada más reconocidas de Chile, con 3 sedes.' },
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="border border-brand-800 rounded-lg p-8 hover:border-brand-600 transition-colors">
                  <p className="font-medium text-white mb-2">{card.title}</p>
                  <p className="text-sm text-brand-300 font-light leading-relaxed">{card.desc}</p>
                </div>
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
                <h4 className="font-medium text-lg mb-2 text-slate-900">Dónde estamos:</h4>
                <p className="font-light text-slate-600">Clínicas Bupa (Santiago)</p>
                <p className="font-light text-slate-500">Av. Departamental 01455, Macul, Región Metropolitana</p>
              </div>
              <div className="mb-10">
                <h4 className="font-medium text-lg mb-2 text-slate-900">Horario de Funcionamiento:</h4>
                <p className="font-light text-slate-600">Lunes a Viernes: 08:00 hrs a 18:00 hrs</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="https://waze.com/ul?ll=-33.518784,-70.5986873&navigate=yes" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-brand-600 text-brand-600 px-6 py-3 text-sm font-medium hover:bg-brand-600 hover:text-white transition-colors rounded-sm">
                  <MapPin size={16} /> IR CON WAZE
                </a>
                <a href="https://m.uber.com/ul/?action=setPickup&client_id=uber&pickup=my_location&dropoff[latitude]=-33.518784&dropoff[longitude]=-70.5986873&dropoff[nickname]=Clínica%20Bupa%20Santiago" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-brand-600 text-brand-600 px-6 py-3 text-sm font-medium hover:bg-brand-600 hover:text-white transition-colors rounded-sm">
                  <MapPin size={16} /> IR CON UBER
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ──────────────────────────────────── */}
      <section className="bg-brand-600 py-16 text-white text-center">
        <FadeIn>
          <p className="text-brand-100 mb-3 tracking-wide text-sm uppercase">¿Listo para dar el primer paso?</p>
          <h3 className="font-serif text-3xl md:text-4xl mb-8">Agenda tu consulta hoy</h3>
          <a
            href={BUPA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-brand-700 px-10 py-4 rounded-sm font-medium tracking-wide hover:bg-brand-50 transition-all shadow-xl"
          >
            AGENDAR EN CLÍNICAS BUPA <ArrowUpRight size={20} />
          </a>
        </FadeIn>
      </section>

      {/* ── FOOTER ─────────────────────────────────────── */}
      <footer className="bg-slate-50 text-slate-900 py-8 border-t border-slate-200">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <img src="/caradro.png" alt="Dr. Rodrigo Olivares" className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
            <div>
              <p className="font-medium text-sm text-slate-900">Dr. Rodrigo Olivares Miranda</p>
              <p className="text-xs text-slate-500 uppercase tracking-wider">Cirugía de Cadera</p>
            </div>
          </div>

          <div className="text-xs text-slate-500">
            Dr. Rodrigo Olivares Miranda © {new Date().getFullYear()} | Todos los derechos reservados
          </div>

          <div className="flex items-center gap-6">
            <button onClick={() => setPrivacyOpen(true)} className="text-xs text-slate-500 hover:text-brand-600 transition-colors">
              Política de Privacidad
            </button>
            <span className="flex items-center gap-1">
              <span className="text-xs text-slate-500">Creado por</span>
              <a
                href="https://olvaid-studio.github.io"
                rel="noopener noreferrer"
                className={`olvaid-link text-xs${olvaidAnim ? ' olvaid-bone' : ''}`}
                onClick={handleOlvaidClick}
              >
                {olvaidAnim ? '🦴' : 'OlvaiD Lab'}
              </a>
            </span>
            <a href="https://www.instagram.com/dr.rodrigo.olivares/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-brand-600 transition-colors">
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
                <Shield size={20} className="text-brand-600" />
                <h3 className="font-serif text-2xl text-slate-900">Política de Privacidad</h3>
              </div>
              <div className="text-sm text-slate-600 space-y-4 font-light leading-relaxed">
                <p><strong className="font-semibold text-slate-800">Responsable:</strong> Dr. Rodrigo Olivares Miranda, médico especialista en Traumatología y Cirugía de Cadera, Santiago, Chile.</p>
                <p><strong className="font-semibold text-slate-800">Datos recopilados:</strong> Este sitio web no almacena datos personales ni utiliza formularios de contacto. El agendamiento de consultas se realiza a través de la plataforma segura de Clínicas Bupa, sujeta a su propia política de privacidad.</p>
                <p><strong className="font-semibold text-slate-800">Cookies:</strong> Este sitio no utiliza cookies de seguimiento ni herramientas de analítica de terceros.</p>
                <p><strong className="font-semibold text-slate-800">Contenido:</strong> Todo el contenido médico e imágenes publicadas tienen fines exclusivamente informativos y educativos. No constituyen consejo médico.</p>
                <p><strong className="font-semibold text-slate-800">Contacto:</strong> Para consultas sobre privacidad, puede comunicarse directamente a través de Clínicas Bupa.</p>
                <p className="text-slate-400 text-xs">Última actualización: Marzo 2026.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
