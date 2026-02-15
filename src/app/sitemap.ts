import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.siteUrl;

  const routes = [
    { path: '/', priority: 1.0, changeFrequency: 'monthly' as const },
    { path: '/sobre-mi', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/para-clinicas', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/tratamientos', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/blog', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/blog/ortodoncia-invisible-valencia', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/blog/invisalign-o-brackets', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/blog/ortodoncia-adultos', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/blog/ortodoncia-infantil-cuando-empezar', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/donde-colaboro', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/contacto', priority: 0.5, changeFrequency: 'monthly' as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
