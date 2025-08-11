"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, BarChart3, Users, CheckCircle } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Speed-first",
    description: "We move fast and deliver results quickly. No lengthy onboarding processes or endless meetings.",
    benefits: ["Launch campaigns within 48 hours", "Weekly performance reviews", "Rapid iteration and optimization"],
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting",
    description: "Full visibility into your campaigns with real-time dashboards and detailed performance analytics.",
    benefits: ["Real-time performance dashboards", "Weekly detailed reports", "Direct access to all campaign data"],
  },
  {
    icon: Users,
    title: "Human-first Collaboration",
    description: "Work directly with senior strategists, not junior account managers. Get the expertise you deserve.",
    benefits: ["Direct access to senior team", "Dedicated Slack channel", "Monthly strategy sessions"],
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Why Choose Us</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're not just another marketing agency. Here's what makes us different.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full bg-gradient-to-br from-gray-900/50 to-black/50 border-gray-800 hover:border-white/30 transition-all duration-300 backdrop-blur-sm group-hover:shadow-2xl group-hover:shadow-white/10">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-full bg-white/90 p-4 mb-6 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-300 group-hover:to-gray-400 group-hover:bg-clip-text transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-6">{feature.description}</p>
                  </div>

                  <div className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
