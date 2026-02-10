import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbSchema, getFAQSchema } from '@/lib/schema';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AccordionItem } from '@/components/ui/AccordionItem';

export const metadata: Metadata = generatePageMetadata({
  title: 'Ortodoncia en adultos: \u00bfmerece la pena a los 30, 40 o 50 a\u00f1os?',
  description:
    '\u00bfEs tarde para ponerse ortodoncia de adulto? Descubre por qu\u00e9 no hay l\u00edmite de edad, opciones discretas disponibles y beneficios reales. Dr. Hugo G\u00f3mez, ortodoncista en Valencia.',
  path: '/blog/ortodoncia-adultos',
});

const faqItems = [
  {
    question: '\u00bfA qu\u00e9 edad es tarde para ponerse ortodoncia?',
    answer:
      'No existe una edad l\u00edmite para iniciar un tratamiento de ortodoncia. Lo determinante no es la edad, sino el estado de salud de las enc\u00edas y el hueso que rodea los dientes. Pacientes de 50, 60 e incluso 70 a\u00f1os pueden beneficiarse de la ortodoncia si su salud periodontal es adecuada. El ortodoncista evaluar\u00e1 cada caso de forma individual.',
  },
  {
    question: '\u00bfLa ortodoncia en adultos es m\u00e1s lenta que en adolescentes?',
    answer:
      'No necesariamente. La duraci\u00f3n del tratamiento depende de la complejidad del caso, no de la edad del paciente. Es cierto que el hueso adulto es algo menos maleable, pero con una planificaci\u00f3n adecuada y la aparatolog\u00eda correcta, los tiempos son comparables. Muchos tratamientos en adultos se resuelven en 12 a 18 meses.',
  },
  {
    question: '\u00bfQu\u00e9 opciones discretas existen para adultos?',
    answer:
      'Los adultos pueden elegir entre alineadores invisibles (como Invisalign), brackets est\u00e9ticos de cer\u00e1mica o zafiro, y ortodoncia lingual (brackets colocados en la cara interna del diente). Todas estas opciones permiten llevar un tratamiento de ortodoncia de forma discreta, adapt\u00e1ndose a la vida profesional y social del paciente.',
  },
];

