import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Developer Tools, Software & Digital Products',
  description: 'Browse practical software utilities, Python automation tools, and game-ready audio assets created by Carlton Heywood at Heywood Dev.',
  keywords: [
    'Python PDF Receipt Parser',
    'Batch Image Watermarker Utility',
    '8-Bit Chiptune Game Loops',
    'Indie Game Asset Packs',
    'Developer Utilities',
    'Carlton Heywood Products',
  ],
  openGraph: {
    title: 'Developer Tools & Digital Products | Heywood Dev',
    description: 'Custom software tools, Python desktop applications, and retro game audio assets.',
    type: 'website',
  },
  alternates: {
    canonical: '/site/products',
  },
};

export default function ProductsPage() {
  const products = [
    {
      title: "Batch Image Watermarker Utility",
      category: "Desktop Software // Productivity",
      description: "A streamlined, offline utility built for batch-processing image watermarks. Fast, secure, and designed to save hours of repetitive file management.",
      linkText: "Get it on Gumroad",
      linkUrl: "https://woodsy4518.gumroad.com/l/batchwatermarkerutility",
      badge: "Software",
    },
    {
      title: "Python Receipt & Invoice Parser",
      category: "Developer Tool // Python",
      description: "A robust utility script leveraging pdfplumber and Tkinter to extract tabular line items from standard receipt PDFs and export clean CSV data.",
      linkText: "View on Gumroad",
      linkUrl: "https://woodsy4518.gumroad.com/l/rlofbt",
      badge: "Utility",
    },
    {
      title: "8-Bit Fantasy Music Loop Pack (5 Game-Ready Chiptunes)",
      category: "Game Audio // Chiptune",
      description: "A curated collection of six-track retro adventure audio loops tailored for game jams, indie RPGs, and retro-style projects. Seamlessly looping WAV formats.",
      linkText: "Get it on itch.io",
      linkUrl: "https://carltonheywood.itch.io/8-bit-fantasy-loop-pack-5-game-ready-chiptunes",
      badge: "Audio Assets",
    },
    {
      title: "UR IT - 2D Web Game",
      category: "Interactive // TypeScript & Vite",
      description: "A lightweight, browser-based 2D arcade action game built using TypeScript and Vite, packaged for instant play on itch.io.",
      linkText: "Play on itch.io",
      linkUrl: "https://carltonheywood.itch.io/ur-it",
      badge: "Web Game",
    },
  ];

  // Structured Data Schema for Collection of Digital Products
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Heywood Dev Digital Products & Software',
    url: 'https://heywooddev.com/site/products',
    description: 'Software utilities, Python scripts, and game audio loop packs by Carlton Heywood.',
    author: {
      '@type': 'Person',
      name: 'Carlton Levi Heywood',
    },
    mainEntity: products.map((prod) => ({
      '@type': 'SoftwareApplication',
      name: prod.title,
      description: prod.description,
      url: prod.linkUrl,
      applicationCategory: prod.category,
      operatingSystem: 'Cross-platform',
    })),
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 md:py-20">
      {/* Structured Data Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <header className="text-center mb-16">
        <span className="text-baby-blue font-bold tracking-widest uppercase text-sm mb-4 inline-block">
          Digital Storefront
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-dark-slate mb-6">
          Software Tools & <span className="text-baby-blue">Digital Products.</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Explore practical developer utilities, standalone desktop applications, and game-ready audio assets created by Carlton Heywood. For custom websites, web applications, or API integration, see our web development services.
        </p>
      </header>

      {/* Product Grid */}
      <section className="grid md:grid-cols-2 gap-8">
        {products.map((product, i) => (
          <div 
            key={i} 
            className="p-8 bg-white border border-slate-100 rounded-2xl hover:border-baby-blue/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono tracking-wider text-slate-400 uppercase">
                  {product.category}
                </span>
                <span className="bg-baby-blue/10 text-baby-blue font-semibold text-xs px-3 py-1 rounded-full">
                  {product.badge}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-dark-slate mb-3">
                {product.title}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                {product.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
              <a 
                href={product.linkUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-bold text-baby-blue hover:underline"
              >
                {product.linkText} <span className="ml-1">↗</span>
              </a>
              <span className="text-xs text-slate-400">Instant Access</span>
            </div>
          </div>
        ))}
      </section>

      {/* Bottom Cross-Link CTA */}
      <section className="mt-20 bg-dark-slate rounded-3xl p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Need a custom tool or web app built from scratch?</h2>
        <p className="text-slate-300 mb-8 max-w-xl mx-auto">
          Whether you need a dedicated internal dashboard or a custom automation script, let&apos;s talk about your project requirements.
        </p>
        <Link 
          href="/site/services" 
          className="inline-block bg-baby-blue hover:bg-baby-blue/90 text-white font-bold py-4 px-8 rounded-lg transition-all"
        >
          Explore Web Development Services
        </Link>
      </section>
    </main>
  );
}