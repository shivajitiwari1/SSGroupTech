'use client'
import { motion } from 'framer-motion'
import { Rocket, Brain, Layers, Headphones } from 'lucide-react'
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter'
import { useInView } from '@/hooks/useInView'

const stats = [
  { target: 50, suffix: '+', label: 'Projects Delivered' },
  { target: 30, suffix: '+', label: 'Happy Clients' },
  { target: 5, suffix: '+', label: 'Years Experience' },
  { target: 99, suffix: '%', label: 'Uptime Guaranteed' },
]

const values = [
  {
    icon: Rocket,
    title: 'Fast Delivery',
    desc: 'We ship on time. Every time. No excuses, no delays.',
  },
  {
    icon: Brain,
    title: 'AI-First Thinking',
    desc: 'Every solution is designed with automation and intelligence at its core.',
  },
  {
    icon: Layers,
    title: 'Full-Stack Expertise',
    desc: 'From database schema to pixel-perfect UI — we own the entire stack.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    desc: 'Post-launch support that actually responds within hours, not days.',
  },
]

function StatCounter({
  target,
  suffix,
  label,
}: {
  target: number
  suffix: string
  label: string
}) {
  const { count, ref } = useAnimatedCounter(target)
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl lg:text-5xl font-display font-bold text-gradient">
        {count}
        {suffix}
      </div>
      <div className="text-[var(--text-muted)] text-sm mt-1">{label}</div>
    </div>
  )
}

export default function WhyUs() {
  const { ref, isInView } = useInView()

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[color:var(--accent-orange)] font-semibold text-sm uppercase tracking-widest">
            Why SSGroupTech
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-[var(--text-primary)] mt-3">
            Numbers That <span className="text-gradient">Speak For Us</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
            >
              <StatCounter target={s.target} suffix={s.suffix} label={s.label} />
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={20} className="text-brand-orange" />
                </div>
                <h3 className="font-display font-semibold text-[var(--text-primary)] mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{v.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
