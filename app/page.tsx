import Link from 'next/link';
import ProjectGrid from './components/ProjectGrid'; // Adjust path if needed

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      {/* 1. HERO SECTION */}
      <section className="bg-off-white py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <span className="text-baby-blue font-bold tracking-widest uppercase text-sm mb-4">
            Custom Web Solutions
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-dark-slate leading-tight mb-6">
            Building the Future of the <br />
            <span className="text-baby-blue">Modern Web.</span>
          </h1>
          <p className="max-w-2xl text-slate-600 text-lg md:text-xl mb-10 leading-relaxed">
            From high-performance Next.js interfaces to robust Python backends, 
            I build scalable digital infrastructure for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="https://calendly.com/cjwood1/new-meeting" className="bg-baby-blue text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-baby-blue/90 transition-all shadow-lg shadow-baby-blue/20">
              Book a Consultation
            </Link>
            <Link href="/site/services" className="px-8 py-4 border-2 border-baby-blue text-baby-blue font-medium rounded-lg hover:bg-baby-blue/10 transition-all">
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* 2. TECH STACK STRIP */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-white border border-baby-blue/20 rounded-2xl p-8 shadow-sm">
          <p className="text-center text-slate-400 text-sm font-medium mb-6 uppercase tracking-wider">
            Expertise in Modern Technologies
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 grayscale opacity-70">
            <span className="text-xl font-bold text-dark-slate underline decoration-baby-blue decoration-2 underline-offset-4">Next.js</span>
            <span className="text-xl font-bold text-dark-slate underline decoration-baby-blue decoration-2 underline-offset-4">Python</span>
            <span className="text-xl font-bold text-dark-slate underline decoration-baby-blue decoration-2 underline-offset-4">FastAPI</span>
            <span className="text-xl font-bold text-dark-slate underline decoration-baby-blue decoration-2 underline-offset-4">React</span>
            <span className="text-xl font-bold text-dark-slate underline decoration-baby-blue decoration-2 underline-offset-4">SQL</span>
          </div>
        </div>
      </section>

      {/* 3. QUICK FEATURES */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {[
          { title: "Full-Stack Development", desc: "End-to-end applications built with security and scalability at the core." },
          { title: "IT Management", desc: "Expert oversight of your digital infrastructure and cloud deployments." },
          { title: "Fast Deployment", desc: "Optimized workflows using GitHub and Cloudflare for near-instant updates." }
        ].map((feature, i) => (
          <div key={i} className="p-8 border border-slate-100 rounded-xl hover:shadow-md transition-shadow bg-white">
            <h3 className="text-xl font-bold text-dark-slate mb-3">{feature.title}</h3>
            <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* 4. PORTFOLIO GRID SECTION (The New Addition) */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark-slate mb-4">
            Project <span className="text-baby-blue">Showcase</span>
          </h2>
          <div className="h-1 w-20 bg-baby-blue rounded-full mb-6"></div>
          <p className="text-slate-500 max-w-2xl">
            A selection of custom builds ranging from professional websites to 
            SaaS prototypes and interactive web tools.
          </p>
        </div>
        <ProjectGrid />
      </section>

      {/* 5. FINAL CTA SECTION */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="bg-dark-slate rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Scale Your Infrastructure?</h2>
          <p className="text-slate-300 mb-10 max-w-xl mx-auto">
            We should discuss how we can modernize your web presence and streamline your backend workflows.
          </p>
          <Link href="https://calendly.com/cjwood1/new-meeting" className="inline-block bg-baby-blue hover:bg-baby-blue/90 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105">
            Book My 15-Min Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}