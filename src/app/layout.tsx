import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WeLearnWeShare - Learn Together. Grow Together.',
  description: 'Community-powered courses taught by industry experts — fees fall as more students join. Start learning, build projects, and get listed on our talent portal.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

