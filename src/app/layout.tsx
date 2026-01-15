import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import OrganizationSchema from '@/components/schema/OrganizationSchema'
import BottomNav from '@/components/BottomNav'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-open-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.welearnweshare.com'),
  title: {
    default: 'WeLearnWeShare - Learn Together. Grow Together.',
    template: '%s | WeLearnWeShare',
  },
  description: 'Community-powered courses taught by industry experts — fees fall as more students join. Start learning, build projects, and get listed on our talent portal.',
  keywords: ['online courses', 'DevOps', 'AWS', 'Linux', 'community learning', 'dynamic pricing', 'professional training', 'skill development'],
  authors: [{ name: 'WeLearnWeShare' }],
  creator: 'WeLearnWeShare',
  publisher: 'WeLearnWeShare',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.welearnweshare.com',
    siteName: 'WeLearnWeShare',
    title: 'WeLearnWeShare - Learn Together. Grow Together.',
    description: 'Community-powered courses taught by industry experts — fees fall as more students join. Start learning, build projects, and get listed on our talent portal.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'WeLearnWeShare - Learn Together. Grow Together.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WeLearnWeShare - Learn Together. Grow Together.',
    description: 'Community-powered courses taught by industry experts — fees fall as more students join.',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={openSans.variable}>
      <body className="pt-16 md:pt-20 pb-16 md:pb-0">
        <OrganizationSchema />
        {children}
        <BottomNav />
      </body>
    </html>
  )
}

