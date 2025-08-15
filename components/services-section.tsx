"use client"

import { motion } from "framer-motion"
import { BarChart3, Target, Zap } from "lucide-react"

const services = [
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Track your performance with detailed insights and metrics that matter for your business growth.",
    emoji: "📊",
  },
  {
    icon: Target,
    title: "Campaign Management",
    description:
      "Manage all your marketing campaigns from one centralized platform with advanced targeting and automation.",
    emoji: "🎯",
  },
  {
    icon: Zap,
    title: "ROI Optimization",
    description: "Maximize your return on investment with smart optimization and data-driven strategies that scale.",
    emoji: "⚡",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Reason to Choose BlackPulse</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience the difference with our comprehensive marketing solutions designed for growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-800 hover:border-orange-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-orange-500/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{service.emoji}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
