import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-open-sans',
})

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
    <html lang="en" className={openSans.variable}>
      <body className="pt-16 md:pt-20">{children}</body>
    </html>
  )
}

