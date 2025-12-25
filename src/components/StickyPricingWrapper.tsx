'use client'

import React, { useRef, useLayoutEffect, useState } from 'react'
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
  const sidebarRef = useRef<HTMLDivElement | null>(null)
  const [sidebarHeight, setSidebarHeight] = useState(0)

  // Measure sidebar height once (and on resize)
  useLayoutEffect(() => {
    const measure = () => {
      if (sidebarRef.current) {
        setSidebarHeight(sidebarRef.current.offsetHeight)
      }
    }

    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  return (
    <>
      <div ref={sidebarRef} className="sticky top-24">
        <StickyPricingCard {...props} />
      </div>
      {/* Reserve space so the sticky card can scroll out before the footer */}
      {sidebarHeight > 0 && (
        <div style={{ height: sidebarHeight }} className="hidden lg:block" aria-hidden="true" />
      )}
    </>
  )
}

