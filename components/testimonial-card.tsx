"use client"

import { motion } from "framer-motion"

interface TestimonialCardProps {
  quote: string
  author: string
}

export function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-slate-800 border border-amber-500/10 rounded-lg p-6 shadow-lg"
    >
      <div className="mb-4 text-amber-500 text-4xl font-serif">"</div>
      <p className="text-white italic mb-4 font-serif">{quote}</p>
      <p className="text-amber-300 text-sm text-right">— {author}</p>
    </motion.div>
  )
}
