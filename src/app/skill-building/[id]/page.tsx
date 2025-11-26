import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { getCourseBySlug } from '@/lib/markdown'
import { notFound } from 'next/navigation'

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const courseData = getCourseBySlug(params.id)

  if (!courseData) {
    notFound()
  }

  const course = courseData.frontmatter
  const content = courseData.content

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="py-6 md:py-10 px-4 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="mb-4">
            <a 
              href="/skill-building" 
              className="text-primary-600 hover:text-primary-700 text-sm font-medium"
            >
              ← Back to Courses
            </a>
          </div>
          <div className="space-y-4 md:space-y-6">
            <div>
              <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-4">
                {course.category}
              </span>
            </div>
            <h1 className="text-[clamp(1.75rem,4vw,3.5rem)] font-bold text-gray-900">
              {course.title}
            </h1>
            <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-gray-600 leading-relaxed">
              {course.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-10 px-4 bg-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="bg-gray-50 rounded-lg p-4 md:p-6">
              <h3 className="text-sm font-semibold text-gray-500 mb-2">Duration</h3>
              <p className="text-lg font-bold text-gray-900">{course.duration}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 md:p-6">
              <h3 className="text-sm font-semibold text-gray-500 mb-2">Level</h3>
              <p className="text-lg font-bold text-gray-900">{course.level}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 md:p-6">
              <h3 className="text-sm font-semibold text-gray-500 mb-2">Price</h3>
              <p className="text-lg font-bold text-primary-600">{course.price}</p>
            </div>
          </div>

          <div className="space-y-8 md:space-y-12">
            {/* Course Syllabus */}
            <div>
              <div className="border-b-2 border-gray-200 pb-3 mb-6">
                <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold text-gray-900">
                  Course Syllabus
                </h2>
              </div>
              <ul className="space-y-3">
                {(content['Course Syllabus'] || []).map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-semibold mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Course Features */}
            <div>
              <div className="border-b-2 border-gray-200 pb-3 mb-6">
                <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold text-gray-900">
                  Course Features
                </h2>
              </div>
              <ul className="space-y-3">
                {(content['Course Features'] || []).map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prerequisites */}
            <div>
              <div className="border-b-2 border-gray-200 pb-3 mb-6">
                <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold text-gray-900">
                  Prerequisites
                </h2>
              </div>
              <ul className="space-y-3">
                {(content['Prerequisites'] || []).map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700 text-sm md:text-base">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructor */}
            <div>
              <div className="border-b-2 border-gray-200 pb-3 mb-6">
                <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold text-gray-900">
                  Instructor
                </h2>
              </div>
              <p className="text-gray-700 text-sm md:text-base">
                {course.instructor}
              </p>
            </div>

            {/* Contact Details */}
            <div className="bg-primary-50 rounded-lg p-6 md:p-8">
              <div className="border-b-2 border-primary-200 pb-3 mb-6">
                <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold text-gray-900">
                  Contact Details
                </h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-1">Email</h3>
                  <a 
                    href={`mailto:${course.contactEmail}`}
                    className="text-primary-600 hover:text-primary-700 text-sm md:text-base"
                  >
                    {course.contactEmail}
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-1">Phone</h3>
                  <a 
                    href={`tel:${course.contactPhone}`}
                    className="text-primary-600 hover:text-primary-700 text-sm md:text-base"
                  >
                    {course.contactPhone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

