"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Crown, Rocket, Star, Shield, Sparkles } from "lucide-react"
import { PulsatingButton } from "@/components/pulsating-button"

export function PackageSelection({ quizResults, onSelectPackage }) {
  const [selectedPackage, setSelectedPackage] = useState(null)
  const [hoveredPackage, setHoveredPackage] = useState(null)

  const packages = [
    {
      id: "premium-basic",
      name: "Acesso Premium Básico",
      description: "Acesso essencial ao LinkedIn Premium com otimização básica de perfil",
      price: "R$ 29,90",
      discountedPrice: "R$ 9,90",
      features: [
        "LinkedIn Premium Permanente",
        "Guia básico de otimização de perfil",
        "Templates de headline otimizados",
        "Suporte por email por 30 dias",
        "Guia de recursos Premium",
      ],
      focus: "LinkedIn Premium permanente com otimização essencial",
      recommended: false,
      color: "blue",
    },
    {
      id: "premium-pro",
      name: "Premium Pro",
      description: "Acesso completo ao LinkedIn Premium com otimização avançada de perfil",
      price: "R$ 97,00",
      discountedPrice: "R$ 19,99",
      features: [
        "LinkedIn Premium Permanente",
        "Otimização avançada de perfil",
        "Otimização de palavras-chave para visibilidade",
        "Templates de estratégia de conteúdo",
        "Técnicas de crescimento de rede",
        "Suporte prioritário por 60 dias",
        "Guia de domínio dos recursos Premium",
      ],
      focus: "LinkedIn Premium permanente com otimização abrangente de perfil",
      recommended: true,
      color: "indigo",
    },
    {
      id: "premium-elite",
      name: "Arsenal Completo",
      description: "Solução definitiva de LinkedIn Premium com otimização personalizada",
      price: "R$ 126,90",
      discountedPrice: "R$ 24,90",
      features: [
        "LinkedIn Premium Permanente",
        "Otimização personalizada de perfil",
        "Algoritmos avançados de visibilidade",
        "Estratégia de conteúdo personalizada",
        "Construção estratégica de rede",
        "Técnicas de automação de engajamento",
        "Suporte vitalício ilimitado",
        "Guia avançado de recursos Premium",
        "Aprimoramento de visibilidade para recrutadores",
      ],
      focus: "LinkedIn Premium permanente com estratégia personalizada e técnicas avançadas",
      recommended: false,
      color: "purple",
    },
  ]

  const handleSelect = (packageId) => {
    setSelectedPackage(packageId)

    // Encontrar o pacote selecionado
    const selectedPkg = packages.find((pkg) => pkg.id === packageId)

    onSelectPackage(selectedPkg)
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-4"
        >
          <Crown className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span className="text-blue-800 dark:text-blue-300 font-medium">PACOTES LINKEDIN PREMIUM</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Escolha Seu Pacote{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            LinkedIn Premium
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          Todos os pacotes incluem nosso método exclusivo para acesso permanente ao LinkedIn Premium. Selecione o pacote
          que melhor atende às suas necessidades de otimização de perfil.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            className="relative"
            onMouseEnter={() => setHoveredPackage(pkg.id)}
            onMouseLeave={() => setHoveredPackage(null)}
          >
            {pkg.recommended && (
              <motion.div
                className="absolute -top-4 left-0 right-0 mx-auto w-max bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-bold px-6 py-1 rounded-full shadow-lg z-10"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                MAIS POPULAR
              </motion.div>
            )}

            <Card
              className={`bg-white dark:bg-gray-800/90 border-gray-100 dark:border-gray-700/50 overflow-hidden h-full backdrop-blur-sm rounded-xl transition-all duration-300 ${
                selectedPackage === pkg.id ? "ring-4 ring-blue-500/50" : ""
              } ${hoveredPackage === pkg.id ? "shadow-2xl -translate-y-2" : "shadow-xl"} ${pkg.recommended ? "mt-4" : ""}`}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>

              <CardHeader
                className={`bg-gradient-to-r from-${pkg.color}-600 to-${
                  pkg.color === "blue" ? "indigo" : pkg.color === "indigo" ? "purple" : "pink"
                }-600 text-white p-6`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-white/20 p-2 rounded-full">
                    {pkg.id === "premium-basic" ? (
                      <Crown className="h-5 w-5" />
                    ) : pkg.id === "premium-pro" ? (
                      <Rocket className="h-5 w-5" />
                    ) : (
                      <Sparkles className="h-5 w-5" />
                    )}
                  </div>
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                </div>
                <p className="text-sm text-white/80">{pkg.description}</p>
              </CardHeader>

              <CardContent className="p-6 relative z-10">
                <div className="mb-6">
                  <p className="text-gray-500 dark:text-gray-400 line-through text-sm">Regular: {pkg.price}</p>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">{pkg.discountedPrice}</span>
                    <span className="text-gray-500 dark:text-gray-400 ml-2 text-sm">pagamento único</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + idx * 0.05, duration: 0.3 }}
                      className="flex items-start gap-3"
                    >
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-1 rounded-full mt-0.5">
                        <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl mb-6 border border-blue-100 dark:border-blue-800/30">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      <span className="font-bold text-blue-700 dark:text-blue-400">Foco:</span> {pkg.focus}
                    </p>
                  </div>
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  {pkg.recommended ? (
                    <PulsatingButton
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-6 rounded-xl text-lg shadow-lg"
                      onClick={() => handleSelect(pkg.id)}
                    >
                      Escolher Este Pacote
                    </PulsatingButton>
                  ) : (
                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-6 rounded-xl text-lg shadow-lg"
                      onClick={() => handleSelect(pkg.id)}
                    >
                      Selecionar {pkg.name}
                    </Button>
                  )}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mt-8 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800/30 text-center"
      >
        <div className="flex items-center justify-center gap-2 mb-3">
          <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Garantia de Satisfação 100%</h3>
        </div>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Todos os pacotes vêm com nossa garantia de satisfação de 7 dias. Se você não estiver completamente satisfeito
          com seu acesso ao LinkedIn Premium ou com os resultados, devolveremos seu dinheiro - sem perguntas.
        </p>
      </motion.div>
    </div>
  )
}
