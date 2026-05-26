import { technologies } from '@/data/tech'

export default function TechStack() {
  const doubled = [...technologies, ...technologies]

  return (
    <section className="py-20 bg-[var(--bg-secondary)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <span className="text-[color:var(--accent-orange)] font-semibold text-sm uppercase tracking-widest">
          Tech Stack
        </span>
        <h2 className="text-3xl lg:text-4xl font-display font-bold text-[var(--text-primary)] mt-3">
          Built With <span className="text-gradient">Industry-Leading Tools</span>
        </h2>
      </div>

      <div className="relative">
        <div className="flex animate-marquee gap-6 w-max">
          {doubled.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="flex items-center gap-3 glass px-6 py-3 rounded-xl whitespace-nowrap flex-shrink-0"
            >
              <span className="text-xl leading-none">{tech.logo}</span>
              <span className="font-medium text-[var(--text-primary)] text-sm">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
