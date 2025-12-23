'use client'

import Link from 'next/link'
import { ArrowRight, Linkedin, Github } from 'lucide-react'
import { Student } from '@/data/students'

interface TalentContentProps {
  studentsByCategory: Record<string, Student[]>
}

export default function TalentContent({ studentsByCategory }: TalentContentProps) {
  const categories = Object.keys(studentsByCategory).sort()

  // Helper function to get initials from name
  const getInitials = (name: string) => {
    const parts = name.trim().split(' ')
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
    }
    return name.substring(0, 2).toUpperCase()
  }

  return (
    <div className="space-y-12 md:space-y-16">
      {categories.map((category) => {
        const categoryStudents = studentsByCategory[category]
        const displayedStudents = categoryStudents.slice(0, 3)

        return (
          <div key={category} className="space-y-6">
            {/* Category Heading */}
            <div className="flex items-center justify-between">
              <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-gray-900 mb-2">
                Top Performers — {category} Batch
              </h2>
              <Link
                href={`/talent/category/${category.toLowerCase()}`}
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition font-semibold text-sm flex items-center gap-2"
              >
                View All ({categoryStudents.length})
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Student Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xl:gap-6">
              {displayedStudents.map((student) => (
                <div
                  key={student.slug}
                  className="bg-white rounded-xl border border-gray-200 p-5 md:p-6 shadow-sm hover:shadow-lg hover:border-primary-300 transition-all duration-300 flex flex-col"
                >
                  {/* Initials Icon and Name */}
                  <div className="mb-4 min-h-[60px] flex-shrink-0 flex items-start gap-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-lg md:text-xl font-bold flex-shrink-0">
                      {getInitials(student.name)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 line-clamp-1">
                        {student.name}
                      </h3>
                      <p className="text-sm text-primary-600 font-medium line-clamp-1">
                        {student.category}
                      </p>
                    </div>
                  </div>

                  {/* Connect Icons */}
                  <div className="mb-4 min-h-[32px] flex-shrink-0">
                    <p className="text-xs text-gray-500 font-medium mb-2">Connect</p>
                    <div className="flex gap-2">
                      {student.socialLinks.linkedin && (
                        <a
                          href={student.socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-lg bg-[#0077b5] text-white flex items-center justify-center hover:bg-[#006399] transition"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {student.socialLinks.github && (
                        <a
                          href={student.socialLinks.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-lg bg-gray-900 text-white flex items-center justify-center hover:bg-gray-800 transition"
                          aria-label="GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* View Details Button */}
                  <div className="mt-auto pt-4 border-t border-gray-200 min-h-[48px] flex-shrink-0 flex justify-center">
                    <Link
                      href={`/talent/${student.slug}`}
                      className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition font-semibold text-sm group"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )
      })}
    </div>
  )
}

