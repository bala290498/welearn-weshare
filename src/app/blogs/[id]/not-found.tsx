import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function BlogNotFound() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <h1 className="text-4xl font-semibold text-gray-900 mb-4">Blog Post Not Found</h1>
        <p className="text-gray-600 mb-8 text-center">
          The blog post you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <Link
          href="/blogs"
          className="bg-primary-600 text-white px-6 py-3 rounded-xl hover:bg-primary-700 transition font-semibold"
        >
          Back to Blogs
        </Link>
      </div>
      <Footer />
    </main>
  )
}

