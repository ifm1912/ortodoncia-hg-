'use client';

import { useState } from 'react';
import Image from 'next/image';

/* ───────────────────────── Data ───────────────────────── */

interface CaseImage {
  before: string;
  after: string;
  alt: string;
  label?: string;
}

interface CaseData {
  title: string;
  description: string;
  images: CaseImage[];
}

const cases: CaseData[] = [
  {
    title: 'Mordida profunda y apiñamiento en adolescente',
    description:
      'Paciente adolescente con mordida profunda y apiñamiento marcado en ambas arcadas. El tratamiento permitió corregir la sobremordida, alinear los dientes y lograr una oclusión funcional y estéticamente equilibrada.',
    images: [
      {
        before: '/images/casos/mordida-profunda-antes.jpg',
        after: '/images/casos/mordida-profunda-despues.jpg',
        alt: 'Mordida profunda y apiñamiento en adolescente',
      },
    ],
  },
  {
    title: 'Mordida cruzada en adulto',
    description:
      'Paciente adulto con mordida cruzada anterior y desviación de línea media. Mediante ortodoncia fija se corrigió la relación entre ambas arcadas, recuperando una mordida correcta y una sonrisa armónica.',
    images: [
      {
        before: '/images/casos/mordida-cruzada-antes.jpg',
        after: '/images/casos/mordida-cruzada-despues.jpg',
        alt: 'Mordida cruzada en adulto',
      },
    ],
  },
  {
    title: 'Clase III en adolescente',
    description:
      'Paciente adolescente con maloclusión de clase III y mordida cruzada. El tratamiento incluyó la corrección de la relación anteroposterior de ambas arcadas, logrando una oclusión estable.',
    images: [
      {
        before: '/images/casos/clase-iii-antes-frontal.jpg',
        after: '/images/casos/clase-iii-despues-frontal.jpg',
        alt: 'Clase III en adolescente — vista lateral',
        label: 'Vista lateral (1)',
      },
      {
        before: '/images/casos/clase-iii-antes-lateral.jpg',
        after: '/images/casos/clase-iii-despues-lateral.jpg',
        alt: 'Clase III en adolescente — vista lateral',
        label: 'Vista lateral (2)',
      },
    ],
  },
  {
    title: 'Clase II en adolescente',
    description:
      'Paciente adolescente con maloclusión de clase II. Caso en curso; las imágenes del antes y después se publicarán próximamente.',
    images: [],
  },
];

interface TreatmentData {
  title: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
}

