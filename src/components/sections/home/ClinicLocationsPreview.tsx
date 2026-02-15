import Link from 'next/link';
import Image from 'next/image';
import { CLINICS } from '@/lib/constants';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ClinicCard } from '@/components/ui/ClinicCard';

export function ClinicLocationsPreview() {
  return (
    <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/clinica-bg.jpg"
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
          title="Dónde encontrarme"
          subtitle="Actualmente ofrezco servicios de ortodoncia en estas clínicas de la Comunidad Valenciana."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
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

        <div className="text-center mt-10">
          <Link
            href="/donde-colaboro"
            className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
          >
            Más información →
          </Link>
        </div>
      </div>
    </section>
  );
}
