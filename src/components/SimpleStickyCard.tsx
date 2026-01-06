'use client'

import ShareButton from './ShareButton'
import JoinBatchButton from './JoinBatchButton'

interface SimpleStickyCardProps {
  course: {
    title: string
    batchType?: 'prime' | 'collective'
    price: string
  }
  id: string
}

export default function SimpleStickyCard({
  course,
  id,
}: SimpleStickyCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 space-y-6">
      {/* Price */}
      <div className="space-y-2">
        <p className="text-xs text-gray-600">Course Price</p>
        <p className={`text-2xl font-semibold ${
          course.batchType === 'collective' ? 'text-purple-600' : 
          course.batchType === 'prime' ? 'text-orange-600' : 'text-primary-600'
        }`}>{course.price}</p>
      </div>
      
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

