'use client'

import { useState } from 'react'
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

// Calculate current price per student based on enrollment
// basePrice is the total goal amount, price per student decreases as more students join
function calculateCurrentPrice(basePrice: number, studentsEnrolled: number, maxStudents: number): number {
  if (studentsEnrolled <= 0) {
    return Math.floor(basePrice / 1) // If no students, show max price
  }
  if (studentsEnrolled >= maxStudents) {
    return Math.floor(basePrice / maxStudents) // At max capacity, minimum price
  }
  // Price per student = basePrice / current enrollment
  // This ensures price decreases as more students join
  return Math.floor(basePrice / studentsEnrolled)
}

export default function SkillBuildingClient({ courses }: SkillBuildingClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  
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
            key={course.id}
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
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Students enrolled:</span>
                      <span className="text-primary-600 font-semibold">
                        {course.studentsEnrolled} / {course.maxStudents}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(course.studentsEnrolled / course.maxStudents) * 100}%` }}
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-1 pt-2 border-t border-gray-200">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Current price per student:</span>
                    </div>
                    <span className="text-primary-600 font-semibold text-base">
                      ₹{calculateCurrentPrice(
                        parseInt(course.price.replace(/[₹,]/g, '')),
                        course.studentsEnrolled,
                        course.maxStudents
                      ).toLocaleString('en-IN')}
                    </span>
                    <span className="text-gray-500 text-xs">Price drops as more students join</span>
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

