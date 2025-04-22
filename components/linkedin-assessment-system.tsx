"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { WelcomeScreen } from "./assessment/welcome-screen"
import { ProfileQuiz } from "./assessment/profile-quiz"
import { ResultsScreen } from "./assessment/results-screen"
import { PackageSelection } from "./assessment/package-selection"
import { RecommendationScreen } from "./assessment/recommendation-screen"

export function LinkedInAssessmentSystem() {
  const [currentStep, setCurrentStep] = useState("welcome")
  const [quizResults, setQuizResults] = useState(null)
  const [selectedPackage, setSelectedPackage] = useState(null)

  const handleStartQuiz = () => {
    setCurrentStep("quiz")
  }

  const handleQuizComplete = (results) => {
    setQuizResults(results)
    setCurrentStep("results")
    // Rolar para o topo ao fazer a transição para a página de resultados
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleViewPackages = () => {
    setCurrentStep("packages")
    // Rolar para o topo ao fazer a transição para a página de pacotes
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleSelectPackage = (packageData) => {
    setSelectedPackage(packageData)
    setCurrentStep("recommendations")
    // Rolar para o topo ao fazer a transição para a página de recomendações
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-950/40 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-indigo-400/10 dark:bg-indigo-500/10 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <AnimatePresence mode="wait">
          {currentStep === "welcome" && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <WelcomeScreen onStart={handleStartQuiz} />
            </motion.div>
          )}

          {currentStep === "quiz" && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <ProfileQuiz onComplete={handleQuizComplete} />
            </motion.div>
          )}

          {currentStep === "results" && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <ResultsScreen results={quizResults} onContinue={handleViewPackages} />
            </motion.div>
          )}

          {currentStep === "packages" && (
            <motion.div
              key="packages"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <PackageSelection quizResults={quizResults} onSelectPackage={handleSelectPackage} />
            </motion.div>
          )}

          {currentStep === "recommendations" && (
            <motion.div
              key="recommendations"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <RecommendationScreen quizResults={quizResults} selectedPackage={selectedPackage} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
