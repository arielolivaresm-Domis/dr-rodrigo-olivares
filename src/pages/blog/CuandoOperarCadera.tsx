import { useEffect } from 'react';
import { BlogLayout, type BlogMeta } from '../../components/blog/BlogLayout';

const meta: BlogMeta = {
  slug: 'cuando-operar-cadera',
  title: '¿Cuándo operar la cadera? Criterios para la cirugía | Dr. Rodrigo Olivares M.',
  description: 'Guía médica sobre los criterios que determinan cuándo es el momento adecuado para operar la cadera: indicaciones, evaluación del especialista y qué esperar del proceso.',
  badge: 'Cirugía de cadera',
  datePublished: '2026-07-04',
  readingTime: '7 min',
  faq: [
    {
      question: '¿Cómo sé si necesito una operación de cadera?',
      answer: 'Los principales indicadores son: dolor que no mejora con analgésicos ni fisioterapia, limitación para actividades básicas como caminar, subir escaleras o vestirse, y una radiografía que muestra destrucción articular avanzada (grado 3 o 4 de Kellgren-Lawrence). La decisión final la toma el especialista tras evaluar el conjunto de factores clínicos e imagenológicos.',
    },
    {
      question: '¿Existe una edad mínima para operarse la cadera?',
      answer: 'No existe una edad mínima absoluta. La indicación depende del grado de compromiso articular y el impacto en la calidad de vida, no de la edad cronológica. Existen pacientes de 45-50 años con displasia o artritis avanzada que requieren cirugía, y pacientes de 80 años con artrosis moderada que se manejan de forma conservadora.',
    },
    {
      question: '¿Qué pasa si espero demasiado antes de operarme?',
      answer: 'Retrasar la cirugía cuando la indicación ya es clara puede aumentar el riesgo de complicaciones. El deterioro muscular progresivo por la inmovilidad, la pérdida de masa ósea y las alteraciones en la marcha hacen que la recuperación posterior sea más lenta y difícil. El momento óptimo lo determina el especialista considerando la evolución de cada caso.',
    },
    {
      question: '¿El reemplazo de cadera es una cirugía de alto riesgo?',
      answer: 'Es una cirugía mayor programada, con un perfil de riesgo bien conocido y manejable. En manos de un equipo especializado y con protocolos ERAS (recuperación acelerada), las complicaciones graves son infrecuentes. El riesgo específico de cada paciente se evalúa en consulta considerando enfermedades previas, medicamentos y estado general.',
    },
    {
      question: '¿Puedo esperar años antes de decidir operarme?',
      answer: 'En etapas iniciales o moderadas, sí es razonable manejar la artrosis de forma conservadora. Sin embargo, cuando el dolor es constante, limita actividades básicas y ya no responde a tratamiento médico, esperar más tiempo no mejora el pronóstico quirúrgico y puede empeorarlo. El especialista puede orientar sobre el momento óptimo según la evolución.',
    },
  ],
};

const HOWTO_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Cómo evaluar si necesita una cirugía de cadera',
  description: 'Proceso de evaluación médica para determinar si la cirugía de reemplazo de cadera es la indicación correcta.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Consulta inicial con el especialista',
      text: 'El traumatólogo de cadera realiza una anamnesis completa (historia del dolor, evolución, tratamientos previos) y un examen físico que evalúa el rango de movimiento, la marcha y las maniobras específicas de la articulación.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Estudio imagenológico',
      text: 'Se solicita una radiografía de pelvis (proyección anteroposterior) y lateral de cadera afectada. Permite clasificar el grado de artrosis según la escala Kellgren-Lawrence (I al IV). En casos específicos se complementa con resonancia magnética.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Evaluación del fracaso del tratamiento conservador',
      text: 'Si el dolor persiste a pesar de haber completado al menos 3-6 meses de tratamiento médico (analgésicos, antiinflamatorios, fisioterapia) e infiltraciones, se considera que el manejo conservador ha fallado.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Evaluación del impacto en calidad de vida',
      text: 'Se cuantifica el impacto funcional con escalas estandarizadas (Harris Hip Score, HOOS). Cuando el dolor limita actividades básicas diarias —caminar menos de 500 metros, dificultad para vestirse, dolor nocturno— la indicación quirúrgica se fortalece.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Evaluación preoperatoria y decisión compartida',
      text: 'Se realiza una evaluación cardiovascular, metabólica y de riesgo anestésico. El médico explica al paciente los riesgos, beneficios y alternativas. La decisión final es siempre compartida entre el especialista y el paciente.',
    },
  ],
};

