"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Play } from "lucide-react"
import { useState } from "react"

const caseStudies = [
  {
    id: 1,
    title: "E-commerce Scale-Up",
    client: "TechGear Pro",
    metric: "3.4x ROAS",
    description:
      "Transformed a struggling e-commerce brand into a market leader through strategic paid advertising and conversion optimization.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    results: [
      { label: "Revenue Growth", value: "340%" },
      { label: "ROAS", value: "3.4x" },
      { label: "Conversion Rate", value: "+127%" },
    ],
  },
  {
    id: 2,
    title: "SaaS Lead Generation",
    client: "CloudFlow",
    metric: "250% Lead Increase",
    description:
      "Generated high-quality leads for a B2B SaaS company through targeted LinkedIn campaigns and content marketing.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    results: [
      { label: "Qualified Leads", value: "+250%" },
      { label: "Cost per Lead", value: "-60%" },
      { label: "Pipeline Value", value: "$2.1M" },
    ],
  },
  {
    id: 3,
    title: "Brand Transformation",
    client: "Urban Fitness",
    metric: "500% Social Growth",
    description:
      "Complete brand overhaul and social media strategy that turned a local gym into a fitness influencer brand.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    results: [
      { label: "Social Followers", value: "+500%" },
      { label: "Engagement Rate", value: "12.3%" },
      { label: "Brand Mentions", value: "+800%" },
    ],
  },
]

export function CaseStudiesSection() {
  const [selectedCase, setSelectedCase] = useState<number | null>(null)

  return (
    <section id="case-studies" className="py-12 sm:py-16 md:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Case Studies</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real results from real clients. See how we've helped businesses achieve extraordinary growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => setSelectedCase(study.id)}
            >
              <Card className="h-full bg-gradient-to-br from-gray-900/50 to-black/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm group-hover:shadow-2xl group-hover:shadow-purple-500/20 overflow-hidden">
                <div className="relative">
                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-0">
                      <Play className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/90 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {study.metric}
                    </span>
                  </div>
                </div>

                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-300 group-hover:to-gray-400 group-hover:bg-clip-text transition-all duration-300">
                    {study.title}
                  </h3>
                  <p className="text-purple-400 text-sm mb-3">{study.client}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{study.description}</p>

                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-bold text-white">{result.value}</div>
                        <div className="text-xs text-gray-500">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    className="w-full text-gray-400 hover:text-black hover:bg-white/90 group-hover:bg-white/90 group-hover:text-black transition-all duration-300"
                  >
                    View Case Study
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
