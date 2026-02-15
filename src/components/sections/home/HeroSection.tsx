import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/constants';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-300 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="text-primary-300 text-sm font-semibold tracking-widest uppercase mb-4">
              Ortodoncia en la Comunidad Valenciana
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              {SITE_CONFIG.fullName}
            </h1>
            <p className="mt-3 text-primary-200 text-lg">
              Servicio especializado en ortodoncia integral infantil y adultos
            </p>
            <p className="mt-8 text-primary-100 text-base md:text-lg leading-relaxed max-w-xl">
              Colaboro con clínicas dentales de referencia en la Comunidad Valenciana
              ofreciendo un servicio integral de ortodoncia, basado en diagnóstico preciso,
              planificación digital y seguimiento personalizado de cada caso.
            </p>
          </div>

          {/* Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden ring-4 ring-primary-400/20">
              <Image
                src="/images/hugo-gomez.png"
                alt="Hugo Gómez"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
