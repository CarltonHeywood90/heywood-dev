export default function BookPage() {
  return (
    <div className="section-padding min-h-[70vh] flex flex-col items-center justify-center text-center">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-dark-slate mb-6">
          Book Me <span className="text-baby-blue">Exceptional.</span>
        </h1>
        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
          Ready to discuss your next project? Book a free 30-minute 
          technical strategy session to go over your goals, tech stack, and timeline.
        </p>
        
        {/* Placeholder for a booking widget or simple call to action */}
        <div className="bg-white p-12 border-2 border-dashed border-baby-blue/30 rounded-3xl flex flex-col items-center">
          <p className="text-slate-400 mb-6 italic">Calendar Integration Coming Soon</p>
          <a 
            href="mailto:your-email@heywood.dev" 
            className="btn-primary text-lg"
          >
            Email to Schedule
          </a>
        </div>
      </div>
    </div>
  );
}