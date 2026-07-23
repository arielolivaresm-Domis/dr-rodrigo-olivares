import { BlogLayout, type BlogMeta } from '../../components/blog/BlogLayout';

const meta: BlogMeta = {
  slug: 'cadera-deportista-artroscopia',
  title: 'Cadera del Deportista: Artroscopía y Pinzamiento Femoroacetabular | Dr. Rodrigo Olivares M.',
  description: 'Guía sobre la patología de cadera en deportistas: pinzamiento femoroacetabular (FAI), lesión de labrum y artroscopía de cadera. Dr. Rodrigo Olivares M. en Clínica Bupa Santiago.',
  badge: 'Cadera del deportista',
  datePublished: '2026-07-14',
  readingTime: '7 min',
  faq: [
    {
      question: '¿Qué es el pinzamiento femoroacetabular (FAI)?',
      answer: 'El pinzamiento femoroacetabular (FAI por sus siglas en inglés) es un choque anormal entre la cabeza femoral y el borde del acetábulo durante el movimiento de la cadera. Se divide en tipo CAM (deformidad en la cabeza del fémur), tipo PINCER (exceso de cobertura acetabular) o mixto. Con el tiempo daña el labrum y el cartílago articular.',
    },
    {
      question: '¿Qué es el labrum de la cadera y qué pasa cuando se rompe?',
      answer: 'El labrum es el rodete fibrocartilaginoso que rodea el borde del acetábulo, profundizando la cavidad y estabilizando la articulación. Una lesión del labrum puede causar dolor en la ingle, sensación de trancazo o clic al mover la cadera, y es frecuente en deportistas con FAI o hiperlaxitud. La artroscopía de cadera permite repararlo o resecarlo según el tipo de lesión.',
    },
    {
      question: '¿En qué consiste la artroscopía de cadera?',
      answer: 'La artroscopía de cadera es una cirugía mínimamente invasiva que se realiza con portales de 1 cm. Permite visualizar el interior de la articulación, tratar la deformidad causante del FAI (osteoplastia), reparar o resecar el labrum dañado, y tratar lesiones del cartílago. La recuperación es más rápida que con cirugía abierta y preserva la función articular.',
    },
    {
      question: '¿Quién realiza artroscopía de cadera en Clínica Bupa Santiago?',
      answer: 'El Dr. Rodrigo Olivares M. realiza artroscopía de cadera en Clínica Bupa Santiago. Es el tratamiento de elección para el pinzamiento femoroacetabular y las lesiones de labrum en pacientes jóvenes y deportistas que quieren volver a su nivel de actividad previo.',
    },
    {
      question: '¿Cuánto demora la recuperación de una artroscopía de cadera?',
      answer: 'La recuperación de una artroscopía de cadera varía según el procedimiento realizado: si solo se trató el FAI y se resecó labrum, el retorno al deporte puede ser en 3-4 meses. Si se realizó reparación de labrum, el plazo se extiende a 4-6 meses con protocolo de rehabilitación específico. El retorno al deporte de alta exigencia requiere evaluación funcional previa.',
    },
  ],
};

