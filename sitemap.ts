import { MetadataRoute } from 'next';

// Define a type that strictly matches Next.js expectations
type SitemapRoute = {
  path: string;
  priority: number;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://heywooddev.com';

  const routes: SitemapRoute[] = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/site/about', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/site/services', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/site/contact', priority: 0.7, changeFrequency: 'monthly' },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}