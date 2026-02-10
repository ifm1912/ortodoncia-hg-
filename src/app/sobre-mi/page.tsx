import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbSchema } from '@/lib/schema';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TimelineItem } from '@/components/ui/TimelineItem';

export const metadata: Metadata = generatePageMetadata({
  title: 'Dr. Hugo Gómez Mengual — Ortodoncista especialista en Valencia',
  description:
    'Conozca al Dr. Hugo Gómez Mengual: ortodoncista con más de 10 años de experiencia, máster en ortodoncia por la Universitat de València. Especialista en Invisalign, brackets de autoligado y ortodoncia digital en la Comunidad Valenciana.',
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
  { year: '2016', title: 'Certificación en Sistema de Autoligado INSIGNIA®' },
  { year: '2015', title: 'Curso de Microtornillos — Universitat Internacional de Catalunya' },
  { year: '2014', title: 'The Tweed Study Course: Mecánica de Canto — Tucson, Arizona' },
  { year: '2012', title: 'Director de Instalación de Radiodiagnóstico Dental — Consejo de Seguridad Nuclear' },
  { year: '2012', title: 'Curso de Miniimplantes Dentales MDI — 3M ESPE' },
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
            {/* Professional photo placeholder — replace with actual photo */}
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden">
              <Image
                src="/images/consulta-dental.jpg"
                alt="Consulta de ortodoncia — Dr. Hugo Gómez Mengual"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />
            </div>

            {/* Text */}
            <div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-900">
                Dr. Hugo Gómez Mengual
              </h1>
              <p className="mt-2 text-lg text-primary-600">
                Ortodoncista especialista · Comunidad Valenciana
              </p>
              <div className="mt-2 h-0.5 w-16 bg-primary-500" />

              <div className="mt-8 space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Licenciado en Odontología por la Universitat de València (2007–2012) y
                  Máster Oficial en Ortodoncia por la misma universidad (2013–2016), con un
                  programa de 192 créditos ECTS de formación especializada.
                </p>
                <p>
                  Con más de 10 años de experiencia clínica, me he especializado en
                  ortodoncia con alineadores Invisalign®, sistemas de autoligado, ortodoncia
                  lingual y tecnología digital aplicada al diagnóstico y planificación del
                  tratamiento.
                </p>
                <p>
                  Actualmente colaboro con cuatro clínicas dentales de referencia en la
                  Comunidad Valenciana, donde atiendo más de 150 casos al año. Trabajo
                  con mi propio escáner intraoral y una higienista especializada en
                  ortodoncia, lo que garantiza un servicio integral y de máxima precisión
                  en cada visita.
                </p>
                <p>
                  A lo largo de mi trayectoria he colaborado con más de 10 clínicas en
                  las provincias de Valencia, Alicante y Murcia, acumulando una amplia
                  experiencia en diferentes perfiles de pacientes y contextos clínicos.
                </p>
              </div>
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

      {/* Cross-links */}
      <section className="pb-20 md:pb-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/metodo"
              className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
            >
              Conocer mi método de trabajo →
            </Link>
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
