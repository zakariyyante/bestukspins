import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-5xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-black text-cyan-400 uppercase tracking-[0.2em] mb-6">
            Our Mission
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-8 italic tracking-tighter text-white">
            WE ARE <span className="logo-gradient-text">BEST UK SPINS</span>
          </h1>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed font-medium">
            Founded by a team of industry veterans, Best UK Spins was created to bring transparency and elite standards to the UK online casino market. We don&apos;t just list casinos; we audit them.
          </p>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                <span className="text-cyan-400 font-black">01</span>
              </div>
              <div>
                <h4 className="text-white font-black uppercase tracking-widest text-sm mb-1">Unbiased Reviews</h4>
                <p className="text-sm text-slate-500">Our ratings are based on objective data, not sponsorship deals.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                <span className="text-cyan-400 font-black">02</span>
              </div>
              <div>
                <h4 className="text-white font-black uppercase tracking-widest text-sm mb-1">Player First</h4>
                <p className="text-sm text-slate-500">We prioritize your security and gaming experience above all else.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                <span className="text-cyan-400 font-black">03</span>
              </div>
              <div>
                <h4 className="text-white font-black uppercase tracking-widest text-sm mb-1">UK Focused</h4>
                <p className="text-sm text-slate-500">We only review platforms that are fully licensed by the UKGC.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="premium-card p-4 rounded-[3rem] overflow-hidden">
            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden bg-slate-900 flex items-center justify-center">
              <Image 
                src="/logo.png" 
                alt="Best UK Spins" 
                width={300} 
                height={100} 
                className="object-contain animate-float"
              />
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/20 blur-[60px] rounded-full -z-10" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-900/20 blur-[60px] rounded-full -z-10" />
        </div>
      </div>
    </div>
  );
}
