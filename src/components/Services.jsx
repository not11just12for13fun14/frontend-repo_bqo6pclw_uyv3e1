import { Camera, PenTool, Grid, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: 'Art Direction',
    desc: 'Concept-driven visual direction across campaigns and brand moments.',
  },
  {
    icon: PenTool,
    title: 'Brand Identity',
    desc: 'Logo marks, typography, and cohesive systems that scale.',
  },
  {
    icon: Grid,
    title: 'Editorial & Layout',
    desc: 'Precise grid-based layouts for print and digital publications.',
  },
  {
    icon: Sparkles,
    title: 'Social Content',
    desc: 'Clean, high-impact assets optimized for modern platforms.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white text-gray-900">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 py-20">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Services</h2>
            <p className="mt-3 text-gray-600 max-w-2xl">
              Purposeful design with a focus on clarity, rhythm, and timelessness.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition bg-white"
            >
              <Icon className="h-6 w-6 text-gray-800" />
              <h3 className="mt-4 font-medium text-lg">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
