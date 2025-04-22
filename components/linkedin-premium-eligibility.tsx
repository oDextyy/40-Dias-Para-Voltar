"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CongratulationsMessage } from "./congratulations-message"
import { SolutionTransition } from "./solution-transition"
import { PackageSelection } from "./package-selection"
import { RecommendationSection } from "./recommendation-section"

export function LinkedInPremiumEligibility({ quizResults }) {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedPackage, setSelectedPackage] = useState(null)

  // Avançar para a transição de solução
  const handleContinueToSolution = () => {
    setCurrentStep(2)
  }

  // Lidar com a seleção de pacote
  const handlePackageSelected = (packageData) => {
    setSelectedPackage(packageData)
    setCurrentStep(3) // Avançar para recomendações
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-950/30">
      <div className="container mx-auto px-4 py-12">
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="congratulations"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <CongratulationsMessage quizResults={quizResults} onContinue={handleContinueToSolution} />
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="solution"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <SolutionTransition quizResults={quizResults} onContinue={() => setCurrentStep(3)} />
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              key="packages"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <PackageSelection quizResults={quizResults} onPackageSelected={handlePackageSelected} />
            </motion.div>
          )}

          {currentStep === 4 && (
            <motion.div
              key="recommendations"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <RecommendationSection selectedPackage={selectedPackage} quizResults={quizResults} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
