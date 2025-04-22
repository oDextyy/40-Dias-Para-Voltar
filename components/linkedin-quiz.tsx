"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  BarChart,
  Users,
  MessageSquare,
  Search,
  Award,
  Linkedin,
  RefreshCw,
  ThumbsUp,
  Eye,
  ArrowRight,
} from "lucide-react"

// Quiz questions and options
const quizQuestions = [
  {
    id: 1,
    question: "Qual é o nível de preenchimento do seu perfil no LinkedIn?",
    options: [
      { id: "a", text: "Básico (apenas informações essenciais)", score: 1 },
      { id: "b", text: "Intermediário (com descrição e experiências)", score: 2 },
      { id: "c", text: "Completo (com recomendações e conquistas)", score: 3 },
      { id: "d", text: "Perfil All-Star (100% completo segundo o LinkedIn)", score: 4 },
    ],
    icon: <Linkedin className="h-6 w-6" />,
    category: "completeness",
  },
  {
    id: 2,
    question: "Com que frequência você publica ou compartilha conteúdo no LinkedIn?",
    options: [
      { id: "a", text: "Raramente ou nunca", score: 1 },
      { id: "b", text: "Algumas vezes por mês", score: 2 },
      { id: "c", text: "Semanalmente", score: 3 },
      { id: "d", text: "Várias vezes por semana", score: 4 },
    ],
    icon: <MessageSquare className="h-6 w-6" />,
    category: "engagement",
  },
  {
    id: 3,
    question: "Quantas conexões você tem no LinkedIn?",
    options: [
      { id: "a", text: "Menos de 100", score: 1 },
      { id: "b", text: "Entre 100 e 500", score: 2 },
      { id: "c", text: "Entre 500 e 1000", score: 3 },
      { id: "d", text: "Mais de 1000", score: 4 },
    ],
    icon: <Users className="h-6 w-6" />,
    category: "network",
  },
  {
    id: 4,
    question: "Você utiliza palavras-chave relevantes para sua área no seu perfil?",
    options: [
      { id: "a", text: "Não, nunca pensei nisso", score: 1 },
      { id: "b", text: "Algumas poucas palavras-chave", score: 2 },
      { id: "c", text: "Sim, em partes estratégicas do perfil", score: 3 },
      { id: "d", text: "Sim, otimizei todo o perfil com palavras-chave", score: 4 },
    ],
    icon: <Search className="h-6 w-6" />,
    category: "visibility",
  },
  {
    id: 5,
    question: "Você recebe mensagens de recrutadores no LinkedIn?",
    options: [
      { id: "a", text: "Nunca ou raramente", score: 1 },
      { id: "b", text: "Ocasionalmente (algumas por mês)", score: 2 },
      { id: "c", text: "Frequentemente (semanalmente)", score: 3 },
      { id: "d", text: "Constantemente (várias por semana)", score: 4 },
    ],
    icon: <Eye className="h-6 w-6" />,
    category: "visibility",
  },
  {
    id: 6,
    question: "Você interage com o conteúdo de outras pessoas (curtidas, comentários)?",
    options: [
      { id: "a", text: "Raramente ou nunca", score: 1 },
      { id: "b", text: "Ocasionalmente", score: 2 },
      { id: "c", text: "Frequentemente", score: 3 },
      { id: "d", text: "Diariamente, como parte da minha estratégia", score: 4 },
    ],
    icon: <ThumbsUp className="h-6 w-6" />,
    category: "engagement",
  },
  {
    id: 7,
    question: "Você tem recomendações no seu perfil?",
    options: [
      { id: "a", text: "Nenhuma", score: 1 },
      { id: "b", text: "1-2 recomendações", score: 2 },
      { id: "c", text: "3-5 recomendações", score: 3 },
      { id: "d", text: "Mais de 5 recomendações", score: 4 },
    ],
    icon: <Award className="h-6 w-6" />,
    category: "completeness",
  },
  {
    id: 8,
    question: "Você acompanha as estatísticas do seu perfil e publicações?",
    options: [
      { id: "a", text: "Não sabia que isso era possível", score: 1 },
      { id: "b", text: "Raramente verifico", score: 2 },
      { id: "c", text: "Verifico ocasionalmente", score: 3 },
      { id: "d", text: "Monitoro regularmente e ajusto minha estratégia", score: 4 },
    ],
    icon: <BarChart className="h-6 w-6" />,
    category: "strategy",
  },
]

