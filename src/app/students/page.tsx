import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import TalentContent from '@/components/TalentContent'
import JoinCommunityButton from '@/components/JoinCommunityButton'
import { getAllStudents } from '@/data/students'
import { ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Students - WeLearnWeShare',
  description: 'Find real talent, Not just resumes. Discover top performers from our community.',
  openGraph: {
    title: 'Students - WeLearnWeShare',
    description: 'Find real talent, Not just resumes. Discover top performers from our community.',
    type: 'website',
    url: 'https://welearnweshare.com/students',
    siteName: 'WeLearnWeShare',
  },
  twitter: {
    card: 'summary',
    title: 'Students - WeLearnWeShare',
    description: 'Find real talent, Not just resumes. Discover top performers from our community.',
  },
}

export default function TalentPage() {
  const allStudents = getAllStudents()
  
  // Group students by category
  const studentsByCategory = allStudents.reduce((acc, student) => {
    const category = student.category
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(student)
    return acc
  }, {} as Record<string, typeof allStudents>)

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="text-center space-y-6 md:space-y-8">
            <p className="text-[clamp(1.25rem,3vw,2rem)] text-primary-600 font-semibold">
              Find real talent, Not just resumes.
            </p>
            <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover top performers from our community. These talents have proven their skills through regular in-house challenges and tasks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <a
                href="#talent-content"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 md:px-8 md:py-4 text-base md:text-lg rounded-xl shadow-lg hover:bg-primary-700 transition font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
              >
                Browse Students
                <ArrowRight className="w-5 h-5" />
              </a>
              <JoinCommunityButton className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 border-2 border-primary-600 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg rounded-xl shadow-lg hover:bg-primary-50 transition font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2">
                Join Community
                <ArrowRight className="w-5 h-5" />
              </JoinCommunityButton>
            </div>
          </div>
        </div>
      </section>

      {/* Talent Content Section */}
      <section id="talent-content" className="py-6 md:py-10 px-4 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <TalentContent studentsByCategory={studentsByCategory} />
        </div>
      </section>

      {/* CTA Section */}
      <section id="join" className="py-12 md:py-16 px-4 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 max-w-screen-lg text-center space-y-6 md:space-y-8">
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-semibold">
            Ready to Join Our Community?
          </h2>
          <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-primary-100 max-w-2xl mx-auto leading-relaxed">
            Connect with top performers, learn from working professionals, and grow your skills in a supportive community environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <JoinCommunityButton className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 md:px-10 md:py-4 text-base md:text-lg rounded-xl shadow-lg hover:bg-primary-50 transition font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-600">
              Join Community
              <ArrowRight className="w-5 h-5" />
            </JoinCommunityButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


