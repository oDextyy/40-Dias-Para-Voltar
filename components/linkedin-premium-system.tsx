"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ProfileAssessment } from "./profile-assessment"
import { CongratulationsMessage } from "./congratulations-message"
import { ProfileAnalysis } from "./profile-analysis"
import { SolutionTransition } from "./solution-transition"
import { PackageSelection } from "./package-selection"
import { RecommendationSection } from "./recommendation-section"

export function LinkedInPremiumSystem() {
  const [currentStep, setCurrentStep] = useState(1)
  const [profileData, setProfileData] = useState(null)
  const [analysisResults, setAnalysisResults] = useState(null)
  const [selectedPackage, setSelectedPackage] = useState(null)

  // Handle profile assessment completion
  const handleProfileAssessed = (data) => {
    setProfileData(data)
    setCurrentStep(2) // Move to congratulations
  }

  // Handle analysis completion
  const handleAnalysisComplete = (results) => {
    setAnalysisResults(results)
    setCurrentStep(4) // Move to solution transition
  }

  // Handle package selection
  const handlePackageSelected = (packageData) => {
    setSelectedPackage(packageData)
    setCurrentStep(6) // Move to recommendations
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-950/30">
      <div className="container mx-auto px-4 py-12">
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="assessment"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <ProfileAssessment onComplete={handleProfileAssessed} />
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="congratulations"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <CongratulationsMessage profileData={profileData} onContinue={() => setCurrentStep(3)} />
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              key="analysis"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <ProfileAnalysis profileData={profileData} onComplete={handleAnalysisComplete} />
            </motion.div>
          )}

          {currentStep === 4 && (
            <motion.div
              key="solution"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <SolutionTransition analysisResults={analysisResults} onContinue={() => setCurrentStep(5)} />
            </motion.div>
          )}

          {currentStep === 5 && (
            <motion.div
              key="packages"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <PackageSelection analysisResults={analysisResults} onPackageSelected={handlePackageSelected} />
            </motion.div>
          )}

          {currentStep === 6 && (
            <motion.div
              key="recommendations"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <RecommendationSection selectedPackage={selectedPackage} analysisResults={analysisResults} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
