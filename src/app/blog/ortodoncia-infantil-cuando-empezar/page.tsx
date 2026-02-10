import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbSchema, getFAQSchema } from '@/lib/schema';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AccordionItem } from '@/components/ui/AccordionItem';

export const metadata: Metadata = generatePageMetadata({
  title: 'Ortodoncia infantil: ¿cuándo llevar a tu hijo al ortodoncista?',
  description:
    'Guía para padres: cuándo es el momento adecuado para la primera revisión ortodóntica, señales de alerta y tipos de tratamiento según la edad. Dr. Hugo Gómez Mengual, ortodoncista en Valencia.',
  path: '/blog/ortodoncia-infantil-cuando-empezar',
});

const faqItems = [
  {
    question: '¿Es necesario que todos los niños lleven aparato de ortodoncia?',
    answer:
      'No, no todos los niños necesitan tratamiento de ortodoncia. Muchos desarrollan una oclusión correcta de forma natural, sin intervención. La primera visita con el ortodoncista sirve precisamente para valorar si existe un problema real o si el desarrollo es normal y solo requiere seguimiento. Cada caso se evalúa de forma individual.',
  },
  {
    question: '¿La ortodoncia infantil es dolorosa?',
    answer:
      'Los niños pueden sentir ligeras molestias o presión los primeros días tras la colocación de un aparato o después de un ajuste. Estas sensaciones son normales, suelen ser leves y desaparecen en pocos días. Los aparatos actuales son más cómodos que los de generaciones anteriores y los niños se adaptan con rapidez. Si el niño experimenta un dolor importante, conviene consultarlo con el ortodoncista.',
  },
  {
    question: '¿Cuánto dura un tratamiento de ortodoncia en niños?',
    answer:
      'La duración varía según el tipo de problema y la fase de tratamiento. Una ortodoncia interceptiva (fase temprana) suele durar entre 6 y 18 meses. El tratamiento completo con brackets o alineadores en adolescentes tiene una duración media de 12 a 24 meses. El ortodoncista establecerá un plan con una estimación de tiempos adaptada a cada caso concreto.',
  },
];

