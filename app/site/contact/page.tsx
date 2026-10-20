import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact a Web Developer in Payson, Utah',
  description: 'Contact Heywood Dev about custom web development, Next.js applications, or API integration for your business in Utah.',
  openGraph: {
    title: 'Contact Heywood Dev | Payson, Utah Web Developer',
    description: 'Discuss custom website development and API integration for your Utah business.',
    type: 'website',
  },
};

export default function ContactPage() {
  const hours = [
    { day: "Monday - Friday", time: "10:00 AM - 3:00 PM" },
    { day: "Saturday", time: "Closed" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <div className="section-padding">
      <div className="grid md:grid-cols-2 gap-16">
        {/* Left Side: Contact Info */}
        <div>
          <h1 className="text-4xl font-bold text-dark-slate mb-6">Contact a Web Developer in Payson, Utah</h1>
          <p className="text-slate-600 mb-8">
            Tell me about your custom website, Next.js application, or third-party API integration project. Heywood Dev works with small businesses and clients in Payson and across Utah.
          </p>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-dark-slate">Email</h3>
              <p className="text-baby-blue">carlton@heywooddev.com</p>
            </div>
            <div>
              <h3 className="font-bold text-dark-slate">Location</h3>
              <p className="text-slate-600">Payson, Utah (Available Globally)</p>
            </div>
          </div>
        </div>

        {/* Right Side: Hours & Availability */}
        <div className="bg-off-white p-8 rounded-2xl border border-baby-blue/20">
          <h2 className="text-2xl font-bold text-dark-slate mb-6">Business Hours</h2>
          <div className="space-y-4">
            {hours.map((item, i) => (
              <div key={i} className="flex justify-between border-b border-slate-200 pb-2">
                <span className="font-medium text-slate-700">{item.day}</span>
                <span className="text-slate-500">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}