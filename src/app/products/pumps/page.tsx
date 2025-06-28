import { Metadata } from 'next'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ArrowRightIcon, 
  CheckIcon,
  ChevronRightIcon,
  WrenchIcon
} from '@heroicons/react/24/outline'
import { CheckCircleIcon } from '@heroicons/react/24/solid'


export const metadata: Metadata = {
  title: 'Industrial Pumps - Classic Engineering Corp',
  description: 'Comprehensive range of industrial pumps for fluid handling. Corrosion resistant, high flow rates, and easy maintenance for various applications.',
  keywords: 'industrial pumps, centrifugal pumps, positive displacement pumps, fluid handling, Classic Engineering Corp',
  openGraph: {
    title: 'Industrial Pumps - Classic Engineering Corp',
    description: 'Comprehensive range of industrial pumps for fluid handling applications',
    url: 'http://www.classicengineeringcorp.com/products/pumps',
  },
  alternates: {
    canonical: 'http://www.classicengineeringcorp.com/products/pumps',
  },
}

const pumpSpecs = [
  { name: 'Flow Rate', value: '5 GPM to 10,000 GPM' },
  { name: 'Head', value: 'Up to 2000 ft' },
  { name: 'Pressure', value: 'Up to 5000 PSI' },
  { name: 'Temperature', value: '-40°F to 850°F' },
  { name: 'Materials', value: 'Cast Iron, SS, Duplex' },
  { name: 'Sizes', value: '1" to 48" discharge' },
]

const pumpTypes = [
  {
    name: 'Centrifugal Pumps',
    description: 'Single and multi-stage centrifugal pumps for general applications',
    features: ['Self-priming options', 'High efficiency impellers', 'Back pull-out design', 'API 610 compliance']
  },
  {
    name: 'Positive Displacement Pumps',
    description: 'Gear, screw, and diaphragm pumps for viscous fluids',
    features: ['Constant flow rate', 'High pressure capability', 'Viscous fluid handling', 'Precise metering']
  },
  {
    name: 'Chemical Process Pumps',
    description: 'Corrosion resistant pumps for chemical processing',
    features: ['ANSI/ISO compliance', 'Sealless designs', 'PTFE lined options', 'Exotic materials']
  },
  {
    name: 'High Pressure Pumps',
    description: 'Heavy-duty pumps for high pressure applications',
    features: ['Robust construction', 'Plunger/piston design', 'Pressure up to 5000 PSI', 'Continuous duty']
  },
]

const applications = [
  'Water Treatment',
  'Chemical Processing',
  'Oil & Gas',
  'Power Generation',
  'Mining Operations',
  'Food & Beverage',
  'Pharmaceutical',
  'Pulp & Paper',
  'HVAC Systems',
  'Fire Protection'
]

const features = [
  'Corrosion resistant materials',
  'Self-priming capabilities',
  'Easy maintenance access',
  'Mechanical seal options',
  'Variable speed compatibility',
  'Explosion proof motors',
  'Temperature monitoring',
  'Vibration dampening'
]

export default function PumpsPage() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Industrial Pumps",
            "image": "http://www.classicengineeringcorp.com/pumps-image.jpg",
            "description": "Comprehensive range of industrial pumps for fluid handling with corrosion resistance and high flow rates.",
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
              <span className="text-corporate-blue font-medium">Industrial Pumps</span>
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
              🔧
            </div>
            <div>
              <h1 className="text-4xl font-bold">Industrial Pumps</h1>
              <p className="text-xl text-white/90 mt-2">
                Comprehensive range of pumps for fluid handling applications
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
                  Reliable Pumping Solutions for Every Industry
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our extensive range of industrial pumps provides efficient fluid handling 
                  solutions for diverse applications. From water treatment to chemical processing, 
                  our pumps are engineered to deliver consistent performance, reliability, 
                  and longevity in demanding industrial environments.
                </p>
                <p className="text-lg text-gray-600">
                  Built with corrosion-resistant materials and precision engineering, 
                  our pumps offer easy maintenance, high efficiency, and compliance 
                  with industry standards to ensure optimal performance and minimal downtime.
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
                {pumpSpecs.map((spec) => (
                  <div key={spec.name} className="bg-white rounded-lg p-6 shadow-sm">
                    <dt className="text-sm font-medium text-gray-500 mb-2">{spec.name}</dt>
                    <dd className="text-2xl font-bold text-corporate-blue">{spec.value}</dd>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pump Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Pump Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pumpTypes.map((pump) => (
                <div key={pump.name} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{pump.name}</h3>
                  <p className="text-gray-600 mb-4">{pump.description}</p>
                  <ul className="space-y-2">
                    {pump.features.map((feature) => (
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
                    <WrenchIcon className="h-5 w-5 text-corporate-blue mr-2" />
                    <span className="text-gray-700">{application}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Performance Chart */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Performance Advantages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-corporate-blue rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">95%</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Efficiency</h3>
                <p className="text-gray-600">High efficiency hydraulic design reduces energy consumption</p>
              </div>
              <div className="text-center">
                <div className="bg-corporate-blue rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">24/7</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Reliability</h3>
                <p className="text-gray-600">Continuous operation capability with minimal maintenance</p>
              </div>
              <div className="text-center">
                <div className="bg-corporate-blue rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">25+</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Years</h3>
                <p className="text-gray-600">Expected service life with proper maintenance</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-corporate-blue rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Find the Perfect Pump for Your Application</h2>
            <p className="text-lg mb-6 text-white/90">
              Our pump specialists can help you select the right pump configuration for optimal performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-corporate-blue px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                Pump Selection Guide
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