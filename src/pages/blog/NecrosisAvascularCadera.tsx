import { BlogLayout, type BlogMeta } from '../../components/blog/BlogLayout';

const meta: BlogMeta = {
  slug: 'necrosis-avascular-cadera',
  title: 'Necrosis Avascular de Cadera: Causas y Tratamiento | Dr. Rodrigo Olivares M.',
  description: 'Qué es la necrosis avascular de cadera (osteonecrosis de la cabeza femoral), sus causas, estadios y opciones de tratamiento desde descompresión central hasta reemplazo total. Clínica Bupa Santiago.',
  badge: 'Patología de cadera',
  datePublished: '2026-07-14',
  readingTime: '7 min',
  faq: [
    {
      question: '¿Qué es la necrosis avascular de cadera?',
      answer: 'La necrosis avascular de cadera (también llamada osteonecrosis de la cabeza femoral) es la muerte del tejido óseo de la cabeza femoral por interrupción del aporte sanguíneo. Sin sangre, el hueso se necrosa y la cabeza femoral puede colapsar, destruyendo la articulación de la cadera.',
    },
    {
      question: '¿Cuáles son las causas de la necrosis avascular de cadera?',
      answer: 'Las causas más frecuentes son: uso prolongado de corticoides en dosis altas (la causa más común en adultos jóvenes), consumo excesivo de alcohol, fractura de cuello femoral, luxación traumática de cadera, coagulopatías, enfermedad por descompresión (buzos), anemia falciforme y lupus eritematoso sistémico. En un 10-20% de los casos no se identifica una causa (necrosis idiopática).',
    },
    {
      question: '¿La necrosis avascular de cadera siempre requiere cirugía?',
      answer: 'No siempre, pero la mayoría de los casos sintomáticos con compromiso estructural de la cabeza femoral eventualmente requieren tratamiento quirúrgico. En estadios muy iniciales (sin colapso), procedimientos como la descompresión central pueden estabilizar la enfermedad. Una vez que la cabeza femoral ha colapsado, el reemplazo total de cadera es el tratamiento definitivo.',
    },
    {
      question: '¿Dónde se trata la necrosis avascular de cadera en Santiago?',
      answer: 'El Dr. Rodrigo Olivares M. atiende necrosis avascular de cadera en Clínica Bupa Santiago. Tiene experiencia en el diagnóstico por etapas de la enfermedad y en las opciones quirúrgicas según el estadio: desde la descompresión central en etapas tempranas hasta el reemplazo total de cadera en etapas con colapso establecido.',
    },
    {
      question: '¿Se puede prevenir la necrosis avascular de cadera en pacientes que toman corticoides?',
      answer: 'No existe una prevención completamente efectiva, pero reducir la dosis de corticoides al mínimo necesario, evitar el alcohol y hacer seguimiento con resonancia magnética en pacientes de alto riesgo permite detectar la necrosis en estadios iniciales, cuando las opciones de preservación articular aún son posibles.',
    },
  ],
};

