'use client'

import ShareButton from './ShareButton'
import JoinBatchButton from './JoinBatchButton'

interface StickyPricingCardProps {
  course: {
    title: string
    batchType?: 'prime' | 'collective'
  }
  id: string
  validEnrolled: number
  maxStudents: number
  currentPrice: string
  potentialPrice: string
  basePrice: number
}

export default function StickyPricingCard({
  course,
  id,
  validEnrolled,
  maxStudents,
  currentPrice,
  potentialPrice,
  basePrice,
}: StickyPricingCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 space-y-6">
          {/* Students Enrolled - Vertical Stack */}
          <div className="space-y-2">
            <p className="text-xs text-gray-600">Students enrolled:</p>
            <p className={`text-2xl font-semibold ${
              course.batchType === 'collective' ? 'text-purple-600' : 
              course.batchType === 'prime' ? 'text-orange-600' : 'text-primary-600'
            }`}>{validEnrolled} / {maxStudents}</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  course.batchType === 'collective' ? 'bg-purple-600' : 
                  course.batchType === 'prime' ? 'bg-orange-600' : 'bg-primary-600'
                }`}
                style={{ width: `${(validEnrolled / maxStudents) * 100}%` }}
              />
            </div>
          </div>
          
          {/* Current Price and Capacity Price - Horizontal Layout */}
          <div className="grid grid-cols-2 gap-4">
            {/* Current Price */}
            <div className="space-y-2">
              <p className="text-xs text-gray-600">Current price</p>
              <p className={`text-xl font-semibold ${
                course.batchType === 'collective' ? 'text-purple-600' : 
                course.batchType === 'prime' ? 'text-orange-600' : 'text-primary-600'
              }`}>{currentPrice}</p>
              <p className="text-xs text-gray-500 whitespace-nowrap">
                {basePrice.toLocaleString('en-IN')} ÷ {validEnrolled || 0} = {currentPrice}
              </p>
            </div>
            
            {/* Capacity Price */}
            <div className="space-y-2">
              <p className="text-xs text-gray-600">Capacity price</p>
              <p className={`text-xl font-semibold ${
                course.batchType === 'collective' ? 'text-purple-600' : 
                course.batchType === 'prime' ? 'text-orange-600' : 'text-primary-600'
              }`}>{potentialPrice}</p>
              <p className="text-xs text-gray-500 whitespace-nowrap">
                {basePrice.toLocaleString('en-IN')} ÷ {maxStudents} = {potentialPrice}
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
              url={`https://www.welearnweshare.com/batches/${id}`}
              title={course.title}
              iconOnly={true}
              className="flex-shrink-0"
            />
          </div>
        </div>
  )
}

