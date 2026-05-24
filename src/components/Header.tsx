export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 border-b border-white/10"
      style={{ background: 'rgba(7,20,40,0.95)', backdropFilter: 'blur(12px)' }}
    >
      <div className="flex items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span
              className="text-xs font-bold px-2 py-0.5 rounded"
              style={{ background: 'var(--accent)', color: '#000' }}
            >
              HEMMOL
            </span>
            <span className="text-sm font-semibold" style={{ color: 'var(--navy-100)', fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.05em' }}>
              MARKTANALYSE DASHBOARD
            </span>
          </div>
          <p className="text-xs mt-0.5" style={{ color: 'var(--navy-300)' }}>
            GINAF onderdelen · Strategische groeikansen Europa · mei 2026
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <a
          href="https://hemmol.nl"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs px-3 py-1.5 rounded-lg border transition-colors hover:bg-white/10"
          style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'var(--navy-200)' }}
        >
          hemmol.nl ↗
        </a>
      </div>
    </header>
  )
}
