import { Metadata } from 'next'
import Link from 'next/link'
import { BoltIcon, CheckCircleIcon, WrenchIcon, CogIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Installation Services - Classic Engineering Corp',
  description: 'Professional installation and commissioning services for optimal equipment performance and compliance. Expert installation teams and startup support.',
  keywords: 'equipment installation, commissioning services, startup support, industrial installation, Classic Engineering Corp',
  openGraph: {
    title: 'Installation Services - Classic Engineering Corp',
    description: 'Professional installation and commissioning services for optimal equipment performance and compliance',
    url: 'http://www.classicengineeringcorp.com/services/installation',
  },
  alternates: {
    canonical: 'http://www.classicengineeringcorp.com/services/installation',
  },
}

const installationServices = [
  {
    name: 'Equipment Installation',
    description: 'Professional installation of industrial equipment with proper alignment and connections',
    icon: BoltIcon,
    features: [
      'Site preparation assessment',
      'Foundation verification',
      'Precision alignment',
      'Piping and electrical connections',
      'Safety system integration',
      'Initial testing'
    ],
    timeline: '1-5 days',
    coverage: 'On-site service'
  },
  {
    name: 'System Commissioning',
    description: 'Complete system commissioning to ensure optimal performance and compliance',
    icon: CogIcon,
    features: [
      'Performance testing',
      'Calibration services',
      'Control system setup',
      'Safety verification',
      'Documentation package',
      'Compliance certification'
    ],
    timeline: '3-10 days',
    coverage: 'Full system scope'
  },
  {
    name: 'Startup Support',
    description: 'Comprehensive startup support to ensure smooth operation from day one',
    icon: WrenchIcon,
    features: [
      'Initial startup supervision',
      'Operator training',
      'Performance optimization',
      'Troubleshooting support',
      'Documentation handover',
      'Post-startup follow-up'
    ],
    timeline: '2-7 days',
    coverage: 'Complete support'
  }
]

const installationCapabilities = [
  {
    category: 'Mechanical Installation',
    services: [
      'Foundation and mounting',
      'Shaft alignment',
      'Coupling installation',
      'Bearing and seal installation',
      'Vibration dampening',
      'Precision leveling'
    ]
  },
  {
    category: 'Electrical Installation',
    services: [
      'Motor connections',
      'Control panel wiring',
      'Sensor installation',
      'Drive configuration',
      'Safety system integration',
      'Testing and verification'
    ]
  },
  {
    category: 'Piping & Utilities',
    services: [
      'Process piping',
      'Utility connections',
      'Cooling system setup',
      'Lubrication systems',
      'Drainage installation',
      'Pressure testing'
    ]
  },
  {
    category: 'Commissioning',
    services: [
      'Performance testing',
      'Calibration services',
      'Safety verification',
      'Documentation review',
      'Training delivery',
      'Compliance certification'
    ]
  }
]

const installationTypes = [
  'New Equipment Installation',
  'Equipment Replacement',
  'System Upgrades',
  'Retrofit Projects',
  'Production Line Setup',
  'Process Equipment',
  'Control System Integration',
  'Safety System Installation',
  'Utility Equipment',
  'Custom Machinery'
]

const installationProcess = [
  {
    step: '01',
    title: 'Pre-Installation Planning',
    description: 'Site survey, planning, and preparation of installation procedures and safety protocols'
  },
  {
    step: '02',
    title: 'Site Preparation',
    description: 'Foundation verification, utility preparation, and staging of equipment and materials'
  },
  {
    step: '03',
    title: 'Equipment Installation',
    description: 'Professional installation with precision alignment and proper connections'
  },
  {
    step: '04',
    title: 'System Integration',
    description: 'Integration with existing systems, control connections, and safety systems'
  },
  {
    step: '05',
    title: 'Testing & Commissioning',
    description: 'Comprehensive testing, calibration, and performance verification'
  },
  {
    step: '06',
    title: 'Training & Handover',
    description: 'Operator training, documentation handover, and ongoing support setup'
  }
]

const safetyStandards = [
  'OSHA Compliance',
  'NFPA Standards',
  'IEEE Standards',
  'API Guidelines',
  'ANSI Requirements',
  'Local Codes'
]

