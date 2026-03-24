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
    <header className="bg-[#F8F9FA]/80 backdrop-blur-md border-b border-[#A2D2FF]/30 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-2xl font-bold text-[#334155] hover:opacity-90 transition-opacity"
        >
          Heywood<span className="text-[#A2D2FF]">Dev</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className="hover:text-[#A2D2FF] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="https://calendly.com/cjwood1/30min" 
            className="bg-[#A2D2FF] text-white px-5 py-2.5 rounded-lg hover:bg-[#89C2F1] transition-all shadow-sm font-semibold"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden text-[#334155] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#F8F9FA] border-b border-[#A2D2FF]/20 shadow-xl animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col p-6 gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold text-[#334155] active:text-[#A2D2FF]"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="https://calendly.com/cjwood1/30min" 
              onClick={() => setIsOpen(false)}
              className="bg-[#A2D2FF] text-white text-center py-4 rounded-xl font-bold shadow-md"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}