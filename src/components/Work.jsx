import { useEffect, useState } from 'react';

const projects = [
  {
    title: 'Monochrome Studio',
    tag: 'Brand Identity',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=2069&auto=format&fit=crop',
  },
  {
    title: 'Noir Campaign',
    tag: 'Art Direction',
    image: 'https://images.unsplash.com/photo-1641138669126-e8f74cf934ed?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOb2lyJTIwQ2FtcGFpZ258ZW58MHwwfHx8MTc2MjYwODk0M3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Grid Magazine',
    tag: 'Editorial',
    image: 'https://images.unsplash.com/photo-1612544408664-5d919fe4d619?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHcmlkJTIwTWFnYXppbmV8ZW58MHwwfHx8MTc2MjYwODk0NHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Prime Optics',
    tag: 'Packaging',
    image: 'https://images.unsplash.com/photo-1531595992-ee7e1ddaa251?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQcmltZSUyME9wdGljc3xlbnwwfDB8fHwxNzYyNjA4OTQ0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
];

export default function Work() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="work" className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 py-20">
        <div className="mb-10 sm:mb-14 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Selected Works</h2>
            <p className="mt-3 text-gray-600 max-w-2xl">
              A curated selection of recent projects blending photographic cues with strict typographic systems.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => (
            <figure key={p.title} className="group overflow-hidden rounded-2xl bg-white border border-gray-200">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className={`h-full w-full object-cover transition duration-700 ${mounted ? 'group-hover:scale-105' : ''}`}
                  loading="lazy"
                />
              </div>
              <figcaption className="p-4">
                <div className="text-xs uppercase tracking-wider text-gray-500">{p.tag}</div>
                <div className="mt-1 font-medium text-gray-900">{p.title}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
