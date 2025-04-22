"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  ChevronRight,
  ChevronLeft,
  BarChart,
  Users,
  MessageSquare,
  Award,
  Linkedin,
  ThumbsUp,
  Eye,
  FileText,
  Camera,
  Briefcase,
  Crown,
  Lightbulb,
} from "lucide-react"

// Perguntas do quiz com linguagem simplificada
const quizQuestions = [
  {
    id: 1,
    question: "Como está a foto do seu perfil no LinkedIn?",
    options: [
      { id: "a", text: "Não tenho foto", score: 1 },
      { id: "b", text: "Tenho uma foto casual", score: 2 },
      { id: "c", text: "Tenho uma foto profissional", score: 3 },
      { id: "d", text: "Tenho uma foto profissional recente e de alta qualidade", score: 4 },
    ],
    icon: <Camera className="h-6 w-6" />,
    category: "completude",
    tip: "Uma boa foto de perfil aumenta em 14x suas chances de ser visto por recrutadores.",
  },
  {
    id: 2,
    question: "O título abaixo do seu nome descreve bem o que você faz?",
    options: [
      { id: "a", text: "Só coloquei meu cargo atual", score: 1 },
      { id: "b", text: "Tenho cargo e empresa apenas", score: 2 },
      { id: "c", text: "Incluí algumas palavras-chave importantes", score: 3 },
      { id: "d", text: "Meu título é completo e mostra meu valor profissional", score: 4 },
    ],
    icon: <FileText className="h-6 w-6" />,
    category: "completude",
    tip: "O título é a segunda coisa mais vista depois da sua foto. Use palavras-chave que recrutadores buscam.",
  },
  {
    id: 3,
    question: "Com que frequência você publica conteúdo no LinkedIn?",
    options: [
      { id: "a", text: "Nunca publico nada", score: 1 },
      { id: "b", text: "Raramente (uma vez por mês ou menos)", score: 2 },
      { id: "c", text: "Às vezes (semanalmente)", score: 3 },
      { id: "d", text: "Regularmente (várias vezes por semana)", score: 4 },
    ],
    icon: <MessageSquare className="h-6 w-6" />,
    category: "engajamento",
    tip: "Perfis ativos aparecem até 5x mais nos resultados de busca.",
  },
  {
    id: 4,
    question: "Quantas conexões você tem no LinkedIn?",
    options: [
      { id: "a", text: "Menos de 100", score: 1 },
      { id: "b", text: "Entre 100 e 300", score: 2 },
      { id: "c", text: "Entre 300 e 500", score: 3 },
      { id: "d", text: "Mais de 500", score: 4 },
    ],
    icon: <Users className="h-6 w-6" />,
    category: "rede",
    tip: "Ter mais de 500 conexões aumenta sua credibilidade e amplia seu alcance.",
  },
  {
    id: 5,
    question: "Você interage com o conteúdo de outras pessoas?",
    options: [
      { id: "a", text: "Raramente interajo", score: 1 },
      { id: "b", text: "Às vezes curto alguns posts", score: 2 },
      { id: "c", text: "Curto e comento regularmente", score: 3 },
      { id: "d", text: "Interajo diariamente com comentários relevantes", score: 4 },
    ],
    icon: <ThumbsUp className="h-6 w-6" />,
    category: "engajamento",
    tip: "Comentários relevantes geram 8x mais visibilidade que apenas curtidas.",
  },
  {
    id: 6,
    question: "Como você descreve suas experiências profissionais?",
    options: [
      { id: "a", text: "Apenas listei empresas e cargos", score: 1 },
      { id: "b", text: "Adicionei descrições básicas", score: 2 },
      { id: "c", text: "Descrevi responsabilidades e algumas conquistas", score: 3 },
      { id: "d", text: "Detalhei conquistas com números e resultados", score: 4 },
    ],
    icon: <Briefcase className="h-6 w-6" />,
    category: "completude",
    tip: "Experiências com resultados quantificáveis aumentam em 40% suas chances de ser contatado.",
  },
  {
    id: 7,
    question: "Você recebe mensagens de recrutadores?",
    options: [
      { id: "a", text: "Nunca recebi", score: 1 },
      { id: "b", text: "Raramente (uma ou duas vezes por ano)", score: 2 },
      { id: "c", text: "Às vezes (algumas vezes por mês)", score: 3 },
      { id: "d", text: "Frequentemente (várias vezes por semana)", score: 4 },
    ],
    icon: <Eye className="h-6 w-6" />,
    category: "visibilidade",
    tip: "Perfis otimizados recebem até 5x mais mensagens de recrutadores.",
  },
  {
    id: 8,
    question: "Você tem recomendações no seu perfil?",
    options: [
      { id: "a", text: "Não tenho nenhuma", score: 1 },
      { id: "b", text: "Tenho 1-2 recomendações", score: 2 },
      { id: "c", text: "Tenho 3-5 recomendações", score: 3 },
      { id: "d", text: "Tenho mais de 5 recomendações", score: 4 },
    ],
    icon: <Award className="h-6 w-6" />,
    category: "completude",
    tip: "Recomendações aumentam sua credibilidade e são um diferencial para recrutadores.",
  },
  {
    id: 9,
    question: "Você busca novas conexões de forma estratégica?",
    options: [
      { id: "a", text: "Apenas aceito conexões que recebo", score: 1 },
      { id: "b", text: "Às vezes busco novas conexões", score: 2 },
      { id: "c", text: "Regularmente me conecto com pessoas estratégicas", score: 3 },
      { id: "d", text: "Tenho uma estratégia definida de networking", score: 4 },
    ],
    icon: <Users className="h-6 w-6" />,
    category: "estrategia",
    tip: "Networking estratégico é responsável por 85% das oportunidades de carreira.",
  },
  {
    id: 10,
    question: "Você já usou o LinkedIn Premium?",
    options: [
      { id: "a", text: "Nunca usei", score: 1 },
      { id: "b", text: "Usei apenas o período gratuito", score: 2 },
      { id: "c", text: "Já paguei por alguns meses", score: 3 },
      { id: "d", text: "Uso atualmente", score: 4 },
    ],
    icon: <Crown className="h-6 w-6" />,
    category: "premium",
    tip: "O LinkedIn Premium oferece recursos que podem aumentar sua visibilidade em até 300%.",
  },
]

