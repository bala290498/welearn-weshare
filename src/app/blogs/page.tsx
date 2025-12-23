import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { getAllBlogs } from '@/lib/markdown'
import { Calendar, User, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blogs - WeLearnWeShare',
  description: 'Read insights, tips, and stories from our community of learners and experts. Learn about DevOps, Linux, AWS, and more.',
  openGraph: {
    title: 'Blogs - WeLearnWeShare',
    description: 'Read insights, tips, and stories from our community of learners and experts.',
    type: 'website',
    url: 'https://welearnweshare.com/blogs',
    siteName: 'WeLearnWeShare',
  },
  twitter: {
    card: 'summary',
    title: 'Blogs - WeLearnWeShare',
    description: 'Read insights, tips, and stories from our community of learners and experts.',
  },
}

export default function BlogsPage() {
  const blogs = getAllBlogs()
  
  // Sort blogs by date (newest first)
  const sortedBlogs = [...blogs].sort((a, b) => {
    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()
    return dateB - dateA
  })

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="text-center space-y-6 md:space-y-8">
            <h1 className="text-[clamp(2rem,5vw,4rem)] font-bold text-gray-900">
              Blogs
            </h1>
            <p className="text-[clamp(1.25rem,3vw,2rem)] text-primary-600 font-semibold">
              Learn, Grow, Share
            </p>
            <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Read insights, tips, and stories from our community of learners and experts.
            </p>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-10 px-4 bg-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          {sortedBlogs.length === 0 ? (
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-gray-900">
                Coming Soon
              </h2>
              <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-600 mt-4">
                Our blog is coming soon with valuable content, tips, and community stories!
              </p>
            </div>
          ) : (
            <>
              {/* Mobile: Horizontal snap-scroll */}
              <div className="lg:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 pb-4">
                <div className="flex gap-4 w-max items-stretch">
                  {sortedBlogs.map((blog) => (
                    <Link
                      key={blog.slug}
                      href={`/blogs/${blog.slug}`}
                      className="bg-white rounded-xl border border-gray-200 p-5 md:p-6 shadow-sm hover:shadow-lg hover:border-primary-300 transition-all duration-300 focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 focus-within:outline-none flex flex-col h-full w-[calc(85vw_-_16px)] flex-shrink-0 snap-center overflow-hidden group"
                    >
                      <div className="mb-3 min-h-[32px] flex-shrink-0">
                        <span className="inline-block px-3 py-1.5 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
                          {blog.category}
                        </span>
                      </div>
                      <h2 className="text-[clamp(1rem,2vw,1.25rem)] font-bold text-gray-900 mb-3 line-clamp-2 min-h-[48px] flex-shrink-0 group-hover:text-primary-600 transition-colors">
                        {blog.title}
                      </h2>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3 min-h-[60px] flex-shrink-0 leading-relaxed">
                        {blog.description}
                      </p>
                      <div className="space-y-2.5 mb-4 text-sm text-gray-600 flex-shrink-0 flex flex-col">
                        <div className="flex items-center gap-2 min-h-[24px]">
                          <User className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-700">{blog.author}</span>
                        </div>
                        <div className="flex items-center gap-2 min-h-[24px]">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-700">{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                        </div>
                        {blog.tags && blog.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 pt-1 min-h-[28px]">
                            {blog.tags.slice(0, 3).map((tag, index) => (
                              <span
                                key={index}
                                className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="pt-4 border-t border-gray-200 mt-auto min-h-[40px] flex-shrink-0">
                        <span className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all">
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              {/* Desktop: Grid layout */}
              <div className="hidden lg:grid grid-cols-3 gap-4 xl:gap-6 items-stretch auto-rows-fr">
                {sortedBlogs.map((blog) => (
                  <Link
                    key={blog.slug}
                    href={`/blogs/${blog.slug}`}
                    className="bg-white rounded-xl border border-gray-200 p-5 md:p-6 shadow-sm hover:shadow-lg hover:border-primary-300 transition-all duration-300 focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 focus-within:outline-none flex flex-col h-full min-h-0 overflow-hidden group"
                  >
                    <div className="mb-3 min-h-[32px] flex-shrink-0">
                      <span className="inline-block px-3 py-1.5 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
                        {blog.category}
                      </span>
                    </div>
                    <h2 className="text-[clamp(1rem,1.5vw,1.25rem)] font-bold text-gray-900 mb-3 line-clamp-2 min-h-[48px] flex-shrink-0 group-hover:text-primary-600 transition-colors">
                      {blog.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 min-h-[60px] flex-shrink-0 leading-relaxed">
                    {blog.description}
                  </p>
                    <div className="space-y-2.5 mb-4 text-sm text-gray-600 flex-shrink-0 flex flex-col">
                      <div className="flex items-center gap-2 min-h-[24px]">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-700">{blog.author}</span>
                    </div>
                      <div className="flex items-center gap-2 min-h-[24px]">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-700">{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                    </div>
                    {blog.tags && blog.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-1 min-h-[28px]">
                        {blog.tags.slice(0, 3).map((tag, index) => (
                          <span
                            key={index}
                              className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                    <div className="pt-4 border-t border-gray-200 mt-auto min-h-[40px] flex-shrink-0">
                      <span className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
