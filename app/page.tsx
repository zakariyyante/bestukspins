import Hero from "./components/Hero";
import BrandCard from "./components/BrandCard";
import { brands } from "./data/brands";
import Link from "next/link";
import Image from "next/image";

export default async function Home(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const gclid = typeof searchParams.gclid === 'string' ? searchParams.gclid : undefined;

  console.log("Rendering Home page with gclid:", gclid);

  return (
    <div className="flex flex-col gap-0 bg-[#020617] text-white min-h-screen">
      <Hero />

      <section id="brands" className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-600/5 blur-[120px] rounded-full -z-10" />

        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-[1px] w-12 bg-cyan-500" />
                <span className="text-xs font-black text-cyan-500 uppercase tracking-[0.3em]">Elite Selection</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 italic tracking-tighter">
                TOP RATED <span className="logo-gradient-text">UK CASINOS</span>
              </h2>
              <p className="text-slate-400 font-medium text-lg leading-relaxed">
                Our rigorous 25-point inspection ensures only the most secure and rewarding platforms make it to our elite list.
              </p>
            </div>
            <div className="flex items-center gap-3 text-[10px] text-cyan-400 font-black uppercase tracking-widest bg-cyan-500/5 px-6 py-3 rounded-2xl border border-cyan-500/20 backdrop-blur-sm">
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              Live Updates: {new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {brands.map((brand, index) => (
              <BrandCard 
                key={brand.id} 
                brand={brand} 
                rank={index + 1} 
                gclid={gclid}
              />
            ))}
          </div>

          {/* 18+ Disclaimer Bar */}
          <div className="mt-24 p-8 rounded-[2rem] bg-slate-900/40 border border-slate-800 backdrop-blur-md flex flex-col md:flex-row items-center gap-8 text-center md:text-left group hover:border-red-500/30 transition-all duration-500">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white text-2xl font-black shadow-lg shadow-red-900/20 shrink-0 italic">
              18+
            </div>
            <div className="flex-grow">
              <h4 className="text-white font-black uppercase tracking-widest text-sm mb-2">Responsible Gaming Protocol</h4>
              <p className="text-sm text-slate-400 font-medium leading-relaxed">
                Gambling is a form of entertainment, not a source of income. Please play responsibly. If you or someone you know needs assistance, visit <Link href="https://www.begambleaware.org" className="text-cyan-400 hover:underline font-bold">BeGambleAware.org</Link> or contact the National Gambling Helpline at 0808 8020 133.
              </p>
            </div>
            <div className="shrink-0 opacity-40 group-hover:opacity-100 transition-opacity">
              <Image src="/ukgc.svg" alt="UKGC" width={80} height={32} />
            </div>
          </div>
        </div>
      </section>

      {/* How We Rate Section */}
      <section className="py-32 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full -z-10" />
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 italic tracking-tighter">
              OUR <span className="logo-gradient-text">ELITE STANDARD</span>
            </h2>
            <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-sm">How We Audit Casino Platforms</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="premium-card p-10 rounded-[2.5rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-6xl opacity-5 group-hover:opacity-10 transition-opacity">👑</div>
              <h3 className="text-3xl font-black mb-8 flex items-center gap-4 text-white italic">
                <span className="text-cyan-400 not-italic">01</span> The Audit Process
              </h3>
              <ul className="space-y-6">
                {[
                  "Live withdrawal speed verification (under 24h)",
                  "UKGC license authentication & regulatory history",
                  "RNG fairness & third-party audit certification",
                  "Mobile UX performance & biometric security",
                  "VIP program value & loyalty reward structures"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-slate-300 font-medium">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-[10px] text-cyan-400 font-black">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="premium-card p-10 rounded-[2.5rem] border-cyan-500/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-6xl opacity-5 group-hover:opacity-10 transition-opacity">🛡️</div>
              <h3 className="text-3xl font-black mb-8 flex items-center gap-4 text-white italic">
                <span className="text-cyan-400 not-italic">02</span> Player Protection
              </h3>
              <p className="text-slate-400 mb-10 leading-relaxed font-medium text-lg">
                We prioritize your security above all else. Every brand on our platform must integrate advanced player protection tools and maintain 24/7 support.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <Link href="https://www.gamstop.co.uk" className="py-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-cyan-500/30 transition-all">
                  <Image src="/gamestop.png" alt="GAMSTOP" width={100} height={24} className="opacity-70 group-hover:opacity-100" />
                </Link>
                <Link href="https://www.gamcare.org.uk" className="py-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-cyan-500/30 transition-all">
                  <Image src="/gamcare.png" alt="GAMCARE" width={100} height={24} className="opacity-70 group-hover:opacity-100" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
