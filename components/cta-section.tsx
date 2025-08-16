"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Marketing?
          </h2>

          <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s build something extraordinary together. Start your journey to marketing success today.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 text-white hover:bg-white hover:text-black px-6 py-2.5 sm:px-8 sm:py-3 bg-transparent"
            >
              Schedule a Call
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-2.5 sm:px-8 sm:py-3 font-semibold"
            >
              Get Started Today
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
