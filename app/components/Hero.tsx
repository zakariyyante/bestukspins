import Image from "next/image";

export default function Hero() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden chip-texture">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-600/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-900/50 border border-cyan-500/30 mb-10 backdrop-blur-sm">
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-cyan-400">
              UK&apos;s #1 Premium Casino Hub {currentYear}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tighter italic">
            <span className="text-white">THE BEST</span><br />
            <span className="logo-gradient-text">UK SPINS</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-14 max-w-2xl mx-auto font-medium leading-relaxed">
            Experience the pinnacle of online gaming. We curate only the most elite, licensed, and high-paying casino platforms in the United Kingdom.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: "👑", title: "Royal Status", desc: "Premium Platforms" },
              { icon: "💎", title: "Elite Bonuses", desc: "Exclusive Offers" },
              { icon: "⚡", title: "Instant Access", desc: "Fast Withdrawals" },
            ].map((badge, i) => (
              <div key={i} className="premium-card p-6 rounded-2xl flex flex-col items-center text-center group">
                <span className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{badge.icon}</span>
                <h3 className="font-black text-white uppercase tracking-widest text-sm mb-1">{badge.title}</h3>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-tighter">{badge.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#brands" className="btn-premium w-full sm:w-auto min-w-[240px]">
              Explore Elite Brands
            </a>
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-[10px] font-bold">U{i}</div>
                </div>
              ))}
              <div className="pl-6 text-sm font-bold text-slate-400">
                <span className="text-cyan-400">12.5k+</span> Active Players
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
