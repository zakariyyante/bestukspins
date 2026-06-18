export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-black mb-6 italic tracking-tighter">
          GET IN <span className="logo-gradient-text">TOUCH</span>
        </h1>
        <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">
          Have a question about a brand or need assistance? Our team is here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="premium-card p-10 rounded-[2.5rem]">
          <h2 className="text-3xl font-black mb-8 text-white italic">Contact Info</h2>
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                <span className="text-2xl">📧</span>
              </div>
              <div>
                <h4 className="text-white font-black uppercase tracking-widest text-xs mb-1">Email Us</h4>
                <p className="text-cyan-400 font-bold">contact@bestukspins.org</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                <span className="text-2xl">📍</span>
              </div>
              <div>
                <h4 className="text-white font-black uppercase tracking-widest text-xs mb-1">Location</h4>
                <p className="text-slate-400 font-medium">London, United Kingdom</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                <span className="text-2xl">⏰</span>
              </div>
              <div>
                <h4 className="text-white font-black uppercase tracking-widest text-xs mb-1">Response Time</h4>
                <p className="text-slate-400 font-medium">Within 24-48 Hours</p>
              </div>
            </div>
          </div>
        </div>

        <div className="premium-card p-10 rounded-[2.5rem] border-cyan-500/20">
          <h2 className="text-3xl font-black mb-8 text-white italic">Send a Message</h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 ml-1">Full Name</label>
              <input 
                type="text" 
                placeholder="Enter your name"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-cyan-500/50 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 ml-1">Email Address</label>
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-cyan-500/50 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 ml-1">Message</label>
              <textarea 
                rows={4}
                placeholder="How can we help?"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:border-cyan-500/50 outline-none transition-all resize-none"
              ></textarea>
            </div>
            <button className="btn-premium w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
