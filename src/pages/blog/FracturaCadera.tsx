import { BlogLayout, type BlogMeta } from '../../components/blog/BlogLayout';

const meta: BlogMeta = {
  slug: 'fractura-cadera',
  title: 'Fractura de Cadera: Tratamiento Quirúrgico en Clínica Bupa Santiago | Dr. Rodrigo Olivares M.',
  description: 'Tipos de fractura de cadera, cuándo se opera, opciones quirúrgicas (fijación vs reemplazo) y recuperación. Dr. Rodrigo Olivares M. atiende fracturas de cadera en Clínica Bupa Santiago.',
  badge: 'Traumatología de cadera',
  datePublished: '2026-07-14',
  readingTime: '7 min',
  faq: [
    {
      question: '¿Siempre se opera una fractura de cadera?',
      answer: 'En la gran mayoría de los casos, sí. El tratamiento conservador (no quirúrgico) de una fractura de cadera se asocia a complicaciones graves por el encamamiento prolongado: trombosis, úlceras por presión, neumonía y deterioro funcional rápido. La cirugía, incluso en pacientes mayores frágiles, generalmente ofrece mejores resultados que el reposo prolongado.',
    },
    {
      question: '¿Cuánto tiempo después de la fractura se debe operar?',
      answer: 'La evidencia actual respalda operar dentro de las primeras 24-48 horas tras el diagnóstico, una vez estabilizado el paciente. La cirugía precoz reduce la mortalidad, el tiempo de estadía hospitalaria y las complicaciones del encamamiento. En casos con comorbilidades graves que requieren optimización preoperatoria, puede retrasarse hasta 72-96 horas.',
    },
    {
      question: '¿Qué diferencia hay entre fijar la fractura y hacer un reemplazo de cadera?',
      answer: 'La fijación (clavos, tornillos o placa) estabiliza los fragmentos óseos para que consoliden. Se prefiere en fracturas desplazadas en pacientes jóvenes con hueso de buena calidad. El reemplazo articular (hemiartroplastia o artroplastia total) sustituye la cabeza femoral y es de elección en fracturas de cuello femoral desplazadas en adultos mayores, donde la consolidación tiene menor probabilidad.',
    },
    {
      question: '¿Dónde se tratan fracturas de cadera en Clínica Bupa Santiago?',
      answer: 'El Dr. Rodrigo Olivares M. atiende fracturas de cadera en Clínica Bupa Santiago. Tiene experiencia en fijación con clavo cefalomedular para fracturas pertrocantéreas y en reemplazo articular (hemiartroplastia y artroplastia total) para fracturas de cuello femoral en adultos mayores.',
    },
    {
      question: '¿Cuánto tarda la recuperación de una fractura de cadera?',
      answer: 'Depende del tipo de fractura y el tratamiento. Con fijación interna, el apoyo puede estar restringido semanas mientras consolida el hueso. Con reemplazo articular, el apoyo es más precoz (a veces desde el primer día postoperatorio con protocolo ERAS). La recuperación funcional completa toma entre 3 y 6 meses en la mayoría de los casos, con rehabilitación kinésica supervisada.',
    },
  ],
};

