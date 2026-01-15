import { getCourseBySlug, getAllCourses } from '@/lib/markdown'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import CoursePage from '@/components/course/CoursePage'
import { calculateCoursePricing, formatPrice } from '@/lib/course-utils'
import CourseSchema from '@/components/schema/CourseSchema'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const courseData = getCourseBySlug(id)
  
  if (!courseData) {
    return {
      title: 'Course Not Found - WeLearnWeShare',
    }
  }

  const course = courseData.frontmatter
  const pricing = calculateCoursePricing(
    course.price,
    course.studentsEnrolled,
    course.maxStudents
  )

  let description = `${course.title} - ${course.description}`
  
  if (course.studentsEnrolled !== undefined && course.maxStudents !== undefined) {
    description += ` | Students Enrolled: ${pricing.validEnrolled}/${pricing.maxStudents} | Current Price: ${formatPrice(pricing.currentPrice)} per head`
  } else {
    description += ` | Price: ${course.price}`
  }
  
  description += ` | Price drops as more students join. Join now: www.welearnweshare.com/batches/${id}`

  const ogDescription =
    course.studentsEnrolled !== undefined && course.maxStudents !== undefined
      ? `📊 Enrollment: ${pricing.validEnrolled}/${pricing.maxStudents} students | 💰 Current Price: ${formatPrice(pricing.currentPrice)} per head | 🎯 Capacity Price: ${formatPrice(pricing.potentialPrice)} per head | ${course.description} | Dynamic Group Pricing - Price drops as more students join!`
      : `${course.description} | ${course.price}`

  return {
    title: `${course.title} - WeLearnWeShare`,
    description,
    alternates: {
      canonical: `https://www.welearnweshare.com/batches/${id}`,
    },
    openGraph: {
      title: `${course.title} - WeLearnWeShare`,
      description: ogDescription,
      type: 'website',
      url: `https://www.welearnweshare.com/batches/${id}`,
      siteName: 'WeLearnWeShare',
      images: [
        {
          url: '/og-image.svg',
          width: 1200,
          height: 630,
          alt: course.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${course.title} - WeLearnWeShare`,
      description: ogDescription,
      images: ['/og-image.svg'],
    },
    ...(course.studentsEnrolled !== undefined && {
      other: {
        'og:price:amount': pricing.currentPrice.toString(),
        'og:price:currency': 'INR',
      },
    }),
  }
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const courseData = getCourseBySlug(id)

  if (!courseData) {
    notFound()
  }

  const course = courseData.frontmatter
  const content = courseData.content
  
  const pricing = calculateCoursePricing(
    course.price,
    course.studentsEnrolled,
    course.maxStudents
  )

  const hasDynamicPricing =
    course.studentsEnrolled !== undefined && course.maxStudents !== undefined

  // Get other courses (exclude current course)
  const allCourses = getAllCourses()
  const otherCourses = allCourses
    .filter(c => c.slug !== id)
    .slice(0, 2) // Limit to 2 courses

  return (
    <>
      <CourseSchema
        course={course}
        courseId={id}
        pricing={pricing}
        hasDynamicPricing={hasDynamicPricing}
      />
      <CoursePage
        course={course}
        courseId={id}
        content={content}
        otherCourses={otherCourses}
      />
    </>
  )
}

