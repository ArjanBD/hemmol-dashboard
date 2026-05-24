'use client'
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts'
import { countries } from '@/data/marketData'

const data = countries.map(c => ({
  x: c.score,
  y: c.risk,
  iso: c.iso,
  name: c.name,
  priority: c.priority,
}))

function getDotColor(priority: string) {
  if (priority === 'Very High') return '#10b981'
  if (priority === 'High')      return '#3b82f6'
  if (priority === 'High-risk') return '#ef4444'
  if (priority === 'Watch')     return '#f59e0b'
  return '#6b7280'
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload?.length) {
    const d = payload[0].payload
    return (
      <div className="rounded-lg p-3 text-sm border border-white/20" style={{ background: 'var(--navy-700)' }}>
        <p className="font-semibold text-white">{d.name} ({d.iso})</p>
        <p style={{ color: '#93c5fd' }}>Kansscore: <strong>{d.x}/15</strong></p>
        <p style={{ color: '#fca5a5' }}>Risico: <strong>{d.y}/5</strong></p>
        <p style={{ color: 'var(--navy-200)' }}>{d.priority}</p>
      </div>
    )
  }
  return null
}

const CustomDot = (props: any) => {
  const { cx, cy, payload } = props
  return (
    <g>
      <circle cx={cx} cy={cy} r={6} fill={getDotColor(payload.priority)} fillOpacity={0.85} stroke="rgba(255,255,255,0.2)" strokeWidth={1} />
      <text x={cx + 8} y={cy + 4} fontSize={9} fill="#9BAED4">{payload.iso}</text>
    </g>
  )
}

export default function RiskScatterChart() {
  return (
    <div className="rounded-xl p-5 border border-white/10 h-full" style={{ background: 'rgba(255,255,255,0.04)' }}>
      <p className="section-label mb-1">Risk vs kans</p>
      <p className="text-xs mb-4" style={{ color: 'var(--navy-300)' }}>Rechtsonder = ideaal · Rechtsboven = high-risk</p>
      <ResponsiveContainer width="100%" height={280}>
        <ScatterChart margin={{ top: 10, right: 30, bottom: 10, left: -10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
          <XAxis dataKey="x" type="number" domain={[3, 16]} name="Kansscore" tick={{ fill: '#9BAED4', fontSize: 11 }} axisLine={false} tickLine={false} label={{ value: 'Kansscore →', position: 'insideBottom', offset: -4, fill: '#9BAED4', fontSize: 11 }} />
          <YAxis dataKey="y" type="number" domain={[0, 6]} name="Risico" tick={{ fill: '#9BAED4', fontSize: 11 }} axisLine={false} tickLine={false} label={{ value: 'Risico ↑', angle: -90, position: 'insideLeft', fill: '#9BAED4', fontSize: 11 }} />
          <Tooltip content={<CustomTooltip />} cursor={false} />
          <ReferenceLine x={10} stroke="rgba(255,255,255,0.12)" strokeDasharray="4 4" />
          <ReferenceLine y={3} stroke="rgba(255,255,255,0.12)" strokeDasharray="4 4" />
          <Scatter data={data} shape={<CustomDot />} />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  )
}
