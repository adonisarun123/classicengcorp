import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRightIcon, CogIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Industrial Gearboxes - Heavy Duty & Precision Engineered | Classic Engineering Corp',
  description: 'High-efficiency industrial gearboxes for demanding applications. Helical, worm, and planetary gearboxes with superior durability and precision engineering.',
  keywords: 'industrial gearboxes, helical gearboxes, worm gearboxes, planetary gearboxes, heavy duty gearboxes',
  openGraph: {
    title: 'Industrial Gearboxes - Heavy Duty & Precision Engineered | Classic Engineering Corp',
    description: 'High-efficiency industrial gearboxes for demanding applications.',
    url: 'http://www.classicengineeringcorp.com/products/gearboxes',
  },
}

const specifications = [
  { spec: 'Power Range', value: '0.5 HP to 500 HP' },
  { spec: 'Ratio Range', value: '3:1 to 3600:1' },
  { spec: 'Efficiency', value: 'Up to 98%' },
  { spec: 'Service Factor', value: '1.5 to 3.0' },
  { spec: 'Operating Temperature', value: '-20°C to +80°C' },
  { spec: 'Mounting', value: 'Foot, Flange, Shaft Mount' },
]

const applications = [
  'Conveyor Systems',
  'Mixers & Agitators',
  'Crushers & Mills',
  'Pumps & Compressors',
  'Fans & Blowers',
  'Material Handling',
  'Mining Equipment',
  'Food Processing',
]

const features = [
  'Heavy-duty cast iron construction',
  'Precision machined gears for smooth operation',
  'Oil leak-proof design with premium seals',
  'Multiple mounting configurations available',
  'Custom ratios and configurations',
  'Low maintenance requirements',
  'Excellent overload capacity',
  'Compact and lightweight design',
]

export default function GearboxesPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <CogIcon className="h-16 w-16 text-corporate-blue mx-auto mb-6" />
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Industrial Gearboxes
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              High-efficiency gearboxes designed for demanding industrial applications. 
              Superior durability, precision engineering, and reliable performance.
            </p>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <nav className="flex mx-auto max-w-7xl px-6 py-4" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-4">
          <li>
            <Link href="/" className="text-gray-400 hover:text-gray-500">
              Home
            </Link>
          </li>
          <li>
            <ArrowRightIcon className="h-4 w-4 text-gray-400" />
            <Link href="/products" className="text-gray-400 hover:text-gray-500 ml-4">
              Products
            </Link>
          </li>
          <li>
            <ArrowRightIcon className="h-4 w-4 text-gray-400" />
            <span className="text-gray-900 font-medium ml-4">Gearboxes</span>
          </li>
        </ol>
      </nav>

      {/* Product overview */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Precision Engineered Gearboxes
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our industrial gearboxes are engineered to deliver reliable power transmission in the most 
              demanding applications. With a comprehensive range of helical, worm, and planetary designs, 
              we provide solutions that maximize efficiency while minimizing maintenance requirements.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Each gearbox is manufactured using premium materials and precision machining techniques, 
              ensuring smooth operation and extended service life. Our quality control processes guarantee 
              that every unit meets strict performance standards.
            </p>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
              <div className="flex items-center justify-center h-96 bg-gradient-to-br from-gray-100 to-gray-200">
                <CogIcon className="h-32 w-32 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Key Features
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our gearboxes incorporate advanced design features that ensure optimal performance 
              and reliability in industrial environments.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-sm text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Specifications
              </h2>
              <div className="mt-8">
                <dl className="space-y-4">
                  {specifications.map((item) => (
                    <div key={item.spec} className="border-b border-gray-200 pb-4">
                      <dt className="text-sm font-medium text-gray-900">{item.spec}</dt>
                      <dd className="mt-1 text-sm text-gray-600">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Applications
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our gearboxes are ideal for a wide range of industrial applications:
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {applications.map((application) => (
                  <span
                    key={application}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-corporate-blue/10 text-corporate-blue"
                  >
                    {application}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-corporate-blue">
        <div className="px-6 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Need a Custom Gearbox Solution?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Our engineering team can design and manufacture custom gearboxes to meet your 
              specific requirements. Get in touch to discuss your application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center px-8 py-4 bg-white text-corporate-blue font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <span>Request Quote</span>
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center px-8 py-4 backdrop-blur-sm bg-white/10 border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300"
              >
                <span>Technical Consultation</span>
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Industrial Gearboxes",
            "description": "High-efficiency industrial gearboxes for demanding applications. Helical, worm, and planetary gearboxes with superior durability.",
            "url": "http://www.classicengineeringcorp.com/products/gearboxes",
            "brand": {
              "@type": "Brand",
              "name": "Classic Engineering Corp"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "Classic Engineering Corp",
              "url": "http://www.classicengineeringcorp.com/"
            },
            "category": "Industrial Equipment",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "USD"
            },
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
                  "name": "Products",
                  "item": "http://www.classicengineeringcorp.com/products"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Gearboxes",
                  "item": "http://www.classicengineeringcorp.com/products/gearboxes"
                }
              ]
            }
          })
        }}
      />
    </div>
  )
} 