export default function CuandoOperarCadera() {
  useEffect(() => {
    const id = 'howto-cadera-schema';
    document.getElementById(id)?.remove();
    const s = document.createElement('script');
    s.id = id;
    s.type = 'application/ld+json';
    s.textContent = JSON.stringify(HOWTO_SCHEMA);
    document.head.appendChild(s);
    return () => { document.getElementById(id)?.remove(); };
  }, []);

  return (
    <BlogLayout meta={meta}>
      <h1 className="font-serif text-3xl md:text-4xl text-slate-900 mb-2">
        ¿Cuándo operar la cadera? Criterios para la cirugía
      </h1>

      <p>
        Una de las preguntas más frecuentes en consulta es cuándo es el momento correcto para
        operarse la cadera. No existe una respuesta única: la indicación quirúrgica combina
        hallazgos en imágenes, el impacto del dolor en la vida cotidiana y el fracaso del
        tratamiento conservador. Este artículo explica los criterios que guían esa decisión.
      </p>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">Indicaciones principales para cirugía de cadera</h2>
      <p>
        El reemplazo total de cadera (artroplastía) está indicado cuando se cumplen al menos
        dos de estas tres condiciones:
      </p>
      <ul className="list-none space-y-2">
        <li>· <span className="font-medium text-slate-700">Dolor persistente:</span> que no mejora con analgésicos, antiinflamatorios, fisioterapia ni infiltraciones tras varios meses de tratamiento.</li>
        <li>· <span className="font-medium text-slate-700">Limitación funcional significativa:</span> dificultad para caminar más de 500 metros, subir escaleras, vestirse o realizar actividades básicas del día.</li>
        <li>· <span className="font-medium text-slate-700">Destrucción articular avanzada en imágenes:</span> radiografía que muestra grado 3 o 4 de Kellgren-Lawrence con pérdida marcada del espacio articular.</li>
      </ul>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">El proceso de evaluación paso a paso</h2>
      <ol className="list-none space-y-4">
        <li>
          <span className="font-medium text-slate-700">1. Consulta inicial:</span> el traumatólogo evalúa la historia del dolor, los tratamientos realizados y el rango de movimiento de la articulación.
        </li>
        <li>
          <span className="font-medium text-slate-700">2. Estudio imagenológico:</span> radiografía de pelvis anteroposterior y lateral para clasificar el grado de artrosis. Resonancia magnética en casos puntuales.
        </li>
        <li>
          <span className="font-medium text-slate-700">3. Documentar el fracaso conservador:</span> al menos 3-6 meses de tratamiento médico completo antes de considerar cirugía en la mayoría de los casos.
        </li>
        <li>
          <span className="font-medium text-slate-700">4. Cuantificar el impacto funcional:</span> escalas como el Harris Hip Score o HOOS permiten objetivar cómo el dolor afecta las actividades diarias.
        </li>
        <li>
          <span className="font-medium text-slate-700">5. Evaluación preoperatoria y decisión compartida:</span> análisis de riesgo cardiovascular, metabólico y anestésico. La decisión final siempre es conjunta entre médico y paciente.
        </li>
      </ol>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">¿Qué pasa si se espera demasiado?</h2>
      <p>
        Cuando la indicación quirúrgica ya es clara, retrasar la cirugía innecesariamente puede
        tener consecuencias: el deterioro muscular por inmovilidad, la pérdida de masa ósea y las
        compensaciones en la marcha hacen que la recuperación postoperatoria sea más lenta y
        compleja. La ventana óptima es cuando el dolor limita seriamente la calidad de vida pero
        el estado general del paciente es aún bueno para enfrentar la cirugía.
      </p>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">Cuándo NO operar todavía</h2>
      <p>
        Si el dolor es tolerable, no limita actividades básicas y el tratamiento conservador
        sigue teniendo efecto, no es el momento quirúrgico. En esos casos corresponde continuar
        el seguimiento, ajustar el manejo médico y reevaluar periódicamente la evolución.
      </p>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">La edad no es el factor determinante</h2>
      <p>
        No existe una edad mínima para el reemplazo de cadera. Hay pacientes de 45 años con
        displasia avanzada o secuela de fractura que requieren cirugía, y pacientes de 80 años
        con artrosis leve que se manejan bien de forma conservadora. La decisión depende del
        grado de compromiso articular y el impacto real en la vida del paciente.
      </p>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">Evaluación en Clínica Bupa Santiago</h2>
      <p>
        Si tiene dolor de cadera que limita sus actividades y quiere saber si ya es el
        momento de operarse, el Dr. Rodrigo Olivares M. realiza la evaluación completa
        —clínica e imagenológica— en Clínica Bupa Santiago y orienta el plan de tratamiento
        más adecuado para su caso.
      </p>

      <p className="text-sm text-slate-400 italic mt-10">
        Este artículo tiene fines informativos y educativos. No reemplaza una consulta médica
        presencial ni constituye un diagnóstico.
      </p>
    </BlogLayout>
  );
}
