export default function Pricing() {
  return (
    <section id="pricing" className="py-6 md:py-10 px-4 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4 max-w-screen-lg">
        <h2 className="text-[clamp(1.25rem,2.5vw,2.5rem)] font-bold text-center text-gray-900 mb-4">
          Transparent, Community-Based Pricing
        </h2>
        <p className="text-center text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto text-[clamp(0.875rem,2vw,1rem)]">
          We set a course revenue target and divide it by final enrollment. The more learners who
          join, the lower the price per student. Book with a small fee and pay the remaining balance
          once the cohort size is set — or receive automatic refunds if the final price is lower than
          your payment.
        </p>
        <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 lg:p-12 border-2 border-primary-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="text-center p-4 md:p-6 bg-primary-50 rounded-lg">
              <div className="text-[clamp(1.5rem,3vw,2rem)] font-bold text-primary-600 mb-2">10</div>
              <div className="text-gray-600 text-sm">Students</div>
              <div className="text-xl font-semibold text-gray-900 mt-2">₹37,500</div>
            </div>
            <div className="text-center p-4 md:p-6 bg-primary-100 rounded-lg border-2 border-primary-400">
              <div className="text-[clamp(1.5rem,3vw,2rem)] font-bold text-primary-700 mb-2">50</div>
              <div className="text-gray-600 text-sm">Students</div>
              <div className="text-xl font-semibold text-gray-900 mt-2">₹20,750</div>
              <div className="text-xs text-primary-700 mt-1 font-semibold">Most Popular</div>
            </div>
            <div className="text-center p-4 md:p-6 bg-primary-50 rounded-lg">
              <div className="text-[clamp(1.5rem,3vw,2rem)] font-bold text-primary-600 mb-2">100+</div>
              <div className="text-gray-600 text-sm">Students</div>
              <div className="text-xl font-semibold text-gray-900 mt-2">₹12,500</div>
            </div>
          </div>
          <div className="text-center">
            <a
              href="#join"
              className="inline-block bg-primary-600 text-white px-4 py-2 md:px-5 md:py-3 text-sm md:text-base rounded-xl shadow-sm hover:bg-primary-700 transition font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
            >
              Reserve Your Seat
            </a>
            <p className="text-sm text-gray-500 mt-4">
              Small booking fee required • Full payment after cohort size is confirmed
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

