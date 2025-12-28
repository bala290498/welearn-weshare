import JsonLd from '@/components/JsonLd'
import type { CourseFrontmatter } from '@/lib/markdown'
import type { PriceCalculation } from '@/lib/course-utils'

interface CourseSchemaProps {
  course: CourseFrontmatter
  courseId: string
  pricing: PriceCalculation
  hasDynamicPricing: boolean
}

export default function CourseSchema({
  course,
  courseId,
  pricing,
  hasDynamicPricing,
}: CourseSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.description,
    provider: {
      '@type': 'Organization',
      name: 'WeLearnWeShare',
      url: 'https://www.welearnweshare.com',
    },
    url: `https://www.welearnweshare.com/batches/${courseId}`,
    ...(hasDynamicPricing && {
      offers: {
        '@type': 'Offer',
        price: pricing.currentPrice,
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      },
    }),
    ...(course.duration && {
      timeRequired: course.duration,
    }),
    ...(course.instructor && {
      instructor: {
        '@type': 'Person',
        name: course.instructor,
      },
    }),
  }

  return <JsonLd data={schema} />
}



