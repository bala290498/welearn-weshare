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
          <div className="lg:hidden space-y-4">
            {categoryStudents.map((student) => (
              <div
                key={student.slug}
                className="bg-white rounded-xl border border-gray-200 p-5 md:p-6 shadow-sm hover:shadow-lg hover:border-primary-300 transition-all duration-300 flex flex-col"
              >
                {/* Initials Icon and Name */}
                <div className="mb-4 min-h-[60px] flex-shrink-0 flex items-start gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-lg md:text-xl font-bold flex-shrink-0">
                    {getInitials(student.name)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 line-clamp-1">
                      {student.name}
                    </h3>
                    <p className="text-sm text-primary-600 font-medium line-clamp-1">
                      {student.category}
                    </p>
                  </div>
                </div>

                {/* Connect Icons */}
                <div className="mb-4 min-h-[32px] flex-shrink-0">
                  <p className="text-xs text-gray-500 font-medium mb-2">Connect</p>
                  <div className="flex gap-2">
                    {student.socialLinks.linkedin && (
                      <a
                        href={student.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-[#0077b5] text-white flex items-center justify-center hover:bg-[#006399] transition"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {student.socialLinks.github && (
                      <a
                        href={student.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-gray-900 text-white flex items-center justify-center hover:bg-gray-800 transition"
                        aria-label="GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* View Details Button */}
                <div className="mt-auto pt-4 border-t border-gray-200 min-h-[48px] flex-shrink-0 flex justify-center">
                  <Link
                    href={`/talent/${student.slug}`}
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition font-semibold text-sm group"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: 3 column grid */}
          <div className="hidden lg:grid grid-cols-3 gap-4 xl:gap-6">
            {categoryStudents.map((student) => (
              <div
                key={student.slug}
                className="bg-white rounded-xl border border-gray-200 p-5 md:p-6 shadow-sm hover:shadow-lg hover:border-primary-300 transition-all duration-300 flex flex-col"
              >
                {/* Initials Icon and Name */}
                <div className="mb-4 min-h-[60px] flex-shrink-0 flex items-start gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-lg md:text-xl font-bold flex-shrink-0">
                    {getInitials(student.name)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 line-clamp-1">
                      {student.name}
                    </h3>
                    <p className="text-sm text-primary-600 font-medium line-clamp-1">
                      {student.category}
                    </p>
                  </div>
                </div>

                {/* Connect Icons */}
                <div className="mb-4 min-h-[32px] flex-shrink-0">
                  <p className="text-xs text-gray-500 font-medium mb-2">Connect</p>
                  <div className="flex gap-2">
                    {student.socialLinks.linkedin && (
                      <a
                        href={student.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-[#0077b5] text-white flex items-center justify-center hover:bg-[#006399] transition"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {student.socialLinks.github && (
                      <a
                        href={student.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-gray-900 text-white flex items-center justify-center hover:bg-gray-800 transition"
                        aria-label="GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* View Details Button */}
                <div className="mt-auto pt-4 border-t border-gray-200 min-h-[48px] flex-shrink-0 flex justify-center">
                  <Link
                    href={`/talent/${student.slug}`}
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition font-semibold text-sm group"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

