import { SectionHeading } from '@/components/ui/SectionHeading';
import Link from 'next/link';

const testimonials = [
  {
    quote:
      'Tenía los dientes muy apiñados desde pequeña y nunca me había atrevido a ponerme ortodoncia de adulta. El Dr. Hugo me explicó todo el proceso con mucha claridad y el resultado ha sido espectacular.',
    name: 'Laura M.',
    treatment: 'Alineadores Invisalign®',
    city: 'Valencia',
  },
  {
    quote:
      'Mi hijo necesitaba ortodoncia interceptiva y el seguimiento ha sido impecable. Cada visita era rápida y eficiente, y el tratamiento terminó antes de lo esperado.',
    name: 'Carlos R.',
    treatment: 'Ortodoncia infantil',
    city: 'Moncada',
  },
  {
    quote:
      'Llevaba años con problemas de mordida y decidí dar el paso a los 45 años. El trato fue excelente y la planificación digital me dio mucha confianza desde el principio.',
    name: 'María T.',
    treatment: 'Brackets de autoligado',
    city: 'Museros',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-primary-50/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Opiniones de pacientes"
          subtitle="Estas son algunas experiencias de pacientes que han confiado en mi trabajo."
        />

        {/* Note: replace with real testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-primary-100 p-6 flex flex-col"
            >
              {/* Quote icon */}
              <svg
                className="w-8 h-8 text-primary-200 mb-4 shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
              </svg>

              <p className="text-gray-700 leading-relaxed text-sm flex-1">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="mt-6 pt-4 border-t border-primary-50">
                <p className="text-sm font-semibold text-primary-900">
                  {testimonial.name}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {testimonial.treatment} · {testimonial.city}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/casos"
            className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
          >
            Ver más opiniones y casos →
          </Link>
        </div>
      </div>
    </section>
  );
}
