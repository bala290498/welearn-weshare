import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import DynamicPricingNumbers from '@/components/DynamicPricingNumbers'
import { Users, Users2, CheckCircle, ArrowRight, Award, Video } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* Banner Section */}
      <section className="w-full bg-white py-6 md:py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-wrap gap-3 justify-center">
            <div className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-50 border border-blue-200">
              <span className="text-sm font-semibold text-blue-700">Working Professionals</span>
            </div>
            <div className="inline-flex items-center px-4 py-2 rounded-lg bg-green-50 border border-green-200">
              <span className="text-sm font-semibold text-green-700">Real Community</span>
            </div>
            <div className="inline-flex items-center px-4 py-2 rounded-lg bg-purple-50 border border-purple-200">
              <span className="text-sm font-semibold text-purple-700">Dynamic Group Pricing</span>
            </div>
            <div className="inline-flex items-center px-4 py-2 rounded-lg bg-orange-50 border border-orange-200">
              <span className="text-sm font-semibold text-orange-700">Live Classes</span>
            </div>
            <div className="inline-flex items-center px-4 py-2 rounded-lg bg-indigo-50 border border-indigo-200">
              <span className="text-sm font-semibold text-indigo-700">Certifications</span>
            </div>
          </div>
        </div>
      </section>
      
      <div className="lg:mx-8 xl:mx-16">
      {/* What is Dynamic Group Pricing Section */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-8 lg:gap-10 items-center">
            {/* Left side - Numbers (30%) */}
            <div className="flex flex-col items-center justify-center gap-6 lg:gap-8 order-2 lg:order-1 w-full">
              <DynamicPricingNumbers />
            </div>

            {/* Right side - Content (70%) */}
            <div className="flex flex-col order-1 lg:order-2">
              <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-semibold text-gray-900 mb-6 md:mb-8 lg:mb-12 text-center lg:text-left">
                What is Dynamic Group Pricing?
              </h2>
              <div className="prose prose-lg max-w-none mb-6 md:mb-8">
                <p className="text-base md:text-lg font-semibold text-gray-600 leading-relaxed mb-4">
                  India&apos;s first platform with Dynamic Group Pricing.
                </p>
                <p className="text-base md:text-lg font-semibold leading-relaxed mb-6">
                  <span style={{ color: '#004aad' }}>More learners.</span>{' '}
                  <span style={{ color: '#00bf63' }}>Lower prices.</span>
                </p>
                
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                  How It Works
                </h3>
                <div className="flex flex-col gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-600 text-white flex items-center justify-center text-sm font-semibold">
                      1
                    </div>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                      One total price.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-600 text-white flex items-center justify-center text-sm font-semibold">
                      2
                    </div>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                      More students join.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-600 text-white flex items-center justify-center text-sm font-semibold">
                      3
                    </div>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                      Everyone pays less automatically.
                    </p>
                  </div>
                </div>
                
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  The more the community grows, the more everyone saves.
                </p>
              </div>

              {/* Batch Type Badge Cards */}
              <div className="flex flex-wrap gap-3 md:gap-4">
                {/* Top Trainers Badge */}
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 border border-blue-300">
                  <Award className="w-4 h-4 text-blue-600 mr-2" />
                  <span className="text-sm md:text-base font-semibold text-blue-700">Top Trainers</span>
                </div>

                {/* Live Classes Badge */}
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 border border-blue-300">
                  <Video className="w-4 h-4 text-blue-600 mr-2" />
                  <span className="text-sm md:text-base font-semibold text-blue-700">Live Classes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Batch Details Section */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-semibold text-center text-gray-900 mb-8 md:mb-12">
              Find the Right Batch for You
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 items-start justify-center">
            {/* Prime Batch Card */}
            <div className="max-w-md rounded-2xl bg-white text-gray-900 shadow-xl overflow-hidden w-full border border-gray-200">
              {/* Header */}
              <div className="bg-gradient-to-r from-orange-500/20 to-orange-50 p-6">
                <div>
                  <h2 className="text-2xl font-semibold flex items-center gap-3 text-gray-900">
                    Prime Batch
                    <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold tracking-wide text-white">
                      EXCLUSIVE
                    </span>
                  </h2>
                </div>
                <p className="mt-2 text-gray-600">Start immediately. Learn with focus.</p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-orange-500/40 px-4 py-2 text-sm text-orange-700 bg-orange-50">
                  <Users className="h-4 w-4" />
                  Joining alone? We&apos;ll form the batch for you.
                </div>
              </div>

              {/* Body */}
              <div className="p-6 grid grid-cols-2 gap-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500">Best for</p>
                  <p className="mt-1 font-medium text-gray-900">Solo,<br />Working Professionals</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500">Start</p>
                  <p className="mt-1 font-medium text-gray-900">Fixed Date</p>
                </div>
              </div>

              {/* Pricing */}
              <div className="mx-6 mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-gray-50 p-4 border border-gray-200">
                  <p className="text-sm uppercase tracking-wider text-gray-500">Group Size</p>
                  <p className="mt-1 text-2xl font-semibold text-gray-900">Up to 10</p>
                </div>
                <div className="rounded-xl bg-orange-50 p-4 border-2 border-orange-500">
                  <p className="text-sm uppercase tracking-wider text-gray-600">Per Head Price</p>
                  <p className="mt-1 text-2xl font-semibold text-gray-900">Dynamic Group Pricing</p>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 pb-6">
                <p className="mb-4 text-xs uppercase tracking-widest text-gray-500">
                  Why choose Prime?
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-500 flex-shrink-0 mt-1" />
                    <span>
                      <strong className="text-gray-900">No Waiting</strong>
                      <br />
                      <span className="text-sm text-gray-600">
                        Start immediately without batch formation delays.
                      </span>
                    </span>
                  </li>
                </ul>

                <Link
                  href="/prime"
                  className="mt-6 w-full flex items-center justify-center gap-2 rounded-xl bg-orange-500 py-3 font-semibold hover:bg-orange-400 active:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition"
                >
                  <span className="text-white">Join Prime Batch</span>
                  <ArrowRight className="w-5 h-5 text-white" />
                </Link>
              </div>
            </div>

            {/* Collective Batch Card */}
            <div className="max-w-md rounded-2xl bg-white text-gray-900 shadow-xl overflow-hidden w-full border border-gray-200">
              {/* Header */}
              <div className="bg-gradient-to-r from-purple-500/20 to-purple-50 p-6">
                <div>
                  <h2 className="text-2xl font-semibold flex items-center gap-3 text-gray-900">
                    Collective Batch
                    <span className="rounded-full bg-purple-600 px-3 py-1 text-xs font-semibold tracking-wide text-white">
                      VALUE
                    </span>
                  </h2>
                </div>
                <p className="mt-2 text-gray-600">Learn together. Pay less.</p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-purple-500/40 px-4 py-2 text-sm text-purple-700 bg-purple-50">
                  <Users2 className="h-4 w-4" />
                  Have a group? Learn together and pay less.
                </div>
              </div>

              {/* Body */}
              <div className="p-6 grid grid-cols-2 gap-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500">Best for</p>
                  <p className="mt-1 font-medium text-gray-900">Group,<br />College Students</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500">Start</p>
                  <p className="mt-1 font-medium text-gray-900">Flexible Date</p>
                </div>
              </div>

              {/* Pricing */}
              <div className="mx-6 mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-gray-50 p-4 border border-gray-200">
                  <p className="text-sm uppercase tracking-wider text-gray-500">Group Size</p>
                  <p className="mt-1 text-2xl font-semibold text-gray-900">Up to 25</p>
                </div>
                <div className="rounded-xl bg-purple-50 p-4 border-2 border-purple-500">
                  <p className="text-sm uppercase tracking-wider text-gray-600">Per Head Price</p>
                  <p className="mt-1 text-2xl font-semibold text-gray-900">Dynamic Group Pricing</p>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 pb-6">
                <p className="mb-4 text-xs uppercase tracking-widest text-gray-500">
                  Why choose Collective?
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0 mt-1" />
                    <span>
                      <strong className="text-gray-900">Lowest Price</strong>
                      <br />
                      <span className="text-sm text-gray-600">
                        Best per-student pricing available across all batch types.
                      </span>
                    </span>
                  </li>
                </ul>

                <Link
                  href="/collective"
                  className="mt-6 w-full flex items-center justify-center gap-2 rounded-xl bg-purple-600 py-3 font-semibold hover:bg-purple-700 active:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 transition"
                >
                  <span className="text-white">Join Collective Batch</span>
                  <ArrowRight className="w-5 h-5 text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Features />

      </div>
      
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}

