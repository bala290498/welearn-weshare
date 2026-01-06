'use client'

import React from 'react'
import StickyPricingCard from './StickyPricingCard'

interface StickyPricingWrapperProps {
  course: {
    title: string
    batchType?: 'prime' | 'collective'
    studentsEnrolled?: number
    maxStudents?: number
    price: string
  }
  id: string
  validEnrolled: number
  maxStudents: number
  currentPrice: string
  potentialPrice: string
  basePrice: number
}

export default function StickyPricingWrapper(props: StickyPricingWrapperProps) {
  return (
    <div className="lg:sticky lg:top-24 lg:self-start">
      <StickyPricingCard {...props} />
    </div>
  )
}

