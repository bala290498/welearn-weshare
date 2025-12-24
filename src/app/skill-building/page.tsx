import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SkillBuildingClient from '@/components/SkillBuildingClient'
import { getAllCourses } from '@/lib/markdown'
import { TrendingDown, Award, BarChart3, FileText, Users2, Briefcase, ClipboardCheck, BookOpen } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skill Building Courses - WeLearnWeShare',
  description: 'Discover comprehensive courses designed to help you master in-demand skills and advance your career. Dynamic Group Pricing - price drops as more students join.',
  openGraph: {
    title: 'Skill Building Courses - WeLearnWeShare',
    description: 'Discover comprehensive courses designed to help you master in-demand skills and advance your career. Dynamic Group Pricing - price drops as more students join.',
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
      
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="text-center space-y-6 md:space-y-8">
            <p className="text-[clamp(1.25rem,3vw,2rem)] text-primary-600 font-semibold">
              Build Your Skills. Build Your Future.
            </p>
            <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover comprehensive courses designed to help you master in-demand skills and advance your career.
            </p>
            <div className="flex justify-center items-center pt-4">
              <a
                href="#courses"
                className="inline-flex items-center justify-center bg-primary-600 text-white px-6 py-3 md:px-8 md:py-4 text-base md:text-lg rounded-xl shadow-lg hover:bg-primary-700 transition font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
              >
                Browse Courses
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Cards Section */}
      <section className="py-6 md:py-10 px-4 bg-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-center text-gray-900 mb-8 md:mb-12">
            Features Available in Both Prime & Collective Batches
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Smarter Pricing Card */}
            <div className="bg-white border-2 border-purple-200 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Smarter Pricing</h3>
              <p className="text-sm text-gray-600">More learners, lower cost.</p>
            </div>

            {/* Top Trainers Card */}
            <div className="bg-white border-2 border-blue-200 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Top Trainers</h3>
              <p className="text-sm text-gray-600">Expert-led, community-priced.</p>
            </div>

            {/* Trainer Voting Card */}
            <div className="bg-white border-2 border-green-200 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Trainer Voting</h3>
              <p className="text-sm text-gray-600">Students control quality.</p>
            </div>

            {/* Certificates Included Card */}
            <div className="bg-white border-2 border-orange-200 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Certificates Included</h3>
              <p className="text-sm text-gray-600">Proof of completion + resources.</p>
            </div>

            {/* Strong Community Card */}
            <div className="bg-white border-2 border-pink-200 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition text-center">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users2 className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Strong Community</h3>
              <p className="text-sm text-gray-600">Mentors, peers, and support.</p>
            </div>

            {/* Hiring Pipeline Card */}
            <div className="bg-white border-2 border-indigo-200 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Hiring Pipeline</h3>
              <p className="text-sm text-gray-600">Tasks lead to interviews.</p>
            </div>

            {/* Clear Roadmap Card */}
            <div className="bg-white border-2 border-teal-200 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClipboardCheck className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Clear Roadmap</h3>
              <p className="text-sm text-gray-600">Weekly goals, real projects.</p>
            </div>

            {/* Career Mentorship Card */}
            <div className="bg-white border-2 border-amber-200 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Career Mentorship</h3>
              <p className="text-sm text-gray-600">Guidance that gets you hired.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="py-6 md:py-10 px-4 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <SkillBuildingClient courses={courses} />
        </div>
      </section>

      <Footer />
    </main>
  )
}

