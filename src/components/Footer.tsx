import Link from 'next/link'
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

const footerNavigation = {
  products: [
    { name: 'Gearboxes', href: '/products/gearboxes' },
    { name: 'Motors', href: '/products/motors' },
    { name: 'Pumps', href: '/products/pumps' },
    { name: 'Custom Solutions', href: '/products/custom-solutions' },
  ],
  services: [
    { name: 'Maintenance', href: '/services/maintenance' },
    { name: 'Repair', href: '/services/repair' },
    { name: 'Installation', href: '/services/installation' },
  ],
  company: [
    { name: 'About Us', href: '/about-us' },
    { name: 'Industries', href: '/industries' },
    { name: 'Contact', href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-corporate-blue text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold">Classic Engineering Corp</h3>
              <p className="mt-4 text-sm leading-6 text-gray-300">
                Leading provider of industrial motors, gearboxes, pumps, and engineering solutions. 
                Delivering quality and reliability for over decades.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-gray-300" />
                <div className="text-sm">
                  <div>+91-9894081022</div>
                  <div>+91-9443340831</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-gray-300" />
                <span className="text-sm">info@classicengineeringcorp.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPinIcon className="h-5 w-5 text-gray-300" />
                <span className="text-sm">No 195/1, Krishnagiri Bypass Road, Near Thirumala Lodge, Hosur, Tamil Nadu 635109</span>
              </div>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Products</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.products.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.services.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link
                      href="/privacy"
                      className="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      Support
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">Business Hours</h3>
            <p className="mt-2 text-sm text-gray-300">Monday - Saturday: 09:00 AM - 08:00 PM</p>
            <p className="text-sm text-gray-300">Sunday: Closed</p>
          </div>
          <div className="mt-8 lg:mt-0">
            <p className="text-xs leading-5 text-gray-400">
              &copy; {new Date().getFullYear()} Classic Engineering Corp. All rights reserved.
            </p>
            <div className="mt-2 flex space-x-6">
              <Link href="/privacy" className="text-xs text-gray-400 hover:text-gray-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-gray-400 hover:text-gray-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-6 lg:mt-0">
          <h3 className="text-lg font-semibold text-white mb-6">Ready to Get Started?</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center px-6 py-3 bg-white text-corporate-blue font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span>Get Quote</span>
              <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 