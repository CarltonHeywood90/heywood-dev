import type { Metadata } from 'next';
import Link from 'next/link';
import ProjectGrid from './components/ProjectGrid'; // Adjust path if needed

export const metadata: Metadata = {
  title: 'Business-First Websites for Utah Small Businesses | HeywoodDev',
  description: 'Fast, low-maintenance websites for local businesses, clinics, and service providers—planned around your operations, customers, and security needs.',
  keywords: [
    'Small Business Websites Utah',
    'Clinic Website Design Utah',
    'Service Business Websites',
    'Website Scheduling and Payments',
    'Payson Utah Web Consultant',
  ],
  openGraph: {
    title: 'Business-First Websites for Utah Businesses | HeywoodDev',
    description: 'Practical, secure, low-maintenance websites for local businesses, clinics, and service providers.',
    type: 'website',
  },
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Heywood Dev',
    url: 'https://heywooddev.com',
    description: 'Business-first website planning and development for small businesses, clinics, and service providers in Payson and across Utah.',
    knowsAbout: ['Business Management', 'IT Management', 'Website Design', 'Business Operations'],
    sameAs: [
      'https://github.com/CarltonHeywood90',
    ],
  };

  return (
    <div className="space-y-20 pb-20">
      {/* Structured Data Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-off-white py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <span className="text-baby-blue font-bold tracking-widest uppercase text-sm mb-4">
            Practical websites for local businesses
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-dark-slate leading-tight mb-6">
            A better website. <br />
            <span className="text-baby-blue">Built around your business.</span>
          </h1>
          <p className="max-w-2xl text-slate-600 text-lg md:text-xl mb-10 leading-relaxed">
            I help Utah small businesses, clinics, and service providers make their website a dependable business asset: fast for customers, simple to maintain, and connected to trusted tools for scheduling and payments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="https://calendly.com/cjwood1/new-meeting" className="bg-baby-blue text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-baby-blue/90 transition-all shadow-lg shadow-baby-blue/20">
              Talk Through Your Business Needs
            </Link>
            <Link href="/site/services" className="px-8 py-4 border-2 border-baby-blue text-baby-blue font-medium rounded-lg hover:bg-baby-blue/10 transition-all">
              See How I Can Help
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-white border border-baby-blue/20 rounded-2xl p-8 shadow-sm">
          <h2 className="text-center text-slate-500 text-sm font-medium mb-6 uppercase tracking-wider">
            Business understanding, backed by technical experience
          </h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <span className="text-lg font-bold text-dark-slate">BS in Business Management</span>
            <span className="text-lg font-bold text-dark-slate">MS in IT Management</span>
            <span className="text-lg font-bold text-dark-slate">Hands-on full-stack experience</span>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-dark-slate mb-8 text-center">
          Technology that makes business sense
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Start with the way you work", desc: "We begin with your goals, daily operations, and customer needs. Every recommendation should solve a real problem or reduce avoidable work." },
            { title: "Keep it lean and easy to manage", desc: "You get a fast, modern website without unnecessary features or a complicated custom system your team has to maintain." },
            { title: "Use trusted tools for sensitive tasks", desc: "Scheduling and payments stay with established providers built for those jobs, reducing the sensitive information your business has to store and secure." }
          ].map((feature, i) => (
            <div key={i} className="p-8 border border-slate-100 rounded-xl hover:shadow-md transition-shadow bg-white">
              <h3 className="text-xl font-bold text-dark-slate mb-3">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-baby-blue/5 border border-baby-blue/10 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold text-dark-slate mb-4">Less to maintain. More room to focus.</h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Most local businesses do not need a complicated web system behind their website. I choose a simple, fast foundation and add only what supports your business—so there is less to maintain and fewer moving parts to worry about.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark-slate mb-4">
            Built for real <span className="text-baby-blue">service businesses</span>
          </h2>
          <div className="h-1 w-20 bg-baby-blue rounded-full mb-6"></div>
          <p className="text-slate-500 max-w-2xl">
            See how a thoughtful website can make it easier for customers to understand your services and take the next step.
          </p>
        </div>
        <ProjectGrid />
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="bg-dark-slate rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Make your website work harder for your business.</h2>
          <p className="text-slate-300 mb-10 max-w-xl mx-auto">
            Let&apos;s talk about what your business needs, what is getting in the way, and a practical next step. No unnecessary systems or high-pressure pitch.
          </p>
          <Link href="https://calendly.com/cjwood1/new-meeting" className="inline-block bg-baby-blue hover:bg-baby-blue/90 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105">
            Schedule a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}