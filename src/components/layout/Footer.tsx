import Link from 'next/link';
import { SITE_CONFIG, NAV_ITEMS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-primary-950 text-primary-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-white text-lg font-heading font-bold">
              {SITE_CONFIG.fullName}
            </h3>
            <p className="mt-1 text-sm text-primary-400 tracking-wider uppercase">
              Ortodoncia
            </p>
            <p className="mt-4 text-sm text-primary-300 leading-relaxed">
              Especialista en ortodoncia en la Comunidad Valenciana.
              Colaborador en clínicas dentales de referencia.
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Navegación
            </h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-primary-400 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-sm text-primary-300 hover:text-white transition-colors break-all">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-3 mt-2">
                <svg className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span className="text-sm text-primary-300">
                  Comunidad Valenciana, España
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-800">
          <p className="text-center text-xs text-primary-500">
            © {new Date().getFullYear()} {SITE_CONFIG.fullName}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
