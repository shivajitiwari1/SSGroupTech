'use client'
import { motion } from 'framer-motion'
import { Bot, Zap, Shield } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

const pillars = [
  {
    icon: Bot,
    title: 'AI-First by Default',
    desc: 'Every system we build has automation and intelligence embedded from day one — not bolted on later.',
  },
  {
    icon: Zap,
    title: 'Speed Without Compromise',
    desc: 'Fast delivery cycles with zero sacrifice on code quality, security, or scalability.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    desc: "We write code we'd stake our reputation on. Clean architecture. Comprehensive docs. No tech debt.",
  },
]

export default function AboutMission() {
  const { ref, isInView } = useInView()

  return (
    <section className="py-20 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-[color:var(--accent-orange)] font-semibold text-sm uppercase tracking-widest">
            Our Mission
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-[var(--text-primary)] mt-3">
            An <span className="text-gradient">AI-First Philosophy</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15 }}
                className="glass rounded-2xl p-8 text-center"
              >
                <div className="w-14 h-14 bg-brand-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <Icon size={26} className="text-brand-orange" />
                </div>
                <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mb-3">
                  {p.title}
                </h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
