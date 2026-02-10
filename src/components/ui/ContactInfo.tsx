import { SITE_CONFIG } from '@/lib/constants';

export function ContactInfo() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <svg className="w-5 h-5 text-primary-500 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
        <div>
          <p className="text-sm text-gray-500">Correo electrónico</p>
          <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary-800 font-medium hover:text-primary-600 transition-colors">
            {SITE_CONFIG.email}
          </a>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <svg className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
        <div>
          <p className="text-sm text-gray-500">Zona de trabajo</p>
          <p className="text-primary-800 font-medium">Comunidad Valenciana, España</p>
        </div>
      </div>
    </div>
  );
}
