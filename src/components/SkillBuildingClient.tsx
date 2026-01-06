'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
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
  const searchParams = useSearchParams()
  const typeParam = searchParams.get('type')
  const initialBatchType = (typeParam === 'prime' || typeParam === 'collective') ? typeParam : 'prime'
  
  const [selectedBatchType, setSelectedBatchType] = useState<'prime' | 'collective'>(initialBatchType)
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
    // Update batch type if URL parameter changes
    if (typeParam === 'prime' || typeParam === 'collective') {
      setSelectedBatchType(typeParam)
    }
  }, [typeParam])
  
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
            // Extract base course name (remove -prime or -collective suffix)
            const baseCourseName = course.slug.replace(/-prime$|-collective$/, '')
            const borderColor = course.batchType === 'collective' ? 'border-purple-200' : 'border-orange-200'
            const capacityBorderColor = course.batchType === 'collective' ? 'border-purple-400' : 'border-orange-400'
            const capacityTextColor = course.batchType === 'collective' ? 'text-purple-600' : 'text-orange-600'
            const progressBgColor = course.batchType === 'collective' ? 'bg-purple-500' : 'bg-orange-500'
            
            const cardContent = (
              <>
                {/* Course Image with LIVE badge */}
                <div className="relative h-56 w-full">
                  <span className="absolute top-4 right-4 z-10 inline-flex items-center justify-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-red-500 text-white shadow">
                    <span className="block w-2 h-2 rounded-full bg-white" />
                    <span>LIVE</span>
                  </span>
                  <img
                    src={`/courses/${baseCourseName}.webp`}
                    alt={course.title}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      // Try jpg if webp doesn't exist
                      const target = e.target as HTMLImageElement
                      if (!target.src.endsWith('.jpg')) {
                        target.src = `/courses/${baseCourseName}.jpg`
                      } else {
                        // Fallback to placeholder if both don't exist
                        target.src = '/og-image.svg'
                      }
                    }}
                  />
                </div>

                {/* Content */}
                <div className="px-3 py-2">
                  <h2 className="text-lg font-bold text-gray-900">{course.title}</h2>
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
                          <div className="grid grid-cols-2 gap-2 mt-3">
                            <div className="border rounded-xl p-2 text-center">
                              <p className="text-sm text-gray-500">CURRENT PRICE</p>
                              <p className="text-xl font-bold">{formatPrice(currentPrice)}</p>
                              <p className="text-sm text-gray-400 line-through">{course.price}</p>
                            </div>
                            <div className={`border ${capacityBorderColor} rounded-xl p-2 text-center`}>
                              <p className={`text-sm ${capacityTextColor}`}>CAPACITY PRICE</p>
                              <p className={`text-xl font-bold ${capacityTextColor}`}>{formatPrice(potentialPrice)}</p>
                              <p className={`text-sm ${capacityTextColor}`}>Lowest possible</p>
                            </div>
                          </div>
                          {/* Progress */}
                          <div className="mt-3">
                            <div className="flex justify-between text-sm mb-2">
                              <span className="text-gray-600">Enrollment Progress</span>
                              <span className="text-green-600 font-medium">● {validEnrolled} / {course.maxStudents} Joined</span>
                            </div>
                            <div className="w-full h-2 bg-gray-200 rounded-full">
                              <div
                                className={`h-2 ${progressBgColor} rounded-full transition-all duration-300`}
                                style={{ width: `${(validEnrolled / course.maxStudents) * 100}%` }}
                              />
                            </div>
                            <p className="text-xs text-gray-400 mt-2">
                              Price drops as more students join
                            </p>
                          </div>
                          {/* Button */}
                          <Link
                            href={`/batches/${course.slug}`}
                            className="mt-3 w-full bg-yellow-400 hover:bg-yellow-500 transition rounded-xl py-2 text-sm font-semibold flex items-center justify-center gap-2"
                          >
                            Join Collective <span aria-hidden>→</span>
                          </Link>
                          </>
                        )
                      })()}
                  </>
                )}
                {course.batchType === 'prime' && course.studentsEnrolled !== undefined && course.maxStudents !== undefined && (
                  <>
                      {(() => {
                        const basePrice = parseInt(course.price.replace(/[₹,]/g, ''))
                        const validEnrolled = Math.min(course.studentsEnrolled, course.maxStudents)
                        const currentPrice = calculateCurrentPrice(basePrice, validEnrolled, course.maxStudents)
                      const potentialPrice = calculatePotentialPrice(basePrice, course.maxStudents)
                        return (
                          <>
                          {/* Pricing */}
                          <div className="grid grid-cols-2 gap-2 mt-3">
                            <div className="border rounded-xl p-2 text-center">
                              <p className="text-sm text-gray-500">CURRENT PRICE</p>
                              <p className="text-xl font-bold">{formatPrice(currentPrice)}</p>
                              <p className="text-sm text-gray-400 line-through">{course.price}</p>
                            </div>
                            <div className={`border ${capacityBorderColor} rounded-xl p-2 text-center`}>
                              <p className={`text-sm ${capacityTextColor}`}>CAPACITY PRICE</p>
                              <p className={`text-xl font-bold ${capacityTextColor}`}>{formatPrice(potentialPrice)}</p>
                              <p className={`text-sm ${capacityTextColor}`}>Lowest possible</p>
                            </div>
                          </div>
                          {/* Progress */}
                          <div className="mt-3">
                            <div className="flex justify-between text-sm mb-2">
                              <span className="text-gray-600">Enrollment Progress</span>
                              <span className="text-green-600 font-medium">● {validEnrolled} / {course.maxStudents} Joined</span>
                            </div>
                            <div className="w-full h-2 bg-gray-200 rounded-full">
                              <div
                                className={`h-2 ${progressBgColor} rounded-full transition-all duration-300`}
                                style={{ width: `${(validEnrolled / course.maxStudents) * 100}%` }}
                              />
                            </div>
                            <p className="text-xs text-gray-400 mt-2">
                              Price drops as more students join
                            </p>
                          </div>
                          {/* Button */}
                          <Link
                            href={`/batches/${course.slug}`}
                            className="mt-3 w-full bg-yellow-400 hover:bg-yellow-500 transition rounded-xl py-2 text-sm font-semibold flex items-center justify-center gap-2"
                          >
                            Join Prime <span aria-hidden>→</span>
                          </Link>
                          </>
                        )
                      })()}
                  </>
                )}
                </div>
              </>
            )
            
            if (course.batchType === 'collective') {
              return (
                <div
                  key={course.slug}
                  className="w-full max-w-sm bg-white rounded-2xl shadow-lg border border-purple-200 overflow-hidden"
                >
                  {cardContent}
              </div>
              )
            }
            
            return (
              <div
                key={course.slug}
                className="w-full max-w-sm bg-white rounded-2xl shadow-lg border border-orange-200 overflow-hidden"
              >
                {cardContent}
            </div>
            )
          })
        )}
      </div>
      
      {/* Desktop: Grid layout */}
      <div className="hidden lg:grid grid-cols-3 gap-4 xl:gap-6">
        {filteredCourses.length === 0 ? (
          <div className="col-span-full text-center py-12 text-gray-500">
            No courses found matching your filters.
          </div>
        ) : (
          filteredCourses.map((course) => {
            // Extract base course name (remove -prime or -collective suffix)
            const baseCourseName = course.slug.replace(/-prime$|-collective$/, '')
            const borderColor = course.batchType === 'collective' ? 'border-purple-200' : 'border-orange-200'
            const capacityBorderColor = course.batchType === 'collective' ? 'border-purple-400' : 'border-orange-400'
            const capacityTextColor = course.batchType === 'collective' ? 'text-purple-600' : 'text-orange-600'
            const progressBgColor = course.batchType === 'collective' ? 'bg-purple-500' : 'bg-orange-500'
            
            const cardContent = (
              <>
              {/* Course Image with LIVE badge */}
              <div className="relative h-56 w-full">
                <span className="absolute top-4 right-4 z-10 inline-flex items-center justify-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-red-500 text-white shadow">
                  <span className="block w-2 h-2 rounded-full bg-white" />
                  <span>LIVE</span>
                </span>
                <img
                  src={`/courses/${baseCourseName}.webp`}
                  alt={course.title}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    // Try jpg if webp doesn't exist
                    const target = e.target as HTMLImageElement
                    if (!target.src.endsWith('.jpg')) {
                      target.src = `/courses/${baseCourseName}.jpg`
                    } else {
                      // Fallback to placeholder if both don't exist
                      target.src = '/og-image.svg'
                    }
                  }}
                />
              </div>

              {/* Content */}
              <div className="px-3 py-2">
                <h2 className="text-lg font-bold text-gray-900">{course.title}</h2>
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
                        <div className="grid grid-cols-2 gap-2 mt-3">
                          <div className="border rounded-xl p-2 text-center">
                            <p className="text-sm text-gray-500">CURRENT PRICE</p>
                            <p className="text-xl font-bold">{formatPrice(currentPrice)}</p>
                            <p className="text-sm text-gray-400 line-through">{course.price}</p>
                          </div>
                          <div className={`border ${capacityBorderColor} rounded-xl p-2 text-center`}>
                            <p className={`text-sm ${capacityTextColor}`}>CAPACITY PRICE</p>
                            <p className={`text-xl font-bold ${capacityTextColor}`}>{formatPrice(potentialPrice)}</p>
                            <p className={`text-sm ${capacityTextColor}`}>Lowest possible</p>
                          </div>
                        </div>
                        {/* Progress */}
                        <div className="mt-3">
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-600">Enrollment Progress</span>
                            <span className="text-green-600 font-medium">● {validEnrolled} / {course.maxStudents} Joined</span>
                          </div>
                          <div className="w-full h-2 bg-gray-200 rounded-full">
                            <div
                              className={`h-2 ${progressBgColor} rounded-full transition-all duration-300`}
                              style={{ width: `${(validEnrolled / course.maxStudents) * 100}%` }}
                            />
                          </div>
                          <p className="text-xs text-gray-400 mt-2">
                            Price drops as more students join
                          </p>
                        </div>
                        {/* Button */}
                        <Link
                          href={`/batches/${course.slug}`}
                          className="mt-3 w-full bg-yellow-400 hover:bg-yellow-500 transition rounded-xl py-2 text-sm font-semibold flex items-center justify-center gap-2"
                        >
                          Join Collective <span aria-hidden>→</span>
                        </Link>
                        </>
                      )
                    })()}
                </>
              )}
              {course.batchType === 'prime' && course.studentsEnrolled !== undefined && course.maxStudents !== undefined && (
                <>
                    {(() => {
                      const basePrice = parseInt(course.price.replace(/[₹,]/g, ''))
                      const validEnrolled = Math.min(course.studentsEnrolled, course.maxStudents)
                      const currentPrice = calculateCurrentPrice(basePrice, validEnrolled, course.maxStudents)
                    const potentialPrice = calculatePotentialPrice(basePrice, course.maxStudents)
                      return (
                        <>
                        {/* Pricing */}
                        <div className="grid grid-cols-2 gap-2 mt-3">
                          <div className="border rounded-xl p-2 text-center">
                            <p className="text-sm text-gray-500">CURRENT PRICE</p>
                            <p className="text-xl font-bold">{formatPrice(currentPrice)}</p>
                            <p className="text-sm text-gray-400 line-through">{course.price}</p>
                          </div>
                          <div className={`border ${capacityBorderColor} rounded-xl p-2 text-center`}>
                            <p className={`text-sm ${capacityTextColor}`}>CAPACITY PRICE</p>
                            <p className={`text-xl font-bold ${capacityTextColor}`}>{formatPrice(potentialPrice)}</p>
                            <p className={`text-sm ${capacityTextColor}`}>Lowest possible</p>
                          </div>
                        </div>
                        {/* Progress */}
                        <div className="mt-3">
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-600">Enrollment Progress</span>
                            <span className="text-green-600 font-medium">● {validEnrolled} / {course.maxStudents} Joined</span>
                          </div>
                          <div className="w-full h-2 bg-gray-200 rounded-full">
                            <div
                              className={`h-2 ${progressBgColor} rounded-full transition-all duration-300`}
                              style={{ width: `${(validEnrolled / course.maxStudents) * 100}%` }}
                            />
                          </div>
                          <p className="text-xs text-gray-400 mt-2">
                            Price drops as more students join
                          </p>
                        </div>
                        {/* Button */}
                        <Link
                          href={`/batches/${course.slug}`}
                          className="mt-3 w-full bg-yellow-400 hover:bg-yellow-500 transition rounded-xl py-2 text-sm font-semibold flex items-center justify-center gap-2"
                        >
                          Join Prime <span aria-hidden>→</span>
                        </Link>
                        </>
                      )
                    })()}
                </>
              )}
              </div>
              </>
            )
            
            if (course.batchType === 'collective') {
              return (
                <div
                  key={course.slug}
                  className="w-full max-w-sm bg-white rounded-2xl shadow-lg border border-purple-200 overflow-hidden"
                >
                  {cardContent}
                </div>
              )
            }
            
            return (
              <div
                key={course.slug}
                className="w-full max-w-sm bg-white rounded-2xl shadow-lg border border-orange-200 overflow-hidden"
              >
                {cardContent}
          </div>
            )
          })
        )}
      </div>
    </>
  )
}
