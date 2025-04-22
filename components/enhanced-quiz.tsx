"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ChevronRight, Heart, Star } from "lucide-react"

interface Question {
  id: number
  text: string
  depth: number // 1-3, onde 3 é mais profundo
  options: {
    text: string
    score: number
  }[]
}

// Banco de perguntas organizadas por profundidade
const questionBank: Question[] = [
  // Nível 1 - Perguntas iniciais mais básicas
  {
    id: 1,
    text: "Com que frequência você tem dedicado tempo para oração pessoal?",
    depth: 1,
    options: [
      { text: "Diariamente, é uma prioridade em minha vida", score: 4 },
      { text: "Algumas vezes por semana", score: 3 },
      { text: "Raramente, apenas em momentos de necessidade", score: 2 },
      { text: "Quase nunca oro", score: 1 },
    ],
  },
  {
    id: 2,
    text: "Como você descreveria sua leitura da Bíblia atualmente?",
    depth: 1,
    options: [
      { text: "Leio e medito diariamente", score: 4 },
      { text: "Leio algumas vezes por semana", score: 3 },
      { text: "Raramente leio, apenas em cultos ou estudos", score: 2 },
      { text: "Não tenho lido a Bíblia", score: 1 },
    ],
  },
  {
    id: 3,
    text: "Com que frequência você participa de encontros em sua igreja ou comunidade de fé?",
    depth: 1,
    options: [
      { text: "Semanalmente e em outros eventos", score: 4 },
      { text: "Quase todos os domingos", score: 3 },
      { text: "Uma ou duas vezes por mês", score: 2 },
      { text: "Raramente ou nunca", score: 1 },
    ],
  },

  // Nível 2 - Perguntas de profundidade média
  {
    id: 4,
    text: "Como você se sente em relação à sua conexão com Deus neste momento?",
    depth: 2,
    options: [
      { text: "Sinto uma forte e íntima conexão", score: 4 },
      { text: "Sinto-me conectado, mas gostaria de aprofundar", score: 3 },
      { text: "Sinto-me distante, mas com desejo de me reconectar", score: 2 },
      { text: "Sinto um grande vazio espiritual", score: 1 },
    ],
  },
  {
    id: 5,
    text: "Quando foi a última vez que você sentiu a presença de Deus de forma tangível?",
    depth: 2,
    options: [
      { text: "Recentemente, é uma experiência frequente", score: 4 },
      { text: "Nas últimas semanas", score: 3 },
      { text: "Há meses atrás", score: 2 },
      { text: "Não me lembro ou nunca senti", score: 1 },
    ],
  },
  {
    id: 6,
    text: "Como você lida com momentos de dúvida em sua fé?",
    depth: 2,
    options: [
      { text: "Busco respostas na Palavra e em oração", score: 4 },
      { text: "Converso com líderes ou amigos maduros na fé", score: 3 },
      { text: "Tento ignorar as dúvidas e seguir em frente", score: 2 },
      { text: "As dúvidas frequentemente me afastam de Deus", score: 1 },
    ],
  },

  // Nível 3 - Perguntas mais profundas e reflexivas
  {
    id: 7,
    text: "Você consegue identificar áreas da sua vida que ainda não entregou completamente a Deus?",
    depth: 3,
    options: [
      { text: "Não, busco entregar todas as áreas da minha vida a Ele", score: 4 },
      { text: "Sim, algumas áreas específicas que estou trabalhando", score: 3 },
      { text: "Sim, várias áreas que tenho dificuldade em entregar", score: 2 },
      { text: "Nunca pensei em entregar áreas da minha vida a Deus", score: 1 },
    ],
  },
  {
    id: 8,
    text: "Como você responde quando Deus parece silencioso em momentos de crise?",
    depth: 3,
    options: [
      { text: "Mantenho minha confiança Nele, mesmo sem entender", score: 4 },
      { text: "Continuo buscando, mas com alguma frustração", score: 3 },
      { text: "Questiono se Ele realmente se importa comigo", score: 2 },
      { text: "Sinto-me abandonado e me afasto", score: 1 },
    ],
  },
  {
    id: 9,
    text: "Quão profundamente o amor de Deus tem transformado a maneira como você ama os outros?",
    depth: 3,
    options: [
      { text: "Profundamente, busco amar como Cristo em todas as relações", score: 4 },
      { text: "Significativamente, mas ainda luto em algumas situações", score: 3 },
      { text: "Um pouco, mas tenho dificuldade em amar certos tipos de pessoas", score: 2 },
      { text: "Pouco ou nada, minha fé e meus relacionamentos são separados", score: 1 },
    ],
  },
  {
    id: 10,
    text: "Como você lida com o pecado recorrente em sua vida?",
    depth: 3,
    options: [
      { text: "Busco a graça de Deus e trabalho ativamente para vencê-lo", score: 4 },
      { text: "Confesso e tento novamente, mas às vezes me sinto desanimado", score: 3 },
      { text: "Frequentemente me sinto derrotado e envergonhado", score: 2 },
      { text: "Desisti de lutar contra certos pecados em minha vida", score: 1 },
    ],
  },
]

