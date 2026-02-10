import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/seo/JsonLd';
import { getPersonSchema, getMedicalBusinessSchema } from '@/lib/schema';
import { SITE_CONFIG } from '@/lib/constants';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title: {
    default: `${SITE_CONFIG.fullName} — Ortodoncista en Comunidad Valenciana`,
    template: `%s | ${SITE_CONFIG.name} · Ortodoncista`,
  },
  description: SITE_CONFIG.description,
  keywords: [...SITE_CONFIG.keywords],
  authors: [{ name: SITE_CONFIG.fullName }],
  openGraph: {
    type: 'website',
    locale: SITE_CONFIG.locale,
    siteName: `${SITE_CONFIG.fullName} — Ortodoncista`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={SITE_CONFIG.lang} className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans text-foreground bg-background antialiased">
        <JsonLd data={getPersonSchema()} />
        <JsonLd data={getMedicalBusinessSchema()} />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
