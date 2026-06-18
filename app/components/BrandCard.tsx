"use client";

import Image from "next/image";
import { Brand } from "@/app/data/brands";
import { track } from "@vercel/analytics";

interface BrandCardProps {
  brand: Brand;
  rank?: number;
  gclid?: string;
}

export function buildUrl(url: string, gclid?: string) {
  if (!gclid) return url;
  return `${url}${gclid}`;
}

export default function BrandCard({ brand, rank, gclid }: BrandCardProps) {
  const finalUrl = buildUrl(brand.url, gclid);

  const handleCardClick = () => {
    track("Brand Click", { brand: brand.name });

    /* eslint-disable @typescript-eslint/no-explicit-any */
    if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
      (window as any).gtag_report_conversion(finalUrl);
    } else {
      window.open(finalUrl, "_blank");
    }
    /* eslint-enable @typescript-eslint/no-explicit-any */
  };

  const getRankBadge = (rank: number) => {
    switch (rank) {
      case 1: return <div className="absolute -top-4 -right-4 bg-gradient-to-br from-[#d4af37] to-[#f9d423] text-slate-950 font-black px-4 py-2 rounded-xl shadow-xl z-20 italic text-sm">#1 ELITE</div>;
      case 2: return <div className="absolute -top-4 -right-4 bg-gradient-to-br from-slate-300 to-slate-500 text-slate-950 font-black px-4 py-2 rounded-xl shadow-xl z-20 italic text-sm">#2 PREMIUM</div>;
      case 3: return <div className="absolute -top-4 -right-4 bg-gradient-to-br from-orange-600 to-orange-800 text-white font-black px-4 py-2 rounded-xl shadow-xl z-20 italic text-sm">#3 SELECT</div>;
      default: return null;
    }
  };

  return (
    <div 
      onClick={handleCardClick}
      className="relative group premium-card rounded-3xl p-8 cursor-pointer overflow-hidden"
    >
      {rank && getRankBadge(rank)}
      
      {/* Decorative background glow */}
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-500/10 blur-[60px] rounded-full group-hover:bg-cyan-500/20 transition-all duration-500" />

      <div className="flex flex-col h-full relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div className="relative w-36 h-20 bg-white/5 rounded-2xl p-4 flex items-center justify-center border border-white/10 group-hover:border-cyan-500/30 transition-colors">
            <Image 
              src={brand.logo} 
              alt={brand.name} 
              fill 
              className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="text-right">
            <div className="text-3xl font-black text-white italic tracking-tighter">{brand.rating.toFixed(1)}</div>
            <div className="flex gap-0.5 justify-end mt-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`text-xs ${i < Math.floor(brand.rating / 2) ? 'text-cyan-400' : 'text-slate-700'}`}>★</span>
              ))}
            </div>
            <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-2">{brand.votes} REVIEWS</div>
          </div>
        </div>

        <div className="flex-grow">
          <h3 className="text-2xl font-black mb-3 text-white italic tracking-tight group-hover:text-cyan-400 transition-colors">{brand.name}</h3>
          <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-lg mb-4">
            <p className="text-xs font-black text-cyan-400 uppercase tracking-widest">Exclusive Offer</p>
          </div>
          <p className="text-base text-slate-400 font-medium leading-relaxed">{brand.bonus}</p>
        </div>

        <button className="mt-10 w-full py-5 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl text-white font-black uppercase tracking-[0.15em] shadow-lg shadow-cyan-900/20 group-hover:shadow-cyan-500/40 group-hover:-translate-y-1 transition-all duration-300">
          Claim Bonus Now
        </button>
        
        <div className="mt-4 text-center">
          <p className="text-[10px] text-slate-600 font-bold uppercase tracking-tighter">T&Cs Apply | 18+ Only</p>
        </div>
      </div>
    </div>
  );
}
