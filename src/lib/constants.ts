export const SITE_CONFIG = {
  name: 'Dr. Hugo Gómez',
  fullName: 'Dr. Hugo Gómez Mengual',
  title: 'Ortodoncista',
  tagline: 'Especialista en Ortodoncia · Comunidad Valenciana',
  phone: '620 110 833',
  phoneHref: 'tel:+34620110833',
  email: 'hgomezortodoncia@gmail.com',
  company: 'ORTOGOMEN SL',
  siteUrl: 'https://www.hugogomezortodoncia.es',
  locale: 'es_ES',
  lang: 'es',
  description:
    'Dr. Hugo Gómez Mengual, ortodoncista especialista en la Comunidad Valenciana. Ortodoncia con alineadores Invisalign®, brackets de autoligado y tecnología digital. Más de 10 años de experiencia.',
  keywords: [
    'ortodoncista Valencia',
    'ortodoncia Comunidad Valenciana',
    'Invisalign Valencia',
    'ortodoncista especialista Valencia',
    'ortodoncia digital Valencia',
    'brackets autoligado Valencia',
    'alineadores invisibles Valencia',
    'ortodoncia invisible Valencia',
    'ortodoncia adultos Valencia',
    'ortodoncia infantil Valencia',
    'aparatos dientes Valencia',
    'dientes apiñados ortodoncia',
    'Invisalign o brackets',
    'ortodoncista cerca de mí Valencia',
    'ortodoncista Moncada',
    'ortodoncista Museros',
    'ortodoncista Benetússer',
    'ortodoncista Albaida',
  ],
  experience: {
    years: 10,
    casesPerYear: 150,
    clinicsCount: 4,
  },
} as const;

export const CLINICS = [
  {
    name: 'Clínica Dental Font de la Rosa',
    city: 'Museros',
    province: 'Valencia',
    since: 2016,
  },
  {
    name: 'Clínica Dental Moncadent',
    city: 'Moncada',
    province: 'Valencia',
    since: 2018,
  },
  {
    name: 'Clínica Dental Benetússer',
    city: 'Benetússer',
    province: 'Valencia',
    since: 2020,
  },
  {
    name: 'Clínica Boronat',
    city: 'Albaida',
    province: 'Valencia',
    since: 2020,
  },
] as const;

export const NAV_ITEMS = [
  { label: 'Inicio', href: '/' },
  { label: 'Sobre mí', href: '/sobre-mi' },
  { label: 'Mi método', href: '/metodo' },
  { label: 'Para clínicas', href: '/para-clinicas' },
  { label: 'Tratamientos', href: '/tratamientos' },
  { label: 'Casos', href: '/casos' },
  { label: 'Blog y FAQ', href: '/blog' },
  { label: 'Dónde encontrarme', href: '/donde-colaboro' },
  { label: 'Contacto', href: '/contacto' },
] as const;
