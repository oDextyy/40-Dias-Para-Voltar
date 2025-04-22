"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function PremiumNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  // Link para o plano recomendado (80 dias)
  const recommendedPlanLink = "https://pay.kiwify.com.br/iIPDiAU"

  const handlePurchase = () => {
    window.open(recommendedPlanLink, "_blank")
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button onClick={() => scrollToSection("hero")} className="focus:outline-none">
                <h1
                  className={`text-xl font-serif font-bold ${
                    isScrolled ? "text-amber-800" : "text-white"
                  } transition-colors duration-300`}
                >
                  40 Dias Pra Voltar
                </h1>
              </button>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("dor")}
                className={`${
                  isScrolled ? "text-gray-700 hover:text-amber-600" : "text-amber-100 hover:text-white"
                } transition-colors duration-300`}
              >
                O Problema
              </button>
              <button
                onClick={() => scrollToSection("product")}
                className={`${
                  isScrolled ? "text-gray-700 hover:text-amber-600" : "text-amber-100 hover:text-white"
                } transition-colors duration-300`}
              >
                O Devocional
              </button>
              <button
                onClick={() => scrollToSection("depoimentos")}
                className={`${
                  isScrolled ? "text-gray-700 hover:text-amber-600" : "text-amber-100 hover:text-white"
                } transition-colors duration-300`}
              >
                Depoimentos
              </button>
              <Button
                onClick={handlePurchase}
                className={`${
                  isScrolled
                    ? "bg-amber-600 hover:bg-amber-700 text-white"
                    : "bg-white hover:bg-amber-100 text-amber-800"
                } transition-colors duration-300`}
              >
                Quero Transformar Minha Vida
              </Button>
            </nav>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden focus:outline-none"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className={`h-6 w-6 ${isScrolled ? "text-amber-800" : "text-white"}`} />
              ) : (
                <Menu className={`h-6 w-6 ${isScrolled ? "text-amber-800" : "text-white"}`} />
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 w-full bg-white shadow-lg z-40 md:hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("dor")}
                  className="text-gray-700 hover:text-amber-600 py-2 transition-colors duration-300 text-left"
                >
                  O Problema
                </button>
                <button
                  onClick={() => scrollToSection("product")}
                  className="text-gray-700 hover:text-amber-600 py-2 transition-colors duration-300 text-left"
                >
                  O Devocional
                </button>
                <button
                  onClick={() => scrollToSection("depoimentos")}
                  className="text-gray-700 hover:text-amber-600 py-2 transition-colors duration-300 text-left"
                >
                  Depoimentos
                </button>
                <button
                  onClick={() => scrollToSection("oferta")}
                  className="text-gray-700 hover:text-amber-600 py-2 transition-colors duration-300 text-left"
                >
                  Planos
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-gray-700 hover:text-amber-600 py-2 transition-colors duration-300 text-left"
                >
                  Perguntas Frequentes
                </button>
                <Button onClick={handlePurchase} className="bg-amber-600 hover:bg-amber-700 text-white w-full mt-2">
                  Quero Transformar Minha Vida
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
