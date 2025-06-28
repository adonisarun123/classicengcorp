import { Metadata } from 'next'
import Link from 'next/link'
import { CogIcon, BoltIcon, WrenchIcon, BuildingOfficeIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Industrial Products - Gearboxes, Motors, Pumps | Classic Engineering Corp',
  description: 'Comprehensive range of industrial products including gearboxes, motors, pumps, and custom solutions. High-quality equipment for manufacturing and industrial applications.',
  keywords: 'industrial gearboxes, electric motors, industrial pumps, custom engineering solutions, manufacturing equipment',
  openGraph: {
    title: 'Industrial Products - Gearboxes, Motors, Pumps | Classic Engineering Corp',
    description: 'Comprehensive range of industrial products including gearboxes, motors, pumps, and custom solutions.',
    url: 'http://www.classicengineeringcorp.com/products',
  },
}

const products = [
  {
    name: 'Industrial Gearboxes',
    description: 'High-efficiency gearboxes designed for demanding industrial applications. Our range includes helical, worm, and planetary gearboxes with various mounting configurations.',
    href: '/products/gearboxes',
    icon: CogIcon,
    features: [
      'Heavy-duty construction for long service life',
      'Precision engineering for smooth operation',
      'Low maintenance requirements',
      'Multiple mounting options available',
      'Custom ratios and configurations',
      'Oil leak-proof design'
    ],
    applications: ['Conveyors', 'Mixers', 'Crushers', 'Pumps', 'Fans', 'Compressors'],
    image: '/api/placeholder/400/300'
  },
  {
    name: 'Electric Motors',
    description: 'Reliable electric motors engineered for continuous operation in demanding industrial environments. Available in various power ratings and configurations.',
    href: '/products/motors',
    icon: BoltIcon,
    features: [
      'Energy-efficient design',
      'Variable speed control options',
      'Robust construction',
      'High starting torque',
      'Low noise operation',
      'TEFC and ODP enclosures'
    ],
    applications: ['Pumps', 'Fans', 'Compressors', 'Conveyors', 'Machine Tools', 'Material Handling'],
    image: '/api/placeholder/400/300'
  },
  {
    name: 'Industrial Pumps',
    description: 'Comprehensive range of pumps for fluid handling in industrial and commercial applications. Centrifugal, positive displacement, and specialty pumps available.',
    href: '/products/pumps',
    icon: WrenchIcon,
    features: [
      'Corrosion-resistant materials',
      'High flow rates and pressure capabilities',
      'Easy maintenance and serviceability',
      'Self-priming options available',
      'Multiple impeller designs',
      'Seal-less magnetic drive options'
    ],
    applications: ['Water Treatment', 'Chemical Processing', 'Oil & Gas', 'Food & Beverage', 'HVAC', 'Agriculture'],
    image: '/api/placeholder/400/300'
  },
  {
    name: 'Custom Solutions',
    description: 'Tailored engineering solutions designed to meet your specific industrial requirements. Our team works with you to develop custom equipment and systems.',
    href: '/products/custom-solutions',
    icon: BuildingOfficeIcon,
    features: [
      'Custom design and engineering',
      'Expert consultation services',
      'Complete system integration',
      'Prototype development',
      'Testing and validation',
      'Ongoing technical support'
    ],
    applications: ['Automation Systems', 'Material Handling', 'Process Equipment', 'Specialty Machinery', 'Control Systems', 'Test Equipment'],
    image: '/api/placeholder/400/300'
  },
]

export default function ProductsPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Industrial Products
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive range of high-quality industrial equipment designed to meet the demanding 
              requirements of modern manufacturing and industrial operations.
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
            <div className="flex items-center">
              <ArrowRightIcon className="h-4 w-4 text-gray-400 mx-2" />
              <span className="text-gray-900 font-medium">Products</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Products grid */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-1">
          {products.map((product, index) => (
            <div key={product.name} className={`lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center ${index % 2 === 1 ? 'lg:grid-flow-row-dense' : ''}`}>
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center mb-4">
                  <product.icon className="h-8 w-8 text-corporate-blue mr-3" />
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                    {product.name}
                  </h2>
                </div>
                <p className="mt-4 text-lg text-gray-600">
                  {product.description}
                </p>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <span className="h-2 w-2 bg-corporate-blue rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Applications</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((application) => (
                      <span
                        key={application}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-corporate-blue/10 text-corporate-blue"
                      >
                        {application}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href={product.href}
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-corporate-blue hover:bg-corporate-blue/90 transition-colors duration-200"
                  >
                    Learn More
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
              
              <div className={`mt-8 lg:mt-0 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
                  <div className="flex items-center justify-center h-64 bg-gradient-to-br from-gray-100 to-gray-200">
                    <product.icon className="h-24 w-24 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-corporate-blue">
        <div className="px-6 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Need Help Choosing the Right Product?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Our technical experts are ready to help you select the perfect equipment for your application. 
              Contact us for personalized recommendations and quotes.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="group inline-flex items-center px-8 py-4 bg-white text-corporate-blue font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <span>Contact Our Experts</span>
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="/downloads"
                className="text-sm font-semibold leading-6 text-white hover:text-gray-300 transition-colors duration-200"
              >
                Download Catalogs <span aria-hidden="true">→</span>
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
            "@type": "CollectionPage",
            "name": "Industrial Products",
            "description": "Comprehensive range of industrial products including gearboxes, motors, pumps, and custom solutions.",
            "url": "http://www.classicengineeringcorp.com/products",
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
                }
              ]
            },
            "mainEntity": products.map(product => ({
              "@type": "Product",
              "name": product.name,
              "description": product.description,
              "url": `http://www.classicengineeringcorp.com${product.href}`,
              "brand": {
                "@type": "Brand",
                "name": "Classic Engineering Corp"
              },
              "manufacturer": {
                "@type": "Organization",
                "name": "Classic Engineering Corp"
              }
            }))
          })
        }}
      />
    </div>
  )
} 