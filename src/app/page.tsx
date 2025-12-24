import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import Pricing from '@/components/Pricing'
import TalentPortal from '@/components/TalentPortal'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import { BadgeCheck, Users, Users2, Sparkles, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* Batch Details Section */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center text-neutral-900 mb-4">
              Find the Right Batch for You
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 items-start justify-center">
            {/* Prime Batch Card */}
            <div className="max-w-md rounded-2xl bg-slate-900 text-slate-100 shadow-xl overflow-hidden w-full">
              {/* Header */}
              <div className="bg-gradient-to-r from-orange-500/20 to-slate-800 p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold flex items-center gap-3">
                    Prime Batch
                    <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-bold tracking-wide text-black">
                      EXCLUSIVE
                    </span>
                  </h2>
                  <BadgeCheck className="h-6 w-6 text-orange-500" />
                </div>
                <p className="mt-2 text-slate-300">Start immediately. Learn with focus.</p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-orange-500/40 px-4 py-2 text-sm text-orange-300">
                  <Users className="h-4 w-4" />
                  Joining alone? We&apos;ll form the batch for you.
                </div>
              </div>

              {/* Body */}
              <div className="p-6 grid grid-cols-2 gap-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-400">Best for</p>
                  <p className="mt-1 font-medium">Solo,<br />Working Professionals</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-400">Start</p>
                  <p className="mt-1 font-medium">Fixed Date</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-400">Model</p>
                  <p className="mt-1 font-medium">Time-based</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-400">Pricing</p>
                  <p className="mt-1 font-medium">Dynamic Group Pricing</p>
                </div>
              </div>

              {/* Pricing */}
              <div className="mx-6 mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-slate-800 p-4 border border-slate-700">
                  <p className="text-sm uppercase tracking-wider text-slate-400">Group Size</p>
                  <p className="mt-1 text-2xl font-semibold text-slate-100">Up to 10</p>
                </div>
                <div className="rounded-xl bg-slate-800 p-4 border-2 border-orange-500">
                  <p className="text-sm uppercase tracking-wider text-slate-400">Per Head Price</p>
                  <p className="mt-1 text-2xl font-semibold text-slate-100">Dynamic Group Pricing</p>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 pb-6">
                <p className="mb-4 text-xs uppercase tracking-widest text-slate-400">
                  Why choose Prime?
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-500 flex-shrink-0" />
                    <span>
                      <strong>No Waiting</strong>
                      <br />
                      <span className="text-sm text-slate-300">
                        Start immediately without batch formation delays.
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-500 flex-shrink-0" />
                    <span>
                      <strong>Focused Groups</strong>
                      <br />
                      <span className="text-sm text-slate-300">
                        Smaller cohorts ensure personalized attention.
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-500 flex-shrink-0" />
                    <span>
                      <strong>Faster Outcomes</strong>
                      <br />
                      <span className="text-sm text-slate-300">
                        More trainer interaction accelerates progress.
                      </span>
                    </span>
                  </li>
                </ul>

                <Link
                  href="/prime"
                  className="mt-6 w-full flex items-center justify-center gap-2 rounded-xl bg-orange-500 py-3 font-semibold text-black hover:bg-orange-400 transition"
                >
                  Join Prime Batch
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Collective Batch Card */}
            <div className="max-w-md rounded-2xl bg-slate-900 text-slate-100 shadow-xl overflow-hidden w-full">
              {/* Header */}
              <div className="bg-gradient-to-r from-purple-500/20 to-slate-800 p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold flex items-center gap-3">
                    Collective Batch
                    <span className="rounded-full bg-purple-600 px-3 py-1 text-xs font-bold tracking-wide text-white">
                      BEST VALUE
                    </span>
                  </h2>
                  <Sparkles className="h-6 w-6 text-purple-500" />
                </div>
                <p className="mt-2 text-slate-300">Learn together. Pay less.</p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-purple-500/40 px-4 py-2 text-sm text-purple-300">
                  <Users2 className="h-4 w-4" />
                  Have a group? Learn together and pay less.
                </div>
              </div>

              {/* Body */}
              <div className="p-6 grid grid-cols-2 gap-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-400">Best for</p>
                  <p className="mt-1 font-medium">Group,<br />College Students</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-400">Start</p>
                  <p className="mt-1 font-medium">Flexible Date</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-400">Model</p>
                  <p className="mt-1 font-medium">Capacity-based</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-400">Pricing</p>
                  <p className="mt-1 font-medium">Dynamic group pricing</p>
                </div>
              </div>

              {/* Pricing */}
              <div className="mx-6 mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-slate-800 p-4 border border-slate-700">
                  <p className="text-sm uppercase tracking-wider text-slate-400">Group Size</p>
                  <p className="mt-1 text-2xl font-semibold text-slate-100">Up to 25</p>
                </div>
                <div className="rounded-xl bg-slate-800 p-4 border-2 border-purple-500">
                  <p className="text-sm uppercase tracking-wider text-slate-400">Per Head Price</p>
                  <p className="mt-1 text-2xl font-semibold text-slate-100">Dynamic Group Pricing</p>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 pb-6">
                <p className="mb-4 text-xs uppercase tracking-widest text-slate-400">
                  Why choose Collective?
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" />
                    <span>
                      <strong>Lowest Price</strong>
                      <br />
                      <span className="text-sm text-slate-300">
                        Best per-student pricing available across all batch types.
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" />
                    <span>
                      <strong>Community Power</strong>
                      <br />
                      <span className="text-sm text-slate-300">
                        Leverage peer-to-peer learning with structured cohorts.
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" />
                    <span>
                      <strong>Flexible Timelines</strong>
                      <br />
                      <span className="text-sm text-slate-300">
                        Start when your group is ready with rolling admissions.
                      </span>
                    </span>
                  </li>
                </ul>

                <Link
                  href="/collective"
                  className="mt-6 w-full flex items-center justify-center gap-2 rounded-xl bg-purple-600 py-3 font-semibold hover:bg-purple-700 transition"
                >
                  Join Collective Batch
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />
      <Features />
      <Pricing />
      <TalentPortal />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}

