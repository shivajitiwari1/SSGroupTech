'use client'
import { motion } from 'framer-motion'
import { useInView } from '@/hooks/useInView'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    desc: 'We learn your business, goals, and technical requirements inside out.',
  },
  {
    number: '02',
    title: 'Design',
    desc: 'Wireframes, UI design, and architecture planning before a single line of code.',
  },
  {
    number: '03',
    title: 'Develop',
    desc: 'Agile sprints with weekly demos so you see progress at every stage.',
  },
  {
    number: '04',
    title: 'Test',
    desc: 'Rigorous QA across devices, browsers, and real user scenarios.',
  },
  {
    number: '05',
    title: 'Launch',
    desc: 'Seamless deployment with zero downtime and full handover documentation.',
  },
]

export default function Process() {
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
            Our Process
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-[var(--text-primary)] mt-3">
            How We <span className="text-gradient">Deliver Excellence</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="text-center relative"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full border-2 border-brand-orange flex items-center justify-center glow-orange">
                <span className="font-display font-bold text-[color:var(--accent-orange)] text-sm">
                  {step.number}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-[calc(50%+28px)] right-[calc(-50%+28px)] h-[2px] bg-gradient-to-r from-brand-orange/50 to-transparent" />
              )}
              <h3 className="font-display font-semibold text-[var(--text-primary)] mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
