import Navigation from '@/components/Navigation'
import CourseHero from './CourseHero'
import CourseBadgeBanner from './CourseBadgeBanner'
import CourseContent from './CourseContent'
import CoursePricingCard from './CoursePricingCard'
import type { CourseFrontmatter } from '@/lib/markdown'
import type { PriceCalculation } from '@/lib/course-utils'

interface CoursePageProps {
  course: CourseFrontmatter
  courseId: string
  content: Record<string, string[]>
  pricing: PriceCalculation
  hasDynamicPricing: boolean
}

export default function CoursePage({
  course,
  courseId,
  content,
  pricing,
  hasDynamicPricing,
}: CoursePageProps) {
  return (
    <main className="min-h-screen -mt-16 md:mt-0">
      <div className="hidden lg:block">
        <Navigation />
      </div>

      <CourseHero course={course} courseId={courseId} />
      <CourseBadgeBanner />

      {hasDynamicPricing ? (
        <section className="py-6 md:py-10 px-4 bg-white relative pb-36 lg:pb-6">
          <div className="container mx-auto px-4 max-w-screen-xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8 md:space-y-12 lg:mr-8">
                <CourseContent course={course} courseId={courseId} content={content} />
              </div>

              {/* Right Column: Fixed Dynamic Group Pricing */}
              <div className="lg:col-span-1">
                {/* Spacer div to maintain grid layout */}
                <div className="lg:block hidden">
                  <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 space-y-6 opacity-0 pointer-events-none">
                    {/* Invisible placeholder to maintain layout */}
                    <div className="h-96"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fixed Dynamic Group Pricing Card */}
          <CoursePricingCard course={course} courseId={courseId} pricing={pricing} />
        </section>
      ) : (
        <section className="py-6 md:py-10 px-4 bg-white">
          <div className="container mx-auto px-4 max-w-screen-lg">
            <div className="space-y-8 md:space-y-12">
              <CourseContent course={course} courseId={courseId} content={content} />
            </div>
          </div>
        </section>
      )}
    </main>
  )
}

