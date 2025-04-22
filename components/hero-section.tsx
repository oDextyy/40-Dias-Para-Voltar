"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, ArrowRight, Heart, Sparkles } from "lucide-react"
import TypewriterEffect from "./typewriter-effect"
import { cn } from "@/lib/utils"

interface HeroSectionProps {
  quizResult?: any
}

export default function HeroSection({ quizResult }: HeroSectionProps) {
  const [mounted, setMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setMounted(true)

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  if (!mounted) return null

  // Personalizar a mensagem com base no resultado do quiz
  const getPersonalizedMessage = () => {
    if (!quizResult) return ""

    switch (quizResult.title) {
      case "Caminhante Fiel":
        return "Mesmo com uma fé madura, você está em um momento de maturidade espiritual e pode experimentar uma intimidade ainda mais profunda com Deus através deste devocional."
      case "Buscador Constante":
        return "Sua busca por crescimento espiritual mostra seu coração genuíno. Você está em um momento de crescimento espiritual e este devocional irá guiá-lo para aprofundar ainda mais sua jornada."
      case "Em Busca de Renovação":
        return "É hora de reacender a chama da sua fé. Você está em um momento de renovação espiritual e este devocional foi criado especialmente para restaurar a intimidade que você sente que está faltando."
      case "Precisando de Restauração":
        return "Deus nunca deixou de te amar. Você está em um momento de restauração profunda e este devocional será seu guia para reconectar-se com Ele e restaurar completamente sua vida espiritual."
      default:
        return "Este devocional foi criado para transformar sua vida espiritual, independentemente de onde você esteja em sua jornada com Deus."
    }
  }

  const personalizedMessage = getPersonalizedMessage()

  // Link para o plano recomendado (Caminho da Renovação)
  const recommendedPlanLink = "https://pay.kiwify.com.br/iIPDiAU"

  const handleScrollToOffer = () => {
    const element = document.getElementById("oferta")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleScrollToContent = () => {
    const element = document.getElementById("dor")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Partículas de luz flutuantes
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 10 + 5,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }))

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 pt-28 md:pt-20"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/images/jesus-light.jpeg')] bg-cover bg-center opacity-20 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-amber-900/30 to-slate-900/30 z-0"></div>

      {/* Partículas de luz flutuantes */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-amber-300 opacity-40 z-0 blur-sm"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
          }}
        />
      ))}

      {/* Raios de luz */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[200%] h-[200%] bg-gradient-radial from-amber-300/20 to-transparent"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Personalized message based on quiz result */}
          {personalizedMessage && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 bg-gradient-to-r from-amber-800/90 to-amber-700/90 text-white p-6 rounded-lg shadow-xl border border-amber-500/30 backdrop-blur-sm"
            >
              <div className="flex items-center justify-center mb-3">
                <Heart className="h-5 w-5 text-amber-300 mr-2" />
                <span className="text-amber-300 font-medium">Mensagem Personalizada</span>
              </div>
              <p className="text-base md:text-lg italic">{personalizedMessage}</p>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative mb-6"
          >
            {/* Efeito de brilho atrás do título */}
            <div className="absolute inset-0 bg-gradient-radial from-amber-500/20 to-transparent blur-xl rounded-full transform scale-150"></div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-2 drop-shadow-lg relative">
              <span className="relative inline-block">
                <span className="relative z-10">40 Dias Pra Voltar</span>
                <motion.span
                  className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-amber-300/20 blur-md rounded-lg z-0"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </span>
            </h1>

            <motion.div
              className="absolute -right-4 -top-4 text-amber-300"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              }}
            >
              <Sparkles className="h-8 w-8" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-8 text-lg sm:text-xl md:text-2xl text-amber-100"
          >
            <TypewriterEffect
              text="Uma jornada de redescoberta e intimidade com Deus"
              delay={50}
              className="font-serif italic"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-base md:text-xl text-white mb-10 max-w-3xl mx-auto px-2 leading-relaxed"
          >
            <span className="text-amber-300 font-semibold">Transforme sua vida espiritual</span> através de 40, 80 ou
            120 dias de devocionais profundos, orações guiadas e reflexões poderosas que{" "}
            <span className="italic">restaurarão sua conexão com o Pai</span> e despertarão uma nova dimensão de fé em
            seu coração.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center px-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <Button
                onClick={handleScrollToOffer}
                className={cn(
                  "relative bg-gradient-to-br from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600",
                  "text-white px-6 py-6 sm:px-8 sm:py-7 rounded-full text-base sm:text-lg font-medium",
                  "transition-all duration-300 shadow-lg hover:shadow-amber-500/20",
                  "flex items-center justify-center gap-2 border border-amber-500/20",
                )}
              >
                <Sparkles className="h-5 w-5 text-amber-300" />
                <span>Quero Transformar Minha Vida</span>
                <ArrowRight className="ml-1 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Indicador de benefícios */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-amber-200"
          >
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-amber-400 mr-2"></div>
              <span>Intimidade Restaurada</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-amber-400 mr-2"></div>
              <span>Orações Poderosas</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-amber-400 mr-2"></div>
              <span>Transformação Diária</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={handleScrollToContent}
            className="text-white flex flex-col items-center animate-bounce"
            aria-label="Rolar para baixo"
          >
            <span className="text-sm mb-2 bg-amber-800/70 px-3 py-1 rounded-full">Descubra Mais</span>
            <ChevronDown className="h-6 w-6" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
