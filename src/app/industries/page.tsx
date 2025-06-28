'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ArrowRightIcon, 
  ChevronRightIcon
} from '@heroicons/react/24/outline'
import { 
  FaIndustry, 
  FaOilWell, 
  FaCarSide, 
  FaUtensils, 
  FaPlug, 
  FaWater,
  FaPills,
  FaRecycle,
  FaShip,
  FaHelmetSafety,
  FaLeaf,
  FaGears
} from 'react-icons/fa6'

const industries = [
  {
    name: 'Oil & Gas',
    description: 'Pumps, compressors, and drive systems for upstream, midstream, and downstream operations.',
    icon: FaOilWell,
    applications: ['Drilling Operations', 'Refinery Processes', 'Pipeline Systems', 'Offshore Platforms'],
    image: '/api/placeholder/400/300',
    color: 'from-amber-500 to-orange-600'
  },
  {
    name: 'Automotive',
    description: 'Precision motors and gearboxes for manufacturing assembly lines and automation systems.',
    icon: FaCarSide,
    applications: ['Assembly Lines', 'Paint Booths', 'Conveyor Systems', 'Robotic Arms'],
    image: '/api/placeholder/400/300',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    name: 'Food & Beverage',
    description: 'Hygienic equipment for food processing, packaging, and distribution systems.',
    icon: FaUtensils,
    applications: ['Processing Lines', 'Packaging Equipment', 'Mixing Systems', 'Conveyor Belts'],
    image: '/api/placeholder/400/300',
    color: 'from-green-500 to-emerald-600'
  },
  {
    name: 'Power Generation',
    description: 'Heavy-duty equipment for power plants, renewable energy, and electrical distribution.',
    icon: FaPlug,
    applications: ['Steam Turbines', 'Generator Sets', 'Cooling Systems', 'Fuel Handling'],
    image: '/api/placeholder/400/300',
    color: 'from-purple-500 to-indigo-600'
  },
  {
    name: 'Water Treatment',
    description: 'Reliable pumps and systems for water treatment, waste management, and utilities.',
    icon: FaWater,
    applications: ['Water Pumping', 'Filtration Systems', 'Aeration Equipment', 'Chemical Dosing'],
    image: '/api/placeholder/400/300',
    color: 'from-cyan-500 to-blue-600'
  },
  {
    name: 'Pharmaceutical',
    description: 'Clean room compatible equipment for pharmaceutical manufacturing and research.',
    icon: FaPills,
    applications: ['Clean Room Systems', 'Mixing Equipment', 'Packaging Lines', 'Quality Control'],
    image: '/api/placeholder/400/300',
    color: 'from-red-500 to-pink-600'
  },
  {
    name: 'Recycling',
    description: 'Durable systems for waste processing, material recovery, and environmental solutions.',
    icon: FaRecycle,
    applications: ['Sorting Systems', 'Shredding Equipment', 'Conveyor Systems', 'Compaction Units'],
    image: '/api/placeholder/400/300',
    color: 'from-emerald-500 to-green-600'
  },
  {
    name: 'Marine',
    description: 'Corrosion-resistant equipment for marine applications and offshore installations.',
    icon: FaShip,
    applications: ['Deck Machinery', 'Propulsion Systems', 'Cargo Handling', 'Ballast Systems'],
    image: '/api/placeholder/400/300',
    color: 'from-teal-500 to-cyan-600'
  },
  {
    name: 'Mining',
    description: 'Heavy-duty equipment designed for harsh mining environments and mineral processing.',
    icon: FaHelmetSafety,
    applications: ['Conveyor Systems', 'Crushing Equipment', 'Pumping Systems', 'Hoisting Equipment'],
    image: '/api/placeholder/400/300',
    color: 'from-gray-500 to-slate-600'
  },
  {
    name: 'Renewable Energy',
    description: 'Specialized equipment for wind, solar, and other renewable energy applications.',
    icon: FaLeaf,
    applications: ['Wind Turbines', 'Solar Tracking', 'Energy Storage', 'Grid Integration'],
    image: '/api/placeholder/400/300',
    color: 'from-lime-500 to-green-600'
  },
  {
    name: 'General Manufacturing',
    description: 'Versatile solutions for various manufacturing processes and industrial applications.',
    icon: FaGears,
    applications: ['Production Lines', 'Material Handling', 'Process Equipment', 'Automation Systems'],
    image: '/api/placeholder/400/300',
    color: 'from-indigo-500 to-purple-600'
  },
  {
    name: 'Steel & Metal',
    description: 'High-temperature resistant equipment for steel production and metal processing.',
    icon: FaIndustry,
    applications: ['Rolling Mills', 'Furnace Systems', 'Cooling Equipment', 'Material Transport'],
    image: '/api/placeholder/400/300',
    color: 'from-orange-500 to-red-600'
  }
]

const stats = [
  { name: 'Industries Served', value: '50+', color: 'from-blue-500 to-cyan-600' },
  { name: 'Years of Experience', value: '25+', color: 'from-green-500 to-emerald-600' },
  { name: 'Projects Completed', value: '10,000+', color: 'from-purple-500 to-indigo-600' },
  { name: 'Client Satisfaction', value: '99%', color: 'from-orange-500 to-red-600' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1
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

export default function IndustriesPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-corporate-blue/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-corporate-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
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
                Industries We <span className="bg-gradient-to-r from-corporate-blue to-purple-600 bg-clip-text text-transparent">Serve</span>
              </h1>
              <p className="text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto">
                Delivering specialized industrial solutions across diverse sectors with 
                proven expertise and reliable equipment.
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
                <span className="text-gray-900 font-medium">Industries</span>
              </div>
            </li>
          </ol>
        </div>
      </nav>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.name}
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-white/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative backdrop-blur-sm bg-white/20 border border-white/30 rounded-2xl p-6 text-center hover:bg-white/30 transition-all duration-500">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} mx-auto mb-4 flex items-center justify-center`}>
                  <FaIndustry className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.name}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Industries Grid */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl lg:mx-0 mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
            Specialized <span className="bg-gradient-to-r from-corporate-blue to-purple-600 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            From heavy industry to precision manufacturing, we provide tailored solutions 
            for your specific industry requirements.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.name}
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-white/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative backdrop-blur-sm bg-white/20 border border-white/30 rounded-3xl p-8 hover:bg-white/30 transition-all duration-500 transform hover:scale-105 h-full">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${industry.color} mb-6`}>
                  <industry.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.name}</h3>
                <p className="text-gray-600 mb-6">{industry.description}</p>
                
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-800">Key Applications:</h4>
                  <ul className="space-y-2">
                    {industry.applications.map((app, appIndex) => (
                      <li key={appIndex} className="flex items-center text-sm text-gray-600">
                        <ChevronRightIcon className="h-3 w-3 text-corporate-blue mr-2 flex-shrink-0" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button className="group/btn w-full flex items-center justify-center px-4 py-2 text-sm font-medium text-corporate-blue hover:text-blue-600 transition-colors duration-300">
                    Learn More About Solutions
                    <ArrowRightIcon className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-corporate-blue/90 to-purple-600/90 rounded-3xl blur-xl"></div>
          <div className="relative backdrop-blur-sm bg-gradient-to-r from-corporate-blue to-purple-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Industry-Specific Solutions</h2>
            <p className="text-xl mb-8 text-white/90">
              Don&apos;t see your industry? We work with businesses across all sectors to deliver 
              customized industrial solutions that meet your unique requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center px-8 py-4 bg-white text-corporate-blue font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <span>Discuss Your Needs</span>
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
      </section>
    </div>
  )
} 