// Category descriptions for results
const categoryDescriptions = {
  completeness: {
    low: "Seu perfil está incompleto, o que reduz drasticamente sua visibilidade.",
    medium: "Seu perfil tem informações básicas, mas faltam elementos importantes.",
    high: "Seu perfil está bem completo, mas ainda há espaço para otimização.",
  },
  engagement: {
    low: "Sua atividade no LinkedIn é mínima, tornando você praticamente invisível para o algoritmo.",
    medium: "Você tem alguma atividade, mas não o suficiente para maximizar sua visibilidade.",
    high: "Seu nível de engajamento é bom, mas estratégias avançadas podem amplificar seus resultados.",
  },
  network: {
    low: "Sua rede é muito limitada, reduzindo drasticamente suas oportunidades.",
    medium: "Sua rede tem um tamanho razoável, mas está abaixo do ideal para maximizar oportunidades.",
    high: "Você tem uma boa rede, mas técnicas avançadas podem expandir seu alcance estrategicamente.",
  },
  visibility: {
    low: "Seu perfil está praticamente invisível para recrutadores e oportunidades.",
    medium: "Você tem alguma visibilidade, mas está longe do potencial máximo.",
    high: "Sua visibilidade é boa, mas técnicas avançadas podem colocá-lo entre os perfis mais vistos.",
  },
  strategy: {
    low: "Você não tem uma estratégia clara para o LinkedIn, desperdiçando seu potencial.",
    medium: "Você tem algumas ações estratégicas, mas falta uma abordagem sistemática.",
    high: "Sua estratégia é boa, mas técnicas avançadas podem multiplicar seus resultados.",
  },
}

// Improvement suggestions
const improvementSuggestions = {
  completeness: [
    "Adicione uma foto profissional (aumenta visibilidade em 14x)",
    "Crie um headline otimizado com palavras-chave estratégicas",
    "Inclua todas as experiências profissionais com descrições detalhadas",
    "Solicite recomendações de colegas e gestores",
  ],
  engagement: [
    "Estabeleça uma rotina de publicações semanais",
    "Comente em publicações de influenciadores da sua área",
    "Participe ativamente de grupos relevantes",
    "Compartilhe conteúdo de valor com sua perspectiva única",
  ],
  network: [
    "Conecte-se estrategicamente com recrutadores da sua área",
    "Expanda sua rede com profissionais de empresas-alvo",
    "Utilize técnicas avançadas de networking automatizado",
    "Implemente a estratégia de conexões de 2º grau",
  ],
  visibility: [
    "Otimize seu perfil com palavras-chave que recrutadores buscam",
    "Ative o modo 'Open to Work' de forma estratégica",
    "Utilize técnicas avançadas para aparecer nas buscas",
    "Implemente a estratégia de visibilidade cruzada",
  ],
  strategy: [
    "Defina objetivos claros para sua presença no LinkedIn",
    "Analise métricas semanalmente para ajustar sua estratégia",
    "Implemente um calendário de conteúdo estratégico",
    "Utilize ferramentas avançadas para otimizar resultados",
  ],
}

