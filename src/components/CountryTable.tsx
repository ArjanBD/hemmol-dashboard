'use client'
import { useState } from 'react'
import { countries } from '@/data/marketData'

const priorityOrder = ['Very High', 'High', 'Medium/High', 'Medium', 'Low/Medium', 'Watch', 'High-risk']
const priorityColors: Record<string, { bg: string; text: string }> = {
  'Very High':   { bg: 'rgba(16,185,129,0.2)',  text: '#6ee7b7' },
  'High':        { bg: 'rgba(59,130,246,0.2)',  text: '#93c5fd' },
  'Medium/High': { bg: 'rgba(245,158,11,0.15)', text: '#fcd34d' },
  'Medium':      { bg: 'rgba(107,114,128,0.2)', text: '#d1d5db' },
  'Low/Medium':  { bg: 'rgba(107,114,128,0.15)',text: '#9ca3af' },
  'Watch':       { bg: 'rgba(245,158,11,0.2)',  text: '#fbbf24' },
  'High-risk':   { bg: 'rgba(239,68,68,0.2)',   text: '#fca5a5' },
}

const regions = ['Alle regio\'s', ...Array.from(new Set(countries.map(c => c.region)))]

export default function CountryTable() {
  const [selectedRegion, setSelectedRegion] = useState("Alle regio's")
  const [sortBy, setSortBy] = useState<'score' | 'risk'>('score')

  const filtered = countries
    .filter(c => selectedRegion === "Alle regio's" || c.region === selectedRegion)
    .sort((a, b) => sortBy === 'score' ? b.score - a.score : a.risk - b.risk)

  return (
    <div className="rounded-xl p-5 border border-white/10" style={{ background: 'rgba(255,255,255,0.04)' }}>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <p className="section-label">Alle landen — detailtabel</p>
        <div className="flex flex-wrap gap-2">
          <select
            value={selectedRegion}
            onChange={e => setSelectedRegion(e.target.value)}
            className="text-xs rounded-lg px-3 py-1.5 border outline-none"
            style={{ background: 'var(--navy-800)', color: 'var(--navy-100)', borderColor: 'rgba(255,255,255,0.2)' }}
          >
            {regions.map(r => <option key={r} value={r}>{r}</option>)}
          </select>
          <div className="flex rounded-lg overflow-hidden border" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
            {(['score', 'risk'] as const).map(s => (
              <button
                key={s}
                onClick={() => setSortBy(s)}
                className="text-xs px-3 py-1.5 transition-colors"
                style={{
                  background: sortBy === s ? 'var(--navy-600)' : 'var(--navy-800)',
                  color: sortBy === s ? '#fff' : 'var(--navy-200)',
                }}
              >
                Sorteer op {s === 'score' ? 'kans' : 'risico'}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              {['Land', 'ISO', 'Regio', 'Score', 'Risico', 'Prioriteit', 'GINAF %', 'Notitie'].map(h => (
                <th key={h} className="text-left pb-3 pr-3 text-xs font-semibold whitespace-nowrap" style={{ color: 'var(--navy-300)' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((c, i) => {
              const pc = priorityColors[c.priority] || priorityColors['Medium']
              return (
                <tr
                  key={i}
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                  className="hover:bg-white/5 transition-colors"
                >
                  <td className="py-2.5 pr-3 font-medium text-white whitespace-nowrap">{c.name}</td>
                  <td className="py-2.5 pr-3">
                    <span className="text-xs font-mono font-bold" style={{ color: 'var(--navy-300)' }}>{c.iso}</span>
                  </td>
                  <td className="py-2.5 pr-3 text-xs whitespace-nowrap" style={{ color: 'var(--navy-200)' }}>{c.region}</td>
                  <td className="py-2.5 pr-3">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }}>
                        <div className="h-full rounded-full" style={{ width: `${(c.score / 15) * 100}%`, background: '#3b82f6' }} />
                      </div>
                      <span className="text-xs font-semibold text-white">{c.score}</span>
                    </div>
                  </td>
                  <td className="py-2.5 pr-3">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <div key={j} className="w-2 h-2 rounded-sm" style={{ background: j < c.risk ? '#ef4444' : 'rgba(255,255,255,0.1)' }} />
                      ))}
                    </div>
                  </td>
                  <td className="py-2.5 pr-3">
                    <span className="text-xs px-2 py-0.5 rounded-full whitespace-nowrap" style={{ background: pc.bg, color: pc.text }}>
                      {c.priority}
                    </span>
                  </td>
                  <td className="py-2.5 pr-3 text-xs" style={{ color: 'var(--navy-200)' }}>{c.ginaf}%</td>
                  <td className="py-2.5 text-xs max-w-xs" style={{ color: 'var(--navy-300)' }}>{c.note}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <p className="text-xs mt-3" style={{ color: 'var(--navy-400)' }}>{filtered.length} landen weergegeven</p>
    </div>
  )
}