export default function CaderaDeportista() {
  return (
    <BlogLayout meta={meta}>
      <h1 className="font-serif text-3xl md:text-4xl text-slate-900 mb-2">
        Cadera del Deportista: Artroscopía y Pinzamiento Femoroacetabular
      </h1>

      <p>
        El dolor de cadera en deportistas jóvenes tiene causas distintas a las del adulto mayor
        con artrosis. Las más frecuentes son el pinzamiento femoroacetabular (FAI) y la lesión
        del labrum, dos condiciones íntimamente relacionadas que pueden tratarse de forma
        efectiva con artroscopía de cadera. El Dr. Rodrigo Olivares M. atiende patología
        de cadera del deportista en Clínica Bupa Santiago.
      </p>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">Pinzamiento femoroacetabular (FAI)</h2>
      <p>
        El FAI ocurre cuando hay una deformidad morfológica en la cabeza femoral, en el
        acetábulo, o en ambos, que genera un choque mecánico en los rangos extremos de
        movimiento —especialmente en la flexión y la rotación interna de la cadera.
      </p>
      <ul className="list-none space-y-2 mt-4">
        <li>· <span className="font-medium text-slate-700">Tipo CAM:</span> deformidad en la unión cabeza-cuello femoral que choca contra el reborde acetabular al flexionar. Más frecuente en hombres y deportistas.</li>
        <li>· <span className="font-medium text-slate-700">Tipo PINCER:</span> exceso de cobertura del acetábulo que atrapa el labrum. Más frecuente en mujeres.</li>
        <li>· <span className="font-medium text-slate-700">Tipo mixto:</span> combinación de ambas deformidades, el más habitual en la práctica clínica.</li>
      </ul>
      <p className="mt-4">
        Con el tiempo, el choque repetido daña el labrum y el cartílago articular, acelerando
        el desarrollo de artrosis si no se corrige la causa.
      </p>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">Lesión de labrum de cadera</h2>
      <p>
        El labrum es el rodete fibrocartilaginoso que rodea el borde del acetábulo. Su función
        es profundizar la cavidad articular, distribuir las cargas y sellar el líquido sinovial
        dentro de la articulación. Cuando el FAI u otra condición lo daña, aparece dolor en
        la ingle, sensación de chasquido o trancazo, y en etapas avanzadas, dolor constante
        que limita el deporte.
      </p>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">¿Quién tiene riesgo de FAI?</h2>
      <ul className="list-none space-y-2">
        <li>· Deportistas que practican fútbol, rugby, artes marciales, hockey, natación o ciclismo.</li>
        <li>· Bailarines y gimnastas con rangos de movimiento extremos.</li>
        <li>· Personas con antecedente de displasia de cadera o epifisiolisis.</li>
        <li>· Adultos jóvenes (18-40 años) con dolor inguinal inexplicado que empeora con la actividad.</li>
      </ul>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">Diagnóstico</h2>
      <p>
        La combinación de una historia clínica compatible, el test de impingement positivo
        (dolor al flexionar y rotar internamente la cadera) y las imágenes confirman el
        diagnóstico. La radiografía de pelvis identifica la morfología CAM o PINCER. La
        resonancia magnética con artro-RM permite visualizar el estado del labrum y el
        cartílago en detalle.
      </p>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">Artroscopía de cadera — el tratamiento</h2>
      <p>
        La artroscopía de cadera es el gold standard para tratar el FAI con lesión de
        labrum sintomática que no responde al manejo conservador (fisioterapia, modificación
        de actividades, antiinflamatorios).
      </p>
      <p>
        Mediante 2-3 portales de acceso mínimo (incisiones de 1 cm), el cirujano:
      </p>
      <ul className="list-none space-y-2 mt-3">
        <li>· Corrige la deformidad morfológica (osteoplastia CAM o resección del exceso PINCER).</li>
        <li>· Repara el labrum con suturas o lo resecar cuando no tiene capacidad de cicatrización.</li>
        <li>· Trata las lesiones de cartílago asociadas según su extensión y profundidad.</li>
      </ul>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">Recuperación y retorno al deporte</h2>
      <ul className="list-none space-y-2">
        <li>· <span className="font-medium text-slate-700">Días 1-14:</span> muletas parciales, inicio de ejercicios de movilidad pasiva.</li>
        <li>· <span className="font-medium text-slate-700">Semanas 2-6:</span> apoyo completo progresivo, inicio de fortalecimiento de glúteos y core.</li>
        <li>· <span className="font-medium text-slate-700">Meses 2-4:</span> trote suave, bicicleta estacionaria, ejercicios deportivos específicos.</li>
        <li>· <span className="font-medium text-slate-700">Meses 4-6:</span> retorno al deporte de competición con clearance funcional del especialista.</li>
      </ul>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">Atención en Clínica Bupa Santiago</h2>
      <p>
        El Dr. Rodrigo Olivares M. es el especialista en cadera del deportista de Clínica
        Bupa Santiago. Si eres deportista con dolor inguinal persistente, sensación de
        trancazo en la cadera o limitación en el rendimiento, agenda una evaluación
        para determinar si el FAI o una lesión de labrum es la causa.
      </p>

      <p className="text-sm text-slate-400 italic mt-10">
        Este artículo tiene fines informativos y educativos. No reemplaza una consulta médica
        presencial ni constituye un diagnóstico.
      </p>
    </BlogLayout>
  );
}
