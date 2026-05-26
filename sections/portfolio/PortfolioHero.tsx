'use client'
import { motion } from 'framer-motion'

export default function PortfolioHero() {
  return (
    <section className="pt-32 pb-16 text-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-brand-navy/30 rounded-full blur-[100px]" />
      </div>
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-[color:var(--accent-orange)] font-semibold text-sm uppercase tracking-widest">
            Our Work
          </span>
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-[var(--text-primary)] mt-3 mb-4">
            Projects That <span className="text-gradient">Define Us</span>
          </h1>
          <p className="text-[var(--text-muted)] text-lg">
            Real solutions. Real results. Explore our portfolio of delivered projects.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
