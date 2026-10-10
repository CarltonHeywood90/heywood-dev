import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://heywooddev.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // If you have any admin or private utility routes later, disallow them here
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}