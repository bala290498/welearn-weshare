import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { getAllStudents } from '@/data/students'
import { notFound } from 'next/navigation'
import { ChevronLeft, Linkedin, Github, ArrowRight } from 'lucide-react'

export default async function CategoryTalentPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const allStudents = getAllStudents()

  // Helper function to get initials from name
  const getInitials = (name: string) => {
    const parts = name.trim().split(' ')
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
    }
    return name.substring(0, 2).toUpperCase()
  }
  
  // Helper to get role from category
  const getRole = (category: string) => {
    // Map categories to role names
    const roleMap: Record<string, string> = {
      'DevOps': 'DevOps Engineer',
      'AWS': 'Cloud Engineer',
      'Cloud Computing': 'Cloud Engineer',
      'Linux': 'Linux Engineer',
    }
    return roleMap[category] || category
  }
  
  // Normalize category name (handle URL encoding and case)
  // Convert "devops" -> "DevOps", "linux" -> "Linux", etc.
  const categorySlug = decodeURIComponent(category).toLowerCase()
  
  // Find the actual category name from students (case-insensitive match)
  const actualCategory = allStudents.find(s => 
    s.category.toLowerCase().replace(/\s+/g, '-') === categorySlug ||
    s.category.toLowerCase() === categorySlug.replace(/-/g, ' ')
  )?.category

  if (!actualCategory) {
    notFound()
  }

  // Filter students by category
  const categoryStudents = allStudents.filter(student => 
    student.category.toLowerCase() === actualCategory.toLowerCase()
  )

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="py-6 md:py-10 px-4 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="mb-4">
            <Link 
              href="/talent" 
              className="text-primary-600 hover:text-primary-700 text-sm font-medium inline-flex items-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Talent Showcase
            </Link>
          </div>
          <div className="text-center space-y-4 md:space-y-6">
            <h1 className="text-[clamp(1.75rem,4vw,3rem)] font-bold text-gray-900">
              Best Performers in {actualCategory}
            </h1>
            <p className="text-[clamp(0.875rem,2vw,1.125rem)] text-gray-600 max-w-3xl mx-auto leading-relaxed">
              All {categoryStudents.length} top performers in {actualCategory} category
            </p>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-10 px-4 bg-gray-50">
        <div className="container mx-auto px-4 max-w-screen-xl">
          {/* Mobile: 1 column */}
          <div className="lg:hidden grid grid-cols-1 gap-4">
            {categoryStudents.map((student) => (
              <div
                key={student.slug}
                className="bg-white rounded-3xl shadow-md p-6 text-center flex flex-col"
              >
                {/* Avatar (initials only) */}
                <div className="flex justify-center">
                  <div className="w-28 h-28 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-3xl font-semibold text-gray-700">
                      {getInitials(student.name)}
                    </span>
                  </div>
                </div>

                {/* Name */}
                <h2 className="mt-4 text-xl font-semibold text-gray-900">
                  {student.name}
                </h2>

                {/* Role */}
                <p className="mt-1 flex items-center justify-center gap-2 text-gray-500">
                  <span
                    className="inline-block w-2 h-2 rounded-full bg-blue-500"
                    aria-hidden="true"
                  />
                  <span>{getRole(student.category)}</span>
                </p>

                {/* Divider */}
                <div className="my-6 h-px bg-gray-200" />

                {/* Icons */}
                <div className="flex justify-center gap-6 mb-6">
                  {student.socialLinks.linkedin && (
                    <a
                      href={student.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn profile"
                      className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
                    >
                      <Linkedin className="w-5 h-5 text-gray-600" aria-hidden="true" />
                    </a>
                  )}
                  {student.socialLinks.github && (
                    <a
                      href={student.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub profile"
                      className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
                    >
                      <Github className="w-5 h-5 text-gray-600" aria-hidden="true" />
                    </a>
                  )}
                </div>

                {/* Button (text-style with arrow) */}
                <Link
                  href={`/talent/${student.slug}`}
                  className="group w-full flex items-center justify-center gap-2 py-2 text-blue-600 font-medium hover:text-blue-700 transition bg-transparent"
                >
                  <span className="group-hover:underline">View Details</span>
                  <ArrowRight
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            ))}
          </div>

          {/* Desktop: 3 column grid */}
          <div className="hidden lg:grid grid-cols-3 gap-4 xl:gap-6">
            {categoryStudents.map((student) => (
              <div
                key={student.slug}
                className="bg-white rounded-3xl shadow-md p-6 text-center flex flex-col"
              >
                {/* Avatar (initials only) */}
                <div className="flex justify-center">
                  <div className="w-28 h-28 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-3xl font-semibold text-gray-700">
                      {getInitials(student.name)}
                    </span>
                  </div>
                </div>

                {/* Name */}
                <h2 className="mt-4 text-xl font-semibold text-gray-900">
                  {student.name}
                </h2>

                {/* Role */}
                <p className="mt-1 flex items-center justify-center gap-2 text-gray-500">
                  <span
                    className="inline-block w-2 h-2 rounded-full bg-blue-500"
                    aria-hidden="true"
                  />
                  <span>{getRole(student.category)}</span>
                </p>

                {/* Divider */}
                <div className="my-6 h-px bg-gray-200" />

                {/* Icons */}
                <div className="flex justify-center gap-6 mb-6">
                  {student.socialLinks.linkedin && (
                    <a
                      href={student.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn profile"
                      className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
                    >
                      <Linkedin className="w-5 h-5 text-gray-600" aria-hidden="true" />
                    </a>
                  )}
                  {student.socialLinks.github && (
                    <a
                      href={student.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub profile"
                      className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
                    >
                      <Github className="w-5 h-5 text-gray-600" aria-hidden="true" />
                    </a>
                  )}
                </div>

                {/* Button (text-style with arrow) */}
                <Link
                  href={`/talent/${student.slug}`}
                  className="group w-full flex items-center justify-center gap-2 py-2 text-blue-600 font-medium hover:text-blue-700 transition bg-transparent"
                >
                  <span className="group-hover:underline">View Details</span>
                  <ArrowRight
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

