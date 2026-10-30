import Link from 'next/link';
import ProjectGrid from '../../components/ProjectGrid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Website Review for Utah Small Businesses | HeywoodDev',
  description: 'Get a straightforward 15-minute review of your business website, with practical ideas to improve customer experience, simplify operations, and reduce unnecessary upkeep.',
  openGraph: {
    title: 'Free Website Review | HeywoodDev',
    description: 'A practical conversation about making your business website clearer, safer, and easier to manage.',
    type: 'website',
  },
  alternates: {
    canonical: '/site/audit',
  },
};

export default function AuditPage() {
  return (
    <div className="space-y-20 pb-20 bg-white">
      <section className="bg-off-white py-20 md:py-32 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <span className="text-baby-blue font-bold tracking-widest uppercase text-sm mb-4">
            A practical 15-minute website review
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-dark-slate leading-tight mb-6">
            Is your website helping <br />
            <span className="text-baby-blue text-4xl md:text-6xl">your business move forward?</span>
          </h1>
          <p className="max-w-2xl text-slate-600 text-lg md:text-xl mb-10 leading-relaxed">
            We&apos;ll look at your site from a business owner&apos;s point of view: what customers see, how people take the next step, and whether your setup is more complicated than it needs to be.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="https://calendly.com/cjwood1/new-meeting" 
              className="bg-baby-blue text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-baby-blue/90 transition-all shadow-lg shadow-baby-blue/20"
            >
              Schedule Your Free Website Review
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-white border border-baby-blue/20 rounded-2xl p-8 shadow-sm">
          <p className="text-center text-slate-500 text-sm font-medium mb-6 uppercase tracking-wider">
            A clear conversation, focused on your business
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
            <span className="text-lg font-bold text-dark-slate">No technical background needed</span>
            <span className="text-lg font-bold text-dark-slate">Practical recommendations</span>
            <span className="text-lg font-bold text-dark-slate">No pressure to rebuild</span>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {[
          { title: "See what customers see", desc: "Find confusing pages, missing details, or unclear next steps that may be making it harder for customers to choose you." },
          { title: "Spot unnecessary complexity", desc: "Review whether your website relies on tools or ongoing upkeep that your business may not need." },
          { title: "Leave with a useful next step", desc: "Get a clear, plain-language recommendation—not a list of technical work you did not ask for." }
        ].map((feature, i) => (
          <div key={i} className="p-8 border border-slate-100 rounded-xl hover:shadow-md transition-shadow bg-white">
            <div className="w-10 h-1 bg-baby-blue mb-4"></div>
            <h3 className="text-xl font-bold text-dark-slate mb-3">{feature.title}</h3>
            <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark-slate mb-4">
            Work for <span className="text-baby-blue">service businesses</span>
          </h2>
          <p className="text-slate-500 max-w-2xl">
            Examples of website improvements for businesses that serve people in their local communities.
          </p>
        </div>
        <ProjectGrid />
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="bg-dark-slate rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get a clearer view of your website.</h2>
          <p className="text-slate-300 mb-10 max-w-xl mx-auto">
            Bring your questions and business goals. In 15 minutes, we can identify what is working, what could be simpler, and whether any change is worth making.
          </p>
          <Link 
            href="https://calendly.com/cjwood1/new-meeting" 
            className="inline-block bg-baby-blue hover:bg-baby-blue/90 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105"
          >
            Schedule Your Free 15-Minute Review
          </Link>
        </div>
      </section>
    </div>
  );
}