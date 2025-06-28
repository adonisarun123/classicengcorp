import { Metadata } from 'next'
import Link from 'next/link'
import { BuildingOfficeIcon, CogIcon, LightBulbIcon, CheckCircleIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Custom Engineering Solutions - Classic Engineering Corp',
  description: 'Tailored engineering solutions to meet your specific industrial requirements. Custom design, expert consultation, and complete integration services.',
  keywords: 'custom engineering, tailored solutions, industrial design, custom manufacturing, Classic Engineering Corp',
  openGraph: {
    title: 'Custom Engineering Solutions - Classic Engineering Corp',
    description: 'Tailored engineering solutions to meet your specific industrial requirements',
    url: 'http://www.classicengineeringcorp.com/products/custom-solutions',
  },
  alternates: {
    canonical: 'http://www.classicengineeringcorp.com/products/custom-solutions',
  },
}

const capabilities = [
  { name: 'Design Capacity', value: 'Up to 1000 HP systems' },
  { name: 'Project Timeline', value: '4-20 weeks delivery' },
  { name: 'Industries Served', value: '50+ sectors' },
  { name: 'Engineering Team', value: '25+ specialists' },
  { name: 'CAD Software', value: 'SolidWorks, AutoCAD' },
  { name: 'Compliance', value: 'ISO, ANSI, API standards' },
]

const serviceTypes = [
  {
    name: 'Custom Equipment Design',
    description: 'Complete design and manufacturing of specialized industrial equipment',
    features: ['3D modeling and simulation', 'Prototype development', 'Testing and validation', 'Documentation package']
  },
  {
    name: 'System Integration',
    description: 'Integration of multiple components into complete operational systems',
    features: ['Control system design', 'PLC programming', 'HMI development', 'SCADA integration']
  },
  {
    name: 'Retrofit & Upgrades',
    description: 'Modernization of existing equipment with latest technology',
    features: ['Performance optimization', 'Energy efficiency improvements', 'Safety upgrades', 'Compliance updates']
  },
  {
    name: 'Consultation Services',
    description: 'Expert engineering consultation for complex industrial challenges',
    features: ['Feasibility studies', 'Process optimization', 'Troubleshooting', 'Training programs']
  },
]

const industries = [
  'Oil & Gas',
  'Chemical Processing',
  'Power Generation',
  'Mining & Metals',
  'Water Treatment',
  'Food & Beverage',
  'Pharmaceutical',
  'Automotive',
  'Aerospace',
  'Marine'
]

const processSteps = [
  {
    step: '01',
    title: 'Consultation',
    description: 'Initial meeting to understand your specific requirements and challenges'
  },
  {
    step: '02',
    title: 'Design Phase',
    description: 'Detailed engineering design with 3D modeling and performance calculations'
  },
  {
    step: '03',
    title: 'Prototyping',
    description: 'Build and test prototypes to validate design performance'
  },
  {
    step: '04',
    title: 'Manufacturing',
    description: 'Production using precision manufacturing techniques and quality control'
  },
  {
    step: '05',
    title: 'Installation',
    description: 'On-site installation, commissioning, and performance verification'
  },
  {
    step: '06',
    title: 'Support',
    description: 'Ongoing technical support, maintenance, and optimization services'
  }
]

const caseStudies = [
  {
    title: 'High-Pressure Pumping System',
    industry: 'Oil & Gas',
    challenge: 'Required 5000 PSI system for offshore platform',
    solution: 'Custom multi-stage pump with specialized sealing system',
    result: '99.8% uptime over 2 years of operation'
  },
  {
    title: 'Chemical Processing Reactor',
    industry: 'Chemical',
    challenge: 'Corrosive environment with precise temperature control',
    solution: 'Custom reactor with exotic materials and control system',
    result: '40% increase in production efficiency'
  },
  {
    title: 'Mining Conveyor Drive',
    industry: 'Mining',
    challenge: 'Heavy-duty application in harsh environment',
    solution: 'Custom gearbox with enhanced lubrication system',
    result: 'Extended maintenance intervals by 300%'
  }
]

export default function CustomSolutionsPage() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Custom Engineering Solutions",
            "description": "Tailored engineering solutions to meet specific industrial requirements with custom design and expert consultation.",
            "provider": {
              "@type": "Organization",
              "name": "Classic Engineering Corp"
            },
            "serviceType": "Custom Engineering and Design Services",
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Custom Engineering Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Equipment Design"
                  }
                }
              ]
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
              <span className="text-corporate-blue font-medium">Custom Solutions</span>
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
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to Products
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <BuildingOfficeIcon className="h-12 w-12 text-white" />
            <div>
              <h1 className="text-4xl font-bold">Custom Engineering Solutions</h1>
              <p className="text-xl text-white/90 mt-2">
                Tailored solutions for your unique industrial challenges
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
                  Engineering Excellence for Unique Challenges
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  When standard solutions don't meet your requirements, our custom engineering 
                  team steps in to design, develop, and deliver tailored solutions that address 
                  your specific industrial challenges. From concept to commissioning, we provide 
                  end-to-end engineering services.
                </p>
                <p className="text-lg text-gray-600">
                  Our experienced team of engineers combines innovative design with practical 
                  manufacturing expertise to create solutions that not only meet your technical 
                  requirements but also deliver exceptional value and performance.
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Our Capabilities</h3>
                <div className="grid grid-cols-1 gap-4">
                  {capabilities.slice(0, 4).map((capability) => (
                    <div key={capability.name} className="flex justify-between">
                      <span className="text-gray-600">{capability.name}:</span>
                      <span className="font-semibold text-corporate-blue">{capability.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Process Steps */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Engineering Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step) => (
                <div key={step.step} className="relative">
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <div className="bg-corporate-blue text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Service Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Custom Engineering Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceTypes.map((service) => (
                <div key={service.name} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
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

          {/* Industries Served */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Industries We Serve</h2>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {industries.map((industry) => (
                  <div key={industry} className="flex items-center">
                    <BuildingOfficeIcon className="h-5 w-5 text-corporate-blue mr-2" />
                    <span className="text-gray-700">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Case Studies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Success Stories</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <div key={study.title} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <div className="bg-corporate-blue text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                    {study.industry}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{study.title}</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium text-gray-900">Challenge:</span>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Solution:</span>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Result:</span>
                      <p className="text-corporate-blue font-medium">{study.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-corporate-blue rounded-lg p-8 text-white text-center">
            <LightBulbIcon className="h-16 w-16 text-white mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Have a Unique Engineering Challenge?</h2>
            <p className="text-lg mb-6 text-white/90">
              Let's discuss how our custom engineering solutions can solve your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-corporate-blue px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/contact"
                className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors"
              >
                Submit Project Brief
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 