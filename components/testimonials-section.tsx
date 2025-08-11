"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO",
    company: "TechFlow Solutions",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    content:
      "BlackPulse transformed our digital presence completely. Our lead generation increased by 300% in just 3 months.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Marketing Director",
    company: "GrowthLab Inc",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "The ROI we achieved with BlackPulse exceeded all expectations. Their strategic approach is unmatched.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Founder",
    company: "EcoVibe",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "Working with BlackPulse was a game-changer. They helped us scale from startup to market leader.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "VP Marketing",
    company: "InnovateCorp",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "Their data-driven approach and creative execution delivered results beyond our wildest dreams.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "CMO",
    company: "FutureScale",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    content: "BlackPulse doesn't just deliver campaigns, they deliver business transformation.",
    rating: 5,
  },
  {
    name: "Alex Johnson",
    role: "CEO",
    company: "NextGen Retail",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    content: "The team at BlackPulse became an extension of our company. Incredible partnership and results.",
    rating: 5,
  },
]

export function TestimonialsSection() {
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
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Client Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients say about working with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full bg-gradient-to-br from-gray-900/50 to-black/50 border-gray-800 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <div className="mb-6">
                    <Quote className="w-8 h-8 text-purple-400 mb-4" />
                    <p className="text-gray-300 leading-relaxed">"{testimonial.content}"</p>
                  </div>

                  <div className="flex items-center">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 ring-2 ring-purple-500/20"
                    />
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
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
