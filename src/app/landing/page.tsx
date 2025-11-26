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
            ⭐ Why Choose WeLearnWeShare?
          </h2>
          
          <div className="space-y-8 md:space-y-12">
            {/* Feature 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-primary-50 rounded-xl p-6 md:p-8 border-2 border-primary-200 h-full">
                  <div className="text-[clamp(2rem,4vw,3.5rem)] mb-4">1️⃣</div>
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
                <div className="bg-primary-50 rounded-xl p-6 md:p-8 border-2 border-primary-200 h-full">
                  <div className="text-[clamp(2rem,4vw,3.5rem)] mb-4">2️⃣</div>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-primary-50 rounded-xl p-6 md:p-8 border-2 border-primary-200 h-full">
                  <div className="text-[clamp(2rem,4vw,3.5rem)] mb-4">3️⃣</div>
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
                <div className="bg-primary-50 rounded-xl p-6 md:p-8 border-2 border-primary-200 h-full">
                  <div className="text-[clamp(2rem,4vw,3.5rem)] mb-4">4️⃣</div>
                </div>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-primary-50 rounded-xl p-6 md:p-8 border-2 border-primary-200 h-full">
                  <div className="text-[clamp(2rem,4vw,3.5rem)] mb-4">5️⃣</div>
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
                <div className="bg-primary-50 rounded-xl p-6 md:p-8 border-2 border-primary-200 h-full">
                  <div className="text-[clamp(2rem,4vw,3.5rem)] mb-4">6️⃣</div>
                </div>
              </div>
            </div>

            {/* Feature 7 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-primary-50 rounded-xl p-6 md:p-8 border-2 border-primary-200 h-full">
                  <div className="text-[clamp(2rem,4vw,3.5rem)] mb-4">7️⃣</div>
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
                <div className="bg-primary-50 rounded-xl p-6 md:p-8 border-2 border-primary-200 h-full">
                  <div className="text-[clamp(2rem,4vw,3.5rem)] mb-4">8️⃣</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-6 md:py-10 px-4 bg-gray-50">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-center text-gray-900 mb-8 md:mb-12">
            🎯 Your Journey with WeLearnWeShare
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              'Choose your course',
              'Join the learning community',
              'Watch fees reduce as more students enroll',
              'Learn from top trainers',
              'Complete projects & tasks',
              'Earn certification',
              'Get listed on our talent portal',
              'Get hired'
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 md:p-6 border-2 border-primary-200 hover:shadow-lg transition"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-[clamp(0.875rem,2vw,1rem)] text-gray-700 pt-0.5">
                    {step}
                  </p>
                </div>
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

