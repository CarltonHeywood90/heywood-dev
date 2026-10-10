import type { Metadata } from 'next';
import Image from 'next/image';
import WhyApproach from '@/app/components/WhyApproach';

export const metadata: Metadata = {
  title: 'About Carlton Heywood | Web Developer & IT Specialist in Utah',
  description: 'Learn about Carlton Heywood and Heywood Dev. Specialized in high-performance static-first web development, IT management, and custom integrations in Payson, Utah.',
  keywords: [
    'Carlton Heywood',
    'Heywood Dev',
    'Web Developer Payson Utah',
    'IT Management Specialist',
    'Static Site Developer',
    'Utah Web Engineer',
  ],
  openGraph: {
    title: 'About Carlton Heywood | Heywood Dev',
    description: 'High-performance web architecture and IT management solutions based in Payson, Utah.',
    type: 'profile',
  },
};

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Carlton Heywood',
    jobTitle: 'Founder & Lead Web Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Heywood Dev',
      url: 'https://heywood.dev',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Payson',
      addressRegion: 'UT',
      addressCountry: 'US',
    },
    knowsAbout: [
      'Web Development',
      'IT Management',
      'Next.js',
      'TypeScript',
      'Static-First Architecture',
      'API Integration',
    ],
    sameAs: [
      'https://github.com/CarltonHeywood90',
    ],
  };

  return (
    <div className="py-12 md:py-20 max-w-7xl mx-auto px-6">
      {/* Structured Data Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex flex-col md:flex-row items-center md:items-start gap-12 lg:gap-20">
        
        {/* Left Column: Image */}
        <div className="w-full max-w-[320px] shrink-0">
          <div className="relative aspect-square overflow-hidden rounded-2xl border-4 border-baby-blue shadow-lg">
            <Image
              src="/images/carlton.jpg" 
              alt="Carlton Heywood - Founder and Lead Web Developer at Heywood Dev"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="mt-4 text-center text-xs text-slate-400 font-mono tracking-widest uppercase">
            Founder // Heywood Dev
          </p>
        </div>

        {/* Right Column: About Info */}
        <div className="flex-grow">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-slate mb-8">
            About <span className="text-baby-blue">Heywood Dev</span>
          </h1>
          
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              Led by a specialist in IT Management and modern web architecture, Heywood Dev focuses on building high-performance digital solutions that connect your business to the tools you need to scale.
            </p>
            <p>
              I bridge the gap between clean, intuitive design and reliable third-party integration. Rather than building heavy, complex, and high-maintenance backends, I leverage modern, static-first frameworks to create websites that are incredibly fast, inherently secure, and cost-effective to host.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 space-y-6 text-lg text-slate-600 leading-relaxed">
        <h2 className="sr-only">Our Development Philosophy</h2>
        <p>
          With a background rooted in meticulous trade work and professional project management, I approach every project with a "built-to-last" mindset. Whether it is a high-converting interface in Next.js or integrating advanced scheduling and automation workflows, the goal is always the same: efficiency, reliability, and speed.
        </p>
      </div>

      <div className="pt-6 mt-8 border-t border-slate-100 text-center">
        <h2 className="text-base italic text-slate-500 font-normal">
          Based in Payson, Utah. Serving clients worldwide.
        </h2>
      </div>

      <div className="mt-12">
        <WhyApproach />
      </div>
    </div>
  );
}