'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ArrowRightIcon, 
  PlayIcon
} from '@heroicons/react/24/outline'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { 
  FaCog, 
  FaBolt, 
  FaTools, 
  FaIndustry, 
  FaAward, 
  FaShieldAlt,
  FaChartLine,
  FaClock
} from 'react-icons/fa'

const products = [
  {
    name: 'Industrial Gearboxes',
    description: 'High-efficiency gearboxes for various industrial applications with superior durability and performance.',
    href: '/products/gearboxes',
    icon: FaCog,
    features: ['Heavy-duty construction', 'Precision engineering', 'Low maintenance'],
    image: 'bg-gradient-to-br from-blue-600 to-purple-600'
  },
  {
    name: 'Electric Motors',
    description: 'Reliable electric motors designed for continuous operation in demanding industrial environments.',
    href: '/products/motors',
    icon: FaBolt,
    features: ['Energy efficient', 'Variable speed control', 'Robust design'],
    image: 'bg-gradient-to-br from-green-600 to-blue-600'
  },
  {
    name: 'Industrial Pumps',
    description: 'Comprehensive range of pumps for fluid handling in industrial and commercial applications.',
    href: '/products/pumps',
    icon: FaTools,
    features: ['Corrosion resistant', 'High flow rates', 'Easy maintenance'],
    image: 'bg-gradient-to-br from-orange-600 to-red-600'
  },
  {
    name: 'Custom Solutions',
    description: 'Tailored engineering solutions to meet your specific industrial requirements and applications.',
    href: '/products/custom-solutions',
    icon: FaIndustry,
    features: ['Custom design', 'Expert consultation', 'Complete integration'],
    image: 'bg-gradient-to-br from-purple-600 to-pink-600'
  },
]

const services = [
  {
    name: 'Maintenance Services',
    description: 'Preventive and predictive maintenance to maximize equipment lifespan and minimize downtime.',
    href: '/services/maintenance',
    icon: FaShieldAlt,
    color: 'from-green-400 to-blue-500'
  },
  {
    name: 'Repair Services',
    description: 'Expert repair services for all types of industrial equipment with quick turnaround times.',
    href: '/services/repair',
    icon: FaTools,
    color: 'from-orange-400 to-red-500'
  },
  {
    name: 'Installation Services',
    description: 'Professional installation and commissioning services for optimal equipment performance.',
    href: '/services/installation',
    icon: FaCog,
    color: 'from-purple-400 to-pink-500'
  },
]

const stats = [
  { name: 'Years of Experience', value: '25+', icon: FaClock, color: 'from-blue-400 to-cyan-500' },
  { name: 'Products Delivered', value: '10,000+', icon: FaChartLine, color: 'from-green-400 to-emerald-500' },
  { name: 'Industries Served', value: '50+', icon: FaIndustry, color: 'from-purple-400 to-violet-500' },
  { name: 'Customer Satisfaction', value: '99%', icon: FaAward, color: 'from-orange-400 to-red-500' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-corporate-blue/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-corporate-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Hero section */}
      <section className="relative isolate px-6 pt-14 lg:px-8 min-h-screen flex items-center">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-corporate-blue/5 to-purple-500/5 rounded-3xl blur-3xl"></div>
              <div className="relative backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6">
                  Industrial Engineering
                  <span className="block bg-gradient-to-r from-corporate-blue to-blue-600 bg-clip-text text-transparent">
                    Solutions for Tomorrow
                  </span>
                </h1>
                <p className="text-xl md:text-2xl leading-relaxed text-gray-700 max-w-4xl mx-auto mb-8">
                  Leading provider of industrial motors, gearboxes, pumps, and custom engineering solutions. 
                  Delivering quality, reliability, and innovation to power your operations.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Link
                    href="/products"
                    className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-corporate-blue to-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <span className="relative z-10">View Products</span>
                    <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center px-8 py-4 backdrop-blur-sm bg-white/20 border border-white/30 text-gray-900 font-semibold rounded-2xl hover:bg-white/30 transition-all duration-300"
                  >
                    <PlayIcon className="mr-2 h-5 w-5" />
                    Get Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, _index) => (
              <motion.div
                key={stat.name}
                variants={itemVariants}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-white/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative backdrop-blur-sm bg-white/30 border border-white/40 rounded-3xl p-8 text-center hover:bg-white/40 transition-all duration-300 transform hover:scale-105">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} mb-4`}>
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.name}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-corporate-blue to-purple-600 bg-clip-text text-transparent">Products</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of high-quality industrial equipment designed to meet the demanding requirements 
              of modern manufacturing and industrial operations.
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {products.map((product, _index) => (
              <motion.div
                key={product.name}
                variants={itemVariants}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-white/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative backdrop-blur-sm bg-white/20 border border-white/30 rounded-3xl p-8 hover:bg-white/30 transition-all duration-500 transform hover:scale-[1.02]">
                  <div className="flex items-start space-x-6">
                    <div className={`flex-shrink-0 w-20 h-20 ${product.image} rounded-2xl flex items-center justify-center`}>
                      <product.icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                      <p className="text-gray-600 mb-6">{product.description}</p>
                      <div className="space-y-3 mb-6">
                        {product.features.map((feature, _index) => (
                          <div key={feature} className="flex items-center">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Link
                        href={product.href}
                        className="inline-flex items-center text-corporate-blue font-semibold hover:text-blue-600 transition-colors duration-300 group"
                      >
                        Learn more
                        <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-corporate-blue to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional services to ensure optimal performance and longevity of your industrial equipment.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {services.map((service, _index) => (
              <motion.div
                key={service.name}
                variants={itemVariants}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-white/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative backdrop-blur-sm bg-white/20 border border-white/30 rounded-3xl p-8 text-center hover:bg-white/30 transition-all duration-500 transform hover:scale-105">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${service.color} mb-6`}>
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.name}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-corporate-blue font-semibold hover:text-blue-600 transition-colors duration-300 group"
                  >
                    Learn more
                    <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-corporate-blue/90 to-blue-600/90 rounded-3xl blur-xl"></div>
            <div className="relative backdrop-blur-sm bg-gradient-to-r from-corporate-blue/80 to-blue-600/80 border border-white/20 rounded-3xl p-12 text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Power Your Operations?
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
                Contact our team of experts to discuss your industrial equipment needs and discover how 
                Classic Engineering Corp can help optimize your operations.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  href="/contact"
                  className="group inline-flex items-center px-8 py-4 bg-white text-corporate-blue font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <span>Get Started Today</span>
                  <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="/products"
                  className="group inline-flex items-center px-8 py-4 backdrop-blur-sm bg-white/10 border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300"
                >
                  <span>View Our Products</span>
                  <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Classic Engineering Corp - Industrial Motors, Gearboxes & Pumps",
            "description": "Leading provider of industrial motors, gearboxes, pumps, and custom engineering solutions.",
            "url": "http://www.classicengineeringcorp.com/",
            "mainEntity": {
              "@type": "Organization",
              "name": "Classic Engineering Corp",
              "url": "http://www.classicengineeringcorp.com/",
              "description": "Leading provider of industrial motors, gearboxes, pumps, and custom engineering solutions."
            }
          })
        }}
      />
    </div>
  )
}
