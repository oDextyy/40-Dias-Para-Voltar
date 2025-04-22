"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"
import { Gift, BookOpen, FileText, Calendar, PenTool, Sparkles, Star } from "lucide-react"

export default function BonusSection() {
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

  const bonuses = [
    {
      icon: <BookOpen className="h-10 w-10 text-amber-600" />,
      title: "E-book '100 Orações Poderosas para Restauração'",
      description:
        "Uma coleção de orações específicas para diferentes desafios espirituais, emocionais e relacionais. Um recurso valioso para momentos de crise.",
    },
    {
      icon: <FileText className="h-10 w-10 text-amber-600" />,
      title: "Diário de Gratidão Digital",
      description:
        "Um diário digital interativo para registrar suas bênçãos diárias e cultivar um coração grato. Inclui prompts diários e versículos inspiradores.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-amber-600" />,
      title: "Guia de Jejum e Oração",
      description:
        "Um guia completo sobre como jejuar com propósito e orar com poder. Inclui diferentes tipos de jejum e modelos de oração para diferentes objetivos.",
    },
    {
      icon: <PenTool className="h-10 w-10 text-amber-600" />,
      title: "Calendário de Leitura Bíblica Anual",
      description:
        "Um plano de leitura bíblica para o ano inteiro, organizado por temas e com espaço para anotações. Perfeito para continuar sua jornada espiritual após os 40 dias, mantendo o hábito de leitura bíblica diária.",
    },
    {
      icon: <Sparkles className="h-10 w-10 text-amber-600" />,
      title: "Guia de Meditação Cristã",
      description:
        "Aprenda a meditar nas Escrituras de forma profunda e transformadora. Este guia ensina técnicas bíblicas para contemplar a Palavra e permitir que ela transforme sua mente e coração.",
    },
    {
      icon: <Star className="h-10 w-10 text-amber-600" />,
      title: "Coleção de Testemunhos Inspiradores",
      description:
        "Histórias reais de pessoas que passaram por desertos espirituais e encontraram o caminho de volta a Deus através do devocional '40 Dias Pra Voltar'.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/bible-light.jpeg')] bg-cover bg-center opacity-10 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/90 to-white/90 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-block p-3 bg-gradient-to-r from-amber-100 to-amber-200 rounded-full mb-4 shadow-md">
              <Gift className="h-10 w-10 text-amber-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-800 mb-6">Bônus Exclusivos</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Ao adquirir o plano Premium, você receberá estes bônus especiais para potencializar sua transformação
              espiritual
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bonuses.map((bonus, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 border-amber-200 bg-white/80 backdrop-blur-sm h-full flex flex-col relative overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-amber-400">
                  <div className="mb-4 text-center">{bonus.icon}</div>
                  <h3 className="text-xl font-serif font-bold text-amber-800 mb-2 text-center">{bonus.title}</h3>
                  <p className="text-gray-700 flex-grow text-center">{bonus.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="bg-gradient-to-r from-amber-600 to-amber-800 p-8 rounded-lg inline-block shadow-xl">
              <div className="flex justify-center items-center mb-4">
                <Gift className="h-12 w-12 text-amber-200" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-white mb-2">Todos Estes Bônus Exclusivos</h3>
              <p className="text-xl text-amber-100">Incluídos GRATUITAMENTE!</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
