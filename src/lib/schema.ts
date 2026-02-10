import { SITE_CONFIG } from './constants';
import { FAQItem } from '@/types';

export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE_CONFIG.fullName,
    jobTitle: 'Ortodoncista',
    description: SITE_CONFIG.description,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    url: SITE_CONFIG.siteUrl,
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'Universitat de València',
      },
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Máster Oficial en Ortodoncia',
        credentialCategory: 'Master',
        recognizedBy: {
          '@type': 'EducationalOrganization',
          name: 'Universitat de València',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Grado en Odontología',
        credentialCategory: 'Degree',
        recognizedBy: {
          '@type': 'EducationalOrganization',
          name: 'Universitat de València',
        },
      },
    ],
    knowsAbout: [
      'Ortodoncia',
      'Invisalign',
      'Alineadores invisibles',
      'Brackets de autoligado',
      'Ortodoncia digital',
      'Escáner intraoral',
      'Ortodoncia lingual',
      'Ortodoncia infantil',
      'Ortodoncia interceptiva',
      'Microtornillos de anclaje',
    ],
    workLocation: {
      '@type': 'AdministrativeArea',
      name: 'Comunidad Valenciana, España',
    },
  };
}

export function getMedicalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: `${SITE_CONFIG.fullName} — Ortodoncista`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.siteUrl,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Comunidad Valenciana',
    },
    medicalSpecialty: 'Orthodontics',
    employee: {
      '@type': 'Person',
      name: SITE_CONFIG.fullName,
    },
  };
}

export function getFAQSchema(items: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.siteUrl}${item.href}`,
    })),
  };
}

export function getMedicalProcedureSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Tratamientos de ortodoncia — Dr. Hugo Gómez Mengual',
    url: `${SITE_CONFIG.siteUrl}/tratamientos`,
    about: [
      {
        '@type': 'MedicalProcedure',
        name: 'Ortodoncia con alineadores Invisalign',
        procedureType: 'http://schema.org/NoninvasiveProcedure',
        bodyLocation: 'Boca',
        description:
          'Tratamiento de ortodoncia con alineadores transparentes Invisalign® planificados digitalmente para corregir la posición de los dientes.',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Ortodoncia con brackets de autoligado',
        procedureType: 'http://schema.org/NoninvasiveProcedure',
        bodyLocation: 'Boca',
        description:
          'Sistema de brackets con mecanismo de cierre propio que reduce la fricción y optimiza el movimiento dental, disponible en versión metálica y estética.',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Ortodoncia lingual',
        procedureType: 'http://schema.org/NoninvasiveProcedure',
        bodyLocation: 'Boca',
        description:
          'Brackets colocados en la cara interna de los dientes, completamente invisibles desde el exterior. Certificación WIN®.',
      },
    ],
    specialty: 'Orthodontics',
    lastReviewed: new Date().toISOString().split('T')[0],
  };
}
