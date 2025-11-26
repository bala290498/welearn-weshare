import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { getAllTalents } from '@/lib/markdown'
import { notFound } from 'next/navigation'

export default function CategoryTalentPage({ params }: { params: { category: string } }) {
  const allTalents = getAllTalents()
  
  // Normalize category name (handle URL encoding and case)
  // Convert "devops" -> "DevOps", "linux" -> "Linux", etc.
  const categorySlug = decodeURIComponent(params.category).toLowerCase()
  
  // Find the actual category name from talents (case-insensitive match)
  const actualCategory = allTalents.find(t => 
    t.category.toLowerCase().replace(/\s+/g, '-') === categorySlug ||
    t.category.toLowerCase() === categorySlug.replace(/-/g, ' ')
  )?.category

  if (!actualCategory) {
    notFound()
  }

  // Filter talents by category
  const categoryTalents = allTalents.filter(talent => 
    talent.category.toLowerCase() === actualCategory.toLowerCase()
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
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Talent Showcase
            </Link>
          </div>
          <div className="text-center space-y-4 md:space-y-6">
            <h1 className="text-[clamp(1.75rem,4vw,3rem)] font-bold text-gray-900">
              Best Performers in {actualCategory}
            </h1>
            <p className="text-[clamp(0.875rem,2vw,1.125rem)] text-gray-600 max-w-3xl mx-auto leading-relaxed">
              All {categoryTalents.length} top performers in {actualCategory} category
            </p>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-10 px-4 bg-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categoryTalents.map((talent) => (
              <div
                key={talent.id}
                className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <Link
                  href={`/talent/${talent.slug}`}
                  className="block focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 focus-within:outline-none rounded"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                      {talent.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-lg font-bold text-gray-900 mb-1 truncate">
                        {talent.name}
                      </h2>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded">
                          {talent.category}
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
                  {talent.linkedin && (
                    <a
                      href={talent.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-600 transition"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  )}
                  {talent.github && (
                    <a
                      href={talent.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-900 transition"
                      aria-label="GitHub"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                  <Link
                    href={`/talent/${talent.slug}`}
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

