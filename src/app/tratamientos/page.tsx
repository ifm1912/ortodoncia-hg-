import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbSchema, getMedicalProcedureSchema } from '@/lib/schema';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const metadata: Metadata = generatePageMetadata({
  title: 'Tratamientos de ortodoncia en Valencia — Invisalign®, brackets, ortodoncia invisible',
  description:
    'Tratamientos de ortodoncia del Dr. Hugo Gómez Mengual en Valencia: alineadores Invisalign®, brackets de autoligado, ortodoncia lingual e invisible, ortodoncia infantil y del adolescente. Aparatos dentales con tecnología digital.',
  path: '/tratamientos',
});

const treatments = [
  {
    title: 'Alineadores Invisalign®',
    description:
      'Los alineadores Invisalign® son férulas transparentes y removibles que se fabrican a medida para cada paciente. El tratamiento se planifica digitalmente, permitiendo prever el resultado final antes de comenzar. Ofrecen una alternativa estética y cómoda, especialmente indicada para pacientes adultos y adolescentes.',
    details: ['Prácticamente invisibles', 'Removibles para comer e higiene', 'Planificación digital completa', 'Revisiones periódicas optimizadas'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    title: 'Brackets de autoligado',
    description:
      'Los brackets de autoligado incorporan un mecanismo que sujeta el arco ortodóntico sin necesidad de ligaduras elásticas. Esto puede reducir la fricción y, en determinados casos, espaciar las visitas. Disponibles en versión metálica y estética (cerámica).',
    details: ['Menor fricción en el arco', 'Opciones metálicas y estéticas', 'Certificación INSIGNIA®', 'Eficacia contrastada'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    title: 'Ortodoncia lingual',
    description:
      'La ortodoncia lingual consiste en la colocación de brackets en la cara interna de los dientes, haciéndolos completamente invisibles desde el exterior. Requiere una formación especializada y una técnica precisa. Cuento con la certificación WIN® para este tipo de sistemas.',
    details: ['Completamente invisible', 'Certificación WIN®', 'Técnica de alta precisión', 'Indicada para pacientes con alta exigencia estética'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Ortodoncia infantil y del adolescente',
    description:
      'Los tratamientos de ortodoncia en niños y adolescentes se adaptan a las distintas fases de crecimiento dental y óseo. La interceptación temprana permite corregir problemas funcionales y esqueléticos antes de que se consoliden, facilitando tratamientos más sencillos en el futuro.',
    details: ['Ortodoncia interceptiva', 'Seguimiento del desarrollo', 'Tratamientos adaptados a la edad', 'Coordinación con el odontopediatra'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: 'Ortodoncia multidisciplinar',
    description:
      'En casos complejos que requieren la participación de varias especialidades odontológicas (implantología, periodoncia, prótesis), la ortodoncia se planifica de forma coordinada con el resto del equipo para lograr un resultado integral y funcional.',
    details: ['Coordinación con implantólogo', 'Planificación conjunta con periodoncista', 'Preparación ortodóntica pre-protésica', 'Casos complejos resueltos en equipo'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: 'Ortodoncia con microtornillos',
    description:
      'Los microtornillos de anclaje esquelético permiten ampliar las posibilidades de tratamiento en casos complejos donde el anclaje dental convencional es insuficiente. Son un recurso adicional que se utiliza en combinación con otras técnicas ortodónticas.',
    details: ['Anclaje esquelético temporal', 'Ampliación de posibilidades terapéuticas', 'Procedimiento mínimamente invasivo', 'Formación específica certificada'],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384-3.077A4.5 4.5 0 003 16.277V21h18v-4.723a4.5 4.5 0 00-3.036-4.184l-5.384 3.077a1.5 1.5 0 01-1.56 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-2.485 0-4.5 4.03-4.5 9s2.015 9 4.5 9 4.5-4.03 4.5-9-2.015-9-4.5-9z" />
      </svg>
    ),
  },
];

export default function TratamientosPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: 'Inicio', href: '/' },
          { name: 'Tratamientos', href: '/tratamientos' },
        ])}
      />
      <JsonLd data={getMedicalProcedureSchema()} />

      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            as="h1"
            title="Tratamientos de ortodoncia"
            subtitle="Cada caso es único y requiere un diagnóstico personalizado. A continuación, presento los principales tipos de tratamiento de ortodoncia que ofrezco."
          />
        </div>
      </section>

      <section className="pb-20 md:pb-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-primary-100 p-8 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 shrink-0">
                  {treatment.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-heading font-semibold text-primary-900">
                    {treatment.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    {treatment.description}
                  </p>
                  <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {treatment.details.map((detail, dIndex) => (
                      <li key={dIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-400 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cross-links */}
      <section className="pb-20 md:pb-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-gray-600 text-sm leading-relaxed">
            ¿Tiene dudas sobre cuál es el tratamiento más adecuado para su caso?
            Consulte las{' '}
            <Link
              href="/blog#faq"
              className="text-primary-600 underline hover:text-primary-700"
            >
              preguntas frecuentes
            </Link>
            , descubra{' '}
            <Link
              href="/metodo"
              className="text-primary-600 underline hover:text-primary-700"
            >
              cómo trabajo
            </Link>
            {' '}o lea nuestros artículos en el{' '}
            <Link
              href="/blog"
              className="text-primary-600 underline hover:text-primary-700"
            >
              blog de ortodoncia
            </Link>
            .
          </p>
          <Link
            href="/contacto"
            className="inline-block text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
          >
            Solicitar información →
          </Link>
        </div>
      </section>
    </>
  );
}
