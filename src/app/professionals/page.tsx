import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BecomeTrainer from '@/components/BecomeTrainer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Professionals',
  description: 'Share your expertise, grow your impact, and earn competitive compensation while helping learners achieve their goals across diverse fields. Apply to become a trainer on WeLearnWeShare.',
  alternates: {
    canonical: 'https://www.welearnweshare.com/professionals',
  },
  openGraph: {
    title: 'Professionals - WeLearnWeShare',
    description: 'Share your expertise, grow your impact, and earn competitive compensation while helping learners achieve their goals across diverse fields.',
    type: 'website',
    url: 'https://www.welearnweshare.com/professionals',
    siteName: 'WeLearnWeShare',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Professionals - WeLearnWeShare',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professionals - WeLearnWeShare',
    description: 'Share your expertise, grow your impact, and earn competitive compensation while helping learners achieve their goals across diverse fields.',
    images: ['/og-image.svg'],
  },
}

export default function ProfessionalsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <BecomeTrainer />
      <Footer />
    </main>
  )
}

