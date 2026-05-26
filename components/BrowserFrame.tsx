import Image from 'next/image'

interface BrowserFrameProps {
  src: string
  alt: string
  url: string
  category: string
  className?: string
}

const categoryLabel: Record<string, string> = {
  web: 'Web',
  erp: 'ERP',
  ai: 'FinTech / AI',
  saas: 'SaaS',
}

const categoryColor: Record<string, string> = {
  web: 'bg-blue-500',
  erp: 'bg-orange-500',
  ai: 'bg-purple-500',
  saas: 'bg-teal-500',
}

export default function BrowserFrame({ src, alt, url, category, className = '' }: BrowserFrameProps) {
  const domain = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '')

  return (
    <div className={`rounded-xl overflow-hidden border border-white/10 shadow-2xl ${className}`}>
      {/* Browser chrome */}
      <div className="bg-[#1a1f2e] px-3 py-2 flex items-center gap-2">
        {/* Traffic lights */}
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <span className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
        {/* URL bar */}
        <div className="flex-1 bg-[#0d1117] rounded-md px-3 py-1 flex items-center gap-2 mx-2">
          <span className="text-[10px] text-[#6b7280] truncate">{domain}</span>
        </div>
        {/* Category badge */}
        <span className={`text-[10px] font-semibold text-white px-2 py-0.5 rounded-full shrink-0 ${categoryColor[category] ?? 'bg-gray-500'}`}>
          {categoryLabel[category] ?? category}
        </span>
      </div>

      {/* Screenshot */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  )
}
