import { BlogLayout, type BlogMeta } from '../../components/blog/BlogLayout';

const meta: BlogMeta = {
  slug: 'cirugia-revision-cadera',
  title: 'Cirugía de Revisión de Cadera en Clínica Bupa Santiago | Dr. Rodrigo Olivares M.',
  description: 'Qué es la cirugía de revisión de cadera, cuándo se necesita, causas de fallo de prótesis y cómo es el proceso quirúrgico. Dr. Rodrigo Olivares M. en Clínica Bupa Santiago.',
  badge: 'Cirugía de cadera',
  datePublished: '2026-07-14',
  readingTime: '7 min',
  faq: [
    {
      question: '¿Qué es la cirugía de revisión de cadera?',
      answer: 'La cirugía de revisión de cadera es el procedimiento que reemplaza uno o más componentes de una prótesis de cadera previa que ha fallado, se ha desgastado o ha generado complicaciones. Es técnicamente más compleja que la artroplastia primaria y requiere un cirujano con experiencia específica en revisión de implantes.',
    },
    {
      question: '¿Cuándo es necesaria una revisión de prótesis de cadera?',
      answer: 'Las causas más frecuentes son: desgaste del polietileno o la cerámica, aflojamiento aséptico del componente (pérdida de fijación al hueso), infección periprotésica, inestabilidad recurrente (luxaciones de la prótesis), fractura periprotésica o fallo del material del implante. El dolor persistente sin causa clara después de una artroplastia también puede indicar la necesidad de revisión.',
    },
    {
      question: '¿Dónde se realiza la cirugía de revisión de cadera en Santiago?',
      answer: 'El Dr. Rodrigo Olivares M. realiza cirugía de revisión de prótesis de cadera en Clínica Bupa Santiago. La revisión de cadera requiere instrumental especializado, banco de implantes de revisión y equipo quirúrgico con experiencia en cirugía reconstructiva compleja, disponibles en Clínica Bupa.',
    },
    {
      question: '¿Es más difícil recuperarse de una revisión de cadera que de una cirugía primaria?',
      answer: 'Sí, en general la recuperación de una revisión de cadera es más larga y exigente que la de una artroplastia primaria. Depende de la causa del fallo, la cantidad de hueso perdido y los componentes que se revisan. El tiempo de recuperación y las restricciones de apoyo se definen caso a caso.',
    },
    {
      question: '¿Cuánto dura una prótesis de revisión de cadera?',
      answer: 'Las prótesis de revisión tienen tasas de supervivencia menores que las primarias debido al menor stock óseo disponible. Los estudios reportan tasas de supervivencia del 70-85% a los 10-15 años, dependiendo de la causa del fallo original. La cirugía de revisión por infección tiene el peor pronóstico; la revisión por desgaste aislado tiene mejores resultados.',
    },
  ],
};

export default function CirugiaRevisionCadera() {
  return (
    <BlogLayout meta={meta}>
      <h1 className="font-serif text-3xl md:text-4xl text-slate-900 mb-2">
        Cirugía de Revisión de Cadera en Clínica Bupa Santiago
      </h1>

      <p>
        La cirugía de revisión de cadera es uno de los procedimientos más desafiantes en
        ortopedia. A diferencia de la artroplastia primaria, la revisión enfrenta un hueso
        comprometido, tejidos cicatrizales y la necesidad de reconstruir lo que el implante
        anterior dejó. El Dr. Rodrigo Olivares M. realiza cirugía de revisión de prótesis
        de cadera en Clínica Bupa Santiago.
      </p>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">¿Cuándo se necesita una revisión?</h2>
      <p>Las causas más frecuentes de fallo de una prótesis de cadera son:</p>
      <ul className="list-none space-y-2">
        <li>· <span className="font-medium text-slate-700">Aflojamiento aséptico:</span> el implante pierde la fijación al hueso sin que haya infección. Es la causa más común de revisión a largo plazo.</li>
        <li>· <span className="font-medium text-slate-700">Desgaste del par de fricción:</span> desgaste del polietileno o la cerámica que genera partículas y osteólisis (reabsorción ósea).</li>
        <li>· <span className="font-medium text-slate-700">Infección periprotésica:</span> la más grave, requiere uno o dos tiempos quirúrgicos dependiendo del patógeno y el estado del hueso.</li>
        <li>· <span className="font-medium text-slate-700">Inestabilidad recurrente:</span> luxaciones repetidas que no se controlan con tratamiento conservador.</li>
        <li>· <span className="font-medium text-slate-700">Fractura periprotésica:</span> fractura del fémur alrededor del vástago protésico, requiere manejo combinado traumatológico y de revisión.</li>
      </ul>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">El proceso de evaluación antes de la revisión</h2>
      <p>
        La evaluación preoperatoria de una revisión de cadera incluye radiografías comparativas
        con las imágenes previas para cuantificar la pérdida ósea, tomografía computarizada
        para planificación del stock óseo, y estudios de laboratorio para descartar infección
        silente (PCR, VHS, y en casos seleccionados, punción articular con cultivo).
      </p>
      <p>
        La clasificación de la pérdida ósea (sistemas Paprosky para el fémur y el acetábulo)
        determina el tipo de implante de revisión y si se requerirá injerto óseo o implantes
        con refuerzos metálicos.
      </p>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">La cirugía de revisión paso a paso</h2>
      <ul className="list-none space-y-3">
        <li>· <span className="font-medium text-slate-700">Extracción del implante fallido:</span> se retiran los componentes sueltos o infectados minimizando la pérdida ósea adicional.</li>
        <li>· <span className="font-medium text-slate-700">Reconstrucción del stock óseo:</span> se utiliza injerto óseo (autoinjerto o aloinjerto) o metales trabeculares porosos cuando hay pérdida significativa.</li>
        <li>· <span className="font-medium text-slate-700">Implantación del nuevo componente:</span> se selecciona el implante de revisión adecuado al defecto óseo según la clasificación preoperatoria.</li>
        <li>· <span className="font-medium text-slate-700">En casos de infección (2 tiempos):</span> primer tiempo de desbridamiento y colocación de espaciador con antibióticos, y segundo tiempo de reimplante tras erradicar la infección.</li>
      </ul>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">Recuperación</h2>
      <p>
        La recuperación de una revisión de cadera es más lenta que la de una artroplastia
        primaria. El apoyo sobre la extremidad puede estar restringido varias semanas si se
        utilizó injerto óseo. La rehabilitación kinésica supervisada es especialmente importante
        en este contexto. El protocolo de recuperación se define caso a caso según los hallazgos
        quirúrgicos.
      </p>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">Atención en Clínica Bupa Santiago</h2>
      <p>
        El Dr. Rodrigo Olivares M. atiende consultas de segunda opinión y evaluación para
        cirugía de revisión de cadera en Clínica Bupa Santiago. Si tiene una prótesis de cadera
        con dolor persistente, inestabilidad o sospecha de fallo, la evaluación especializada
        es el primer paso para determinar si una revisión es necesaria y cuándo.
      </p>

      <p className="text-sm text-slate-400 italic mt-10">
        Este artículo tiene fines informativos y educativos. No reemplaza una consulta médica
        presencial ni constituye un diagnóstico.
      </p>
    </BlogLayout>
  );
}
