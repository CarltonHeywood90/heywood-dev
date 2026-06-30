export default function ServicesPage() {
  const services = [
    {
      title: "Professional Web Interfaces",
      description: "I design and develop responsive, high-performance websites optimized for speed and accessibility. I build clean, maintainable, and modern interfaces that ensure your brand looks professional on any device.",
      features: ["Responsive Design", "Modern Tech Stack", "Performance Optimization"]
    },
    {
      title: "Third-Party Integration Specialist",
      description: "You don't need a custom, high-maintenance backend to have a powerful website. I connect your site to the best-in-class tools you already use—whether it's payment processors, scheduling platforms, CRMs, or email automation—ensuring your digital ecosystem works as a unified whole.",
      features: ["Seamless 3rd-Party Connectivity", "Workflow Automation", "Form & Data Collection Handling"]
    },
    {
      title: "Digital Infrastructure & Maintenance",
      description: "I provide professional oversight of your digital infrastructure so you don't have to worry about the technical details. From secure, lightning-fast cloud deployments to long-term technical guidance.",
      features: ["Cloud Hosting (Vercel/Cloudflare)", "Security Audits", "Legacy System Migration"]
    }
  ];

  return (
    <div className="section-padding">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-dark-slate mb-6">
        Streamlined <span className="text-baby-blue">Web Solutions.</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        I specialize in building high-performance, static-first websites that integrate seamlessly with the digital tools your business already relies on.
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
        <h2 className="text-3xl font-bold mb-4">Ready to streamline your online presence?</h2>
        <p className="text-slate-300 mb-8 max-w-xl mx-auto">
        I specialize in solving complex integration problems through simple, elegant solutions. Let's discuss how we can modernize your site and automate your workflow.
        </p>
        <a href="https://calendly.com/cjwood1/new-meeting" className="btn-primary inline-block">
          Start Your Project
        </a>
      </div>
    </div>
  );
}