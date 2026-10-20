import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Web Development Consultation',
  description: 'Schedule a conversation with Heywood Dev about custom web development, Next.js applications, and API integration for your Utah business.',
  openGraph: {
    title: 'Book a Web Development Consultation | Heywood Dev',
    description: 'Discuss your custom web application or integration project with a Payson, Utah developer.',
    type: 'website',
  },
};

export default function BookPage() {
  return (
    <div className="section-padding min-h-[70vh] flex flex-col items-center justify-center text-center">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-dark-slate mb-6">
          Book a <span className="text-baby-blue">Web Development Consultation</span>
        </h1>
        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
          Planning a website, Next.js application, or API integration? Let’s discuss your goals, technical needs, and timeline. Heywood Dev is based in Payson and works with clients across Utah.
        </p>
        
        {/* Placeholder for a booking widget or simple call to action */}
        <div className="bg-white p-12 border-2 border-dashed border-baby-blue/30 rounded-3xl flex flex-col items-center">
          <p className="text-slate-400 mb-6 italic">Email to arrange a time to talk about your project.</p>
          <a 
            href="mailto:carlton@heywooddev.com" 
            className="btn-primary text-lg"
          >
            Email to Schedule
          </a>
        </div>
      </div>
    </div>
  );
}