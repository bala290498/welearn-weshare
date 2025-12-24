'use client'

import { useState, useEffect } from 'react'

const basePrice = 100000
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

  useEffect(() => {
    const interval = setInterval(() => {
      setStudents(prev => {
        // Only go forward: increment from 15 to 25
        if (prev < maxStudents) {
          return prev + 1
        }
        // Once it reaches 25, immediately reset to 15 and start again
        return initialStudents
      })
    }, 400) // Update every 0.4 seconds

    return () => clearInterval(interval)
  }, [])

  const currentPrice = calculatePrice(basePrice, students)
  const formattedPrice = formatPrice(currentPrice)

  return (
    <div className="flex justify-center max-w-md mx-auto">
      <div className="bg-white rounded-xl border-2 border-gray-200 p-6 shadow-md hover:shadow-lg transition-all duration-300 w-full">
        <p className="text-sm text-gray-500 font-medium mb-2">Current price based on</p>
        <p className="text-2xl font-semibold text-gray-900 mb-4 transition-colors duration-300">
          {students} students
        </p>
        <div className="border-t border-gray-200 pt-4">
          <p className="text-3xl font-bold text-primary-600 mb-2 transition-colors duration-300">
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

