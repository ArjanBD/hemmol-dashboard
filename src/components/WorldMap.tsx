'use client'
import { useEffect, useRef } from 'react'
import { countries } from '@/data/marketData'

const scoreById: Record<string, { score: number; name: string; priority: string }> = {}
countries.forEach(c => {
  scoreById[c.id] = { score: c.score, name: c.name, priority: c.priority }
})

function getColor(id: string): string {
  const c = scoreById[id]
  if (!c) return '#162F60'
  if (c.priority === 'High-risk' || c.priority === 'Watch') return '#7f1d1d'
  if (c.score >= 13) return '#065f46'
  if (c.score >= 10) return '#1e3a8a'
  if (c.score >= 7)  return '#78350f'
  return '#1F4080'
}

export default function WorldMap() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    let d3: any, topojson: any

    const loadScript = (src: string) =>
      new Promise<void>((resolve, reject) => {
        const s = document.createElement('script')
        s.src = src
        s.onload = () => resolve()
        s.onerror = reject
        document.head.appendChild(s)
      })

    async function render(container: HTMLDivElement) {
      if (!(window as any).d3) {
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js')
      }
      if (!(window as any).topojson) {
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/topojson/3.0.2/topojson.min.js')
      }
      d3 = (window as any).d3
      topojson = (window as any).topojson

      const W = container.offsetWidth || 800
      const H = Math.round(W * 0.5)

      container.innerHTML = ''

      const svg = d3.select(container)
        .append('svg')
        .attr('viewBox', `0 0 ${W} ${H}`)
        .attr('width', '100%')
        .style('display', 'block')

      svg.append('rect').attr('width', W).attr('height', H).attr('fill', '#071428').attr('rx', 8)

      const projection = d3.geoNaturalEarth1()
        .scale(W / 5.8)
        .translate([W * 0.48, H * 0.56])

      const path = d3.geoPath(projection)

      const tooltip = d3.select(container)
        .append('div')
        .style('position', 'absolute')
        .style('background', '#162F60')
        .style('border', '1px solid rgba(255,255,255,0.2)')
        .style('border-radius', '8px')
        .style('padding', '8px 12px')
        .style('font-size', '12px')
        .style('color', '#E8EDF5')
        .style('pointer-events', 'none')
        .style('opacity', '0')
        .style('transition', 'opacity 0.15s')
        .style('z-index', '10')

      const world = await d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
      const features = topojson.feature(world, world.objects.countries).features

      svg.selectAll('path')
        .data(features)
        .join('path')
        .attr('d', path)
        .attr('fill', (d: any) => getColor(String(d.id)))
        .attr('stroke', 'rgba(255,255,255,0.12)')
        .attr('stroke-width', 0.5)
        .style('cursor', (d: any) => scoreById[String(d.id)] ? 'pointer' : 'default')
        .on('mouseover', function (this: SVGPathElement, event: MouseEvent, d: any) {
          const c = scoreById[String(d.id)]
          if (!c) return
          d3.select(this).attr('opacity', 0.75)
          tooltip
            .html(`<strong style="font-size:13px">${c.name}</strong><br/>Score: <strong>${c.score}/15</strong><br/>${c.priority}`)
            .style('opacity', '1')
        })
        .on('mousemove', function (event: MouseEvent) {
          const rect = container.getBoundingClientRect()
          tooltip
            .style('left', `${event.clientX - rect.left + 12}px`)
            .style('top', `${event.clientY - rect.top - 40}px`)
        })
        .on('mouseout', function (this: SVGPathElement) {
          d3.select(this).attr('opacity', 1)
          tooltip.style('opacity', '0')
        })

      // Legend
      const legendData = [
        { color: '#065f46', label: 'Very High (≥13)' },
        { color: '#1e3a8a', label: 'High (10–12)' },
        { color: '#78350f', label: 'Medium/High (7–9)' },
        { color: '#1F4080', label: 'Medium (≤6)' },
        { color: '#7f1d1d', label: 'High-risk / Watch' },
      ]
      const legend = svg.append('g').attr('transform', `translate(12, ${H - 94})`)
      legendData.forEach((item, i) => {
        legend.append('rect').attr('x', 0).attr('y', i * 17).attr('width', 12).attr('height', 12).attr('rx', 2).attr('fill', item.color)
        legend.append('text').attr('x', 17).attr('y', i * 17 + 10).attr('fill', '#9BAED4').attr('font-size', 10).text(item.label)
      })
    }

    render(container).catch(console.error)
  }, [])

  return (
    <div className="rounded-xl p-5 border border-white/10" style={{ background: 'rgba(255,255,255,0.04)' }}>
      <p className="section-label mb-2">Europese kanskaart</p>
      <p className="text-xs mb-4" style={{ color: 'var(--navy-300)' }}>
        Gekleurd op kansscore (Calculated_Kansscore). Hover over een land voor details.
      </p>
      <div ref={ref} style={{ position: 'relative', width: '100%' }} />
    </div>
  )
}
