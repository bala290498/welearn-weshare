import JsonLd from '@/components/JsonLd'

interface ArticleSchemaProps {
  title: string
  description: string
  url: string
  datePublished?: string
  author?: string
  image?: string
}

export default function ArticleSchema({
  title,
  description,
  url,
  datePublished,
  author,
  image = '/og-image.svg',
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    image: `https://welearnweshare.com${image}`,
    publisher: {
      '@type': 'Organization',
      name: 'WeLearnWeShare',
      logo: {
        '@type': 'ImageObject',
        url: 'https://welearnweshare.com/og-image.svg',
      },
    },
    ...(datePublished && {
      datePublished,
    }),
    ...(author && {
      author: {
        '@type': 'Person',
        name: author,
      },
    }),
  }

  return <JsonLd data={schema} />
}

