'use client'
import { motion } from 'framer-motion'

export default function ServicesHero() {
  return (
    <section className="pt-32 pb-16 text-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-orange/10 rounded-full blur-[100px]" />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="text-[color:var(--accent-orange)] font-semibold text-sm uppercase tracking-widest">
            What We Offer
          </span>
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-[var(--text-primary)] mt-3 mb-4">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
            End-to-end digital solutions engineered for performance, scale, and real business impact.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
