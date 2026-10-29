import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Development Articles & Engineering Case Studies',
  description: 'Practical articles on Next.js, web application architecture, API integrations, and software tools by Carlton Heywood, a developer in Payson, Utah.',
  keywords: [
    'Web Development Blog',
    'Next.js Case Studies',
    'TypeScript Engineering',
    'Static Site Architecture Insights',
    'Carlton Heywood Blog',
  ],
  openGraph: {
    title: 'Web Development Articles & Case Studies | Heywood Dev',
    description: 'Practical insights on Next.js, web applications, and API integration from a Payson, Utah developer.',
    type: 'website',
  },
  alternates: {
    canonical: '/blog',
  },
};

interface PostMetadata {
  slug: string;
  title: string;
  publishedAt: string;
  summary: string;
  author: string;
}

export default function BlogIndex() {
  const contentDir = path.join(process.cwd(), 'content');
  const files = fs.readdirSync(contentDir);

  // Map over the markdown files and extract frontmatter metadata
  const posts: PostMetadata[] = files
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => {
      const slug = filename.replace('.md', '');
      const filePath = path.join(contentDir, filename);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContent);

      return {
        slug,
        title: data.title || 'Untitled Post',
        publishedAt: data.publishedAt || '',
        summary: data.summary || '',
        author: data.author || 'Carlton Levi Heywood',
      };
    })
    // Sort posts by date (newest first)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  // Structured Data Schema for Blog Index
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Heywood Dev Blog',
    url: 'https://heywooddev.com/blog',
    description: 'Practical engineering case studies and web development insights by Carlton Levi Heywood.',
    author: {
      '@type': 'Person',
      name: 'Carlton Levi Heywood',
    },
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: `https://heywooddev.com/blog/${post.slug}`,
      datePublished: post.publishedAt,
      description: post.summary,
    })),
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      {/* Structured Data Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <header className="mb-12 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-dark-slate mb-4">
          Web Development <span className="text-baby-blue">Insights & Case Studies</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          Practical insights on Next.js web applications, API integration, and software engineering from Carlton Heywood in Payson, Utah.
        </p>
      </header>
      
      {/* Blog Feed */}
      <section className="space-y-10">
        <h2 className="sr-only">Latest Blog Posts</h2>
        {posts.map((post) => (
          <article 
            key={post.slug} 
            className="p-6 bg-white border border-slate-100 rounded-2xl hover:border-baby-blue/40 hover:shadow-md transition-all duration-300"
          >
            <Link href={`/blog/${post.slug}`} className="group block">
              <h2 className="text-2xl font-bold text-dark-slate group-hover:text-baby-blue transition-colors mb-2">
                {post.title}
              </h2>
            </Link>
            
            <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
              {post.publishedAt} <span className="mx-1">•</span> By <span className="text-slate-600 font-medium">{post.author}</span>
            </p>

            <p className="text-slate-600 leading-relaxed line-clamp-3 mb-4">
              {post.summary}
            </p>

            <Link 
              href={`/blog/${post.slug}`} 
              className="inline-flex items-center text-sm font-bold text-baby-blue hover:underline"
            >
              Read Full Case Study <span className="ml-1">→</span>
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}