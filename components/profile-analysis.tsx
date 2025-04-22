"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, ArrowRight, CheckCircle, Search, Users, MessageSquare, Award, Eye, Zap } from "lucide-react"

export function ProfileAnalysis({ profileData, onComplete }) {
  const [isAnalyzing, setIsAnalyzing] = useState(true)
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const [analysisComplete, setAnalysisComplete] = useState(false)

  const analysisSteps = [
    "Analyzing profile visibility...",
    "Evaluating network strength...",
    "Assessing content engagement...",
    "Checking headline optimization...",
    "Reviewing skills relevance...",
    "Calculating improvement potential...",
  ]

  useEffect(() => {
    // Simulate analysis process
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 1
      })
    }, 50)

    // Step animation
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= analysisSteps.length - 1) {
          clearInterval(stepInterval)

          // Complete analysis after last step
          setTimeout(() => {
            setIsAnalyzing(false)
            setAnalysisComplete(true)
          }, 1000)

          return prev
        }
        return prev + 1
      })
    }, 1500)

    return () => {
      clearInterval(progressInterval)
      clearInterval(stepInterval)
    }
  }, [])

  const handleContinue = () => {
    // Generate analysis results
    const results = {
      overallScore: profileData.score,
      categories: {
        visibility: Math.floor(Math.random() * 40) + 20, // 20-60%
        network: Math.floor(Math.random() * 30) + 30, // 30-60%
        engagement: Math.floor(Math.random() * 20) + 10, // 10-30%
        optimization: Math.floor(Math.random() * 40) + 30, // 30-70%
        skills: Math.floor(Math.random() * 50) + 30, // 30-80%
      },
      weaknesses: profileData.weaknesses,
      strengths: profileData.strengths,
      improvementPotential: Math.floor(Math.random() * 30) + 60, // 60-90%
      recommendedPackage: Math.random() > 0.5 ? "premium-pro" : "premium-plus",
    }

    onComplete(results)
  }

  return (
    <Card className="max-w-3xl mx-auto bg-white dark:bg-gray-800/90 shadow-xl border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-white/20 p-2 rounded-full">
            <Search className="h-6 w-6" />
          </div>
          <CardTitle className="text-2xl">LinkedIn Profile Analysis</CardTitle>
        </div>
        <CardDescription className="text-blue-100">
          We're analyzing your profile to identify areas for improvement and LinkedIn Premium eligibility
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-6">
        {isAnalyzing ? (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Analysis in progress...</span>
                <span className="text-blue-600 dark:text-blue-400 font-medium">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800/30">
              <p className="text-blue-700 dark:text-blue-300 font-medium mb-2">{analysisSteps[currentStep]}</p>
              <motion.div
                className="h-1 bg-blue-200 dark:bg-blue-800 rounded-full overflow-hidden"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5 }}
              >
                <motion.div
                  className="h-full bg-blue-600 dark:bg-blue-400"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 1.5,
                    ease: "linear",
                  }}
                />
              </motion.div>
            </div>

            {currentStep > 0 && (
              <div className="space-y-3">
                {analysisSteps.slice(0, currentStep).map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>{step.replace("...", "")}</span>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="bg-gradient-to-r from-amber-400 to-orange-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <span className="text-white text-3xl font-bold">{profileData.score}%</span>
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Your Profile Needs Improvement</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We've identified several areas where your LinkedIn profile could be enhanced to maximize your
                professional presence.
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-full">
                    <Eye className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Profile Visibility</h4>
                </div>
                <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-amber-500"
                    initial={{ width: "0%" }}
                    animate={{ width: `${Math.floor(Math.random() * 40) + 20}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Your profile visibility is limited, reducing your chances of being discovered by recruiters.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-full">
                    <Users className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Network Strength</h4>
                </div>
                <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-amber-500"
                    initial={{ width: "0%" }}
                    animate={{ width: `${Math.floor(Math.random() * 30) + 30}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Your network needs expansion with more strategic connections to increase opportunities.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-full">
                    <MessageSquare className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Content Engagement</h4>
                </div>
                <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-amber-500"
                    initial={{ width: "0%" }}
                    animate={{ width: `${Math.floor(Math.random() * 20) + 10}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Your content engagement is minimal, reducing your profile's algorithmic visibility.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-full">
                    <Award className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Profile Optimization</h4>
                </div>
                <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-amber-500"
                    initial={{ width: "0%" }}
                    animate={{ width: `${Math.floor(Math.random() * 40) + 30}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Your headline and summary need optimization with strategic keywords for better search results.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 dark:bg-blue-800/50 p-1 rounded-full mt-0.5">
                  <Zap className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">Improvement Potential</h4>
                  <div className="w-full h-2 bg-white dark:bg-gray-700 rounded-full overflow-hidden mb-2">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
                      initial={{ width: "0%" }}
                      animate={{ width: "85%" }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Your profile has{" "}
                    <span className="font-bold text-blue-700 dark:text-blue-300">85% improvement potential</span> with
                    LinkedIn Premium and our optimization strategies.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-100 dark:border-amber-800/30">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Without LinkedIn Premium and profile optimization, you're missing out on{" "}
                  <span className="font-bold">70% of potential opportunities</span> and visibility to recruiters.
                </p>
              </div>
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex justify-end pt-4">
        {analysisComplete && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={handleContinue}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
            >
              See How We Can Help
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        )}
      </CardFooter>
    </Card>
  )
}
