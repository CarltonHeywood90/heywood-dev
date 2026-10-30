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
        Practical by design
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        <ApproachCard 
          title="Business-first decisions"
          description="Recommendations start with your goals, day-to-day work, customer experience, and risk—not with a technology looking for a problem."
        />
        <ApproachCard 
          title="Lean, low-maintenance websites"
          description="A fast, straightforward website without unnecessary features or a custom system your team has to keep running."
        />
        <ApproachCard
          title="Safer handoffs"
          description="Established payment and scheduling providers can handle sensitive workflows, helping avoid the added exposure and upkeep of storing that information yourself."
        />
      </div>
    </section>
  );
}