// app/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#F8F9FA] border-t border-[#A2D2FF]/20 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-lg font-bold mb-4 text-[#334155]">Heywood Dev</h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            Building high-performance web applications with a focus on speed, 
            scalability, and clean code.
          </p>
          <p><Link href="/privacy" className="hover:text-[#A2D2FF]">Privacy Policy</Link></p>
          <p><Link href="/terms" className="hover:text-[#A2D2FF]">Terms of Service</Link></p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4 text-slate-700">Quick Links</h4>
          <ul className="space-y-2 text-sm text-slate-500">
            <li><Link href="/site/services" className="hover:text-[#A2D2FF]">Our Services</Link></li>
            <li><Link href="/site/contact" className="hover:text-[#A2D2FF]">Contact & Hours</Link></li>
            <li><Link href="https://calendly.com/cjwood1/30min" className="hover:text-[#A2D2FF]">Book Me</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-slate-700">Location</h4>
          <p className="text-sm text-slate-500">Based in Utah</p>
          <p className="text-sm text-slate-500 mt-2">Available for remote projects worldwide.</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-200 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Heywood Dev. All rights reserved.
      </div>
    </footer>
  );
}