'use client'
import { competitors } from '@/data/marketData'

function ScoreBar({ value, max = 5, color }: { value: number; max?: number; color: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex gap-0.5">
        {Array.from({ length: max }).map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 rounded-sm"
            style={{ background: i < value ? color : 'rgba(255,255,255,0.1)' }}
          />
        ))}
      </div>
      <span className="text-xs" style={{ color: 'var(--navy-300)' }}>{value}</span>
    </div>
  )
}

export default function CompetitorTable() {
  return (
    <div className="rounded-xl p-5 border border-white/10" style={{ background: 'rgba(255,255,255,0.04)' }}>
      <p className="section-label mb-4">Concurrentieanalyse — top spelers</p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              {['Concurrent','Type','GINAF focus','SEO','Marketplace','Dreiging','Hemmol kans'].map(h => (
                <th key={h} className="text-left pb-3 pr-4 text-xs font-semibold" style={{ color: 'var(--navy-300)' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {competitors.map((c, i) => (
              <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }} className="hover:bg-white/5 transition-colors">
                <td className="py-3 pr-4">
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-blue-300 transition-colors text-white">
                    {c.name}
                  </a>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--navy-300)' }}>{c.country}</p>
                </td>
                <td className="py-3 pr-4 text-xs" style={{ color: 'var(--navy-200)' }}>{c.type}</td>
                <td className="py-3 pr-4"><ScoreBar value={c.ginafFocus} color="#10b981" /></td>
                <td className="py-3 pr-4"><ScoreBar value={c.seo} color="#3b82f6" /></td>
                <td className="py-3 pr-4"><ScoreBar value={c.marketplace} color="#8b5cf6" /></td>
                <td className="py-3 pr-4">
                  <span className={`text-sm font-bold ${c.threat >= 20 ? 'text-red-400' : c.threat >= 17 ? 'text-amber-400' : 'text-emerald-400'}`}>
                    {c.threat}/25
                  </span>
                </td>
                <td className="py-3 text-xs" style={{ color: 'var(--navy-200)', maxWidth: '200px' }}>{c.kans}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
