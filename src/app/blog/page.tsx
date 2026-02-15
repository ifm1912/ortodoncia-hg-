import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbSchema, getFAQSchema } from '@/lib/schema';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AccordionItem } from '@/components/ui/AccordionItem';

export const metadata: Metadata = generatePageMetadata({
  title: 'Blog y preguntas frecuentes sobre ortodoncia — Invisalign, brackets, duración, precio',
  description:
    'Artículos de ortodoncia y respuestas a las preguntas más frecuentes: Invisalign o brackets, cuánto dura, cuánto cuesta, ortodoncia en adultos y niños. Hugo Gómez, ortodoncista en Valencia.',
  path: '/blog',
});

const articles = [
  {
    slug: 'ortodoncia-invisible-valencia',
    title: 'Ortodoncia invisible en Valencia: guía completa [2025]',
    date: '15 de enero de 2025',
    excerpt:
      'Todo lo que necesitas saber sobre la ortodoncia invisible: qué es, cómo funciona, tipos de alineadores, ventajas y cómo elegir al profesional adecuado en Valencia.',
  },
  {
    slug: 'invisalign-o-brackets',
    title: '¿Invisalign o brackets? Cómo elegir el mejor tratamiento',
    date: '3 de febrero de 2025',
    excerpt:
      'Comparativa detallada entre Invisalign y brackets: diferencias, ventajas e inconvenientes de cada sistema para que puedas tomar una decisión informada.',
  },
  {
    slug: 'ortodoncia-adultos',
    title: 'Ortodoncia en adultos: ¿merece la pena a los 30, 40 o 50 años?',
    date: '20 de febrero de 2025',
    excerpt:
      'Cada vez más adultos se plantean un tratamiento de ortodoncia. Descubre por qué no hay límite de edad, qué opciones discretas existen y qué beneficios reales puedes esperar.',
  },
  {
    slug: 'ortodoncia-infantil-cuando-empezar',
    title: 'Ortodoncia infantil: ¿cuándo llevar a tu hijo al ortodoncista?',
    date: '10 de marzo de 2025',
    excerpt:
      'Señales de alerta, edades clave y tipos de tratamiento según la fase de crecimiento. Una guía práctica para padres que se preguntan cuándo es el momento adecuado.',
  },
];

