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
import { Clock, Users, Calendar, DollarSign, Zap, ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* Batch Details Section */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="container mx-auto px-4 max-w-screen-xl">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-gray-900 mb-4">
              Choose Your Learning Path
            </h2>
            <p className="text-[clamp(0.875rem,2vw,1.125rem)] text-gray-600 max-w-2xl mx-auto">
              Two flexible batch models designed to fit your learning style and timeline
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Prime Batch Card */}
            <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl border-2 border-primary-200 p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold text-gray-900">
                  Prime Batch
                </h3>
              </div>
              <p className="text-[clamp(1rem,2vw,1.25rem)] text-primary-600 font-semibold mb-4">
                Start immediately. Learn with focus.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-1">Best for:</p>
                    <p className="text-sm text-gray-600">Learners with time urgency or those who prefer controlled class strength</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-1">Start:</p>
                    <p className="text-sm text-gray-600">Immediate or fixed monthly dates</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-1">Model:</p>
                    <p className="text-sm text-gray-600">Time-based</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-1">Pre-booking:</p>
                    <p className="text-sm text-gray-600">Available up to 20 days in advance</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-1">Pricing:</p>
                    <p className="text-sm text-gray-600">Final price is applied on the batch start date</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary-100 rounded-lg p-4 mb-6">
                <p className="text-sm font-semibold text-gray-900 mb-2">Why choose Prime:</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-0.5">•</span>
                    <span>No waiting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-0.5">•</span>
                    <span>Smaller, focused groups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-0.5">•</span>
                    <span>Faster progress with more trainer interaction</span>
                  </li>
                </ul>
              </div>

              <a
                href="#join"
                className="inline-flex items-center justify-center gap-2 w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition shadow-sm"
              >
                Join Prime Batch
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Collective Batch Card */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl border-2 border-blue-200 p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold text-gray-900">
                  Collective Batch
                </h3>
              </div>
              <p className="text-[clamp(1rem,2vw,1.25rem)] text-blue-600 font-semibold mb-4">
                Learn together. Pay less.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-1">Best for:</p>
                    <p className="text-sm text-gray-600">College students and non-urgent learners</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-1">Model:</p>
                    <p className="text-sm text-gray-600">Capacity-based</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-1">Start:</p>
                    <p className="text-sm text-gray-600">Only when maximum capacity is reached</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-1">Dynamic group pricing:</p>
                    <p className="text-sm text-gray-600">₹49,000 → up to 25 students</p>
                    <p className="text-sm text-gray-600">₹99,000 → up to 50 students</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-100 rounded-lg p-4 mb-6">
                <p className="text-sm font-semibold text-gray-900 mb-2">Why choose Collective:</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">•</span>
                    <span>Lowest per-student price</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">•</span>
                    <span>Community-powered learning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">•</span>
                    <span>Flexible timelines</span>
                  </li>
                </ul>
              </div>

              <a
                href="#join"
                className="inline-flex items-center justify-center gap-2 w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-sm"
              >
                Join Collective Batch
                <ArrowRight className="w-4 h-4" />
              </a>
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

