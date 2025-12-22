import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import OpeningsContent from '@/components/OpeningsContent'
import { getAllJobs } from '@/lib/markdown'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Openings & Career Opportunities - WeLearnWeShare',
  description: 'Explore job openings, internships, freelance opportunities, and career roadmaps. Connect with hiring partners and advance your career.',
  openGraph: {
    title: 'Openings & Career Opportunities - WeLearnWeShare',
    description: 'Explore job openings, freelance opportunities, and career roadmaps.',
    type: 'website',
    url: 'https://welearnweshare.com/openings',
    siteName: 'WeLearnWeShare',
  },
  twitter: {
    card: 'summary',
    title: 'Openings & Career Opportunities - WeLearnWeShare',
    description: 'Explore job openings, freelance opportunities, and career roadmaps.',
  },
}

export default function OpeningsPage() {
  const jobs = getAllJobs()
  
  return (
    <main className="min-h-screen">
      <Navigation />
      <OpeningsContent jobs={jobs} />
      <Footer />
    </main>
  )
}


