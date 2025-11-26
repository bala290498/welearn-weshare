'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
  const revenueGoal = 100000 // ₹1,00,000 goal
  const maxStudents = 100

  // To show ₹5k-₹8k range: ₹8,333 = 12 students, ₹5,000 = 20 students
  // Animation oscillates between 12-20 students
  const minStudentsForAnimation = 12
  const maxStudentsForAnimation = 20
  
  // Start at 12 students
  const [currentStudents, setCurrentStudents] = useState(12)
  const [currentPrice, setCurrentPrice] = useState(8333)

  useEffect(() => {
    // Animate between 12-20 students to show ₹5k-₹8k price range
    // More students = lower price (demonstrates the concept)
    let direction = 1 // 1 for increasing students (decreasing price), -1 for decreasing
    let students = 12
    
    const interval = setInterval(() => {
      // Smooth animation with slight variation
      students += direction * (Math.random() * 0.5 + 0.3)
      
      // Reverse direction at boundaries
      if (students >= maxStudentsForAnimation) {
        students = maxStudentsForAnimation
        direction = -1 // Start decreasing (price goes up)
      } else if (students <= minStudentsForAnimation) {
        students = minStudentsForAnimation
        direction = 1 // Start increasing (price goes down)
      }
      
      setCurrentStudents(Math.round(students))
    }, 1500)
    
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Calculate price: Revenue goal divided by number of students
    // Shows ₹8,000 (12 students) to ₹5,000 (20 students)
    const calculatedPrice = revenueGoal / currentStudents
    setCurrentPrice(Math.round(calculatedPrice))
  }, [currentStudents, revenueGoal])

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Hero Content */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight">
              Learn Together. Pay Less.{' '}
              <span className="text-primary-600 block">Get Hired.</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Community-powered courses taught by industry experts — fees fall as more students join.
              Start learning, build projects, and get listed on our talent portal.
            </p>
          </div>
          
          {/* Pricing Widget - Small Card */}
          <div className="flex justify-center">
            <div
              className="bg-white rounded-xl shadow-lg p-5 border-2 border-primary-200 max-w-xs w-full"
              role="region"
              aria-label="Dynamic pricing widget"
            >
              <p className="text-xs text-gray-600 mb-2">Current price based on</p>
              <p className="text-2xl font-bold text-primary-600 mb-2 transition-all duration-300">
                {currentStudents} students
              </p>
              <p className="text-xl font-semibold text-gray-900 mb-3 transition-all duration-300">
                ₹{currentPrice.toLocaleString('en-IN')} per student
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div
                  className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min((currentStudents / maxStudents) * 100, 100)}%` }}
                  role="progressbar"
                  aria-valuenow={currentStudents}
                  aria-valuemin={0}
                  aria-valuemax={maxStudents}
                ></div>
              </div>
              <p className="text-xs text-gray-500 text-center">
                Price drops as more students join
              </p>
            </div>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="#join"
              className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition font-semibold text-lg shadow-lg text-center"
            >
              Join Now
            </a>
            <a
              href="#courses"
              className="bg-white text-primary-600 border-2 border-primary-600 px-8 py-4 rounded-lg hover:bg-primary-50 transition font-semibold text-lg text-center"
            >
              See Courses
            </a>
          </div>
          
          {/* Features */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 pt-6">
            <span className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              30-day money-back guarantee
            </span>
            <span className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Certificates included
            </span>
            <span className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Real hiring opportunities
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

