import { BlogLayout, type BlogMeta } from '../../components/blog/BlogLayout';

const meta: BlogMeta = {
  slug: 'recuperacion-reemplazo-cadera',
  title: 'Recuperación tras el Reemplazo de Cadera: Etapas y Plazos | Dr. Rodrigo Olivares M.',
  description: 'Guía completa sobre la recuperación después de un reemplazo total de cadera: qué esperar en cada etapa, plazos reales, precauciones y cuándo volver a las actividades cotidianas.',
  badge: 'Recuperación y rehabilitación',
  datePublished: '2026-07-07',
  readingTime: '7 min',
  faq: [
    {
      question: '¿Cuánto tiempo dura la recuperación de un reemplazo de cadera?',
      answer: 'La recuperación tiene varias fases: los primeros días el paciente camina con ayuda en el hospital, al alta (2-4 días) ya puede desplazarse con bastón, a las 6 semanas retoma actividades básicas con mayor independencia, y entre 3 y 6 meses logra plena autonomía. El retorno a actividades de bajo impacto como natación o bicicleta es posible desde los 2-3 meses.',
    },
    {
      question: '¿Cuándo puedo volver a manejar después de una operación de cadera?',
      answer: 'En general, el retorno a conducir un vehículo automático (cadera operada en lado derecho) se evalúa a las 4-6 semanas. Para vehículos de transmisión manual o cadera derecha operada, el plazo puede extenderse. El criterio definitivo lo da el especialista según la evolución de cada caso.',
    },
    {
      question: '¿Qué no puedo hacer después de un reemplazo de cadera?',
      answer: 'En las primeras semanas se evita cruzar las piernas, doblar la cadera más de 90 grados (no agacharse completamente) y girar el pie hacia adentro. Estas restricciones dependen de la vía de acceso quirúrgica utilizada. Con abordaje anterior (DAA) las restricciones de movimiento son menores que con el abordaje posterior.',
    },
    {
      question: '¿Cuándo puedo volver al trabajo después de una cirugía de cadera?',
      answer: 'Para trabajos de oficina o en posición sentada, el retorno es posible entre las 4 y 6 semanas. Para trabajos que implican bipedestación prolongada o esfuerzo físico, el plazo se extiende a 3-4 meses. El especialista orienta según el tipo de actividad laboral y la evolución.',
    },
    {
      question: '¿La fisioterapia es obligatoria después de la cirugía?',
      answer: 'La rehabilitación kinésica es fundamental para recuperar la fuerza muscular, la marcha y el rango de movimiento. Los protocolos ERAS inician la rehabilitación desde el primer día postoperatorio. Un programa supervisado de kinesioterapia acelera significativamente la recuperación y reduce el riesgo de complicaciones.',
    },
  ],
};

export default function RecuperacionReemplazoCadera() {
  return (
    <BlogLayout meta={meta}>
      <h1 className="font-serif text-3xl md:text-4xl text-slate-900 mb-2">
        Recuperación tras el Reemplazo de Cadera: Etapas y Plazos
      </h1>

      <p>
        La recuperación de un reemplazo total de cadera ha mejorado radicalmente en los últimos
        años gracias a los protocolos ERAS (Enhanced Recovery After Surgery o Recuperación
        Acelerada). Hoy, la mayoría de los pacientes camina al día siguiente de la cirugía y sale
        del hospital en 2 a 4 días. Este artículo explica qué esperar en cada etapa.
      </p>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">Primeras 24-48 horas: el alta precoz</h2>
      <p>
        Con los protocolos ERAS, el paciente se levanta y da sus primeros pasos asistidos el mismo
        día de la operación o al día siguiente. El dolor postoperatorio se maneja con analgesia
        multimodal (combinación de medicamentos que evita depender solo de opioides). El objetivo
        del alta temprana —2 a 4 días— es evitar las complicaciones asociadas al reposo prolongado:
        trombosis venosa, pérdida muscular y neumonía.
      </p>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">Semanas 1-4: recuperación en casa</h2>
      <ul className="list-none space-y-2">
        <li>· Deambulación con bastón o andador para estabilidad.</li>
        <li>· Ejercicios de kinesioterapia desde el primer día en casa: fortalecimiento de glúteos, cuádriceps y musculatura abductora.</li>
        <li>· Se evita cruzar las piernas, doblar la cadera más de 90° y girar el pie hacia adentro (restricciones variables según la vía de acceso quirúrgica).</li>
        <li>· La inflamación y el dolor van disminuyendo progresivamente semana a semana.</li>
      </ul>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">Semanas 4-8: mayor independencia</h2>
      <p>
        La mayoría de los pacientes abandona el bastón entre las 4 y 6 semanas. Se retoman
        actividades sedentarias (trabajo de oficina, conducción de automóvil automático en casos
        no dominantes). La marcha se normaliza progresivamente. El control radiológico habitual
        se realiza alrededor de las 6 semanas.
      </p>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">Meses 3-6: retorno a actividades normales</h2>
      <ul className="list-none space-y-2">
        <li>· Actividades de bajo impacto: caminata larga, bicicleta, natación — posibles desde los 2-3 meses.</li>
        <li>· Retorno a trabajos físicos o con bipedestación prolongada: generalmente desde los 3-4 meses.</li>
        <li>· Plena independencia funcional: la mayoría de los pacientes la alcanza entre los 3 y 6 meses.</li>
        <li>· Golf, senderismo moderado: posibles desde los 4-6 meses con evaluación del especialista.</li>
      </ul>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">Actividades a evitar a largo plazo</h2>
      <p>
        Una vez recuperado, se recomienda evitar deportes de alto impacto y torsión intensa sobre
        la cadera (carrera en superficies duras, saltos repetitivos, deportes de contacto). El
        objetivo es prolongar la vida útil de la prótesis, que en condiciones habituales supera
        los 20 años en la mayoría de los pacientes.
      </p>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">El rol de la fisioterapia</h2>
      <p>
        La rehabilitación kinésica no es opcional: es la que convierte una cirugía exitosa en una
        recuperación exitosa. El programa debe iniciar en el hospital y continuar de forma
        supervisada en las primeras semanas. El fortalecimiento de la musculatura periarticular
        es determinante para la estabilidad, la marcha y la prevención de complicaciones.
      </p>

      <p className="text-sm text-slate-400 italic mt-10">
        Este artículo tiene fines informativos y educativos. No reemplaza una consulta médica
        presencial ni constituye un diagnóstico.
      </p>
    </BlogLayout>
  );
}
