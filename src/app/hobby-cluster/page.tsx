import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import HobbyClusterClient from '@/components/HobbyClusterClient'
import { getAllHobbyClusters } from '@/lib/markdown'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hobby Cluster - WeLearnWeShare',
  description: 'Explore your passions and hobbies with like-minded learners in our community-driven hobby clusters. Micro-communities within the club based on interests or professions.',
  openGraph: {
    title: 'Hobby Cluster - WeLearnWeShare',
    description: 'Explore your passions and hobbies with like-minded learners in our community-driven hobby clusters.',
    type: 'website',
    url: 'https://welearnweshare.com/hobby-cluster',
    siteName: 'WeLearnWeShare',
  },
  twitter: {
    card: 'summary',
    title: 'Hobby Cluster - WeLearnWeShare',
    description: 'Explore your passions and hobbies with like-minded learners in our community-driven hobby clusters.',
  },
}

export default function HobbyClusterPage() {
  const hobbyClusters = getAllHobbyClusters()

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="py-6 md:py-10 px-4 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="text-center space-y-4 md:space-y-6">
            <h1 className="text-[clamp(1.75rem,4vw,3.5rem)] font-bold text-gray-900">
              Hobby Cluster
            </h1>
            <p className="text-[clamp(1rem,2.5vw,1.5rem)] text-primary-600 font-semibold">
              Learn for the Love of It
            </p>
            <p className="text-[clamp(0.875rem,2vw,1.125rem)] text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore your passions and hobbies with like-minded learners in our community-driven hobby clusters. Micro-communities within the club based on interests or professions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-10 px-4 bg-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <HobbyClusterClient clusters={hobbyClusters} />
        </div>
      </section>

      <Footer />
    </main>
  )
}


