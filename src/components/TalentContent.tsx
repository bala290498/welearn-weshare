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

  // Helper to get role from category
  const getRole = (category: string) => {
    // Map categories to role names
    const roleMap: Record<string, string> = {
      'DevOps': 'DevOps Engineer',
      'AWS': 'Cloud Engineer',
      'Cloud Computing': 'Cloud Engineer',
      'Linux': 'Linux Engineer',
    }
    return roleMap[category] || category
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
              <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-semibold text-gray-900 mb-2">
                Top Performers — {category} Batch
              </h2>
              <Link
                href={`/students/category/${category.toLowerCase()}`}
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition font-semibold text-sm flex items-center gap-2"
              >
                View All ({categoryStudents.length})
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Student Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {displayedStudents.map((student) => (
                <div
                  key={student.slug}
                  className="bg-white rounded-2xl shadow-md p-4 text-center flex flex-col"
                >
                  {/* Avatar (initials only) */}
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-xl font-semibold text-gray-700">
                      {getInitials(student.name)}
                      </span>
                    </div>
                  </div>

                  {/* Name */}
                  <h2 className="mt-3 text-base font-semibold text-gray-900">
                    {student.name}
                  </h2>

                  {/* Role */}
                  <p className="mt-1 flex items-center justify-center gap-2 text-sm text-gray-500">
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500"
                      aria-hidden="true"
                    />
                    <span>{getRole(student.category)}</span>
                  </p>

                  {/* Divider */}
                  <div className="my-4 h-px bg-gray-200" />

                  {/* Icons */}
                  <div className="flex justify-center gap-4 mb-4">
                      {student.socialLinks.linkedin && (
                        <a
                          href={student.socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        aria-label="LinkedIn profile"
                        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
                        >
                        <Linkedin className="w-4 h-4 text-gray-600" aria-hidden="true" />
                        </a>
                      )}
                      {student.socialLinks.github && (
                        <a
                          href={student.socialLinks.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        aria-label="GitHub profile"
                        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
                        >
                        <Github className="w-4 h-4 text-gray-600" aria-hidden="true" />
                        </a>
                      )}
                  </div>

                  {/* Button (text-style with arrow) */}
                    <Link
                      href={`/students/${student.slug}`}
                    className="group w-full flex items-center justify-center gap-2 py-2 text-sm text-blue-600 font-medium hover:text-blue-700 transition bg-transparent"
                  >
                    <span className="group-hover:underline">View Details</span>
                    <ArrowRight
                      className="w-3 h-3 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                    </Link>
                </div>
              ))}
            </div>

          </div>
        )
      })}
    </div>
  )
}

