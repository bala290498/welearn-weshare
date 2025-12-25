import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Professionals - WeLearnWeShare',
  description: 'Connect with working professionals and industry experts.',
  openGraph: {
    title: 'Professionals - WeLearnWeShare',
    description: 'Connect with working professionals and industry experts.',
    type: 'website',
    url: 'https://welearnweshare.com/professionals',
    siteName: 'WeLearnWeShare',
  },
  twitter: {
    card: 'summary',
    title: 'Professionals - WeLearnWeShare',
    description: 'Connect with working professionals and industry experts.',
  },
}

export default function ProfessionalsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="text-center space-y-6 md:space-y-8">
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-semibold text-gray-900">
              Working Professionals
            </h1>
            <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Connect with experienced professionals and industry experts who bring real-world expertise to every session.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="text-center">
            <p className="text-lg text-gray-600">
              This page is under development. Coming soon!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

