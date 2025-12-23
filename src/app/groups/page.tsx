import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import GroupsClient from '@/components/GroupsClient'
import { groups } from '@/data/groups'
import { UserPlus, MessageCircle, BookOpen, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Groups - WeLearnWeShare',
  description: 'Join micro-communities designed for shared interests, skills, and professional growth.',
  openGraph: {
    title: 'Groups - WeLearnWeShare',
    description: 'Join micro-communities designed for shared interests, skills, and professional growth.',
    type: 'website',
    url: 'https://welearnweshare.com/groups',
    siteName: 'WeLearnWeShare',
  },
  twitter: {
    card: 'summary',
    title: 'Groups - WeLearnWeShare',
    description: 'Join micro-communities designed for shared interests, skills, and professional growth.',
  },
}

export default function GroupsPage() {

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="text-center space-y-6 md:space-y-8">
            <p className="text-[clamp(1.25rem,3vw,2rem)] text-primary-600 font-semibold">
              Find Your People
            </p>
            <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join micro-communities designed for shared interests, skills, and professional growth.
            </p>
            {/* CTA Button */}
            <div className="flex justify-center pt-4 md:pt-6">
              <a
                href="#groups"
                className="bg-primary-600 text-white px-8 py-3 md:px-10 md:py-4 text-base md:text-lg rounded-xl shadow-lg hover:bg-primary-700 transition font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 min-w-[200px] text-center"
                aria-label="Explore all groups"
              >
                Explore All Groups
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-center text-gray-900 mb-8 md:mb-12">
            How It Works
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            {/* Step 1: Join */}
            <div className="flex flex-col items-center text-center flex-1 max-w-[280px]">
              <div className="bg-primary-600 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-lg">
                <UserPlus className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Join</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Find your learning circle.
              </p>
            </div>

            {/* Arrow 1 */}
            <div className="hidden md:block text-primary-600 flex-shrink-0">
              <ArrowRight className="w-8 h-8" />
            </div>
            <div className="md:hidden text-primary-600 rotate-90 my-2">
              <ArrowRight className="w-8 h-8" />
            </div>

            {/* Step 2: Discuss */}
            <div className="flex flex-col items-center text-center flex-1 max-w-[280px]">
              <div className="bg-primary-600 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-lg">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discuss</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Ideas flow freely.
              </p>
            </div>

            {/* Arrow 2 */}
            <div className="hidden md:block text-primary-600 flex-shrink-0">
              <ArrowRight className="w-8 h-8" />
            </div>
            <div className="md:hidden text-primary-600 rotate-90 my-2">
              <ArrowRight className="w-8 h-8" />
            </div>

            {/* Step 3: Learn */}
            <div className="flex flex-col items-center text-center flex-1 max-w-[280px]">
              <div className="bg-primary-600 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-lg">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Learn</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Skills grow naturally.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="groups" className="py-6 md:py-10 px-4 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <GroupsClient groups={groups} />
        </div>
      </section>

      <Footer />
    </main>
  )
}

