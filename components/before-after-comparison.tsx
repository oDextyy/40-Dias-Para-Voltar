"use client"

import { motion } from "framer-motion"

export function BeforeAfterComparison() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-slate-800 border border-amber-500/10 rounded-lg p-6 shadow-lg"
      >
        <h3 className="text-xl font-medium text-white mb-6 text-center">ANTES</h3>
        <ul className="space-y-4">
          <li className="flex items-center text-gray-300">
            <div className="w-2 h-2 bg-amber-500/50 rounded-full mr-3"></div>
            <span>Coração seco</span>
          </li>
          <li className="flex items-center text-gray-300">
            <div className="w-2 h-2 bg-amber-500/50 rounded-full mr-3"></div>
            <span>Silêncio na oração</span>
          </li>
          <li className="flex items-center text-gray-300">
            <div className="w-2 h-2 bg-amber-500/50 rounded-full mr-3"></div>
            <span>Cansaço espiritual</span>
          </li>
          <li className="flex items-center text-gray-300">
            <div className="w-2 h-2 bg-amber-500/50 rounded-full mr-3"></div>
            <span>Fé mecânica</span>
          </li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-amber-900/30 to-slate-900/80 border border-amber-500/20 rounded-lg p-6 shadow-lg"
      >
        <h3 className="text-xl font-medium text-white mb-6 text-center">DEPOIS</h3>
        <ul className="space-y-4">
          <li className="flex items-center text-white">
            <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
            <span>Intimidade restaurada</span>
          </li>
          <li className="flex items-center text-white">
            <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
            <span>Paz inexplicável</span>
          </li>
          <li className="flex items-center text-white">
            <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
            <span>Fome pela Palavra</span>
          </li>
          <li className="flex items-center text-white">
            <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
            <span>Voz de Deus clara de novo</span>
          </li>
        </ul>
      </motion.div>
    </div>
  )
}
