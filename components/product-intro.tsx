"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { BookOpen, Heart, Star } from "lucide-react"
import ActionButton from "./action-button"

export default function ProductIntro() {
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

  const handleScrollToOffer = () => {
    const element = document.getElementById("oferta")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="produto" className="py-16 md:py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/images/bible-light.jpeg')] bg-cover bg-center opacity-10 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white to-amber-50/80 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
            <div className="inline-block p-2 bg-amber-100 rounded-full mb-4">
              <BookOpen className="h-6 w-6 md:h-8 md:w-8 text-amber-700" />
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-amber-800 mb-4 md:mb-6">
              40 Dias Pra Voltar
            </h2>
            <p className="text-base md:text-xl text-gray-700 max-w-3xl mx-auto">
              Um devocional transformador que guiará você em uma jornada de 40, 80 ou 120 dias para restaurar sua
              intimidade com Deus.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 md:w-24 md:h-24 bg-amber-100 rounded-full -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 md:w-16 md:h-16 bg-amber-200 rounded-full -z-10"></div>

              <div className="bg-white p-1 rounded-lg shadow-xl">
                <img
                  src="/images/jesus-golden.jpeg"
                  alt="Devocional 40 Dias Pra Voltar"
                  className="w-full h-auto rounded-md"
                />
              </div>

              <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-full font-bold shadow-lg transform rotate-12 text-sm md:text-base">
                Novo!
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-amber-800 mb-4">
                O que é o "40 Dias Pra Voltar"?
              </h3>

              <p className="text-gray-700 mb-6 text-sm md:text-base">
                Este devocional foi criado especialmente para aqueles que desejam renovar sua conexão com Deus, seja
                você alguém que se afastou da fé ou um cristão que busca uma intimidade mais profunda com o Pai.
              </p>

              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {[
                  {
                    icon: <BookOpen className="h-4 w-4 md:h-5 md:w-5 text-amber-600" />,
                    text: "Devocionais diários profundos e transformadores",
                  },
                  {
                    icon: <Heart className="h-4 w-4 md:h-5 md:w-5 text-red-600" />,
                    text: "Orações guiadas para restaurar sua intimidade com Deus",
                  },
                  {
                    icon: <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-500" />,
                    text: "Reflexões poderosas que tocam o coração",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1 flex-shrink-0">{item.icon}</div>
                    <span className="text-sm md:text-base text-gray-700">{item.text}</span>
                  </li>
                ))}
              </ul>

              <div className="flex justify-center md:justify-start">
                <ActionButton onClick={handleScrollToOffer}>Quero Começar Minha Jornada</ActionButton>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
