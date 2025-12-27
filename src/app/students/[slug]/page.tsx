import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getAllStudents, getStudentBySlug } from '@/data/students'
import { CheckCircle, Award, Linkedin, Github, Globe, Mail } from 'lucide-react'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import ShareButton from '@/components/ShareButton'

export async function generateStaticParams() {
  const students = getAllStudents()
  return students.map((student) => ({
    slug: student.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const student = getStudentBySlug(slug)
  
  if (!student) {
    return {
      title: 'Student Not Found - WeLearnWeShare',
    }
  }

  const description = `Meet ${student.name}, a ${student.category} expert from WeLearnWeShare. View portfolio, achievements, and links.`

  return {
    title: `${student.name} - Talent Showcase - WeLearnWeShare`,
    description,
    openGraph: {
      title: `${student.name} - ${student.category} Expert`,
      description,
      type: 'profile',
      url: `https://welearnweshare.com/students/${slug}`,
      siteName: 'WeLearnWeShare',
    },
    twitter: {
      card: 'summary',
      title: `${student.name} - ${student.category} Expert`,
      description,
    },
  }
}

export default async function StudentDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const student = getStudentBySlug(slug)

  if (!student) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="py-6 md:py-10 px-4 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="mb-4">
            <a 
              href="/students" 
              className="text-primary-600 hover:text-primary-700 text-sm font-medium"
            >
              ← Back to Talent Showcase
            </a>
          </div>
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-3xl md:text-4xl font-semibold flex-shrink-0">
              {student.name.charAt(0)}
            </div>
            <div className="flex-1">
              <h1 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold text-gray-900 mb-2">
                {student.name}
              </h1>
              <p className="text-lg text-primary-600 font-semibold mb-3">
                {student.tag}
              </p>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full">
                  {student.category}
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full">
                  {student.skillLevel}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-10 px-4 bg-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="space-y-8 md:space-y-12">
            {/* Batch Enrolled */}
            <div>
              <div className="border-b-2 border-gray-200 pb-3 mb-6">
                <h2 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold text-gray-900">
                  Batch Enrolled
                </h2>
              </div>
              <p className="text-gray-700 text-base md:text-lg font-semibold">
                {student.batchEnrolled}
              </p>
            </div>

            {/* Performance */}
            <div>
              <div className="border-b-2 border-gray-200 pb-3 mb-6">
                <h2 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold text-gray-900">
                  Performance
                </h2>
              </div>
              <p className="text-gray-700 text-base md:text-lg font-semibold">
                {student.performance}
              </p>
            </div>

            {/* Achievement (Projects Done) */}
            <div>
              <div className="border-b-2 border-gray-200 pb-3 mb-6">
                <h2 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold text-gray-900">
                  Achievement (Projects Done)
                </h2>
              </div>
              <ul className="space-y-3">
                {student.projectsDone.map((project, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm md:text-base">{project}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Portfolio */}
            <div>
              <div className="border-b-2 border-gray-200 pb-3 mb-6">
                <h2 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold text-gray-900">
                  Portfolio
                </h2>
              </div>
              <ul className="space-y-3">
                {student.portfolio.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Achievements */}
            <div>
              <div className="border-b-2 border-gray-200 pb-3 mb-6">
                <h2 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold text-gray-900">
                  Achievements
                </h2>
              </div>
              <ul className="space-y-3">
                {student.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm md:text-base">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Competitions */}
            <div>
              <div className="border-b-2 border-gray-200 pb-3 mb-6">
                <h2 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold text-gray-900">
                  Competitions & Challenges
                </h2>
              </div>
              <ul className="space-y-3">
                {student.competitions.map((competition, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-semibold mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 text-sm md:text-base">{competition}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links */}
            {(student.socialLinks.linkedin || student.socialLinks.github || student.socialLinks.website) && (
              <div>
                <div className="border-b-2 border-gray-200 pb-3 mb-6">
                  <h2 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold text-gray-900">
                    Links
                  </h2>
                </div>
                <div className="flex flex-wrap gap-4">
                  {student.socialLinks.linkedin && (
                    <a
                      href={student.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#0077b5] text-white rounded-lg hover:bg-[#006399] transition"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span>LinkedIn</span>
                    </a>
                  )}
                  {student.socialLinks.github && (
                    <a
                      href={student.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                    >
                      <Github className="w-5 h-5" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {student.socialLinks.website && (
                    <a
                      href={student.socialLinks.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
                    >
                      <Globe className="w-5 h-5" />
                      <span>Website</span>
                    </a>
                  )}
                </div>
              </div>
            )}

            {/* Contact Details */}
            <div className="bg-primary-50 rounded-lg p-6 md:p-8">
              <div className="border-b-2 border-primary-200 pb-3 mb-6">
                <h2 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold text-gray-900">
                  Contact Details
                </h2>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Mail className="w-4 h-4 text-gray-600" />
                    <h3 className="text-sm font-semibold text-gray-700">Email</h3>
                  </div>
                  <a 
                    href={`mailto:${student.contactEmail}`}
                    className="text-primary-600 hover:text-primary-700 text-sm md:text-base"
                  >
                    {student.contactEmail}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Share Button - Mobile Only */}
      <div className="fixed bottom-20 right-4 z-50 lg:hidden">
        <ShareButton
          url={`https://welearnweshare.com/students/${slug}`}
          title={`${student.name} - ${student.category} Expert`}
          iconOnly={true}
          className="w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-shadow"
        />
      </div>

      <Footer />
    </main>
  )
}

