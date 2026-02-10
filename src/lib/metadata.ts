import { Metadata } from 'next';
import { SITE_CONFIG } from './constants';

interface PageMetadataParams {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}

export function generatePageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: PageMetadataParams): Metadata {
  const url = `${SITE_CONFIG.siteUrl}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${SITE_CONFIG.name} · Ortodoncista`,
      description,
      url,
      siteName: `${SITE_CONFIG.fullName} — Ortodoncista`,
      locale: SITE_CONFIG.locale,
      type: 'website',
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
