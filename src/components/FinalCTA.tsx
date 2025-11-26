export default function FinalCTA() {
  return (
    <section id="join" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Ready to Learn, Save, and Get Hired?
        </h2>
        <p className="text-xl mb-8 text-primary-100">
          Join a cohort, invite friends, and watch your course fee fall. Learn from top trainers,
          finish real projects, and get listed for hiring.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#join-form"
            className="bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-primary-50 transition font-semibold text-lg shadow-lg"
          >
            Join Now
          </a>
          <a
            href="#contact"
            className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg hover:bg-white/10 transition font-semibold text-lg"
          >
            Contact Admissions
          </a>
        </div>
      </div>
    </section>
  )
}

