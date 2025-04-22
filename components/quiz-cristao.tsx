"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import { Cross } from "lucide-react"
import Image from "next/image"

export function QuizCristao() {
  const [step, setStep] = useState(0)
  const [showQuiz, setShowQuiz] = useState(true)
  const [answers, setAnswers] = useState<Record<number, string>>({})

  const questions = [
    {
      question: "Como você descreveria sua relação com Deus neste momento?",
      options: [
        "Sinto que estamos distantes",
        "Tenho orado, mas não sinto Sua presença",
        "Quero me reconectar, mas não sei como",
        "Sinto culpa por ter me afastado",
      ],
    },
    {
      question: "Quando foi a última vez que você sentiu a presença de Deus de forma profunda?",
      options: ["Faz tanto tempo que mal me lembro", "Algumas semanas atrás", "Alguns meses atrás", "Mais de um ano"],
    },
    {
      question: "O que mais te impede de buscar a Deus diariamente?",
      options: [
        "Falta de tempo",
        "Não sei como orar como antes",
        "Sinto-me indigno(a)",
        "A rotina tomou conta da minha vida",
      ],
    },
  ]

  const handleAnswer = (questionIndex: number, answer: string) => {
    setAnswers({
      ...answers,
      [questionIndex]: answer,
    })

    if (questionIndex < questions.length - 1) {
      setStep(questionIndex + 1)
    } else {
      // Último passo - mostrar resultado
      setTimeout(() => {
        setShowQuiz(false)
      }, 1000)
    }
  }

  if (!showQuiz) return null

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 z-0">
        <Image src="/images/jesus-light.jpeg" alt="Jesus na luz divina" fill className="object-cover opacity-20" />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-xl relative z-10"
        >
          {step < questions.length ? (
            <Card className="bg-slate-900/90 border border-amber-500/20 p-8 shadow-xl shadow-amber-500/5">
              <div className="absolute top-2 right-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowQuiz(false)}
                  className="text-amber-300 hover:text-amber-100 hover:bg-slate-800"
                >
                  <Cross className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex justify-center mb-6">
                <div className="flex gap-1">
                  {questions.map((_, i) => (
                    <div key={i} className={`h-1 w-8 rounded-full ${i === step ? "bg-amber-400" : "bg-slate-700"}`} />
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-serif text-center mb-8 text-white">{questions[step].question}</h3>

              <div className="flex flex-col gap-3">
                {questions[step].options.map((option, i) => (
                  <Button
                    key={i}
                    variant="outline"
                    className="py-6 border-amber-500/30 text-white hover:bg-amber-500/10 hover:border-amber-500/50 hover:text-white"
                    onClick={() => handleAnswer(step, option)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </Card>
          ) : (
            <Card className="bg-slate-900/90 border border-amber-500/20 p-8 shadow-xl shadow-amber-500/5 text-center">
              <h3 className="text-xl font-serif mb-4 text-white">Obrigado por compartilhar</h3>
              <p className="mb-6 text-gray-300">Preparamos algo especial para te ajudar a reconectar com Deus...</p>
              <Button
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-medium"
                onClick={() => setShowQuiz(false)}
              >
                Continuar
              </Button>
            </Card>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
