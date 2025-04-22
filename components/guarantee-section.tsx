"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"
import { Shield } from "lucide-react"

export default function GuaranteeSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/images/candle.jpeg')] bg-cover bg-center opacity-10 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-amber-50/90 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 md:p-12 border-amber-200 bg-white/80 backdrop-blur-sm shadow-xl">
            <motion.div variants={itemVariants} className="text-center mb-8">
              <div className="inline-block p-3 bg-amber-100 rounded-full mb-4">
                <Shield className="h-10 w-10 text-amber-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-800 mb-4">
                Garantia de Satisfação de 30 Dias
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="absolute -top-3 -left-3 w-20 h-20 bg-amber-100 rounded-full -z-10"></div>
                  <div className="w-48 h-48 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl p-4 text-center">
                    100% de Garantia de Satisfação
                  </div>
                </div>
              </div>

              <div className="md:w-2/3">
                <p className="text-lg text-gray-700 mb-6">
                  Estamos tão confiantes de que o devocional "40 Dias Pra Voltar" transformará sua vida espiritual que
                  oferecemos uma garantia incondicional de 30 dias.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Se por qualquer motivo você não estiver completamente satisfeito com o material, basta nos enviar um
                  e-mail dentro de 30 dias após a compra, e devolveremos 100% do seu investimento, sem perguntas.
                </p>
                <p className="text-lg font-medium text-amber-800">
                  Você não tem nada a perder e uma vida espiritual renovada a ganhar!
                </p>
              </div>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
