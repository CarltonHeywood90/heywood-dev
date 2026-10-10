import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://heywooddev.com';

  // 1. Define static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/products`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 }, // Added Products Hub!
    { url: `${baseUrl}/site/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/site/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/site/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/site/audit`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ];

  // 2. Fetch blog posts dynamically
  const contentDir = path.join(process.cwd(), 'content');
  
  let blogRoutes: MetadataRoute.Sitemap = [];

  if (fs.existsSync(contentDir)) {
    const files = fs.readdirSync(contentDir);

    blogRoutes = files
      .filter((filename) => filename.endsWith('.md')) // Ensure only .md files are processed
      .map((filename) => {
        const filePath = path.join(contentDir, filename);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data } = matter(fileContent);

        return {
          url: `${baseUrl}/blog/${filename.replace('.md', '')}`,
          lastModified: data.publishedAt ? new Date(data.publishedAt) : new Date(),
          changeFrequency: 'monthly',
          priority: 0.7,
        };
      });
  }

  // 3. Merge and return
  return [...staticRoutes, ...blogRoutes];
}