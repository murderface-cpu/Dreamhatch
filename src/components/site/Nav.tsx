import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/#mission", label: "Mission" },
  { href: "/#focus", label: "Focus" },
  { href: "/#projects", label: "Projects" },
  { href: "/#impact", label: "Impact" },
  { href: "/#involved", label: "Get Involved" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between h-16 md:h-20">
        <a href="/" className="flex items-baseline gap-2">
          <span className="font-display text-xl md:text-2xl font-black text-foreground text-primary">
            Dream<span className="text-primary">Hatch</span>
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground hidden sm:inline">
            Kenya
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/#donate"
            className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition shadow-warm"
          >
            Donate
          </a>
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="container-page py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-foreground border-b border-border/50"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/#donate"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex justify-center px-5 py-3 rounded-full bg-primary text-primary-foreground font-semibold"
            >
              Donate
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
