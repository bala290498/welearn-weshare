import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getTalentBySlug } from '@/lib/markdown'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const talentData = getTalentBySlug(id)
  
  if (!talentData) {
    return {
      title: 'Talent Not Found - WeLearnWeShare',
    }
  }

  const talent = talentData.frontmatter
  const description = `Meet ${talent.name}, a ${talent.category} expert from WeLearnWeShare. View portfolio, achievements, and connect.`

  return {
    title: `${talent.name} - Talent Showcase - WeLearnWeShare`,
    description,
    openGraph: {
      title: `${talent.name} - ${talent.category} Expert`,
      description,
      type: 'profile',
      url: `https://welearnweshare.com/talent/${id}`,
      siteName: 'WeLearnWeShare',
    },
    twitter: {
      card: 'summary',
      title: `${talent.name} - ${talent.category} Expert`,
      description,
    },
  }
}

export default async function TalentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const talentData = getTalentBySlug(id)

  if (!talentData) {
    notFound()
  }

  const talent = talentData.frontmatter
  const content = talentData.content

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="py-6 md:py-10 px-4 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="mb-4">
            <a 
              href="/talent" 
              className="text-primary-600 hover:text-primary-700 text-sm font-medium"
            >
              ← Back to Talent Showcase
            </a>
          </div>
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-3xl md:text-4xl font-bold flex-shrink-0">
              {talent.name.charAt(0)}
            </div>
            <div className="flex-1">
              <h1 className="text-[clamp(1.75rem,4vw,3rem)] font-bold text-gray-900 mb-2">
                {talent.name}
              </h1>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full">
                  {talent.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-10 px-4 bg-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="space-y-8 md:space-y-12">
            {/* Portfolio */}
            <div>
              <div className="border-b-2 border-gray-200 pb-3 mb-6">
                <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold text-gray-900">
                  Portfolio
                </h2>
              </div>
              <ul className="space-y-3">
                {(content['Portfolio'] || []).map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Achievements */}
            <div>
              <div className="border-b-2 border-gray-200 pb-3 mb-6">
                <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold text-gray-900">
                  Achievements
                </h2>
              </div>
              <ul className="space-y-3">
                {(content['Achievements'] || []).map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    <span className="text-gray-700 text-sm md:text-base">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Competitions */}
            <div>
              <div className="border-b-2 border-gray-200 pb-3 mb-6">
                <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold text-gray-900">
                  Competitions & Challenges
                </h2>
              </div>
              <ul className="space-y-3">
                {(content['Competitions & Challenges'] || []).map((competition, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-semibold mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 text-sm md:text-base">{competition}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            {(talent.linkedin || talent.github || talent.website) && (
              <div>
                <div className="border-b-2 border-gray-200 pb-3 mb-6">
                  <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold text-gray-900">
                    Connect
                  </h2>
                </div>
                <div className="flex flex-wrap gap-4">
                  {talent.linkedin && (
                    <a
                      href={talent.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      <span>LinkedIn</span>
                    </a>
                  )}
                  {talent.github && (
                    <a
                      href={talent.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span>GitHub</span>
                    </a>
                  )}
                  {talent.website && (
                    <a
                      href={talent.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      <span>Website</span>
                    </a>
                  )}
                </div>
              </div>
            )}

            {/* Contact Details */}
            <div className="bg-primary-50 rounded-lg p-6 md:p-8">
              <div className="border-b-2 border-primary-200 pb-3 mb-6">
                <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold text-gray-900">
                  Contact Details
                </h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-1">Email</h3>
                  <a 
                    href={`mailto:${talent.contactEmail}`}
                    className="text-primary-600 hover:text-primary-700 text-sm md:text-base"
                  >
                    {talent.contactEmail}
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-1">Phone</h3>
                  <a 
                    href={`tel:${talent.contactPhone}`}
                    className="text-primary-600 hover:text-primary-700 text-sm md:text-base"
                  >
                    {talent.contactPhone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

