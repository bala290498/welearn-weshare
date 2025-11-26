import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SkillBuildingClient from '@/components/SkillBuildingClient'
import { getAllCourses } from '@/lib/markdown'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skill Building Courses - WeLearnWeShare',
  description: 'Discover comprehensive courses designed to help you master in-demand skills and advance your career. Dynamic group pricing - price drops as more students join.',
  openGraph: {
    title: 'Skill Building Courses - WeLearnWeShare',
    description: 'Discover comprehensive courses designed to help you master in-demand skills and advance your career. Dynamic group pricing - price drops as more students join.',
    type: 'website',
    url: 'https://welearnweshare.com/skill-building',
    siteName: 'WeLearnWeShare',
  },
  twitter: {
    card: 'summary',
    title: 'Skill Building Courses - WeLearnWeShare',
    description: 'Discover comprehensive courses designed to help you master in-demand skills and advance your career.',
  },
}

export default function SkillBuildingPage() {
  const courses = getAllCourses()
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="py-6 md:py-10 px-4 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="text-center space-y-4 md:space-y-6">
            <h1 className="text-[clamp(1.75rem,4vw,3.5rem)] font-bold text-gray-900">
              Skill Building
            </h1>
            <p className="text-[clamp(1rem,2.5vw,1.5rem)] text-primary-600 font-semibold">
              Build Your Skills. Build Your Future.
            </p>
            <p className="text-[clamp(0.875rem,2vw,1.125rem)] text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover comprehensive courses designed to help you master in-demand skills and advance your career.
            </p>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-10 px-4 bg-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <SkillBuildingClient courses={courses} />
        </div>
      </section>

      <Footer />
    </main>
  )
}

