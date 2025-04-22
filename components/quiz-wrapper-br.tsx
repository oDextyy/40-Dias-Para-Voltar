"use client"

import { useState } from "react"
import { LinkedInQuizBR } from "@/components/linkedin-quiz-br"
import { LinkedInHackPage } from "@/components/linkedin-hack-page"

export function QuizWrapperBR() {
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [quizResults, setQuizResults] = useState<any>(null)

  const handleQuizComplete = (results: any) => {
    setQuizResults(results)
    setQuizCompleted(true)

    // Rolar para o topo ao fazer a transição para a página de destino
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {!quizCompleted ? (
        <LinkedInQuizBR onComplete={handleQuizComplete} />
      ) : (
        <LinkedInHackPage initialQuizResults={quizResults} />
      )}
    </>
  )
}
