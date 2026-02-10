import { Metadata } from 'next';
import Image from 'next/image';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbSchema } from '@/lib/schema';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const metadata: Metadata = generatePageMetadata({
  title: 'Ortodoncia digital en Valencia — Diagnóstico con escáner intraoral 3D',
  description:
    'Método de trabajo del Dr. Hugo Gómez Mengual: diagnóstico preciso con escáner intraoral, planificación digital del tratamiento y seguimiento personalizado. Ortodoncia digital en la Comunidad Valenciana.',
  path: '/metodo',
});

const phases = [
  {
    number: '01',
    title: 'Diagnóstico preciso',
    description: [
      'El primer paso de cualquier tratamiento de ortodoncia es un diagnóstico exhaustivo. Utilizo mi propio escáner intraoral para obtener registros digitales tridimensionales de alta resolución, eliminando la necesidad de moldes tradicionales.',
      'Este enfoque digital permite una mayor precisión en el análisis de la posición dental, la mordida y las estructuras óseas. Complemento el estudio con un análisis cefalométrico digital completo para disponer de toda la información necesaria antes de planificar el tratamiento.',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Planificación digital',
    description: [
      'Una vez completado el diagnóstico, diseño el plan de tratamiento con software de planificación avanzada. Esto permite simular el movimiento de cada diente y prever el resultado final antes de iniciar el tratamiento.',
      'El plan personalizado se comparte con la clínica colaboradora, garantizando la transparencia y facilitando la coordinación en casos interdisciplinares que requieran la participación de otros especialistas.',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Seguimiento personalizado',
    description: [
      'El tratamiento activo se realiza mediante visitas periódicas en la clínica, donde controlo la evolución y ajusto el plan cuando es necesario. En cada cita, cuento con mi higienista especializada en ortodoncia para optimizar el tiempo de consulta y la atención al paciente.',
      'Mantengo una comunicación directa y continua con el equipo de la clínica, especialmente en casos multidisciplinares. Esta coordinación garantiza que el tratamiento de ortodoncia se integre adecuadamente con el resto de especialidades odontológicas.',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
];

export default function MetodoPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: 'Inicio', href: '/' },
          { name: 'Mi método', href: '/metodo' },
        ])}
      />

      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            as="h1"
            title="Mi método de trabajo"
            subtitle="Un enfoque basado en tres pilares: diagnóstico preciso, planificación digital y seguimiento personalizado. Cada caso recibe la atención y el rigor que merece."
          />
        </div>
      </section>

      {phases.map((phase, index) => (
        <section
          key={phase.number}
          className={`py-20 md:py-28 px-4 sm:px-6 lg:px-8 ${
            index % 2 === 1 ? 'bg-primary-50/30' : ''
          }`}
        >
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl font-heading font-bold text-primary-200">
                    {phase.number}
                  </span>
                </div>
                <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600">
                  {phase.icon}
                </div>
                {/* Image for diagnostic phase */}
                {index === 0 && (
                  <div className="relative mt-6 w-full aspect-[4/3] rounded-xl overflow-hidden hidden lg:block">
                    <Image
                      src="/images/scanner-dental.jpg"
                      alt="Escáner intraoral para diagnóstico digital de ortodoncia"
                      fill
                      className="object-cover"
                      sizes="300px"
                    />
                  </div>
                )}
                {/* Image for digital planning phase */}
                {index === 1 && (
                  <div className="relative mt-6 w-full aspect-[4/3] rounded-xl overflow-hidden hidden lg:block">
                    <Image
                      src="/images/alineadores.jpg"
                      alt="Alineadores transparentes planificados digitalmente"
                      fill
                      className="object-cover"
                      sizes="300px"
                    />
                  </div>
                )}
              </div>

              <div className="lg:col-span-8">
                <h2 className="text-3xl font-heading font-bold text-primary-900 mb-6">
                  {phase.title}
                </h2>
                <div className="space-y-4">
                  {phase.description.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
