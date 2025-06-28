import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Classic Engineering Corp - Industrial Engineering Leaders',
  description: 'Learn about Classic Engineering Corp - a leading provider of industrial motors, gearboxes, pumps, and engineering solutions. Discover our mission, vision, and commitment to excellence.',
  keywords: 'about classic engineering, industrial engineering company, manufacturing solutions, company history',
  authors: [{ name: "Classic Engineering Corp" }],
  creator: "Classic Engineering Corp",
  publisher: "Classic Engineering Corp",
  robots: "index, follow",
  openGraph: {
    title: 'About Classic Engineering Corp - Industrial Engineering Leaders',
    description: 'Learn about Classic Engineering Corp - a leading provider of industrial motors, gearboxes, pumps, and engineering solutions.',
    url: 'http://www.classicengineeringcorp.com/about-us',
    siteName: 'Classic Engineering Corp',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Classic Engineering Corp - Industrial Engineering Leaders',
    description: 'Learn about Classic Engineering Corp - a leading provider of industrial motors, gearboxes, pumps, and engineering solutions.',
  },
  alternates: {
    canonical: 'http://www.classicengineeringcorp.com/about-us',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Classic Engineering Corp",
            "description": "Learn about Classic Engineering Corp - a leading provider of industrial motors, gearboxes, pumps, and engineering solutions.",
            "url": "http://www.classicengineeringcorp.com/about-us",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "http://www.classicengineeringcorp.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "About Us",
                  "item": "http://www.classicengineeringcorp.com/about-us"
                }
              ]
            },
            "mainEntity": {
              "@type": "Organization",
              "name": "Classic Engineering Corp",
              "url": "http://www.classicengineeringcorp.com/",
              "description": "Leading provider of industrial motors, gearboxes, pumps, and custom engineering solutions.",
              "foundingDate": "1995",
              "industry": "Industrial Engineering",
              "numberOfEmployees": "100-500"
            }
          })
        }}
      />
    </>
  )
} 