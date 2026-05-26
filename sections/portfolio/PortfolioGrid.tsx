'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '@/data/portfolio'
import { cn } from '@/lib/utils'

const filters = ['all', 'web', 'erp', 'ai', 'saas'] as const
type Filter = (typeof filters)[number]

export default function PortfolioGrid() {
  const [active, setActive] = useState<Filter>('all')

  const filtered =
    active === 'all' ? projects : projects.filter((p) => p.category === active)

  return (
    <section className="pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                'px-5 py-2 rounded-full text-sm font-medium capitalize transition-all duration-200',
                active === f
                  ? 'bg-brand-orange text-white'
                  : 'glass text-[var(--text-muted)] hover:text-[color:var(--accent-orange)]'
              )}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.25 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl overflow-hidden group"
              >
                {/* Placeholder image */}
                <div className="h-40 bg-gradient-to-br from-brand-navy/60 to-brand-orange/10 flex items-center justify-center relative">
                  <span className="font-display font-bold text-4xl text-gradient">
                    {project.title[0]}
                  </span>
                  <div className="absolute inset-0 bg-brand-orange/0 group-hover:bg-brand-orange/5 transition-colors duration-200" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className="text-xs font-semibold text-[color:var(--accent-orange)] uppercase tracking-wide">
                    {project.category}
                  </span>
                  <h3 className="font-display font-semibold text-[var(--text-primary)] mt-1 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-0.5 bg-brand-orange/10 text-[color:var(--accent-orange)] rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2">
                    <button className="flex-1 text-center text-xs py-2 glass rounded-lg text-[var(--text-muted)] hover:text-[color:var(--accent-orange)] transition-colors duration-200">
                      Live Preview
                    </button>
                    <button className="flex-1 text-center text-xs py-2 glass rounded-lg text-[var(--text-muted)] hover:text-[color:var(--accent-orange)] transition-colors duration-200">
                      Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