// Componente de dica flutuante com animação
const FloatingTip = ({ tip }: { tip: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="mt-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 p-3 rounded-lg text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2 shadow-sm"
    >
      <Lightbulb className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
      <span>{tip}</span>
    </motion.div>
  )
}

export function ProfileQuiz({ onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [results, setResults] = useState<any>(null)
  const [loadingResults, setLoadingResults] = useState(false)
  const [showTip, setShowTip] = useState(false)
  const [animateBackground, setAnimateBackground] = useState(false)

  // Efeito para animar o fundo quando o quiz é concluído
  useEffect(() => {
    if (quizCompleted) {
      setAnimateBackground(true)
    }
  }, [quizCompleted])

  // Calcular porcentagem de progresso
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  // Lidar com seleção de opção
  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId)
    setAnswers({ ...answers, [quizQuestions[currentQuestion].id]: optionId })
    setShowTip(true)
  }

  // Navegar para a próxima pergunta
  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedOption(answers[quizQuestions[currentQuestion + 1]?.id] || null)
      setShowTip(false)
    } else {
      setLoadingResults(true)
      setTimeout(() => {
        const results = calculateResults()
        setResults(results)
        setLoadingResults(false)
        setQuizCompleted(true)
        onComplete(results)
      }, 1500)
    }
  }

  // Navegar para a pergunta anterior
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedOption(answers[quizQuestions[currentQuestion - 1].id] || null)
      setShowTip(false)
    }
  }

  // Calcular resultados com recomendações personalizadas aprimoradas
  const calculateResults = () => {
    const categories: Record<string, number[]> = {
      completude: [],
      engajamento: [],
      rede: [],
      visibilidade: [],
      estrategia: [],
      premium: [],
    }

    // Agrupar pontuações por categoria
    quizQuestions.forEach((question) => {
      const answer = answers[question.id]
      if (answer) {
        const option = question.options.find((opt) => opt.id === answer)
        if (option && question.category) {
          categories[question.category].push(option.score)
        }
      }
    })

    // Calcular pontuação média para cada categoria
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

    // Calcular pontuação geral
    const overallScore = totalQuestions > 0 ? (totalScore / (totalQuestions * 4)) * 100 : 0

    // Determinar categorias mais fracas e mais fortes
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

    // Determinar nível para cada categoria
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

    // Calcular pontuação de elegibilidade
    // Sempre elegível, mas a pontuação varia
    const eligibilityScore = Math.min(95, Math.round(overallScore) + 15)

    // Preparar resultados finais
    const finalResults = {
      overallScore: Math.round(overallScore),
      eligibilityScore,
      categoryScores,
      categoryLevels,
      weakestCategory,
      strongestCategory,
      isEligible: true, // Sempre elegível para o LinkedIn Premium
    }

    return finalResults
  }

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-all duration-700 ${
        animateBackground
          ? "bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-950/40"
          : "bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-950/30"
      } p-4 relative overflow-hidden`}
    >
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-indigo-400/10 dark:bg-indigo-500/10 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>

      <div className="w-full max-w-3xl relative z-10">
        <AnimatePresence mode="wait">
          {!quizCompleted ? (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              {/* Cabeçalho do Quiz */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white relative overflow-hidden">
                {/* Fundo animado */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "linear" }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <motion.div whileHover={{ rotate: 10 }} className="bg-white/20 p-2 rounded-lg">
                        <Linkedin className="h-6 w-6" />
                      </motion.div>
                      <h2 className="text-xl font-bold">Análise de Perfil LinkedIn</h2>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full"
                    >
                      {currentQuestion + 1} de {quizQuestions.length}
                    </motion.div>
                  </div>
                  <Progress value={progress} className="h-2 bg-white/20" indicatorClassName="bg-white" />
                </div>
              </div>

              {/* Conteúdo do Quiz */}
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

                    {/* Animação de carregamento */}
                    <motion.div className="mt-6 h-1 w-48 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      />
                    </motion.div>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div
                          whileHover={{ rotate: 10, scale: 1.05 }}
                          className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg text-blue-600 dark:text-blue-400"
                        >
                          {quizQuestions[currentQuestion].icon}
                        </motion.div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {quizQuestions[currentQuestion].question}
                        </h3>
                      </div>

                      <div className="space-y-3">
                        {quizQuestions[currentQuestion].options.map((option) => (
                          <motion.div
                            key={option.id}
                            whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)" }}
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

                      <AnimatePresence>
                        {showTip && selectedOption && <FloatingTip tip={quizQuestions[currentQuestion].tip} />}
                      </AnimatePresence>
                    </div>

                    <div className="flex justify-between">
                      <Button
                        variant="outline"
                        onClick={handlePrevious}
                        disabled={currentQuestion === 0}
                        className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <ChevronLeft className="h-4 w-4" />
                        Anterior
                      </Button>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          onClick={handleNext}
                          disabled={!selectedOption}
                          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
                        >
                          {currentQuestion < quizQuestions.length - 1 ? (
                            <>
                              Próxima
                              <ChevronRight className="h-4 w-4" />
                            </>
                          ) : (
                            <>
                              Finalizar
                              <BarChart className="h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  )
}
