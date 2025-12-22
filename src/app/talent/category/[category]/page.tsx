import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { getAllStudents } from '@/data/students'
import { notFound } from 'next/navigation'
import { ChevronLeft, Linkedin, Github } from 'lucide-react'

export default async function CategoryTalentPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const allStudents = getAllStudents()
  
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

      <section className="py-6 md:py-10 px-4 bg-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          {/* Mobile: Horizontal snap-scroll */}
          <div className="lg:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 pb-4">
            <div className="flex gap-4 w-max">
              {categoryStudents.map((student) => (
                <div
                  key={student.slug}
                  className="bg-white rounded-lg border border-gray-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow w-[calc(85vw_-_16px)] flex-shrink-0 snap-center overflow-hidden"
                >
                  <Link
                    href={`/talent/${student.slug}`}
                    className="block focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 focus-within:outline-none rounded"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                        {student.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-[clamp(1rem,2vw,1.125rem)] font-bold text-gray-900 mb-1 truncate">
                          {student.name}
                        </h2>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded">
                            {student.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-gray-700 mb-2">Portfolio Preview</h3>
                      <p className="text-xs text-gray-600 line-clamp-2">
                        View full portfolio on profile page
                      </p>
                    </div>
                  </Link>

                  <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                    {student.socialLinks.linkedin && (
                      <a
                        href={student.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-600 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {student.socialLinks.github && (
                      <a
                        href={student.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-900 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                        aria-label="GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    <Link
                      href={`/talent/${student.slug}`}
                      className="text-primary-600 font-semibold text-sm ml-auto hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
                    >
                      View Profile →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Desktop: Grid layout */}
          <div className="hidden lg:grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 xl:gap-6">
            {categoryStudents.map((student) => (
              <div
                key={student.slug}
                className="bg-white rounded-lg border border-gray-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <Link
                  href={`/talent/${student.slug}`}
                  className="block focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 focus-within:outline-none rounded"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                      {student.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-[clamp(1rem,1.5vw,1.125rem)] font-bold text-gray-900 mb-1 truncate">
                        {student.name}
                      </h2>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded">
                          {student.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">Portfolio Preview</h3>
                    <p className="text-xs text-gray-600 line-clamp-2">
                      View full portfolio on profile page
                    </p>
                  </div>
                </Link>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  {student.socialLinks.linkedin && (
                    <a
                      href={student.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-600 transition"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {student.socialLinks.github && (
                    <a
                      href={student.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-900 transition"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  <Link
                    href={`/talent/${student.slug}`}
                    className="text-primary-600 font-semibold text-sm ml-auto hover:underline"
                  >
                    View Profile →
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

