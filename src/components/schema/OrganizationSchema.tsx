import JsonLd from '@/components/JsonLd'

export default function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'WeLearnWeShare',
    url: 'https://www.welearnweshare.com',
    logo: 'https://www.welearnweshare.com/og-image.svg',
    description: 'Community-powered courses taught by industry experts — fees fall as more students join.',
    sameAs: [
      // Add social media links when available
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-7010584543',
      contactType: 'Customer Service',
      areaServed: 'IN',
      availableLanguage: ['English'],
    },
  }

  return <JsonLd data={schema} />
}



