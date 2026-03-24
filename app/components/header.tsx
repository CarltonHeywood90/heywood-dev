"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "/site/about" },
    { name: "Services", href: "/site/services" },
    { name: "Contact", href: "/site/contact" },
  ];

  return (
    <header className="bg-[#F8F9FA]/90 backdrop-blur-md border-b border-[#A2D2FF]/30 sticky top-0 z-50 h-20">
      <nav className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-[#334155]">
          Heywood<span className="text-[#A2D2FF]">Dev</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-[#A2D2FF] transition-colors">
              {link.name}
            </Link>
          ))}
          <Link
            href="https://calendly.com/cjwood1/30min"
            target="_blank"
            className="bg-[#A2D2FF] text-white px-5 py-2.5 rounded-lg font-bold"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden p-2 text-[#334155]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#F8F9FA] border-b border-[#A2D2FF]/20 shadow-xl z-50">
          <div className="flex flex-col p-6 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold text-[#334155]"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}