// Main Quiz Component
export function LinkedInQuiz({ onComplete }: { onComplete: (results: any) => void }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [results, setResults] = useState<any>(null)
  const [showingResults, setShowingResults] = useState(false)
  const [loadingResults, setLoadingResults] = useState(false)

  // Calculate progress percentage
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  // Handle option selection
  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId)
    setAnswers({ ...answers, [quizQuestions[currentQuestion].id]: optionId })
  }

  // Navigate to next question
  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedOption(answers[quizQuestions[currentQuestion + 1]?.id] || null)
    } else {
      setLoadingResults(true)
      setTimeout(() => {
        calculateResults()
        setLoadingResults(false)
        setQuizCompleted(true)
        setShowingResults(true)
      }, 1500)
    }
  }

  // Navigate to previous question
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedOption(answers[quizQuestions[currentQuestion - 1].id] || null)
    }
  }

  // Calculate quiz results
  const calculateResults = () => {
    const categories: Record<string, number[]> = {
      completeness: [],
      engagement: [],
      network: [],
      visibility: [],
      strategy: [],
    }

    // Group scores by category
    quizQuestions.forEach((question) => {
      const answer = answers[question.id]
      if (answer) {
        const option = question.options.find((opt) => opt.id === answer)
        if (option && question.category) {
          categories[question.category].push(option.score)
        }
      }
    })

    // Calculate average score for each category
    const categoryScores: Record<string, number> = {}
    let totalScore = 0
    let totalQuestions = 0

    Object.keys(categories).forEach((category) => {
      const scores = categories[category]
      if (scores.length > 0) {
        const sum = scores.reduce((a, b) => a + b, 0)
        const average = sum / scores.length
        categoryScores[category] = average
        totalScore += sum
        totalQuestions += scores.length
      } else {
        categoryScores[category] = 0
      }
    })

    // Calculate overall score
    const overallScore = totalQuestions > 0 ? (totalScore / (totalQuestions * 4)) * 100 : 0

    // Determine weakest and strongest categories
    let weakestCategory = Object.keys(categoryScores)[0]
    let strongestCategory = Object.keys(categoryScores)[0]

    Object.keys(categoryScores).forEach((category) => {
      if (categoryScores[category] < categoryScores[weakestCategory]) {
        weakestCategory = category
      }
      if (categoryScores[category] > categoryScores[strongestCategory]) {
        strongestCategory = category
      }
    })

    // Generate improvement suggestions
    const suggestions: string[] = []
    Object.keys(categoryScores).forEach((category) => {
      const score = categoryScores[category]
      if (score < 2.5) {
        // Add 2 suggestions for weak categories
        suggestions.push(...improvementSuggestions[category].slice(0, 2))
      }
    })

    // Add 2 more suggestions from the weakest category
    suggestions.push(...improvementSuggestions[weakestCategory].slice(0, 2))

    // Remove duplicates
    const uniqueSuggestions = [...new Set(suggestions)]

    // Determine level for each category
    const categoryLevels: Record<string, string> = {}
    Object.keys(categoryScores).forEach((category) => {
      const score = categoryScores[category]
      if (score < 2) {
        categoryLevels[category] = "low"
      } else if (score < 3) {
        categoryLevels[category] = "medium"
      } else {
        categoryLevels[category] = "high"
      }
    })

    // Prepare final results
    const finalResults = {
      overallScore: Math.round(overallScore),
      categoryScores,
      categoryLevels,
      weakestCategory,
      strongestCategory,
      suggestions: uniqueSuggestions.slice(0, 4), // Limit to 4 suggestions
    }

    setResults(finalResults)
    return finalResults
  }

  // Handle quiz completion
  const handleComplete = () => {
    if (onComplete && results) {
      onComplete(results)
    }
  }

  // Restart quiz
  const handleRestart = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setSelectedOption(null)
    setQuizCompleted(false)
    setShowingResults(false)
    setResults(null)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-950/30 p-4">
      <div className="w-full max-w-3xl">
        <AnimatePresence mode="wait">
          {!quizCompleted ? (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              {/* Quiz Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <Linkedin className="h-6 w-6" />
                    </div>
                    <h2 className="text-xl font-bold">Análise de Perfil LinkedIn</h2>
                  </div>
                  <div className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                    {currentQuestion + 1} de {quizQuestions.length}
                  </div>
                </div>
                <Progress value={progress} className="h-2 bg-white/20" indicatorClassName="bg-white" />
              </div>

              {/* Quiz Content */}
              <div className="p-6">
                {loadingResults ? (
                  <div className="py-12 flex flex-col items-center justify-center">
                    <div className="relative w-20 h-20 mb-4">
                      <motion.div
                        className="absolute inset-0 border-4 border-blue-200 dark:border-blue-900 rounded-full"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0.5 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                      />
                      <motion.div
                        className="absolute inset-0 border-4 border-t-blue-600 border-r-transparent border-b-transparent border-l-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Analisando suas respostas...
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Estamos calculando seu perfil de visibilidade no LinkedIn
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg text-blue-600 dark:text-blue-400">
                          {quizQuestions[currentQuestion].icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {quizQuestions[currentQuestion].question}
                        </h3>
                      </div>

                      <div className="space-y-3">
                        {quizQuestions[currentQuestion].options.map((option) => (
                          <motion.div
                            key={option.id}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                              selectedOption === option.id
                                ? "border-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:border-blue-500"
                                : "border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700"
                            }`}
                            onClick={() => handleOptionSelect(option.id)}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-5 h-5 rounded-full flex items-center justify-center border-2 ${
                                  selectedOption === option.id
                                    ? "border-blue-600 bg-blue-600 dark:border-blue-500 dark:bg-blue-500"
                                    : "border-gray-300 dark:border-gray-600"
                                }`}
                              >
                                {selectedOption === option.id && (
                                  <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-2 h-2 bg-white rounded-full"
                                  />
                                )}
                              </div>
                              <span
                                className={`text-lg ${
                                  selectedOption === option.id
                                    ? "text-gray-900 dark:text-white font-medium"
                                    : "text-gray-700 dark:text-gray-300"
                                }`}
                              >
                                {option.text}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button
                        variant="outline"
                        onClick={handlePrevious}
                        disabled={currentQuestion === 0}
                        className="flex items-center gap-2"
                      >
                        <ChevronLeft className="h-4 w-4" />
                        Anterior
                      </Button>
                      <Button
                        onClick={handleNext}
                        disabled={!selectedOption}
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white flex items-center gap-2"
                      >
                        {currentQuestion < quizQuestions.length - 1 ? (
                          <>
                            Próxima
                            <ChevronRight className="h-4 w-4" />
                          </>
                        ) : (
                          <>
                            Ver Resultados
                            <BarChart className="h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              {/* Results Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <BarChart className="h-6 w-6" />
                  </div>
                  <h2 className="text-xl font-bold">Resultado da Sua Análise</h2>
                </div>
                <p className="text-white/80">
                  Baseado nas suas respostas, identificamos oportunidades para otimizar seu perfil
                </p>
              </div>

              {/* Results Content */}
              <div className="p-6">
                {/* Overall Score */}
                <div className="mb-8 text-center">
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
                        strokeDashoffset={282.7 - (282.7 * results?.overallScore) / 100}
                        strokeLinecap="round"
                        initial={{ strokeDashoffset: 282.7 }}
                        animate={{ strokeDashoffset: 282.7 - (282.7 * results?.overallScore) / 100 }}
                        transition={{ duration: 1, delay: 0.5 }}
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
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.8 }}
                        >
                          {results?.overallScore}%
                        </motion.div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Pontuação</div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Seu Perfil LinkedIn Está{" "}
                    {results?.overallScore < 40
                      ? "Invisível"
                      : results?.overallScore < 70
                        ? "Subotimizado"
                        : "Parcialmente Otimizado"}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
                    {results?.overallScore < 40
                      ? "Seu perfil está praticamente invisível para recrutadores. Você está perdendo oportunidades valiosas."
                      : results?.overallScore < 70
                        ? "Seu perfil tem potencial, mas não está otimizado para atrair as melhores oportunidades."
                        : "Seu perfil tem uma boa base, mas técnicas avançadas podem multiplicar seus resultados."}
                  </p>
                </div>

                {/* Category Scores */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Análise por Categoria</h3>
                  <div className="space-y-4">
                    {results &&
                      Object.keys(results.categoryScores).map((category) => {
                        const score = results.categoryScores[category]
                        const percentage = (score / 4) * 100
                        const level = results.categoryLevels[category]

                        return (
                          <div key={category} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-2">
                                <span className="capitalize text-gray-700 dark:text-gray-300 font-medium">
                                  {category === "completeness"
                                    ? "Completude do Perfil"
                                    : category === "engagement"
                                      ? "Engajamento"
                                      : category === "network"
                                        ? "Rede de Contatos"
                                        : category === "visibility"
                                          ? "Visibilidade"
                                          : "Estratégia"}
                                </span>
                                {category === results.weakestCategory && (
                                  <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-500 text-xs px-2 py-0.5 rounded-full">
                                    Precisa de atenção
                                  </span>
                                )}
                                {category === results.strongestCategory && (
                                  <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-500 text-xs px-2 py-0.5 rounded-full">
                                    Ponto forte
                                  </span>
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
                                transition={{ duration: 0.8, delay: 0.2 }}
                              />
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {categoryDescriptions[category][level]}
                            </p>
                          </div>
                        )
                      })}
                  </div>
                </div>

                {/* Improvement Suggestions */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    Recomendações para Otimização
                  </h3>
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 rounded-xl p-4">
                    <div className="space-y-3">
                      {results?.suggestions.map((suggestion, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="bg-blue-100 dark:bg-blue-800/30 p-1 rounded-full text-blue-600 dark:text-blue-400 mt-0.5">
                            <CheckCircle className="h-4 w-4" />
                          </div>
                          <span className="text-gray-700 dark:text-gray-300">{suggestion}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={handleRestart} variant="outline" className="flex items-center gap-2">
                    <RefreshCw className="h-4 w-4" />
                    Refazer Análise
                  </Button>
                  <Button
                    onClick={handleComplete}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white flex items-center gap-2"
                  >
                    Ver Soluções Recomendadas
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
