import Link from 'next/link'
import { GitBranch, Globe, Link as LinkIcon, Share2, Mail } from 'lucide-react'

const footerLinks = {
  Services: [
    { label: 'Web Development', href: '/services' },
    { label: 'AI Automation', href: '/services' },
    { label: 'ERP Systems', href: '/services' },
    { label: 'SaaS Development', href: '/services' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Refund Policy', href: '/refund' },
  ],
}

const socialLinks = [
  { Icon: Globe, href: 'https://twitter.com/ssgrouptech', label: 'Twitter' },
  { Icon: LinkIcon, href: 'https://www.linkedin.com/company/ssgrouptech', label: 'LinkedIn' },
  { Icon: GitBranch, href: 'https://github.com/shivajitiwari1', label: 'GitHub' },
  { Icon: Share2, href: 'https://www.instagram.com/ssgrouptech', label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-glass)] bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="font-display font-bold text-2xl mb-3">
              <span className="text-gradient">SS</span>
              <span className="text-[var(--text-primary)]">Group</span>
            </div>
            <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-5">
              Building tomorrow&apos;s software today. AI-first, quality-obsessed, deadline-driven.
            </p>
            <div className="flex gap-2">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg glass text-[var(--text-muted)] hover:text-[color:var(--accent-orange)] transition-colors duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-[var(--text-primary)] mb-4 text-sm">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--text-muted)] hover:text-[color:var(--accent-orange)] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[var(--border-glass)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[var(--text-muted)] text-sm">
            © {new Date().getFullYear()} SSGroupTech. All rights reserved.
          </p>
          <a
            href="mailto:ssgrouptechindia@gmail.com"
            className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[color:var(--accent-orange)] transition-colors duration-200"
          >
            <Mail size={14} />
            ssgrouptechindia@gmail.com
          </a>
        </div>
      </div>
    </footer>
  )
}
