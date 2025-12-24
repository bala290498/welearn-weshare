'use client'

import { useState, useEffect } from 'react'
import NumberFlow from '@number-flow/react'

const basePrice = 90000
const initialStudents = 15
const maxStudents = 25

function calculatePrice(basePrice: number, students: number): number {
  if (students <= 0) return basePrice
  return Math.round(basePrice / students)
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price)
}

export default function LivePricingCards() {
  const [students, setStudents] = useState(initialStudents)
  const [cycleKey, setCycleKey] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setStudents(prev => {
        // Only go forward: increment from 15 to 25
        if (prev < maxStudents) {
          return prev + 1
        }
        // Once it reaches 25, immediately reset to 16 and start again
        setCycleKey(k => k + 1) // Force NumberFlow to reset animation
        return 16
      })
    }, 600) // Update every 0.6 seconds

    return () => clearInterval(interval)
  }, [])

  const currentPrice = calculatePrice(basePrice, students)
  const formattedPrice = formatPrice(currentPrice)

  return (
    <div className="flex justify-center max-w-md mx-auto">
      <div className="bg-white rounded-xl border-2 border-gray-200 p-6 shadow-md hover:shadow-lg transition-all duration-300 w-full">
        <p className="text-sm text-gray-500 font-medium mb-2">Current price based on</p>
        <div className="text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 mb-4">
          <NumberFlow 
            key={cycleKey}
            value={students} 
            trend={true}
            transformTiming={{ duration: 2000, easing: 'ease-out' }}
            spinTiming={{ duration: 2000, easing: 'ease-out' }}
            opacityTiming={{ duration: 2000, easing: 'ease-out' }}
          /> <span className="text-2xl md:text-3xl">students</span>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-600 mb-2 transition-colors duration-300">
            {formattedPrice}
          </p>
          <p className="text-sm text-gray-600 mb-4">per student</p>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            </span>
            <p className="text-xs text-gray-500 italic">Price drops as more students join</p>
          </div>
        </div>
      </div>
    </div>
  )
}

