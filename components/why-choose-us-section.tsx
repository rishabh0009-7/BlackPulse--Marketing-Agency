"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, BarChart3, Users, CheckCircle } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning-Fast Execution",
    description:
      "While others plan for months, we launch in days. Our rapid deployment methodology gets your campaigns live and generating results faster than any traditional agency.",
    benefits: [
      "Campaign launch within 48 hours",
      "Weekly optimization sprints",
      "Real-time performance adjustments",
      "No lengthy approval processes",
    ],
    emoji: "⚡",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: BarChart3,
    title: "Transparent Performance",
    description:
      "Complete visibility into every dollar spent and every result generated. Our real-time dashboards and detailed reporting keep you informed at every step.",
    benefits: [
      "Live performance dashboards",
      "Daily spend and conversion reports",
      "Direct access to all campaign data",
      "Custom KPI tracking",
    ],
    emoji: "📈",
    gradient: "from-red-500 to-orange-600",
  },
  {
    icon: Users,
    title: "Senior-Level Expertise",
    description:
      "Work directly with seasoned strategists and senior account managers, not junior staff. Get the expertise and attention your business deserves.",
    benefits: [
      "Direct access to senior strategists",
      "Dedicated Slack workspace",
      "Monthly strategy deep-dives",
      "C-level strategic consulting",
    ],
    emoji: "👥",
    gradient: "from-orange-600 to-red-600",
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 backdrop-blur-sm border border-orange-500/20 rounded-full text-orange-400 text-sm mb-6">
            <Zap className="w-4 h-4" />
            <span>Why Choose BlackPulse</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent">
              The BlackPulse Advantage
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're not just another marketing agency. Here's what makes us the strategic partner your business needs to
            dominate your market.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <Card className="h-full bg-gradient-to-br from-gray-900/80 to-black/80 border-gray-700 hover:border-orange-500/50 transition-all duration-500 backdrop-blur-sm group-hover:shadow-2xl group-hover:shadow-orange-500/20 overflow-hidden relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
                <CardContent className="p-6 sm:p-8 relative z-10">
                  <div className="mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center shadow-lg`}
                    >
                      <span className="text-2xl">{feature.emoji}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-300 group-hover:to-orange-500 group-hover:bg-clip-text transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6 text-lg">{feature.description}</p>
                  </div>

                  <div className="space-y-4">
                    {feature.benefits.map((benefit, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center space-x-3 group/item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-300 group-hover/item:text-white transition-colors duration-200">
                          {benefit}
                        </span>
                      </motion.div>
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
