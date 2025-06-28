import { Metadata } from 'next'
import Link from 'next/link'
import { WrenchIcon, ClockIcon, ChartBarIcon, CheckCircleIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Maintenance Services - Classic Engineering Corp',
  description: 'Preventive and predictive maintenance programs to maximize equipment lifespan and minimize downtime. Expert maintenance planning and condition monitoring.',
  keywords: 'preventive maintenance, predictive maintenance, equipment maintenance, condition monitoring, Classic Engineering Corp',
  openGraph: {
    title: 'Maintenance Services - Classic Engineering Corp',
    description: 'Preventive and predictive maintenance programs to maximize equipment lifespan and minimize downtime',
    url: 'http://www.classicengineeringcorp.com/services/maintenance',
  },
  alternates: {
    canonical: 'http://www.classicengineeringcorp.com/services/maintenance',
  },
}

const maintenancePrograms = [
  {
    name: 'Preventive Maintenance',
    description: 'Scheduled maintenance based on time, usage, or operating conditions',
    icon: ClockIcon,
    features: [
      'Scheduled inspections',
      'Lubrication programs',
      'Filter replacements',
      'Belt and coupling checks',
      'Calibration services',
      'Performance monitoring'
    ],
    benefits: [
      'Reduced unexpected failures',
      'Extended equipment life',
      'Improved reliability',
      'Lower maintenance costs'
    ]
  },
  {
    name: 'Predictive Maintenance',
    description: 'Advanced monitoring techniques to predict equipment failures before they occur',
    icon: ChartBarIcon,
    features: [
      'Vibration analysis',
      'Thermal imaging',
      'Oil analysis',
      'Motor current analysis',
      'Ultrasonic testing',
      'Trending and analysis'
    ],
    benefits: [
      'Early fault detection',
      'Optimized maintenance timing',
      'Reduced downtime',
      'Cost savings'
    ]
  },
  {
    name: 'Condition Monitoring',
    description: 'Continuous monitoring of equipment health and performance parameters',
    icon: WrenchIcon,
    features: [
      'Real-time monitoring',
      'Automated alerts',
      'Data logging',
      'Trend analysis',
      'Performance dashboards',
      'Remote monitoring'
    ],
    benefits: [
      '24/7 equipment oversight',
      'Immediate issue detection',
      'Data-driven decisions',
      'Improved efficiency'
    ]
  }
]

const monitoringTechniques = [
  {
    name: 'Vibration Analysis',
    description: 'Detects imbalance, misalignment, bearing defects, and other mechanical issues',
    applications: ['Rotating equipment', 'Motors', 'Gearboxes', 'Pumps', 'Fans']
  },
  {
    name: 'Thermal Imaging',
    description: 'Identifies hot spots, overheating, and thermal irregularities',
    applications: ['Electrical panels', 'Motors', 'Bearings', 'Connections', 'Process equipment']
  },
  {
    name: 'Oil Analysis',
    description: 'Monitors lubricant condition and identifies wear particles',
    applications: ['Gearboxes', 'Hydraulic systems', 'Engines', 'Compressors', 'Transformers']
  },
  {
    name: 'Ultrasonic Testing',
    description: 'Detects leaks, electrical arcing, and mechanical defects',
    applications: ['Valves', 'Steam traps', 'Electrical equipment', 'Compressed air systems', 'Bearings']
  }
]

const maintenanceStats = [
  { name: 'Downtime Reduction', value: 'Up to 75%' },
  { name: 'Equipment Life Extension', value: '20-50%' },
  { name: 'Maintenance Cost Savings', value: '10-40%' },
  { name: 'Response Time', value: '< 4 hours' }
]

