import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbSchema, getFAQSchema } from '@/lib/schema';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AccordionItem } from '@/components/ui/AccordionItem';

export const metadata: Metadata = generatePageMetadata({
  title: 'Ortodoncia invisible en Valencia: guía completa [2025]',
  description:
    'Guía completa sobre ortodoncia invisible en Valencia: qué es, cómo funciona, tipos de alineadores como Invisalign, ventajas y cómo elegir profesional. Dr. Hugo Gómez Mengual.',
  path: '/blog/ortodoncia-invisible-valencia',
});

const faqItems = [
  {
    question: '¿La ortodoncia invisible duele?',
    answer:
      'Es habitual notar una ligera presión o molestia los primeros días con cada juego de alineadores nuevos. Esta sensación es normal y suele desaparecer en 48-72 horas. En general, los pacientes refieren menos molestias que con los brackets tradicionales.',
  },
  {
    question: '¿Cuánto tiempo hay que llevar los alineadores puestos cada día?',
    answer:
      'Para que el tratamiento sea efectivo, se recomienda llevar los alineadores al menos 22 horas al día. Solo deben retirarse para comer, beber líquidos calientes o con color, y para la higiene bucal.',
  },
  {
    question: '¿Se nota que llevas ortodoncia invisible?',
    answer:
      'Los alineadores transparentes son prácticamente imperceptibles a una distancia normal de conversación. La mayoría de las personas del entorno no notan que el paciente lleva un aparato invisible puesto.',
  },
];

export default function OrtodonciainvisibleValenciaPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: 'Inicio', href: '/' },
          { name: 'Blog', href: '/blog' },
          { name: 'Ortodoncia invisible en Valencia', href: '/blog/ortodoncia-invisible-valencia' },
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
            <li className="text-primary-700 font-medium">Ortodoncia invisible en Valencia</li>
          </ol>
        </div>
      </nav>

      <article className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            as="h1"
            title="Ortodoncia invisible en Valencia: guía completa [2025]"
            subtitle="Todo lo que necesitas saber antes de dar el paso hacia un tratamiento con alineadores transparentes."
            centered={false}
          />

          <time className="block text-sm text-gray-500 mb-10">15 de enero de 2025</time>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <p>
              Cada vez más pacientes buscan una alternativa discreta para corregir la posición de sus
              dientes. La ortodoncia invisible se ha convertido en una de las opciones más demandadas
              en las clínicas de Valencia, y no es de extrañar: permite mejorar la sonrisa con un
              aparato invisible que apenas se nota en el día a día.
            </p>
            <p>
              En esta guía, el Dr. Hugo Gómez Mengual, ortodoncista especialista en la Comunidad
              Valenciana, repasa los aspectos clave que debes conocer antes de iniciar un tratamiento
              con alineadores invisibles.
            </p>

            {/* Qué es */}
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-900 pt-4">
              ¿Qué es la ortodoncia invisible?
            </h2>
            <p>
              La ortodoncia invisible es un sistema de corrección dental que utiliza una serie de
              férulas transparentes (también llamadas alineadores o aparatos transparentes para los
              dientes) fabricadas a medida para cada paciente. Estos alineadores ejercen fuerzas
              controladas sobre los dientes para desplazarlos de forma progresiva hasta alcanzar la
              posición deseada.
            </p>
            <p>
              A diferencia de los brackets convencionales, los alineadores son removibles: el
              paciente puede retirarlos para comer, beber y cepillarse los dientes con normalidad.
              Esto facilita la higiene oral y reduce algunas de las limitaciones asociadas a la
              ortodoncia tradicional.
            </p>

            {/* Cómo funciona */}
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-900 pt-4">
              ¿Cómo funciona el tratamiento?
            </h2>
            <p>
              El proceso comienza con un diagnóstico completo. El ortodoncista realiza una
              exploración clínica, toma fotografías, radiografías y un escaneado digital de la boca
              mediante un escáner intraoral. Con estos registros se diseña un plan de tratamiento
              virtual que permite prever el movimiento de los dientes desde el inicio hasta el
              resultado final.
            </p>
            <p>
              A partir de esta planificación digital, se fabrican los alineadores. Cada juego de
              férulas se lleva durante un período determinado (habitualmente entre 7 y 14 días) antes
              de cambiar al siguiente. Los alineadores van moviendo los dientes de forma gradual,
              milímetro a milímetro.
            </p>
            <p>
              Durante el tratamiento, el paciente acude a revisiones periódicas para que el
              ortodoncista controle que los movimientos se están produciendo según lo previsto. La
              frecuencia de las visitas suele ser menor que con brackets, ya que se pueden entregar
              varios juegos de alineadores en cada cita.
            </p>

            {/* Tipos */}
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-900 pt-4">
              Tipos de ortodoncia invisible: Invisalign y otras opciones
            </h2>
            <p>
              Cuando se habla de ortodoncia invisible, la marca más conocida es{' '}
              <strong>Invisalign</strong>. Es el sistema pionero y cuenta con más de dos décadas de
              desarrollo clínico y millones de casos tratados en todo el mundo. Sin embargo,
              conviene saber que existen otras marcas de alineadores en el mercado.
            </p>
            <p>
              Lo que diferencia realmente un tratamiento de otro no es solo la marca del alineador,
              sino el diagnóstico y la planificación que realiza el ortodoncista. Un mismo sistema de
              alineadores puede dar resultados excelentes o mediocres dependiendo de quién lo
              prescribe y supervisa. Por eso, la formación y experiencia del profesional es el
              factor determinante.
            </p>
            <p>
              En la Comunidad Valenciana, Invisalign sigue siendo la referencia por su trayectoria,
              la calidad del material y la precisión de su software de planificación (ClinCheck). No
              obstante, independientemente de la marca, lo esencial es que el tratamiento esté
              dirigido por un ortodoncista con formación especializada.
            </p>

            {/* Ventajas */}
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-900 pt-4">
              Ventajas de la ortodoncia invisible
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Estética:</strong> los alineadores son prácticamente imperceptibles. Muchas
                personas se refieren a ellos como un aparato invisible porque apenas se notan durante
                la conversación.
              </li>
              <li>
                <strong>Comodidad:</strong> al ser removibles, permiten comer de todo y mantener una
                higiene bucal completa con cepillado y seda dental sin obstáculos.
              </li>
              <li>
                <strong>Previsibilidad:</strong> la planificación digital permite visualizar el
                resultado esperado antes de comenzar, lo que ayuda tanto al profesional como al
                paciente a tener expectativas realistas.
              </li>
              <li>
                <strong>Menos visitas:</strong> en muchos casos, las revisiones pueden espaciarse
                más que con brackets, lo que supone una ventaja para pacientes con agendas
                exigentes.
              </li>
              <li>
                <strong>Menor impacto en la vida diaria:</strong> no hay restricciones alimentarias
                ni riesgo de rotura de brackets durante la masticación.
              </li>
            </ul>

            {/* Para quién */}
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-900 pt-4">
              ¿Para quién está indicada?
            </h2>
            <p>
              La ortodoncia invisible puede tratar una amplia variedad de maloclusiones:
              apiñamiento, espacios entre dientes, mordida cruzada, sobremordida y otros problemas
              de alineación. Su evolución en los últimos años ha ampliado enormemente el rango de
              casos que pueden abordarse con alineadores.
            </p>
            <p>
              No obstante, existen situaciones clínicas complejas en las que los brackets pueden
              seguir siendo la opción más eficiente, o en las que se combinan ambos sistemas. El
              ortodoncista es quien, tras el estudio completo del caso, determina si los alineadores
              son la mejor opción o si conviene plantear una alternativa.
            </p>
            <p>
              Los alineadores son especialmente populares entre adultos que buscan un tratamiento
              discreto, pero también se utilizan con frecuencia en adolescentes. Algunos sistemas
              incluyen indicadores de uso para que los padres puedan verificar que el paciente joven
              cumple con las horas de uso recomendadas.
            </p>

            {/* Cómo elegir profesional */}
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-900 pt-4">
              Cómo elegir al profesional adecuado en Valencia
            </h2>
            <p>
              A la hora de buscar un ortodoncista para un tratamiento con alineadores invisibles en
              Valencia, es importante tener en cuenta varios aspectos:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Formación especializada:</strong> un máster oficial en ortodoncia (de al
                menos 3 años) garantiza una formación completa en diagnóstico y biomecánica, no solo
                en el manejo del software de alineadores.
              </li>
              <li>
                <strong>Experiencia clínica:</strong> el número de casos tratados con alineadores y
                la variedad de maloclusiones abordadas son indicadores relevantes.
              </li>
              <li>
                <strong>Tecnología disponible:</strong> el uso de escáner intraoral digital, en
                lugar de moldes tradicionales, mejora la precisión y la comodidad del paciente.
              </li>
              <li>
                <strong>Enfoque personalizado:</strong> desconfía de tratamientos «exprés» o
                soluciones genéricas. Cada boca es diferente y requiere un plan de tratamiento
                específico.
              </li>
            </ul>
            <p>
              Si quieres conocer en detalle el enfoque de trabajo del Dr. Hugo Gómez Mengual,
              puedes consultar la sección{' '}
              <Link href="/metodo" className="text-primary-600 underline hover:text-primary-700">
                Mi método
              </Link>
              . Para ver los{' '}
              <Link href="/tratamientos" className="text-primary-600 underline hover:text-primary-700">
                tratamientos disponibles
              </Link>
              , visita la página correspondiente. Y si prefieres resolver tus dudas directamente,{' '}
              <Link href="/contacto" className="text-primary-600 underline hover:text-primary-700">
                solicita una consulta
              </Link>
              .
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
