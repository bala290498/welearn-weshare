export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Product Manager',
      company: 'TechCorp',
      course: 'Product Management Track',
      quote:
        'Landed a product role at TechCorp after my capstone project. The community support was incredible!',
      image: '👩‍💼',
    },
    {
      name: 'Marcus Johnson',
      role: 'Full-Stack Developer',
      company: 'StartupXYZ',
      course: 'Full-Stack Development',
      quote:
        'Got hired directly through the Talent Portal. The projects I built during the course became my portfolio.',
      image: '👨‍💻',
    },
    {
      name: 'Priya Patel',
      role: 'Data Analyst',
      company: 'DataFlow Inc',
      course: 'Data Science & Analytics',
      quote:
        'The mentorship program helped me ace my interviews. I received 3 offers within 2 months of completing the course.',
      image: '👩‍🔬',
    },
    {
      name: 'David Kim',
      role: 'UX Designer',
      company: 'DesignStudio',
      course: 'UX/UI Design',
      quote:
        'The live trainer vote feature ensured we had the best instructor. Worth every penny!',
      image: '👨‍🎨',
    },
  ]

  const partnerLogos = [
    'TechCorp',
    'StartupXYZ',
    'DataFlow Inc',
    'DesignStudio',
    'CloudTech',
    'InnovateLabs',
  ]

  return (
    <section className="py-6 md:py-10 px-4 bg-gray-50">
      <div className="container mx-auto px-4 max-w-screen-lg">
        <h2 className="text-[clamp(1.25rem,2.5vw,2.5rem)] font-bold text-center text-gray-900 mb-4">
          Success Stories
        </h2>
        <p className="text-center text-gray-600 mb-8 md:mb-12 text-[clamp(0.875rem,2vw,1rem)]">
          Real outcomes from real learners
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div className="flex-1">
                  <h3 className="text-[clamp(1rem,2vw,1.125rem)] font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </p>
                  <p className="text-xs text-primary-600 mt-1">{testimonial.course}</p>
                </div>
              </div>
              <p className="text-gray-700 italic text-sm md:text-base">&ldquo;{testimonial.quote}&rdquo;</p>
            </div>
          ))}
        </div>
        <div className="text-center mb-8">
          <div className="inline-block bg-white rounded-lg px-8 py-6 shadow-md">
            <div className="text-4xl font-bold text-primary-600 mb-2">40%</div>
            <div className="text-gray-700 font-semibold">Placed within 3 months</div>
            <div className="text-sm text-gray-600 mt-1">of course completion</div>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-center text-[clamp(1rem,2vw,1.125rem)] font-semibold text-gray-900 mb-6">
            Partner Employers
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {partnerLogos.map((logo, index) => (
              <div
                key={index}
                className="bg-white px-6 py-3 rounded-lg shadow-sm border border-gray-200 text-gray-700 font-medium"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

