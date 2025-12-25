import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BecomeTrainer from '@/components/BecomeTrainer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Professionals - WeLearnWeShare',
  description: 'Share your expertise, grow your impact, and earn competitive compensation while helping learners achieve their goals across diverse fields. Apply to become a trainer on WeLearnWeShare.',
  openGraph: {
    title: 'Professionals - WeLearnWeShare',
    description: 'Share your expertise, grow your impact, and earn competitive compensation while helping learners achieve their goals across diverse fields.',
    type: 'website',
    url: 'https://welearnweshare.com/professionals',
    siteName: 'WeLearnWeShare',
  },
  twitter: {
    card: 'summary',
    title: 'Professionals - WeLearnWeShare',
    description: 'Share your expertise, grow your impact, and earn competitive compensation while helping learners achieve their goals across diverse fields.',
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

