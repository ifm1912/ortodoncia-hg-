import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';

const treatments = [
  {
    title: 'Alineadores Invisalign®',
    description: 'Férulas transparentes y removibles, planificadas digitalmente para un movimiento dental preciso.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    title: 'Brackets de autoligado',
    description: 'Sistema de brackets con mecanismo de cierre propio que reduce la fricción y optimiza el movimiento dental.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    title: 'Ortodoncia lingual',
    description: 'Brackets colocados en la cara interna del diente. Completamente invisible desde el exterior.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Ortodoncia infantil y del adolescente',
    description: 'Tratamientos adaptados a las fases de crecimiento. Interceptación temprana y seguimiento del desarrollo.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
];

export function ServicesOverview() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-primary-50/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Tratamientos de ortodoncia"
          subtitle="Como ortodoncista en Valencia, ofrezco una gama completa de tratamientos adaptados a las necesidades de cada paciente: desde ortodoncia invisible con alineadores hasta brackets y ortodoncia lingual."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-primary-100 p-6 hover:shadow-md hover:border-primary-200 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600 shrink-0">
                  {treatment.icon}
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-primary-900">
                    {treatment.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    {treatment.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/tratamientos"
            className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
          >
            Ver todos los tratamientos →
          </Link>
        </div>
      </div>
    </section>
  );
}
