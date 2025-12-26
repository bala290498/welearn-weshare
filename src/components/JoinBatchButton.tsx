'use client'

import { useState } from 'react'
import JoinBatchModal from './JoinBatchModal'

interface JoinBatchButtonProps {
  courseTitle: string
  batchType: 'prime' | 'collective' | undefined
  className?: string
  children: React.ReactNode
}

export default function JoinBatchButton({ courseTitle, batchType, className, children }: JoinBatchButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={className}
      >
        {children}
      </button>
      <JoinBatchModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        courseTitle={courseTitle}
        batchType={batchType}
      />
    </>
  )
}

