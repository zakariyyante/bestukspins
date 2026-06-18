import Link from "next/link";

export default function ResponsibleGamblingPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-5xl">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-[10px] font-black text-red-500 uppercase tracking-[0.2em] mb-6">
          Player Protection
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 italic tracking-tighter text-white">
          RESPONSIBLE <span className="logo-gradient-text">GAMING</span>
        </h1>
        <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">
          At Best UK Spins, we are committed to ensuring that online gaming remains a safe and enjoyable form of entertainment.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
        <div className="premium-card p-8 rounded-3xl border-red-500/20">
          <div className="text-4xl mb-6">🛑</div>
          <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tight italic">Know Your Limits</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Set deposit, loss, and session time limits before you start playing. Never chase your losses or gamble with money you need for essentials.
          </p>
        </div>
        <div className="premium-card p-8 rounded-3xl border-red-500/20">
          <div className="text-4xl mb-6">🧠</div>
          <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tight italic">Stay In Control</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Gaming should be fun. If you find yourself feeling stressed, anxious, or spending more time than intended, it may be time to take a break.
          </p>
        </div>
        <div className="premium-card p-8 rounded-3xl border-red-500/20">
          <div className="text-4xl mb-6">🤝</div>
          <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tight italic">Seek Assistance</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            There are many professional organizations dedicated to helping those affected by gambling-related issues. Help is always available.
          </p>
        </div>
      </div>

      <div className="premium-card p-10 rounded-[3rem] bg-slate-900/40 mb-20">
        <h2 className="text-3xl font-black mb-10 text-white italic text-center">Support Organizations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "BeGambleAware", url: "https://www.begambleaware.org", desc: "Confidential help and support for anyone worried about their gambling." },
            { name: "GAMSTOP", url: "https://www.gamstop.co.uk", desc: "Free service that lets you self-exclude from all online gambling companies licensed in Great Britain." },
            { name: "GamCare", url: "https://www.gamcare.org.uk", desc: "The leading provider of information, advice and support for anyone affected by gambling." },
            { name: "Gamblers Anonymous", url: "https://www.gamblersanonymous.org.uk", desc: "A fellowship of people who share their experience, strength and hope to solve their common problem." }
          ].map((org, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <h4 className="text-cyan-400 font-black uppercase tracking-widest text-xs mb-3">{org.name}</h4>
              <p className="text-xs text-slate-500 mb-6 flex-grow">{org.desc}</p>
              <Link href={org.url} className="text-white font-bold text-xs border-b border-cyan-500 pb-1 hover:text-cyan-400 transition-colors">Visit Site</Link>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <div className="inline-flex items-center gap-4 p-6 rounded-3xl bg-red-600/10 border border-red-600/20">
          <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white text-xl font-black italic shrink-0">18+</div>
          <p className="text-sm text-slate-400 font-bold text-left">
            Strictly for adults 18+ only. Underage gambling is a criminal offense in the United Kingdom.
          </p>
        </div>
      </div>
    </div>
  );
}
