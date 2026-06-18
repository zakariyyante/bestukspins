import Image from "next/image";

export default function GuidePage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-5xl">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-black mb-6 italic tracking-tighter">
          THE ULTIMATE <span className="logo-gradient-text">CASINO GUIDE</span>
        </h1>
        <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">
          Master the art of online gaming with our expert insights, strategy guides, and platform audits.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="premium-card p-8 rounded-3xl">
          <h2 className="text-3xl font-black mb-6 text-white italic">How to Choose a Casino</h2>
          <p className="text-slate-400 mb-6 leading-relaxed">
            Not all casinos are created equal. When auditing a platform for Best UK Spins, we look at five critical pillars:
          </p>
          <ul className="space-y-4">
            {[
              "Licensing: Must hold a valid UKGC license.",
              "Game Variety: From slots to live dealer tables.",
              "Payout Speed: Fast withdrawals are non-negotiable.",
              "Mobile Experience: Seamless play on any device.",
              "Bonus Fairness: Transparent terms and conditions."
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-300">
                <span className="text-cyan-400 font-bold">0{i + 1}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="premium-card p-8 rounded-3xl">
          <h2 className="text-3xl font-black mb-6 text-white italic">Understanding Bonuses</h2>
          <p className="text-slate-400 mb-6 leading-relaxed">
            Welcome offers can be confusing. Here is what you need to know about the most common types:
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-cyan-400 font-black uppercase tracking-widest text-sm mb-2">Deposit Match</h3>
              <p className="text-sm text-slate-500">The casino matches a percentage of your first deposit, giving you more to play with.</p>
            </div>
            <div>
              <h3 className="text-cyan-400 font-black uppercase tracking-widest text-sm mb-2">Free Spins</h3>
              <p className="text-sm text-slate-500">Complimentary rounds on selected slot games, often part of a welcome package.</p>
            </div>
            <div>
              <h3 className="text-cyan-400 font-black uppercase tracking-widest text-sm mb-2">No Deposit Bonus</h3>
              <p className="text-sm text-slate-500">A small amount of credit or spins given just for signing up, no payment required.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 premium-card p-10 rounded-[2.5rem] border-cyan-500/20">
        <h2 className="text-4xl font-black mb-8 text-center text-white italic">Expert Strategy Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl mb-4">📊</div>
            <h4 className="font-black text-white mb-2 uppercase tracking-widest">Bankroll Management</h4>
            <p className="text-sm text-slate-400">Never bet more than you can afford to lose. Set strict daily or weekly limits.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">🔍</div>
            <h4 className="font-black text-white mb-2 uppercase tracking-widest">Check the RTP</h4>
            <p className="text-sm text-slate-400">Look for games with a high Return to Player (RTP) percentage for better long-term odds.</p>
          </div>
          <div>
            <div className="text-4xl mb-4">📜</div>
            <h4 className="font-black text-white mb-2 uppercase tracking-widest">Read the T&Cs</h4>
            <p className="text-sm text-slate-400">Always check wagering requirements before claiming a bonus to avoid surprises.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
