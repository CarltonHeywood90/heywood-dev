import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import MarkdownRenderer from '../MarkdownRenderer';

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  // Await params correctly in Next.js 15+ App Router
  const { slug } = await params;
  
  // Read from your .md file path
  const filePath = path.join(process.cwd(), 'content', `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  // Parse frontmatter data out of the string safely
  const { data: frontmatter, content } = matter(fileContent);

  return (
    <article className="max-w-2xl mx-auto p-8 prose prose-slate">
      {/* You can now cleanly access metadata headers */}
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
