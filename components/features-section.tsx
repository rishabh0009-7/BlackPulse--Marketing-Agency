"use client"

import { motion } from "framer-motion"
import { Rocket, Users, TrendingUp, Award } from "lucide-react"

const features = [
  {
    icon: Rocket,
    title: "Start",
    description: "Launch your marketing campaigns with our proven strategies and expert guidance.",
  },
  {
    icon: Users,
    title: "Engage",
    description: "Connect with your audience through targeted content and personalized experiences.",
  },
  {
    icon: TrendingUp,
    title: "Marketing",
    description: "Scale your business with data-driven marketing solutions that deliver results.",
  },
  {
    icon: Award,
    title: "Benefits",
    description: "Achieve sustainable growth and maximize your return on marketing investment.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-orange-500/50 transition-all duration-300 group hover:shadow-xl hover:shadow-orange-500/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
