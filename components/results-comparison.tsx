"use client"

import { motion } from "framer-motion"
import { Lock, Unlock } from "lucide-react"

export function ResultsComparison() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-white/90 dark:bg-gray-800/80 p-8 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 w-64 h-64 bg-amber-400/10 dark:bg-amber-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.05 }}
              className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-xl shadow-sm"
            >
              <Lock className="h-6 w-6 text-amber-600 dark:text-amber-500" />
            </motion.div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">LinkedIn Gratuito</h4>
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex justify-between mb-2">
                <p className="text-gray-700 dark:text-gray-300 font-medium">Visibilidade para Recrutadores</p>
                <p className="text-amber-600 dark:text-amber-500 font-bold">23%</p>
              </div>
              <div className="w-full h-5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-amber-400 to-amber-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "23%" }}
                  transition={{ duration: 1 }}
                  style={{ boxShadow: "0 0 8px rgba(251, 191, 36, 0.5)" }}
                />
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 italic">
                77% dos recrutadores nunca veem seu perfil
              </p>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <p className="text-gray-700 dark:text-gray-300 font-medium">Taxa de Resposta</p>
                <p className="text-amber-600 dark:text-amber-500 font-bold">38%</p>
              </div>
              <div className="w-full h-5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-amber-400 to-amber-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "38%" }}
                  transition={{ duration: 1 }}
                  style={{ boxShadow: "0 0 8px rgba(251, 191, 36, 0.5)" }}
                />
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 italic">
                Mais da metade das suas mensagens são ignoradas
              </p>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <p className="text-gray-700 dark:text-gray-300 font-medium">Acesso a Vagas Premium</p>
                <p className="text-amber-600 dark:text-amber-500 font-bold">12%</p>
              </div>
              <div className="w-full h-5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-amber-400 to-amber-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "12%" }}
                  transition={{ duration: 1 }}
                  style={{ boxShadow: "0 0 8px rgba(251, 191, 36, 0.5)" }}
                />
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 italic">
                88% das melhores vagas estão inacessíveis
              </p>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <p className="text-gray-700 dark:text-gray-300 font-medium">Insights de Candidatos</p>
                <p className="text-amber-600 dark:text-amber-500 font-bold">0%</p>
              </div>
              <div className="w-full h-5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-amber-400 to-amber-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "0%" }}
                  transition={{ duration: 1 }}
                  style={{ boxShadow: "0 0 8px rgba(251, 191, 36, 0.5)" }}
                />
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 italic">
                Sem acesso a dados comparativos com outros candidatos
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-white/90 dark:bg-gray-800/80 p-8 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 w-64 h-64 bg-green-400/10 dark:bg-green-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.05 }}
              className="bg-green-100 dark:bg-green-900/30 p-2 rounded-xl shadow-sm"
            >
              <Unlock className="h-6 w-6 text-green-600 dark:text-green-500" />
            </motion.div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">Com LinkedIn Premium</h4>
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex justify-between mb-2">
                <p className="text-gray-700 dark:text-gray-300 font-medium">Visibilidade para Recrutadores</p>
                <p className="text-green-600 dark:text-green-500 font-bold">97%</p>
              </div>
              <div className="w-full h-5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-400 to-green-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "97%" }}
                  transition={{ duration: 1 }}
                  style={{ boxShadow: "0 0 8px rgba(34, 197, 94, 0.5)" }}
                />
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 italic">
                Seu perfil aparece para quase todos os recrutadores
              </p>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <p className="text-gray-700 dark:text-gray-300 font-medium">Taxa de Resposta</p>
                <p className="text-green-600 dark:text-green-500 font-bold">92%</p>
              </div>
              <div className="w-full h-5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-400 to-green-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "92%" }}
                  transition={{ duration: 1 }}
                  style={{ boxShadow: "0 0 8px rgba(34, 197, 94, 0.5)" }}
                />
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 italic">
                Quase todas as suas mensagens recebem resposta
              </p>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <p className="text-gray-700 dark:text-gray-300 font-medium">Acesso a Vagas Premium</p>
                <p className="text-green-600 dark:text-green-500 font-bold">100%</p>
              </div>
              <div className="w-full h-5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-400 to-green-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1 }}
                  style={{ boxShadow: "0 0 8px rgba(34, 197, 94, 0.5)" }}
                />
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 italic">
                Acesso total às melhores oportunidades do mercado
              </p>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <p className="text-gray-700 dark:text-gray-300 font-medium">Insights de Candidatos</p>
                <p className="text-green-600 dark:text-green-500 font-bold">100%</p>
              </div>
              <div className="w-full h-5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-400 to-green-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1 }}
                  style={{ boxShadow: "0 0 8px rgba(34, 197, 94, 0.5)" }}
                />
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 italic">
                Dados completos para se destacar entre concorrentes
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
