import { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbSchema } from '@/lib/schema';
import { CLINICS } from '@/lib/constants';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ContactInfo } from '@/components/ui/ContactInfo';
import { ContactForm } from '@/components/ui/ContactForm';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contacto — Ortodoncista Dr. Hugo Gómez Mengual',
  description:
    'Contacte con el Dr. Hugo Gómez Mengual, ortodoncista en Comunidad Valenciana. Correo electrónico, formulario de contacto e información de las clínicas colaboradoras.',
  path: '/contacto',
});

export default function ContactoPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: 'Inicio', href: '/' },
          { name: 'Contacto', href: '/contacto' },
        ])}
      />

      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            as="h1"
            title="Contacto"
            subtitle="Si desea más información o ponerse en contacto, puede hacerlo a través de los siguientes medios."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div>
              <h2 className="text-xl font-heading font-semibold text-primary-900 mb-6">
                Datos de contacto
              </h2>
              <ContactInfo />

              <p className="mt-6 text-sm text-gray-500 leading-relaxed">
                También puede contactar directamente con la clínica dental en la
                que desee ser atendido.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-semibold text-primary-900 mb-6">
                Enviar un mensaje
              </h2>
              <ContactForm />
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-primary-100">
            <h2 className="text-xl font-heading font-semibold text-primary-900 mb-4">
              Clínicas colaboradoras
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Puede solicitar cita directamente en cualquiera de las clínicas donde colaboro:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CLINICS.map((clinic, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-400 shrink-0" />
                  <span className="font-medium">{clinic.name}</span>
                  <span className="text-gray-400">·</span>
                  <span>{clinic.city}, {clinic.province}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/donde-colaboro"
              className="inline-block mt-4 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
            >
              Ver todas las clínicas →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
