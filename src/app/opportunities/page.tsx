import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import OpportunitiesContent from '@/components/OpportunitiesContent'
import { getAllJobs } from '@/lib/markdown'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Career Opportunities',
  description: 'Discover jobs, internships, freelance opportunities, workshops & webinars—all in one place.',
  alternates: {
    canonical: 'https://www.welearnweshare.com/opportunities',
  },
  openGraph: {
    title: 'Career Opportunities - WeLearnWeShare',
    description: 'Discover jobs, internships, freelance opportunities, workshops & webinars—all in one place.',
    type: 'website',
    url: 'https://www.welearnweshare.com/opportunities',
    siteName: 'WeLearnWeShare',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Career Opportunities - WeLearnWeShare',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Career Opportunities - WeLearnWeShare',
    description: 'Discover jobs, internships, freelance opportunities, workshops & webinars—all in one place.',
    images: ['/og-image.svg'],
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


