import { BlogLayout, type BlogMeta } from '../../components/blog/BlogLayout';

const meta: BlogMeta = {
  slug: 'reemplazo-total-cadera-artroplastia',
  title: 'Reemplazo Total de Cadera (Artroplastía): Qué es y Cómo Funciona | Dr. Rodrigo Olivares M.',
  description: 'Guía médica sobre el reemplazo total de cadera o artroplastía: qué es, cómo se realiza, tipos de prótesis, duración y qué esperar antes y después de la cirugía.',
  badge: 'Cirugía de cadera',
  datePublished: '2026-07-10',
  readingTime: '8 min',
  faq: [
    {
      question: '¿Qué es el reemplazo total de cadera?',
      answer: 'El reemplazo total de cadera (artroplastía de cadera) es una cirugía en la que se retiran las superficies articulares dañadas de la articulación coxofemoral —la cabeza del fémur y el acetábulo— y se reemplazan por componentes protésicos de alta resistencia (metal, cerámica o polietileno de alta densidad). El objetivo es eliminar el dolor y restaurar la movilidad.',
    },
    {
      question: '¿Cuánto dura una prótesis de cadera?',
      answer: 'Las prótesis modernas están diseñadas para durar más de 20 años en condiciones de uso normal. Los estudios de seguimiento a largo plazo muestran que más del 80% de las prótesis están en buen funcionamiento a los 20 años. La durabilidad depende del tipo de prótesis, el nivel de actividad del paciente y factores como el peso corporal.',
    },
    {
      question: '¿La cirugía de reemplazo de cadera es dolorosa?',
      answer: 'Con los protocolos modernos de analgesia multimodal y los abordajes mínimamente invasivos, el dolor postoperatorio es significativamente menor que hace 20 años. La mayoría de los pacientes describe la cirugía como "menos dolorosa de lo esperado". El protocolo ERAS permite levantarse y caminar al día siguiente con manejo del dolor adecuado.',
    },
    {
      question: '¿Cuáles son los riesgos del reemplazo de cadera?',
      answer: 'Como toda cirugía mayor, tiene riesgos: infección (menos del 1%), trombosis venosa profunda (se previene con anticoagulantes), luxación de la prótesis (poco frecuente con técnica adecuada), y a muy largo plazo, desgaste del componente que puede requerir una cirugía de revisión. El perfil de riesgo específico se evalúa en la consulta preoperatoria.',
    },
    {
      question: '¿Qué diferencia hay entre el abordaje anterior y posterior en la cirugía de cadera?',
      answer: 'El abordaje anterior (DAA) accede a la articulación por delante sin cortar músculos, lo que reduce el tiempo de recuperación y las restricciones postoperatorias. El abordaje posterior es más tradicional y puede ser preferible en casos anatómicamente complejos. El especialista determina la vía más adecuada según cada caso.',
    },
  ],
};