export default function FracturaCadera() {
  return (
    <BlogLayout meta={meta}>
      <h1 className="font-serif text-3xl md:text-4xl text-slate-900 mb-2">
        Fractura de Cadera: Tratamiento Quirúrgico en Clínica Bupa Santiago
      </h1>

      <p>
        La fractura de cadera es una de las urgencias traumatológicas más frecuentes y de mayor
        impacto en el adulto mayor. En Chile, su incidencia aumenta con el envejecimiento
        poblacional y representa una de las principales causas de hospitalización ortopédica.
        El Dr. Rodrigo Olivares M. atiende fracturas de cadera en Clínica Bupa Santiago.
      </p>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">Tipos de fractura de cadera</h2>
      <p>Las fracturas de cadera se clasifican según su ubicación anatómica:</p>
      <ul className="list-none space-y-3 mt-3">
        <li>
          <span className="font-medium text-slate-700">Fractura de cuello femoral:</span> ocurre dentro de la cápsula articular. El riesgo principal es la necrosis avascular de la cabeza femoral por interrupción del aporte sanguíneo. En adultos mayores con desplazamiento, el tratamiento de elección es el reemplazo articular.
        </li>
        <li>
          <span className="font-medium text-slate-700">Fractura pertrocantérea (intertrocantérica):</span> ocurre fuera de la cápsula, en la zona de los trocánteres. Tiene mejor vascularización, lo que favorece la consolidación. El tratamiento habitual es la fijación con clavo cefalomedular.
        </li>
        <li>
          <span className="font-medium text-slate-700">Fractura subtrocantérea:</span> localizada bajo el trocánter menor. Biomecánicamente compleja por las fuerzas musculares que actúan sobre el foco. Requiere implantes de mayor longitud y es la más exigente técnicamente de las tres.
        </li>
      </ul>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">¿Por qué operar rápido?</h2>
      <p>
        La cirugía precoz (dentro de 24-48 horas) reduce significativamente la mortalidad
        y las complicaciones asociadas al encamamiento prolongado: trombosis venosa profunda,
        embolismo pulmonar, úlceras por presión, neumonía y deterioro cognitivo agudo. La
        inmovilización en una fractura de cadera no es una opción segura salvo en casos muy
        específicos.
      </p>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">Opciones quirúrgicas</h2>

      <h3 className="font-medium text-lg text-slate-800 mt-6 mb-2">Fijación interna</h3>
      <p>
        Indicada en fracturas pertrocantéreas y en fracturas de cuello no desplazadas o en
        pacientes jóvenes. Los implantes más usados son el clavo cefalomedular (para
        fracturas pertrocantéreas) y los tornillos canulados (para fracturas de cuello no
        desplazadas). El objetivo es estabilizar los fragmentos y permitir la consolidación.
      </p>

      <h3 className="font-medium text-lg text-slate-800 mt-6 mb-2">Hemiartroplastia</h3>
      <p>
        Reemplaza solo la cabeza femoral (no el acetábulo). Es la opción más frecuente para
        fracturas de cuello femoral desplazadas en adultos mayores con baja demanda funcional.
        Permite apoyo precoz y es una cirugía de menor duración que la artroplastia total.
      </p>

      <h3 className="font-medium text-lg text-slate-800 mt-6 mb-2">Artroplastia total de cadera</h3>
      <p>
        Reemplaza tanto la cabeza femoral como el acetábulo. Está indicada en pacientes
        con fractura de cuello femoral que tienen artrosis acetabular previa o alta demanda
        funcional. Ofrece mejores resultados a largo plazo que la hemiartroplastia en
        pacientes activos, con la ventaja adicional de corregir el acetábulo comprometido.
      </p>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">Recuperación</h2>
      <p>
        Con los protocolos ERAS modernos, la movilización postcirugía es precoz: el paciente
        se levanta con apoyo el mismo día o al día siguiente, incluso tras una fractura.
        La rehabilitación kinésica es fundamental y debe iniciarse dentro de las primeras
        24-48 horas. El retorno a la marcha independiente y a las actividades básicas toma
        entre 6 semanas y 3 meses según el tipo de fractura y el implante utilizado.
      </p>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">Atención en Clínica Bupa Santiago</h2>
      <p>
        El Dr. Rodrigo Olivares M. atiende fracturas de cadera en Clínica Bupa Santiago,
        con experiencia en fijación con clavo cefalomedular, hemiartroplastia cementada y
        artroplastia total de cadera en el contexto de fractura. Si un familiar sufrió una
        caída con dolor intenso en la cadera e incapacidad para caminar, la evaluación en
        urgencias de Clínica Bupa permite diagnóstico rápido y cirugía oportuna.
      </p>

      <p className="text-sm text-slate-400 italic mt-10">
        Este artículo tiene fines informativos y educativos. No reemplaza una consulta médica
        presencial ni constituye un diagnóstico.
      </p>
    </BlogLayout>
  );
}