export default function OrtodonciaAdultosPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: 'Inicio', href: '/' },
          { name: 'Blog', href: '/blog' },
          { name: 'Ortodoncia en adultos', href: '/blog/ortodoncia-adultos' },
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
            <li className="text-primary-700 font-medium">Ortodoncia en adultos</li>
          </ol>
        </div>
      </nav>

      <article className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            as="h1"
            title="Ortodoncia en adultos: \u00bfmerece la pena a los 30, 40 o 50 a\u00f1os?"
            subtitle="Nunca es tarde para mejorar tu sonrisa y tu salud bucodental. Los beneficios van mucho m\u00e1s all\u00e1 de la est\u00e9tica."
            centered={false}
          />

          <time className="block text-sm text-gray-500 mb-10">20 de febrero de 2025</time>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            {/* Introducci\u00f3n */}
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-900 pt-4">
              Introducci\u00f3n
            </h2>
            <p>
              Si alguna vez te has mirado al espejo y has pensado que te gustar\u00eda enderezar los
              dientes, pero que \u00abya no tiene sentido\u00bb a tu edad, no est\u00e1s solo. Muchos
              adultos arrastran desde la adolescencia dientes torcidos, dientes montados o una
              mordida que nunca encaj\u00f3 bien, y asumen que la ortodoncia es algo reservado para
              ni\u00f1os y adolescentes.
            </p>
            <p>
              La realidad es muy distinta. En los \u00faltimos a\u00f1os, el n\u00famero de pacientes
              adultos que inician un tratamiento de ortodoncia no ha dejado de crecer. Las opciones
              son m\u00e1s discretas que nunca, los resultados son igual de estables y los beneficios
              para la salud bucodental son significativos.
            </p>
            <p>
              En este art\u00edculo, el Dr. Hugo G\u00f3mez Mengual, ortodoncista especialista,
              aborda las dudas m\u00e1s habituales sobre la ortodoncia en adultos y explica por qu\u00e9
              merece la pena dar el paso a los 30, 40 o 50 a\u00f1os.
            </p>

            {/* L\u00edmite de edad */}
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-900 pt-4">
              \u00bfHay l\u00edmite de edad para la ortodoncia?
            </h2>
            <p>
              La respuesta corta es no. No existe un l\u00edmite de edad para mover los dientes.
              El mecanismo biol\u00f3gico que permite el movimiento dental \u2014la remodelaci\u00f3n
              \u00f3sea\u2014 funciona durante toda la vida. Lo que cambia con la edad no es la
              capacidad de mover los dientes, sino las condiciones del entorno: el estado del hueso,
              de las enc\u00edas y de las piezas dentales existentes.
            </p>
            <p>
              En un adolescente, el hueso est\u00e1 en fase de crecimiento y la respuesta a las
              fuerzas ortodoncias es r\u00e1pida. En un adulto, el hueso es m\u00e1s denso y la
              respuesta puede ser algo m\u00e1s lenta, pero el resultado final es igualmente
              predecible y estable. De hecho, los adultos suelen ser pacientes m\u00e1s constantes
              y colaboradores, lo que favorece el \u00e9xito del tratamiento.
            </p>
            <p>
              Lo realmente importante es que el ortodoncista valore la salud periodontal antes de
              iniciar cualquier movimiento. Si las enc\u00edas est\u00e1n sanas y el hueso de soporte
              es suficiente, se puede realizar ortodoncia con total seguridad a cualquier edad.
            </p>

            {/* Beneficios */}
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-900 pt-4">
              Beneficios de la ortodoncia en adultos
            </h2>
            <p>
              Cuando un adulto piensa en ortodoncia, lo primero que suele venir a la mente es la
              est\u00e9tica: corregir unos dientes torcidos o cerrar un espacio que siempre ha
              molestado. Sin embargo, los beneficios van mucho m\u00e1s all\u00e1 de la apariencia:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Mejor mordida y funci\u00f3n masticatoria:</strong> cuando los dientes
                encajan correctamente, las fuerzas se distribuyen de manera equilibrada. Esto reduce
                el desgaste prematuro de determinadas piezas y mejora la eficacia de la masticaci\u00f3n.
              </li>
              <li>
                <strong>Salud periodontal:</strong> los dientes alineados son m\u00e1s f\u00e1ciles
                de limpiar. Eliminar el api\u00f1amiento facilita el cepillado y el uso de hilo
                dental, reduciendo el riesgo de caries, gingivitis y enfermedad periodontal.
              </li>
              <li>
                <strong>Alivio de la articulaci\u00f3n temporomandibular (ATM):</strong> una
                malocluci\u00f3n puede contribuir a dolor mandibular, chasquidos, bruxismo y dolores
                de cabeza. Corregir la mordida ayuda a reducir estos s\u00edntomas en muchos pacientes.
              </li>
              <li>
                <strong>Preparaci\u00f3n pre-prot\u00e9sica:</strong> en pacientes que necesitan
                implantes, coronas o puentes, el ortodoncista puede recolocar los dientes para
                crear el espacio adecuado y garantizar un resultado \u00f3ptimo del tratamiento
                restaurador posterior.
              </li>
              <li>
                <strong>Confianza y autoestima:</strong> sentirse bien con la propia sonrisa tiene
                un impacto directo en la vida social y profesional. Muchos pacientes adultos
                refieren una mejora notable en su seguridad tras el tratamiento.
              </li>
            </ul>

            {/* Opciones discretas */}
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-900 pt-4">
              Opciones de tratamiento discretas
            </h2>
            <p>
              Uno de los principales frenos para los adultos es la visibilidad del aparato. Es
              comprensible: en el entorno laboral y social, muchos pacientes prefieren que el
              tratamiento pase desapercibido. La buena noticia es que la ortodoncia actual ofrece
              varias opciones pensadas precisamente para quienes valoran la discreci\u00f3n:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Alineadores invisibles (Invisalign y similares):</strong> f\u00e9rulas
                transparentes y removibles que se fabrican a medida. Son pr\u00e1cticamente
                imperceptibles a distancia de conversaci\u00f3n y permiten comer y cepillarse
                sin restricciones.
              </li>
              <li>
                <strong>Brackets est\u00e9ticos (cer\u00e1micos o de zafiro):</strong> brackets
                que se mimetizan con el color del diente. Son fijos, como los brackets
                convencionales, pero mucho menos visibles.
              </li>
              <li>
                <strong>Ortodoncia lingual:</strong> los brackets se colocan en la cara interna de
                los dientes, de modo que resultan completamente invisibles desde fuera. Es la
                opci\u00f3n de mayor discreci\u00f3n dentro de los sistemas fijos.
              </li>
            </ul>
            <p>
              Cada sistema tiene sus indicaciones y limitaciones. El ortodoncista, tras un
              diagn\u00f3stico completo, recomendar\u00e1 la opci\u00f3n m\u00e1s adecuada para
              cada caso particular. Puedes conocer m\u00e1s sobre las opciones disponibles en la
              p\u00e1gina de{' '}
              <Link
                href="/tratamientos"
                className="text-primary-600 underline hover:text-primary-700"
              >
                tratamientos
              </Link>
              .
            </p>

            {/* C\u00f3mo es el tratamiento */}
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-900 pt-4">
              \u00bfC\u00f3mo es el tratamiento de ortodoncia en un paciente adulto?
            </h2>
            <p>
              El proceso general es similar al de cualquier paciente: diagn\u00f3stico,
              planificaci\u00f3n, colocaci\u00f3n del aparato, revisiones peri\u00f3dicas y fase de
              retenci\u00f3n. Sin embargo, en adultos hay algunas particularidades importantes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Valoraci\u00f3n periodontal previa:</strong> antes de mover ning\u00fan
                diente, es imprescindible confirmar que las enc\u00edas est\u00e1n sanas. Si existe
                enfermedad periodontal, se trata primero en coordinaci\u00f3n con el periodoncista.
              </li>
              <li>
                <strong>Coordinaci\u00f3n multidisciplinar:</strong> muchos adultos presentan
                restauraciones previas, ausencias dentales o necesitan implantes. El ortodoncista
                trabaja de forma coordinada con el implant\u00f3logo, el prot\u00e9sico y otros
                especialistas para que todos los tratamientos se integren correctamente.
              </li>
              <li>
                <strong>Respuesta \u00f3sea diferente:</strong> el hueso adulto es m\u00e1s denso
                que el de un adolescente, lo que puede requerir fuerzas m\u00e1s suaves y
                constantes. Esto no significa que el tratamiento sea menos eficaz, sino que la
                biomec\u00e1nica se adapta a las caracter\u00edsticas del paciente.
              </li>
              <li>
                <strong>Duraci\u00f3n:</strong> en algunos casos, el tratamiento puede ser
                ligeramente m\u00e1s largo que en un adolescente con un caso equivalente, pero la
                diferencia no suele ser significativa. La mayor\u00eda de tratamientos en adultos
                se sit\u00faan entre 12 y 24 meses.
              </li>
            </ul>
            <p>
              Si quieres conocer en detalle c\u00f3mo trabaja el Dr. Hugo G\u00f3mez Mengual,
              puedes consultar la secci\u00f3n{' '}
              <Link href="/metodo" className="text-primary-600 underline hover:text-primary-700">
                Mi m\u00e9todo
              </Link>
              .
            </p>

            {/* Mitos */}
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-900 pt-4">
              Mitos sobre la ortodoncia en adultos
            </h2>
            <p>
              Existen varias creencias err\u00f3neas que pueden disuadir a un adulto de iniciar un
              tratamiento. Conviene desmontarlas con informaci\u00f3n objetiva:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>\u00abEs solo est\u00e9tico\u00bb:</strong> como se ha explicado, los
                beneficios funcionales de la ortodoncia son tan importantes o m\u00e1s que los
                est\u00e9ticos. Corregir la mordida protege los dientes, las enc\u00edas y la
                articulaci\u00f3n mandibular a largo plazo.
              </li>
              <li>
                <strong>\u00abA mi edad ya no merece la pena\u00bb:</strong> merece la pena a
                cualquier edad. Los dientes van a seguir en tu boca el resto de tu vida, y
                cuidarlos es siempre una buena inversi\u00f3n. Muchos pacientes lamentan no haber
                dado el paso antes.
              </li>
              <li>
                <strong>\u00abEs muy doloroso\u00bb:</strong> las molestias son leves y
                transitorias, especialmente con las t\u00e9cnicas y materiales actuales. Los
                primeros d\u00edas tras la colocaci\u00f3n o un ajuste es habitual notar presi\u00f3n,
                pero suele remitir en 48-72 horas. La mayor\u00eda de pacientes lo describe como
                una molestia tolerable, no como dolor.
              </li>
              <li>
                <strong>\u00abTarda much\u00edsimo\u00bb:</strong> la duraci\u00f3n depende del
                caso concreto. Hay tratamientos en adultos que se completan en menos de un a\u00f1o.
                La clave est\u00e1 en un buen diagn\u00f3stico y una planificaci\u00f3n realista
                desde el inicio.
              </li>
            </ul>

            {/* CTA */}
            <div className="mt-8 p-6 bg-primary-50 rounded-xl border border-primary-100">
              <p className="text-primary-800">
                \u00bfEst\u00e1s pensando en mejorar tu sonrisa? Nunca es tarde para dar el paso.{' '}
                <Link
                  href="/contacto"
                  className="text-primary-600 underline hover:text-primary-700"
                >
                  Solicita una consulta
                </Link>{' '}
                con el Dr. Hugo G\u00f3mez Mengual para una valoraci\u00f3n personalizada y
                descubre qu\u00e9 opciones se adaptan mejor a tu caso.
              </p>
            </div>

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
