"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

export function FeatureComparison() {
  const features = [
    { name: "LinkedIn Premium Grátis", pacote1: true, pacote2: true, pacote3: true },
    { name: "Template de Perfil Otimizado", pacote1: true, pacote2: true, pacote3: true },
    { name: "Scripts Automatizados", pacote1: false, pacote2: true, pacote3: true },
    { name: "Bypass de Filtros de IA", pacote1: false, pacote2: true, pacote3: true },
    { name: "Networking Automatizado", pacote1: false, pacote2: true, pacote3: true },
    { name: "Estratégia de Manipulação", pacote1: false, pacote2: false, pacote3: true },
    { name: "Acesso Vitalício", pacote1: false, pacote2: false, pacote3: true },
    { name: "Suporte Premium", pacote1: false, pacote2: false, pacote3: true },
  ]

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-gray-900 rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th className="p-4 text-left border-b border-gray-800 text-white font-mono">Recursos</th>
            <th className="p-4 text-center border-b border-gray-800 text-blue-400 font-mono">Pacote 1</th>
            <th className="p-4 text-center border-b border-gray-800 text-yellow-400 font-mono">Pacote 2</th>
            <th className="p-4 text-center border-b border-gray-800 text-red-400 font-mono">Pacote 3</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <motion.tr
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={index % 2 === 0 ? "bg-gray-800/30" : ""}
            >
              <td className="p-4 border-b border-gray-800 text-white font-mono">{feature.name}</td>
              <td className="p-4 text-center border-b border-gray-800">
                {feature.pacote1 ? (
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                ) : (
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                )}
              </td>
              <td className="p-4 text-center border-b border-gray-800">
                {feature.pacote2 ? (
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                ) : (
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                )}
              </td>
              <td className="p-4 text-center border-b border-gray-800">
                {feature.pacote3 ? (
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                ) : (
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                )}
              </td>
            </motion.tr>
          ))}
          <tr className="bg-gray-800">
            <td className="p-4 text-white font-bold font-mono">Preço</td>
            <td className="p-4 text-center text-white font-bold font-mono">R$ 9,90</td>
            <td className="p-4 text-center text-white font-bold font-mono">R$ 19,99</td>
            <td className="p-4 text-center text-white font-bold font-mono">R$ 24,90</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
