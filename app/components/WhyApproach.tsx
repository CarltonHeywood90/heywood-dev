import React from 'react';

interface ApproachCardProps {
  title: string;
  description: string;
}

const ApproachCard: React.FC<ApproachCardProps> = ({ title, description }) => (
  <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
    <h3 className="text-xl font-bold text-dark-slate mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

export default function WhyApproach() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-dark-slate mb-8 text-center">
        Why My Approach Works
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <ApproachCard 
          title="Zero-Bloat Performance" 
          description="By prioritizing static-first architecture, your site stays lightning-fast and secure, regardless of traffic spikes."
        />
        <ApproachCard 
          title="Integration-First Strategy" 
          description="I don't reinvent the wheel. I connect your site to the industry-leading tools (Stripe, Calendly, Square, etc.) that your business already relies on, ensuring a seamless, automated workflow."
        />
      </div>
    </section>
  );
}