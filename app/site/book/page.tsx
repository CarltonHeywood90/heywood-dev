import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Talk About Your Business Website | HeywoodDev',
  description: 'Arrange a straightforward conversation about your business goals, customers, and what you need from your website.',
  openGraph: {
    title: 'Talk About Your Website | HeywoodDev',
    description: 'A practical conversation about your business goals and website needs.',
    type: 'website',
  },
  alternates: {
    canonical: '/site/book',
  },
};

export default function BookPage() {
  return (
    <div className="section-padding min-h-[70vh] flex flex-col items-center justify-center text-center">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-dark-slate mb-6">
          Let&apos;s talk about <span className="text-baby-blue">what your business needs.</span>
        </h1>
        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
          We can talk through your goals, how your business currently works, and where a better website or the right existing service could help. No technical background or polished project plan required.
        </p>
        
        {/* Placeholder for a booking widget or simple call to action */}
        <div className="bg-white p-12 border-2 border-dashed border-baby-blue/30 rounded-3xl flex flex-col items-center">
          <p className="text-slate-500 mb-6">Email me and we&apos;ll find a time to talk.</p>
          <a 
            href="mailto:carlton@heywooddev.com" 
            className="btn-primary text-lg"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </div>
  );
}