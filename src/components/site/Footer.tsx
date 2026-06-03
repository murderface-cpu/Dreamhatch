export function Footer() {
  return (
    <footer className="bg-ink text-cream py-14">
      <div className="container-page">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="font-display text-2xl font-black">
              Dream<span className="text-accent">Hatch</span> Kenya
            </div>
            <p className="mt-4 text-cream/70 text-sm max-w-xs leading-relaxed">
              Empowering communities through art, health, education, and environmental sustainability.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-accent mb-4">
              Navigate
            </h4>
            <ul className="space-y-2 text-sm text-cream/80">
              <li><a href="#mission" className="hover:text-accent">Mission</a></li>
              <li><a href="#focus" className="hover:text-accent">Focus Areas</a></li>
              <li><a href="#projects" className="hover:text-accent">Projects</a></li>
              <li><a href="#involved" className="hover:text-accent">Get Involved</a></li>
              <li><a href="#donate" className="hover:text-accent">Donate</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-accent mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-cream/80">
              <li>Phone: +254 104 868 447</li>
              <li>
                <a href="mailto:dreamhatchke2020@gmail.com" className="hover:text-accent break-all">
                  dreamhatchke2020@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-wrap justify-between gap-4 text-xs text-cream/50">
          <span>© {new Date().getFullYear()} Dream Hatch Kenya. All rights reserved.</span>
          <span>Legal Notice · Privacy</span>
        </div>
      </div>
    </footer>
  );
}
