"use client";

import { useState, useEffect } from "react";
import { Brand } from "@/app/data/brands";
import BrandCard from "./BrandCard";
import Image from "next/image";

interface MobileModalProps {
  brands: Brand[];
  gclid?: string;
}

export default function MobileModal({ brands, gclid }: MobileModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    
    if (gclid && isMobileDevice) {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [gclid]);

  if (!isOpen) return null;

  const mobileBrands = brands.filter(b => b.isMobile);

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950 flex flex-col animate-in fade-in duration-500">
      {/* Modal Header */}
      <header className="h-20 border-b border-slate-900 flex items-center justify-between px-6 shrink-0 bg-slate-950/80 backdrop-blur-xl">
        <div className="relative w-40 h-10">
          <Image src="/logo.png" alt="Logo" fill className="object-contain" />
        </div>
        <button 
          onClick={() => setIsOpen(false)}
          className="p-3 text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </header>

      {/* Modal Content */}
      <div className="flex-grow overflow-y-auto p-6 space-y-12 pb-32 chip-texture">
        <div className="text-center pt-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-black text-cyan-400 uppercase tracking-[0.2em] mb-6">
            Mobile Elite Access
          </div>
          <h2 className="text-4xl font-black mb-4 italic tracking-tighter text-white">
            TOP <span className="logo-gradient-text">MOBILE</span> SPINS
          </h2>
          <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Premium Brands for Your Device</p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {mobileBrands.map((brand, index) => (
            <BrandCard 
              key={brand.id} 
              brand={brand} 
              rank={index + 1} 
              gclid={gclid} 
            />
          ))}
        </div>

        {/* 18+ Disclaimer */}
        <div className="p-6 rounded-3xl bg-red-950/10 border border-red-900/20 text-center">
          <p className="text-xs text-slate-500 font-bold leading-relaxed">
            <span className="text-white font-black italic mr-2">18+ ONLY.</span> 
            Play responsibly. National Gambling Helpline: 0808 8020 133.
          </p>
        </div>
      </div>

      {/* Modal Footer */}
      <footer className="p-6 border-t border-slate-900 bg-slate-950/90 backdrop-blur-xl shrink-0">
        <button 
          onClick={() => setIsOpen(false)}
          className="w-full py-5 rounded-2xl border border-slate-800 text-xs font-black text-slate-400 uppercase tracking-[0.2em] hover:bg-slate-900 transition-all"
        >
          Continue to Main Site
        </button>
      </footer>
    </div>
  );
}
