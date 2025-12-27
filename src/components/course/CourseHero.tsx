import Link from 'next/link'
import { Check, ChevronRight, Download } from 'lucide-react'
import JoinCommunityButton from '@/components/JoinCommunityButton'
import type { CourseFrontmatter } from '@/lib/markdown'

interface CourseHeroProps {
  course: CourseFrontmatter
  courseId: string
}

export default function CourseHero({ course, courseId }: CourseHeroProps) {
  const batchTypeLabel =
    course.batchType === 'prime'
      ? 'Prime'
      : course.batchType === 'collective'
        ? 'Collective'
        : 'Batch'

  return (
    <section className="pt-0 pb-6 md:py-10 px-4 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="mb-4 lg:mr-[calc(33.333%+2rem)] pt-4 md:pt-0">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link
              href="/batches"
              className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              Batches
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="font-medium text-gray-700">{batchTypeLabel}</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900 font-semibold">{course.title}</span>
          </nav>
        </div>
        <div className="space-y-2 md:space-y-3 lg:mr-[calc(33.333%+2rem)]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h1 className="text-[clamp(1.5rem,4vw,3rem)] font-semibold text-gray-900 flex-1">
              {course.title}
            </h1>
          </div>
          <p className="text-[clamp(0.875rem,2vw,1.25rem)] text-gray-600 leading-relaxed">
            {course.description}
          </p>

          {/* Key Points */}
          <ul className="space-y-2 md:space-y-3 mt-4 md:mt-6 mb-12 md:mb-20">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 text-sm md:text-base">Working professionals</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 text-sm md:text-base">Dynamic group pricing</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 text-sm md:text-base">Live Interactive classes</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 text-sm md:text-base">
                Industry level Experience, Certifications and more
              </span>
            </li>
          </ul>

          {/* Spacer */}
          <div className="h-8 md:h-12"></div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <JoinCommunityButton className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-4 py-2 md:px-6 md:py-3 text-base md:text-lg rounded-xl shadow-lg hover:bg-primary-700 transition font-semibold focus:outline-none focus-visible:ring focus-visible:ring-primary-600 focus-visible:ring-offset-2 w-full sm:w-auto">
              Join Community
            </JoinCommunityButton>
            <a
              href={`https://wa.me/917010584543?text=${encodeURIComponent(`Hi! I would like to get the brochure for ${course.title}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 border border-primary-600 px-4 py-2 md:px-6 md:py-3 text-base md:text-lg rounded-xl shadow-lg hover:bg-primary-50 transition font-semibold focus:outline-none focus-visible:ring focus-visible:ring-primary-600 focus-visible:ring-offset-2 w-full sm:w-auto"
            >
              <Download className="w-5 h-5" />
              Get Brochure
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

