import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRightIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Terms of Service - Classic Engineering Corp',
  description: 'Terms and conditions for using Classic Engineering Corp services. Legal terms, warranties, and service agreements for industrial engineering solutions.',
  keywords: 'terms of service, terms and conditions, legal, warranty, service agreement, Classic Engineering Corp',
  openGraph: {
    title: 'Terms of Service - Classic Engineering Corp',
    description: 'Terms and conditions for Classic Engineering Corp services and website usage.',
    url: 'http://www.classicengineeringcorp.com/terms',
  },
  alternates: {
    canonical: 'http://www.classicengineeringcorp.com/terms',
  },
  robots: 'index, follow',
}

export default function TermsPage() {
  const lastUpdated = "June 28, 2025"

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms of Service",
            "description": "Terms of Service for Classic Engineering Corp",
            "url": "http://www.classicengineeringcorp.com/terms",
            "mainEntity": {
              "@type": "Organization",
              "name": "Classic Engineering Corp"
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
                  "name": "Terms of Service",
                  "item": "http://www.classicengineeringcorp.com/terms"
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
              <ArrowRightIcon className="h-4 w-4 text-gray-400" />
            </li>
            <li>
              <span className="text-corporate-blue font-medium">Terms of Service</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-corporate-blue text-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-6">
            <DocumentTextIcon className="h-12 w-12 text-white" />
            <div>
              <h1 className="text-4xl font-bold">Terms of Service</h1>
              <p className="text-xl text-white/90 mt-2">
                Legal terms and conditions for our services
              </p>
            </div>
          </div>
          <p className="text-white/80">
            Last updated: {lastUpdated}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
        <div className="prose prose-lg max-w-none">
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing and using the services of Classic Engineering Corp (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), 
              you accept and agree to be bound by the terms and provision of this agreement.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Services Description</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Classic Engineering Corp provides industrial engineering solutions including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Industrial motors and drive systems</li>
              <li>Gearboxes and transmission solutions</li>
              <li>Pumps and fluid handling equipment</li>
              <li>Custom engineering and design services</li>
              <li>Installation, maintenance, and repair services</li>
              <li>Technical consultation and support</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Use License</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Permission is granted to temporarily access and use our website for personal, 
              non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on our website</li>
              <li>Remove any copyright or proprietary notations from the materials</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Service Terms</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">4.1 Project Agreements</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              All engineering projects require a separate written agreement detailing:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Project scope and specifications</li>
              <li>Delivery timelines and milestones</li>
              <li>Payment terms and conditions</li>
              <li>Warranty and support provisions</li>
              <li>Intellectual property rights</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">4.2 Quality Standards</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              All products and services are provided in accordance with:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>ISO 9001:2015 Quality Management Standards</li>
              <li>Applicable industry standards (ANSI, API, etc.)</li>
              <li>Local and international safety regulations</li>
              <li>Environmental compliance requirements</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Payment Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Payment terms are specified in individual project agreements. General terms include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Payment schedules based on project milestones</li>
              <li>Late payment fees as specified in agreements</li>
              <li>Currency and payment method specifications</li>
              <li>Tax obligations and responsibilities</li>
              <li>Refund policies for specific circumstances</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Warranties and Disclaimers</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">6.1 Product Warranties</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We provide warranties on our products as follows:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Standard manufacturer warranties on all equipment</li>
              <li>Extended warranties available for custom solutions</li>
              <li>Defect coverage under normal operating conditions</li>
              <li>Exclusions for misuse, abuse, or normal wear</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">6.2 Service Disclaimers</h3>
            <p className="text-gray-700 leading-relaxed">
              While we strive for excellence, services are provided &quot;as is&quot; and we disclaim all 
              warranties, express or implied, including but not limited to implied warranties of 
              merchantability and fitness for a particular purpose, except as specifically stated in writing.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our liability is limited as follows:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Total liability shall not exceed the contract value</li>
              <li>No liability for consequential or indirect damages</li>
              <li>Exclusion of lost profits or business interruption claims</li>
              <li>Time limitations for claims as specified in agreements</li>
              <li>Insurance coverage where applicable</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Intellectual property rights are handled as follows:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Client retains rights to their proprietary information</li>
              <li>Classic Engineering Corp retains rights to our methodologies</li>
              <li>Custom designs may involve shared or licensed rights</li>
              <li>Confidentiality agreements protect sensitive information</li>
              <li>Third-party IP is respected and properly licensed</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Confidentiality</h2>
            <p className="text-gray-700 leading-relaxed">
              We maintain strict confidentiality of all client information, technical data, 
              and proprietary processes. Non-disclosure agreements are standard for all projects 
              involving sensitive or proprietary information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Force Majeure</h2>
            <p className="text-gray-700 leading-relaxed">
              We are not liable for delays or failure to perform due to circumstances beyond our control, 
              including but not limited to natural disasters, government actions, labor disputes, 
              material shortages, or other unforeseeable events.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These terms are governed by the laws of India and the State of Tamil Nadu. 
              Any disputes shall be resolved through arbitration in Hosur, Tamil Nadu, 
              or courts of competent jurisdiction.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">12. Modifications</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to revise these terms at any time without notice. 
              By using our services, you agree to be bound by the current version of these terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">13. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For questions about these Terms of Service, contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="font-semibold text-gray-900 mb-2">Classic Engineering Corp</p>
              <p className="text-gray-700">No 195/1, Krishnagiri Bypass Road</p>
              <p className="text-gray-700">Near Thirumala Lodge</p>
              <p className="text-gray-700">Hosur, Tamil Nadu 635109, India</p>
              <p className="text-gray-700 mt-3">
                <strong>Email:</strong> <a href="mailto:info@classicengineeringcorp.com" className="text-corporate-blue hover:underline">info@classicengineeringcorp.com</a>
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> +91-9894081022, +91-9443340831
              </p>
            </div>
          </section>

        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-corporate-blue to-blue-600 rounded-3xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-blue-100 mb-6">
            Contact us to discuss your engineering requirements and project terms.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-corporate-blue font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <span>Get Started Today</span>
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
} 