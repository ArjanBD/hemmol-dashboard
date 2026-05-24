'use client'
import { seoKeywords } from '@/data/marketData'

const priorityConfig = {
  'Very High': { bg: 'rgba(16,185,129,0.15)', border: 'rgba(16,185,129,0.4)', text: '#6ee7b7', badge: 'rgba(16,185,129,0.25)' },
  'High':      { bg: 'rgba(59,130,246,0.12)', border: 'rgba(59,130,246,0.35)', text: '#93c5fd', badge: 'rgba(59,130,246,0.2)' },
  'Medium':    { bg: 'rgba(245,158,11,0.1)',  border: 'rgba(245,158,11,0.3)',  text: '#fcd34d', badge: 'rgba(245,158,11,0.2)' },
}

export default function SeoKeywords() {
  return (
    <div className="rounded-xl p-5 border border-white/10" style={{ background: 'rgba(255,255,255,0.04)' }}>
      <p className="section-label mb-2">SEO-kansen per cluster</p>
      <p className="text-xs mb-4" style={{ color: 'var(--navy-300)' }}>
        Zoekwoorden gegroepeerd op commerciële intentie. Blauw gemarkeerde termen hebben de hoogste koopintentie.
      </p>
      <div className="space-y-4">
        {seoKeywords.map((cluster, i) => {
          const cfg = priorityConfig[cluster.priority as keyof typeof priorityConfig]
          return (
            <div key={i} className="rounded-lg p-4" style={{ background: cfg.bg, border: `1px solid ${cfg.border}` }}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-semibold text-white">{cluster.cluster}</span>
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-medium"
                  style={{ background: cfg.badge, color: cfg.text }}
                >
                  {cluster.priority}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cluster.keywords.map((kw, j) => (
                  <span
                    key={j}
                    className="text-xs px-2.5 py-1 rounded-md font-mono"
                    style={{
                      background: j < 3 ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.06)',
                      color: j < 3 ? '#fff' : 'var(--navy-200)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
