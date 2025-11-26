'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import CategoryFilter from './CategoryFilter'

interface Course {
  id: string
  slug: string
  title: string
  category: string
  description: string
  duration: string
  level: string
  price: string
  studentsEnrolled?: number
  maxStudents?: number
}

interface SkillBuildingClientProps {
  courses: Course[]
}

// Calculate current price per head based on enrollment
// Formula: Price per head = total fixed price ÷ current number of enrolled students
// This ensures the total revenue stays constant while price per head decreases
function calculateCurrentPrice(basePrice: number, studentsEnrolled: number, maxStudents: number): number {
  // Validation: avoid division by zero
  if (studentsEnrolled <= 0) {
    return basePrice // If no students, show total price (one student would pay full amount)
  }
  // Validation: prevent enrollments over max capacity
  if (studentsEnrolled > maxStudents) {
    return basePrice / maxStudents // At or over max capacity, use max capacity for calculation
  }
  // Price per head = total fixed price ÷ current number of enrolled students
  return basePrice / studentsEnrolled
}

// Calculate potential price at full capacity
function calculatePotentialPrice(basePrice: number, maxStudents: number): number {
  if (maxStudents <= 0) {
    return basePrice
  }
  return basePrice / maxStudents
}

// Format price without decimals for display
function formatPrice(price: number): string {
  return `₹${Math.round(price).toLocaleString('en-IN')}`
}

export default function SkillBuildingClient({ courses }: SkillBuildingClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  const categories = Array.from(new Set(courses.map(course => course.category)))
  const filteredCourses = selectedCategory === 'All' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory)

  return (
    <>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        label="All Categories"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredCourses.map((course) => (
          <Link
            key={course.slug}
            href={`/skill-building/${course.slug}`}
            className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 focus-within:outline-none flex flex-col h-full"
          >
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full">
                {course.category}
              </span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2 flex-shrink-0">
              {course.title}
            </h2>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
              {course.description}
            </p>
            <div className="space-y-3 mb-4 text-sm text-gray-600 flex-shrink-0">
              <div className="flex items-center gap-2">
                <span className="font-medium">Duration:</span>
                <span>{course.duration}</span>
              </div>
              
              {course.studentsEnrolled !== undefined && course.maxStudents !== undefined ? (
                <>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-gray-600">Course price:</span>
                      <span className="font-semibold text-gray-900">{course.price}</span>
                    </div>
                    {(() => {
                      const basePrice = parseInt(course.price.replace(/[₹,]/g, ''))
                      const validEnrolled = Math.min(course.studentsEnrolled, course.maxStudents)
                      const currentPrice = calculateCurrentPrice(basePrice, validEnrolled, course.maxStudents)
                      return (
                        <>
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-medium text-gray-600">Students enrolled:</span>
                            <span className="text-primary-600 font-semibold">
                              {validEnrolled} / {course.maxStudents}
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${(validEnrolled / course.maxStudents) * 100}%` }}
                            />
                          </div>
                        </>
                      )
                    })()}
                  </div>
                  
                  <div className="flex flex-col gap-1 pt-2 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-medium text-gray-600">Price per head:</span>
                    </div>
                    {(() => {
                      if (!mounted) {
                        // Show placeholder during SSR to match structure
                        return (
                          <>
                            <span className="text-primary-600 font-semibold text-base">
                              ₹0 - ₹0
                            </span>
                            <span className="text-gray-500 text-xs">
                              Loading...
                            </span>
                            <span className="text-gray-500 text-xs">
                              Loading...
                            </span>
                          </>
                        )
                      }
                      const basePrice = parseInt(course.price.replace(/[₹,]/g, ''))
                      const validEnrolled = Math.min(course.studentsEnrolled, course.maxStudents)
                      const currentPrice = calculateCurrentPrice(basePrice, validEnrolled, course.maxStudents)
                      const potentialPrice = calculatePotentialPrice(basePrice, course.maxStudents)
                      return (
                        <>
                          <span className="text-primary-600 font-semibold text-base">
                            {formatPrice(currentPrice)} - {formatPrice(potentialPrice)}
                          </span>
                          <span className="text-gray-500 text-xs">
                            Current ({validEnrolled}): {basePrice.toLocaleString('en-IN')} ÷ {validEnrolled} = {formatPrice(currentPrice)}
                          </span>
                          <span className="text-gray-500 text-xs">
                            Capacity ({course.maxStudents}): {basePrice.toLocaleString('en-IN')} ÷ {course.maxStudents} = {formatPrice(potentialPrice)}
                          </span>
                        </>
                      )
                    })()}
                    <span className="text-gray-500 text-xs mt-1">Price drops as more students join</span>
                  </div>
                </>
              ) : (
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Dynamic group pricing:</span>
                  </div>
                  <span className="text-primary-600 font-semibold text-xs">{course.price}</span>
                  <span className="text-gray-500 text-xs">Price drops as more students join</span>
                </div>
              )}
            </div>
            <div className="pt-4 border-t border-gray-200 mt-auto flex-shrink-0">
              <span className="text-primary-600 font-semibold text-sm hover:underline">
                View Details →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

