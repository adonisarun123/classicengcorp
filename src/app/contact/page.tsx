'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ArrowRightIcon, 
} from '@heroicons/react/24/outline'
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaBuilding,
  FaHeadset,
  FaInfoCircle,
  FaPaperPlane
} from 'react-icons/fa'

const contactMethods = [
  {
    name: 'Sales Inquiries',
    description: 'Get quotes and product information',
    icon: FaBuilding,
    contact: 'info@classicengineeringcorp.com',
    phone: '+91-9894081022',
    color: 'from-blue-500 to-purple-600'
  },
  {
    name: 'Technical Support',
    description: 'Product support and troubleshooting',
    icon: FaHeadset,
    contact: 'info@classicengineeringcorp.com',
    phone: '+91-9443340831',
    color: 'from-green-500 to-blue-600'
  },
  {
    name: 'General Information',
    description: 'Company information and partnerships',
    icon: FaInfoCircle,
    contact: 'info@classicengineeringcorp.com',
    phone: '+91-9894081022',
    color: 'from-orange-500 to-red-600'
  },
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    subject: 'general',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry. We will get back to you within 24 hours.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-corporate-blue/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-corporate-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
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
                Contact <span className="bg-gradient-to-r from-corporate-blue to-purple-600 bg-clip-text text-transparent">Us</span>
              </h1>
              <p className="text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto">
                Get in touch with our team of experts. We&apos;re here to help you find the right 
                industrial solutions for your needs.
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
                <span className="text-gray-900 font-medium">Contact</span>
              </div>
            </li>
          </ol>
        </div>
      </nav>

      {/* Contact methods */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl lg:mx-0 mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
            Get in <span className="bg-gradient-to-r from-corporate-blue to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Choose the best way to reach us based on your needs. Our team is ready to assist you.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-3"
        >
          {contactMethods.map((method) => (
            <motion.div
              key={method.name}
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-white/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative backdrop-blur-sm bg-white/20 border border-white/30 rounded-3xl p-8 hover:bg-white/30 transition-all duration-500 transform hover:scale-105">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${method.color} mb-6`}>
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{method.name}</h3>
                <p className="text-gray-600 mb-6">{method.description}</p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <FaEnvelope className="h-4 w-4 text-gray-500 mr-3" />
                    <a href={`mailto:${method.contact}`} className="text-sm text-corporate-blue hover:text-blue-600 transition-colors duration-300">
                      {method.contact}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <FaPhone className="h-4 w-4 text-gray-500 mr-3" />
                    <a href={`tel:${method.phone}`} className="text-sm text-corporate-blue hover:text-blue-600 transition-colors duration-300">
                      {method.phone}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact form and info */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
              {/* Contact form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-white/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative backdrop-blur-sm bg-white/20 border border-white/30 rounded-3xl p-8 hover:bg-white/30 transition-all duration-500">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-corporate-blue to-purple-600 mb-6">
                    <FaPaperPlane className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">Send us a message</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="block w-full rounded-2xl border-0 bg-white/50 backdrop-blur-sm px-4 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-corporate-blue transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Last name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="block w-full rounded-2xl border-0 bg-white/50 backdrop-blur-sm px-4 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-corporate-blue transition-all duration-300"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full rounded-2xl border-0 bg-white/50 backdrop-blur-sm px-4 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-corporate-blue transition-all duration-300"
                      />
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          id="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="block w-full rounded-2xl border-0 bg-white/50 backdrop-blur-sm px-4 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-corporate-blue transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="block w-full rounded-2xl border-0 bg-white/50 backdrop-blur-sm px-4 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-corporate-blue transition-all duration-300"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <select
                        name="subject"
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="block w-full rounded-2xl border-0 bg-white/50 backdrop-blur-sm px-4 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-corporate-blue transition-all duration-300"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="sales">Sales Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership Opportunity</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows={6}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="block w-full rounded-2xl border-0 bg-white/50 backdrop-blur-sm px-4 py-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-corporate-blue resize-none transition-all duration-300"
                        placeholder="Tell us about your project or requirements..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="group w-full flex justify-center items-center px-6 py-4 bg-gradient-to-r from-corporate-blue to-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      <span>Send Message</span>
                      <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </form>
                </div>
              </motion.div>

              {/* Company info */}
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
                    <FaBuilding className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">Company Information</h2>
                  <div className="space-y-8">
                    <div className="backdrop-blur-sm bg-white/30 border border-white/40 rounded-2xl p-6">
                      <h3 className="text-lg font-semibold text-gray-900 flex items-center mb-4">
                        <FaMapMarkerAlt className="h-5 w-5 text-corporate-blue mr-3" />
                        Address
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        No 195/1, Krishnagiri Bypass Road<br />
                        Near Thirumala Lodge<br />
                        Hosur, Tamil Nadu 635109<br />
                        India
                      </p>
                    </div>
                    <div className="backdrop-blur-sm bg-white/30 border border-white/40 rounded-2xl p-6">
                      <h3 className="text-lg font-semibold text-gray-900 flex items-center mb-4">
                        <FaClock className="h-5 w-5 text-corporate-blue mr-3" />
                        Business Hours
                      </h3>
                      <div className="text-gray-700 space-y-1">
                        <p>Monday - Saturday: 09:00 AM - 08:00 PM</p>
                        <p>Sunday: Closed</p>
                        <p className="mt-3 text-sm font-medium text-corporate-blue">Emergency support available on request</p>
                      </div>
                    </div>
                    <div className="backdrop-blur-sm bg-white/30 border border-white/40 rounded-2xl p-6">
                      <h3 className="text-lg font-semibold text-gray-900 flex items-center mb-4">
                        <FaPhone className="h-5 w-5 text-corporate-blue mr-3" />
                        Quick Contact
                      </h3>
                      <div className="space-y-3">
                        <p className="text-gray-700">
                          Primary: <a href="tel:+91-9894081022" className="text-corporate-blue hover:text-blue-600 font-medium transition-colors duration-300">+91-9894081022</a>
                        </p>
                        <p className="text-gray-700">
                          Secondary: <a href="tel:+91-9443340831" className="text-corporate-blue hover:text-blue-600 font-medium transition-colors duration-300">+91-9443340831</a>
                        </p>
                        <p className="text-gray-700">
                          Email: <a href="mailto:info@classicengineeringcorp.com" className="text-corporate-blue hover:text-blue-600 font-medium transition-colors duration-300">info@classicengineeringcorp.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
} 