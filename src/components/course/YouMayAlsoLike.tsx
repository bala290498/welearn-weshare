'use client'

import Link from 'next/link'
import type { CourseFrontmatter } from '@/lib/markdown'
import { calculateCoursePricing, formatPrice } from '@/lib/course-utils'

interface YouMayAlsoLikeProps {
  courses: (CourseFrontmatter & { slug: string })[]
}

function calculateCurrentPrice(basePrice: number, enrolled: number, maxStudents: number): number {
  if (enrolled === 0) return basePrice
  return Math.ceil(basePrice / enrolled)
}

function calculatePotentialPrice(basePrice: number, maxStudents: number): number {
  return Math.ceil(basePrice / maxStudents)
}

export default function YouMayAlsoLike({ courses }: YouMayAlsoLikeProps) {
  if (courses.length === 0) return null

  return (
    <section className="bg-white p-6 md:p-8">
      <div className="pb-3 mb-6 flex items-center justify-between">
        <h2 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold text-gray-900">
          You may also like
        </h2>
        <Link
          href="/batches"
          className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-sm md:text-base transition-colors"
        >
          View All
          <span aria-hidden="true">→</span>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {courses.map((course) => {
            const baseCourseName = course.slug.replace(/-prime$|-collective$/, '')
            const borderColor = course.batchType === 'collective' ? 'border-purple-200' : 'border-orange-200'
            const capacityBorderColor = course.batchType === 'collective' ? 'border-purple-400' : 'border-orange-400'
            const capacityTextColor = course.batchType === 'collective' ? 'text-purple-600' : 'text-orange-600'
            const progressBgColor = course.batchType === 'collective' ? 'bg-purple-500' : 'bg-orange-500'

            return (
              <Link
                key={course.slug}
                href={`/batches/${course.slug}`}
                className="bg-white rounded-2xl shadow-lg border border-orange-200 overflow-hidden hover:shadow-xl transition-shadow"
              >
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
                      const target = e.target as HTMLImageElement
                      if (!target.src.endsWith('.jpg')) {
                        target.src = `/courses/${baseCourseName}.jpg`
                      } else {
                        target.src = '/og-image.svg'
                      }
                    }}
                  />
                </div>

                {/* Content */}
                <div className="px-3 py-2">
                  <h3 className="text-lg font-bold text-gray-900">{course.title}</h3>
                  
                  {course.batchType && course.studentsEnrolled !== undefined && course.maxStudents !== undefined && (
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
                            <div className="mt-3 w-full bg-yellow-400 hover:bg-yellow-500 transition rounded-xl py-2 text-sm font-semibold flex items-center justify-center gap-2">
                              Join {course.batchType === 'collective' ? 'Collective' : 'Prime'} <span aria-hidden>→</span>
                            </div>
                          </>
                        )
                      })()}
                    </>
                  )}
                  
                  {!course.batchType && (
                    <div className="mt-3">
                      <p className="text-xl font-bold text-gray-900 mb-2">{course.price}</p>
                      <Link
                        href={`/batches/${course.slug}`}
                        className="w-full bg-yellow-400 hover:bg-yellow-500 transition rounded-xl py-2 text-sm font-semibold flex items-center justify-center gap-2"
                      >
                        View Details <span aria-hidden>→</span>
                      </Link>
                    </div>
                  )}
                </div>
              </Link>
            )
          })}
      </div>
    </section>
  )
}

