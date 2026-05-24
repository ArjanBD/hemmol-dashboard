'use client'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { regions } from '@/data/marketData'

const sorted = [...regions].sort((a, b) => b.gemScore - a.gemScore)

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload?.length) {
    const d = payload[0].payload
    return (
      <div className="rounded-lg p-3 text-sm border border-white/20" style={{ background: 'var(--navy-700)' }}>
        <p className="font-semibold text-white">{d.name}</p>
        <p style={{ color: '#93c5fd' }}>Gem. score: <strong>{d.gemScore}</strong></p>
        <p className="text-xs mt-1" style={{ color: 'var(--navy-200)' }}>{d.landen.join(', ')}</p>
      </div>
    )
  }
  return null
}

function getColor(score: number) {
  if (score >= 12) return '#10b981'
  if (score >= 9)  return '#3b82f6'
  if (score >= 7)  return '#f59e0b'
  return '#6b7280'
}

export default function RegionChart() {
  return (
    <div className="rounded-xl p-5 border border-white/10" style={{ background: 'rgba(255,255,255,0.04)' }}>
      <p className="section-label mb-4">Gemiddelde kansscore per regio</p>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={sorted} margin={{ left: -10, right: 10, top: 0, bottom: 40 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" vertical={false} />
          <XAxis dataKey="name" tick={{ fill: '#9BAED4', fontSize: 10 }} axisLine={false} tickLine={false} angle={-35} textAnchor="end" interval={0} />
          <YAxis domain={[0, 15]} tick={{ fill: '#9BAED4', fontSize: 11 }} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
          <Bar dataKey="gemScore" radius={[4, 4, 0, 0]} maxBarSize={40}>
            {sorted.map((entry, i) => (
              <Cell key={i} fill={getColor(entry.gemScore)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
