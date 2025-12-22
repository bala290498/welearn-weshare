import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function JobNotFound() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="py-20 px-4 text-center">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Job Not Found</h1>
          <p className="text-gray-600 mb-8">
            The job you're looking for doesn't exist or has been removed.
          </p>
          <Link
            href="/openings"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl hover:bg-primary-700 transition font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Openings
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  )
}