export default function NecrosisAvascularCadera() {
  return (
    <BlogLayout meta={meta}>
      <h1 className="font-serif text-3xl md:text-4xl text-slate-900 mb-2">
        Necrosis Avascular de Cadera: Causas y Tratamiento
      </h1>

      <p>
        La necrosis avascular de cadera —también denominada osteonecrosis de la cabeza
        femoral— es una enfermedad que destruye el hueso desde adentro, a menudo en pacientes
        jóvenes y sin síntomas previos de artrosis. Si no se detecta y trata oportunamente,
        puede llevar al colapso de la cabeza femoral y a la destrucción completa de la
        articulación. El Dr. Rodrigo Olivares M. atiende esta patología en Clínica Bupa
        Santiago.
      </p>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">¿Qué ocurre en la necrosis avascular?</h2>
      <p>
        La cabeza femoral recibe sangre a través de vasos de pequeño calibre que son
        especialmente vulnerables. Cuando el flujo sanguíneo se interrumpe —por cualquier
        causa— el hueso de la cabeza femoral empieza a morir. Sin soporte estructural,
        la cabeza eventualmente colapsa bajo el peso del cuerpo, destruyendo el cartílago
        articular y generando una artrosis secundaria grave.
      </p>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">Causas más frecuentes</h2>
      <ul className="list-none space-y-2">
        <li>· <span className="font-medium text-slate-700">Corticoides:</span> el uso prolongado en dosis altas (por enfermedades autoinmunes, trasplantes o asma grave) es la causa más frecuente de necrosis avascular en adultos jóvenes.</li>
        <li>· <span className="font-medium text-slate-700">Alcohol:</span> el consumo crónico excesivo interfiere con el metabolismo lipídico y la microcirculación ósea.</li>
        <li>· <span className="font-medium text-slate-700">Trauma:</span> fractura de cuello femoral o luxación traumática de cadera que interrumpe directamente los vasos que nutren la cabeza femoral.</li>
        <li>· <span className="font-medium text-slate-700">Enfermedades hematológicas:</span> anemia falciforme, coagulopatías, trombofilia.</li>
        <li>· <span className="font-medium text-slate-700">Otras:</span> lupus eritematoso, enfermedad por descompresión, radioterapia pélvica.</li>
        <li>· <span className="font-medium text-slate-700">Idiopática:</span> hasta el 20% de los casos no tiene una causa identificable.</li>
      </ul>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">Síntomas</h2>
      <p>
        En estadios iniciales, la necrosis avascular puede ser completamente asintomática
        o generar dolor inguinal leve que se confunde con una contractura muscular. A medida
        que la cabeza femoral empieza a colapsar, el dolor se intensifica, aparece en reposo
        y limita progresivamente la marcha. A diferencia de la artrosis, el rango de
        movimiento suele estar relativamente preservado hasta etapas avanzadas.
      </p>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">Diagnóstico por estadios</h2>
      <p>
        La resonancia magnética es el estudio de elección para el diagnóstico precoz de
        necrosis avascular —la radiografía puede ser normal en los primeros meses. La
        clasificación más utilizada es la de ARCO (Association Research Circulation Osseous):
      </p>
      <ul className="list-none space-y-2 mt-3">
        <li>· <span className="font-medium text-slate-700">Estadios I-II:</span> alteraciones en RM sin colapso radiológico. Son los más favorables para procedimientos de preservación.</li>
        <li>· <span className="font-medium text-slate-700">Estadio III:</span> colapso subcondral (el "signo del creciente" en radiografía) sin pérdida del espacio articular.</li>
        <li>· <span className="font-medium text-slate-700">Estadio IV:</span> colapso establecido con destrucción articular y pérdida del espacio. Indicación de reemplazo total de cadera.</li>
      </ul>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">Opciones de tratamiento</h2>

      <h3 className="font-medium text-lg text-slate-800 mt-6 mb-2">Descompresión central (estadios I-II)</h3>
      <p>
        Consiste en perforar la cabeza femoral para reducir la presión intraósea y estimular
        la revascularización. Puede realizarse con o sin injerto óseo vascularizado. En
        estadios iniciales, puede detener o retrasar la progresión hacia el colapso.
        Los resultados son más predecibles cuanto menor es el volumen de necrosis y más
        precoz es la intervención.
      </p>

      <h3 className="font-medium text-lg text-slate-800 mt-6 mb-2">Osteotomías de reorientación</h3>
      <p>
        En casos seleccionados (lesión pequeña, paciente joven, buen stock óseo), se puede
        rotar la cabeza femoral para que la zona necrótica quede fuera del área de carga,
        utilizando cartílago sano como superficie articular. Son procedimientos técnicamente
        exigentes con indicación muy precisa.
      </p>

      <h3 className="font-medium text-lg text-slate-800 mt-6 mb-2">Reemplazo total de cadera (estadios III-IV)</h3>
      <p>
        Cuando la cabeza femoral ya colapsó y hay destrucción articular, el reemplazo total
        de cadera es el tratamiento definitivo. El Dr. Rodrigo Olivares M. lo realiza en
        Clínica Bupa Santiago. La artroplastia total en este contexto tiene resultados
        comparables a los de la artroplastia por artrosis primaria en manos experimentadas.
      </p>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">Atención en Clínica Bupa Santiago</h2>
      <p>
        Si tiene factores de riesgo para necrosis avascular (uso de corticoides, consumo
        de alcohol, fractura de cadera previa) y dolor inguinal sin explicación, una
        resonancia magnética de cadera puede detectar la enfermedad en estadio temprano.
        El Dr. Rodrigo Olivares M. evalúa y trata la necrosis avascular de cadera en
        Clínica Bupa Santiago en todos sus estadios.
      </p>

      <p className="text-sm text-slate-400 italic mt-10">
        Este artículo tiene fines informativos y educativos. No reemplaza una consulta médica
        presencial ni constituye un diagnóstico.
      </p>
    </BlogLayout>
  );
}
