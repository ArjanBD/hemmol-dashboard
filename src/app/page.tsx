'use client'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import KpiRow from '@/components/KpiRow'
import TopCountriesChart from '@/components/TopCountriesChart'
import RiskScatterChart from '@/components/RiskScatterChart'
import RegionChart from '@/components/RegionChart'
import CompetitorTable from '@/components/CompetitorTable'
import WebsiteGaps from '@/components/WebsiteGaps'
import SeoKeywords from '@/components/SeoKeywords'
import Roadmap from '@/components/Roadmap'
import CountryTable from '@/components/CountryTable'

const WorldMap = dynamic(() => import('@/components/WorldMap'), { ssr: false })

const tabs = [
  { id: 'overview',     label: 'Overzicht' },
  { id: 'countries',    label: 'Landen & Kaart' },
  { id: 'competition',  label: 'Concurrentie' },
  { id: 'seo',          label: 'SEO & Gaps' },
  { id: 'roadmap',      label: 'Roadmap' },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div style={{ minHeight: '100vh', background: 'var(--navy-900)' }}>
      <Header />

      <nav
        className="sticky top-16 z-40 flex gap-1 px-6 py-3 border-b border-white/10 overflow-x-auto"
        style={{ background: 'rgba(7,20,40,0.9)', backdropFilter: 'blur(12px)' }}
      >
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="text-sm px-4 py-2 rounded-lg whitespace-nowrap transition-all font-medium"
            style={{
              background: activeTab === tab.id ? 'var(--navy-600)' : 'transparent',
              color: activeTab === tab.id ? '#fff' : 'var(--navy-300)',
              border: activeTab === tab.id ? '1px solid rgba(255,255,255,0.2)' : '1px solid transparent',
            }}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <main className="px-6 py-8 max-w-screen-xl mx-auto">

        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-white mb-1" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                Hemmol.nl — Strategische Marktanalyse
              </h1>
              <p style={{ color: 'var(--navy-200)' }} className="text-sm max-w-2xl">
                Directional market intelligence voor GINAF onderdelen in Europa. Gebaseerd op Google Trends, marketplace-validatie en concurrentie-observaties. Scores zijn strategische kansen, geen officiële marktaandelen.
              </p>
            </div>
            <KpiRow />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <TopCountriesChart />
              <RiskScatterChart />
            </div>
            <RegionChart />
          </div>
        )}

        {activeTab === 'countries' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                Landen & Kanskaart
              </h2>
              <p className="text-sm" style={{ color: 'var(--navy-200)' }}>
                26 landen geanalyseerd op zoekinteresse, marketplace-activiteit, concurrentiedruk en operationeel risico.
              </p>
            </div>
            <WorldMap />
            <CountryTable />
          </div>
        )}

        {activeTab === 'competition' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                Concurrentieanalyse
              </h2>
              <p className="text-sm" style={{ color: 'var(--navy-200)' }}>
                Directe en indirecte spelers geanalyseerd op GINAF-focus, SEO-kracht en marketplace-aanwezigheid. Scores zijn strategische indrukken op basis van publieke data.
              </p>
            </div>
            <CompetitorTable />
            <div
              className="rounded-xl p-5 border border-white/10"
              style={{ background: 'rgba(16,185,129,0.06)', borderColor: 'rgba(16,185,129,0.2)' }}
            >
              <p className="section-label mb-3" style={{ color: '#6ee7b7' }}>Hemmol strategische positie</p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--navy-100)' }}>
                Geen enkele concurrent combineert <strong className="text-white">GINAF-specialisme</strong> met{' '}
                <strong className="text-white">Engelstalige SEO</strong>, een{' '}
                <strong className="text-white">OEM-nummerdatabase</strong> als productpagina's en{' '}
                <strong className="text-white">Oost-Europese taaldekking</strong>. Dat is de opening.
                De markt is digitaal versnipperd — platforms domineren op bereik, maar niemand domineert op specialistische GINAF-autoriteit.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'seo' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                SEO-kansen & Website Gaps
              </h2>
              <p className="text-sm" style={{ color: 'var(--navy-200)' }}>
                Zoekwoordclusters met de hoogste commerciële intentie, plus de kritieke verbeterpunten voor hemmol.nl.
              </p>
            </div>
            <WebsiteGaps />
            <SeoKeywords />
          </div>
        )}

        {activeTab === 'roadmap' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                Actie Roadmap
              </h2>
              <p className="text-sm" style={{ color: 'var(--navy-200)' }}>
                Geprioriteerd actieplan in 4 fases: van quick wins op de bestaande site naar internationale schaal in Oost-Europa en CIS.
              </p>
            </div>
            <Roadmap />
          </div>
        )}

      </main>

      <footer
        className="mt-16 px-6 py-6 border-t border-white/10 text-center text-xs"
        style={{ color: 'var(--navy-400)' }}
      >
        Hemmol Marktanalyse Dashboard · Directional market intelligence, geen officiële marktaandelen
      </footer>
    </div>
  )
}