const faqItems = [
  {
    question: '¿Qué es la ortodoncia?',
    answer:
      'La ortodoncia es la especialidad de la odontología dedicada al diagnóstico, prevención y tratamiento de las irregularidades dentales y faciales, como dientes mal alineados o problemas de mordida.',
  },
  {
    question: '¿Cuánto dura un tratamiento de ortodoncia?',
    answer:
      'La duración varía según la complejidad de cada caso. En general, los tratamientos oscilan entre 12 y 24 meses, aunque cada situación es diferente y requiere una valoración individualizada.',
  },
  {
    question: '¿Qué son los alineadores Invisalign®?',
    answer:
      'Los alineadores Invisalign® son férulas transparentes y removibles que se fabrican a medida para cada paciente. Permiten corregir la posición de los dientes de forma prácticamente invisible.',
  },
  {
    question: '¿Se puede llevar ortodoncia a cualquier edad?',
    answer:
      'Sí, la ortodoncia no tiene límite de edad. Tanto niños y adolescentes como adultos pueden beneficiarse de un tratamiento de ortodoncia adaptado a sus necesidades.',
  },
  {
    question: '¿Duele la ortodoncia?',
    answer:
      'Es normal sentir algunas molestias los primeros días tras la colocación o el ajuste de la aparatología. Estas molestias suelen ser leves y desaparecen en pocos días.',
  },
  {
    question: '¿Qué diferencia hay entre brackets de autoligado y brackets convencionales?',
    answer:
      'Los brackets de autoligado incorporan un mecanismo que sujeta el arco sin necesidad de ligaduras elásticas, lo que puede reducir la fricción y, en algunos casos, espaciar las visitas de seguimiento.',
  },
  {
    question: '¿Qué es un escáner intraoral?',
    answer:
      'Es un dispositivo digital que permite obtener una réplica tridimensional de los dientes y encías sin necesidad de tomar moldes tradicionales. El resultado es más cómodo para el paciente y más preciso para el profesional.',
  },
  {
    question: '¿Cómo es la primera visita?',
    answer:
      'En la primera visita se realiza una exploración clínica completa, se toman registros digitales con el escáner intraoral y se explican las opciones de tratamiento más adecuadas para cada caso.',
  },
  {
    question: '¿Hugo Gómez atiende en una consulta propia?',
    answer:
      'Hugo Gómez colabora con varias clínicas dentales de referencia en la Comunidad Valenciana. Puede consultar las clínicas y localidades en la sección «Dónde encontrarme».',
  },
  {
    question: '¿Cómo puedo solicitar una cita?',
    answer:
      'Puede ponerse en contacto a través del correo electrónico o el formulario indicados en la sección de contacto, o directamente a través de la clínica dental en la que desee ser atendido.',
  },
  {
    question: '¿Qué es mejor, Invisalign o brackets?',
    answer:
      'No existe una respuesta única: depende de cada caso. Los alineadores Invisalign® son más discretos y removibles, ideales para pacientes que priorizan la estética y la comodidad. Los brackets de autoligado pueden ser más eficientes en determinadas maloclusiones complejas. Lo más importante es el diagnóstico del ortodoncista, que determinará cuál es la mejor opción para cada paciente.',
  },
  {
    question: '¿Cuánto cuesta un tratamiento de ortodoncia?',
    answer:
      'El coste de un tratamiento de ortodoncia varía según el tipo de aparato (Invisalign, brackets, ortodoncia lingual), la complejidad del caso y la duración estimada. Es recomendable solicitar una valoración personalizada para obtener un presupuesto ajustado a cada situación.',
  },
  {
    question: '¿Qué formación tiene un ortodoncista? ¿Es lo mismo que un dentista?',
    answer:
      'Un ortodoncista es un dentista que, además de la carrera de Odontología, ha cursado un máster oficial de especialización en ortodoncia (mínimo 3 años adicionales). Esta formación específica en diagnóstico, biomecánica y planificación de tratamientos ortodónticos le diferencia de un dentista general.',
  },
  {
    question: '¿Se puede llevar ortodoncia durante el embarazo?',
    answer:
      'Sí, en general no hay contraindicación para continuar un tratamiento de ortodoncia durante el embarazo. Sin embargo, se recomienda informar al ortodoncista para adaptar las revisiones y evitar radiografías innecesarias durante este período. El inicio de un nuevo tratamiento puede posponerse hasta después del parto si el profesional lo considera conveniente.',
  },
];

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: 'Inicio', href: '/' },
          { name: 'Blog y FAQ', href: '/blog' },
        ])}
      />
      <JsonLd data={getFAQSchema(faqItems)} />

      {/* Blog Articles */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            as="h1"
            title="Blog de ortodoncia"
            subtitle="Artículos y guías para resolver tus dudas sobre tratamientos de ortodoncia, escritos por Hugo Gómez."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="bg-white rounded-xl border border-primary-100 p-6 hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                <time className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded self-start">
                  {article.date}
                </time>
                <h2 className="mt-4 text-xl font-heading font-semibold text-primary-900 leading-snug">
                  {article.title}
                </h2>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed flex-1">
                  {article.excerpt}
                </p>
                <Link
                  href={`/blog/${article.slug}`}
                  className="mt-5 inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
                >
                  Leer artículo
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-primary-50/30">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            title="Preguntas frecuentes"
            subtitle="Respuestas a las dudas más habituales sobre ortodoncia."
          />

          <div className="mt-8 divide-y divide-primary-100 border-t border-primary-100">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
                defaultOpen={index === 0}
              />
            ))}
          </div>

          {/* Cross-links */}
          <div className="mt-12 pt-8 border-t border-primary-100 text-center space-y-3">
            <p className="text-sm text-gray-600">
              ¿No ha encontrado la respuesta que buscaba?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/tratamientos"
                className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
              >
                Ver tratamientos →
              </Link>
              <Link
                href="/contacto"
                className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
              >
                Contactar →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