const results = [
  {
    title: "Caminhante Fiel",
    range: [28, 40],
    description:
      "Você mantém uma vida espiritual ativa e disciplinada. Sua conexão com Deus é forte, mas há sempre espaço para crescer em intimidade e profundidade.",
    status: "maturidade espiritual",
  },
  {
    title: "Buscador Constante",
    range: [21, 27],
    description:
      "Você tem uma fé ativa, mas enfrenta desafios para manter consistência. Há um desejo genuíno de crescer espiritualmente e aprofundar sua conexão com Deus.",
    status: "crescimento espiritual",
  },
  {
    title: "Em Busca de Renovação",
    range: [14, 20],
    description:
      "Você está experimentando um período de distanciamento ou aridez espiritual. Há um desejo de reconexão, mas você precisa de direção e renovação.",
    status: "renovação espiritual",
  },
  {
    title: "Precisando de Restauração",
    range: [10, 13],
    description:
      "Você está passando por um deserto espiritual significativo. Sua conexão com Deus parece distante, mas o primeiro passo para a restauração é reconhecer essa necessidade.",
    status: "restauração profunda",
  },
]

interface EnhancedQuizProps {
  onComplete: (result: any) => void
}

export default function EnhancedQuiz({ onComplete }: EnhancedQuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([])
  const [answers, setAnswers] = useState<number[]>([])
  const [showResult, setShowResult] = useState(false)
  const [result, setResult] = useState<any>(null)
  const totalQuestions = 10 // Número total de perguntas que serão apresentadas

  // Seleciona as perguntas iniciais e configura o quiz
  useEffect(() => {
    // Seleciona perguntas de cada nível de profundidade
    const level1Questions = questionBank.filter((q) => q.depth === 1)
    const level2Questions = questionBank.filter((q) => q.depth === 2)
    const level3Questions = questionBank.filter((q) => q.depth === 3)

    // Cria a sequência de perguntas que vai do mais básico ao mais profundo
    const selectedQs = [
      ...level1Questions.slice(0, 3), // 3 perguntas do nível 1
      ...level2Questions.slice(0, 3), // 3 perguntas do nível 2
      ...level3Questions.slice(0, 4), // 4 perguntas do nível 3
    ]

    setSelectedQuestions(selectedQs)
  }, [])

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score]
    setAnswers(newAnswers)

    if (currentQuestionIndex < selectedQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      // Calculate result
      const totalScore = newAnswers.reduce((sum, score) => sum + score, 0)
      const userResult = results.find((result) => totalScore >= result.range[0] && totalScore <= result.range[1])
      setResult(userResult)
      setShowResult(true)
    }
  }

  const handleComplete = () => {
    if (result) {
      onComplete(result)
    }
  }

  // Se ainda não temos perguntas selecionadas, mostra um loader
  if (selectedQuestions.length === 0) {
    return <div className="text-center py-8">Carregando quiz...</div>
  }

  const currentQuestion = selectedQuestions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + (showResult ? 1 : 0)) / (totalQuestions + 1)) * 100

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <div className="mb-6 md:mb-8">
        <Progress value={progress} className="h-2 bg-amber-100" indicatorClassName="bg-amber-600" />
      </div>

      <AnimatePresence mode="wait">
        {!showResult ? (
          <motion.div
            key={`question-${currentQuestionIndex}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="bg-white p-4 md:p-8 rounded-xl shadow-lg border border-amber-200"
          >
            <div className="text-xs text-amber-600 font-medium mb-2">
              {currentQuestion.depth === 1
                ? "REFLEXÃO INICIAL"
                : currentQuestion.depth === 2
                  ? "APROFUNDANDO"
                  : "REFLEXÃO PROFUNDA"}
            </div>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-amber-800 mb-4 md:mb-6">
              {currentQuestion.text}
            </h3>
            <div className="space-y-3 md:space-y-4">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.score)}
                  className="w-full text-left p-3 md:p-4 rounded-lg border border-amber-200 hover:border-amber-400 hover:bg-amber-50 transition-all duration-200 flex items-center"
                >
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mr-3 md:mr-4 font-medium text-sm md:text-base flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-gray-700 text-sm md:text-base">{option.text}</span>
                </button>
              ))}
            </div>
            <div className="mt-4 text-right text-sm text-amber-700">
              Pergunta {currentQuestionIndex + 1} de {totalQuestions}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-4 md:p-8 rounded-xl shadow-lg border border-amber-200 text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-amber-100 mb-4 md:mb-6">
              <Heart className="h-6 w-6 md:h-8 md:w-8 text-amber-600" />
            </div>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-amber-800 mb-2">{result.title}</h3>
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 md:h-5 md:w-5 ${
                    i < Math.ceil(((result.range[0] + result.range[1]) / 2 - 10) / 6)
                      ? "text-amber-500 fill-amber-500"
                      : "text-amber-200"
                  }`}
                />
              ))}
            </div>
            <p className="text-gray-700 mb-6 md:mb-8 text-sm md:text-base">{result.description}</p>
            <Button
              onClick={handleComplete}
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-6 py-4 md:px-8 md:py-6 rounded-full text-base md:text-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg w-full md:w-auto whitespace-normal"
            >
              Como o devocional pode me ajudar
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
