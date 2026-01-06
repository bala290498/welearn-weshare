'use client'

import { useState } from 'react'
import JoinCommunityModal from './JoinCommunityModal'

interface JoinCommunityButtonProps {
  className?: string
  children: React.ReactNode
}

export default function JoinCommunityButton({ className, children }: JoinCommunityButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={className}
      >
        {children}
      </button>
      <JoinCommunityModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}





