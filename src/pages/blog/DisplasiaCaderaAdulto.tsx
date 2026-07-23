import { BlogLayout, type BlogMeta } from '../../components/blog/BlogLayout';

const meta: BlogMeta = {
  slug: 'displasia-cadera-adulto',
  title: 'Displasia de Cadera en el Adulto: Síntomas y Tratamiento | Dr. Rodrigo Olivares M.',
  description: 'Guía médica sobre la displasia de cadera en adultos: qué es, por qué causa dolor en jóvenes, diagnóstico, opciones de tratamiento y cuándo requiere cirugía.',
  badge: 'Patología de cadera',
  datePublished: '2026-07-12',
  readingTime: '7 min',
  faq: [
    {
      question: '¿Qué es la displasia de cadera en adultos?',
      answer: 'La displasia de cadera en adultos es una malformación de la articulación coxofemoral en la que el acetábulo (cavidad de la pelvis que recibe la cabeza del fémur) es insuficiente: poco profundo, inclinado o ambas cosas. Esto genera una cobertura deficiente de la cabeza femoral, lo que aumenta la presión sobre el cartílago y el labrum, causando dolor y desgaste prematuro.',
    },
    {
      question: '¿La displasia de cadera siempre duele desde niño?',
      answer: 'No necesariamente. Muchos casos de displasia de cadera leve o moderada pasan desapercibidos en la infancia y se manifiestan como dolor en jóvenes adultos (20-40 años), especialmente al realizar actividad física intensa o deportes. Es una causa frecuente de dolor de cadera inexplicado en personas jóvenes sin artrosis evidente.',
    },
    {
      question: '¿Cómo se diagnostica la displasia de cadera en adultos?',
      answer: 'El diagnóstico se confirma con una radiografía de pelvis que mide el ángulo de cobertura lateral (LCE) del acetábulo. Un ángulo inferior a 25 grados indica displasia. La resonancia magnética con artro-RM permite evaluar el estado del labrum y el cartílago articular en detalle.',
    },
    {
      question: '¿La displasia de cadera se puede tratar sin cirugía en adultos?',
      answer: 'En etapas iniciales, el manejo conservador (fisioterapia, modificación de actividades, analgesia) puede controlar los síntomas temporalmente. Sin embargo, la displasia que genera inestabilidad articular y daño del labrum progresa hacia la artrosis en la mayoría de los casos sin corrección quirúrgica de la malformación subyacente.',
    },
    {
      question: '¿Qué cirugía se hace para la displasia de cadera en adultos?',
      answer: 'Dependiendo de la edad, el grado de displasia y el estado del cartílago articular, existen dos opciones principales: la osteotomía periacetabular (PAO) —reorienta el acetábulo para mejorar la cobertura, en pacientes jóvenes con cartílago conservado— o el reemplazo total de cadera, cuando hay artrosis avanzada secundaria a la displasia.',
    },
  ],
};

