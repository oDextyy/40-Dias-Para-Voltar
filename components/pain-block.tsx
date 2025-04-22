"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"
import { Heart, Clock, CloudOff, Frown, Compass } from "lucide-react"
import ActionButton from "./action-button"

export default function PainBlock() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const painPoints = [
    {
      icon: <Heart className="h-6 w-6 md:h-8 md:w-8 text-red-500" />,
      title: "Distanciamento Emocional",
      description:
        "Você se sente emocionalmente distante de Deus, como se houvesse um muro entre vocês. As orações parecem não passar do teto e a Bíblia parece apenas um livro comum.",
    },
    {
      icon: <Clock className="h-6 w-6 md:h-8 md:w-8 text-amber-500" />,
      title: "Falta de Tempo e Disciplina",
      description:
        "A correria do dia a dia tem consumido seu tempo, e você não consegue estabelecer uma rotina consistente de devoção. Quando tenta, sente-se culpado por não conseguir manter.",
    },
    {
      icon: <CloudOff className="h-6 w-6 md:h-8 md:w-8 text-gray-500" />,
      title: "Deserto Espiritual",
      description:
        "Você está passando por um período de aridez espiritual, onde não consegue sentir a presença de Deus. As dúvidas aumentam e a fé parece diminuir a cada dia.",
    },
    {
      icon: <Frown className="h-6 w-6 md:h-8 md:w-8 text-blue-500" />,
      title: "Decepções e Feridas",
      description:
        "Experiências dolorosas na igreja ou com outros cristãos deixaram cicatrizes em seu coração. Você quer se reconectar com Deus, mas as feridas ainda estão abertas.",
    },
    {
      icon: <Compass className="h-6 w-6 md:h-8 md:w-8 text-green-500" />,
      title: "Perda de Direção",
      description:
        "Você não sabe mais qual é o seu propósito espiritual. A clareza que um dia teve sobre seu chamado e missão parece ter desaparecido, deixando apenas confusão.",
    },
  ]

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
    <section id="dor" className="py-16 md:py-20 bg-gradient-to-b from-white to-amber-50 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-800 mb-4">
              Você Se Identifica Com Isso?
            </h2>
            <p className="text-base md:text-xl text-gray-700">
              Muitos cristãos sinceros enfrentam momentos de distanciamento em sua caminhada com Deus. Se você está
              passando por alguma dessas situações, saiba que não está sozinho.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {painPoints.map((point, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-4 md:p-6 h-full border-amber-200 hover:border-amber-400 transition-all duration-300 hover:shadow-md">
                  <div className="flex items-start">
                    <div className="mr-3 md:mr-4 bg-amber-100 p-2 md:p-3 rounded-full flex-shrink-0">{point.icon}</div>
                    <div>
                      <h3 className="text-lg md:text-xl font-serif font-bold text-amber-800 mb-2">{point.title}</h3>
                      <p className="text-gray-700 text-sm md:text-base">{point.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-10 md:mt-12 text-center">
            <p className="text-lg md:text-xl text-amber-800 font-medium mb-6">
              Se você se identificou com algum desses pontos, o devocional "40 Dias Pra Voltar" foi criado especialmente
              para você.
            </p>
            <div className="flex justify-center">
              <ActionButton onClick={handleScrollToOffer}>Como o devocional pode me ajudar</ActionButton>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
