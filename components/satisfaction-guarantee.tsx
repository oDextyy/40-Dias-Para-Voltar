"use client"

import { motion } from "framer-motion"
import { ShieldCheck } from "lucide-react"

export function SatisfactionGuarantee() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gray-900 p-6 rounded-lg border border-green-800"
    >
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="bg-green-900/30 p-4 rounded-full">
          <ShieldCheck className="h-12 w-12 text-green-500" />
        </div>

        <div>
          <h3 className="text-xl font-bold text-green-500 mb-2 font-mono">GARANTIA DE 7 DIAS</h3>
          <p className="text-gray-300 font-mono">
            Se você não ficar 100% satisfeito com os resultados nos primeiros 7 dias, devolvemos seu dinheiro
            integralmente. Sem perguntas, sem burocracia. Você não tem nada a perder e tudo a ganhar.
          </p>
        </div>
      </div>
    </motion.div>
  )
}
