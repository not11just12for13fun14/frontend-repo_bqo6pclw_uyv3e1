export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 py-16">
        <div className="grid gap-8 sm:grid-cols-2 items-end">
          <div>
            <h3 className="text-2xl font-semibold">Let’s build something timeless.</h3>
            <p className="mt-3 text-white/70 max-w-lg">
              Available for brand identity, editorial, and art direction projects worldwide.
            </p>
          </div>
          <div className="sm:justify-self-end">
            <a
              href="mailto:hello@graphicallyashwin.com"
              className="inline-flex items-center rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition"
            >
              hello@graphicallyashwin.com
            </a>
            <div className="mt-4 text-sm text-white/60">
              Instagram · Behance · Dribbble
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 flex items-center justify-between text-xs text-white/50">
          <span>© {new Date().getFullYear()} Graphically Ashwin</span>
          <span>Crafted with clarity</span>
        </div>
      </div>
    </footer>
  );
}
