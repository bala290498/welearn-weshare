import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import OpportunitiesContent from '@/components/OpportunitiesContent'
import { getAllJobs } from '@/lib/markdown'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Career Opportunities - WeLearnWeShare',
  description: 'Discover jobs, internships, freelance opportunities, workshops & webinars—all in one place.',
  openGraph: {
    title: 'Career Opportunities - WeLearnWeShare',
    description: 'Discover jobs, internships, freelance opportunities, workshops & webinars—all in one place.',
    type: 'website',
    url: 'https://welearnweshare.com/opportunities',
    siteName: 'WeLearnWeShare',
  },
  twitter: {
    card: 'summary',
    title: 'Career Opportunities - WeLearnWeShare',
    description: 'Discover jobs, internships, freelance opportunities, workshops & webinars—all in one place.',
  },
}

export default function OpportunitiesPage() {
  const jobs = getAllJobs()
  
  return (
    <main className="min-h-screen">
      <Navigation />
      <OpportunitiesContent jobs={jobs} />
      <Footer />
    </main>
  )
}


