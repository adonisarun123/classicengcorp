import { Metadata } from 'next'
import Link from 'next/link'
import { WrenchIcon, CogIcon, BoltIcon, CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Industrial Services - Classic Engineering Corp',
  description: 'Professional maintenance, repair, and installation services for industrial equipment. Expert technicians, quick turnaround, and 24/7 support.',
  keywords: 'industrial services, equipment maintenance, repair services, installation, Classic Engineering Corp',
  openGraph: {
    title: 'Industrial Services - Classic Engineering Corp',
    description: 'Professional maintenance, repair, and installation services for industrial equipment',
    url: 'http://www.classicengineeringcorp.com/services',
  },
  alternates: {
    canonical: 'http://www.classicengineeringcorp.com/services',
  },
}

const services = [
  {
    name: 'Maintenance Services',
    description: 'Preventive and predictive maintenance programs to maximize equipment lifespan and minimize unplanned downtime.',
    href: '/services/maintenance',
    icon: WrenchIcon,
    features: [
      'Scheduled preventive maintenance',
      'Predictive maintenance programs',
      'Condition monitoring',
      'Equipment health assessments',
      'Maintenance planning and scheduling',
      'Spare parts management'
    ],
    benefits: [
      'Reduced downtime',
      'Extended equipment life',
      'Lower operating costs',
      'Improved reliability'
    ]
  },
  {
    name: 'Repair Services',
    description: 'Expert repair services for all types of industrial equipment with quick turnaround times and quality guarantees.',
    href: '/services/repair',
    icon: CogIcon,
    features: [
      'Emergency repair services',
      'On-site and workshop repairs',
      'Root cause analysis',
      'Component rebuilding',
      'Performance restoration',
      'Quality testing and validation'
    ],
    benefits: [
      'Quick turnaround',
      'Cost-effective solutions',
      'Restored performance',
      'Extended service life'
    ]
  },
  {
    name: 'Installation Services',
    description: 'Professional installation and commissioning services for optimal equipment performance and compliance.',
    href: '/services/installation',
    icon: BoltIcon,
    features: [
      'Equipment installation',
      'System commissioning',
      'Performance testing',
      'Training and documentation',
      'Compliance verification',
      'Startup support'
    ],
    benefits: [
      'Proper installation',
      'Optimal performance',
      'Compliance assurance',
      'Technical support'
    ]
  },
]

const stats = [
  { name: 'Service Technicians', value: '50+' },
  { name: 'Response Time', value: '< 4 hrs' },
  { name: 'Customer Satisfaction', value: '99%' },
  { name: 'Years Experience', value: '25+' },
]

const capabilities = [
  'Mechanical repairs and rebuilds',
  'Electrical troubleshooting',
  'Hydraulic system service',
  'Pneumatic system maintenance',
  'Lubrication analysis',
  'Vibration analysis',
  'Thermal imaging inspections',
  'Alignment services',
  'Balancing services',
  'Welding and fabrication'
]

const industries = [
  'Oil & Gas',
  'Chemical Processing',
  'Power Generation',
  'Mining & Metals',
  'Water Treatment',
  'Food & Beverage',
  'Pharmaceutical',
  'Manufacturing',
  'Marine',
  'Pulp & Paper'
]

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Industrial Equipment Services",
            "description": "Professional maintenance, repair, and installation services for industrial equipment.",
            "provider": {
              "@type": "Organization",
              "name": "Classic Engineering Corp"
            },
            "serviceType": "Industrial Equipment Services",
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Industrial Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Maintenance Services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Repair Services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Installation Services"
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
              <span className="text-corporate-blue font-medium">Services</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-corporate-blue text-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Industrial Equipment Services</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Complete support solutions to ensure optimal performance and longevity of your industrial equipment
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.name} className="text-center">
                <div className="text-4xl font-bold text-corporate-blue mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive industrial equipment services delivered by experienced technicians 
              using state-of-the-art tools and proven methodologies.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.name} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <service.icon className="h-8 w-8 text-corporate-blue mr-4" />
                    <h3 className="text-2xl font-bold text-gray-900">{service.name}</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feature) => (
                          <li key={feature} className="flex items-start">
                            <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start">
                            <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link
                    href={service.href}
                    className="inline-flex items-center bg-corporate-blue text-white px-6 py-3 rounded-md font-semibold hover:bg-corporate-blue/90 transition-colors"
                  >
                    Learn More
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
                <div className={`bg-gray-100 rounded-lg p-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <service.icon className="h-24 w-24 text-corporate-blue mx-auto mb-4" />
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 mb-4">Complete Service Features</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {service.features.map((feature) => (
                        <li key={feature}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Capabilities */}
      <div className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Capabilities</h2>
            <p className="text-lg text-gray-600">
              Comprehensive technical capabilities across all major industrial equipment types
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {capabilities.map((capability) => (
              <div key={capability} className="bg-white rounded-lg p-4 text-center shadow-sm">
                <WrenchIcon className="h-6 w-6 text-corporate-blue mx-auto mb-2" />
                <span className="text-sm text-gray-700">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industries Served */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-lg text-gray-600">
              Serving diverse industries with specialized knowledge and expertise
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {industries.map((industry) => (
              <div key={industry} className="text-center">
                <div className="bg-corporate-blue/10 rounded-lg p-6 mb-3">
                  <CogIcon className="h-8 w-8 text-corporate-blue mx-auto" />
                </div>
                <span className="text-gray-700 font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-corporate-blue py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Industrial Equipment Services?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Our experienced service team is ready to help you maintain peak equipment performance 
            and minimize downtime with professional, reliable service solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-corporate-blue px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Request Service Quote
            </Link>
            <Link
              href="/contact"
              className="border border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors"
            >
              24/7 Emergency Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 