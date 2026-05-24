'use client'
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts'
import { countries } from '@/data/marketData'

type CountryPoint = {
  iso: string
  name: string
  priority: string
}

type RiskGroup = {
  x: number
  y: number
  countries: CountryPoint[]
}

const data = Array.from(
  countries.reduce((groups, country) => {
    const key = `${country.score}-${country.risk}`
    const group = groups.get(key)
    const point = { iso: country.iso, name: country.name, priority: country.priority }

    if (group) {
      group.countries.push(point)
    } else {
      groups.set(key, { x: country.score, y: country.risk, countries: [point] })
    }

    return groups
  }, new Map<string, RiskGroup>()).values()
)

function getDotColor(priority: string) {
  if (priority === 'Very High') return '#10b981'
  if (priority === 'High')      return '#3b82f6'
  if (priority === 'High-risk') return '#ef4444'
  if (priority === 'Watch')     return '#f59e0b'
  return '#6b7280'
}

function getGroupColor(points: CountryPoint[]) {
  const priorityOrder = ['High-risk', 'Watch', 'Very High', 'High']
  const groupPriority = priorityOrder.find(priority => points.some(point => point.priority === priority))
  return getDotColor(groupPriority ?? points[0].priority)
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload?.length) {
    const d = payload[0].payload as RiskGroup
    return (
      <div className="rounded-lg p-3 text-sm border border-white/20" style={{ background: 'var(--navy-700)', minWidth: '190px' }}>
        <p className="font-semibold text-white mb-1">
          {d.countries.length === 1 ? d.countries[0].name : `${d.countries.length} landen`}
        </p>
        <p style={{ color: '#93c5fd' }}>Kansscore: <strong>{d.x}/15</strong></p>
        <p style={{ color: '#fca5a5' }}>Risico: <strong>{d.y}/5</strong></p>
        <div className="mt-2 pt-2 border-t border-white/10" style={{ color: 'var(--navy-100)' }}>
          {d.countries.map(country => (
            <p key={country.iso} className="flex justify-between gap-3">
              <span><span className="font-semibold text-white">{country.iso}</span> {country.name}</span>
              <span style={{ color: '#9BAED4' }}>{country.priority}</span>
            </p>
          ))}
        </div>
      </div>
    )
  }
  return null
}

const CustomDot = (props: any) => {
  const { cx, cy, payload } = props as { cx: number; cy: number; payload: RiskGroup }
  const count = payload.countries.length
  const radius = count === 1 ? 7 : Math.min(10 + count * 2, 20)

  return (
    <g>
      <circle cx={cx} cy={cy} r={radius} fill={getGroupColor(payload.countries)} fillOpacity={0.85} stroke="rgba(255,255,255,0.35)" strokeWidth={1} />
      {count > 1 ? (
        <text x={cx} y={cy + 4} textAnchor="middle" fontSize={11} fontWeight={600} fill="#fff">{count}</text>
      ) : (
        <text x={cx + 10} y={cy + 4} fontSize={10} fill="#C5D0E6">{payload.countries[0].iso}</text>
      )}
    </g>
  )
}

export default function RiskScatterChart() {
  return (
    <div className="rounded-xl p-5 border border-white/10 h-full" style={{ background: 'rgba(255,255,255,0.04)' }}>
      <p className="section-label mb-1">Risk vs kans</p>
      <p className="text-xs mb-2" style={{ color: 'var(--navy-300)' }}>Rechtsonder = ideaal · Rechtsboven = high-risk</p>
      <p className="text-xs mb-3" style={{ color: 'var(--navy-200)' }}>Een groter bolletje groepeert landen met dezelfde score; hover voor details.</p>
      <ResponsiveContainer width="100%" height={280}>
        <ScatterChart margin={{ top: 14, right: 38, bottom: 10, left: -10 }}>
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
