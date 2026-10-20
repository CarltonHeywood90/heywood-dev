import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Development & API Integration in Utah',
  description: 'Custom website development, Next.js applications, third-party API integrations, and ongoing technical support for businesses in Payson and across Utah.',
  keywords: [
    'Web Development Services',
    'Third-Party API Integration',
    'Custom Web Interfaces',
    'Digital Infrastructure Maintenance',
    'Vercel Cloud Deployment',
    'Next.js Web Services',
  ],
  openGraph: {
    title: 'Web Development & API Integration in Utah | Heywood Dev',
    description: 'Custom Next.js websites and API integrations for Payson and Utah businesses.',
    type: 'website',
  },
};

export default function ServicesPage() {
  const services = [
    {
      title: "Custom Website & Next.js Development",
      description: "I design and develop responsive, high-performance websites and Next.js web applications for small businesses in Payson and across Utah. Every build is optimized for speed, accessibility, and maintainability.",
      features: ["Responsive Design", "Modern Tech Stack", "Performance Optimization"]
    },
    {
      title: "Third-Party API Integration",
      description: "Connect your website to the tools your business already relies on, including payment processors, scheduling platforms, CRMs, and email automation. API integrations bring those services together without adding an unnecessary custom backend.",
      features: ["Seamless 3rd-Party Connectivity", "Workflow Automation", "Form & Data Collection Handling"]
    },
    {
      title: "Web Application Support & Maintenance",
      description: "Keep your web applications dependable with secure cloud deployments, performance checks, maintenance, and practical technical guidance for your business.",
      features: ["Cloud Hosting (Vercel/Cloudflare)", "Security Audits", "Legacy System Migration"]
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    provider: {
      '@type': 'ProfessionalService',
      name: 'Heywood Dev',
      url: 'https://heywood.dev',
    },
    serviceType: 'Custom Web Development and API Integration',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Development Services',
      itemListElement: services.map((service, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
        },
        position: index + 1,
      })),
    },
  };

  return (
    <div className="section-padding">
      {/* Structured Data Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-dark-slate mb-6">
          Custom Web Development & <span className="text-baby-blue">API Integration in Utah.</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Based in Payson, Utah, Heywood Dev builds custom websites and Next.js applications for small businesses, with third-party API integration that connects the tools they already use.
        </p>
      </div>

      {/* Services Grid */}
      <section>
        <h2 className="sr-only">Our Services Overview</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="group p-8 bg-white border border-slate-100 rounded-2xl hover:border-baby-blue/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-off-white rounded-lg flex items-center justify-center mb-6 group-hover:bg-baby-blue/10 transition-colors">
                  <div className="w-6 h-6 bg-baby-blue rounded-full opacity-60" />
                </div>
                <h2 className="text-2xl font-bold text-dark-slate mb-4">{service.title}</h2>
                <p className="text-slate-500 mb-6 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <ul className="space-y-3 pt-4 border-t border-slate-50">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center text-sm text-slate-700">
                    <span className="text-baby-blue mr-2 font-bold">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="mt-20 bg-dark-slate rounded-3xl p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to streamline your online presence?</h2>
        <p className="text-slate-300 mb-8 max-w-xl mx-auto">
          I specialize in solving complex integration problems through simple, elegant solutions. Let&apos;s discuss how we can modernize your site and automate your workflow.
        </p>
        <a 
          href="https://calendly.com/cjwood1/new-meeting" 
          className="btn-primary inline-block bg-baby-blue hover:bg-baby-blue/90 text-white font-bold py-4 px-8 rounded-lg transition-all"
        >
          Start Your Project
        </a>
      </section>
    </div>
  );
}