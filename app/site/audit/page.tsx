import Link from 'next/link';
import ProjectGrid from '../../components/ProjectGrid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js Web Development & API Integration in Utah',
  description: 'Get custom Next.js web applications, performance improvements, and third-party API integration from a Payson, Utah developer serving businesses statewide.',
  openGraph: {
    title: 'Next.js Web Development & API Integration | Heywood Dev',
    description: 'Custom web applications and technical solutions for small businesses across Utah.',
    type: 'website',
  },
  alternates: {
    canonical: '/site/audit',
  },
};

export default function AuditPage() {
  return (
    <div className="space-y-20 pb-20 bg-white">
      {/* 1. HERO SECTION - Conversion Focused */}
      <section className="bg-off-white py-20 md:py-32 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <span className="text-baby-blue font-bold tracking-widest uppercase text-sm mb-4">
            Performance-First Development
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-dark-slate leading-tight mb-6">
            Custom Web Development <br />
            <span className="text-baby-blue text-4xl md:text-6xl text-nowrap">for Businesses Across Utah.</span>
          </h1>
          <p className="max-w-2xl text-slate-600 text-lg md:text-xl mb-10 leading-relaxed">
            Heywood Dev builds fast, secure Next.js websites and web applications, with third-party API integration for small businesses in Payson and across Utah.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="https://calendly.com/cjwood1/new-meeting" 
              className="bg-baby-blue text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-baby-blue/90 transition-all shadow-lg shadow-baby-blue/20"
            >
              Book a 15-Min Technical Audit
            </Link>
          </div>
        </div>
      </section>

      {/* 2. TECH STACK STRIP - Social Proof */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-white border border-baby-blue/20 rounded-2xl p-8 shadow-sm">
          <p className="text-center text-slate-400 text-sm font-medium mb-6 uppercase tracking-wider">
            Built with the Modern Stack
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 grayscale opacity-70">
            <span className="text-xl font-bold text-dark-slate underline decoration-baby-blue decoration-2 underline-offset-4">Next.js</span>
            <span className="text-xl font-bold text-dark-slate underline decoration-baby-blue decoration-2 underline-offset-4">React</span>
            <span className="text-xl font-bold text-dark-slate underline decoration-baby-blue decoration-2 underline-offset-4">TypeScript</span>
            <span className="text-xl font-bold text-dark-slate underline decoration-baby-blue decoration-2 underline-offset-4">Supabase</span>
            <span className="text-xl font-bold text-dark-slate underline decoration-baby-blue decoration-2 underline-offset-4">Tailwind</span>
          </div>
        </div>
      </section>

      {/* 3. VALUE PROPS - What they get */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {[
          { title: "Custom Web Solutions", desc: "Lightweight, SEO-optimized frontends that load instantly and convert visitors." },
          { title: "Infrastructure Setup", desc: "Serverless deployments and database architecture that grow with your user base." },
          { title: "Rapid Turnaround", desc: "Direct access to the developer. No middleman, no delays—just functioning code." }
        ].map((feature, i) => (
          <div key={i} className="p-8 border border-slate-100 rounded-xl hover:shadow-md transition-shadow bg-white">
            <div className="w-10 h-1 bg-baby-blue mb-4"></div>
            <h3 className="text-xl font-bold text-dark-slate mb-3">{feature.title}</h3>
            <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* 4. PORTFOLIO GRID SECTION - The Proof */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark-slate mb-4">
            Recent <span className="text-baby-blue">Work</span>
          </h2>
          <p className="text-slate-500 max-w-2xl">
            A selection of custom builds including professional service sites, 
            technical portfolios, and full-stack application prototypes.
          </p>
        </div>
        <ProjectGrid />
      </section>

      {/* 5. FINAL CTA SECTION - The Close */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="bg-dark-slate rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">We should solve your technical debt.</h2>
          <p className="text-slate-300 mb-10 max-w-xl mx-auto">
            No high-pressure sales pitch. Just a 15-minute dive into your current site performance and a roadmap to modernize it.
          </p>
          <Link 
            href="https://calendly.com/cjwood1/new-meeting" 
            className="inline-block bg-baby-blue hover:bg-baby-blue/90 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105"
          >
            Schedule Your Free 15-Min Audit
          </Link>
        </div>
      </section>
    </div>
  );
}