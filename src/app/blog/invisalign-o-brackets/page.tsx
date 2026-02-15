import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbSchema, getFAQSchema } from '@/lib/schema';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AccordionItem } from '@/components/ui/AccordionItem';

export const metadata: Metadata = generatePageMetadata({
  title: '¿Invisalign o brackets? Cómo elegir el mejor tratamiento de ortodoncia',
  description:
    'Comparativa detallada entre Invisalign y brackets de autoligado: diferencias, ventajas, inconvenientes y cuándo elegir cada sistema. Hugo Gómez, ortodoncista en Valencia.',
  path: '/blog/invisalign-o-brackets',
});

const faqItems = [
  {
    question: '¿Invisalign es más caro que los brackets?',
    answer:
      'No necesariamente. El precio de ambos sistemas depende de la complejidad del caso, la duración estimada del tratamiento y las necesidades específicas de cada paciente. En muchas situaciones la diferencia de coste es mínima o inexistente. Lo más recomendable es consultar con el ortodoncista para obtener un presupuesto personalizado tras el diagnóstico.',
  },
  {
    question: '¿Se pueden combinar ambos sistemas?',
    answer:
      'Sí. En determinados casos el ortodoncista puede planificar una primera fase con brackets para resolver movimientos que requieren un control muy preciso y completar el tratamiento con alineadores, o viceversa. Esta combinación permite aprovechar las fortalezas de cada sistema según la fase del tratamiento.',
  },
  {
    question: '¿Cuánto dura el tratamiento con cada sistema?',
    answer:
      'La duración depende fundamentalmente de la complejidad del caso, no tanto del sistema elegido. Casos leves pueden resolverse en 6-12 meses, mientras que maloclusiones más complejas pueden requerir 18-24 meses o más. El ortodoncista establece una estimación realista tras el estudio completo del caso.',
  },
];

