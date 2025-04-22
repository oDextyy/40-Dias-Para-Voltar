"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  CheckCircle,
  Crown,
  ArrowRight,
  Sparkles,
  Star,
  BarChart,
  Award,
  Users,
  MessageSquare,
  Eye,
  TrendingUp,
} from "lucide-react"
import confetti from "canvas-confetti"

// Descrições de categoria simplificadas
const categoryDescriptions = {
  completude: {
    low: "Seu perfil está incompleto, o que reduz sua visibilidade para recrutadores.",
    medium: "Seu perfil tem informações básicas, mas faltam elementos importantes.",
    high: "Seu perfil está bem completo, mas ainda há espaço para melhorias.",
  },
  engajamento: {
    low: "Sua atividade no LinkedIn é mínima, tornando você quase invisível.",
    medium: "Você tem alguma atividade, mas não o suficiente para maximizar sua visibilidade.",
    high: "Seu nível de engajamento é bom, mas pode ser ainda melhor.",
  },
  rede: {
    low: "Sua rede é muito limitada, reduzindo suas oportunidades profissionais.",
    medium: "Sua rede tem um tamanho razoável, mas está abaixo do ideal.",
    high: "Você tem uma boa rede, mas técnicas avançadas podem expandir seu alcance.",
  },
  visibilidade: {
    low: "Seu perfil está quase invisível para recrutadores e oportunidades premium.",
    medium: "Você tem alguma visibilidade, mas está longe do potencial máximo.",
    high: "Sua visibilidade é boa, mas técnicas avançadas podem melhorá-la ainda mais.",
  },
  estrategia: {
    low: "Você não tem uma estratégia clara para o LinkedIn.",
    medium: "Você tem algumas ações estratégicas, mas falta consistência.",
    high: "Sua estratégia é boa, mas técnicas avançadas podem multiplicar seus resultados.",
  },
  premium: {
    low: "Você está perdendo recursos valiosos por não usar o LinkedIn Premium.",
    medium: "Você já experimentou o LinkedIn Premium, mas não está aproveitando todo seu potencial.",
    high: "Você conhece o valor do LinkedIn Premium, mas pode aprender a usá-lo sem custos.",
  },
}

// Benefícios do LinkedIn Premium com mais ênfase no acesso permanente
const premiumBenefits = [
  {
    title: "Acesso Premium Permanente",
    description: "Aprenda como obter o LinkedIn Premium de forma permanente sem pagar mensalidades",
    icon: <Crown className="h-5 w-5" />,
  },
  {
    title: "InMail direto para recrutadores",
    description: "Envie mensagens para pessoas fora da sua rede, incluindo recrutadores de elite",
    icon: <MessageSquare className="h-5 w-5" />,
  },
  {
    title: "Modo incógnito",
    description: "Navegue perfis sem deixar rastros, ideal para pesquisar concorrentes",
    icon: <Eye className="h-5 w-5" />,
  },
  {
    title: "Destaque entre candidatos",
    description: "Seu perfil aparece em destaque nas buscas de recrutadores",
    icon: <Star className="h-5 w-5" />,
  },
]

