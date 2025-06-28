import { Metadata } from 'next'
import Link from 'next/link'
import { CogIcon, ClockIcon, WrenchIcon, CheckCircleIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Repair Services - Classic Engineering Corp',
  description: 'Expert repair services for industrial equipment with quick turnaround times and quality guarantees. Emergency repairs, rebuilds, and performance restoration.',
  keywords: 'equipment repair, industrial repair, emergency repair, component rebuilding, Classic Engineering Corp',
  openGraph: {
    title: 'Repair Services - Classic Engineering Corp',
    description: 'Expert repair services for industrial equipment with quick turnaround times and quality guarantees',
    url: 'http://www.classicengineeringcorp.com/services/repair',
  },
  alternates: {
    canonical: 'http://www.classicengineeringcorp.com/services/repair',
  },
}

const repairServices = [
  {
    name: 'Emergency Repair',
    description: '24/7 emergency repair services to minimize downtime and restore operations quickly',
    icon: ClockIcon,
    features: [
      '24/7 emergency response',
      'On-site repair capabilities',
      'Mobile service units',
      'Emergency parts inventory',
      'Rapid diagnostics',
      'Temporary solutions'
    ],
    response: '< 4 hours',
    coverage: 'Nationwide'
  },
  {
    name: 'Component Rebuilding',
    description: 'Complete rebuilding of worn components to like-new condition with warranty',
    icon: CogIcon,
    features: [
      'Complete disassembly',
      'Precision machining',
      'New wear parts',
      'Quality testing',
      'Performance validation',
      'Rebuild warranty'
    ],
    response: '5-10 days',
    coverage: 'Workshop service'
  },
  {
    name: 'On-Site Repair',
    description: 'Professional repairs performed at your facility to minimize equipment downtime',
    icon: WrenchIcon,
    features: [
      'Mobile repair teams',
      'Portable equipment',
      'On-site machining',
      'Field welding',
      'Alignment services',
      'Performance testing'
    ],
    response: 'Same day',
    coverage: 'Regional coverage'
  }
]

const repairCapabilities = [
  {
    category: 'Mechanical Repairs',
    services: [
      'Bearing replacement',
      'Shaft repair and replacement',
      'Coupling alignment',
      'Gear repair',
      'Seal replacement',
      'Balancing services'
    ]
  },
  {
    category: 'Electrical Repairs',
    services: [
      'Motor rewinding',
      'Control system repair',
      'Wiring and connections',
      'Sensor replacement',
      'Drive repair',
      'Electrical testing'
    ]
  },
  {
    category: 'Hydraulic/Pneumatic',
    services: [
      'Cylinder repair',
      'Valve service',
      'Pump rebuilding',
      'Hose replacement',
      'System flushing',
      'Pressure testing'
    ]
  },
  {
    category: 'Welding & Fabrication',
    services: [
      'Crack repair',
      'Structural welding',
      'Custom fabrication',
      'Hardfacing',
      'Machining services',
      'Surface restoration'
    ]
  }
]

const equipmentTypes = [
  'Electric Motors',
  'Gearboxes & Reducers',
  'Pumps & Compressors',
  'Conveyors',
  'Fans & Blowers',
  'Heat Exchangers',
  'Hydraulic Equipment',
  'Process Equipment',
  'Material Handling',
  'Custom Machinery'
]

const repairProcess = [
  {
    step: '01',
    title: 'Initial Assessment',
    description: 'Thorough inspection and diagnosis of equipment condition and failure modes'
  },
  {
    step: '02',
    title: 'Repair Planning',
    description: 'Development of repair strategy, timeline, and cost estimate'
  },
  {
    step: '03',
    title: 'Parts Procurement',
    description: 'Sourcing of required parts, materials, and components'
  },
  {
    step: '04',
    title: 'Repair Execution',
    description: 'Professional repair work using proper tools and techniques'
  },
  {
    step: '05',
    title: 'Quality Testing',
    description: 'Comprehensive testing to ensure proper operation and performance'
  },
  {
    step: '06',
    title: 'Documentation',
    description: 'Detailed repair documentation and recommendations for future maintenance'
  }
]

const repairStats = [
  { name: 'Average Repair Time', value: '3-5 days' },
  { name: 'Emergency Response', value: '< 4 hours' },
  { name: 'Success Rate', value: '98%' },
  { name: 'Warranty Period', value: '12 months' }
]

