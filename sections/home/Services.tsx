'use client'
import { motion } from 'framer-motion'
import { services } from '@/data/services'
import { useInView } from '@/hooks/useInView'

export default function ServicesSection() {
  const { ref, isInView } = useInView()

  return (
    <section className="py-24 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[color:var(--accent-orange)] font-semibold text-sm uppercase tracking-widest">
            What We Do
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-[var(--text-primary)] mt-3 mb-4">
            Services Built for <span className="text-gradient">Real Results</span>
          </h2>
          <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
            Every service we offer is engineered for performance, scalability, and business growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass rounded-2xl p-6 cursor-default transition-colors duration-300 group hover:border-brand-orange/40"
              >
                <div className="w-12 h-12 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-orange/20 transition-colors duration-200">
                  <Icon size={22} className="text-brand-orange" />
                </div>
                <h3 className="font-display font-semibold text-[var(--text-primary)] mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {service.shortDesc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
