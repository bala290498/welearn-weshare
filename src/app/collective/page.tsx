import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Users, Calendar, School, DollarSign, CheckCircle, ArrowRight, Wallet, Users2, Clock, ChevronLeft, TrendingDown, Award, BarChart3, FileText, Briefcase, ClipboardCheck, BookOpen } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Collective Batch - WeLearnWeShare',
  description: 'Learn together. Pay less. Join our Collective Batch for the best per-student pricing and community-powered learning.',
  openGraph: {
    title: 'Collective Batch - WeLearnWeShare',
    description: 'Learn together. Pay less. Join our Collective Batch for the best per-student pricing and community-powered learning.',
    type: 'website',
    url: 'https://welearnweshare.com/collective',
    siteName: 'WeLearnWeShare',
  },
  twitter: {
    card: 'summary',
    title: 'Collective Batch - WeLearnWeShare',
    description: 'Learn together. Pay less. Join our Collective Batch for the best per-student pricing and community-powered learning.',
  },
}

export default function CollectivePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Main Card Container */}
      <section className="py-6 md:py-10 px-4 bg-white">
        <div className="container mx-auto px-4 max-w-[960px]">
          <div className="mb-4">
            <Link 
              href="/skill-building" 
              className="text-purple-600 hover:text-purple-700 text-sm font-medium inline-flex items-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Courses
            </Link>
          </div>
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col">
            
            {/* Header / Hero Section */}
            <div 
              className="relative w-full h-64 bg-cover bg-center group"
              style={{
                backgroundImage: `linear-gradient(0deg, #15202b 0%, rgba(21, 32, 43, 0.6) 50%, rgba(21, 32, 43, 0.2) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBsF7PlGcC9I_rhg6unh-fIfOAJP5GIQpchpGlBh3VVGBosELY3B-NFmD_IjQpnSJsfY69iCAbi4L7UBoeEvBXvTVp-Ur-rnbjdxAkXNkIsIdi6DvkOYOjPwJs69Y9NDGSy-IhodZByW7PZegFzCbvd4U0xw5YTULI5wElxBXU5Oble35UaWV4D3yk1GhYRRN2B-r4aAw8VTpXPt1rStVBUZvgREFrRIwxP0Hb8hqRaA-BlVSDR9f9P7St0hJZdL0EMaGrjSDQkz3I")`
              }}
            >
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                <div className="flex flex-col gap-2 items-start">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-600 text-white shadow-sm">
                    Best Value
                  </span>
                  <h1 className="text-white text-3xl sm:text-4xl font-bold leading-tight">Collective Batch</h1>
                  <p className="text-slate-200 text-lg sm:text-xl font-medium">Learn together. Pay less.</p>
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="flex flex-col gap-8 p-6 sm:p-8">
              {/* Chips Section */}
              <div className="flex flex-wrap gap-3">
                <div className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-purple-50 border border-purple-200 px-4 transition-colors hover:border-purple-500/50">
                  <Users className="w-5 h-5 text-purple-600" />
                  <p className="text-purple-700 text-sm font-medium">Best for: Groups</p>
                </div>
                <div className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-purple-50 border border-purple-200 px-4 transition-colors hover:border-purple-500/50">
                  <School className="w-5 h-5 text-purple-600" />
                  <p className="text-purple-700 text-sm font-medium">Model: Cohort-based</p>
                </div>
                <div className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-purple-50 border border-purple-200 px-4 transition-colors hover:border-purple-500/50">
                  <Calendar className="w-5 h-5 text-purple-600" />
                  <p className="text-purple-700 text-sm font-medium">Start: Rolling</p>
                </div>
              </div>

              {/* Pricing Section */}
              <div className="flex flex-col gap-4">
                <h3 className="text-slate-900 text-xl font-bold leading-tight flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-purple-600" />
                  Dynamic Group Pricing
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Pricing Card 1 */}
                  <div className="flex flex-col justify-between gap-4 rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10">
                    <div className="flex flex-col gap-2">
                      <h4 className="text-slate-500 text-sm font-bold uppercase tracking-wider">Small Group</h4>
                      <div className="flex items-baseline gap-1 text-slate-900">
                        <span className="text-4xl font-black tracking-tight">₹49,000</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600 mt-1">
                        <CheckCircle className="w-5 h-5 text-purple-600" />
                        Up to 25 students
                      </div>
                    </div>
                    <button className="w-full mt-2 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-white border border-slate-200 text-slate-900 hover:bg-purple-50 text-sm font-bold transition-colors">
                      Select Tier
                    </button>
                  </div>

                  {/* Pricing Card 2 */}
                  <div className="flex flex-col justify-between gap-4 rounded-xl border-2 border-purple-500/30 bg-purple-500/5 p-6 relative overflow-hidden">
                    {/* Popular badge */}
                    <div className="absolute top-0 right-0 bg-purple-600 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase tracking-wider">
                      Best Value
                    </div>
                    <div className="flex flex-col gap-2">
                      <h4 className="text-purple-600 text-sm font-bold uppercase tracking-wider">Large Group</h4>
                      <div className="flex items-baseline gap-1 text-slate-900">
                        <span className="text-4xl font-black tracking-tight">₹99,000</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600 mt-1">
                        <CheckCircle className="w-5 h-5 text-purple-600" />
                        Up to 50 students
                      </div>
                    </div>
                    <button className="w-full mt-2 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-purple-600 text-white hover:bg-purple-700 text-sm font-bold transition-colors shadow-md shadow-purple-500/20">
                      Select Tier
                    </button>
                  </div>
                </div>
              </div>

              {/* Benefits Section */}
              <div className="flex flex-col gap-4 pt-2 border-t border-slate-200">
                <h3 className="text-slate-900 text-xl font-bold leading-tight mt-4">Why choose Collective?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex flex-col gap-2 p-4 rounded-lg bg-purple-50">
                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-1">
                      <Wallet className="w-5 h-5" />
                    </div>
                    <h5 className="text-slate-900 font-bold text-base">Lowest Price</h5>
                    <p className="text-slate-600 text-sm leading-relaxed">Best per-student pricing available across all batch types.</p>
                  </div>
                  <div className="flex flex-col gap-2 p-4 rounded-lg bg-purple-50">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mb-1">
                      <Users2 className="w-5 h-5" />
                    </div>
                    <h5 className="text-slate-900 font-bold text-base">Community Power</h5>
                    <p className="text-slate-600 text-sm leading-relaxed">Leverage peer-to-peer learning with structured cohorts.</p>
                  </div>
                  <div className="flex flex-col gap-2 p-4 rounded-lg bg-purple-50">
                    <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 mb-1">
                      <Clock className="w-5 h-5" />
                    </div>
                    <h5 className="text-slate-900 font-bold text-base">Flexible Timelines</h5>
                    <p className="text-slate-600 text-sm leading-relaxed">Start when your group is ready with rolling admissions.</p>
                  </div>
                </div>
              </div>

              {/* Main CTA */}
              <div className="pt-4">
                <a
                  href="/skill-building?batchType=collective"
                  className="w-full py-4 px-6 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg shadow-lg shadow-purple-500/25 transition-all transform active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  <span>Join Collective Batch</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <p className="text-center text-slate-500 text-sm mt-3">
                  Need help with a custom size? <a className="text-purple-600 hover:underline" href="/contact">Contact Sales</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Cards Section */}
      <section className="py-6 md:py-10 px-4 bg-gray-50">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-center text-gray-900 mb-8 md:mb-12">
            Features Available in Both Prime & Collective Batches
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Smarter Pricing Card */}
            <div className="bg-white border-2 border-purple-200 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Smarter Pricing</h3>
              <p className="text-sm text-gray-600">More learners, lower cost.</p>
            </div>

            {/* Top Trainers Card */}
            <div className="bg-white border-2 border-blue-200 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Top Trainers</h3>
              <p className="text-sm text-gray-600">Expert-led, community-priced.</p>
            </div>

            {/* Trainer Voting Card */}
            <div className="bg-white border-2 border-green-200 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Trainer Voting</h3>
              <p className="text-sm text-gray-600">Students control quality.</p>
            </div>

            {/* Certificates Included Card */}
            <div className="bg-white border-2 border-orange-200 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Certificates Included</h3>
              <p className="text-sm text-gray-600">Proof of completion + resources.</p>
            </div>

            {/* Strong Community Card */}
            <div className="bg-white border-2 border-pink-200 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition text-center">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users2 className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Strong Community</h3>
              <p className="text-sm text-gray-600">Mentors, peers, and support.</p>
            </div>

            {/* Hiring Pipeline Card */}
            <div className="bg-white border-2 border-indigo-200 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Hiring Pipeline</h3>
              <p className="text-sm text-gray-600">Tasks lead to interviews.</p>
            </div>

            {/* Clear Roadmap Card */}
            <div className="bg-white border-2 border-teal-200 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClipboardCheck className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Clear Roadmap</h3>
              <p className="text-sm text-gray-600">Weekly goals, real projects.</p>
            </div>

            {/* Career Mentorship Card */}
            <div className="bg-white border-2 border-amber-200 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Career Mentorship</h3>
              <p className="text-sm text-gray-600">Guidance that gets you hired.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

