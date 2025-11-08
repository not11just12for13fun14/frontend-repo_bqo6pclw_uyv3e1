import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black text-white">
      {/* 3D Cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for readability (doesn't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 py-8 sm:py-12 h-full flex flex-col">
        <header className="flex items-center justify-between">
          <div className="font-semibold tracking-tight text-white/90">Graphically Ashwin</div>
          <nav className="hidden sm:flex items-center gap-6 text-white/80">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
        </header>

        <div className="flex-1 grid content-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight">
              Minimal, modern visuals for brands that want to stand out
            </h1>
            <p className="mt-5 text-white/80 text-lg sm:text-xl">
              I’m Ashwin — a graphic designer blending photography aesthetics and clean typographic systems to create timeless brand experiences.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#work"
                className="inline-flex items-center rounded-full bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90 transition"
              >
                View Selected Works
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-white/30 px-5 py-3 text-sm text-white/90 hover:bg-white/10 transition"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
