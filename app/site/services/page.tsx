import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website Services for Small Businesses in Utah',
  description: 'Business-first websites, trusted scheduling and payment connections, and practical ongoing support for Utah small businesses, clinics, and service providers.',
  keywords: [
    'Small Business Website Services Utah',
    'Clinic Website Design',
    'Business Website Maintenance',
    'Online Scheduling Setup',
    'Secure Online Payments',
  ],
  openGraph: {
    title: 'Practical Website Services for Utah Businesses | HeywoodDev',
    description: 'Lean websites and trusted tools that support the way local businesses operate.',
    type: 'website',
  },
  alternates: {
    canonical: '/site/services',
  },
};

export default function ServicesPage() {
  const services = [
    {
      title: "A website built around your business",
      description: "A clear, fast website that helps customers understand your services and contact or book with you. We shape the site around your goals and your customers—not a one-size-fits-all template.",
      features: ["Works across phones and computers", "Clear paths to contact or book", "Designed to be easy to maintain"]
    },
    {
      title: "Scheduling and payments with trusted providers",
      description: "Connect your website to specialist providers—such as a scheduler with an appropriate HIPAA-compliant offering or a PCI-compliant payment gateway—instead of building a custom database to store patient or card details. The provider, plan, configuration, and your business practices still require review; this handoff can reduce exposure and maintenance, but does not by itself make your business compliant.",
      features: ["Booking tools that fit your practice", "Payment details handled by payment providers", "Fewer custom systems to secure and maintain"]
    },
    {
      title: "Ongoing care and practical guidance",
      description: "Get help keeping your website dependable and up to date, along with straightforward advice on what to improve, what to leave alone, and where a change can save time or reduce risk.",
      features: ["Routine updates and checks", "Clear, actionable recommendations", "Support that fits your business"]
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    provider: {
      '@type': 'ProfessionalService',
      name: 'Heywood Dev',
      url: 'https://heywooddev.com',
    },
    serviceType: 'Business Website Planning and Development',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Website Services',
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

      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-dark-slate mb-6">
          Websites that support the way <span className="text-baby-blue">your business works.</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Based in Payson, I work with small businesses, clinics, and service providers across Utah to make their online presence clearer, simpler to manage, and useful to customers.
        </p>
      </div>

      {/* Services Grid */}
      <section>
        <h2 className="sr-only">Ways I can help</h2>
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

      <section className="mt-20 bg-dark-slate rounded-3xl p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Let&apos;s find the right next step.</h2>
        <p className="text-slate-300 mb-8 max-w-xl mx-auto">
          Tell me how your business works today and what you would like to improve. I&apos;ll help you sort through the options and focus on what will make a practical difference.
        </p>
        <a 
          href="https://calendly.com/cjwood1/new-meeting" 
          className="btn-primary inline-block bg-baby-blue hover:bg-baby-blue/90 text-white font-bold py-4 px-8 rounded-lg transition-all"
        >
          Talk About Your Business
        </a>
      </section>
    </div>
  );
}