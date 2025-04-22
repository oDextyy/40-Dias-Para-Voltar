"use client"

import { motion } from "framer-motion"
import { CreditCard, Landmark, QrCode } from "lucide-react"

export function PaymentMethods() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gray-900 p-6 rounded-lg border border-blue-800"
    >
      <h3 className="text-xl font-bold text-blue-500 mb-4 text-center font-mono">FORMAS DE PAGAMENTO</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
          <CreditCard className="h-8 w-8 text-blue-400 mb-2" />
          <h4 className="text-white font-bold mb-1 font-mono">Cartão de Crédito</h4>
          <p className="text-gray-400 text-sm text-center font-mono">Até 12x com juros. Aprovação imediata.</p>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
          <Landmark className="h-8 w-8 text-blue-400 mb-2" />
          <h4 className="text-white font-bold mb-1 font-mono">Boleto Bancário</h4>
          <p className="text-gray-400 text-sm text-center font-mono">Pagamento em até 3 dias úteis.</p>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
          <QrCode className="h-8 w-8 text-blue-400 mb-2" />
          <h4 className="text-white font-bold mb-1 font-mono">Pix</h4>
          <p className="text-gray-400 text-sm text-center font-mono">Aprovação instantânea. Acesso imediato.</p>
        </div>
      </div>

      <p className="text-center text-gray-400 text-sm mt-4 font-mono">
        Pagamento 100% seguro. Seus dados estão protegidos por criptografia de ponta a ponta.
      </p>
    </motion.div>
  )
}
