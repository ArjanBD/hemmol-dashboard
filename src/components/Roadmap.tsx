'use client'
import { roadmap } from '@/data/marketData'

const phaseColors: Record<string, { bg: string; border: string; text: string; line: string }> = {
  blue:  { bg: 'rgba(59,130,246,0.15)',  border: 'rgba(59,130,246,0.5)',  text: '#93c5fd', line: '#3b82f6' },
  green: { bg: 'rgba(16,185,129,0.15)',  border: 'rgba(16,185,129,0.5)',  text: '#6ee7b7', line: '#10b981' },
  amber: { bg: 'rgba(245,158,11,0.12)',  border: 'rgba(245,158,11,0.4)',  text: '#fcd34d', line: '#f59e0b' },
  red:   { bg: 'rgba(239,68,68,0.12)',   border: 'rgba(239,68,68,0.4)',   text: '#fca5a5', line: '#ef4444' },
}

const phaseLabels: Record<string, string> = {
  'Fase 1': 'Fase 1 — Quick Wins',
  'Fase 2': 'Fase 2 — Oost-Europa',
  'Fase 3': 'Fase 3 — Content Authority',
  'Fase 4': 'Fase 4 — CIS Watch',
}

export default function Roadmap() {
  const grouped = roadmap.reduce((acc, item) => {
    if (!acc[item.phase]) acc[item.phase] = []
    acc[item.phase].push(item)
    return acc
  }, {} as Record<string, typeof roadmap>)

  return (
    <div className="rounded-xl p-5 border border-white/10" style={{ background: 'rgba(255,255,255,0.04)' }}>
      <p className="section-label mb-2">Actie roadmap</p>
      <p className="text-xs mb-6" style={{ color: 'var(--navy-300)' }}>
        Geprioriteerd actieplan van quick wins naar internationale schaal.
      </p>
      <div className="space-y-6">
        {Object.entries(grouped).map(([phase, items]) => {
          const color = phaseColors[items[0].phaseColor]
          return (
            <div key={phase}>
              <div
                className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-3"
                style={{ background: color.bg, border: `1px solid ${color.border}`, color: color.text }}
              >
                {phaseLabels[phase]}
              </div>
              <div className="space-y-2 pl-2" style={{ borderLeft: `2px solid ${color.line}22` }}>
                {items.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-lg p-4 ml-3 relative"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <div
                      className="absolute -left-5 top-4 w-2 h-2 rounded-full"
                      style={{ background: color.line, border: `2px solid var(--navy-900)` }}
                    />
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-white mb-1">{item.title}</p>
                        <p className="text-xs leading-relaxed" style={{ color: 'var(--navy-200)' }}>{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
