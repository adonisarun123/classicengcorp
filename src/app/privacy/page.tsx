import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRightIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Privacy Policy - Classic Engineering Corp',
  description: 'Learn how Classic Engineering Corp collects, uses, and protects your personal information. Our commitment to your privacy and data security.',
  keywords: 'privacy policy, data protection, personal information, Classic Engineering Corp, privacy rights',
  openGraph: {
    title: 'Privacy Policy - Classic Engineering Corp',
    description: 'Learn how Classic Engineering Corp protects your personal information and privacy.',
    url: 'http://www.classicengineeringcorp.com/privacy',
  },
  alternates: {
    canonical: 'http://www.classicengineeringcorp.com/privacy',
  },
  robots: 'index, follow',
}

export default function PrivacyPage() {
  const lastUpdated = "June 28, 2025"

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy",
            "description": "Privacy Policy for Classic Engineering Corp",
            "url": "http://www.classicengineeringcorp.com/privacy",
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
                  "name": "Privacy Policy",
                  "item": "http://www.classicengineeringcorp.com/privacy"
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
              <span className="text-corporate-blue font-medium">Privacy Policy</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-corporate-blue text-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-6">
            <ShieldCheckIcon className="h-12 w-12 text-white" />
            <div>
              <h1 className="text-4xl font-bold">Privacy Policy</h1>
              <p className="text-xl text-white/90 mt-2">
                Your privacy and data protection are our priority
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Classic Engineering Corp (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you visit our website or use our services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using our website or services, you consent to the practices described in this Privacy Policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">2.1 Personal Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">We may collect the following personal information:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>Name and contact information (email, phone, address)</li>
              <li>Company name and job title</li>
              <li>Project requirements and specifications</li>
              <li>Communication preferences</li>
              <li>Payment and billing information</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">2.2 Technical Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">We automatically collect:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>IP address and browser information</li>
              <li>Website usage patterns and analytics</li>
              <li>Device information and preferences</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Provide and improve our engineering services</li>
              <li>Process inquiries and provide customer support</li>
              <li>Send technical updates and service notifications</li>
              <li>Analyze website usage and improve user experience</li>
              <li>Comply with legal obligations and industry standards</li>
              <li>Protect against fraud and unauthorized access</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Information Sharing</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information. We may share information only in these circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>With trusted service providers who assist our operations</li>
              <li>When required by law or legal proceedings</li>
              <li>To protect our rights and safety</li>
              <li>With your explicit consent</li>
              <li>In connection with business transfers (mergers, acquisitions)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to protect your information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>SSL encryption for data transmission</li>
              <li>Secure servers and database protection</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and employee training</li>
              <li>Industry-standard security protocols</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Cookies and Tracking</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our website uses cookies to enhance your experience. You can manage cookie preferences 
              through your browser settings. We use:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Essential cookies for website functionality</li>
              <li>Analytics cookies to improve our services</li>
              <li>Preference cookies to remember your settings</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Access and review your personal information</li>
              <li>Correct inaccurate or incomplete data</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Object to processing of your data</li>
              <li>Data portability where applicable</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We retain your information only as long as necessary for the purposes outlined in this policy, 
              to comply with legal obligations, resolve disputes, and enforce our agreements. 
              Project-related data may be retained for engineering and warranty purposes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">9. International Transfers</h2>
            <p className="text-gray-700 leading-relaxed">
              If we transfer your information internationally, we ensure appropriate safeguards are in place 
              to protect your data according to applicable data protection laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Updates to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy periodically. We will notify you of significant changes 
              through our website or direct communication. Your continued use of our services constitutes 
              acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For questions about this Privacy Policy or to exercise your rights, contact us:
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
          <h2 className="text-2xl font-bold mb-4">Questions About Our Privacy Policy?</h2>
          <p className="text-xl text-blue-100 mb-6">
            Our team is here to help clarify any privacy concerns you may have.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-corporate-blue font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <span>Contact Us</span>
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
} 