export default function DisplasiaCaderaAdulto() {
  return (
    <BlogLayout meta={meta}>
      <h1 className="font-serif text-3xl md:text-4xl text-slate-900 mb-2">
        Displasia de Cadera en el Adulto: Síntomas y Tratamiento
      </h1>

      <p>
        La displasia de cadera es una de las causas más frecuentes de dolor de cadera en adultos
        jóvenes (20 a 45 años) y una de las más subdiagnosticadas. A diferencia de lo que
        muchos creen, no siempre se detecta en la infancia: una displasia leve o moderada puede
        pasar desapercibida hasta que el desgaste articular se hace sintomático en la edad adulta.
      </p>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">¿Qué es la displasia de cadera?</h2>
      <p>
        En una cadera normal, el acetábulo (la cavidad de la pelvis) cubre de forma amplia la
        cabeza del fémur, distribuyendo las cargas de manera uniforme. En la displasia, el
        acetábulo es poco profundo o está mal inclinado, lo que genera una cobertura insuficiente.
        El resultado es una concentración de presiones en una zona pequeña del cartílago y del
        labrum (el rodete fibrocartilaginoso que profundiza la cavidad), que se deterioran
        prematuramente.
      </p>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">Síntomas en el adulto</h2>
      <ul className="list-none space-y-2">
        <li>· Dolor en la ingle, a veces irradiado al muslo o la región lateral de la cadera.</li>
        <li>· Síntomas que empeoran con actividad intensa: correr, saltar, girar sobre el eje.</li>
        <li>· Sensación de "trancazo" o chasquido en la cadera (signo de lesión del labrum).</li>
        <li>· Dolor al permanecer largo tiempo sentado con la cadera flexionada.</li>
        <li>· En etapas avanzadas, dolor en reposo o nocturno cuando ya existe artrosis secundaria.</li>
      </ul>
      <p>
        Es frecuente que estos pacientes hayan sido diagnosticados erróneamente durante años con
        "dolor de cadera inespecífico" o "contractura muscular" antes de llegar al diagnóstico
        correcto.
      </p>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">Diagnóstico</h2>
      <p>
        El estudio parte con una radiografía de pelvis anteroposterior. El parámetro principal
        es el <em>ángulo de cobertura lateral</em> (LCE — Lateral Centre-Edge angle): valores
        inferiores a 25 grados definen displasia. Se complementa con proyecciones oblicuas para
        evaluar la cobertura anterior.
      </p>
      <p>
        La resonancia magnética con artro-RM (inyección de contraste intrararticular) permite
        visualizar el estado del labrum y el cartílago con alta precisión, información
        fundamental para planificar el tratamiento.
      </p>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">Opciones de tratamiento</h2>

      <h3 className="font-medium text-lg text-slate-800 mt-6 mb-2">Manejo conservador</h3>
      <p>
        En pacientes con displasia leve y síntomas moderados, la fisioterapia orientada a
        fortalecer la musculatura periarticular (glúteos y pelvis) puede mejorar la estabilidad
        funcional y controlar los síntomas. Los analgésicos y antiinflamatorios ayudan en las
        crisis. Sin embargo, el manejo conservador no corrige la malformación subyacente.
      </p>

      <h3 className="font-medium text-lg text-slate-800 mt-6 mb-2">Osteotomía periacetabular (PAO)</h3>
      <p>
        En pacientes jóvenes (generalmente menores de 40 años) con cartílago articular conservado,
        la PAO es el tratamiento de elección para la displasia sintomática. Consiste en cortar el
        acetábulo en forma controlada y reorientarlo para aumentar la cobertura de la cabeza
        femoral. La cirugía corrige la malformación y previene o retrasa el desarrollo de artrosis.
        La recuperación toma 3 a 6 meses.
      </p>

      <h3 className="font-medium text-lg text-slate-800 mt-6 mb-2">Reemplazo total de cadera</h3>
      <p>
        Cuando la displasia ha causado artrosis avanzada —especialmente en pacientes mayores de
        45-50 años con destrucción articular significativa— la indicación es el reemplazo total
        de cadera. Es técnicamente más compleja que en una cadera normal por la malformación del
        acetábulo, y requiere un cirujano con experiencia específica en displasia.
      </p>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">¿Cuándo consultar?</h2>
      <p>
        Si eres adulto joven con dolor recurrente en la ingle o la cadera, especialmente al
        hacer deporte o ejercicio intenso, sin una explicación clara tras múltiples consultas,
        vale la pena solicitar una radiografía de pelvis y evaluarte con un especialista en
        cadera. El diagnóstico temprano abre opciones terapéuticas que no son posibles cuando
        la artrosis ya está establecida.
      </p>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">Atención en Clínica Bupa Santiago</h2>
      <p>
        El Dr. Rodrigo Olivares M. atiende displasia de cadera en adultos en Clínica Bupa
        Santiago, con experiencia en osteotomía periacetabular (PAO) para casos con
        cartílago conservado y en artroplastia total de cadera cuando la displasia ha
        generado artrosis avanzada.
      </p>

      <p className="text-sm text-slate-400 italic mt-10">
        Este artículo tiene fines informativos y educativos. No reemplaza una consulta médica
        presencial ni constituye un diagnóstico.
      </p>
    </BlogLayout>
  );
}
