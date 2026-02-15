import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FeatureCard } from '@/components/ui/FeatureCard';

const features = [
  {
    title: 'Precisión diagnóstica',
    description:
      'Escáner intraoral propio para registros digitales de alta resolución. Sin moldes tradicionales, mayor comodidad y exactitud.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    title: 'Planificación digital',
    description:
      'Diseño del tratamiento con software de planificación avanzada. Simulación del movimiento dental y resultados previstos.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
  },
  {
    title: 'Seguimiento personalizado',
    description:
      'Control periódico del tratamiento y comunicación directa con la clínica. Higienista especializada en ortodoncia en cada visita.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
];

export function PhilosophySection() {
  return (
    <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/metodo-trabajo-bg.jpg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        quality={80}
      />
      {/* Overlay for legibility */}
      <div className="absolute inset-0 bg-white/85" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeading
          title="Mi filosofía de trabajo"
          subtitle="La clave del éxito en un tratamiento de ortodoncia es realizar un diagnóstico profundo, exacto e individualizado en cada caso. Cuando la ortodoncia se basa en un buen diagnóstico, se convierte en un instrumento de alta precisión y gran eficacia que permite alcanzar los mejores resultados."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
          {features.map((feature, index) => (
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
  );
}
