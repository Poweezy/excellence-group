import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://excellencegroup.co.sz';
  
  const routes = [
    '',
    '/about',
    '/contact',
    '/careers',
    '/investors',
    '/tenders',
    '/sustainability',
    '/financial',
    '/logistics',
    '/water',
    '/agriculture',
    '/heavy-plant',
    '/insurance',
    '/mall-property',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
}