export default function ReemplazoTotalCadera() {
  return (
    <BlogLayout meta={meta}>
      <h1 className="font-serif text-3xl md:text-4xl text-slate-900 mb-2">
        Reemplazo Total de Cadera (Artroplastía): Qué es y Cómo Funciona
      </h1>

      <p>
        El reemplazo total de cadera —también llamado artroplastía de cadera— es una de las
        cirugías ortopédicas más realizadas en el mundo y una de las que tiene mayor impacto en
        la calidad de vida del paciente. En Chile, su indicación más frecuente es la artrosis de
        cadera en etapa avanzada, aunque también se realiza en casos de displasia, fractura de
        cuello femoral y artritis inflamatoria.
      </p>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">¿Qué se hace en la cirugía?</h2>
      <p>
        La cirugía consiste en retirar las superficies articulares dañadas y reemplazarlas por
        componentes protésicos:
      </p>
      <ul className="list-none space-y-2">
        <li>· <span className="font-medium text-slate-700">Componente acetabular (cúpula):</span> se ancla en la pelvis y recibe la cabeza femoral protésica. Puede ser de metal con recubrimiento de polietileno o cerámica.</li>
        <li>· <span className="font-medium text-slate-700">Vástago femoral:</span> se introduce en el canal medular del fémur para fijar la cabeza protésica. Puede ser cementado o no cementado (press-fit) según las características del hueso.</li>
        <li>· <span className="font-medium text-slate-700">Cabeza femoral:</span> la parte que articula con la cúpula. Disponible en cerámica, metal o polietileno de alta densidad.</li>
      </ul>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">Tipos de abordaje quirúrgico</h2>
      <p>
        La vía de acceso a la articulación es una decisión técnica importante:
      </p>
      <ul className="list-none space-y-3">
        <li>
          <span className="font-medium text-slate-700">Abordaje anterior (DAA — Direct Anterior Approach):</span> accede a la cadera por delante sin seccionar músculos. Permite una recuperación más rápida y menos restricciones postoperatorias. Es la vía que el Dr. Olivares utiliza en los casos apropiados.
        </li>
        <li>
          <span className="font-medium text-slate-700">Abordaje posterior:</span> la vía más tradicional, con acceso por detrás. Técnicamente versátil para casos complejos. Requiere algunas semanas de restricciones de movimiento adicionales.
        </li>
      </ul>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">¿Cuánto dura la prótesis?</h2>
      <p>
        Las prótesis modernas de cúpula-cerámica o metal-polietileno de alta densidad están
        diseñadas para durar más de 20 años. Los registros de artroplastía muestran tasas de
        supervivencia del implante superiores al 80% a los 20 años. La actividad física moderada
        no acelera el desgaste —al contrario, la musculatura activa protege el implante.
      </p>
      <p>
        Los factores que más influyen en la durabilidad son: el tipo de prótesis, el peso corporal,
        el nivel de actividad y la calidad del hueso al momento de la cirugía.
      </p>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">Protocolo ERAS: recuperación acelerada</h2>
      <p>
        Los protocolos ERAS (Enhanced Recovery After Surgery) han transformado la experiencia
        quirúrgica del reemplazo de cadera:
      </p>
      <ul className="list-none space-y-2">
        <li>· Analgesia multimodal: combinación de medicamentos que reduce la necesidad de opioides y sus efectos adversos.</li>
        <li>· Movilización precoz: el paciente se levanta y da pasos el mismo día o al día siguiente de la cirugía.</li>
        <li>· Alta hospitalaria en 2-4 días (antes eran 5-7).</li>
        <li>· Menor tasa de complicaciones: trombosis, neumonía y pérdida muscular se reducen significativamente.</li>
      </ul>

      <h2 className="font-serif text-2xl text-slate-900 mt-10 mb-3">Riesgos y complicaciones</h2>
      <p>
        En manos de un equipo especializado, las complicaciones graves son infrecuentes:
      </p>
      <ul className="list-none space-y-2">
        <li>· <span className="font-medium text-slate-700">Infección profunda:</span> menos del 1%. Se previene con antibióticos perioperatorios y técnica estéril rigurosa.</li>
        <li>· <span className="font-medium text-slate-700">Trombosis venosa:</span> se previene con anticoagulación y movilización precoz desde el protocolo ERAS.</li>
        <li>· <span className="font-medium text-slate-700">Luxación:</span> poco frecuente con las vías de acceso modernas y la educación postoperatoria adecuada.</li>
        <li>· <span className="font-medium text-slate-700">Revisión de prótesis:</span> puede ser necesaria a muy largo plazo si hay desgaste o aflojamiento del componente.</li>
      </ul>

      <p className="text-sm text-slate-400 italic mt-10">
        Este artículo tiene fines informativos y educativos. No reemplaza una consulta médica
        presencial ni constituye un diagnóstico.
      </p>
    </BlogLayout>
  );
}
