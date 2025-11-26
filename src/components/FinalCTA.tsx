export default function FinalCTA() {
  return (
    <section id="join" className="py-6 md:py-10 px-4 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="container mx-auto px-4 max-w-screen-lg text-center">
        <h2 className="text-[clamp(1.25rem,3vw,2.5rem)] font-bold mb-4 md:mb-6">
          Ready to Learn, Save, and Get Hired?
        </h2>
        <p className="text-[clamp(0.875rem,2vw,1.25rem)] mb-6 md:mb-8 text-primary-100">
          Join a cohort, invite friends, and watch your course fee fall. Learn from top trainers,
          finish real projects, and get listed for hiring.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
          <a
            href="#join-form"
            className="bg-white text-primary-600 px-4 py-2 md:px-5 md:py-3 text-sm md:text-base rounded-xl shadow-sm hover:bg-primary-50 transition font-semibold focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
          >
            Join Now
          </a>
          <a
            href="#contact"
            className="bg-transparent text-white border-2 border-white px-4 py-2 md:px-5 md:py-3 text-sm md:text-base rounded-xl shadow-sm hover:bg-white/10 transition font-semibold focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
          >
            Contact Admissions
          </a>
        </div>
      </div>
    </section>
  )
}

