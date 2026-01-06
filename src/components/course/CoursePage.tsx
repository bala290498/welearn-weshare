import Navigation from '@/components/Navigation'
import CourseContent from './CourseContent'
import FixedSideCard from './FixedSideCard'
import Footer from '@/components/Footer'
import type { CourseFrontmatter } from '@/lib/markdown'

interface CoursePageProps {
  course: CourseFrontmatter
  courseId: string
  content: Record<string, string[]>
}

export default function CoursePage({
  course,
  courseId,
  content,
}: CoursePageProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="hidden lg:block">
        <Navigation />
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
          <p className="text-lg text-white/90 max-w-2xl">
            {course.description}
          </p>
        </div>
      </section>

      {/* Main */}
      <main className="flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 p-6 max-w-screen-xl mx-auto">
          {/* Left: 70% content */}
          <div className="lg:col-span-7">
            <CourseContent course={course} courseId={courseId} content={content} />
          </div>

          {/* Right: 30% - placeholder for fixed card positioning */}
          <div className="lg:col-span-3 hidden lg:block">
            {/* Spacer to maintain grid layout */}
          </div>
        </div>

        {/* Fixed card - stays in viewport, stops before footer */}
        <FixedSideCard>
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Sample Card</h3>
            <p className="text-gray-600 text-sm mb-4">
              This card stays in the viewport while scrolling.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Always in viewport</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>Vertically centered</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>Stops before footer</span>
              </div>
            </div>
            <button className="mt-4 w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition font-medium">
              Sample Action
            </button>
          </div>
        </FixedSideCard>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

