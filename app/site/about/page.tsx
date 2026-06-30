import Image from 'next/image';
import WhyApproach from '@/app/components/WhyApproach';

export default function AboutPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12 lg:gap-20">
        
        {/* Left Column: Image */}
        <div className="w-full max-w-[320px] shrink-0">
          <div className="relative aspect-square overflow-hidden rounded-2xl border-4 border-baby-blue shadow-lg">
            <Image
              src="/images/carlton.jpg" 
              alt="Carlton Heywood"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="mt-4 text-center text-xs text-slate-400 font-mono tracking-widest uppercase">
            Founder // Heywood Dev
          </p>
        </div>

        {/* Right Column: About Info */}
        <div className="flex-grow">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-slate mb-8">
            About <span className="text-baby-blue">Heywood Dev</span>
          </h1>
          
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
            Led by a specialist in IT Management and modern web architecture, Heywood Dev focuses on building high-performance digital solutions that connect your business to the tools you need to scale.
            </p>
            <p>
            I bridge the gap between clean, intuitive design and reliable third-party integration. Rather than building heavy, complex, and high-maintenance backends, I leverage modern, static-first frameworks to create websites that are incredibly fast, inherently secure, and cost-effective to host.
            </p>
          </div>
        </div>
      </div>
      <p className="text-justified mt-10 space-y-6 text-lg text-slate-600 leading-relaxed">
      With a background rooted in meticulous trade work and professional project management, I approach every project with a "built-to-last" mindset. Whether it is a high-converting interface in Next.js or integrating advanced scheduling and automation workflows, the goal is always the same: efficiency, reliability, and speed.
      </p>
      <p className="pt-4 border-t border-slate-100 italic text-center">
      Based in Payson, Utah. Serving clients worldwide.
      </p>
      <div className="mt-10">
          <WhyApproach />
      </div>
    </div>
  );
}