export default function InvisalignOBracketsPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: 'Inicio', href: '/' },
          { name: 'Blog', href: '/blog' },
          { name: 'Invisalign o brackets', href: '/blog/invisalign-o-brackets' },
        ])}
      />
      <JsonLd data={getFAQSchema(faqItems)} />

      {/* Breadcrumb visible */}
      <nav className="pt-8 px-4 sm:px-6 lg:px-8" aria-label="Breadcrumb">
        <div className="max-w-3xl mx-auto">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-primary-600 transition-colors">
                Inicio
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/blog" className="hover:text-primary-600 transition-colors">
                Blog
              </Link>
            </li>
            <li>/</li>
            <li className="text-primary-700 font-medium">Invisalign o brackets</li>
          </ol>
        </div>
      </nav>

      <article className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            as="h1"
            title="¿Invisalign o brackets? Cómo elegir el mejor tratamiento"
            subtitle="Comparativa profesional entre los dos grandes sistemas de ortodoncia para que tomes una decisión informada."
            centered={false}
          />

          <time className="block text-sm text-gray-500 mb-10">3 de febrero de 2025</time>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            {/* Introducción */}
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-900 pt-4">
              Introducción: la duda más habitual
            </h2>
            <p>
              &laquo;¿Qué es mejor, Invisalign o brackets?&raquo; Es, con diferencia, la pregunta que
              más se repite en la primera consulta de ortodoncia. Se busca en internet, se pregunta a
              conocidos y se leen opiniones de todo tipo. Sin embargo, la respuesta no es universal:
              depende de cada caso clínico.
            </p>
            <p>
              En este artículo, Hugo Gómez analiza las diferencias reales entre
              Invisalign y los brackets de autoligado, explica en qué situaciones puede ser más adecuado
              cada sistema y, sobre todo, pone en contexto lo que verdaderamente determina el éxito de
              un tratamiento de ortodoncia.
            </p>

            {/* Qué es Invisalign */}
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-900 pt-4">
              ¿Qué es Invisalign?
            </h2>
            <p>
              Invisalign es un sistema de ortodoncia basado en alineadores transparentes fabricados a
              medida. El paciente recibe una serie secuencial de férulas plásticas que va cambiando cada
              7-14 días. Cada alineador está diseñado para producir movimientos específicos y
              progresivos en los dientes.
            </p>
            <p>
              Todo el tratamiento se planifica de forma digital antes de comenzar: mediante un escáner
              intraoral y un software especializado, el ortodoncista puede visualizar y modificar cada
              movimiento previsto. Los alineadores son removibles, lo que permite retirarlos para comer
              y para la higiene bucal diaria.
            </p>

            {/* Qué son los brackets de autoligado */}
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-900 pt-4">
              ¿Qué son los brackets de autoligado?
            </h2>
            <p>
              Los brackets de autoligado son pequeñas piezas que se adhieren a la superficie de los
              dientes y se conectan mediante un arco que ejerce las fuerzas necesarias para mover la
              dentición. A diferencia de los brackets convencionales, los de autoligado incorporan un
              mecanismo de clip que sujeta el arco sin necesidad de ligaduras elásticas.
            </p>
            <p>
              Pueden ser metálicos o cerámicos (del color del diente). Su diseño reduce la fricción
              durante el tratamiento y puede espaciar las visitas de revisión. Es un sistema fijo: el
              paciente no puede retirarlo por su cuenta, lo que garantiza que las fuerzas actúen de
              forma continua las 24 horas del día.
            </p>

            {/* Comparativa con cards */}
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-900 pt-4">
              Comparativa: Invisalign frente a brackets
            </h2>
            <p>
              A continuación se repasan los aspectos clave en los que ambos sistemas presentan
              diferencias relevantes para el paciente:
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-primary-100 bg-primary-50/40 p-5 space-y-2">
                <h3 className="font-heading font-bold text-primary-900">Estética</h3>
                <p className="text-sm">
                  <strong>Invisalign:</strong> los alineadores son prácticamente invisibles a distancia
                  de conversación.
                </p>
                <p className="text-sm">
                  <strong>Brackets:</strong> los metálicos son visibles; los cerámicos resultan más
                  discretos, pero no alcanzan el nivel de los alineadores.
                </p>
              </div>

              <div className="rounded-xl border border-primary-100 bg-primary-50/40 p-5 space-y-2">
                <h3 className="font-heading font-bold text-primary-900">Comodidad</h3>
                <p className="text-sm">
                  <strong>Invisalign:</strong> superficie lisa, sin elementos que rocen la mucosa. Se
                  retiran para comer.
                </p>
                <p className="text-sm">
                  <strong>Brackets:</strong> pueden producir pequeñas rozaduras iniciales. No se
                  retiran, pero no requieren disciplina de uso.
                </p>
              </div>

              <div className="rounded-xl border border-primary-100 bg-primary-50/40 p-5 space-y-2">
                <h3 className="font-heading font-bold text-primary-900">Higiene</h3>
                <p className="text-sm">
                  <strong>Invisalign:</strong> al ser removible, permite cepillarse y usar hilo dental
                  con total normalidad.
                </p>
                <p className="text-sm">
                  <strong>Brackets:</strong> requieren más tiempo y técnica de cepillado para una
                  limpieza completa alrededor de cada bracket.
                </p>
              </div>

              <div className="rounded-xl border border-primary-100 bg-primary-50/40 p-5 space-y-2">
                <h3 className="font-heading font-bold text-primary-900">Visitas al ortodoncista</h3>
                <p className="text-sm">
                  <strong>Invisalign:</strong> se pueden entregar varios juegos de alineadores en cada
                  cita, espaciando las revisiones.
                </p>
                <p className="text-sm">
                  <strong>Brackets:</strong> los de autoligado también permiten intervalos amplios entre
                  visitas, similares a los de Invisalign.
                </p>
              </div>

              <div className="rounded-xl border border-primary-100 bg-primary-50/40 p-5 space-y-2">
                <h3 className="font-heading font-bold text-primary-900">Eficacia clínica</h3>
                <p className="text-sm">
                  <strong>Invisalign:</strong> excelente para apiñamientos, espacios y muchas
                  maloclusiones. Algunos movimientos complejos pueden requerir auxiliares.
                </p>
                <p className="text-sm">
                  <strong>Brackets:</strong> gran versatilidad biomecánica. Permiten un control muy
                  preciso en movimientos tridimensionales complejos.
                </p>
              </div>

              <div className="rounded-xl border border-primary-100 bg-primary-50/40 p-5 space-y-2">
                <h3 className="font-heading font-bold text-primary-900">Precio</h3>
                <p className="text-sm">
                  <strong>Invisalign:</strong> el coste depende de la complejidad del caso. En muchas
                  situaciones es comparable al de brackets.
                </p>
                <p className="text-sm">
                  <strong>Brackets:</strong> el precio varía según el tipo (metálicos o cerámicos) y la
                  duración estimada del tratamiento.
                </p>
              </div>
            </div>

            {/* Cuándo Invisalign */}
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-900 pt-4">
              ¿Cuándo es mejor Invisalign?
            </h2>
            <p>
              Los alineadores suelen ser una opción especialmente indicada en los siguientes
              escenarios:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Pacientes adultos que priorizan la estética durante el tratamiento, por motivos
                profesionales o personales.
              </li>
              <li>
                Personas con buena disciplina de uso, capaces de llevar los alineadores al menos 22
                horas al día de forma constante.
              </li>
              <li>
                Apiñamientos leves a moderados, cierre de espacios y correcciones de mordida que no
                impliquen movimientos radiculares especialmente complejos.
              </li>
              <li>
                Pacientes que viajan con frecuencia o tienen dificultad para acudir a revisiones muy
                seguidas, ya que se pueden entregar varios juegos de alineadores en cada cita.
              </li>
            </ul>
            <p>
              Si quieres conocer los detalles de los{' '}
              <Link href="/tratamientos" className="text-primary-600 underline hover:text-primary-700">
                tratamientos con alineadores
              </Link>{' '}
              que ofrece Hugo Gómez, visita la sección correspondiente.
            </p>

            {/* Cuándo brackets */}
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-900 pt-4">
              ¿Cuándo son mejores los brackets?
            </h2>
            <p>
              Los brackets de autoligado pueden ser la alternativa más indicada en situaciones como:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Maloclusiones severas que requieren movimientos dentarios de gran magnitud o un control
                radicular muy preciso.
              </li>
              <li>
                Pacientes adolescentes con menor capacidad de compromiso en el uso constante de un
                aparato removible.
              </li>
              <li>
                Casos que necesitan tracciones de dientes incluidos u otros procedimientos que se
                integran mejor con un sistema fijo.
              </li>
              <li>
                Situaciones en las que el profesional, tras el diagnóstico, determine que la biomecánica
                de brackets ofrece un resultado más predecible o eficiente para ese caso concreto.
              </li>
            </ul>

            {/* Lo más importante */}
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-900 pt-4">
              Lo más importante: el diagnóstico del ortodoncista
            </h2>
            <p>
              Existe una tendencia a centrar la decisión en el tipo de aparato dental sin considerar lo
              que realmente determina el resultado: el diagnóstico y la planificación del tratamiento.
              Un ortodoncista con formación especializada es quien puede valorar qué sistema se adapta
              mejor a cada caso concreto.
            </p>
            <p>
              En el lenguaje coloquial es habitual hablar de &laquo;hierros&raquo; o &laquo;hierros en
              los dientes&raquo; para referirse a los brackets, y de &laquo;aparato de dientes&raquo;
              para cualquier dispositivo de ortodoncia. Más allá de cómo se llame al aparato dental, lo
              relevante es que el tratamiento esté correctamente diagnosticado y supervisado por un
              profesional cualificado.
            </p>
            <p>
              Un mismo aparato puede dar resultados excelentes o insuficientes dependiendo de quién lo
              prescribe, planifica y controla. Por ello, antes de decidir entre Invisalign o brackets,
              lo prioritario es elegir a un ortodoncista con formación de máster y experiencia clínica
              contrastada.
            </p>
            <p>
              Si deseas conocer el enfoque de trabajo de Hugo Gómez, puedes consultar la
              sección{' '}
              <Link href="/sobre-mi#metodo" className="text-primary-600 underline hover:text-primary-700">
                Mi método
              </Link>
              . Y si prefieres resolver tus dudas en persona,{' '}
              <Link href="/contacto" className="text-primary-600 underline hover:text-primary-700">
                solicita una consulta
              </Link>{' '}
              para recibir un diagnóstico personalizado.
            </p>

            {/* FAQ */}
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-900 pt-4">
              Preguntas frecuentes
            </h2>
          </div>

          <div className="mt-6 divide-y divide-primary-100 border-t border-primary-100">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
                defaultOpen={index === 0}
              />
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
