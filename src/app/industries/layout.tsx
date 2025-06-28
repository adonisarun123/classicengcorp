import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Industries We Serve - Classic Engineering Corp Industrial Solutions',
  description: 'Classic Engineering Corp serves 50+ industries including Oil & Gas, Automotive, Food & Beverage, Power Generation, Water Treatment, and more with specialized industrial equipment.',
  keywords: 'industrial equipment by industry, oil gas equipment, automotive manufacturing, food processing equipment, power generation, water treatment, pharmaceutical equipment',
  authors: [{ name: "Classic Engineering Corp" }],
  creator: "Classic Engineering Corp",
  publisher: "Classic Engineering Corp",
  robots: "index, follow",
  openGraph: {
    title: 'Industries We Serve - Classic Engineering Corp Industrial Solutions',
    description: 'Specialized industrial equipment solutions for 50+ industries including Oil & Gas, Automotive, Manufacturing, and more.',
    url: 'http://www.classicengineeringcorp.com/industries',
    siteName: 'Classic Engineering Corp',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industries We Serve - Classic Engineering Corp Industrial Solutions',
    description: 'Specialized industrial equipment solutions for 50+ industries including Oil & Gas, Automotive, Manufacturing, and more.',
  },
  alternates: {
    canonical: 'http://www.classicengineeringcorp.com/industries',
  },
}

export default function IndustriesLayout({
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
            "@type": "WebPage",
            "name": "Industries We Serve - Classic Engineering Corp",
            "description": "Classic Engineering Corp serves 50+ industries with specialized industrial equipment solutions.",
            "url": "http://www.classicengineeringcorp.com/industries",
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
                  "name": "Industries",
                  "item": "http://www.classicengineeringcorp.com/industries"
                }
              ]
            },
            "mainEntity": {
              "@type": "Organization",
              "name": "Classic Engineering Corp",
              "url": "http://www.classicengineeringcorp.com/",
              "description": "Leading provider of industrial equipment serving 50+ industries including Oil & Gas, Automotive, Food & Beverage, Power Generation, and more.",
              "industry": "Industrial Engineering",
              "serviceArea": "Global",
              "areaServed": [
                "Oil & Gas",
                "Automotive",
                "Food & Beverage", 
                "Power Generation",
                "Water Treatment",
                "Pharmaceutical",
                "Mining",
                "Marine",
                "Manufacturing"
              ]
            }
          })
        }}
      />
    </>
  )
} 