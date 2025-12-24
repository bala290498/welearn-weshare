import LivePricingCards from '@/components/LivePricingCards'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-br from-primary-50 to-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* 70/30 split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-10 items-start justify-center">
          {/* Left column - Content */}
          <div className="flex flex-col items-start lg:ml-10">
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl text-left">
              <span className="text-primary-600">Learn Together.</span>{' '}
              <span className="text-purple-600">Pay Less.</span>{' '}
              <span className="text-orange-600">Get Hired.</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 text-left">
              India&apos;s first community-powered learning platform —Learning that becomes more affordable as the community grows
            </p>

            <div className="mt-8 flex gap-4">
              <Link 
                href="/skill-building"
                className="rounded-lg bg-primary-600 px-6 py-3 text-white hover:bg-primary-700 transition"
              >
                Browse Courses
              </Link>
              <Link 
                href="/talent"
                className="rounded-lg border border-gray-300 px-6 py-3 text-gray-700 hover:bg-gray-100 transition"
              >
                Browse Talent
              </Link>
            </div>
          </div>

          {/* Right column - Pricing Cards */}
          <div className="flex justify-center">
            <LivePricingCards />
          </div>
        </div>
      </div>
    </section>
  )
}

