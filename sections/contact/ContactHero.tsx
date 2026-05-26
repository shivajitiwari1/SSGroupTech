'use client'
import { motion } from 'framer-motion'

export default function ContactHero() {
  return (
    <section className="pt-32 pb-8 text-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-brand-orange/10 rounded-full blur-[100px]" />
      </div>
      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-[color:var(--accent-orange)] font-semibold text-sm uppercase tracking-widest">
            Get In Touch
          </span>
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-[var(--text-primary)] mt-3 mb-4">
            Let&apos;s Build <span className="text-gradient">Together</span>
          </h1>
          <p className="text-[var(--text-muted)] text-lg">
            We respond within 2 hours on business days. No sales pitches — just straight talk about
            your project.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
