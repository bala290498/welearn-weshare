export default function CourseBadgeBanner() {
  return (
    <section className="py-4 md:py-6 bg-primary-50">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 lg:mr-8">
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 text-sm font-semibold rounded-full border border-green-200">
                Live Training
              </span>
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 text-orange-700 text-sm font-semibold rounded-full border border-orange-200">
                Certification
              </span>
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-violet-100 text-purple-700 text-sm font-semibold rounded-full border border-purple-200">
                Dynamic Group Pricing
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

