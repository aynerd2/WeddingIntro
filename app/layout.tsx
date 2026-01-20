import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jumoke & Bankole | Valentine\'s Day 2026',
  description: 'Join us as we celebrate our love story on Valentine\'s Day 2026',
  keywords: 'wedding, jumoke, bankole, valentine\'s day, love, marriage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  )
}
