"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { CheckCircle, Crown, ArrowRight, Sparkles, Star } from "lucide-react"
import confetti from "canvas-confetti"
import { useEffect } from "react"

export function CongratulationsMessage({ quizResults, onContinue }) {
  // Disparar efeito de confete quando o componente é montado
  useEffect(() => {
    const duration = 3 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min
    }

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)

      // Como as partículas caem, começamos um pouco mais alto que o aleatório
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    }, 250)

    return () => clearInterval(interval)
  }, [])

  // Calcular pontuação de elegibilidade com base nos resultados do quiz
  const eligibilityScore = Math.min(95, quizResults?.overallScore + 20)

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="max-w-3xl mx-auto"
    >
      <Card className="bg-white dark:bg-gray-800/90 shadow-xl border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/10 dark:bg-indigo-500/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>

        <CardHeader className="text-center relative z-10">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-4"
          >
            <Crown className="h-10 w-10 text-white" />
          </motion.div>

          <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Parabéns!
          </CardTitle>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-xl text-gray-700 dark:text-gray-300 mt-2"
          >
            Você é elegível para o LinkedIn Premium!
          </motion.div>
        </CardHeader>

        <CardContent className="relative z-10">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800/30 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 dark:bg-blue-800/50 p-2 rounded-full">
                <Star className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Sua Pontuação de Elegibilidade</h3>
            </div>

            <div className="flex items-center justify-center mb-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7, type: "spring" }}
                className="relative"
              >
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white text-4xl font-bold">
                  {eligibilityScore}%
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute -top-2 -right-2"
                >
                  <Sparkles className="h-6 w-6 text-yellow-400" />
                </motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute -bottom-2 -left-2"
                >
                  <Sparkles className="h-6 w-6 text-yellow-400" />
                </motion.div>
              </motion.div>
            </div>

            <p className="text-center text-gray-700 dark:text-gray-300">
              Com base na análise do seu perfil, você se qualifica para nosso programa exclusivo de acesso ao LinkedIn
              Premium.
            </p>
          </div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex items-start gap-3"
            >
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Acesso Premium Permanente</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Você se qualifica para nosso método de obter acesso permanente ao LinkedIn Premium sem mensalidades.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="flex items-start gap-3"
            >
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Aprimoramento de Perfil</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Identificamos áreas específicas onde seu perfil pode ser otimizado para máxima visibilidade.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="flex items-start gap-3"
            >
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Soluções Personalizadas</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Você receberá recomendações personalizadas com base nas necessidades específicas do seu perfil.
                </p>
              </div>
            </motion.div>
          </div>
        </CardContent>

        <CardFooter className="flex justify-center pb-6 relative z-10">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={onContinue}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8"
              size="lg"
            >
              Ver Sua Solução Premium
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
