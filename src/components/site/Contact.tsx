import { Mail, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container-page grid lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-accent">
            Get in touch
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-black mt-4 leading-[1.05]">
            Let's build something meaningful together.
          </h2>
          <p className="mt-6 text-lg text-secondary-foreground/80 leading-relaxed">
            Reach out about volunteering, partnerships, press, or just to learn more about our work.
          </p>

          <div className="mt-10 space-y-5">
            <a
              href="tel:+254104868447"
              className="flex items-center gap-4 group"
            >
              <span className="size-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center">
                <Phone className="size-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-secondary-foreground/60">
                  Phone
                </div>
                <div className="font-display text-xl font-bold group-hover:text-accent transition">
                  +254 104 868 447
                </div>
              </div>
            </a>
            <a
              href="mailto:dreamhatchke2020@gmail.com"
              className="flex items-center gap-4 group"
            >
              <span className="size-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center">
                <Mail className="size-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-secondary-foreground/60">
                  Email
                </div>
                <div className="font-display text-xl font-bold group-hover:text-accent transition break-all">
                  dreamhatchke2020@gmail.com
                </div>
              </div>
            </a>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you - we'll be in touch within 2 business days.");
          }}
          className="bg-cream/5 backdrop-blur border border-cream/10 rounded-3xl p-7 md:p-9 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              required
              placeholder="Full name"
              className="w-full px-4 py-3.5 rounded-xl bg-cream/10 border border-cream/15 text-cream placeholder:text-cream/50 focus:border-accent outline-none"
            />
            <input
              required
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3.5 rounded-xl bg-cream/10 border border-cream/15 text-cream placeholder:text-cream/50 focus:border-accent outline-none"
            />
          </div>
          <input
            type="tel"
            placeholder="Phone (optional)"
            className="w-full px-4 py-3.5 rounded-xl bg-cream/10 border border-cream/15 text-cream placeholder:text-cream/50 focus:border-accent outline-none"
          />
          <select
            required
            defaultValue=""
            className="w-full px-4 py-3.5 rounded-xl bg-cream/10 border border-cream/15 text-cream focus:border-accent outline-none"
          >
            <option value="" disabled className="bg-secondary">
              I'm interested in…
            </option>
            <option className="bg-secondary">Volunteering</option>
            <option className="bg-secondary">Donating</option>
            <option className="bg-secondary">Partnership opportunities</option>
            <option className="bg-secondary">Press / Media</option>
            <option className="bg-secondary">Other</option>
          </select>
          <textarea
            required
            rows={4}
            placeholder="Tell us more…"
            className="w-full px-4 py-3.5 rounded-xl bg-cream/10 border border-cream/15 text-cream placeholder:text-cream/50 focus:border-accent outline-none resize-none"
          />
          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-accent text-accent-foreground font-bold hover:opacity-95 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
