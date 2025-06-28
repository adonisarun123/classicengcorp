'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRightIcon, CheckCircleIcon, UserGroupIcon, CogIcon, TrophyIcon } from '@heroicons/react/24/outline'
import { 
  FaTrophy, 
  FaLightbulb, 
  FaUsers, 
  FaShieldAlt, 
  FaAward,
  FaIndustry,
  FaCheck,
  FaCalendarAlt
} from 'react-icons/fa'

const values = [
  {
    name: 'Quality Excellence',
    description: 'We maintain the highest standards in product quality and service delivery, ensuring customer satisfaction in every interaction.',
    icon: FaTrophy,
    color: 'from-yellow-400 to-orange-500'
  },
  {
    name: 'Innovation',
    description: 'Continuously improving our products and processes through advanced engineering and cutting-edge technology.',
    icon: FaLightbulb,
    color: 'from-blue-400 to-purple-500'
  },
  {
    name: 'Customer Focus',
    description: 'Understanding and exceeding customer expectations through personalized solutions and exceptional support.',
    icon: FaUsers,
    color: 'from-green-400 to-blue-500'
  },
]

const certifications = [
  { name: 'ISO 9001:2015 Quality Management', icon: FaAward },
  { name: 'ISO 14001 Environmental Management', icon: FaShieldAlt },
  { name: 'OSHA Safety Compliance', icon: FaShieldAlt },
  { name: 'CE Marking Certification', icon: FaCheck },
  { name: 'UL Listed Products', icon: FaAward },
  { name: 'API Certified Equipment', icon: FaIndustry }
]

const milestones = [
  { year: '1995', event: 'Company founded with focus on industrial gearboxes', color: 'from-blue-500 to-purple-600' },
  { year: '2000', event: 'Expanded product line to include electric motors', color: 'from-green-500 to-blue-600' },
  { year: '2005', event: 'Achieved ISO 9001 certification', color: 'from-purple-500 to-pink-600' },
  { year: '2010', event: 'Added industrial pumps to product portfolio', color: 'from-orange-500 to-red-600' },
  { year: '2015', event: 'Launched custom engineering solutions division', color: 'from-cyan-500 to-blue-600' },
  { year: '2020', event: 'Implemented digital transformation initiatives', color: 'from-indigo-500 to-purple-600' },
  { year: '2023', event: 'Celebrated serving 10,000+ customers worldwide', color: 'from-pink-500 to-rose-600' },
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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-corporate-blue/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-corporate-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Hero section */}
      <section className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-3xl blur-xl"></div>
            <div className="relative backdrop-blur-sm bg-white/20 border border-white/30 rounded-3xl p-8 md:p-12">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
                About <span className="bg-gradient-to-r from-corporate-blue to-purple-600 bg-clip-text text-transparent">Classic Engineering</span> Corp
              </h1>
              <p className="text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto">
                For over 25 years, we've been delivering innovative industrial engineering solutions 
                that power manufacturing operations worldwide.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="flex mx-auto max-w-7xl px-6 py-4" aria-label="Breadcrumb">
        <div className="backdrop-blur-sm bg-white/20 border border-white/30 rounded-2xl px-6 py-3">
          <ol className="flex items-center space-x-4">
            <li>
              <Link href="/" className="text-gray-600 hover:text-corporate-blue transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <ArrowRightIcon className="h-4 w-4 text-gray-400 mx-2" />
                <span className="text-gray-900 font-medium">About Us</span>
              </div>
            </li>
          </ol>
        </div>
      </nav>

      {/* Company overview & Values */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl lg:mx-0 mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
            Leading Industrial Engineering Solutions
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Classic Engineering Corp has been at the forefront of industrial engineering innovation since 1995. 
            We specialize in providing high-quality motors, gearboxes, pumps, and custom engineering solutions 
            to manufacturers and industrial facilities worldwide.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.name}
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-white/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative backdrop-blur-sm bg-white/20 border border-white/30 rounded-3xl p-8 hover:bg-white/30 transition-all duration-500 transform hover:scale-105">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} mb-6`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.name}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-white/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative backdrop-blur-sm bg-white/20 border border-white/30 rounded-3xl p-8 hover:bg-white/30 transition-all duration-500">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 mb-6">
                    <FaLightbulb className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Our Mission</h2>
                  <p className="text-lg leading-relaxed text-gray-700">
                    To provide innovative, reliable, and cost-effective industrial engineering solutions 
                    that enhance operational efficiency and productivity for our customers worldwide. 
                    We are committed to delivering exceptional quality products and services that exceed 
                    expectations and build lasting partnerships.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-white/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative backdrop-blur-sm bg-white/20 border border-white/30 rounded-3xl p-8 hover:bg-white/30 transition-all duration-500">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-blue-600 mb-6">
                    <FaTrophy className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Our Vision</h2>
                  <p className="text-lg leading-relaxed text-gray-700">
                    To be the global leader in industrial engineering solutions, recognized for our 
                    innovation, quality, and customer-centric approach. We envision a future where 
                    our technologies and expertise drive sustainable industrial progress and contribute 
                    to a more efficient and productive manufacturing landscape.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Company timeline */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl lg:mx-0 mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Our <span className="bg-gradient-to-r from-corporate-blue to-purple-600 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              From a small gearbox manufacturer to a comprehensive industrial solutions provider, 
              our journey reflects decades of innovation and growth.
            </p>
          </motion.div>

          <div className="mx-auto max-w-4xl">
            <div className="flow-root">
              <ul className="-mb-8">
                {milestones.map((milestone, milestoneIdx) => (
                  <motion.li
                    key={milestone.year}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: milestoneIdx * 0.1 }}
                  >
                    <div className="relative pb-8">
                      {milestoneIdx !== milestones.length - 1 ? (
                        <span className="absolute left-6 top-6 -ml-px h-full w-0.5 bg-gradient-to-b from-corporate-blue to-purple-500" aria-hidden="true" />
                      ) : null}
                      <div className="relative flex items-start space-x-6">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-r ${milestone.color} flex items-center justify-center shadow-lg`}>
                          <FaCalendarAlt className="h-6 w-6 text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="backdrop-blur-sm bg-white/20 border border-white/30 rounded-2xl p-6 hover:bg-white/30 transition-all duration-300">
                            <div className="flex items-center justify-between">
                              <span className="text-2xl font-bold text-corporate-blue">{milestone.year}</span>
                            </div>
                            <p className="text-gray-700 mt-2 leading-relaxed">{milestone.event}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl lg:mx-0 mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Certifications & <span className="bg-gradient-to-r from-corporate-blue to-purple-600 bg-clip-text text-transparent">Standards</span>
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Our commitment to quality is demonstrated through our adherence to international 
              standards and certifications.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {certifications.map((certification, index) => (
              <motion.div
                key={certification.name}
                variants={itemVariants}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-white/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative backdrop-blur-sm bg-white/30 border border-white/40 rounded-2xl p-6 hover:bg-white/40 transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <certification.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-900 leading-tight">{certification.name}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 sm:py-24">
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
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Partner with Industry Leaders
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
                Join thousands of satisfied customers who trust Classic Engineering Corp 
                for their industrial equipment needs. Let's discuss how we can support your operations.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  href="/contact"
                  className="group inline-flex items-center px-8 py-4 bg-white text-corporate-blue font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <span>Contact Us Today</span>
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


    </div>
  )
} 