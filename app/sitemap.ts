import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://heywood.dev'; // Replace with your actual domain

  // List all the routes you just created
  const routes = [
    '',
    '/about',
    '/services',
    '/contact',
    '/book',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8, // Home page is priority 1, others are 0.8
  }));
}