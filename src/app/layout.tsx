import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hemmol — Marktanalyse Dashboard',
  description: 'Strategische markt- en concurrentieanalyse voor Hemmol GINAF onderdelen',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  )
}
