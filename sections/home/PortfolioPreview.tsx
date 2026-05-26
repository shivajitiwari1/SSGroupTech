'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { projects } from '@/data/portfolio'
import { useInView } from '@/hooks/useInView'

export default function PortfolioPreview() {
  const { ref, isInView } = useInView()
  const featured = projects.filter((p) => p.featured)

  return (
    <section className="py-24 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 gap-4"
        >
          <div>
            <span className="text-[color:var(--accent-orange)] font-semibold text-sm uppercase tracking-widest">
              Our Work
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-[var(--text-primary)] mt-3">
              Projects That <span className="text-gradient">Drive Results</span>
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="flex items-center gap-2 text-[color:var(--accent-orange)] font-semibold hover:gap-3 transition-all duration-200 shrink-0"
          >
            View All Projects <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl overflow-hidden group"
            >
              <div className="h-48 bg-gradient-to-br from-brand-navy/50 to-brand-orange/10 flex items-center justify-center">
                <span className="font-display font-bold text-4xl text-gradient">
                  {project.title[0]}
                </span>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-brand-orange/10 text-[color:var(--accent-orange)] rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="font-display font-semibold text-[var(--text-primary)] mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
