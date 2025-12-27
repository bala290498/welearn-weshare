import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BlogsClient from '@/components/BlogsClient'
import { getAllBlogs } from '@/lib/markdown'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blogs',
  description: 'Read insights, tips, and stories from our community of learners and experts. Learn about DevOps, Linux, AWS, and more.',
  openGraph: {
    title: 'Blogs - WeLearnWeShare',
    description: 'Read insights, tips, and stories from our community of learners and experts.',
    type: 'website',
    url: 'https://welearnweshare.com/blogs',
    siteName: 'WeLearnWeShare',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Blogs - WeLearnWeShare',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blogs - WeLearnWeShare',
    description: 'Read insights, tips, and stories from our community of learners and experts.',
    images: ['/og-image.svg'],
  },
}

export default function BlogsPage() {
  const blogs = getAllBlogs()

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="text-center space-y-6 md:space-y-8">
            <p className="text-[clamp(1.25rem,3vw,2rem)] text-primary-600 font-semibold">
              Learn, Grow, Share
            </p>
            <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Read insights, tips, and stories from our community of learners and experts.
            </p>
            {/* CTA Button */}
            <div className="flex justify-center pt-4 md:pt-6">
              <a
                href="#blogs"
                className="bg-primary-600 text-white px-8 py-3 md:px-10 md:py-4 text-base md:text-lg rounded-xl shadow-lg hover:bg-primary-700 transition font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 min-w-[200px] text-center"
                aria-label="View all blogs"
              >
                View Blogs
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="blogs" className="py-6 md:py-10 px-4 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <BlogsClient blogs={blogs} />
        </div>
      </section>

      <Footer />
    </main>
  )
}
