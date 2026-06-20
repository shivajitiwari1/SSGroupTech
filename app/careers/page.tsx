import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Careers | Join SSGroupTech — Work on AI & Web Projects',
  description: 'Join SSGroupTech. We are looking for talented developers, designers, and AI engineers to work on exciting software projects worldwide.',
  alternates: { canonical: 'https://ssgrouptech.com/careers' },
}

const openRoles = [
  {
    title: 'Full-Stack Developer (Next.js)',
    type: 'Remote · Full-time / Contract',
    desc: 'Build modern web applications using Next.js 15, TypeScript, and Node.js. Experience with PostgreSQL or MongoDB preferred.',
    skills: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'REST APIs'],
  },
  {
    title: 'AI/ML Integration Engineer',
    type: 'Remote · Contract',
    desc: 'Integrate AI capabilities into client products using OpenAI, LangChain, and custom ML pipelines. Strong Python and API experience required.',
    skills: ['Python', 'OpenAI API', 'LangChain', 'FastAPI', 'REST APIs'],
  },
  {
    title: 'UI/UX Designer',
    type: 'Remote · Part-time / Contract',
    desc: 'Design intuitive, beautiful interfaces for web apps and ERP systems. Figma expertise required. Motion design experience a plus.',
    skills: ['Figma', 'UI Design', 'Prototyping', 'Design Systems'],
  },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16">
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-widest">We&apos;re Hiring</span>
          <h1 className="text-5xl font-display font-bold text-[var(--text-primary)] mt-3 mb-6">
            Build the Future <span className="text-gradient">With Us</span>
          </h1>
          <p className="text-[var(--text-muted)] text-lg leading-relaxed max-w-2xl">
            SSGroupTech is a remote-first software agency working with clients across India, USA, UK, and UAE.
            We build ERP systems, AI-powered tools, SaaS platforms, and high-performance web applications.
            If you love solving real business problems with clean code, we want to hear from you.
          </p>
        </div>

        {/* Why Join */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            { title: '100% Remote', desc: 'Work from anywhere in the world. Flexible hours, async-friendly culture.' },
            { title: 'Real Projects', desc: 'Work on live products used by real businesses — not demo apps.' },
            { title: 'Grow Fast', desc: 'Small team means big responsibility. You ship, you learn, you grow.' },
          ].map((perk) => (
            <div key={perk.title} className="glass rounded-2xl p-6">
              <h3 className="font-display font-bold text-[var(--text-primary)] mb-2">{perk.title}</h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">{perk.desc}</p>
            </div>
          ))}
        </div>

        {/* Open Roles */}
        <h2 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-8">Open Positions</h2>
        <div className="space-y-5 mb-16">
          {openRoles.map((role) => (
            <div key={role.title} className="glass rounded-2xl p-7">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
                <div>
                  <h3 className="font-display font-bold text-xl text-[var(--text-primary)]">{role.title}</h3>
                  <span className="text-brand-orange text-sm font-medium">{role.type}</span>
                </div>
                <a
                  href={`mailto:ssgrouptechindia@gmail.com?subject=Application: ${encodeURIComponent(role.title)}`}
                  className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-deep text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors flex-shrink-0"
                >
                  Apply Now
                </a>
              </div>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4">{role.desc}</p>
              <div className="flex flex-wrap gap-2">
                {role.skills.map((skill) => (
                  <span key={skill} className="text-xs bg-brand-orange/10 text-brand-orange px-3 py-1 rounded-full border border-brand-orange/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* General Application */}
        <div className="glass rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-3">Don&apos;t See Your Role?</h2>
          <p className="text-[var(--text-muted)] mb-6">
            We&apos;re always open to talented people. Send us your CV and tell us how you&apos;d contribute.
          </p>
          <a
            href="mailto:ssgrouptechindia@gmail.com?subject=General Application — SSGroupTech"
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-deep text-white font-semibold px-8 py-3 rounded-xl transition-colors"
          >
            Send Your CV
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border-glass)]">
          <Link href="/" className="text-brand-orange hover:underline text-sm">← Back to Home</Link>
        </div>
      </div>
    </div>
  )
}
