import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbSchema } from '@/lib/schema';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TimelineItem } from '@/components/ui/TimelineItem';

export const metadata: Metadata = generatePageMetadata({
  title: 'Hugo Gómez — Ortodoncista en Valencia',
  description:
    'Conozca a Hugo Gómez: ortodoncista con más de 10 años de experiencia, máster en ortodoncia por la Universidad de Valencia. Diagnóstico digital con escáner intraoral, planificación personalizada y seguimiento continuo. Especialista en ortodoncia invisible y digital en la Comunidad Valenciana.',
  path: '/sobre-mi',
});

const academicTimeline = [
  {
    year: '2013 – 2016',
    title: 'Máster Oficial en Ortodoncia (192 ECTS)',
    institution: 'Universitat de València',
    description:
      'Formación oficial de posgrado en ortodoncia y ortopedia dentofacial con un programa de tres años y 192 créditos ECTS.',
  },
  {
    year: '2007 – 2012',
    title: 'Grado en Odontología',
    institution: 'Universitat de València',
  },
];

const continuingEducation = [
  { year: '2019', title: 'Máster en Ortodoncia Plástica (Invisalign®)' },
  { year: '2019', title: 'Profesor Asociado en Ortodoncia con Alineadores — Aligners Academy' },
  { year: '2016', title: 'Certificación en Ortodoncia Invisalign®' },
  { year: '2016', title: 'Certificación en Ortodoncia Lingual WIN®' },
  { year: '2015', title: 'Curso de Microtornillos — Universitat Internacional de Catalunya' },
  { year: '2014', title: 'The Tweed Study Course: Mecánica de Canto — Tucson, Arizona' },
  { year: '2012', title: 'Director de Instalación de Radiodiagnóstico Dental — Consejo de Seguridad Nuclear' },
  { year: '2012', title: 'Curso de Miniimplantes Dentales MDI — 3M ESPE' },
];

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

export default function SobreMiPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: 'Inicio', href: '/' },
          { name: 'Sobre mí', href: '/sobre-mi' },
        ])}
      />

      {/* Biography */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Professional photo — Hugo Gómez */}
            <div className="relative w-full aspect-[3/4] max-w-xs mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/images/hugo-gomez-color.jpg"
                alt="Hugo Gómez — Ortodoncista en Valencia"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                priority
              />
            </div>

            {/* Text */}
            <div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-900">
                Hugo Gómez
              </h1>
              <p className="mt-2 text-lg text-primary-600">
                Ortodoncista · Comunidad Valenciana
              </p>
              <div className="mt-2 h-0.5 w-16 bg-primary-500" />

              <div className="mt-8 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Licenciado en Odontología por la Universidad de Valencia y Máster de
                  Especialización en Ortodoncia por la Universidad de Valencia.
                </p>
                <p>
                  Cuento con 10 años de experiencia clínica, dedicados exclusivamente a la
                  ortodoncia. Estoy especializado en tratamientos con alineadores invisibles,
                  ortodoncia fija de autoligado y planificación digital avanzada.
                </p>
                <p>
                  Actualmente colaboro con clínicas dentales en la Comunidad Valenciana,
                  donde trato más de 150 casos al año. Trabajo con escáner intraoral propio
                  y tecnología digital aplicada al diagnóstico y al diseño del tratamiento,
                  lo que permite una mayor precisión, comodidad y control en cada fase.
                </p>
                <p>
                  A lo largo de mi trayectoria he colaborado con más de 10 clínicas en
                  Valencia, Alicante y Murcia, lo que me ha permitido adquirir una amplia
                  experiencia en distintos perfiles de pacientes y enfoques clínicos.
                </p>
                <p>
                  Mi objetivo es ofrecer tratamientos de ortodoncia personalizados,
                  eficientes y basados en la máxima precisión, cuidando el resultado final
                  tanto a nivel funcional como estético.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-primary-50/30">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Equipo" />

          <div className="bg-white rounded-xl border border-primary-100 p-8 max-w-2xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-heading font-semibold text-primary-900">
                  Carmen Martínez
                </h3>
                <p className="text-sm text-primary-600">
                  Higienista Bucodental
                </p>
              </div>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
              <p>
                Desempeño mi labor como Higienista Bucodental junto al ortodoncista Hugo Gómez, desarrollando mi actividad de forma exclusiva en el ámbito de la ortodoncia.
              </p>
              <p>
                Desde mi incorporación, he desarrollado funciones de asistencia directa en gabinete, preparación integral del paciente, organización y control de instrumental y materiales, así como toma de registros y apoyo continuo en los procedimientos clínicos. Mi labor se centra exclusivamente en tratamientos de ortodoncia, lo que me ha permitido adquirir precisión técnica y una dinámica de trabajo altamente coordinada y eficiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Timeline */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-primary-50/30">
        <div className="max-w-3xl mx-auto">
          <SectionHeading title="Formación académica" />
          <div className="mt-4">
            {academicTimeline.map((entry, index) => (
              <TimelineItem
                key={index}
                year={entry.year}
                title={entry.title}
                institution={entry.institution}
                description={entry.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Continuing Education */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Formación complementaria" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {continuingEducation.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white rounded-lg border border-primary-100 p-4"
              >
                <span className="inline-block text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded shrink-0">
                  {item.year}
                </span>
                <p className="text-sm text-gray-700">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Method — anchor target for /metodo redirect */}
      <section id="metodo" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-primary-50/30">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            title="Mi método de trabajo"
            subtitle="Diagnóstico preciso, planificación digital y seguimiento personalizado."
          />
        </div>
      </section>

      {phases.map((phase, index) => (
        <section
          key={phase.number}
          className={`py-12 md:py-16 px-4 sm:px-6 lg:px-8 ${
            index % 2 === 0 ? '' : 'bg-primary-50/30'
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
                      src="/images/clinica-1.png"
                      alt="Clínica de ortodoncia — diagnóstico preciso"
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
                      src="/images/escaner-1.jpg"
                      alt="Escáner intraoral para planificación digital"
                      fill
                      className="object-cover"
                      sizes="300px"
                    />
                  </div>
                )}
                {/* Image for personalized follow-up phase */}
                {index === 2 && (
                  <div className="relative mt-6 w-full aspect-[4/3] rounded-xl overflow-hidden hidden lg:block">
                    <Image
                      src="/images/alineadores.jpg"
                      alt="Alineadores transparentes — seguimiento personalizado"
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

      {/* Cross-links */}
      <section className="pb-20 md:pb-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/tratamientos"
              className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
            >
              Ver tratamientos →
            </Link>
            <Link
              href="/donde-colaboro"
              className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
            >
              Dónde encontrarme →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
