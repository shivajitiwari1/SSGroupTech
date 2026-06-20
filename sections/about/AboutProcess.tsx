'use client'
import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'

const steps = [
  {
    icon: '🔍',
    ariaLabel: 'Discovery',
    title: 'Consult',
    desc: 'Deep-dive into your business, challenges, and goals. We ask the questions others skip.',
  },
  {
    icon: '⚡',
    ariaLabel: 'Rapid Development',
    title: 'Craft',
    desc: 'Design-first development with regular demos. You see the product taking shape from week one.',
  },
  {
    icon: '🚀',
    ariaLabel: 'Launch',
    title: 'Deliver',
    desc: 'On-time launch with full documentation, training, and post-launch support built in.',
  },
]

export default function AboutProcess() {
  const { ref, isInView } = useInView()

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-[color:var(--accent-orange)] font-semibold text-sm uppercase tracking-widest">
            How We Work
          </span>
          <h2 className="text-4xl font-display font-bold text-[var(--text-primary)] mt-3">
            Simple. <span className="text-gradient">Effective. Reliable.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2 }}
              className="text-center glass rounded-2xl p-8"
            >
              <div className="text-5xl mb-5" role="img" aria-label={s.ariaLabel}>{s.icon}</div>
              <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mb-3">
                {s.title}
              </h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
