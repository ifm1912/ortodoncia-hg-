import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbSchema, getMedicalProcedureSchema } from '@/lib/schema';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TratamientosContent } from '@/components/sections/treatments/TratamientosContent';

export const metadata: Metadata = generatePageMetadata({
  title: 'Tratamientos y casos de ortodoncia en Valencia — Hugo Gómez',
  description:
    'Tratamientos de ortodoncia de Hugo Gómez en Valencia: ortodoncia infantil, ortodoncia invisible y brackets de autoligado. Casos reales con fotos antes y después.',
  path: '/tratamientos',
});

export default function TratamientosPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: 'Inicio', href: '/' },
          { name: 'Tratamientos y casos', href: '/tratamientos' },
        ])}
      />
      <JsonLd data={getMedicalProcedureSchema()} />

      {/* Heading */}
      <section className="pt-20 md:pt-28 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            as="h1"
            title="Tratamientos y casos"
            subtitle="Casos reales de tratamientos de ortodoncia realizados y los principales tipos de tratamiento que ofrezco."
          />
        </div>
      </section>

      {/* Tabs + Content (client component) */}
      <TratamientosContent />

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-gray-600 text-sm leading-relaxed">
            ¿Tiene dudas sobre cuál es el tratamiento más adecuado para su caso?
          </p>
          <Link
            href="/contacto"
            className="inline-block text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
          >
            Solicitar información →
          </Link>
        </div>
      </section>
    </>
  );
}
