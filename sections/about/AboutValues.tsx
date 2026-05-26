'use client'
import { motion } from 'framer-motion'
import { Lightbulb, Award, Timer, Handshake } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

const values = [
  { icon: Lightbulb, title: 'Innovation', desc: 'We never stop exploring better ways to solve problems.' },
  { icon: Award, title: 'Quality', desc: 'Good enough is never good enough. We ship excellence.' },
  { icon: Timer, title: 'Speed', desc: "We move fast without breaking things. Or your trust." },
  { icon: Handshake, title: 'Partnership', desc: 'Your success is the only metric we track.' },
]

export default function AboutValues() {
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
            Our Values
          </span>
          <h2 className="text-4xl font-display font-bold text-[var(--text-primary)] mt-3">
            What We <span className="text-gradient">Stand For</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-7 text-center hover:border-brand-orange/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-brand-orange" />
                </div>
                <h3 className="font-display font-semibold text-[var(--text-primary)] mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-[var(--text-muted)]">{v.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
