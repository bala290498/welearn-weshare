'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Users, Info, ArrowRight, Clock } from 'lucide-react'
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
            'px-6 py-2 rounded-lg text-sm md:text-base font-medium transition w-[180px]',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
            selectedBatchType === 'prime'
              ? 'bg-orange-600 text-white focus-visible:ring-orange-600'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 focus-visible:ring-orange-600'
          )}
          aria-label="Show Prime batches"
          aria-pressed={selectedBatchType === 'prime'}
        >
          Prime Batch
        </button>
        <button
          onClick={() => setSelectedBatchType('collective')}
          className={cn(
            'px-6 py-2 rounded-lg text-sm md:text-base font-medium transition w-[180px]',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
            selectedBatchType === 'collective'
              ? 'bg-purple-600 text-white focus-visible:ring-purple-600'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 focus-visible:ring-purple-600'
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
      
      {/* Mobile: Grid layout */}
      <div className="lg:hidden grid grid-cols-1 gap-4">
        {filteredCourses.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No courses found matching your filters.
          </div>
        ) : (
          filteredCourses.map((course) => {
            const cardContent = (
              <>
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                  {course.category}
                </span>
                  {course.batchType === 'collective' && (
                    <span className="inline-block px-3 py-1 text-sm rounded-full bg-purple-100 text-purple-600 font-medium flex items-center gap-1">
                      <Users size={14} />
                      Collective
                    </span>
                  )}
                  {course.batchType === 'prime' && (
                    <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-orange-100 text-orange-700 flex items-center gap-1">
                      <Clock size={14} />
                      Prime
                    </span>
                  )}
              </div>
                <div className="mb-4">
                  <h2 className="text-[clamp(1rem,2vw,1.25rem)] font-semibold text-gray-900 mb-1 flex-shrink-0">
                {course.title}
              </h2>
                  <p className="text-gray-500 text-sm line-clamp-2">
                {course.description}
              </p>
                </div>
                {course.batchType === 'collective' && course.studentsEnrolled !== undefined && course.maxStudents !== undefined && (
                  <>
                      {(() => {
                        const basePrice = parseInt(course.price.replace(/[₹,]/g, ''))
                        const validEnrolled = Math.min(course.studentsEnrolled, course.maxStudents)
                        const currentPrice = calculateCurrentPrice(basePrice, validEnrolled, course.maxStudents)
                      const potentialPrice = calculatePotentialPrice(basePrice, course.maxStudents)
                        return (
                          <>
                          {/* Pricing */}
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="border border-purple-200 rounded-xl p-4 text-center">
                              <p className="text-xs text-gray-500 font-medium">CURRENT PRICE</p>
                              <p className="text-2xl font-semibold mt-1 text-gray-900">{formatPrice(currentPrice)}</p>
                              <p className="text-sm line-through text-gray-400">{course.price}</p>
                            </div>
                            <div className="border border-purple-200 rounded-xl p-4 text-center bg-purple-100">
                              <p className="text-xs text-purple-600 font-medium">CAPACITY PRICE</p>
                              <p className="text-2xl font-semibold text-purple-600 mt-1">{formatPrice(potentialPrice)}</p>
                              <p className="text-sm text-purple-700">Lowest possible</p>
                            </div>
                          </div>
                          {/* Progress */}
                          <div className="space-y-2 mb-4">
                            <div className="flex justify-between items-center text-sm">
                              <span className="text-gray-600">Enrollment Progress</span>
                              <span className="flex items-center gap-2 text-green-600 font-medium">
                                <span className="w-2 h-2 rounded-full bg-green-500" />
                                {validEnrolled} / {course.maxStudents} Joined
                              </span>
                            </div>
                            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-purple-600 transition-all duration-300"
                                style={{ width: `${(validEnrolled / course.maxStudents) * 100}%` }}
                              />
                            </div>
                            <p className="text-xs text-gray-400 flex items-center justify-center gap-1 text-center">
                              <Info size={14} />
                              Price drops as more students join
                            </p>
                    </div>
                          {/* Button */}
                          <Link
                            href={`/courses/${course.slug}`}
                            className="w-full py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-800 transition flex items-center justify-center gap-2"
                          >
                            Join Collective
                            <ArrowRight size={18} />
                          </Link>
                          </>
                        )
                      })()}
                  </>
                )}
                {course.batchType === 'prime' && (
                  <div className="pt-4 border-t border-orange-200 mt-auto flex-shrink-0 text-center">
                    <span className="text-orange-600 font-semibold text-sm hover:underline">
                      View Details →
                    </span>
                  </div>
                )}
              </>
            )
            
            if (course.batchType === 'collective') {
              return (
                <div
                  key={course.slug}
                  className="bg-white rounded-lg border border-purple-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-offset-2 focus-within:outline-none flex flex-col h-auto overflow-hidden"
                >
                  {cardContent}
              </div>
              )
            }
            
            return (
              <Link
                key={course.slug}
                href={`/courses/${course.slug}`}
                className="bg-white rounded-lg border border-orange-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow focus-within:ring-2 focus-within:ring-orange-500 focus-within:ring-offset-2 focus-within:outline-none flex flex-col h-auto overflow-hidden"
              >
                {cardContent}
            </Link>
            )
          })
        )}
      </div>
      
      {/* Desktop: Grid layout */}
      <div className="hidden lg:grid grid-cols-2 gap-4 xl:gap-6">
        {filteredCourses.length === 0 ? (
          <div className="col-span-full text-center py-12 text-gray-500">
            No courses found matching your filters.
          </div>
        ) : (
          filteredCourses.map((course) => {
            const cardContent = (
              <>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                {course.category}
              </span>
                {course.batchType === 'collective' && (
                  <span className="inline-block px-3 py-1 text-sm rounded-full bg-purple-100 text-purple-600 font-medium flex items-center gap-1">
                    <Users size={14} />
                    Collective
                  </span>
                )}
                {course.batchType === 'prime' && (
                  <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-orange-100 text-orange-700 flex items-center gap-1">
                    <Clock size={14} />
                    Prime
                  </span>
                )}
            </div>
              <div className="mb-4">
                <h2 className="text-[clamp(1rem,1.5vw,1.25rem)] font-semibold text-gray-900 mb-1 flex-shrink-0">
              {course.title}
            </h2>
                <p className="text-gray-500 text-sm line-clamp-2">
              {course.description}
            </p>
              </div>
              {course.batchType === 'collective' && course.studentsEnrolled !== undefined && course.maxStudents !== undefined && (
                <>
                    {(() => {
                      const basePrice = parseInt(course.price.replace(/[₹,]/g, ''))
                      const validEnrolled = Math.min(course.studentsEnrolled, course.maxStudents)
                      const currentPrice = calculateCurrentPrice(basePrice, validEnrolled, course.maxStudents)
                    const potentialPrice = calculatePotentialPrice(basePrice, course.maxStudents)
                      return (
                        <>
                        {/* Pricing */}
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="border border-purple-200 rounded-xl p-4 text-center">
                            <p className="text-xs text-gray-500 font-medium">CURRENT PRICE</p>
                            <p className="text-2xl font-semibold mt-1 text-gray-900">{formatPrice(currentPrice)}</p>
                            <p className="text-sm line-through text-gray-400">{course.price}</p>
                          </div>
                          <div className="border border-purple-200 rounded-xl p-4 text-center bg-purple-100">
                            <p className="text-xs text-purple-600 font-medium">CAPACITY PRICE</p>
                            <p className="text-2xl font-semibold text-purple-600 mt-1">{formatPrice(potentialPrice)}</p>
                            <p className="text-sm text-purple-700">Lowest possible</p>
                          </div>
                        </div>
                        {/* Progress */}
                        <div className="space-y-2 mb-4">
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-600">Enrollment Progress</span>
                            <span className="flex items-center gap-2 text-green-600 font-medium">
                              <span className="w-2 h-2 rounded-full bg-green-500" />
                              {validEnrolled} / {course.maxStudents} Joined
                            </span>
                          </div>
                          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-purple-600 transition-all duration-300"
                              style={{ width: `${(validEnrolled / course.maxStudents) * 100}%` }}
                            />
                          </div>
                          <p className="text-xs text-gray-400 flex items-center justify-center gap-1 text-center">
                            <Info size={14} />
                            Price drops as more students join
                          </p>
                  </div>
                        {/* Button */}
                        <Link
                          href={`/courses/${course.slug}`}
                          className="w-full py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-800 transition flex items-center justify-center gap-2"
                        >
                          Join Collective
                          <ArrowRight size={18} />
                        </Link>
                        </>
                      )
                    })()}
                </>
              )}
              {course.batchType === 'prime' && (
                <div className="pt-4 border-t border-orange-200 mt-auto flex-shrink-0 text-center">
                  <span className="text-orange-600 font-semibold text-sm hover:underline">
                View Details →
              </span>
            </div>
                )}
              </>
            )
            
            if (course.batchType === 'collective') {
              return (
                <div
                  key={course.slug}
                  className="bg-white rounded-lg border border-purple-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-offset-2 focus-within:outline-none flex flex-col h-full overflow-hidden"
                >
                  {cardContent}
                </div>
              )
            }
            
            return (
              <Link
                key={course.slug}
                href={`/courses/${course.slug}`}
                className="bg-white rounded-lg border border-orange-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow focus-within:ring-2 focus-within:ring-orange-500 focus-within:ring-offset-2 focus-within:outline-none flex flex-col h-full overflow-hidden"
              >
                {cardContent}
          </Link>
            )
          })
        )}
      </div>
    </>
  )
}
