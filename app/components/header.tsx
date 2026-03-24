// app/components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-[#F8F9FA] border-b border-[#A2D2FF]/30 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[#334155]">
          Heywood<span className="text-[#A2D2FF]">Dev</span>
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="/site/about" className="hover:text-[#A2D2FF] transition-colors">About</Link>
          <Link href="/site/services" className="hover:text-[#A2D2FF] transition-colors">Services</Link>
          <Link href="/site/contact" className="hover:text-[#A2D2FF] transition-colors">Contact</Link>
          <Link 
            href="https://calendly.com/cjwood1/30min" 
            className="bg-[#A2D2FF] text-white px-5 py-2.5 rounded-lg hover:bg-[#89C2F1] transition-all shadow-sm"
          >
            Book Consultation
          </Link>
        </div>
      </nav>
    </header>
  );
}