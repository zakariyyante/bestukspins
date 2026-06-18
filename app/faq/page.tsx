export default function FAQPage() {
  const faqs = [
    {
      q: "How do you rate the casinos on your site?",
      a: "We use a rigorous 25-point audit system that covers licensing, security, game variety, payout speed, and customer support quality. Only platforms that meet our elite standards are listed."
    },
    {
      q: "Are the casinos listed on Best UK Spins safe?",
      a: "Yes. We only review and list casinos that hold a valid license from the UK Gambling Commission (UKGC), ensuring they adhere to strict standards of fairness and player protection."
    },
    {
      q: "What is a wagering requirement?",
      a: "A wagering requirement is the number of times you must play through a bonus amount before you can withdraw any winnings. We always recommend reading the T&Cs for each offer."
    },
    {
      q: "How long do withdrawals take?",
      a: "Withdrawal times vary by casino and payment method. However, we prioritize brands that offer fast payouts, typically processed within 24 hours for e-wallets."
    },
    {
      q: "Can I play on my mobile device?",
      a: "Absolutely. All the brands we recommend are fully optimized for mobile play, either through a dedicated app or a responsive web browser experience."
    },
    {
      q: "Do I have to pay to use Best UK Spins?",
      a: "No. Our service is completely free for players. We receive a commission from the casinos we refer players to, which allows us to maintain the site and provide expert reviews."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-black mb-6 italic tracking-tighter">
          FREQUENTLY ASKED <span className="logo-gradient-text">QUESTIONS</span>
        </h1>
        <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">
          Find quick answers to the most common questions about online gaming and our review process.
        </p>
      </div>

      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="premium-card p-8 rounded-3xl group">
            <h3 className="text-xl font-black text-white mb-4 italic tracking-tight group-hover:text-cyan-400 transition-colors">
              {faq.q}
            </h3>
            <p className="text-slate-400 font-medium leading-relaxed">
              {faq.a}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <p className="text-slate-500 font-bold uppercase tracking-widest text-sm mb-6">Still have questions?</p>
        <a href="/contact" className="btn-premium inline-block">
          Contact Our Experts
        </a>
      </div>
    </div>
  );
}
