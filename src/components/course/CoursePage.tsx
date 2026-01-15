import Navigation from '@/components/Navigation'
import CourseContent from './CourseContent'
import ViewportStickyCard from './ViewportStickyCard'
import ShareButton from '@/components/ShareButton'
import JoinBatchButton from '@/components/JoinBatchButton'
import type { CourseFrontmatter } from '@/lib/markdown'

interface CoursePageProps {
  course: CourseFrontmatter
  courseId: string
  content: Record<string, string[]>
  otherCourses?: (CourseFrontmatter & { slug: string })[]
}

export default function CoursePage({
  course,
  courseId,
  content,
  otherCourses = [],
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
            <CourseContent course={course} courseId={courseId} content={content} otherCourses={otherCourses} />
          </div>

          {/* Right: 30% - sticky card within section */}
          <div className="lg:col-span-3 hidden lg:block">
            <ViewportStickyCard>
              <div className="bg-white shadow-lg border border-orange-200 p-6 space-y-6">
                {/* Title */}
                <h2 className="text-lg font-semibold text-gray-900 mb-2 w-fit">
                  Interested in this Program? Secure your spot now!
                </h2>
                
                {/* Students Enrolled */}
                <div className="space-y-2">
                  <p className="text-xs text-gray-600">Students enrolled:</p>
                  <p className="text-2xl font-semibold text-primary-600">7 / 10</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="h-2.5 rounded-full bg-primary-600 transition-all duration-300"
                      style={{ width: '70%' }}
                    />
                  </div>
                </div>
                
                {/* Current Price and Capacity Price */}
                <div className="grid grid-cols-2 gap-4 items-start">
                  {/* Current Price */}
                  <div className="space-y-2 text-center p-3">
                    <p className="text-xs text-gray-600">Current price</p>
                    <p className="text-xl font-semibold text-primary-600">₹14,143</p>
                    <p className="text-xs text-gray-500 whitespace-nowrap">
                      99,000/7
                    </p>
                  </div>
                  
                  {/* Capacity Price */}
                  <div className="space-y-2 text-center border-2 border-primary-600 rounded-lg p-3">
                    <p className="text-xs text-gray-600">Capacity price</p>
                    <p className="text-xl font-semibold text-primary-600">₹9,900</p>
                    <p className="text-xs text-gray-500 whitespace-nowrap">
                      99,000/10
                    </p>
                  </div>
                </div>
                
                <p className="text-xs text-gray-500 pt-2 border-t border-gray-200">Price drops as more students join</p>
                
                {/* Join Batch and Share in same row */}
                <div className="flex items-center gap-3">
                  <JoinBatchButton
                    courseTitle={course.title}
                    batchType={course.batchType}
                    className="flex-1 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition font-semibold text-center"
                  >
                    Join Batch
                  </JoinBatchButton>
                  
                  <ShareButton 
                    url={`https://www.welearnweshare.com/batches/${courseId}`}
                    title={course.title}
                    iconOnly={true}
                    className="flex-shrink-0"
                  />
                </div>
              </div>
            </ViewportStickyCard>
          </div>
        </div>
      </main>
    </div>
  )
}

