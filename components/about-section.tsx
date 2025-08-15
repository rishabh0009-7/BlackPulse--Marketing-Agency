"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const teamMembers = [
  {
    name: "Marcus Rodriguez",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
  },
  {
    name: "Emily Watson",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
  },
  {
    name: "David Kim",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-8">
            <div className="flex -space-x-4">
              {teamMembers.map((member, index) => (
                <motion.img
                  key={member.name}
                  src={member.image}
                  alt={member.name}
                  className="w-12 h-12 rounded-full border-2 border-gray-800"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              ))}
            </div>
          </div>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8">
            We are a team of <span className="text-white font-semibold">marketing experts</span>, digital strategists,
            content creators, and data analysts dedicated to{" "}
            <span className="text-orange-400">elevating your brand</span>. Our innovative approach ensures that your
            marketing campaigns are not only creative but also data-driven, constantly evolving, and we stay ahead of
            the curve with the latest techniques, and trends to ensure our clients achieve sustainable growth.
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
            <Button
              variant="outline"
              className="border-gray-600 text-white hover:bg-white hover:text-black bg-transparent text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-2"
            >
              Start Now
            </Button>
            <Button
              variant="outline"
              className="border-gray-600 text-white hover:bg-white hover:text-black bg-transparent text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-2"
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              className="border-gray-600 text-white hover:bg-white hover:text-black bg-transparent text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-2"
            >
              Expertise
            </Button>
            <Button
              variant="outline"
              className="border-gray-600 text-white hover:bg-white hover:text-black bg-transparent text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-2"
            >
              Get Started
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
