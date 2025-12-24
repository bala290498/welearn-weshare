import { CheckCircle } from 'lucide-react'

export default function TalentPortal() {
  return (
    <section id="talent-portal" className="py-6 md:py-10 px-4 bg-white">
      <div className="container mx-auto px-4 max-w-screen-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="w-full">
            <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-semibold text-center text-gray-900 mb-8 md:mb-12">
              Turn Projects Into Job Opportunities
            </h2>
            <p className="text-[clamp(0.875rem,2vw,1.125rem)] text-gray-600 mb-6">
              Top performers on in-house tasks get featured on our Talent Portal. Employers can
              browse verified work and invite candidates directly for interviews. We also run curated
              hiring drives with partner companies.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[clamp(1rem,2vw,1.125rem)] font-semibold text-gray-900">Verified Work Portfolio</h3>
                  <p className="text-gray-600 text-sm">
                    Showcase your completed projects and in-house tasks to potential employers
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[clamp(1rem,2vw,1.125rem)] font-semibold text-gray-900">Direct Interview Invites</h3>
                  <p className="text-gray-600 text-sm">
                    Get contacted directly by employers who see your work on the portal
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-[clamp(1rem,2vw,1.125rem)] font-semibold text-gray-900">Curated Hiring Drives</h3>
                  <p className="text-gray-600 text-sm">
                    Participate in exclusive hiring events with our partner companies
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-full bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl p-8 border-2 border-primary-200">
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-semibold text-primary-700 mb-2">40%</div>
                <div className="text-gray-700">Placed within 3 months</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-semibold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Active Learners</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-semibold text-gray-900">200+</div>
                  <div className="text-sm text-gray-600">Partner Companies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 md:mt-12">
          <a
            href="#talent-portal-employers"
            className="bg-primary-600 text-white px-4 py-2 md:px-5 md:py-3 text-sm md:text-base rounded-xl shadow-sm hover:bg-primary-700 transition font-semibold text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
          >
            Explore Talent Portal (for employers)
          </a>
          <a
            href="#talent-portal-learners"
            className="bg-white text-primary-600 border-2 border-primary-600 px-4 py-2 md:px-5 md:py-3 text-sm md:text-base rounded-xl shadow-sm hover:bg-primary-50 transition font-semibold text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
          >
            How to Get Listed (for learners)
          </a>
        </div>
      </div>
    </section>
  )
}

