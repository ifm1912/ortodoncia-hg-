import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbSchema } from '@/lib/schema';
import { CLINICS } from '@/lib/constants';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ClinicCard } from '@/components/ui/ClinicCard';
import { ValenciaMap } from '@/components/ui/ValenciaMap';

export const metadata: Metadata = generatePageMetadata({
  title: 'Dónde encontrarme — Ortodoncista en Valencia, Moncada, Museros, Albaida',
  description:
    'Encuentre a Hugo Gómez en clínicas dentales de Museros, Moncada, Benetússer y Albaida (Valencia). Ortodoncista especialista en Comunidad Valenciana.',
  path: '/donde-colaboro',
});

export default function DondeColaboroPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: 'Inicio', href: '/' },
          { name: 'Dónde encontrarme', href: '/donde-colaboro' },
        ])}
      />

      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            as="h1"
            title="Dónde encontrarme"
            subtitle="Actualmente colaboro con las siguientes clínicas dentales en la Comunidad Valenciana, donde ofrezco un servicio integral de ortodoncia."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {CLINICS.map((clinic, index) => (
              <ClinicCard
                key={index}
                name={clinic.name}
                city={clinic.city}
                province={clinic.province}
                since={clinic.since}
              />
            ))}
          </div>

          {/* Map */}
          <div className="mt-12 max-w-md mx-auto">
            <ValenciaMap clinics={CLINICS} />
          </div>

          <div className="mt-12 bg-secondary-50 rounded-xl border border-secondary-200 p-8">
            <h2 className="text-xl font-heading font-semibold text-primary-900 mb-3">
              Experiencia previa
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Anteriormente he colaborado con más de 10 clínicas en las provincias
              de Valencia, Alicante y Murcia, acumulando una amplia experiencia en
              diferentes perfiles de pacientes y contextos clínicos.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
