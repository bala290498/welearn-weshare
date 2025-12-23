'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import CategoryFilter from './CategoryFilter'
import { cn } from '@/lib/utils'

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
  batchType?: 'prime' | 'collective'
  tags?: string[]
}

interface SkillBuildingClientProps {
  courses: Course[]
}

// Calculate current price per head based on enrollment
function calculateCurrentPrice(basePrice: number, studentsEnrolled: number, maxStudents: number): number {
  if (studentsEnrolled <= 0) {
    return basePrice
  }
  if (studentsEnrolled > maxStudents) {
    return basePrice / maxStudents
  }
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
  const [selectedBatchType, setSelectedBatchType] = useState<'prime' | 'collective'>('prime')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  // Get all unique categories
  const categories = Array.from(new Set(courses.map(course => course.category)))
  
  // Filter courses based on batch type and category
  let filteredCourses = courses
  
  // Filter by batch type (always filter, no 'all' option)
  filteredCourses = filteredCourses.filter(course => course.batchType === selectedBatchType)
  
  // Filter by category
  if (selectedCategory !== 'All') {
    filteredCourses = filteredCourses.filter(course => course.category === selectedCategory)
  }

  return (
    <>
      {/* Batch Type Toggle */}
      <div className="mb-6 flex flex-wrap gap-3 justify-center">
        <button
          onClick={() => setSelectedBatchType('prime')}
          className={cn(
            'px-6 py-2 rounded-lg text-sm md:text-base font-medium transition',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2',
            selectedBatchType === 'prime'
              ? 'bg-primary-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          )}
          aria-label="Show Prime batches"
          aria-pressed={selectedBatchType === 'prime'}
        >
          Prime Batch
        </button>
        <button
          onClick={() => setSelectedBatchType('collective')}
          className={cn(
            'px-6 py-2 rounded-lg text-sm md:text-base font-medium transition',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2',
            selectedBatchType === 'collective'
              ? 'bg-primary-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          )}
          aria-label="Show Collective batches"
          aria-pressed={selectedBatchType === 'collective'}
        >
          Collective Batch
        </button>
      </div>

      {/* Category Filter */}
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        label="All Categories"
      />
      
      {/* Mobile: Horizontal snap-scroll */}
      <div className="lg:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4 pb-4">
        <div className="flex gap-4 w-max">
          {filteredCourses.length === 0 ? (
            <div className="w-[calc(85vw_-_16px)] text-center py-8 text-gray-500">
              No courses found matching your filters.
            </div>
          ) : (
            filteredCourses.map((course) => (
              <Link
                key={course.slug}
                href={`/skill-building/${course.slug}`}
                className="bg-white rounded-lg border border-gray-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 focus-within:outline-none flex flex-col h-auto w-[calc(85vw_-_16px)] flex-shrink-0 snap-center overflow-hidden"
              >
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full">
                    {course.category}
                  </span>
                  {course.batchType && (
                    <span className={cn(
                      'inline-block px-3 py-1 text-sm font-semibold rounded-full',
                      course.batchType === 'prime'
                        ? 'bg-orange-100 text-orange-700'
                        : 'bg-blue-100 text-blue-700'
                    )}>
                      {course.batchType === 'prime' ? 'Prime' : 'Collective'}
                    </span>
                  )}
                </div>
                <h2 className="text-[clamp(1rem,2vw,1.25rem)] font-bold text-gray-900 mb-2 flex-shrink-0">
                  {course.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                  {course.description}
                </p>
                <div className="space-y-3 mb-4 text-sm text-gray-600 flex-shrink-0">
                  {course.studentsEnrolled !== undefined && course.maxStudents !== undefined ? (
                    <>
                      <div className="flex flex-col gap-2">
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
                      
                      <div className="pt-2 border-t border-gray-200">
                        {(() => {
                          if (!mounted) {
                            return (
                              <div className="grid grid-cols-2 gap-3">
                                <div>
                                  <p className="text-xs text-gray-600 mb-1">Current price</p>
                                  <p className="text-primary-600 font-semibold text-sm">₹0</p>
                                  <p className="text-gray-500 text-xs">Loading...</p>
                                </div>
                                <div>
                                  <p className="text-xs text-gray-600 mb-1">Capacity price</p>
                                  <p className="text-primary-600 font-semibold text-sm">₹0</p>
                                  <p className="text-gray-500 text-xs">Loading...</p>
                                </div>
                              </div>
                            )
                          }
                          const basePrice = parseInt(course.price.replace(/[₹,]/g, ''))
                          const validEnrolled = Math.min(course.studentsEnrolled, course.maxStudents)
                          const currentPrice = calculateCurrentPrice(basePrice, validEnrolled, course.maxStudents)
                          const potentialPrice = calculatePotentialPrice(basePrice, course.maxStudents)
                          const displayEnrolled = validEnrolled === 0 ? 0 : validEnrolled
                          return (
                            <div className="grid grid-cols-2 gap-3">
                              <div>
                                <p className="text-xs text-gray-600 mb-1">Current price</p>
                                <p className="text-primary-600 font-semibold text-sm">{formatPrice(currentPrice)}</p>
                                <p className="text-gray-500 text-xs">
                                  {basePrice.toLocaleString('en-IN')} ÷ {displayEnrolled} = {formatPrice(currentPrice)}
                                </p>
                              </div>
                              <div>
                                <p className="text-xs text-gray-600 mb-1">Capacity price</p>
                                <p className="text-primary-600 font-semibold text-sm">{formatPrice(potentialPrice)}</p>
                                <p className="text-gray-500 text-xs">
                                  {basePrice.toLocaleString('en-IN')} ÷ {course.maxStudents} = {formatPrice(potentialPrice)}
                                </p>
                              </div>
                            </div>
                          )
                        })()}
                        <p className="text-gray-500 text-xs mt-3 text-center">Price drops as more students join</p>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Dynamic group pricing:</span>
                      </div>
                      <span className="text-primary-600 font-semibold text-xs">{course.price}</span>
                      <span className="text-gray-500 text-xs block text-center">Price drops as more students join</span>
                    </div>
                  )}
                </div>
                <div className="pt-4 border-t border-gray-200 mt-auto flex-shrink-0">
                  <span className="text-primary-600 font-semibold text-sm hover:underline">
                    View Details →
                  </span>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
      
      {/* Desktop: Grid layout */}
      <div className="hidden lg:grid grid-cols-3 gap-4 xl:gap-6">
        {filteredCourses.length === 0 ? (
          <div className="col-span-full text-center py-12 text-gray-500">
            No courses found matching your filters.
          </div>
        ) : (
          filteredCourses.map((course) => (
            <Link
              key={course.slug}
              href={`/skill-building/${course.slug}`}
              className="bg-white rounded-lg border border-gray-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 focus-within:outline-none flex flex-col h-full overflow-hidden"
            >
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full">
                  {course.category}
                </span>
                {course.batchType && (
                  <span className={cn(
                    'inline-block px-3 py-1 text-sm font-semibold rounded-full',
                    course.batchType === 'prime'
                      ? 'bg-orange-100 text-orange-700'
                      : 'bg-blue-100 text-blue-700'
                  )}>
                    {course.batchType === 'prime' ? 'Prime' : 'Collective'}
                  </span>
                )}
              </div>
              <h2 className="text-[clamp(1rem,1.5vw,1.25rem)] font-bold text-gray-900 mb-2 flex-shrink-0">
                {course.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                {course.description}
              </p>
              <div className="space-y-3 mb-4 text-sm text-gray-600 flex-shrink-0">
                {course.studentsEnrolled !== undefined && course.maxStudents !== undefined ? (
                  <>
                    <div className="flex flex-col gap-2">
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
                    
                    <div className="pt-2 border-t border-gray-200">
                      {(() => {
                        if (!mounted) {
                          return (
                            <div className="grid grid-cols-2 gap-3">
                              <div>
                                <p className="text-xs text-gray-600 mb-1">Current price</p>
                                <p className="text-primary-600 font-semibold text-sm">₹0</p>
                                <p className="text-gray-500 text-xs">Loading...</p>
                              </div>
                              <div>
                                <p className="text-xs text-gray-600 mb-1">Capacity price</p>
                                <p className="text-primary-600 font-semibold text-sm">₹0</p>
                                <p className="text-gray-500 text-xs">Loading...</p>
                              </div>
                            </div>
                          )
                        }
                        const basePrice = parseInt(course.price.replace(/[₹,]/g, ''))
                        const validEnrolled = Math.min(course.studentsEnrolled, course.maxStudents)
                        const currentPrice = calculateCurrentPrice(basePrice, validEnrolled, course.maxStudents)
                        const potentialPrice = calculatePotentialPrice(basePrice, course.maxStudents)
                        const displayEnrolled = validEnrolled === 0 ? 0 : validEnrolled
                        return (
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <p className="text-xs text-gray-600 mb-1">Current price</p>
                              <p className="text-primary-600 font-semibold text-sm">{formatPrice(currentPrice)}</p>
                              <p className="text-gray-500 text-xs">
                                {basePrice.toLocaleString('en-IN')} ÷ {displayEnrolled} = {formatPrice(currentPrice)}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-600 mb-1">Capacity price</p>
                              <p className="text-primary-600 font-semibold text-sm">{formatPrice(potentialPrice)}</p>
                              <p className="text-gray-500 text-xs">
                                {basePrice.toLocaleString('en-IN')} ÷ {course.maxStudents} = {formatPrice(potentialPrice)}
                              </p>
                            </div>
                          </div>
                        )
                      })()}
                      <p className="text-gray-500 text-xs mt-3 text-center">Price drops as more students join</p>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Dynamic group pricing:</span>
                    </div>
                    <span className="text-primary-600 font-semibold text-xs">{course.price}</span>
                    <span className="text-gray-500 text-xs block text-center">Price drops as more students join</span>
                  </div>
                )}
              </div>
              <div className="pt-4 border-t border-gray-200 mt-auto flex-shrink-0">
                <span className="text-primary-600 font-semibold text-sm hover:underline">
                  View Details →
                </span>
              </div>
            </Link>
          ))
        )}
      </div>
    </>
  )
}
