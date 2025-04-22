"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import ActionButton from "./action-button"

export default function FinalCTA() {
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

  // Link para o plano recomendado (80 dias)
  const recommendedPlanLink = "https://pay.kiwify.com.br/iIPDiAU"

  const handlePurchase = () => {
    window.open(recommendedPlanLink, "_blank")
  }

  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/images/sunset.jpeg')] bg-cover bg-center z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-amber-900/70 to-slate-900/70 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6"
          >
            Está Pronto Para Voltar?
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-xl text-amber-100 mb-8 md:mb-10 max-w-3xl mx-auto px-2"
          >
            Deus está esperando por você. Comece hoje sua jornada de 40, 80 ou 120 dias e redescubra a intimidade com o
            Pai que seu coração tanto anseia.
          </motion.p>

          <motion.div variants={itemVariants} className="flex justify-center">
            <ActionButton onClick={handlePurchase}>Quero Começar Minha Jornada Agora</ActionButton>
          </motion.div>

          <motion.p variants={itemVariants} className="text-amber-200 mt-6 md:mt-8 text-sm md:text-base">
            *Acesso imediato após a compra | Garantia de 30 dias
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
