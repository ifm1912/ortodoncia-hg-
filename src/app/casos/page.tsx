import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbSchema } from '@/lib/schema';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const metadata: Metadata = generatePageMetadata({
  title: 'Casos y opiniones — Ortodoncia Dr. Hugo Gómez Mengual',
  description:
    'Casos de ortodoncia y opiniones de pacientes del Dr. Hugo Gómez Mengual. Resultados con Invisalign®, brackets de autoligado y ortodoncia lingual en la Comunidad Valenciana.',
  path: '/casos',
});

const exampleCases = [
  {
    title: 'Apiñamiento severo con alineadores',
    type: 'Alineadores Invisalign®',
    duration: '18 meses',
    description:
      'Paciente adulta con apiñamiento severo en ambas arcadas. Tratamiento con alineadores Invisalign® y planificación digital completa. Se logró una correcta alineación y mejora de la mordida.',
  },
  {
    title: 'Mordida cruzada en adolescente',
    type: 'Brackets de autoligado',
    duration: '14 meses',
    description:
      'Adolescente con mordida cruzada lateral y desviación de línea media. Tratamiento con brackets de autoligado. Corrección funcional y estética satisfactoria.',
  },
  {
    title: 'Ortodoncia pre-protésica en adulto',
    type: 'Ortodoncia multidisciplinar',
    duration: '12 meses',
    description:
      'Paciente adulto que necesitaba preparación ortodóntica previa a la colocación de implantes. Coordinación con implantólogo para lograr un espacio adecuado y una posición dental óptima.',
  },
];

const testimonials = [
  {
    quote:
      'Tenía los dientes muy apiñados desde pequeña y nunca me había atrevido a ponerme ortodoncia de adulta. El Dr. Hugo me explicó todo el proceso con mucha claridad y el resultado ha sido espectacular.',
    name: 'Laura M.',
    treatment: 'Alineadores Invisalign®',
    city: 'Valencia',
  },
  {
    quote:
      'Mi hijo necesitaba ortodoncia interceptiva y el seguimiento ha sido impecable. Cada visita era rápida y eficiente, y el tratamiento terminó antes de lo esperado.',
    name: 'Carlos R.',
    treatment: 'Ortodoncia infantil',
    city: 'Moncada',
  },
  {
    quote:
      'Llevaba años con problemas de mordida y decidí dar el paso a los 45 años. El trato fue excelente y la planificación digital me dio mucha confianza desde el principio.',
    name: 'María T.',
    treatment: 'Brackets de autoligado',
    city: 'Museros',
  },
  {
    quote:
      'Como dentista, valoro mucho la coordinación que mantiene el Dr. Hugo con la clínica. Su método de trabajo facilita enormemente la comunicación en casos multidisciplinares.',
    name: 'Dr. J. Pérez',
    treatment: 'Clínica colaboradora',
    city: 'Benetússer',
  },
];

export default function CasosPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: 'Inicio', href: '/' },
          { name: 'Casos y opiniones', href: '/casos' },
        ])}
      />

      {/* Intro */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            as="h1"
            title="Casos y opiniones"
            subtitle="A continuación presento algunos ejemplos representativos de tratamientos realizados y opiniones de pacientes. Esta sección se irá ampliando con nuevos casos."
          />
        </div>
      </section>

      {/* Cases gallery */}
      <section className="pb-20 md:pb-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-heading font-bold text-primary-900 mb-8">
            Casos representativos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exampleCases.map((caso, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-primary-100 overflow-hidden"
              >
                {/* Placeholder for before/after images */}
                <div className="aspect-[4/3] bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center">
                  <div className="text-center px-4">
                    <svg
                      className="w-10 h-10 text-primary-300 mx-auto mb-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                      />
                    </svg>
                    <p className="text-xs text-primary-400">
                      Foto antes / después
                    </p>
                    <p className="text-xs text-primary-300 mt-1">
                      Próximamente
                    </p>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-0.5 rounded">
                      {caso.type}
                    </span>
                    <span className="text-xs text-gray-400">
                      {caso.duration}
                    </span>
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-primary-900">
                    {caso.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    {caso.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-primary-50/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-heading font-bold text-primary-900 mb-8">
            Opiniones de pacientes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-primary-100 p-6"
              >
                <svg
                  className="w-7 h-7 text-primary-200 mb-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
                </svg>

                <p className="text-gray-700 leading-relaxed text-sm">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="mt-4 pt-3 border-t border-primary-50">
                  <p className="text-sm font-semibold text-primary-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {testimonial.treatment} · {testimonial.city}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-10">
            Los nombres han sido modificados para preservar la privacidad de los pacientes.
            Los testimonios representan experiencias reales.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600">
            ¿Desea consultar sobre su caso?
          </p>
          <Link
            href="/contacto"
            className="inline-block mt-4 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
          >
            Ir a contacto →
          </Link>
        </div>
      </section>
    </>
  );
}
