import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CommunityVoiceContent from '@/components/CommunityVoiceContent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Community Voice - WeLearnWeShare',
  description: 'Have a say in what gets taught! Vote in polls to decide upcoming courses and help shape the learning community. Your voice matters.',
  openGraph: {
    title: 'Community Voice - WeLearnWeShare',
    description: 'Vote in polls to decide upcoming courses and help shape the learning community.',
    type: 'website',
    url: 'https://welearnweshare.com/community-voice',
    siteName: 'WeLearnWeShare',
  },
  twitter: {
    card: 'summary',
    title: 'Community Voice - WeLearnWeShare',
    description: 'Vote in polls to decide upcoming courses and help shape the learning community.',
  },
}

export default function CommunityVoicePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <CommunityVoiceContent />
      <Footer />
    </main>
  )
}



