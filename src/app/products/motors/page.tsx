import { Metadata } from 'next'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ArrowRightIcon, 
  CheckIcon,
  ChevronRightIcon,
  CogIcon
} from '@heroicons/react/24/outline'
import { CheckCircleIcon } from '@heroicons/react/24/solid'


export const metadata: Metadata = {
  title: 'Electric Motors - Classic Engineering Corp',
  description: 'High-efficiency electric motors for industrial applications. Variable speed control, energy efficient design, and robust construction for demanding environments.',
  keywords: 'electric motors, industrial motors, variable speed motors, energy efficient motors, Classic Engineering Corp',
  openGraph: {
    title: 'Electric Motors - Classic Engineering Corp',
    description: 'High-efficiency electric motors for industrial applications',
    url: 'http://www.classicengineeringcorp.com/products/motors',
  },
  alternates: {
    canonical: 'http://www.classicengineeringcorp.com/products/motors',
  },
}

const motorSpecs = [
  { name: 'Power Range', value: '0.5 HP to 500 HP' },
  { name: 'Voltage', value: '230V to 11kV' },
  { name: 'Speed', value: '750 to 3000 RPM' },
  { name: 'Efficiency', value: 'Up to 95%' },
  { name: 'Protection', value: 'IP55/IP65' },
  { name: 'Insulation Class', value: 'Class F/H' },
]

const motorTypes = [
  {
    name: 'AC Induction Motors',
    description: 'Reliable three-phase AC motors for general industrial applications',
    features: ['Squirrel cage design', 'Low maintenance', 'High starting torque', 'Robust construction']
  },
  {
    name: 'Variable Speed Motors',
    description: 'Energy-efficient motors with variable frequency drive compatibility',
    features: ['Energy savings', 'Precise speed control', 'Soft start capability', 'Reduced mechanical stress']
  },
  {
    name: 'High Efficiency Motors',
    description: 'Premium efficiency motors meeting IE3/IE4 standards',
    features: ['Reduced energy consumption', 'Lower operating costs', 'Environmental compliance', 'Extended lifespan']
  },
  {
    name: 'Explosion Proof Motors',
    description: 'Certified motors for hazardous area applications',
    features: ['ATEX certified', 'Flameproof enclosure', 'Zone 1 & 2 rated', 'Special protection']
  },
]

const applications = [
  'Pumps and Compressors',
  'Conveyor Systems',
  'Fans and Blowers',
  'Machine Tools',
  'Textile Machinery',
  'Food Processing Equipment',
  'Chemical Processing',
  'Mining Equipment',
  'HVAC Systems',
  'Paper Mills'
]

const features = [
  'Premium quality materials',
  'Precision balanced rotors',
  'Low noise operation',
  'Minimal vibration',
  'Wide operating temperature range',
  'Multiple mounting options',
  'Weatherproof construction',
  'Easy maintenance access'
]

export default function MotorsPage() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Industrial Electric Motors",
            "image": "http://www.classicengineeringcorp.com/motors-image.jpg",
            "description": "High-efficiency electric motors for industrial applications with variable speed control and energy efficient design.",
            "brand": {
              "@type": "Brand",
              "name": "Classic Engineering Corp"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "Classic Engineering Corp"
            },
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          })
        }}
      />

      {/* Breadcrumb */}
      <nav className="bg-gray-50 px-6 py-4">
        <div className="mx-auto max-w-7xl">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="text-gray-500 hover:text-corporate-blue">
                Home
              </Link>
            </li>
            <li>
              <span className="text-gray-500">/</span>
            </li>
            <li>
              <Link href="/products" className="text-gray-500 hover:text-corporate-blue">
                Products
              </Link>
            </li>
            <li>
              <span className="text-gray-500">/</span>
            </li>
            <li>
              <span className="text-corporate-blue font-medium">Electric Motors</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-corporate-blue text-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-6">
            <Link
              href="/products"
              className="inline-flex items-center text-white/80 hover:text-white transition-colors"
            >
              <ArrowRightIcon className="h-5 w-5 mr-2 rotate-180" />
              Back to Products
            </Link>
          </div>
          <div className="flex items-center space-x-4">
                         <div className="h-12 w-12 bg-white/20 rounded-lg flex items-center justify-center text-2xl">
               ⚡
             </div>
            <div>
              <h1 className="text-4xl font-bold">Electric Motors</h1>
              <p className="text-xl text-white/90 mt-2">
                High-efficiency electric motors for industrial applications
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Overview */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Reliable Electric Motors for Every Application
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our comprehensive range of electric motors delivers exceptional performance, 
                  energy efficiency, and reliability for industrial applications. From standard 
                  induction motors to specialized variable speed drives, we provide solutions 
                  that meet the demanding requirements of modern manufacturing.
                </p>
                <p className="text-lg text-gray-600">
                  Engineered for continuous operation in harsh industrial environments, 
                  our motors feature robust construction, premium materials, and precision 
                  engineering to ensure long service life and minimal maintenance requirements.
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Key Features</h3>
                <ul className="space-y-3">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Specifications</h2>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {motorSpecs.map((spec) => (
                  <div key={spec.name} className="bg-white rounded-lg p-6 shadow-sm">
                    <dt className="text-sm font-medium text-gray-500 mb-2">{spec.name}</dt>
                    <dd className="text-2xl font-bold text-corporate-blue">{spec.value}</dd>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Motor Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Motor Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {motorTypes.map((motor) => (
                <div key={motor.name} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{motor.name}</h3>
                  <p className="text-gray-600 mb-4">{motor.description}</p>
                  <ul className="space-y-2">
                    {motor.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Applications */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Applications</h2>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {applications.map((application) => (
                  <div key={application} className="flex items-center">
                    <CogIcon className="h-5 w-5 text-corporate-blue mr-2" />
                    <span className="text-gray-700">{application}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-corporate-blue rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help Selecting the Right Motor?</h2>
            <p className="text-lg mb-6 text-white/90">
              Our technical experts are ready to help you choose the perfect motor for your application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-corporate-blue px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Technical Support
              </Link>
              <Link
                href="/contact"
                className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 