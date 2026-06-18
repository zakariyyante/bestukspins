"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-xl border-b border-slate-800">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-48 h-12 md:w-64 md:h-16">
            <Image 
              src="/logo.png" 
              alt="Best UK Spins" 
              fill 
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          <Link href="/" className="text-sm font-bold uppercase tracking-widest hover:text-cyan-400 transition-colors">Home</Link>
          <Link href="/disclosure" className="text-sm font-bold uppercase tracking-widest hover:text-cyan-400 transition-colors">Disclosure</Link>
          <Link href="/guide" className="text-sm font-bold uppercase tracking-widest hover:text-cyan-400 transition-colors">Guide</Link>
          <Link href="/about" className="text-sm font-bold uppercase tracking-widest hover:text-cyan-400 transition-colors">About</Link>
          <Link href="/contact" className="px-6 py-2.5 rounded-full border border-cyan-500/30 text-xs font-black uppercase tracking-widest hover:bg-cyan-500/10 transition-all">Contact</Link>
        </nav>

        {/* Mobile Hamburger */}
        <button 
          className="lg:hidden p-2 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-cyan-400 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-cyan-400 transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-cyan-400 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-slate-950 border-b border-slate-800 py-8 px-6 space-y-6 flex flex-col animate-in slide-in-from-top duration-300">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-xl font-black uppercase tracking-tighter">Home</Link>
          <Link href="/disclosure" onClick={() => setIsMenuOpen(false)} className="text-xl font-black uppercase tracking-tighter">Disclosure</Link>
          <Link href="/guide" onClick={() => setIsMenuOpen(false)} className="text-xl font-black uppercase tracking-tighter">Guide</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-xl font-black uppercase tracking-tighter">About Us</Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="w-full py-4 text-center bg-cyan-600 rounded-xl font-black uppercase tracking-widest">Contact Us</Link>
        </div>
      )}
    </header>
  );
}
