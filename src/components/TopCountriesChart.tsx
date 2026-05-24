'use client'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { countries } from '@/data/marketData'

const top10 = [...countries]
  .sort((a, b) => b.score - a.score)
  .slice(0, 10)
  .map(c => ({ name: c.iso, score: c.score, priority: c.priority, fullName: c.name }))

function getBarColor(priority: string) {
  if (priority === 'Very High') return '#10b981'
  if (priority === 'High')      return '#3b82f6'
  if (priority === 'High-risk') return '#ef4444'
  return '#6b7280'
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload?.length) {
    const d = payload[0].payload
    return (
      <div className="rounded-lg p-3 text-sm border border-white/20" style={{ background: 'var(--navy-700)' }}>
        <p className="font-semibold text-white">{d.fullName}</p>
        <p style={{ color: '#93c5fd' }}>Score: <strong>{d.score}/15</strong></p>
        <p style={{ color: 'var(--navy-200)' }}>{d.priority}</p>
      </div>
    )
  }
  return null
}

export default function TopCountriesChart() {
  return (
    <div className="rounded-xl p-5 border border-white/10 h-full" style={{ background: 'rgba(255,255,255,0.04)' }}>
      <p className="section-label mb-4">Top 10 landen — kansscore</p>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={top10} layout="vertical" margin={{ left: 0, right: 20, top: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" horizontal={false} />
          <XAxis type="number" domain={[0, 16]} tick={{ fill: '#9BAED4', fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis dataKey="name" type="category" tick={{ fill: '#C5D0E6', fontSize: 12, fontWeight: 600 }} axisLine={false} tickLine={false} width={28} />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
          <Bar dataKey="score" radius={[0, 4, 4, 0]} maxBarSize={22}>
            {top10.map((entry, i) => (
              <Cell key={i} fill={getBarColor(entry.priority)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="flex flex-wrap gap-3 mt-3">
        {[['Very High','#10b981'],['High','#3b82f6'],['High-risk','#ef4444']].map(([label, color]) => (
          <span key={label} className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--navy-200)' }}>
            <span className="w-2.5 h-2.5 rounded-sm inline-block" style={{ background: color }}></span>
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}
