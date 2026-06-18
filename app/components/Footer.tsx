import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-20 text-center">
          <Link href="/" className="relative w-64 h-16 mb-10">
            <Image 
              src="/logo.png" 
              alt="Best UK Spins" 
              fill 
              className="object-contain" 
            />
          </Link>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full max-w-5xl">
            <div className="flex flex-col gap-4">
              <h4 className="font-black text-white uppercase text-xs tracking-[0.2em] mb-2">Navigation</h4>
              <Link href="/" className="text-sm text-slate-500 hover:text-cyan-400 font-bold transition-colors">Home</Link>
              <Link href="/disclosure" className="text-sm text-slate-500 hover:text-cyan-400 font-bold transition-colors">Disclosure</Link>
              <Link href="/guide" className="text-sm text-slate-500 hover:text-cyan-400 font-bold transition-colors">Casino Guide</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-black text-white uppercase text-xs tracking-[0.2em] mb-2">Legal</h4>
              <Link href="/privacy" className="text-sm text-slate-500 hover:text-cyan-400 font-bold transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-sm text-slate-500 hover:text-cyan-400 font-bold transition-colors">Terms of Service</Link>
              <Link href="/cookies" className="text-sm text-slate-500 hover:text-cyan-400 font-bold transition-colors">Cookie Policy</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-black text-white uppercase text-xs tracking-[0.2em] mb-2">Support</h4>
              <Link href="/about" className="text-sm text-slate-500 hover:text-cyan-400 font-bold transition-colors">About Us</Link>
              <Link href="/contact" className="text-sm text-slate-500 hover:text-cyan-400 font-bold transition-colors">Contact Us</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-black text-white uppercase text-xs tracking-[0.2em] mb-2">Resources</h4>
              <Link href="/responsible-gambling" className="text-sm text-slate-500 hover:text-cyan-400 font-bold transition-colors">Responsible Gambling</Link>
              <Link href="/faq" className="text-sm text-slate-500 hover:text-cyan-400 font-bold transition-colors">FAQ</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap justify-center items-center gap-8 mb-12 opacity-40 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0">
              <Image src="/18plus.svg" alt="18+" width={40} height={40} />
              <Image src="/gambleaware.png" alt="BeGambleAware" width={140} height={28} />
              <Image src="/ukgc.svg" alt="UKGC" width={100} height={40} />
              <Image src="/gamestop.png" alt="GamStop" width={120} height={28} />
            </div>

            <p className="text-[10px] text-slate-600 leading-relaxed mb-8 uppercase font-black tracking-widest">
              Disclaimer: bestukspins.org is an elite independent review platform. We receive affiliate commissions from the brands featured on this site. Our reviews are conducted by industry experts. Please gamble responsibly. Regulated by the UK Gambling Commission (UKGC).
            </p>
            
            <p className="text-xs text-slate-700 font-bold">
              © {currentYear} BESTUKSPINS.ORG. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
