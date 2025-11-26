import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-6 md:py-10 px-4 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="text-center space-y-4 md:space-y-6">
            <h1 className="text-[clamp(1.75rem,4vw,3.5rem)] font-bold text-gray-900">
              WeLearnWeShare
            </h1>
            <p className="text-[clamp(1rem,2.5vw,1.5rem)] text-primary-600 font-semibold">
              Learn Together. Grow Together.
            </p>
            <h2 className="text-[clamp(1.25rem,3vw,2.5rem)] font-bold text-gray-900 pt-4">
              Unlock Skills. Reduce Costs. Shape Your Career.
            </h2>
            <p className="text-[clamp(0.875rem,2vw,1.125rem)] text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At WeLearnWeShare, learning isn&apos;t individual—it&apos;s powered by the community. As more students join, everyone benefits with lower fees, better trainers, and stronger career outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-6 md:py-10 px-4 bg-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-center text-gray-900 mb-8 md:mb-12">
            Why Choose WeLearnWeShare?
          </h2>
          
          <div className="space-y-8 md:space-y-12">
            {/* Feature 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="relative bg-primary-50 rounded-xl p-8 md:p-12 border-2 border-primary-200 h-full min-h-[300px] md:min-h-[400px] flex items-center justify-center">
                  <svg className="w-32 h-32 md:w-40 md:h-40 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div className="order-1 md:order-2 space-y-4">
                <h3 className="text-[clamp(1.25rem,2.5vw,2rem)] font-bold text-gray-900">
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
                <h3 className="text-[clamp(1.25rem,2.5vw,2rem)] font-bold text-gray-900">
                  Learn from the Best — At an Affordable Cost
                </h3>
                <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-600 leading-relaxed">
                  We bring top industry trainers to you.
                </p>
                <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-600 leading-relaxed">
                  Because costs are shared across the community, you get expert-led training at a fraction of the usual price.
                </p>
              </div>
              <div>
                <div className="relative bg-primary-50 rounded-xl p-8 md:p-12 border-2 border-primary-200 h-full min-h-[300px] md:min-h-[400px] flex items-center justify-center">
                  <svg className="w-32 h-32 md:w-40 md:h-40 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="relative bg-primary-50 rounded-xl p-8 md:p-12 border-2 border-primary-200 h-full min-h-[300px] md:min-h-[400px] flex items-center justify-center">
                  <svg className="w-32 h-32 md:w-40 md:h-40 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <div className="order-1 md:order-2 space-y-4">
                <h3 className="text-[clamp(1.25rem,2.5vw,2rem)] font-bold text-gray-900">
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
                <h3 className="text-[clamp(1.25rem,2.5vw,2rem)] font-bold text-gray-900">
                  Certification + Learning Materials Included
                </h3>
                <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-600 leading-relaxed mb-4">
                  Every course includes:
                </p>
                <ul className="space-y-2 text-[clamp(0.875rem,2vw,1rem)] text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Completion certificate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Downloadable study materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Lifetime updates (where applicable)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Project templates and case studies</span>
                  </li>
                </ul>
                <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-600 leading-relaxed pt-2">
                  Designed to help you learn effectively and build strong portfolios.
                </p>
              </div>
              <div>
                <div className="relative bg-primary-50 rounded-xl p-8 md:p-12 border-2 border-primary-200 h-full min-h-[300px] md:min-h-[400px] flex items-center justify-center">
                  <svg className="w-32 h-32 md:w-40 md:h-40 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="relative bg-primary-50 rounded-xl p-8 md:p-12 border-2 border-primary-200 h-full min-h-[300px] md:min-h-[400px] flex items-center justify-center">
                  <svg className="w-32 h-32 md:w-40 md:h-40 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div className="order-1 md:order-2 space-y-4">
                <h3 className="text-[clamp(1.25rem,2.5vw,2rem)] font-bold text-gray-900">
                  Strong Community Support
                </h3>
                <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-600 leading-relaxed">
                  Join a thriving learner community where you can:
                </p>
                <ul className="space-y-2 text-[clamp(0.875rem,2vw,1rem)] text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span>Ask questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span>Get help from peers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span>Solve tasks together</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    <span>Receive mentor guidance</span>
                  </li>
                </ul>
                <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-600 leading-relaxed pt-2 font-semibold">
                  You&apos;ll never learn alone.
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-[clamp(1.25rem,2.5vw,2rem)] font-bold text-gray-900">
                  Get Hired Through In-House Tasks
                </h3>
                <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-600 leading-relaxed">
                  Work on real tasks from our internal ecosystem. Standout performers:
                </p>
                <ul className="space-y-2 text-[clamp(0.875rem,2vw,1rem)] text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">→</span>
                    <span>Get listed on our Talent Portal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">→</span>
                    <span>Receive direct hiring opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">→</span>
                    <span>Build verified project experience</span>
                  </li>
                </ul>
                <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-600 leading-relaxed pt-2 font-semibold">
                  Your skills become your strongest asset.
                </p>
              </div>
              <div>
                <div className="relative bg-primary-50 rounded-xl p-8 md:p-12 border-2 border-primary-200 h-full min-h-[300px] md:min-h-[400px] flex items-center justify-center">
                  <svg className="w-32 h-32 md:w-40 md:h-40 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Feature 7 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="relative bg-primary-50 rounded-xl p-8 md:p-12 border-2 border-primary-200 h-full min-h-[300px] md:min-h-[400px] flex items-center justify-center">
                  <svg className="w-32 h-32 md:w-40 md:h-40 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
              </div>
              <div className="order-1 md:order-2 space-y-4">
                <h3 className="text-[clamp(1.25rem,2.5vw,2rem)] font-bold text-gray-900">
                  A Clear Roadmap from Beginner to Job-Ready
                </h3>
                <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-600 leading-relaxed">
                  Every course includes a structured roadmap with:
                </p>
                <ul className="space-y-2 text-[clamp(0.875rem,2vw,1rem)] text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>Clear milestones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>Hands-on projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>Weekly goals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">✓</span>
                    <span>Progress tracking</span>
                  </li>
                </ul>
                <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-600 leading-relaxed pt-2">
                  You always know exactly what to learn next.
                </p>
              </div>
            </div>

            {/* Feature 8 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-[clamp(1.25rem,2.5vw,2rem)] font-bold text-gray-900">
                  Personalized Career Guidance
                </h3>
                <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-600 leading-relaxed">
                  We support you beyond the classroom with:
                </p>
                <ul className="space-y-2 text-[clamp(0.875rem,2vw,1rem)] text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">→</span>
                    <span>Resume building</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">→</span>
                    <span>Portfolio review</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">→</span>
                    <span>Mock interviews</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600 mt-1">→</span>
                    <span>Growth planning</span>
                  </li>
                </ul>
                <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-600 leading-relaxed pt-2">
                  So you can step confidently into your career.
                </p>
              </div>
              <div>
                <div className="relative bg-primary-50 rounded-xl p-8 md:p-12 border-2 border-primary-200 h-full min-h-[300px] md:min-h-[400px] flex items-center justify-center">
                  <svg className="w-32 h-32 md:w-40 md:h-40 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section - Flat Tile Cards */}
      <section className="py-6 md:py-10 px-4 bg-gray-50">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-center text-gray-900 mb-8 md:mb-12">
            🎯 Your Journey with WeLearnWeShare
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { step: 1, title: 'Choose your course', description: 'Select a skill track that matches your career goals' },
              { step: 2, title: 'Join the learning community', description: 'Connect with peers and start your learning journey' },
              { step: 3, title: 'Watch fees reduce as more students enroll', description: 'As the community grows, everyone pays less automatically' },
              { step: 4, title: 'Learn from top trainers', description: 'Get expert instruction at affordable community rates' },
              { step: 5, title: 'Complete projects & tasks', description: 'Build real-world skills through hands-on practice' },
              { step: 6, title: 'Earn certification', description: 'Receive official certification and downloadable materials' },
              { step: 7, title: 'Get listed on our talent portal', description: 'Top performers get featured for employers to discover' },
              { step: 8, title: 'Get hired', description: 'Receive direct interview invites and land your dream role' }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 md:p-6 border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[clamp(0.875rem,1.5vw,1rem)] font-bold text-gray-900 leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <p className="text-[clamp(0.75rem,1.5vw,0.875rem)] text-gray-600 leading-relaxed">
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
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold">
            🚀 Start Learning the Smarter Way
          </h2>
          <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-primary-100 max-w-2xl mx-auto leading-relaxed">
            High-quality training, community-backed pricing, and real career outcomes — all in one platform.
          </p>
          <p className="text-[clamp(1.125rem,2.5vw,1.5rem)] font-semibold">
            Join WeLearnWeShare today.
          </p>
          <p className="text-[clamp(1.125rem,2.5vw,1.5rem)] font-bold">
            Learn more. Pay less. Build your future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap pt-4">
            <a
              href="#join"
              className="bg-white text-primary-600 px-4 py-2 md:px-5 md:py-3 text-sm md:text-base rounded-xl shadow-sm hover:bg-primary-50 transition font-semibold focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
            >
              Join Now
            </a>
            <a
              href="#courses"
              className="bg-transparent text-white border-2 border-white px-4 py-2 md:px-5 md:py-3 text-sm md:text-base rounded-xl shadow-sm hover:bg-white/10 transition font-semibold focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
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

