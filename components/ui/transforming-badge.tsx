"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export function TransformingBadge() {
  return (
    <motion.div
      className="inline-flex items-center gap-2 px-6 py-3 bg-black/80 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <Sparkles className="w-4 h-4 text-purple-400" />
      <span>Transforming Ideas into Reality</span>
    </motion.div>
  )
}
