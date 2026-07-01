import { BlogLayout, type BlogMeta } from '../../components/blog/BlogLayout';

const meta: BlogMeta = {
  slug: 'artrosis-cadera-sintomas-tratamiento',
  title: 'Artrosis de Cadera: Síntomas y Tratamiento | Dr. Rodrigo Olivares M.',
  description: 'Guía médica sobre artrosis de cadera: primeros síntomas, cómo se diagnostica y las opciones de tratamiento, desde manejo conservador hasta reemplazo total de cadera.',
  badge: 'Educación al paciente',
  datePublished: '2026-07-01',
  readingTime: '6 min',
  faq: [
    {
      question: '¿Cuáles son los primeros síntomas de la artrosis de cadera?',
      answer: 'El primer síntoma habitual es dolor en la ingle o el muslo que aparece al caminar o subir escaleras y mejora con el reposo. Con el tiempo se agrega rigidez matinal, dificultad para calzarse o cruzar las piernas, y en etapas más avanzadas dolor incluso en reposo o durante la noche.',
    },
    {
      question: '¿Cómo se diagnostica la artrosis de cadera?',
      answer: 'El diagnóstico combina examen clínico (rango de movimiento, dolor a la rotación de la cadera) con una radiografía de pelvis que muestra el grado de desgaste del cartílago según la escala de Kellgren-Lawrence. En casos específicos se solicita una resonancia magnética para evaluar tejidos blandos.',
    },
    {
      question: '¿La artrosis de cadera tiene cura sin cirugía?',
      answer: 'No existe una cura que regenere el cartílago desgastado, pero en etapas iniciales o moderadas el dolor y la función se controlan bien con analgésicos, fisioterapia, control de peso e infiltraciones. La cirugía se reserva para cuando estas medidas dejan de ser suficientes.',
    },
    {
      question: '¿Qué actividades evitar si tengo artrosis de cadera?',
      answer: 'Se recomienda evitar actividades de alto impacto y torsión repetida sobre la cadera (correr en superficies duras, saltos, deportes de contacto). Actividades de bajo impacto como caminar, nadar o bicicleta suelen tolerarse mejor y ayudan a mantener la movilidad.',
    },
    {
      question: '¿Cuándo debo consultar a un especialista por dolor de cadera?',
      answer: 'Conviene consultar cuando el dolor persiste más de unas semanas, limita actividades cotidianas, no mejora con analgésicos comunes, o se acompaña de rigidez progresiva. Un diagnóstico temprano permite partir con las opciones menos invasivas.',
    },
  ],
};

export default function ArtrosisCaderaSintomasTratamiento() {
  return (
    <BlogLayout meta={meta}>
      <h1 className="font-serif text-3xl md:text-4xl text-slate-900 mb-2">
        Artrosis de Cadera: Síntomas y Tratamiento
      </h1>

      <p>
        La artrosis de cadera (coxartrosis) es el desgaste progresivo del cartílago que recubre
        la articulación coxofemoral. Es una de las causas más frecuentes de dolor de cadera en
        adultos mayores de 50 años, aunque también puede aparecer antes en personas con displasia
        de cadera, antecedentes de fractura o sobrecarga articular por deporte de alto impacto.
      </p>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">¿Qué es la artrosis de cadera?</h2>
      <p>
        Es el deterioro del cartílago articular que amortigua el roce entre la cabeza del fémur y
        el acetábulo (la cavidad de la pelvis). A medida que el cartílago se adelgaza, el hueso
        subyacente queda más expuesto, lo que genera dolor, rigidez y pérdida progresiva de
        movilidad.
      </p>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">Síntomas principales</h2>
      <ul className="list-none space-y-2">
        <li>· Dolor en la ingle o el muslo al caminar, subir escaleras o levantarse de una silla.</li>
        <li>· Rigidez matinal que mejora después de los primeros minutos de movimiento.</li>
        <li>· Dificultad para atarse los zapatos, cruzar las piernas o entrar/salir del auto.</li>
        <li>· Cojera o cambio en la forma de caminar en etapas más avanzadas.</li>
        <li>· Dolor nocturno o en reposo cuando el desgaste es significativo.</li>
      </ul>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">Cómo se diagnostica</h2>
      <p>
        El diagnóstico parte con un examen clínico que evalúa el rango de movimiento y el dolor a
        la rotación de la cadera, y se confirma con una radiografía de pelvis (proyección
        anteroposterior y lateral). Esta imagen permite clasificar el grado de artrosis según la
        escala de Kellgren-Lawrence. En casos puntuales se complementa con resonancia magnética.
      </p>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">Opciones de tratamiento</h2>
      <p>El tratamiento avanza de menor a mayor invasividad según la etapa y el impacto en la calidad de vida:</p>
      <ul className="list-none space-y-2">
        <li>· <span className="font-medium text-slate-700">Manejo conservador:</span> analgésicos, antiinflamatorios, control de peso y fisioterapia orientada a fortalecer la musculatura periarticular.</li>
        <li>· <span className="font-medium text-slate-700">Infiltraciones:</span> ácido hialurónico o corticoides para reducir el dolor en etapas moderadas.</li>
        <li>· <span className="font-medium text-slate-700">Cirugía de reemplazo total de cadera:</span> indicada cuando el dolor limita las actividades diarias y las imágenes muestran destrucción articular avanzada.</li>
      </ul>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">Cuándo consultar a un especialista</h2>
      <p>
        Si el dolor de cadera persiste por semanas, limita tus actividades cotidianas o no cede con
        analgésicos comunes, conviene evaluarse con un especialista en cadera. Un diagnóstico
        temprano abre más opciones de tratamiento conservador antes de necesitar cirugía.
      </p>

      <p className="text-sm text-slate-400 italic mt-10">
        Este artículo tiene fines informativos y educativos. No reemplaza una consulta médica
        presencial ni constituye un diagnóstico.
      </p>
    </BlogLayout>
  );
}
