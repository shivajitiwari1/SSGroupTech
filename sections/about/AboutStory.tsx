'use client'
import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'

const milestones = [
  { value: '2019', label: 'Founded' },
  { value: '50+', label: 'Projects' },
  { value: '30+', label: 'Clients' },
  { value: '100%', label: 'Remote-Ready' },
]

export default function AboutStory() {
  const { ref, isInView } = useInView()

  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[color:var(--accent-orange)] font-semibold text-sm uppercase tracking-widest">
              Our Story
            </span>
            <h1 className="text-5xl font-display font-bold text-[var(--text-primary)] mt-3 mb-6">
              Built by Builders,{' '}
              <span className="text-gradient">For Business</span>
            </h1>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              SSGroupTech was founded with one mission: make enterprise-grade software accessible to
              every business — from corner-shop startups to multi-crore factories.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              We got tired of watching great businesses struggle with clunky spreadsheets,
              disconnected systems, and agencies that overpromised and underdelivered. So we built
              the agency we always wished existed.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed">
              Today, SSGroupTech powers businesses across manufacturing, retail, services, and
              ecommerce — with software that&apos;s fast, reliable, and built to last.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {milestones.map((m) => (
              <div key={m.label} className="glass rounded-2xl p-6 text-center">
                <div className="text-3xl font-display font-bold text-gradient">{m.value}</div>
                <div className="text-sm text-[var(--text-muted)] mt-1">{m.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
