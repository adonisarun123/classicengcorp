import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Classic Engineering Corp - Get Industrial Solutions',
  description: 'Get in touch with Classic Engineering Corp for industrial motors, gearboxes, pumps, and engineering solutions. Contact our experts for quotes and technical support.',
  keywords: 'contact classic engineering, industrial equipment quotes, technical support, industrial solutions',
  authors: [{ name: "Classic Engineering Corp" }],
  creator: "Classic Engineering Corp",
  publisher: "Classic Engineering Corp",
  robots: "index, follow",
  openGraph: {
    title: 'Contact Classic Engineering Corp - Get Industrial Solutions',
    description: 'Get in touch with Classic Engineering Corp for industrial motors, gearboxes, pumps, and engineering solutions.',
    url: 'http://www.classicengineeringcorp.com/contact',
    siteName: 'Classic Engineering Corp',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Classic Engineering Corp - Get Industrial Solutions',
    description: 'Get in touch with Classic Engineering Corp for industrial motors, gearboxes, pumps, and engineering solutions.',
  },
  alternates: {
    canonical: 'http://www.classicengineeringcorp.com/contact',
  },
}

export default function ContactLayout({
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
            "@type": "ContactPage",
            "name": "Contact Classic Engineering Corp",
            "description": "Get in touch with Classic Engineering Corp for industrial motors, gearboxes, pumps, and engineering solutions.",
            "url": "http://www.classicengineeringcorp.com/contact",
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
                  "name": "Contact",
                  "item": "http://www.classicengineeringcorp.com/contact"
                }
              ]
            },
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Classic Engineering Corp",
              "image": "http://www.classicengineeringcorp.com/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "No 195/1, Krishnagiri Bypass Road, Near Thirumala Lodge",
                "addressLocality": "Hosur",
                "addressRegion": "Tamil Nadu",
                "postalCode": "635109",
                "addressCountry": "IN"
              },
              "telephone": ["+91-9894081022", "+91-9443340831"],
              "email": "info@classicengineeringcorp.com",
              "openingHours": "Mo-Sa 09:00-20:00"
            }
          })
        }}
      />
    </>
  )
} 