export default function RepairPage() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Repair Services",
            "description": "Expert repair services for industrial equipment with quick turnaround times and quality guarantees.",
            "provider": {
              "@type": "Organization",
              "name": "Classic Engineering Corp"
            },
            "serviceType": "Industrial Equipment Repair",
            "areaServed": "Worldwide",
            "offers": {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Emergency and Scheduled Equipment Repair Services"
              }
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
              <Link href="/services" className="text-gray-500 hover:text-corporate-blue">
                Services
              </Link>
            </li>
            <li>
              <span className="text-gray-500">/</span>
            </li>
            <li>
              <span className="text-corporate-blue font-medium">Repair Services</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-corporate-blue text-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-6">
            <Link
              href="/services"
              className="inline-flex items-center text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to Services
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <CogIcon className="h-12 w-12 text-white" />
            <div>
              <h1 className="text-4xl font-bold">Repair Services</h1>
              <p className="text-xl text-white/90 mt-2">
                Expert repair services to restore equipment performance
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
                  Get Your Equipment Back to Peak Performance
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  When equipment fails, every minute counts. Our expert repair services combine 
                  rapid response with quality workmanship to restore your equipment to optimal 
                  performance quickly and reliably. From emergency repairs to complete rebuilds, 
                  we have the expertise and resources to handle any challenge.
                </p>
                <p className="text-lg text-gray-600">
                  Our certified technicians use state-of-the-art diagnostic equipment and proven 
                  repair techniques to identify root causes and implement lasting solutions that 
                  prevent future failures.
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Repair Performance</h3>
                <div className="grid grid-cols-2 gap-4">
                  {repairStats.map((stat) => (
                    <div key={stat.name} className="text-center">
                      <div className="text-2xl font-bold text-corporate-blue mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Repair Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Repair Service Types</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {repairServices.map((service) => (
                <div key={service.name} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <service.icon className="h-8 w-8 text-corporate-blue mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Service Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-900">Response Time:</span>
                      <span className="text-sm text-corporate-blue font-semibold">{service.response}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-900">Coverage:</span>
                      <span className="text-sm text-corporate-blue font-semibold">{service.coverage}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Repair Capabilities */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Repair Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {repairCapabilities.map((capability) => (
                <div key={capability.category} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{capability.category}</h3>
                  <ul className="space-y-2">
                    {capability.services.map((service) => (
                      <li key={service} className="flex items-start">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Equipment Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Equipment We Repair</h2>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {equipmentTypes.map((equipment) => (
                  <div key={equipment} className="flex items-center">
                    <CogIcon className="h-5 w-5 text-corporate-blue mr-2" />
                    <span className="text-gray-700">{equipment}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Repair Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Repair Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {repairProcess.map((process) => (
                <div key={process.step} className="relative">
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <div className="bg-corporate-blue text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mb-4">
                      {process.step}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{process.title}</h3>
                    <p className="text-gray-600">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Service */}
          <div className="mb-16">
            <div className="bg-red-50 border border-red-200 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <ClockIcon className="h-8 w-8 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-red-900">24/7 Emergency Repair Service</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-red-800 mb-4">
                    When equipment failure threatens your operations, our emergency repair team is ready 
                    to respond immediately. We maintain mobile service units and emergency parts inventory 
                    to get your equipment running as quickly as possible.
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Immediate response within 4 hours',
                      'Mobile repair units with full equipment',
                      'Emergency parts inventory',
                      'Experienced technicians on-call',
                      'Temporary solutions available'
                    ].map((item) => (
                      <li key={item} className="flex items-start">
                        <CheckCircleIcon className="h-4 w-4 text-red-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-red-800 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-100 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-red-900 mb-4">Emergency Contact</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-red-800 font-medium">Primary Hotline:</span>
                      <p className="text-red-900 font-bold text-lg">+91-9894081022</p>
                    </div>
                    <div>
                      <span className="text-red-800 font-medium">Secondary Hotline:</span>
                      <p className="text-red-900 font-bold text-lg">+91-9443340831</p>
                    </div>
                    <div>
                      <span className="text-red-800 font-medium">Email:</span>
                      <p className="text-red-900">info@classicengineeringcorp.com</p>
                    </div>
                    <div>
                      <span className="text-red-800 font-medium">Response Time:</span>
                      <p className="text-red-900 font-semibold">Less than 4 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-corporate-blue rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Need Equipment Repair Services?</h2>
            <p className="text-lg mb-6 text-white/90">
              Don't let equipment failures slow down your operations. Contact our repair experts for fast, reliable service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-corporate-blue px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                Request Repair Quote
              </Link>
              <Link
                href="/contact"
                className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors"
              >
                Emergency Repair Hotline
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 