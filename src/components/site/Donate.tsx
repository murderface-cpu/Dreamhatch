import { useState } from "react";
import { Check, Heart, ShieldCheck } from "lucide-react";

const tiers = [
  { amount: 1000, impact: "Art supplies for one student" },
  { amount: 2500, impact: "Materials for a 30-student classroom", popular: false },
  { amount: 5000, impact: "Sponsor a child for a workshop", popular: true },
  { amount: 10000, impact: "Fund a community workshop for 20" },
  { amount: 25000, impact: "Mentorship for 5 emerging artists" },
  { amount: 50000, impact: "Complete community art initiative" },
];

export function Donate() {
  const [selected, setSelected] = useState(5000);
  const [custom, setCustom] = useState("");
  const [monthly, setMonthly] = useState(false);

  const amount = custom ? Number(custom) : selected;

  return (
    <section id="donate" className="py-24 md:py-32 bg-gradient-to-br from-primary via-primary to-[oklch(0.48_0.18_28)] text-primary-foreground relative overflow-hidden">
      <div className="absolute -top-32 -right-32 size-[40rem] bg-accent/20 rounded-full blur-3xl" />
      <div className="container-page relative">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-start">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream/15 backdrop-blur text-xs font-bold uppercase tracking-[0.18em]">
              <Heart className="size-3 fill-current" /> Make a Donation
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-black mt-5 leading-[1.02]">
              Your gift today rewrites a child's tomorrow.
            </h2>
            <p className="mt-6 text-lg text-cream/85 max-w-xl leading-relaxed">
              Every shilling fuels art supplies, workshops, mentorship and community projects across
              Kenya. 100% of donations go directly to our programs.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Tax-deductible - full receipt on request",
                "Secure M-Pesa, card, or bank transfer",
                "Transparent reporting on every program",
              ].map((f) => (
                <li key={f} className="flex items-center gap-3 text-cream/90">
                  <span className="size-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex items-center gap-3 text-cream/70 text-sm">
              <ShieldCheck className="size-5 text-accent" />
              Secure donation · Registered in Kenya
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(`Thank you! Redirecting to checkout for KSh ${amount.toLocaleString()}${monthly ? " /month" : ""}.`);
            }}
            className="bg-background text-foreground rounded-3xl p-7 md:p-10 shadow-elegant"
          >
            <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Select an amount (KSh)
            </div>
            <div className="grid grid-cols-3 gap-2.5">
              {tiers.map((t) => (
                <button
                  key={t.amount}
                  type="button"
                  onClick={() => {
                    setSelected(t.amount);
                    setCustom("");
                  }}
                  className={`relative p-3 rounded-xl border-2 text-left transition ${
                    selected === t.amount && !custom
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/40"
                  }`}
                >
                  {t.popular && (
                    <span className="absolute -top-2.5 right-2 text-[10px] font-bold uppercase bg-accent text-accent-foreground px-2 py-0.5 rounded-full">
                      Popular
                    </span>
                  )}
                  <div className="font-display font-black text-lg">{t.amount.toLocaleString()}</div>
                  <div className="text-[10px] leading-tight text-muted-foreground mt-1">
                    {t.impact}
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-4 relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium text-sm">
                KSh
              </span>
              <input
                type="number"
                placeholder="Other amount"
                value={custom}
                onChange={(e) => setCustom(e.target.value)}
                className="w-full pl-14 pr-4 py-3.5 rounded-xl border-2 border-border focus:border-primary outline-none"
              />
            </div>

            <label className="mt-4 flex items-center gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={monthly}
                onChange={(e) => setMonthly(e.target.checked)}
                className="size-4 accent-primary"
              />
              <span className="text-sm">Make this a monthly donation</span>
            </label>

            <div className="mt-5 space-y-3">
              <input
                required
                type="text"
                placeholder="Full name"
                className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary outline-none"
              />
              <input
                required
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary outline-none"
              />
              <input
                type="tel"
                placeholder="Phone (for M-Pesa)"
                className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary outline-none"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:opacity-95 transition shadow-warm"
            >
              Donate KSh {amount ? amount.toLocaleString() : "0"}
              {monthly && " / month"}
            </button>

            <div className="mt-4 flex items-center justify-center gap-4 text-xs text-muted-foreground">
              <span>M-Pesa</span>
              <span>·</span>
              <span>Visa / Mastercard</span>
              <span>·</span>
              <span>Bank Transfer</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
