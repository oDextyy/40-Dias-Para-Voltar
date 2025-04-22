"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, ChevronRight, X } from "lucide-react"

interface FaithQuizProps {
  onComplete: () => void
}

export default function FaithQuiz({ onComplete }: FaithQuizProps) {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)
  const [resultProfile, setResultProfile] = useState("")
  const [resultDescription, setResultDescription] = useState("")
  const [resultRecommendation, setResultRecommendation] = useState("")

  const questions = [
    {
      question: "Como você descreveria sua relação atual com Deus?",
      options: [
        "Distante, mas com saudade",
        "Confusa e incerta",
        "Formal, mas sem intimidade",
        "Inexistente, mas desejo mudar",
      ],
    },
    {
      question: "Quando foi a última vez que você sentiu a presença de Deus de forma profunda?",
      options: ["Há anos atrás", "Recentemente, mas foi breve", "Não me lembro", "Nunca senti de forma clara"],
    },
    {
      question: "O que mais te impede de ter uma relação mais próxima com Deus?",
      options: [
        "Falta de tempo para oração",
        "Sentimento de culpa ou vergonha",
        "Não sei como me aproximar",
        "Distrações e prioridades mundanas",
      ],
    },
    {
      question: "O que você mais deseja em sua jornada espiritual?",
      options: [
        "Sentir a presença de Deus novamente",
        "Entender melhor a Palavra",
        "Paz interior e direção",
        "Intimidade genuína com Deus",
      ],
    },
  ]

  const profiles = [
    {
      type: "O Saudoso",
      description:
        "Você teve uma conexão forte com Deus no passado e sente falta dessa intimidade. Seu coração anseia por restaurar o que foi perdido.",
      recommendation:
        "Os primeiros capítulos de '40 Dias Pra Voltar' foram escritos especialmente para pessoas como você, que conhecem o caminho de volta mas precisam de encorajamento para dar os primeiros passos.",
    },
    {
      type: "O Buscador",
      description:
        "Você está em uma jornada de descoberta, procurando entender melhor sua fé e aprofundar seu relacionamento com Deus.",
      recommendation:
        "O devocional vai te guiar em uma jornada progressiva, começando com os fundamentos e avançando para uma intimidade mais profunda com Deus.",
    },
    {
      type: "O Formalista",
      description: "Sua fé tem sido mais baseada em rituais e obrigações do que em um relacionamento pessoal com Deus.",
      recommendation:
        "Os capítulos sobre 'Quebrar as Barreiras' e 'Além da Religião' vão te ajudar a transformar conhecimento em intimidade genuína.",
    },
    {
      type: "O Recomeçante",
      description:
        "Você está pronto para um novo começo em sua jornada espiritual, talvez após um longo período de afastamento.",
      recommendation:
        "O devocional foi estruturado como uma jornada gradual, perfeita para quem está recomeçando do zero, com passos simples e acessíveis.",
    },
  ]

  const handleAnswer = (answer: string) => {
    const newAnswers = { ...answers, [step]: answer }
    setAnswers(newAnswers)

    if (step < questions.length - 1) {
      setStep(step + 1)
    } else {
      // Determine profile based on answers
      const profileIndex = Math.floor(Math.random() * profiles.length) // In a real app, this would be based on actual answer analysis
      setResultProfile(profiles[profileIndex].type)
      setResultDescription(profiles[profileIndex].description)
      setResultRecommendation(profiles[profileIndex].recommendation)
      setShowResults(true)
    }
  }

  const progress = ((step + 1) / questions.length) * 100

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md">
      <Card className="w-full max-w-2xl bg-gradient-to-b from-slate-900 to-slate-800 border border-slate-700 shadow-2xl rounded-xl overflow-hidden">
        <div className="relative">
          <div className="absolute inset-0 bg-[url('/images/jesus-light.jpeg')] bg-cover bg-center opacity-5"></div>

          <div className="p-8 relative z-10">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-serif font-medium text-amber-400">Avaliação Espiritual</h2>
              <button
                onClick={onComplete}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Fechar quiz"
              >
                <X size={24} />
              </button>
            </div>

            {!showResults ? (
              <>
                <div className="mb-8">
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>
                      Questão {step + 1} de {questions.length}
                    </span>
                    <span>{Math.round(progress)}% completo</span>
                  </div>
                  <Progress value={progress} className="h-1.5 bg-slate-700" indicatorClassName="bg-amber-500" />
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`question-${step}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl md:text-2xl font-medium text-white mb-8">{questions[step].question}</h3>

                    <div className="space-y-4">
                      {questions[step].options.map((option, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <Button
                            variant="outline"
                            className="w-full py-6 text-left justify-start text-base border-slate-700 hover:bg-slate-800 hover:border-amber-500/50 transition-all group"
                            onClick={() => handleAnswer(option)}
                          >
                            <div className="mr-4 h-6 w-6 rounded-full border border-slate-600 group-hover:border-amber-500 flex items-center justify-center flex-shrink-0">
                              <span className="text-sm">{index + 1}</span>
                            </div>
                            <span>{option}</span>
                            <ChevronRight className="ml-auto h-5 w-5 text-slate-600 group-hover:text-amber-500" />
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="w-20 h-20 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-amber-400" />
                </div>

                <h3 className="text-2xl font-serif font-medium text-amber-400 mb-3">Seu Perfil Espiritual</h3>
                <h4 className="text-xl text-white mb-4">{resultProfile}</h4>

                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 mb-6 text-left">
                  <p className="text-gray-300 mb-4">{resultDescription}</p>
                  <p className="text-amber-300">{resultRecommendation}</p>
                </div>

                <Button
                  className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-medium px-8 py-6"
                  onClick={onComplete}
                >
                  Descobrir Minha Jornada de Volta
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </Card>
    </div>
  )
}
