"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Search, Palette, TrendingUp, Mail, Zap } from "lucide-react"

const services = [
  {
    icon: Target,
    title: "Paid Ads",
    description:
      "High-converting ad campaigns across Google, Facebook, and LinkedIn that drive qualified leads and maximize ROI.",
  },
  {
    icon: Search,
    title: "SEO",
    description:
      "Dominate search results with our data-driven SEO strategies that increase organic traffic and brand visibility.",
  },
  {
    icon: Palette,
    title: "Branding",
    description:
      "Create memorable brand identities that resonate with your audience and differentiate you from competitors.",
  },
  {
    icon: TrendingUp,
    title: "Funnels",
    description: "Optimize your sales funnels to convert more prospects into customers with strategic funnel design.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "Nurture leads and retain customers with personalized email campaigns that drive engagement and sales.",
  },
  {
    icon: Zap,
    title: "Growth Hacking",
    description:
      "Rapid experimentation across marketing channels to identify the most effective ways to grow your business.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">What We Do</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Full-service digital marketing solutions designed to accelerate your growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full bg-gradient-to-br from-gray-900/50 to-black/50 border-gray-800 hover:border-white/30 transition-all duration-300 backdrop-blur-sm group-hover:shadow-2xl group-hover:shadow-white/10">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-full bg-white/90 p-4 mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-300 group-hover:to-gray-400 group-hover:bg-clip-text transition-all duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
