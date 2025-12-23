import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import TalentFilterClient from '@/components/TalentFilterClient'
import { getAllStudents } from '@/data/students'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Talent Showcase - WeLearnWeShare',
  description: 'Discover top performers from our community. Find real talents, not paper talents. These talents have proven their skills through regular in-house challenges and tasks.',
  openGraph: {
    title: 'Talent Showcase - WeLearnWeShare',
    description: 'Discover top performers from our community. Find real talents, not paper talents.',
    type: 'website',
    url: 'https://welearnweshare.com/talent',
    siteName: 'WeLearnWeShare',
  },
  twitter: {
    card: 'summary',
    title: 'Talent Showcase - WeLearnWeShare',
    description: 'Discover top performers from our community. Find real talents, not paper talents.',
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
    acc[category].push({
      id: student.slug,
      slug: student.slug,
      name: student.name,
      category: student.category,
      skillLevel: student.skillLevel,
      linkedin: student.socialLinks.linkedin,
      github: student.socialLinks.github
    })
    return acc
  }, {} as Record<string, Array<{
    id: string
    slug: string
    name: string
    category: string
    skillLevel: string
    linkedin?: string
    github?: string
  }>>)

  // Get unique categories dynamically
  const categories = Object.keys(studentsByCategory).sort()

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="text-center space-y-6 md:space-y-8">
            <h1 className="text-[clamp(2rem,5vw,4rem)] font-bold text-gray-900">
              Talent Showcase
            </h1>
            <p className="text-[clamp(1.25rem,3vw,2rem)] text-primary-600 font-semibold">
              Find real talents, not paper talents
            </p>
            <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover top performers from our community. These talents have proven their skills through regular in-house challenges and tasks.
            </p>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-10 px-4 bg-gray-50">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <TalentFilterClient categories={categories} talentsByCategory={studentsByCategory} />
        </div>
      </section>

      <Footer />
    </main>
  )
}


