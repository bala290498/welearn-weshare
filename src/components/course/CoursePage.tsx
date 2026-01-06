import Navigation from '@/components/Navigation'
import CourseHero from './CourseHero'
import CourseBadgeBanner from './CourseBadgeBanner'
import CourseContent from './CourseContent'
import StickyPricingCard from '@/components/StickyPricingCard'
import Footer from '@/components/Footer'
import { formatPrice } from '@/lib/course-utils'
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
        <section className="py-6 md:py-10 px-4 bg-white relative min-h-screen flex flex-col">
          <div className="container mx-auto px-4 max-w-screen-xl flex-1 flex flex-col">
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 flex-1">
              {/* 70% Content Column */}
              <div className="lg:col-span-7 space-y-8 md:space-y-12">
                <CourseContent course={course} courseId={courseId} content={content} />
              </div>

              {/* 30% Sticky Card Column */}
              <div className="lg:col-span-3">
                <div className="lg:sticky lg:top-20 lg:max-h-[calc(100vh-5rem)] lg:overflow-y-auto">
                  <StickyPricingCard
                    course={course}
                    id={courseId}
                    validEnrolled={pricing.validEnrolled}
                    maxStudents={pricing.maxStudents}
                    currentPrice={formatPrice(pricing.currentPrice)}
                    potentialPrice={formatPrice(pricing.potentialPrice)}
                    basePrice={pricing.basePrice}
                  />
                </div>
              </div>
            </div>
            
            {/* Sticky Footer within section */}
            <div className="mt-auto lg:sticky lg:bottom-0 lg:z-10">
              <Footer />
            </div>
          </div>
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

