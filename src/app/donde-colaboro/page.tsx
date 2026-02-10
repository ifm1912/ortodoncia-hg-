import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbSchema } from '@/lib/schema';
import { CLINICS } from '@/lib/constants';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ClinicCard } from '@/components/ui/ClinicCard';

export const metadata: Metadata = generatePageMetadata({
  title: 'Dónde encontrarme — Ortodoncista en Valencia, Moncada, Museros, Albaida',
  description:
    'Encuentre al Dr. Hugo Gómez Mengual en clínicas dentales de Museros, Moncada, Benetússer y Albaida (Valencia). Ortodoncista especialista en Comunidad Valenciana.',
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

          {/* Map placeholder */}
          <div className="mt-12 w-full aspect-[16/9] rounded-2xl bg-gradient-to-br from-primary-100 to-primary-50 border border-primary-200 flex items-center justify-center">
            <div className="text-center">
              <svg className="w-12 h-12 mx-auto text-primary-300" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
              </svg>
              <p className="text-sm text-primary-400 mt-3">
                Mapa de localización · Comunidad Valenciana
              </p>
            </div>
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