const servicePackages = [
  {
    name: 'Basic Maintenance',
    description: 'Essential preventive maintenance for standard equipment',
    features: [
      'Quarterly inspections',
      'Basic lubrication',
      'Visual assessments',
      'Maintenance reports',
      'Parts recommendations'
    ],
    ideal: 'Small to medium operations'
  },
  {
    name: 'Advanced Maintenance',
    description: 'Comprehensive program with predictive maintenance techniques',
    features: [
      'Monthly inspections',
      'Vibration analysis',
      'Thermal imaging',
      'Oil analysis',
      'Detailed reporting',
      'Emergency support'
    ],
    ideal: 'Medium to large operations'
  },
  {
    name: 'Premium Maintenance',
    description: 'Complete maintenance management with continuous monitoring',
    features: [
      'Continuous monitoring',
      'Real-time alerts',
      'All testing methods',
      'Maintenance planning',
      'Spare parts management',
      '24/7 support'
    ],
    ideal: 'Critical operations'
  }
]

export default function MaintenancePage() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Maintenance Services",
            "description": "Preventive and predictive maintenance programs to maximize equipment lifespan and minimize downtime.",
            "provider": {
              "@type": "Organization",
              "name": "Classic Engineering Corp"
            },
            "serviceType": "Industrial Equipment Maintenance",
            "areaServed": "Worldwide",
            "offers": {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Preventive and Predictive Maintenance Programs"
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
              <span className="text-corporate-blue font-medium">Maintenance Services</span>
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
            <WrenchIcon className="h-12 w-12 text-white" />
            <div>
              <h1 className="text-4xl font-bold">Maintenance Services</h1>
              <p className="text-xl text-white/90 mt-2">
                Proactive maintenance programs to maximize equipment reliability
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
                  Maximize Equipment Performance with Strategic Maintenance
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our comprehensive maintenance programs combine preventive and predictive 
                  maintenance strategies to ensure your industrial equipment operates at peak 
                  performance while minimizing unexpected failures and costly downtime.
                </p>
                <p className="text-lg text-gray-600">
                  Using advanced monitoring technologies and proven maintenance methodologies, 
                  we help you transition from reactive to proactive maintenance, resulting in 
                  significant cost savings and improved operational efficiency.
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Maintenance Benefits</h3>
                <div className="grid grid-cols-2 gap-4">
                  {maintenanceStats.map((stat) => (
                    <div key={stat.name} className="text-center">
                      <div className="text-2xl font-bold text-corporate-blue mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Maintenance Programs */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Maintenance Programs</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {maintenancePrograms.map((program) => (
                <div key={program.name} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <program.icon className="h-8 w-8 text-corporate-blue mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{program.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Features</h4>
                    <ul className="space-y-2">
                      {program.features.map((feature) => (
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
                      {program.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start">
                          <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Monitoring Techniques */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Advanced Monitoring Techniques</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {monitoringTechniques.map((technique) => (
                <div key={technique.name} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{technique.name}</h3>
                  <p className="text-gray-600 mb-4">{technique.description}</p>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {technique.applications.map((app) => (
                        <span key={app} className="bg-corporate-blue/10 text-corporate-blue px-3 py-1 rounded-full text-sm">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Service Packages */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Maintenance Service Packages</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {servicePackages.map((pkg, index) => (
                <div key={pkg.name} className={`bg-white border-2 rounded-lg p-6 shadow-sm ${index === 1 ? 'border-corporate-blue' : 'border-gray-200'}`}>
                  {index === 1 && (
                    <div className="bg-corporate-blue text-white text-center py-2 px-4 rounded-lg text-sm font-medium mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-3">Includes:</h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Ideal for:</span> {pkg.ideal}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Flow */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Maintenance Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Assessment', desc: 'Evaluate current equipment condition and maintenance needs' },
                { step: '02', title: 'Planning', desc: 'Develop customized maintenance schedule and procedures' },
                { step: '03', title: 'Implementation', desc: 'Execute maintenance activities using proven techniques' },
                { step: '04', title: 'Monitoring', desc: 'Continuous monitoring and optimization of maintenance program' }
              ].map((process) => (
                <div key={process.step} className="text-center">
                  <div className="bg-corporate-blue text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h3>
                  <p className="text-gray-600 text-sm">{process.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-corporate-blue rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Optimize Your Maintenance Program?</h2>
            <p className="text-lg mb-6 text-white/90">
              Let our maintenance experts develop a customized program that reduces downtime and maximizes equipment life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-corporate-blue px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule Assessment
              </Link>
              <Link
                href="/contact"
                className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors"
              >
                Request Maintenance Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 