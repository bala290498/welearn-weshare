import { getCourseBySlug } from '@/lib/markdown'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import CoursePage from '@/components/course/CoursePage'
import { calculateCoursePricing, formatPrice } from '@/lib/course-utils'

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

  description += ` | Duration: ${course.duration} | Price drops as more students join. Join now: welearnweshare.com/batches/${id}`

  const ogDescription =
    course.studentsEnrolled !== undefined && course.maxStudents !== undefined
      ? `📊 Students Enrolled: ${pricing.validEnrolled}/${pricing.maxStudents} | 💰 Current Price: ${formatPrice(pricing.currentPrice)} per head | ${course.description} | Duration: ${course.duration} | Price drops as more students join!`
      : `${course.description} | Duration: ${course.duration} | ${course.price}`

  return {
    title: `${course.title} - WeLearnWeShare`,
    description,
    openGraph: {
      title: `${course.title} - WeLearnWeShare`,
      description: ogDescription,
      type: 'website',
      url: `https://welearnweshare.com/batches/${id}`,
      siteName: 'WeLearnWeShare',
      images: [],
    },
    twitter: {
      card: 'summary',
      title: `${course.title} - WeLearnWeShare`,
      description: ogDescription,
      images: [],
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

  return (
    <CoursePage
      course={course}
      courseId={id}
      content={content}
      pricing={pricing}
      hasDynamicPricing={hasDynamicPricing}
    />
  )
}

