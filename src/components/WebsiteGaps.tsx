'use client'
import { websiteGaps } from '@/data/marketData'

const severityConfig = {
  critical: { label: 'Kritiek',  bg: 'rgba(239,68,68,0.15)',   border: 'rgba(239,68,68,0.4)',   text: '#fca5a5', dot: '#ef4444' },
  high:     { label: 'Hoog',     bg: 'rgba(245,158,11,0.12)',  border: 'rgba(245,158,11,0.35)', text: '#fcd34d', dot: '#f59e0b' },
  medium:   { label: 'Medium',   bg: 'rgba(59,130,246,0.1)',   border: 'rgba(59,130,246,0.3)',  text: '#93c5fd', dot: '#3b82f6' },
}

export default function WebsiteGaps() {
  return (
    <div className="rounded-xl p-5 border border-white/10" style={{ background: 'rgba(255,255,255,0.04)' }}>
      <p className="section-label mb-2">Website & content gaps</p>
      <p className="text-xs mb-4" style={{ color: 'var(--navy-300)' }}>
        Hemmol.nl heeft 4 statische pagina's op Hostnet. Hieronder de prioriteiten om de Europese markt te bereiken.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {websiteGaps.map((gap, i) => {
          const cfg = severityConfig[gap.severity as keyof typeof severityConfig]
          return (
            <div
              key={i}
              className="rounded-lg p-3.5"
              style={{ background: cfg.bg, border: `1px solid ${cfg.border}` }}
            >
              <div className="flex items-start gap-2.5">
                <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: cfg.dot }} />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-sm font-semibold text-white">{gap.title}</p>
                    <span className="text-xs px-1.5 py-0.5 rounded" style={{ background: cfg.border, color: cfg.text, fontSize: '10px' }}>
                      {cfg.label}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--navy-100)' }}>{gap.desc}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
