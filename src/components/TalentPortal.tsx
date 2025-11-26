export default function TalentPortal() {
  return (
    <section id="talent-portal" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="w-full">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Turn Projects Into Job Opportunities
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Top performers on in-house tasks get featured on our Talent Portal. Employers can
              browse verified work and invite candidates directly for interviews. We also run curated
              hiring drives with partner companies.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">Verified Work Portfolio</h3>
                  <p className="text-gray-600 text-sm">
                    Showcase your completed projects and in-house tasks to potential employers
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">Direct Interview Invites</h3>
                  <p className="text-gray-600 text-sm">
                    Get contacted directly by employers who see your work on the portal
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900">Curated Hiring Drives</h3>
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
                <div className="text-4xl font-bold text-primary-700 mb-2">40%</div>
                <div className="text-gray-700">Placed within 3 months</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Active Learners</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-gray-900">200+</div>
                  <div className="text-sm text-gray-600">Partner Companies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <a
            href="#talent-portal-employers"
            className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition font-semibold text-center"
          >
            Explore Talent Portal (for employers)
          </a>
          <a
            href="#talent-portal-learners"
            className="bg-white text-primary-600 border-2 border-primary-600 px-8 py-3 rounded-lg hover:bg-primary-50 transition font-semibold text-center"
          >
            How to Get Listed (for learners)
          </a>
        </div>
      </div>
    </section>
  )
}

