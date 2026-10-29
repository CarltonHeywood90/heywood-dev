import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import MarkdownRenderer from '../MarkdownRenderer';
import type { Metadata } from 'next';

interface PostParams {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PostParams): Promise<Metadata> {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'content', `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(fileContent);

  return {
    title: data.title,
    description: data.summary,
    openGraph: {
      title: `${data.title} | Heywood Dev`,
      description: data.summary,
      type: 'article',
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function Post({ params }: PostParams) {
  const { slug } = await params;
  
  const filePath = path.join(process.cwd(), 'content', `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const { data: frontmatter, content } = matter(fileContent);

  return (
    <article className="max-w-2xl mx-auto p-8 prose prose-slate">
      <h1 className="text-3xl font-bold mb-2">{frontmatter.title}</h1>
      <p className="text-sm text-slate-500 mb-8">
        By {frontmatter.author} • {frontmatter.publishedAt}
      </p>
      
      <MarkdownRenderer content={content} />
    </article>
  );
}

// Generate static routes for build time
export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'content');
  const files = fs.readdirSync(contentDir);
  
  return files.map((filename) => ({
    slug: filename.replace('.md', '')
  }));
}
