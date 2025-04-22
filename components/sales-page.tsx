"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import EnhancedQuiz from "./enhanced-quiz"
import HeroSection from "./hero-section"
import PainBlock from "./pain-block"
import ProductIntro from "./product-intro"
import WhatYouReceive from "./what-you-receive"
import BonusSection from "./bonus-section"
import BeforeAfter from "./before-after"
import Testimonials from "./testimonials"
import OfferSection from "./offer-section"
import GuaranteeSection from "./guarantee-section"
import FinalCTA from "./final-cta"
import FAQSection from "./faq-section"
import { ChevronUp } from "lucide-react"
import PremiumNavbar from "./premium-navbar"
import PremiumFooter from "./premium-footer"
import { Heart } from "lucide-react"

export default function SalesPage() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [quizResult, setQuizResult] = useState<any>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const handleQuizComplete = (result: any) => {
    setQuizResult(result)
    setQuizCompleted(true)
    // Scroll to top after quiz completion
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="relative bg-gradient-to-b from-amber-50 to-white min-h-screen">
      {/* Quiz overlay - shown first, before any content */}
      <AnimatePresence>
        {!quizCompleted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-gradient-to-b from-amber-50 to-white overflow-y-auto"
          >
            <div className="min-h-screen flex flex-col">
              <div className="py-6 md:py-8 bg-gradient-to-r from-amber-800 to-amber-700 text-white text-center relative overflow-hidden">
                {/* Imagem de fundo com overlay */}
                <div className="absolute inset-0 bg-[url('/images/jesus-embrace.png')] bg-cover bg-center opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-800/90 to-amber-700/90"></div>

                <div className="relative z-10">
                  <h1 className="text-2xl md:text-4xl font-serif font-bold">40 Dias Pra Voltar</h1>
                  <p className="text-amber-200 mt-2 text-sm md:text-lg">
                    Uma jornada de redescoberta e intimidade com Deus
                  </p>
                </div>
              </div>

              <div className="flex-grow flex flex-col items-center justify-center py-12 md:py-16 px-4">
                <div className="w-full max-w-4xl mx-auto">
                  <div className="text-center mb-10 md:mb-12">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-amber-100 mb-4 md:mb-6"
                    >
                      <Heart className="h-8 w-8 md:h-10 md:w-10 text-amber-600" />
                    </motion.div>
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="text-2xl md:text-4xl font-serif font-bold text-amber-800 mb-3 md:mb-4"
                    >
                      Descubra Onde Você Está Em Sua Jornada Espiritual
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto"
                    >
                      Todos nós passamos por diferentes estações em nossa caminhada com Deus. Este breve momento de
                      reflexão nos ajudará a personalizar sua experiência e oferecer exatamente o que você precisa para
                      este momento da sua vida. Responda com sinceridade e permita que o Espírito Santo fale ao seu
                      coração.
                    </motion.p>
                  </div>

                  <EnhancedQuiz onComplete={handleQuizComplete} />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content - only shown after quiz completion */}
      {quizCompleted && (
        <>
          <PremiumNavbar />

          {/* Decorative elements */}
          <div className="fixed inset-0 bg-[url('/images/jesus-light.jpeg')] bg-cover bg-center opacity-[0.03] pointer-events-none z-0"></div>

          <main className="relative z-10">
            <HeroSection quizResult={quizResult} />
            <PainBlock />
            <ProductIntro />
            <WhatYouReceive />
            <BonusSection />
            <BeforeAfter />
            <Testimonials />
            <OfferSection />
            <GuaranteeSection />
            <FAQSection />
            <FinalCTA />
          </main>

          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-amber-600 hover:bg-amber-700 text-white p-2 md:p-3 rounded-full shadow-lg z-50 transition-all duration-300"
              aria-label="Voltar ao topo"
            >
              <ChevronUp className="h-5 w-5 md:h-6 md:w-6" />
            </motion.button>
          )}

          <PremiumFooter />
        </>
      )}
    </div>
  )
}