export default function OrtodonciaInfantilCuandoEmpezarPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: 'Inicio', href: '/' },
          { name: 'Blog', href: '/blog' },
          { name: 'Ortodoncia infantil', href: '/blog/ortodoncia-infantil-cuando-empezar' },
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
            <li className="text-primary-700 font-medium">Ortodoncia infantil</li>
          </ol>
        </div>
      </nav>

      <article className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            as="h1"
            title="Ortodoncia infantil: ¿cuándo llevar a tu hijo al ortodoncista?"
            subtitle="Guía para padres sobre el momento adecuado para la primera revisión ortodóntica, señales de alerta y tipos de tratamiento según la edad."
            centered={false}
          />

          <time className="block text-sm text-gray-500 mb-10">10 de marzo de 2025</time>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            {/* Introducción */}
            <p>
              Una de las preguntas más habituales entre los padres es cuándo conviene llevar a su
              hijo al ortodoncista por primera vez. Es natural preguntarse si esos dientes
              torcidos que están saliendo se corregirán solos, si el niño necesitará un aparato
              para los dientes o si es mejor esperar a que tenga la dentadura definitiva antes de
              actuar.
            </p>
            <p>
              Lo cierto es que no existe una respuesta universal, pero sí hay unas edades
              orientativas y unas señales clave que todo padre debería conocer. En este artículo,
              el{' '}
              <Link href="/sobre-mi" className="text-primary-600 underline hover:text-primary-700">
                Dr. Hugo Gómez Mengual
              </Link>
              , ortodoncista especialista en la Comunidad Valenciana, explica en qué momento es
              recomendable la primera visita y qué pueden esperar los padres en cada etapa del
              desarrollo dental de sus hijos.
            </p>

            {/* ¿A qué edad? */}
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-900 pt-4">
              ¿A qué edad debe un niño ir al ortodoncista por primera vez?
            </h2>
            <p>
              Las principales sociedades de ortodoncia recomiendan que la primera revisión
              ortodóntica se realice alrededor de los <strong>6-7 años</strong>. Puede parecer
              pronto, ya que a esa edad el niño aún conserva muchos dientes de leche, pero hay
              razones clínicas importantes para no esperar más.
            </p>
            <p>
              Entre los 6 y los 7 años erupcionan los primeros molares permanentes y los
              incisivos centrales definitivos. Es en este momento cuando el ortodoncista puede
              evaluar cómo se está desarrollando la mordida, si el espacio disponible en los
              maxilares es suficiente para los dientes que aún faltan por salir y si existe algún
              problema esquelético o funcional que convenga abordar de forma temprana.
            </p>
            <p>
              Una revisión a esta edad no implica necesariamente que el niño vaya a necesitar
              tratamiento de inmediato. En muchos casos, el ortodoncista confirma que el
              desarrollo es normal y simplemente programa un seguimiento periódico. Pero si
              detecta un problema, podrá intervenir en el momento más oportuno, evitando que la
              situación se complique con el crecimiento.
            </p>

            {/* Señales de alerta */}
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-900 pt-4">
              Señales de alerta: cuándo adelantar la visita
            </h2>
            <p>
              Aunque la referencia general para la primera visita son los 6-7 años, hay
              situaciones en las que conviene adelantar la consulta con el ortodoncista. Los
              padres deben prestar atención a las siguientes señales:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Respiración oral habitual:</strong> si el niño respira por la boca de
                forma constante, tanto de día como de noche, puede indicar un problema en el
                desarrollo del paladar o la vía aérea que conviene valorar.
              </li>
              <li>
                <strong>Succión del pulgar más allá de los 5 años:</strong> este hábito
                prolongado puede alterar la posición de los dientes anteriores y la forma del
                paladar, generando una mordida abierta.
              </li>
              <li>
                <strong>Dificultad para masticar o morder:</strong> si el niño evita ciertos
                alimentos, mastica solo por un lado o tiene problemas al morder con los dientes
                delanteros, podría existir un problema de mordida.
              </li>
              <li>
                <strong>Dientes muy apiñados o con espacios excesivos:</strong> aunque cierto
                espaciamiento es normal en la dentición temporal, un apiñamiento marcado de los
                dientes o unos huecos demasiado grandes merecen una valoración profesional.
              </li>
              <li>
                <strong>Pérdida prematura de dientes de leche:</strong> si un diente de leche se
                cae o se extrae mucho antes de lo esperado, el espacio puede cerrarse e impedir
                la correcta erupción del diente definitivo.
              </li>
              <li>
                <strong>Mordida cruzada:</strong> cuando los dientes superiores quedan por dentro
                de los inferiores al cerrar la boca, es una señal clara de que conviene consultar
                con el ortodoncista sin demora.
              </li>
            </ul>

            {/* Ortodoncia interceptiva */}
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-900 pt-4">
              ¿Qué es la ortodoncia interceptiva?
            </h2>
            <p>
              La ortodoncia interceptiva es un tipo de tratamiento temprano que se realiza
              generalmente entre los <strong>6 y los 10 años</strong>, aprovechando que el niño
              aún se encuentra en fase de crecimiento activo. Su objetivo no es alinear todos los
              dientes definitivos (que aún no han salido), sino corregir problemas esqueléticos o
              funcionales antes de que se consoliden y resulten más difíciles de resolver.
            </p>
            <p>
              No todos los niños necesitan ortodoncia interceptiva. Solo se recomienda cuando el
              ortodoncista detecta un problema concreto que, de no tratarse en esta ventana de
              edad, se complicaría significativamente en el futuro. Algunos ejemplos frecuentes
              son:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Expansión del paladar:</strong> cuando el maxilar superior es demasiado
                estrecho, se puede ensanchar con un aparato expansor. Esto solo es posible de
                forma eficaz mientras las suturas palatinas no se han cerrado completamente.
              </li>
              <li>
                <strong>Corrección de mordida cruzada:</strong> una mordida cruzada no tratada en
                edad temprana puede provocar un crecimiento asimétrico de la mandíbula y una
                desviación de la línea media.
              </li>
              <li>
                <strong>Mantenedores de espacio:</strong> cuando se pierde un diente de leche
                prematuramente, un mantenedor de espacio impide que los dientes adyacentes se
                desplacen y cierren el hueco reservado para el diente permanente.
              </li>
            </ul>
            <p>
              La ortodoncia interceptiva suele ser un tratamiento breve (entre 6 y 18 meses) y,
              en muchos casos, simplifica o reduce la duración de un tratamiento completo de
              ortodoncia en la adolescencia.
            </p>

            {/* Ortodoncia en adolescentes */}
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-900 pt-4">
              Ortodoncia en adolescentes: el tratamiento más habitual
            </h2>
            <p>
              La franja de edad entre los <strong>11 y los 14 años</strong> es la más frecuente
              para iniciar un tratamiento de ortodoncia completo. A esta edad, la mayoría de los
              dientes permanentes ya han erupcionado y el crecimiento facial aún está activo, lo
              que permite aprovechar ese potencial para obtener los mejores resultados posibles.
            </p>
            <p>
              El tratamiento puede realizarse con <strong>brackets</strong> (metálicos, de
              autoligado o estéticos) o con <strong>alineadores transparentes</strong> adaptados a
              adolescentes. Ambas opciones son eficaces y la elección depende de las
              características del caso, las necesidades del paciente y la valoración del
              ortodoncista.
            </p>
            <p>
              Antes de comenzar, el ortodoncista realiza un estudio completo que incluye
              radiografías, fotografías clínicas y, habitualmente, un escaneado digital de la
              boca con escáner intraoral. Con estos registros se diseña un plan de tratamiento
              personalizado. La duración media de un tratamiento en adolescentes oscila entre 12 y
              24 meses, aunque puede variar según la complejidad del caso.
            </p>

            {/* Tipos de aparatos */}
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-900 pt-4">
              Tipos de aparatos en ortodoncia infantil
            </h2>
            <p>
              Existen diferentes tipos de aparatos utilizados en ortodoncia infantil y
              adolescente. El ortodoncista selecciona el más adecuado en función de la edad del
              paciente, el tipo de problema y los objetivos del tratamiento. Estos son los más
              habituales:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Aparatos removibles:</strong> se pueden quitar y poner. Se emplean sobre
                todo en fases tempranas para corregir problemas leves de mordida o para guiar el
                crecimiento de los maxilares. Su eficacia depende directamente de que el niño los
                lleve las horas indicadas por el ortodoncista.
              </li>
              <li>
                <strong>Aparatos funcionales:</strong> dispositivos (fijos o removibles) que
                actúan sobre los músculos y los huesos de la cara para corregir desequilibrios
                esqueléticos, como un exceso o déficit de crecimiento mandibular. Se utilizan
                aprovechando el potencial de crecimiento del niño.
              </li>
              <li>
                <strong>Brackets:</strong> el sistema más conocido de ortodoncia fija. Consiste
                en pequeñas piezas adheridas a la superficie de los dientes, conectadas por un
                arco que ejerce las fuerzas necesarias para mover cada diente a su posición
                correcta. Pueden ser metálicos o cerámicos (estéticos).
              </li>
              <li>
                <strong>Alineadores para adolescentes:</strong> férulas transparentes
                prácticamente invisibles, similares a las utilizadas en adultos. Algunos sistemas
                incorporan indicadores de cumplimiento que permiten a los padres comprobar si el
                adolescente los lleva el tiempo necesario cada día.
              </li>
            </ul>
            <p>
              Si quieres conocer en detalle cada opción, puedes consultar los{' '}
              <Link href="/tratamientos" className="text-primary-600 underline hover:text-primary-700">
                tratamientos de ortodoncia disponibles
              </Link>
              .
            </p>

            {/* Papel de los padres */}
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-900 pt-4">
              El papel de los padres durante el tratamiento
            </h2>
            <p>
              La colaboración de los padres es un factor determinante en el éxito de cualquier
              tratamiento de ortodoncia infantil. Aunque el ortodoncista diseña y supervisa el
              plan de tratamiento, son los padres quienes, en el día a día, pueden asegurar que
              el niño cumple con las indicaciones.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Cumplimiento con los aparatos removibles:</strong> si el tratamiento
                incluye un aparato que el niño debe ponerse y quitarse, es fundamental supervisar
                que lo lleva las horas prescritas. Los resultados dependen directamente del
                cumplimiento.
              </li>
              <li>
                <strong>Supervisión de la higiene bucal:</strong> con aparatos fijos como los
                brackets, la limpieza dental requiere más dedicación. Los padres deben comprobar
                que el cepillado se realiza de forma correcta y completa, especialmente en los
                niños más pequeños.
              </li>
              <li>
                <strong>Asistencia a las revisiones:</strong> las citas periódicas son esenciales
                para que el tratamiento avance según lo planificado. Faltar a las revisiones
                puede alargar innecesariamente la duración del tratamiento.
              </li>
              <li>
                <strong>Apoyo emocional y actitud positiva:</strong> es normal que al principio
                el niño se sienta incómodo o inseguro con su aparato. Una actitud positiva y
                tranquilizadora por parte de los padres facilita enormemente la adaptación.
              </li>
            </ul>
            <p>
              Si tienes dudas sobre el desarrollo dental de tu hijo o quieres una valoración
              personalizada, no dudes en{' '}
              <Link href="/contacto" className="text-primary-600 underline hover:text-primary-700">
                solicitar una consulta
              </Link>{' '}
              con el Dr. Hugo Gómez Mengual.
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
