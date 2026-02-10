import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { HeroSection } from '@/components/sections/home/HeroSection';
import { CredentialsBar } from '@/components/sections/home/CredentialsBar';
import { PhilosophySection } from '@/components/sections/home/PhilosophySection';
import { ServicesOverview } from '@/components/sections/home/ServicesOverview';
import { TestimonialsSection } from '@/components/sections/home/TestimonialsSection';
import { ClinicLocationsPreview } from '@/components/sections/home/ClinicLocationsPreview';

export const metadata: Metadata = generatePageMetadata({
  title: 'Ortodoncista en Valencia — Dr. Hugo Gómez Mengual | Ortodoncia Invisible, Brackets y más',
  description:
    'Dr. Hugo Gómez Mengual, ortodoncista especialista en la Comunidad Valenciana. Ortodoncia invisible con Invisalign®, brackets de autoligado, ortodoncia lingual y digital. Más de 10 años de experiencia en Valencia, Moncada, Museros, Benetússer y Albaida.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CredentialsBar />
      <PhilosophySection />
      <ServicesOverview />
      <TestimonialsSection />
      <ClinicLocationsPreview />
    </>
  );
}
