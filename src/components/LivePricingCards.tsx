'use client'

import { useState, useEffect, useRef } from 'react'
import NumberFlow from '@number-flow/react'
import { Users, TrendingDown } from 'lucide-react'

const basePrice = 72000
const initialStudents = 12
const maxStudents = 19

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
  const [onesKey, setOnesKey] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setStudents(prev => {
        // Only go forward: increment from 11 to 19
        if (prev < maxStudents) {
          return prev + 1
        }
        // Once it reaches 19, reset to 11
        // Update key to force remount and prevent reverse animation
        setOnesKey(k => k + 1)
        return initialStudents
      })
    }, 600) // Update every 0.6 seconds

    return () => clearInterval(interval)
  }, [])

  // Extract tens and ones digits
  const tensDigit = Math.floor(students / 10) // Always 1, static
  const onesDigit = students % 10 // 1-9, animated

  const currentPrice = calculatePrice(basePrice, students)
  const formattedPrice = formatPrice(currentPrice)

  return (
    <div className="flex justify-center max-w-md mx-auto">
      <div className="bg-white rounded-xl border-2 border-gray-200 p-6 shadow-md hover:shadow-lg transition-all duration-300 w-full">
        <p className="text-sm text-gray-500 font-medium mb-2 text-center">Current price based on</p>
        <div className="mb-4">
          <div className="flex items-center justify-start mb-2">
            <Users className="w-6 h-6 md:w-8 md:h-8" style={{ color: '#004aad' }} />
          </div>
          <div className="text-4xl md:text-5xl font-semibold flex items-center justify-between gap-3" style={{ color: '#004aad' }}>
            <span className="flex items-baseline">
              {/* Tens digit - static, always 1 */}
              <span>{tensDigit}</span>
              {/* Ones digit - animated, changes from 1 to 9 */}
              <NumberFlow 
                key={onesKey}
                value={onesDigit} 
                trend="increasing"
                transformTiming={{ duration: 2000, easing: 'ease-out' }}
                spinTiming={{ duration: 2000, easing: 'ease-out' }}
                opacityTiming={{ duration: 2000, easing: 'ease-out' }}
              />
            </span>
            <span className="text-xl md:text-2xl">students</span>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <div className="flex items-center justify-start mb-2">
            <TrendingDown className="w-6 h-6 md:w-8 md:h-8" style={{ color: '#00bf63' }} />
          </div>
          <div className="text-3xl md:text-4xl font-bold mb-2 transition-colors duration-300 flex items-center justify-between gap-3" style={{ color: '#00bf63' }}>
            <span>{formattedPrice}</span>
            <span className="text-xl md:text-2xl">drops</span>
          </div>
          <p className="text-sm text-gray-600 mb-3">per student</p>
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

