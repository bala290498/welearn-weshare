import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { getAllBlogs } from '@/lib/markdown'
import type { Metadata } from 'next'
import Image from 'next/image'

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
      
      <section className="py-6 md:py-10 px-4 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="text-center space-y-4 md:space-y-6">
            <h1 className="text-[clamp(1.75rem,4vw,3.5rem)] font-bold text-gray-900">
              Blogs
            </h1>
            <p className="text-[clamp(1rem,2.5vw,1.5rem)] text-primary-600 font-semibold">
              Learn, Grow, Share
            </p>
            <p className="text-[clamp(0.875rem,2vw,1.125rem)] text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {sortedBlogs.map((blog) => (
                <Link
                  key={blog.slug}
                  href={`/blogs/${blog.slug}`}
                  className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 focus-within:outline-none flex flex-col h-full"
                >
                  {blog.image && (
                    <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full">
                      {blog.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2 flex-shrink-0">
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                    {blog.description}
                  </p>
                  <div className="space-y-2 mb-4 text-sm text-gray-600 flex-shrink-0">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Author:</span>
                      <span>{blog.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Date:</span>
                      <span>{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    {blog.tags && blog.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {blog.tags.slice(0, 3).map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="pt-4 border-t border-gray-200 mt-auto flex-shrink-0">
                    <span className="text-primary-600 font-semibold text-sm hover:underline">
                      Read More →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
