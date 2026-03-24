export default function ServicesPage() {
  const services = [
    {
      title: "Full-Stack Web Development",
      description: "Custom, high-performance applications built with Next.js, React, and Node.js. Focused on SEO, speed, and clean architecture.",
      features: ["Responsive Design", "API Integration", "Performance Optimization"]
    },
    {
      title: "Backend & Data Solutions",
      description: "Robust server-side logic using Python and SQL. I build the 'brains' of your application to handle complex data and scaling.",
      features: ["Database Design", "Automation Scripts", "Secure Authentication"]
    },
    {
      title: "IT Management & Strategy",
      description: "Professional oversight of your digital infrastructure. From cloud deployments to long-term technical roadmaps.",
      features: ["Cloud Hosting (Vercel/Cloudflare)", "Security Audits", "Legacy System Migration"]
    }
  ];

  return (
    <div className="section-padding">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-dark-slate mb-6">
          Technical <span className="text-baby-blue">Expertise.</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Providing end-to-end digital solutions for businesses that demand 
          reliability and modern performance.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <div 
            key={i} 
            className="group p-8 bg-white border border-slate-100 rounded-2xl hover:border-baby-blue/50 hover:shadow-xl transition-all duration-300"
          >
            <div className="w-12 h-12 bg-off-white rounded-lg flex items-center justify-center mb-6 group-hover:bg-baby-blue/10 transition-colors">
              <div className="w-6 h-6 bg-baby-blue rounded-full opacity-60" />
            </div>
            <h3 className="text-2xl font-bold text-dark-slate mb-4">{service.title}</h3>
            <p className="text-slate-500 mb-6 leading-relaxed">
              {service.description}
            </p>
            <ul className="space-y-3">
              {service.features.map((feature, j) => (
                <li key={j} className="flex items-center text-sm text-slate-700">
                  <span className="text-baby-blue mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="mt-20 bg-dark-slate rounded-3xl p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Have a unique technical challenge?</h2>
        <p className="text-slate-300 mb-8 max-w-xl mx-auto">
          I specialize in custom integrations and solving complex workflow problems. 
          We should talk about how we can streamline your business.
        </p>
        <a href="https://calendly.com/cjwood1/30min" className="btn-primary inline-block">
          Start Your Project
        </a>
      </div>
    </div>
  );
}