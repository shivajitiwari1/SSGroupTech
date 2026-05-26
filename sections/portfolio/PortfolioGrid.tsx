'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import BrowserFrame from '@/components/BrowserFrame'
import { projects } from '@/data/portfolio'
import { cn } from '@/lib/utils'

const filters = ['all', 'web', 'erp', 'ai', 'saas'] as const
type Filter = (typeof filters)[number]

const categoryColors: Record<string, string> = {
  web: 'from-brand-navy/60 to-blue-900/20',
  erp: 'from-brand-navy/60 to-brand-orange/15',
  ai: 'from-purple-900/40 to-brand-orange/10',
  saas: 'from-teal-900/40 to-brand-navy/40',
}

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
              {f === 'all' ? 'All' : f === 'erp' ? 'ERP' : f === 'ai' ? 'AI' : f === 'saas' ? 'SaaS' : 'Web'}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                {/* Browser frame thumbnail */}
                <BrowserFrame
                  src={project.imageUrl}
                  alt={project.title}
                  url={project.liveUrl ?? '#'}
                  category={project.category}
                />

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display font-semibold text-[var(--text-primary)] mb-2">
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
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 text-xs py-2 bg-brand-orange text-white rounded-lg font-medium hover:bg-brand-deep transition-colors duration-200"
                      >
                        <ExternalLink size={12} />
                        Live Preview
                      </a>
                    ) : (
                      <span className="flex-1 text-center text-xs py-2 glass rounded-lg text-[var(--text-dim)]">
                        Coming Soon
                      </span>
                    )}
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
