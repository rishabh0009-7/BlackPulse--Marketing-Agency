"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star, Zap } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: 2500,
    description: "Perfect for small businesses ready to scale",
    features: [
      "Google Ads Management",
      "Facebook & Instagram Ads",
      "Monthly Strategy Call",
      "Performance Dashboard",
      "Email Support",
      "Basic Reporting",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: 5000,
    description: "For growing companies that need comprehensive marketing",
    features: [
      "Everything in Starter",
      "LinkedIn Ads",
      "SEO Optimization",
      "Landing Page Creation",
      "A/B Testing",
      "Weekly Strategy Calls",
      "Advanced Analytics",
      "Dedicated Account Manager",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: 10000,
    description: "For established businesses seeking market dominance",
    features: [
      "Everything in Growth",
      "Full Brand Strategy",
      "Custom Creative Assets",
      "Marketing Automation",
      "CRO & Funnel Optimization",
      "Daily Monitoring",
      "Custom Integrations",
      "Senior Strategist Access",
      "Quarterly Business Reviews",
    ],
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Investment Plans
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose the plan that fits your growth ambitions. All plans include our performance guarantee.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-white/90 text-black px-4 py-2 rounded-full text-sm font-semibold flex items-center shadow-lg">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <Card
                className={`h-full transition-all duration-300 backdrop-blur-sm relative ${
                  plan.popular
                    ? "bg-gradient-to-br from-gray-800/30 to-gray-900/30 border-gray-500/50 shadow-2xl shadow-gray-500/20 z-10"
                    : "bg-gradient-to-br from-gray-900/50 to-black/50 border-gray-800 hover:border-gray-500/50 group-hover:shadow-2xl group-hover:shadow-gray-500/20"
                }`}
              >
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">${plan.price.toLocaleString()}</span>
                      <span className="text-gray-400">/month</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-white/90 hover:bg-white text-black font-semibold"
                        : "bg-transparent border-2 border-white/70 text-white hover:bg-white/10 hover:border-white"
                    } transition-all duration-300`}
                  >
                    {plan.popular && <Zap className="w-4 h-4 mr-2" />}
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            All plans include a 30-day money-back guarantee. No setup fees. Cancel anytime.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
