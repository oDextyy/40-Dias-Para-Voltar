"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Maria Silva",
      location: "São Paulo, SP",
      text: "O devocional '40 Dias Pra Voltar' transformou completamente minha vida espiritual. Eu estava distante de Deus há anos, sentindo um vazio que nada preenchia. Através desta jornada, redescobri a intimidade com o Pai e hoje sinto Sua presença de uma forma que nunca experimentei antes.",
      stars: 5,
    },
    {
      name: "João Oliveira",
      location: "Rio de Janeiro, RJ",
      text: "Eu lutava para manter uma vida devocional consistente. Começava planos de leitura bíblica, mas sempre abandonava. Os '40 Dias Pra Voltar' me ajudaram a estabelecer uma disciplina espiritual que permanece até hoje, 6 meses depois de completar o devocional. A forma como o conteúdo é apresentado fez toda a diferença.",
      stars: 5,
    },
    {
      name: "Ana Beatriz",
      location: "Belo Horizonte, MG",
      text: "Após uma grande decepção na igreja, me afastei de tudo relacionado à fé. Uma amiga me presenteou com o '40 Dias Pra Voltar' e, relutante, comecei a leitura. Dia após dia, senti as feridas sendo curadas e meu coração se abrindo novamente para Deus. Hoje posso dizer que estou completamente restaurada.",
      stars: 5,
    },
    {
      name: "Carlos Eduardo",
      location: "Brasília, DF",
      text: "Como pastor, recomendo o '40 Dias Pra Voltar' para todos os membros da minha igreja, especialmente aqueles que estão passando por desertos espirituais. O conteúdo é teologicamente sólido e profundamente transformador. Tenho visto vidas sendo restauradas através deste material.",
      stars: 5,
    },
    {
      name: "Fernanda Costa",
      location: "Salvador, BA",
      text: "Eu estava tão ocupada com o ministério que perdi minha conexão pessoal com Deus. Irônico, não? O '40 Dias Pra Voltar' me ajudou a redescobrir a essência da minha fé e a restaurar minha intimidade com o Pai. Agora sirvo com mais amor e menos esgotamento.",
      stars: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  return (
    <section id="depoimentos" className="py-16 md:py-20 bg-gradient-to-b from-white to-amber-50 relative">
      <div className="absolute inset-0 bg-[url('/images/jesus-illustration.jpeg')] bg-cover bg-center opacity-10 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-amber-50/90 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-amber-800 mb-4">Vidas Transformadas</h2>
          <p className="text-base md:text-xl text-gray-700 max-w-3xl mx-auto">
            Conheça algumas das histórias de pessoas que experimentaram transformação através do devocional "40 Dias Pra
            Voltar".
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <Card className="p-4 md:p-10 border-amber-200 bg-white shadow-md">
                <div className="flex flex-col items-center">
                  <div className="mb-6 text-amber-500">
                    <Quote className="h-8 md:h-12 w-8 md:w-12" />
                  </div>

                  <div className="flex mb-6">
                    {[...Array(testimonials[currentIndex].stars)].map((_, i) => (
                      <Star key={i} className="h-4 md:h-5 w-4 md:w-5 text-amber-500 fill-amber-500" />
                    ))}
                  </div>

                  <p className="text-base md:text-xl text-gray-700 mb-8 text-center italic">
                    "{testimonials[currentIndex].text}"
                  </p>

                  <div>
                    <h4 className="text-lg font-bold text-amber-800 text-center">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-600 text-center">{testimonials[currentIndex].location}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 md:-translate-x-5 bg-white p-2 rounded-full shadow-md text-amber-600 hover:text-amber-700 focus:outline-none z-10"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 md:translate-x-5 bg-white p-2 rounded-full shadow-md text-amber-600 hover:text-amber-700 focus:outline-none z-10"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`w-2 h-2 md:w-3 md:h-3 mx-1 rounded-full ${index === currentIndex ? "bg-amber-600" : "bg-amber-200"}`}
              aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