const treatments: TreatmentData[] = [
  {
    title: 'Ortodoncia infantil y del adolescente',
    description:
      'Los tratamientos de ortodoncia en niños y adolescentes se adaptan a las distintas fases de crecimiento dental y óseo. La interceptación temprana permite corregir problemas funcionales y esqueléticos antes de que se consoliden, facilitando tratamientos más sencillos en el futuro.',
    details: [
      'Ortodoncia interceptiva',
      'Seguimiento del desarrollo',
      'Tratamientos adaptados a la edad',
      'Coordinación con el odontopediatra',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: 'Ortodoncia Invisible',
    description:
      'Los alineadores transparentes son férulas removibles que se fabrican a medida para cada paciente. El tratamiento se planifica digitalmente, permitiendo prever el resultado final antes de comenzar. Ofrecen una alternativa estética y cómoda, especialmente indicada para pacientes adultos y adolescentes.',
    details: [
      'Prácticamente invisibles',
      'Removibles para comer e higiene',
      'Planificación digital completa',
      'Revisiones periódicas optimizadas',
    ],
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
    details: [
      'Menor fricción en el arco',
      'Opciones metálicas y estéticas',
      'Eficacia contrastada',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
];

/* ───────────────────────── Helpers ───────────────────────── */

function PhotoPlaceholder() {
  return (
    <div className="aspect-[3/2] bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center rounded-lg">
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
        <p className="text-xs text-primary-400">Próximamente</p>
      </div>
    </div>
  );
}

/* ───────────────────────── Component ───────────────────────── */

type Tab = 'casos' | 'tratamientos';

export function TratamientosContent() {
  const [activeTab, setActiveTab] = useState<Tab>('casos');

  return (
    <>
      {/* Segmented control */}
      <div className="flex justify-center px-4 sm:px-6 lg:px-8 pb-8">
        <div className="inline-flex rounded-lg border border-primary-200 bg-white p-1 shadow-sm">
          <button
            onClick={() => setActiveTab('casos')}
            className={`px-5 py-2.5 text-sm font-medium rounded-md transition-all duration-200 ${
              activeTab === 'casos'
                ? 'bg-primary-600 text-white shadow-sm'
                : 'text-primary-700 hover:bg-primary-50'
            }`}
            aria-pressed={activeTab === 'casos'}
          >
            Casos
          </button>
          <button
            onClick={() => setActiveTab('tratamientos')}
            className={`px-5 py-2.5 text-sm font-medium rounded-md transition-all duration-200 ${
              activeTab === 'tratamientos'
                ? 'bg-primary-600 text-white shadow-sm'
                : 'text-primary-700 hover:bg-primary-50'
            }`}
            aria-pressed={activeTab === 'tratamientos'}
          >
            Tratamientos
          </button>
        </div>
      </div>

      {/* ─── Casos tab ─── */}
      {activeTab === 'casos' && (
        <section id="casos" className="pb-20 md:pb-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <p className="text-center text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Algunos casos representativos de tratamientos realizados. Esta sección se irá ampliando con nuevos casos.
            </p>

            <div className="space-y-12">
              {cases.map((caso, index) => (
                <article
                  key={index}
                  className="bg-white rounded-xl border border-primary-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
                >
                  <div className="p-6 md:p-8">
                    <h2 className="text-xl md:text-2xl font-heading font-bold text-primary-900 mb-3">
                      {caso.title}
                    </h2>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-3xl">
                      {caso.description}
                    </p>

                    {caso.images.length > 0 ? (
                      <div className="space-y-6">
                        {caso.images.map((img, imgIndex) => (
                          <div key={imgIndex}>
                            {caso.images.length > 1 && img.label && (
                              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                                {img.label}
                              </p>
                            )}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div>
                                <p className="text-xs font-semibold text-primary-600 mb-1.5">
                                  Antes
                                </p>
                                <div className="relative aspect-[3/2] rounded-lg overflow-hidden bg-gray-100">
                                  <Image
                                    src={img.before}
                                    alt={`${img.alt} — antes del tratamiento`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 460px"
                                  />
                                </div>
                              </div>
                              <div>
                                <p className="text-xs font-semibold text-primary-600 mb-1.5">
                                  Después
                                </p>
                                <div className="relative aspect-[3/2] rounded-lg overflow-hidden bg-gray-100">
                                  <Image
                                    src={img.after}
                                    alt={`${img.alt} — después del tratamiento`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 460px"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <PhotoPlaceholder />
                        <PhotoPlaceholder />
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Tratamientos tab ─── */}
      {activeTab === 'tratamientos' && (
        <section className="relative pb-20 md:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background image */}
          <Image
            src="/images/aligners-bg.png"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            quality={80}
          />
          {/* Overlay for legibility */}
          <div className="absolute inset-0 bg-white/85" />

          <div className="relative z-10 max-w-5xl mx-auto">
            <p className="text-center text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Cada caso es único y requiere un diagnóstico personalizado. A continuación, presento los principales tipos de tratamiento de ortodoncia que ofrezco.
            </p>

            <div className="space-y-6">
              {treatments.map((treatment, index) => (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-xl border border-primary-100 p-6 md:p-8 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 shrink-0">
                      {treatment.icon}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl md:text-2xl font-heading font-semibold text-primary-900">
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
          </div>
        </section>
      )}
    </>
  );
}
