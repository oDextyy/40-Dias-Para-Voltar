"use client"

import { motion } from "framer-motion"

export function PricingBadge({ price }: { price: string }) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-red-600 to-purple-600 p-1 rounded-lg inline-block"
    >
      <div className="bg-black px-4 py-2 rounded-md flex items-center gap-2">
        <span className="text-white font-mono text-sm">APENAS</span>
        <span className="text-white font-bold font-mono text-2xl">R$ {price}</span>
        <span className="text-gray-400 font-mono text-xs">pagamento único</span>
      </div>
    </motion.div>
  )
}
