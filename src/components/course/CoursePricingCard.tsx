import ShareButton from '@/components/ShareButton'
import JoinBatchButton from '@/components/JoinBatchButton'
import type { CourseFrontmatter } from '@/lib/markdown'
import type { PriceCalculation } from '@/lib/course-utils'
import { formatPrice } from '@/lib/course-utils'

interface CoursePricingCardProps {
  course: CourseFrontmatter
  courseId: string
  pricing: PriceCalculation
}

export default function CoursePricingCard({
  course,
  courseId,
  pricing,
}: CoursePricingCardProps) {
  const { basePrice, currentPrice, potentialPrice, validEnrolled, maxStudents } = pricing

  const batchTypeColor =
    course.batchType === 'collective'
      ? 'purple'
      : course.batchType === 'prime'
        ? 'orange'
        : 'primary'

  const colorClasses = {
    purple: {
      text: 'text-purple-600',
      border: 'border-purple-600',
    },
    orange: {
      text: 'text-orange-600',
      border: 'border-orange-600',
    },
    primary: {
      text: 'text-primary-600',
      border: 'border-primary-600',
    },
  }

  const colors = colorClasses[batchTypeColor]

  return (
    <div className="fixed bottom-0 left-0 right-0 lg:bottom-4 lg:left-auto lg:right-4 xl:right-[calc((100vw-1280px)/2+1rem)] lg:w-[420px] xl:w-[480px] z-50 lg:rounded-lg lg:shadow-lg">
      <div className="bg-white border-t lg:border border-gray-200 lg:rounded-lg shadow-2xl lg:shadow-lg p-2 lg:p-6 space-y-2 lg:space-y-6 max-h-[85vh] overflow-y-auto">
        {/* Title - Hidden on mobile */}
        <h2 className="hidden lg:block text-xl font-semibold text-gray-900 border-b-2 border-gray-200 pb-3">
          {course.title}
        </h2>

        {/* Mobile Layout: Students Enrolled with Join and Share buttons */}
        <div className="lg:hidden flex items-center gap-2 pb-2 border-b border-gray-200">
          {/* Students Enrolled - Compact */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <p className="text-xs text-gray-600 mb-0.5">Students</p>
            <p className="text-lg font-semibold text-primary-600">
              {validEnrolled} / {maxStudents}
            </p>
          </div>

          {/* Join button */}
          <JoinBatchButton
            courseTitle={course.title}
            batchType={course.batchType}
            className="flex-1 px-4 py-2.5 bg-primary-600 text-white text-xs font-semibold rounded-lg hover:bg-primary-700 transition text-center"
          >
            Join
          </JoinBatchButton>

          {/* Share button */}
          <div className="flex-1">
            <ShareButton
              url={`https://www.welearnweshare.com/batches/${courseId}`}
              title={course.title}
              iconOnly={true}
              className="w-full px-4 py-2.5 border-primary-600 text-primary-600 hover:bg-primary-50"
            />
          </div>
        </div>

        {/* Current Price and Capacity Price */}
        <div className="flex justify-center items-center gap-2 lg:gap-4">
          {/* Current Price */}
          <div className="space-y-1 lg:space-y-2 text-center">
            <p className="text-[10px] lg:text-xs text-gray-600">Current price</p>
            <p className={`text-sm lg:text-xl font-semibold ${colors.text}`}>
              {formatPrice(currentPrice)}
            </p>
            <p className="text-[9px] lg:text-xs text-gray-500 whitespace-nowrap">
              {basePrice.toLocaleString('en-IN')} ÷ {validEnrolled || 0} ={' '}
              {formatPrice(currentPrice)}
            </p>
          </div>

          {/* Capacity Price */}
          <div
            className={`space-y-1 lg:space-y-2 text-center border-2 rounded-lg p-2 lg:p-3 bg-transparent ${colors.border}`}
          >
            <p className={`text-[10px] lg:text-xs font-medium ${colors.text}`}>
              Capacity price
            </p>
            <p className={`text-sm lg:text-xl font-semibold ${colors.text}`}>
              {formatPrice(potentialPrice)}
            </p>
            <p className={`text-[9px] lg:text-xs whitespace-nowrap ${colors.text}`}>
              {basePrice.toLocaleString('en-IN')} ÷ {maxStudents} ={' '}
              {formatPrice(potentialPrice)}
            </p>
          </div>
        </div>

        {/* Desktop: Students Enrolled - Vertical Stack */}
        <div className="hidden lg:block space-y-2">
          <p className="text-xs text-gray-600">Students enrolled:</p>
          <p className="text-2xl font-semibold text-primary-600">
            {validEnrolled} / {maxStudents}
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="h-2.5 rounded-full transition-all duration-300 bg-primary-600"
              style={{ width: `${(validEnrolled / maxStudents) * 100}%` }}
            />
          </div>
        </div>

        <p className="hidden lg:block text-xs text-gray-500 pt-2 border-t border-gray-200">
          Price drops as more students join
        </p>

        {/* Desktop: Join Batch Button */}
        <JoinBatchButton
          courseTitle={course.title}
          batchType={course.batchType}
          className="hidden lg:block w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition font-semibold text-center"
        >
          Join Batch
        </JoinBatchButton>

        {/* Desktop: Share Button */}
        <div className="hidden lg:block">
          <ShareButton
            url={`https://www.welearnweshare.com/batches/${courseId}`}
            title={course.title}
            className="w-full border-primary-600 text-primary-600 hover:bg-primary-50"
          />
        </div>
      </div>
    </div>
  )
}