export function ResultsScreen({ results, onContinue }) {
  const [showConfetti, setShowConfetti] = useState(false)

  // Disparar confete quando o componente é montado
  useEffect(() => {
    if (results?.isEligible) {
      setShowConfetti(true)
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
    }
  }, [results?.isEligible])

  if (!results) return null

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="mb-12"
      >
        <Card className="bg-white dark:bg-gray-800/90 shadow-xl border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/10 dark:bg-indigo-500/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>

          <CardContent className="p-8 relative z-10">
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-4"
              >
                <Crown className="h-10 w-10 text-white" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2"
              >
                Parabéns!
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-xl text-gray-700 dark:text-gray-300"
              >
                Você é elegível para o LinkedIn Premium Permanente!
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Pontuação de Elegibilidade */}
              <Card className="bg-white/90 dark:bg-gray-800/80 shadow-lg border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm col-span-1">
                <CardContent className="p-6">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <div className="absolute inset-0 rounded-full bg-gray-100 dark:bg-gray-700"></div>
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="10"
                        className="dark:stroke-gray-600"
                      />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="10"
                        strokeDasharray="282.7"
                        strokeDashoffset={282.7 - (282.7 * results.eligibilityScore) / 100}
                        strokeLinecap="round"
                        initial={{ strokeDashoffset: 282.7 }}
                        animate={{ strokeDashoffset: 282.7 - (282.7 * results.eligibilityScore) / 100 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#2563EB" />
                          <stop offset="100%" stopColor="#4F46E5" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div>
                        <motion.div
                          className="text-3xl font-bold text-gray-900 dark:text-white"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
                        >
                          {results.eligibilityScore}%
                        </motion.div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Elegibilidade</div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-center text-gray-900 dark:text-white mb-2">
                    Você se Qualifica!
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-center text-sm">
                    Você atende aos critérios para nosso método exclusivo de acesso permanente ao LinkedIn Premium.
                  </p>
                </CardContent>
              </Card>

              {/* Pontuação Geral */}
              <Card className="bg-white/90 dark:bg-gray-800/80 shadow-lg border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm col-span-1">
                <CardContent className="p-6">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <div className="absolute inset-0 rounded-full bg-gray-100 dark:bg-gray-700"></div>
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="10"
                        className="dark:stroke-gray-600"
                      />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="url(#gradient2)"
                        strokeWidth="10"
                        strokeDasharray="282.7"
                        strokeDashoffset={282.7 - (282.7 * results.overallScore) / 100}
                        strokeLinecap="round"
                        initial={{ strokeDashoffset: 282.7 }}
                        animate={{ strokeDashoffset: 282.7 - (282.7 * results.overallScore) / 100 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      />
                      <defs>
                        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#3B82F6" />
                          <stop offset="100%" stopColor="#8B5CF6" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div>
                        <motion.div
                          className="text-3xl font-bold text-gray-900 dark:text-white"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
                        >
                          {results.overallScore}%
                        </motion.div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Pontuação</div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-center text-gray-900 dark:text-white mb-2">
                    Seu Perfil LinkedIn
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-center text-sm">
                    {results.overallScore < 40
                      ? "Seu perfil está praticamente invisível para recrutadores."
                      : results.overallScore < 70
                        ? "Seu perfil tem potencial, mas não está otimizado."
                        : "Seu perfil tem uma boa base, mas pode melhorar ainda mais."}
                  </p>
                </CardContent>
              </Card>

              {/* Benefícios do Premium */}
              <Card className="bg-white/90 dark:bg-gray-800/80 shadow-lg border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm col-span-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.05 }}
                      className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 p-2 rounded-xl shadow-sm"
                    >
                      <Crown className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">LinkedIn Premium</h3>
                      <p className="text-blue-600 dark:text-blue-400 text-xs">Acesso permanente</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {premiumBenefits.slice(0, 3).map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                        className="flex items-start gap-2"
                      >
                        <div className="bg-blue-100 dark:bg-blue-900/30 p-1 rounded-full text-blue-600 dark:text-blue-400 mt-0.5">
                          {benefit.icon}
                        </div>
                        <div>
                          <p className="text-gray-900 dark:text-white text-sm font-medium">{benefit.title}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Análise por Categoria */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Análise por Categoria</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results &&
                  Object.keys(results.categoryScores).map((category, index) => {
                    const score = results.categoryScores[category]
                    const percentage = (score / 4) * 100
                    const level = results.categoryLevels[category]
                    const isWeakest = category === results.weakestCategory
                    const isStrongest = category === results.strongestCategory

                    let categoryIcon
                    let categoryName

                    switch (category) {
                      case "completude":
                        categoryIcon = <Award className="h-4 w-4" />
                        categoryName = "Completude do Perfil"
                        break
                      case "engajamento":
                        categoryIcon = <MessageSquare className="h-4 w-4" />
                        categoryName = "Engajamento"
                        break
                      case "rede":
                        categoryIcon = <Users className="h-4 w-4" />
                        categoryName = "Rede de Contatos"
                        break
                      case "visibilidade":
                        categoryIcon = <Eye className="h-4 w-4" />
                        categoryName = "Visibilidade"
                        break
                      case "estrategia":
                        categoryIcon = <TrendingUp className="h-4 w-4" />
                        categoryName = "Estratégia"
                        break
                      case "premium":
                        categoryIcon = <Crown className="h-4 w-4" />
                        categoryName = "LinkedIn Premium"
                        break
                      default:
                        categoryIcon = <BarChart className="h-4 w-4" />
                        categoryName = category
                    }

                    return (
                      <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                        className="bg-white dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700/30 shadow-sm"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-2">
                            <div className="bg-blue-100 dark:bg-blue-900/30 p-1 rounded-full">{categoryIcon}</div>
                            <span className="text-gray-700 dark:text-gray-300 font-medium">{categoryName}</span>
                            {isWeakest && (
                              <motion.span
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2 + index * 0.1 + 0.3, type: "spring" }}
                                className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-500 text-xs px-2 py-0.5 rounded-full"
                              >
                                Precisa de atenção
                              </motion.span>
                            )}
                            {isStrongest && (
                              <motion.span
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2 + index * 0.1 + 0.3, type: "spring" }}
                                className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-500 text-xs px-2 py-0.5 rounded-full"
                              >
                                Ponto forte
                              </motion.span>
                            )}
                          </div>
                          <span className="text-gray-900 dark:text-white font-bold">{Math.round(percentage)}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full ${
                              percentage < 40 ? "bg-red-500" : percentage < 70 ? "bg-amber-500" : "bg-green-500"
                            }`}
                            initial={{ width: "0%" }}
                            animate={{ width: `${percentage}%` }}
                            transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                          />
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                          {categoryDescriptions[category][level]}
                        </p>
                      </motion.div>
                    )
                  })}
              </div>
            </div>

            {/* Próximos Passos */}
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800/30 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.05 }}
                  className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 p-2 rounded-xl shadow-sm"
                >
                  <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </motion.div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Próximos Passos</h3>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Parabéns por se qualificar para o LinkedIn Premium Permanente! Agora você pode:
              </p>

              <div className="space-y-3 mb-6">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3, duration: 0.3 }}
                  className="flex items-start gap-3"
                >
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-1 rounded-full text-blue-600 dark:text-blue-400 mt-0.5">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Escolher um pacote personalizado para obter acesso permanente ao LinkedIn Premium
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4, duration: 0.3 }}
                  className="flex items-start gap-3"
                >
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-1 rounded-full text-blue-600 dark:text-blue-400 mt-0.5">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Receber recomendações personalizadas para otimizar seu perfil
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5, duration: 0.3 }}
                  className="flex items-start gap-3"
                >
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-1 rounded-full text-blue-600 dark:text-blue-400 mt-0.5">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Aprender estratégias avançadas para maximizar sua visibilidade e oportunidades
                  </span>
                </motion.div>
              </div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="text-center">
                <Button
                  onClick={onContinue}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg"
                >
                  Ver Pacotes Personalizados
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
