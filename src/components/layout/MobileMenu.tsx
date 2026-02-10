'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS, SITE_CONFIG } from '@/lib/constants';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Close menu only when the user actually navigates (pathname changes)
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      onClose();
    }
  }, [pathname, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
        open ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel — inline style ensures fully opaque background */}
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-sm shadow-2xl transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ backgroundColor: '#0a1f1f' }}
      >
        <div
          className="flex items-center justify-between p-6"
          style={{ borderBottom: '1px solid #174b4b' }}
        >
          <span className="text-lg font-heading font-bold text-white">
            {SITE_CONFIG.name}
          </span>
          <button
            type="button"
            className="p-2 rounded-md text-white/70 hover:text-white"
            onClick={onClose}
            aria-label="Cerrar menú de navegación"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="px-4 py-6 overflow-y-auto max-h-[calc(100vh-5rem)]">
          <ul className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href ||
                (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block px-4 py-3.5 text-base font-medium rounded-lg transition-colors ${
                      isActive
                        ? 'text-white bg-white/15'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
