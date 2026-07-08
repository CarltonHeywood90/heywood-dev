import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

// Define a type for your blog post metadata
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

  // Map over the markdown files and extract their frontmatter metadata
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
        author: data.author || 'Anonymous',
      };
    })
    // Sort posts by date (newest first)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-slate-100 pb-6">
            <Link href={`/blog/${post.slug}`} className="group">
              <h2 className="text-2xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
            </Link>
            <p className="text-sm text-slate-500 my-2">
              {post.publishedAt} • By {post.author}
            </p>
            <p className="text-slate-600 line-clamp-2">
              {post.summary}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
