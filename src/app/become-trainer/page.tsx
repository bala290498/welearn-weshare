import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BecomeTrainer from '@/components/BecomeTrainer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Become a Trainer',
  description: 'Share your expertise, grow your impact, and earn competitive compensation while helping learners achieve their goals across diverse fields. Apply to become a trainer on WeLearnWeShare.',
  alternates: {
    canonical: 'https://www.welearnweshare.com/become-trainer',
  },
  openGraph: {
    title: 'Become a Trainer - WeLearnWeShare',
    description: 'Join our community of expert trainers and help shape the next generation of learners and professionals.',
    type: 'website',
    url: 'https://www.welearnweshare.com/become-trainer',
    siteName: 'WeLearnWeShare',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Become a Trainer - WeLearnWeShare',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Become a Trainer - WeLearnWeShare',
    description: 'Join our community of expert trainers and help shape the next generation of learners and professionals.',
    images: ['/og-image.svg'],
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



