import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CommunityVoiceContent from '@/components/CommunityVoiceContent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Community Voice',
  description: 'Have a say in what gets taught! Vote in polls to decide upcoming courses and help shape the learning community. Your voice matters.',
  openGraph: {
    title: 'Community Voice - WeLearnWeShare',
    description: 'Vote in polls to decide upcoming courses and help shape the learning community.',
    type: 'website',
    url: 'https://welearnweshare.com/community-voice',
    siteName: 'WeLearnWeShare',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Community Voice - WeLearnWeShare',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Community Voice - WeLearnWeShare',
    description: 'Vote in polls to decide upcoming courses and help shape the learning community.',
    images: ['/og-image.svg'],
  },
}

export default function CommunityVoicePage() {
  return (
    <main>
      <Navigation />
      <CommunityVoiceContent />
      <Footer />
    </main>
  )
}



