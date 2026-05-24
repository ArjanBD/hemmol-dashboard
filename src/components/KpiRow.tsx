'use client'
import { kpis } from '@/data/marketData'

const cards = [
  { label: 'Landen geanalyseerd', value: kpis.aantalLanden,       sub: 'Europa + CIS',          color: 'text-blue-300' },
  { label: 'Gem. kansscore',       value: kpis.gemKansscore,       sub: 'op 15-puntsschaal',     color: 'text-emerald-400' },
  { label: 'Very High prioriteit', value: kpis.veryHighLanden,     sub: 'landen direct actie',   color: 'text-emerald-400' },
  { label: 'Marketplace aanbod',   value: kpis.marketplaceAanbod,  sub: 'GINAF parts (Autoline)', color: 'text-blue-300' },
  { label: 'Concurrenten NL',      value: kpis.concurrentenNL,     sub: 'directe niche spelers', color: 'text-amber-400' },
  { label: 'Website gaps',         value: kpis.websiteGaps,        sub: 'kritieke verbeterpunten', color: 'text-red-400' },
]

export default function KpiRow() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
      {cards.map((c) => (
        <div
          key={c.label}
          className="rounded-lg p-4 border border-white/10"
          style={{ background: 'rgba(255,255,255,0.04)' }}
        >
          <p className="text-xs text-navy-200 mb-1 leading-tight">{c.label}</p>
          <p className={`text-3xl font-bold ${c.color}`} style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
            {c.value}
          </p>
          <p className="text-xs mt-1" style={{ color: 'var(--navy-300)' }}>{c.sub}</p>
        </div>
      ))}
    </div>
  )
}
