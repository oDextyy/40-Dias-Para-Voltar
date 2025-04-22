"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Book, Calendar, FileText, Heart, Music, PenTool, Sparkles, Star } from "lucide-react"

export default function WhatYouReceive() {
  const items = [
    {
      icon: <Book className="h-8 w-8 md:h-10 md:w-10 text-amber-600" />,
      title: "Devocionais Diários",
      description: "Meditações diárias para 40, 80 ou 120 dias que vão guiar você de volta à intimidade com Deus.",
    },
    {
      icon: <PenTool className="h-8 w-8 md:h-10 md:w-10 text-amber-600" />,
      title: "Guias de Oração",
      description: "Modelos de oração para ajudar você a se expressar quando as palavras parecem difíceis.",
    },
    {
      icon: <Heart className="h-8 w-8 md:h-10 md:w-10 text-amber-600" />,
      title: "Exercícios de Reflexão",
      description: "Atividades práticas para aprofundar sua conexão espiritual e aplicar as lições no dia a dia.",
    },
    {
      icon: <FileText className="h-8 w-8 md:h-10 md:w-10 text-amber-600" />,
      title: "Planos de Leitura Bíblica",
      description: "Roteiros de leitura bíblica alinhados com o tema de cada dia do devocional.",
    },
    {
      icon: <Star className="h-8 w-8 md:h-10 md:w-10 text-amber-600" />,
      title: "Orações Poderosas",
      description: "Coletânea de 100 orações para diferentes momentos e necessidades da sua vida espiritual.",
    },
    {
      icon: <Calendar className="h-8 w-8 md:h-10 md:w-10 text-amber-600" />,
      title: "Diário de Gratidão",
      description: "Ferramenta para registrar suas bênçãos diárias e cultivar um coração agradecido.",
    },
    {
      icon: <Music className="h-8 w-8 md:h-10 md:w-10 text-amber-600" />,
      title: "Sugestões de Louvor",
      description: "Recomendações de músicas para complementar sua experiência devocional diária.",
    },
    {
      icon: <Sparkles className="h-8 w-8 md:h-10 md:w-10 text-amber-600" />,
      title: "Conteúdo Exclusivo",
      description: "Materiais adicionais que variam conforme o plano escolhido (40, 80 ou 120 dias).",
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-amber-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/bible-light.jpeg')] bg-cover bg-center opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-medium mb-4"
          >
            CONTEÚDO COMPLETO
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-amber-800 mb-4"
          >
            O Que Você Vai Receber
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto"
          >
            Cada jornada (40, 80 ou 120 dias) inclui recursos cuidadosamente elaborados para guiar você de volta à
            intimidade com Deus
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-amber-200 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 md:p-6">
                  <div className="bg-amber-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-serif font-bold text-amber-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
