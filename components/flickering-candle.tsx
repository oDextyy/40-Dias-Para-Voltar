"use client"

import { motion } from "framer-motion"

export default function FlickeringCandle() {
  return (
    <div className="relative w-16 h-16">
      <motion.div
        animate={{
          opacity: [0.7, 0.9, 0.6, 0.8, 0.7],
          scale: [1, 1.05, 0.95, 1.02, 1],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="absolute inset-0 rounded-full bg-amber-500/30 blur-xl"
      />

      <motion.div
        animate={{
          opacity: [0.8, 1, 0.7, 0.9, 0.8],
          scale: [1, 1.1, 0.9, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="absolute inset-0 rounded-full bg-amber-400/50 blur-md"
      />

      <motion.div
        animate={{
          opacity: [1, 0.9, 1, 0.8, 1],
          scale: [1, 1.15, 0.85, 1.1, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="absolute inset-0 rounded-full bg-amber-300/70 blur-sm"
      />
    </div>
  )
}
