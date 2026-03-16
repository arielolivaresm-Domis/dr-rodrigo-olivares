import React from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, MapPin, Instagram, Facebook } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-600 font-sans selection:bg-brand-500 selection:text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden bg-brand-900 text-white">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 flex justify-end">
          <div className="w-full md:w-2/3 h-full relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/60 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 via-transparent to-transparent z-10"></div>
            <img
              src="/DrOlivares.png"
              alt="Dr. Rodrigo Olivares Miranda"
              className="w-full h-full object-cover object-top opacity-80"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-20">
          <div className="max-w-2xl">
            <p className="text-sm tracking-[0.2em] uppercase text-brand-100 mb-4">Dr.</p>
            <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-6 text-white">
              Rodrigo <br />
              <span className="italic">Olivares Miranda</span>
            </h1>
            
            <div className="mb-10 max-w-md">
              <h2 className="text-xl font-medium mb-4 text-white">Recupera tu movilidad, transforma tu vida.</h2>
              <p className="text-brand-50 font-light leading-relaxed">
                Mi trabajo consiste en brindarte el mejor tratamiento para tus problemas de cadera, 
                proporcionando alivio del dolor y mejorando tu calidad de vida. Me especializo en 
                soluciones personalizadas y acompañamiento integral en cada etapa de tu recuperación.
              </p>
            </div>

            <a 
              href="https://agendaclinicas.bupa.cl/clinicas/consulta-medica/reserva-consulta-medica?ref=cbs&profesional=Rodrigo+Andres+Olivares+Miranda&especialidad=Traumatologia+Cadera"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-600 text-white px-8 py-4 rounded-sm font-medium tracking-wide hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/30"
            >
              AGENDAR CONSULTA
              <ArrowUpRight size={20} />
            </a>
          </div>

          {/* Bottom Stats Row */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-8 items-end border-t border-brand-800 pt-8">
            <div className="flex items-center gap-4">
              <img 
                src="/caradro.png"
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
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

      {/* Specialties Section */}
      <section className="bg-slate-50 text-slate-900 py-24 relative rounded-t-[3rem] -mt-8 z-30">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center">
          <div className="w-3 h-3 border-b-2 border-r-2 border-brand-600 transform rotate-45 -mt-1"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 text-center">
          <p className="text-xs tracking-[0.2em] uppercase text-brand-600 font-semibold mb-6">Dr. Rodrigo Olivares Miranda</p>
          <h2 className="font-serif text-4xl md:text-5xl max-w-2xl mx-auto leading-tight mb-16 text-slate-900">
            Un cuidado único para <br /> cada tipo de adversidad:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              "Artroplastia Total",
              "Cirugía de Revisión",
              "Cadera del Deportista",
              "Fractura de Cadera",
              "Necrosis Avascular",
              "Artrosis de Cadera"
            ].map((specialty, idx) => (
              <div key={idx} className="border border-slate-200 bg-white py-8 px-4 hover:border-brand-500 hover:shadow-md transition-all cursor-pointer rounded-sm">
                <p className="font-serif text-xl text-brand-600">{specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-slate-50 pb-24">
        <div className="container mx-auto px-6 md:px-12">
          {/* Contenedor que mantiene el ancho intacto pero recorta el alto para equilibrar los bordes negros */}
          <div className="w-fit mx-auto rounded-2xl overflow-hidden shadow-2xl border border-brand-dark/10 relative group bg-black">
            <div style={{ marginTop: '-25%', marginBottom: '-25%' }}>
              <video 
                className="max-h-[60vh] w-auto block opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/VideoCadera.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="bg-white relative pb-32">
        {/* Large background text */}
        <div className="absolute inset-0 overflow-hidden flex items-center justify-center pointer-events-none opacity-[0.03]">
          <span className="font-serif text-[20vw] whitespace-nowrap text-slate-900">Propósito</span>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="bg-brand-900 text-white rounded-2xl p-12 md:p-24 max-w-4xl mx-auto text-center shadow-2xl">
            <h3 className="font-serif text-3xl md:text-4xl mb-8">Un propósito claro:</h3>
            <p className="text-brand-50 font-light leading-relaxed max-w-2xl mx-auto text-lg">
              Ayudarte a alcanzar una vida más saludable y plena, con un cuidado humanizado, 
              acompañamiento atento y soluciones personalizadas que respetan tu historia y objetivos.
            </p>
          </div>
        </div>
      </section>

      {/* About Doctor Section */}
      <section className="bg-slate-50 text-slate-900 py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-16">
            
            <div className="md:w-1/3">
              <p className="text-sm text-brand-600 font-semibold mb-2">Mucho gusto, soy el</p>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-slate-900">
                Dr. Rodrigo <br /> Olivares Miranda.
              </h2>
            </div>

            <div className="md:w-1/3 relative flex justify-center">
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
            </div>

            <div className="md:w-1/3 space-y-6 text-slate-600 font-light">
              <p>
                Médico especialista en traumatología y ortopedia, con subespecialidad en cirugía de cadera. 
                Cuento con más de 12 años de experiencia dedicados a mejorar la calidad de vida de mis pacientes.
              </p>
              <p>
                A lo largo de mi trayectoria, he ayudado a cientos de pacientes a recuperar su movilidad 
                y aliviar el dolor, promoviendo salud, longevidad y dinamismo.
              </p>
              <p>
                Juntos, entenderemos tus necesidades y expectativas para crear estrategias personalizadas 
                de cuidados clínicos. De esta forma, alcanzaremos tus metas de manera saludable y duradera.
              </p>
            </div>

          </div>

          {/* 3D Model Embed */}
          <div className="mt-24 max-w-4xl mx-auto">
            <h3 className="font-serif text-3xl md:text-4xl text-center mb-10 text-slate-900">
              Explora la anatomía de la cadera en 3D
            </h3>
            <div className="sketchfab-embed-wrapper w-full aspect-video rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
              <iframe 
                title="Cadera con Deformidad" 
                frameBorder="0" 
                allowFullScreen 
                allow="autoplay; fullscreen; xr-spatial-tracking" 
                src="https://sketchfab.com/models/2e1f343abbdf4bbeb481a076e8674330/embed"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-brand-900 text-white py-24 border-t border-brand-800">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-brand-100 mb-4">Dr. Rodrigo Olivares Miranda</p>
              <h2 className="font-serif text-4xl md:text-5xl">Testimonios:</h2>
            </div>
            <div className="flex gap-4 mt-8 md:mt-0">
              <button className="w-12 h-12 border border-brand-700 flex items-center justify-center hover:bg-brand-800 transition-colors rounded-full">
                <ChevronLeft size={20} />
              </button>
              <button className="w-12 h-12 border border-brand-700 flex items-center justify-center hover:bg-brand-800 transition-colors rounded-full">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: "María González",
                text: "El Dr. Olivares es un excelente profesional. Me explicó todo detalladamente antes de mi cirugía de reemplazo de cadera. La recuperación fue excelente y ahora puedo caminar sin dolor. ¡Totalmente recomendado!"
              },
              {
                name: "Carlos Mendoza",
                text: "Atención maravillosa. El equipo médico es muy amable y educado, y el doctor es simplemente competentísimo. Me operó de una fractura y el resultado ha sido inmejorable."
              },
              {
                name: "Ana Silva",
                text: "Llevo años atendiéndome con este excelente profesional y su equipo. Totalmente recomendado, agradezco toda la atención dirigida a lo largo de este tiempo. Que Dios lo bendiga inmensamente."
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="relative pt-6">
                <div className="text-8xl font-serif text-brand-800 absolute -top-6 -left-4 leading-none select-none">"</div>
                <h4 className="font-medium text-lg mb-1 relative z-10">{testimonial.name}</h4>
                <p className="text-xs text-brand-500 font-medium italic mb-6 relative z-10">Paciente Verificado | Fuente: Google</p>
                <p className="text-brand-50 font-light italic leading-relaxed relative z-10">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Model 2 Section (Prótesis) */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-serif text-3xl md:text-4xl text-center mb-10 text-slate-900">
              Conoce la Prótesis de Cadera en 3D
            </h3>
            <div className="sketchfab-embed-wrapper w-full aspect-video rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
              <iframe 
                title="Prótesis de Cadera" 
                frameBorder="0" 
                allowFullScreen 
                allow="autoplay; fullscreen; xr-spatial-tracking" 
                src="https://sketchfab.com/models/419fcac19a4846dc852ea048f15cc85f/embed"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Images Gallery */}
      <section className="bg-slate-900 flex flex-wrap md:flex-nowrap overflow-hidden">
        {[
          "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800&auto=format&fit=crop"
        ].map((img, idx) => (
          <div key={idx} className="w-1/2 md:w-1/4 h-48 md:h-80">
            <img 
              src={img} 
              alt="Clinic interior" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </section>

      {/* Location & Hours Section */}
      <section className="bg-white text-slate-900 py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            
            <div className="md:w-1/2 w-full">
              <div className="aspect-video bg-slate-200 w-full rounded-sm overflow-hidden border border-slate-200 relative group">
                <div className="absolute inset-0 bg-brand-900/10 group-hover:bg-transparent transition-colors pointer-events-none z-10"></div>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.331405108428!2d-70.5986873!3d-33.518784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d06f15711683%3A0x6b4033068f23f81e!2sCl%C3%ADnica%20Bupa%20Santiago!5e0!3m2!1sen!2scl!4v1700000000000!5m2!1sen!2scl" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                ></iframe>
              </div>
            </div>

            <div className="md:w-1/2">
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
                  <MapPin size={16} />
                  IR CON WAZE
                </a>
                <a href="https://m.uber.com/ul/?action=setPickup&client_id=uber&pickup=my_location&dropoff[latitude]=-33.518784&dropoff[longitude]=-70.5986873&dropoff[nickname]=Clínica%20Bupa%20Santiago" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-brand-600 text-brand-600 px-6 py-3 text-sm font-medium hover:bg-brand-600 hover:text-white transition-colors rounded-sm">
                  <MapPin size={16} />
                  IR CON UBER
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 text-slate-900 py-8 border-t border-slate-200">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-4">
            <img 
              src="/caradro.png"
              alt="Dr. Rodrigo Olivares"
              className="w-10 h-10 rounded-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div>
              <p className="font-medium text-sm text-slate-900">Dr. Rodrigo Olivares Miranda</p>
              <p className="text-xs text-slate-500 uppercase tracking-wider">Cirugía de Cadera</p>
            </div>
          </div>

          <div className="text-xs text-slate-500">
            Dr. Rodrigo Olivares Miranda © {new Date().getFullYear()} | Todos los derechos reservados
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-slate-500 hover:text-brand-600 transition-colors">Política de Privacidad</a>
            <div className="flex gap-4">
              <a href="#" className="text-slate-500 hover:text-brand-600 transition-colors"><Instagram size={18} /></a>
              <a href="#" className="text-slate-500 hover:text-brand-600 transition-colors"><Facebook size={18} /></a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
