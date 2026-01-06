import { Check, ChevronRight } from 'lucide-react'
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
    <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-8 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-white/80 mb-6">
          <span className="text-white/90">{batchTypeLabel}</span>
          <ChevronRight className="w-4 h-4 text-white/60" />
          <span className="text-white font-semibold">{course.title}</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
        
        {/* Sub Heading */}
        <p className="text-lg text-white/90 max-w-2xl mb-6">
          {course.description}
        </p>
        
        {/* Points */}
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <Check className="w-5 h-5 text-white flex-shrink-0" />
            <span className="text-white/90">Hands-on practical training</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="w-5 h-5 text-white flex-shrink-0" />
            <span className="text-white/90">Real-world projects and case studies</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="w-5 h-5 text-white flex-shrink-0" />
            <span className="text-white/90">Industry expert instructors</span>
          </li>
        </ul>
      </div>
    </section>
  )
}




