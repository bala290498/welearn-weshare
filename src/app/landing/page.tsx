import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import JoinCommunityButton from '@/components/JoinCommunityButton'

const comparisonData = [
  {
    feature: 'Transparency',
    traditional: 'Scam-based marketing',
    welearn: 'Transparent community-driven system',
  },
  {
    feature: 'Syllabus Quality',
    traditional: 'Poor, outdated syllabus',
    welearn: 'Updated, industry-aligned syllabus',
  },
  {
    feature: 'Pricing',
    traditional: 'High, fixed fees',
    welearn: 'Community-powered decreasing price',
  },
  {
    feature: 'Community Support',
    traditional: 'No community support',
    welearn: 'Active learning community',
  },
  {
    feature: 'Trainer Quality',
    traditional: 'Not real working professionals',
    welearn: 'Working industry experts',
  },
  {
    feature: 'Feedback System',
    traditional: 'No feedback or voting',
    welearn: 'Live voting + dynamic changes',
  },
  {
    feature: 'Reviews',
    traditional: 'Fake reviews',
    welearn: 'Real, verified student outcomes',
  },
  {
    feature: 'Career Growth',
    traditional: 'Weak',
    welearn: 'In-house tasks leading to hiring',
  },
]

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-6 md:py-10 px-4 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="text-center space-y-4 md:space-y-6">
            <h1 className="text-[clamp(1.75rem,4vw,3.5rem)] font-semibold text-gray-900">
              WeLearnWeShare
            </h1>
            <p className="text-[clamp(1rem,2.5vw,1.5rem)] text-primary-600 font-semibold">
              Learn Together. Grow Together.
            </p>
            <h2 className="text-[clamp(1.25rem,3vw,2.5rem)] font-semibold text-gray-900 pt-4">
              Unlock Skills. Reduce Costs. Shape Your Career.
            </h2>
            <p className="text-[clamp(0.875rem,2vw,1.125rem)] text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At WeLearnWeShare, learning isn&apos;t individual—it&apos;s powered by the community. As more students join, everyone benefits with lower fees, better trainers, and stronger career outcomes.
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 md:pt-8 flex-wrap">
              <JoinCommunityButton
                className="bg-primary-600 text-white px-8 py-3 md:px-10 md:py-4 text-sm md:text-base rounded-xl shadow-lg hover:bg-primary-700 transition font-semibold focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 min-w-[160px] text-center"
                aria-label="Join WeLearnWeShare now"
              >
                Join Now
              </JoinCommunityButton>
              <a
                href="#courses"
                className="bg-white text-primary-600 border-2 border-primary-600 px-8 py-3 md:px-10 md:py-4 text-sm md:text-base rounded-xl shadow-sm hover:bg-primary-50 transition font-semibold focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 min-w-[160px] text-center"
                aria-label="Explore available courses"
              >
                Explore Courses
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-6 md:py-10 px-4 bg-white" aria-labelledby="comparison-heading">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="text-center space-y-3 md:space-y-6 mb-6 md:mb-12">
            <h2 id="comparison-heading" className="text-[clamp(1.25rem,4vw,2rem)] font-semibold text-gray-900 px-2">
              Don&apos;t Fall for Traditional Institute Traps — See How WeLearnWeShare Makes Learning Smarter
            </h2>
            <p className="text-[clamp(0.875rem,2.5vw,1.125rem)] text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
              A clear side-by-side comparison to help students avoid scams, overpriced courses, and outdated teaching methods.
            </p>
          </div>

          {/* Desktop Table View - Hidden on mobile/tablet */}
          <div className="hidden md:block overflow-x-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <table 
                role="table" 
                className="w-full border-collapse bg-white rounded-lg"
                aria-label="Comparison between Traditional Institute and WeLearnWeShare"
              >
                <thead>
                  <tr role="row">
                    <th 
                      role="columnheader" 
                      className="text-left p-4 md:p-6 text-sm md:text-base font-semibold text-gray-900 bg-gray-50 rounded-tl-lg"
                    >
                      Feature
                    </th>
                    <th 
                      role="columnheader" 
                      className="text-left p-4 md:p-6 text-sm md:text-base font-semibold text-gray-900 bg-gray-50"
                    >
                      Traditional Institute
                    </th>
                    <th 
                      role="columnheader" 
                      className="text-left p-4 md:p-6 text-sm md:text-base font-semibold text-gray-900 bg-gradient-to-br from-green-50 to-emerald-50 rounded-tr-lg pl-6"
                    >
                      WeLearnWeShare
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, index) => (
                    <tr 
                      key={index} 
                      role="row" 
                      className="hover:bg-gray-50 transition focus-within:bg-gray-50"
                    >
                      <td 
                        role="cell" 
                        className="p-4 md:p-6 text-sm md:text-base font-medium text-gray-900 border-b border-gray-200"
                      >
                        {item.feature}
                      </td>
                      <td 
                        role="cell" 
                        className="p-4 md:p-6 text-sm md:text-base text-gray-600 border-b border-gray-200"
                      >
                        <div className="flex items-center gap-2">
                          <svg 
                            className="w-5 h-5 text-red-500 flex-shrink-0" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <span>{item.traditional}</span>
                        </div>
                      </td>
                      <td 
                        role="cell" 
                        className={`p-4 md:p-6 text-sm md:text-base text-gray-900 font-medium bg-gradient-to-br from-green-50 to-emerald-50 border-b border-gray-200 pl-6 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
                          index === comparisonData.length - 1 ? 'rounded-br-lg' : ''
                        }`}
                        tabIndex={0}
                      >
                        <div className="flex items-center gap-2">
                          <svg 
                            className="w-5 h-5 text-green-600 flex-shrink-0" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{item.welearn}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile/Tablet Card View - Visible only on mobile/tablet */}
          <div className="md:hidden space-y-4">
            {comparisonData.map((item, index) => (
              <div
                key={index}
                role="article"
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2 focus-within:outline-none"
                tabIndex={0}
              >
                {/* Feature Name - Line 1 */}
                <h3 className="text-sm font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-200">
                  {item.feature}
                </h3>
                
                {/* Traditional Value - Line 2 */}
                <div className="flex items-start gap-2 mb-3 text-gray-600">
                  <svg 
                    className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-label="Not available"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p className="text-sm leading-relaxed">
                    <span className="font-medium text-gray-700">Traditional Institute:</span> {item.traditional}
                  </p>
                </div>
                
                {/* Highlighted Value - Line 3 */}
                <div className="flex items-start gap-2 p-3 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 border-l-4 border-green-400">
                  <svg 
                    className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-label="Available"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-sm leading-relaxed text-gray-900 font-medium">
                    <span className="font-semibold text-green-700">WeLearnWeShare:</span> {item.welearn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-6 md:py-10 px-4 bg-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-semibold text-center text-gray-900 mb-8 md:mb-12">
            Why Choose WeLearnWeShare?
          </h2>
          
          <div className="space-y-8 md:space-y-12">
            {/* Feature 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="order-2 md:order-1 flex items-center justify-center">
                <div className="relative w-48 h-48 md:w-56 md:h-56">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <defs>
                      <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#fb923c" />
                        <stop offset="100%" stopColor="#f97316" />
                      </linearGradient>
                      <linearGradient id="grad1Halo" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#fb923c" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#f97316" stopOpacity="0.15" />
                      </linearGradient>
                    </defs>
                    {/* Large circular halo behind */}
                    <circle cx="100" cy="100" r="80" fill="url(#grad1Halo)" />
                    {/* Main icon with gradient */}
                    <g transform="translate(100, 100) scale(6)">
                      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" stroke="url(#grad1)" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" fill="none" transform="translate(-12, -12)" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="order-1 md:order-2 space-y-4">
                <h3 className="text-[clamp(1.25rem,2.5vw,2rem)] font-semibold text-gray-900">
                  Community-Powered Discounting
                </h3>
                <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-600 leading-relaxed">
                  Pay less when more learners enroll.
                </p>
                <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-600 leading-relaxed">
                  Our group-based pricing model reduces the course fee automatically as the community grows — making premium training accessible to everyone.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-[clamp(1.25rem,2.5vw,2rem)] font-semibold text-gray-900">
                  Learn from the Best — At an Affordable Cost
                </h3>
                <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-600 leading-relaxed">
                  We bring top industry trainers to you.
                </p>
                <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-600 leading-relaxed">
                  Because costs are shared across the community, you get expert-led training at a fraction of the usual price.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-48 h-48 md:w-56 md:h-56">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <defs>
                      <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#60a5fa" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                      <linearGradient id="grad2Halo" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.15" />
                      </linearGradient>
                    </defs>
                    {/* Large circular halo behind */}
                    <circle cx="100" cy="100" r="80" fill="url(#grad2Halo)" />
                    {/* Main icon with gradient */}
                    <g transform="translate(100, 100) scale(6)">
                      <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="url(#grad2)" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" fill="none" transform="translate(-12, -12)" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="order-2 md:order-1 flex items-center justify-center">
                <div className="relative w-48 h-48 md:w-56 md:h-56">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <defs>
                      <linearGradient id="grad3" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#a78bfa" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                      <linearGradient id="grad3Halo" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.15" />
                      </linearGradient>
                    </defs>
                    {/* Large circular halo behind */}
                    <circle cx="100" cy="100" r="80" fill="url(#grad3Halo)" />
                    {/* Main icon with gradient */}
                    <g transform="translate(100, 100) scale(6)">
                      <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke="url(#grad3)" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" fill="none" transform="translate(-12, -12)" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="order-1 md:order-2 space-y-4">
                <h3 className="text-[clamp(1.25rem,2.5vw,2rem)] font-semibold text-gray-900">
                  Trainer Quality Guaranteed — Change by Live Voting
                </h3>
                <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-600 leading-relaxed">
                  Not satisfied with the trainer?
                </p>
                <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-600 leading-relaxed">
                  Students can initiate a live voting session to request a trainer switch anytime.
                </p>
                <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-600 leading-relaxed">
                  Your learning experience stays transparent, high-quality, and student-driven.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-[clamp(1.25rem,2.5vw,2rem)] font-semibold text-gray-900">
                  Certification + Learning Materials Included
                </h3>
                <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-600 leading-relaxed mb-4">
                  Every course includes:
                </p>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3 md:p-4 border-l-4 border-primary-600 border border-gray-200 shadow-sm">
                    <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-900 font-medium">Completion certificate</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 md:p-4 border-l-4 border-primary-600 border border-gray-200 shadow-sm">
                    <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-900 font-medium">Downloadable study materials</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 md:p-4 border-l-4 border-primary-600 border border-gray-200 shadow-sm">
                    <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-900 font-medium">Community updates</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 md:p-4 border-l-4 border-primary-600 border border-gray-200 shadow-sm">
                    <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-900 font-medium">Project templates and case studies</p>
                  </div>
                </div>
                <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-600 leading-relaxed pt-2">
                  Designed to help you learn effectively and build strong portfolios.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-48 h-48 md:w-56 md:h-56">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <defs>
                      <linearGradient id="grad4" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#86efac" />
                        <stop offset="100%" stopColor="#4ade80" />
                      </linearGradient>
                      <linearGradient id="grad4Halo" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#86efac" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#4ade80" stopOpacity="0.15" />
                      </linearGradient>
                    </defs>
                    {/* Large circular halo behind */}
                    <circle cx="100" cy="100" r="80" fill="url(#grad4Halo)" />
                    {/* Main icon with gradient */}
                    <g transform="translate(100, 100) scale(6)">
                      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" stroke="url(#grad4)" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" fill="none" transform="translate(-12, -12)" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="order-2 md:order-1 flex items-center justify-center">
                <div className="relative w-48 h-48 md:w-56 md:h-56">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <defs>
                      <linearGradient id="grad5" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#f9a8d4" />
                        <stop offset="100%" stopColor="#f472b6" />
                      </linearGradient>
                      <linearGradient id="grad5Halo" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#f9a8d4" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#f472b6" stopOpacity="0.15" />
                      </linearGradient>
                    </defs>
                    {/* Large circular halo behind */}
                    <circle cx="100" cy="100" r="80" fill="url(#grad5Halo)" />
                    {/* Main icon with gradient */}
                    <g transform="translate(100, 100) scale(6)">
                      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" stroke="url(#grad5)" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" fill="none" transform="translate(-12, -12)" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="order-1 md:order-2 space-y-4">
                <h3 className="text-[clamp(1.25rem,2.5vw,2rem)] font-semibold text-gray-900">
                  Strong Community Support
                </h3>
                <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-600 leading-relaxed">
                  Join a thriving learner community where you can:
                </p>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3 md:p-4 border-l-4 border-primary-600 border border-gray-200 shadow-sm">
                    <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-900 font-medium">Ask questions</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 md:p-4 border-l-4 border-primary-600 border border-gray-200 shadow-sm">
                    <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-900 font-medium">Get help from peers</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 md:p-4 border-l-4 border-primary-600 border border-gray-200 shadow-sm">
                    <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-900 font-medium">Solve tasks together</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 md:p-4 border-l-4 border-primary-600 border border-gray-200 shadow-sm">
                    <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-900 font-medium">Receive mentor guidance</p>
                  </div>
                </div>
                <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-600 leading-relaxed pt-2 font-semibold">
                  You&apos;ll never learn alone.
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-[clamp(1.25rem,2.5vw,2rem)] font-semibold text-gray-900">
                  Get Hired Through In-House Tasks
                </h3>
                <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-600 leading-relaxed">
                  Work on real tasks from our internal ecosystem. Standout performers:
                </p>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3 md:p-4 border-l-4 border-primary-600 border border-gray-200 shadow-sm">
                    <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-900 font-medium">Get listed on our Talent Portal</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 md:p-4 border-l-4 border-primary-600 border border-gray-200 shadow-sm">
                    <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-900 font-medium">Receive direct hiring opportunities</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 md:p-4 border-l-4 border-primary-600 border border-gray-200 shadow-sm">
                    <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-900 font-medium">Build verified project experience</p>
                  </div>
                </div>
                <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-600 leading-relaxed pt-2 font-semibold">
                  Your skills become your strongest asset.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-48 h-48 md:w-56 md:h-56">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <defs>
                      <linearGradient id="grad6" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#818cf8" />
                        <stop offset="100%" stopColor="#6366f1" />
                      </linearGradient>
                      <linearGradient id="grad6Halo" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#818cf8" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.15" />
                      </linearGradient>
                    </defs>
                    {/* Large circular halo behind */}
                    <circle cx="100" cy="100" r="80" fill="url(#grad6Halo)" />
                    {/* Main icon with gradient */}
                    <g transform="translate(100, 100) scale(6)">
                      <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="url(#grad6)" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" fill="none" transform="translate(-12, -12)" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            {/* Feature 7 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="order-2 md:order-1 flex items-center justify-center">
                <div className="relative w-48 h-48 md:w-56 md:h-56">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <defs>
                      <linearGradient id="grad7" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#5eead4" />
                        <stop offset="100%" stopColor="#14b8a6" />
                      </linearGradient>
                      <linearGradient id="grad7Halo" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#5eead4" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.15" />
                      </linearGradient>
                    </defs>
                    {/* Large circular halo behind */}
                    <circle cx="100" cy="100" r="80" fill="url(#grad7Halo)" />
                    {/* Main icon with gradient */}
                    <g transform="translate(100, 100) scale(6)">
                      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" stroke="url(#grad7)" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" fill="none" transform="translate(-12, -12)" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="order-1 md:order-2 space-y-4">
                <h3 className="text-[clamp(1.25rem,2.5vw,2rem)] font-semibold text-gray-900">
                  A Clear Roadmap from Beginner to Job-Ready
                </h3>
                <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-600 leading-relaxed">
                  Every course includes a structured roadmap with:
                </p>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3 md:p-4 border-l-4 border-primary-600 border border-gray-200 shadow-sm">
                    <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-900 font-medium">Clear milestones</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 md:p-4 border-l-4 border-primary-600 border border-gray-200 shadow-sm">
                    <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-900 font-medium">Hands-on projects</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 md:p-4 border-l-4 border-primary-600 border border-gray-200 shadow-sm">
                    <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-900 font-medium">Weekly goals</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 md:p-4 border-l-4 border-primary-600 border border-gray-200 shadow-sm">
                    <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-900 font-medium">Progress tracking</p>
                  </div>
                </div>
                <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-600 leading-relaxed pt-2">
                  You always know exactly what to learn next.
                </p>
              </div>
            </div>

            {/* Feature 8 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-[clamp(1.25rem,2.5vw,2rem)] font-semibold text-gray-900">
                  Personalized Career Guidance
                </h3>
                <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-600 leading-relaxed">
                  We support you beyond the classroom with:
                </p>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3 md:p-4 border-l-4 border-primary-600 border border-gray-200 shadow-sm">
                    <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-900 font-medium">Resume building</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 md:p-4 border-l-4 border-primary-600 border border-gray-200 shadow-sm">
                    <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-900 font-medium">Portfolio review</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 md:p-4 border-l-4 border-primary-600 border border-gray-200 shadow-sm">
                    <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-900 font-medium">Mock interviews</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 md:p-4 border-l-4 border-primary-600 border border-gray-200 shadow-sm">
                    <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-900 font-medium">Growth planning</p>
                  </div>
                </div>
                <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-600 leading-relaxed pt-2">
                  So you can step confidently into your career.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-48 h-48 md:w-56 md:h-56">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <defs>
                      <linearGradient id="grad8" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#fcd34d" />
                        <stop offset="100%" stopColor="#f59e0b" />
                      </linearGradient>
                      <linearGradient id="grad8Halo" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#fcd34d" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.15" />
                      </linearGradient>
                    </defs>
                    {/* Large circular halo behind */}
                    <circle cx="100" cy="100" r="80" fill="url(#grad8Halo)" />
                    {/* Main icon with gradient */}
                    <g transform="translate(100, 100) scale(6)">
                      <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke="url(#grad8)" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" fill="none" transform="translate(-12, -12)" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section - Step by Step Process */}
      <section className="py-6 md:py-10 px-4 bg-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="mb-8 md:mb-12">
            <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-semibold text-gray-900 text-center">
              Your Journey with WeLearnWeShare
            </h2>
          </div>
          
          {/* Journey Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                step: 1,
                title: 'Choose Your Course',
                description: 'Select a skill track that matches your career goals and book your seat',
              },
              {
                step: 2,
                title: 'Join Community',
                description: 'Connect with peers, join forums, and start your learning journey together',
              },
              {
                step: 3,
                title: 'Watch Fees Drop',
                description: 'As more students enroll, everyone pays less automatically through community pricing',
              },
              {
                step: 4,
                title: 'Learn & Practice',
                description: 'Get expert instruction at affordable rates and complete hands-on projects',
              },
              {
                step: 5,
                title: 'Earn Certification',
                description: 'Receive official certification and get listed on our Talent Portal',
              },
              {
                step: 6,
                title: 'Get Hired',
                description: 'Receive direct interview invites from employers and land your dream role',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-lg border border-gray-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 focus-within:outline-none"
                tabIndex={0}
              >
                {/* Numbered Icon */}
                <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-primary-600 text-primary-600 font-semibold text-lg md:text-xl mb-4 mx-auto bg-transparent">
                  {item.step}
                </div>
                
                {/* Title */}
                <h3 className="text-[clamp(1rem,2vw,1.25rem)] font-semibold text-gray-900 mb-2 text-center">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm md:text-base text-gray-600 leading-relaxed text-center">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-6 md:py-10 px-4 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 max-w-screen-lg text-center space-y-6 md:space-y-8">
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-semibold">
            🚀 Start Learning the Smarter Way
          </h2>
          <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-primary-100 max-w-2xl mx-auto leading-relaxed">
            High-quality training, community-backed pricing, and real career outcomes — all in one platform.
          </p>
          <p className="text-[clamp(1.125rem,2.5vw,1.5rem)] font-semibold">
            Join WeLearnWeShare today.
          </p>
          <p className="text-[clamp(1.125rem,2.5vw,1.5rem)] font-semibold">
            Learn more. Pay less. Build your future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap pt-4">
            <JoinCommunityButton
              className="bg-white text-primary-600 px-8 py-3 md:px-10 md:py-4 text-sm md:text-base rounded-xl shadow-sm hover:bg-primary-50 transition font-semibold focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600 min-w-[160px] text-center"
              aria-label="Join WeLearnWeShare now"
            >
              Join Now
            </JoinCommunityButton>
            <a
              href="#courses"
              className="bg-transparent text-white border-2 border-white px-8 py-3 md:px-10 md:py-4 text-sm md:text-base rounded-xl shadow-sm hover:bg-white/10 transition font-semibold focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600 min-w-[160px] text-center"
              aria-label="Explore available courses"
            >
              Explore Courses
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

