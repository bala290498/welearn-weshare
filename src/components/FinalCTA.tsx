'use client'

import JoinCommunityButton from '@/components/JoinCommunityButton'

export default function FinalCTA() {
  return (
    <section id="join" className="py-6 md:py-10 px-4 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-semibold text-center mb-8 md:mb-12">
          Ready to Learn, Save, and Get Hired?
        </h2>
        <p className="text-[clamp(0.875rem,2vw,1.25rem)] mb-6 md:mb-8 text-primary-100">
          Join a batch, invite friends, and watch your course fee fall. Learn from top trainers,
          finish real projects, and get listed for hiring.
        </p>
        <div className="flex justify-center">
          <JoinCommunityButton className="bg-white text-primary-600 px-4 py-2 md:px-5 md:py-3 text-sm md:text-base rounded-xl shadow-sm hover:bg-primary-50 transition font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-600">
            Join Community
          </JoinCommunityButton>
        </div>
      </div>
    </section>
  )
}

