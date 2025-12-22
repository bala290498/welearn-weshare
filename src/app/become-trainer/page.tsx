import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BecomeTrainer from '@/components/BecomeTrainer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Become a Trainer - WeLearnWeShare',
  description: 'Share your expertise, grow your impact, and earn competitive compensation while helping learners achieve their career goals. Apply to become a trainer on WeLearnWeShare.',
  openGraph: {
    title: 'Become a Trainer - WeLearnWeShare',
    description: 'Join our community of expert trainers and help shape the next generation of tech professionals.',
    type: 'website',
    url: 'https://welearnweshare.com/become-trainer',
    siteName: 'WeLearnWeShare',
  },
  twitter: {
    card: 'summary',
    title: 'Become a Trainer - WeLearnWeShare',
    description: 'Join our community of expert trainers and help shape the next generation of tech professionals.',
  },
}

export default function BecomeTrainerPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <BecomeTrainer />
      <Footer />
    </main>
  )
}