const installationStats = [
  { name: 'Installation Success Rate', value: '99.5%' },
  { name: 'On-Time Completion', value: '98%' },
  { name: 'Safety Record', value: 'Zero incidents' },
  { name: 'Customer Satisfaction', value: '99%' }
]

export default function InstallationPage() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Installation Services",
            "description": "Professional installation and commissioning services for optimal equipment performance and compliance.",
            "provider": {
              "@type": "Organization",
              "name": "Classic Engineering Corp"
            },
            "serviceType": "Industrial Equipment Installation",
            "areaServed": "Worldwide"
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
              <span className="text-corporate-blue font-medium">Installation Services</span>
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
            <BoltIcon className="h-12 w-12 text-white" />
            <div>
              <h1 className="text-4xl font-bold">Installation Services</h1>
              <p className="text-xl text-white/90 mt-2">
                Professional installation for optimal equipment performance
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
                  Expert Installation for Maximum Performance
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Proper installation is critical to equipment performance, reliability, and longevity. 
                  Our experienced installation teams ensure your equipment is installed correctly the 
                  first time, with precision alignment, proper connections, and comprehensive testing 
                  to guarantee optimal performance from day one.
                </p>
                <p className="text-lg text-gray-600">
                  From single equipment installations to complete production line setups, we provide 
                  end-to-end installation services including planning, installation, commissioning, 
                  training, and ongoing support.
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Installation Performance</h3>
                <div className="grid grid-cols-2 gap-4">
                  {installationStats.map((stat) => (
                    <div key={stat.name} className="text-center">
                      <div className="text-2xl font-bold text-corporate-blue mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Installation Services */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Installation Service Types</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {installationServices.map((service) => (
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
                      <span className="text-sm font-medium text-gray-900">Timeline:</span>
                      <span className="text-sm text-corporate-blue font-semibold">{service.timeline}</span>
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

          {/* Installation Capabilities */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Installation Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {installationCapabilities.map((capability) => (
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

          {/* Installation Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Installation Types</h2>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {installationTypes.map((type) => (
                  <div key={type} className="flex items-center">
                    <BoltIcon className="h-5 w-5 text-corporate-blue mr-2" />
                    <span className="text-gray-700">{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Installation Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Installation Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {installationProcess.map((process) => (
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

          {/* Safety & Compliance */}
          <div className="mb-16">
            <div className="bg-green-50 border border-green-200 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <CheckCircleIcon className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-green-900">Safety & Compliance</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-green-800 mb-4">
                    Safety is our top priority in every installation project. Our certified technicians 
                    follow strict safety protocols and ensure all installations meet or exceed industry 
                    standards and local regulations.
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Certified installation technicians',
                      'Comprehensive safety protocols',
                      'OSHA compliance training',
                      'Risk assessment procedures',
                      'Zero-incident safety record'
                    ].map((item) => (
                      <li key={item} className="flex items-start">
                        <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-green-800 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-green-900 mb-4">Compliance Standards</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {safetyStandards.map((standard) => (
                      <div key={standard} className="bg-green-100 rounded-lg p-3 text-center">
                        <span className="text-green-800 font-medium text-sm">{standard}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Training & Support */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Training & Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Operator Training</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Equipment operation procedures</li>
                  <li>• Safety protocols and guidelines</li>
                  <li>• Routine maintenance tasks</li>
                  <li>• Troubleshooting basics</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Documentation</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Installation drawings</li>
                  <li>• Operation manuals</li>
                  <li>• Maintenance schedules</li>
                  <li>• Parts lists and specifications</li>
                  <li>• Warranty information</li>
                </ul>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Ongoing Support</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Post-installation follow-up</li>
                  <li>• Technical support hotline</li>
                  <li>• Remote monitoring options</li>
                  <li>• Maintenance service plans</li>
                  <li>• Upgrade recommendations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-corporate-blue rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Ready for Professional Installation?</h2>
            <p className="text-lg mb-6 text-white/90">
              Ensure your equipment performs at its best from day one with our expert installation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-corporate-blue px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                Request Installation Quote
              </Link>
              <Link
                href="/contact"
                className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors"
              >
                Schedule Site Survey
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 