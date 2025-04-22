"use client"

import { useState } from "react"
import { LinkedInQuiz } from "@/components/linkedin-quiz"
import { LinkedInHackPage } from "@/components/linkedin-hack-page"

export function QuizWrapper() {
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [quizResults, setQuizResults] = useState<any>(null)

  const handleQuizComplete = (results: any) => {
    setQuizResults(results)
    setQuizCompleted(true)

    // Scroll to top when transitioning to landing page
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {!quizCompleted ? (
        <LinkedInQuiz onComplete={handleQuizComplete} />
      ) : (
        <LinkedInHackPage initialQuizResults={quizResults} />
      )}
    </>
  )
}
