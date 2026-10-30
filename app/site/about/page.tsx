import type { Metadata } from 'next';
import Image from 'next/image';
import WhyApproach from '@/app/components/WhyApproach';

export const metadata: Metadata = {
  title: 'About Carlton Heywood | Business-First Website Partner',
  description: 'Meet Carlton Heywood of HeywoodDev: a business-first website partner with degrees in Business Management and IT Management and hands-on full-stack experience.',
  keywords: [
    'Carlton Heywood',
    'Heywood Dev',
    'Business Website Consultant Utah',
    'Business Management and IT Management',
    'Payson Utah Small Business Websites',
  ],
  openGraph: {
    title: 'About Carlton Heywood | HeywoodDev',
    description: 'Business insight and hands-on website experience for local businesses, clinics, and service providers.',
    type: 'profile',
  },
  alternates: {
    canonical: '/site/about',
  },
};

export default function AboutPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Carlton Heywood',
    jobTitle: 'Founder & Business-First Website Partner',
    worksFor: {
      '@type': 'Organization',
      name: 'Heywood Dev',
      url: 'https://heywooddev.com',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Payson',
      addressRegion: 'UT',
      addressCountry: 'US',
    },
    knowsAbout: ['Business Management', 'IT Management', 'Website Planning', 'Full-Stack Development'],
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
              alt="Carlton Heywood, founder of HeywoodDev"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="mt-4 text-center text-xs text-slate-400 font-mono tracking-widest uppercase">
            Founder, HeywoodDev
          </p>
        </div>

        {/* Right Column: About Info */}
        <div className="flex-grow">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-slate mb-8">
            Business perspective. <span className="text-baby-blue">Technical follow-through.</span>
          </h1>
          
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              I&apos;m Carlton Heywood, founder of HeywoodDev in Payson, Utah. I hold a BS in Business Management and an MS in IT Management, and bring hands-on full-stack development experience to projects for local businesses, clinics, and service providers.
            </p>
            <p>
              That combination helps me look beyond the website itself. I consider how your business serves customers, where time gets lost, what information needs protection, and whether a tool&apos;s likely return on investment justifies its cost, upkeep, and risk.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 space-y-6 text-lg text-slate-600 leading-relaxed">
        <h2 className="sr-only">How I work</h2>
        <p>
          I start by listening to how your operation works and what your customers need. Then I recommend the simplest dependable approach—including existing services when they are a better fit than building something new. For payments or sensitive client workflows, I favor careful handoffs to appropriate specialist providers rather than adding a custom database and another system for you to maintain.
        </p>
      </div>

      <div className="pt-6 mt-8 border-t border-slate-100 text-center">
        <h2 className="text-base italic text-slate-500 font-normal">
          Based in Payson, Utah. Here to help local businesses across the state.
        </h2>
      </div>

      <div className="mt-12">
        <WhyApproach />
      </div>
    </div>
  );
}