export const dynamic = 'force-static';

export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url><loc>https://heywooddev.com/</loc></url>
    <url><loc>https://heywooddev.com/privacy</loc></url>
    <url><loc>https://heywooddev.com/terms</loc></url>
  </urlset>`;
  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml' },
  });
}