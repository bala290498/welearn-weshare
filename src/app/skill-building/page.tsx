import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { getAllCourses } from '@/lib/markdown'

export default function SkillBuildingPage() {
  const courses = getAllCourses()
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="py-6 md:py-10 px-4 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="text-center space-y-4 md:space-y-6">
            <h1 className="text-[clamp(1.75rem,4vw,3.5rem)] font-bold text-gray-900">
              Skill Building
            </h1>
            <p className="text-[clamp(1rem,2.5vw,1.5rem)] text-primary-600 font-semibold">
              Build Your Skills. Build Your Future.
            </p>
            <p className="text-[clamp(0.875rem,2vw,1.125rem)] text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover comprehensive courses designed to help you master in-demand skills and advance your career.
            </p>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-10 px-4 bg-white">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {courses.map((course) => (
              <Link
                key={course.id}
                href={`/skill-building/${course.slug}`}
                className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 focus-within:outline-none"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full">
                    {course.category}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {course.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {course.description}
                </p>
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Duration:</span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Level:</span>
                    <span>{course.level}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Price:</span>
                    <span className="text-primary-600 font-semibold">{course.price}</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <span className="text-primary-600 font-semibold text-sm hover:underline">
                    View Details →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

