import HeroPricingCard from '@/components/HeroPricingCard'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-br from-primary-50 to-white">
      <div className="mx-auto max-w-5xl px-6 pt-12 pb-20">
        {/* 70/30 split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-10 items-center justify-center">
          {/* Left column - Content */}
          <div className="flex flex-col items-start order-2 lg:order-1">
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl text-left">
              Community-Powered Learning Platform
            </h1>

            <p className="mt-6 text-lg text-gray-600 text-left">
              Connecting learners with working professionals and pay less as your learning community grows.
            </p>

            {/* Key Value Points */}
            <ul className="mt-6 space-y-3 text-left">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">We connect students with working professionals</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Dynamic group pricing</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Live Interactive classes</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Industry level Experience, Certifications and more</span>
              </li>
            </ul>

            {/* CTAs */}
            <div className="mt-8 flex flex-col md:flex-row gap-4 w-full">
              <Link 
                href="#join"
                className="rounded-lg bg-primary-600 px-6 py-3 text-white hover:bg-primary-700 transition w-full md:flex-1 text-center"
              >
                Join Community
              </Link>
              <Link 
                href="#dynamic-group-pricing"
                className="rounded-lg border-2 border-primary-600 px-6 py-3 text-primary-600 bg-transparent hover:bg-primary-50 transition w-full md:flex-1 text-center"
              >
                See How Pricing Drops
              </Link>
            </div>
          </div>

          {/* Right column - Pricing Cards */}
          <div className="flex justify-center items-center order-1 lg:order-2">
            <HeroPricingCard />
          </div>
        </div>
      </div>
    </section>
  )
}

