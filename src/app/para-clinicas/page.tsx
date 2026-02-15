import { Metadata } from 'next';
import Image from 'next/image';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbSchema } from '@/lib/schema';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FeatureCard } from '@/components/ui/FeatureCard';

export const metadata: Metadata = generatePageMetadata({
  title: 'Servicios de ortodoncia para clínicas dentales',
  description:
    'Ortodoncista externo para clínicas dentales en Comunidad Valenciana. Servicio integral de ortodoncia con equipo propio, planificación digital y coordinación transparente.',
  path: '/para-clinicas',
});

const collaborationFeatures = [
  {
    title: 'Integración completa',
    description:
      'Me desplazo a su clínica en los días programados y trabajo como parte de su equipo, ofreciendo al paciente una experiencia fluida y coherente.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016A3.001 3.001 0 0021 9.349m-18 0a2.999 2.999 0 002.25-1.016A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016" />
      </svg>
    ),
  },
  {
    title: 'Equipo propio',
    description:
      'Aporto mi propio escáner intraoral y una higienista especializada en ortodoncia, eliminando la necesidad de inversión adicional por parte de la clínica.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384-3.077A4.5 4.5 0 003 16.277V21h18v-4.723a4.5 4.5 0 00-3.036-4.184l-5.384 3.077a1.5 1.5 0 01-1.56 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-2.485 0-4.5 4.03-4.5 9s2.015 9 4.5 9 4.5-4.03 4.5-9-2.015-9-4.5-9z" />
      </svg>
    ),
  },
  {
    title: 'Comunicación transparente',
    description:
      'Comparto los planes de tratamiento con el equipo de la clínica y mantengo una comunicación directa para la coordinación de casos interdisciplinares.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    title: 'Tecnología digital',
    description:
      'Trabajo con escáner intraoral digital, software de planificación avanzada y flujos de trabajo totalmente digitales para optimizar tiempos y resultados.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
  },
];

const workflowSteps = [
  {
    step: '01',
    title: 'Evaluación inicial',
    description:
      'La clínica deriva al paciente. Realizo una exploración clínica completa con registros digitales mediante escáner intraoral y presento el diagnóstico y las opciones de tratamiento.',
  },
  {
    step: '02',
    title: 'Plan de tratamiento',
    description:
      'Diseño un plan de tratamiento personalizado con planificación digital. Comparto el plan con la clínica para garantizar la alineación y facilitar la coordinación.',
  },
  {
    step: '03',
    title: 'Tratamiento activo',
    description:
      'Atiendo al paciente en visitas periódicas programadas en la clínica. Cada visita está optimizada con el apoyo de mi higienista especializada en ortodoncia.',
  },
  {
    step: '04',
    title: 'Coordinación continua',
    description:
      'Mantengo una comunicación fluida con el equipo de la clínica para la coordinación de casos interdisciplinares y el seguimiento integral del paciente.',
  },
];

const qualityItems = [
  { label: 'Escáner intraoral propio', description: 'Registros digitales sin moldes tradicionales' },
  { label: 'Higienista especializada', description: 'Equipo propio para optimizar cada visita' },
  { label: '+10 años de experiencia', description: 'Trayectoria consolidada en ortodoncia' },
  { label: '150+ casos anuales', description: 'Volumen que garantiza experiencia continua' },
  { label: 'Máster Oficial en Ortodoncia', description: 'Universitat de València (192 ECTS)' },
  { label: 'Formación continua', description: 'Certificaciones en Invisalign®, WIN® y más' },
];

export default function ParaClinicasPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: 'Inicio', href: '/' },
          { name: 'Para clínicas', href: '/para-clinicas' },
        ])}
      />

      {/* Hero B2B */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary-300 text-sm font-semibold tracking-widest uppercase mb-4">
            Para clínicas dentales
          </p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
            Ortodoncia integral para su clínica
          </h1>
          <p className="mt-6 text-primary-100 text-lg leading-relaxed max-w-2xl mx-auto">
            Un servicio de ortodoncia completo, profesional y perfectamente integrado en
            su clínica dental. Sin necesidad de inversión en equipamiento ni contratación
            de personal adicional.
          </p>
        </div>
      </section>

      {/* Collaboration Model */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Modelo de colaboración"
            subtitle="Un sistema de trabajo diseñado para integrarse de forma natural en el funcionamiento de su clínica."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            {collaborationFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Steps */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-primary-50/30">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Cómo trabajamos juntos"
            subtitle="Un proceso claro y predecible, desde la primera derivación hasta la finalización del tratamiento."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8 items-start">
            <div className="space-y-8">
              {workflowSteps.map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-xl bg-primary-500 flex items-center justify-center text-white font-heading font-bold text-lg shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-primary-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-gray-100 hidden lg:block lg:sticky lg:top-24">
              <Image
                src="/images/clinica-sala.jpg"
                alt="Sala de espera de una clínica dental colaboradora"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            title="Estándares de calidad"
            subtitle="La combinación de formación, experiencia y tecnología que aporto a cada clínica."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {qualityItems.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white rounded-lg border border-primary-100 p-5"
              >
                <div className="w-2 h-2 rounded-full bg-primary-500 mt-2 shrink-0" />
                <div>
                  <p className="font-medium text-primary-900">{item.label}</p>
                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
