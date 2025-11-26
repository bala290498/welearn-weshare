import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function BlogsPage() {
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
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-gray-900">
              Coming Soon
            </h2>
            <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-600 mt-4">
              Our blog is coming soon with valuable content, tips, and community stories!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

