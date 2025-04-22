"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, CreditCard, QrCode, Shield } from "lucide-react"
import CountdownTimer from "./countdown-timer"
import ActionButton from "./action-button"

export default function OfferSection() {
  const [selectedPlan, setSelectedPlan] = useState("80-dias")

  // Data para o fim da oferta (30 dias a partir de agora)
  const endDate = new Date()
  endDate.setDate(endDate.getDate() + 30)

  const plans = {
    "40-dias": {
      name: "40 Dias",
      price: 9.99,
      originalPrice: 29.99,
      checkoutLink: "https://pay.kiwify.com.br/pNefkCK",
      features: [
        "Devocional completo para 40 dias",
        "100 Orações Poderosas para Restauração",
        "Guia de Leitura Bíblica para 40 Dias",
        "Acesso Imediato após a Compra",
      ],
      badge: "Jornada Inicial",
      description: "Ideal para quem está começando sua jornada de volta à intimidade com Deus",
    },
    "80-dias": {
      name: "80 Dias",
      price: 14.99,
      originalPrice: 49.99,
      checkoutLink: "https://pay.kiwify.com.br/iIPDiAU",
      features: [
        "Devocional completo para 80 dias",
        "100 Orações Poderosas para Restauração",
        "Guia de Leitura Bíblica para 80 Dias",
        "E-book 'Meditações Matinais'",
        "Guia Prático para Superar o Deserto Espiritual",
        "Acesso Imediato após a Compra",
      ],
      badge: "Mais Popular",
      description: "Perfeito para quem busca uma renovação espiritual mais profunda",
    },
    "120-dias": {
      name: "120 Dias",
      price: 21.9,
      originalPrice: 97.0,
      checkoutLink: "https://pay.kiwify.com.br/GD5UKkM",
      features: [
        "Devocional completo para 120 dias",
        "100 Orações Poderosas para Restauração",
        "Guia de Leitura Bíblica para 120 Dias",
        "E-book 'Meditações Matinais'",
        "Guia Prático para Superar o Deserto Espiritual",
        "E-book 'Orações para Momentos Difíceis'",
        "Diário de Gratidão Digital",
        "Guia de Jejum e Oração",
        "Calendário de Leitura Bíblica Anual",
        "Acesso Imediato após a Compra",
      ],
      badge: "Experiência Completa",
      description: "A experiência mais completa para uma transformação espiritual profunda",
    },
  }

  const handlePurchase = (checkoutLink) => {
    window.open(checkoutLink, "_blank")
  }

  return (
    <section id="oferta" className="py-20 bg-gradient-to-b from-amber-50 to-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/images/jesus-golden.jpeg')] bg-cover bg-center opacity-10 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-amber-50/90 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="bg-amber-600 text-white mb-4 px-4 py-1 text-sm">OFERTA ESPECIAL</Badge>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-amber-800 mb-4">
            Escolha Sua Jornada Espiritual
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Selecione o período que melhor atende às suas necessidades e comece sua jornada de volta à intimidade com
            Deus
          </p>
        </motion.div>

        <div className="flex justify-center mb-8 overflow-x-auto pb-2 -mx-4 px-4">
          <div className="inline-flex bg-amber-100 rounded-full p-1 shadow-md">
            <button
              onClick={() => setSelectedPlan("40-dias")}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                selectedPlan === "40-dias"
                  ? "bg-amber-600 text-white shadow-md"
                  : "bg-transparent text-amber-800 hover:bg-amber-200"
              }`}
            >
              40 Dias
            </button>
            <button
              onClick={() => setSelectedPlan("80-dias")}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                selectedPlan === "80-dias"
                  ? "bg-amber-600 text-white shadow-md"
                  : "bg-transparent text-amber-800 hover:bg-amber-200"
              }`}
            >
              80 Dias
            </button>
            <button
              onClick={() => setSelectedPlan("120-dias")}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                selectedPlan === "120-dias"
                  ? "bg-amber-600 text-white shadow-md"
                  : "bg-transparent text-amber-800 hover:bg-amber-200"
              }`}
            >
              120 Dias
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-4 sm:p-8 border-amber-400 bg-gradient-to-b from-amber-50 to-white shadow-xl relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-amber-100 rounded-full opacity-50"></div>
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-amber-100 rounded-full opacity-50"></div>

            <div className="relative z-10">
              <div className="text-center mb-6">
                <Badge className="bg-red-600 text-white mb-2 px-3 py-1 text-xs">OFERTA POR TEMPO LIMITADO</Badge>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-amber-800">
                  Devocional "{plans[selectedPlan].name}" - Jornada de Volta
                </h3>
                <Badge className="bg-amber-600 text-white mt-2 px-3 py-1">{plans[selectedPlan].badge}</Badge>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">{plans[selectedPlan].description}</p>
              </div>

              <div className="flex items-center justify-center mb-6">
                <span className="text-gray-500 line-through text-base sm:text-lg mr-3">
                  R$ {plans[selectedPlan].originalPrice.toFixed(2).replace(".", ",")}
                </span>
                <span className="text-2xl sm:text-3xl font-bold text-amber-800">
                  R$ {plans[selectedPlan].price.toFixed(2).replace(".", ",")}
                </span>
              </div>

              <div className="bg-gradient-to-r from-amber-100 to-amber-200 p-3 sm:p-4 rounded-lg mb-6 sm:mb-8 shadow-inner">
                <p className="text-center text-amber-800 font-medium mb-2 text-sm sm:text-base">
                  Esta oferta expira em:
                </p>
                <CountdownTimer targetDate={endDate} />
              </div>

              <div className="mb-6 sm:mb-8">
                <h4 className="text-lg sm:text-xl font-serif font-bold text-amber-800 mb-3 sm:mb-4 text-center">
                  O Que Está Incluído:
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {plans[selectedPlan].features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-center mb-6 sm:mb-8">
                <ActionButton onClick={() => handlePurchase(plans[selectedPlan].checkoutLink)}>
                  Iniciar Minha Jornada de {plans[selectedPlan].name}
                </ActionButton>
              </div>

              <div className="flex justify-center items-center text-gray-600 text-xs sm:text-sm mb-4 text-center">
                <Shield className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>Garantia de satisfação de 30 dias ou seu dinheiro de volta</span>
              </div>

              <div className="flex justify-center gap-4 sm:gap-6 mt-4">
                <div className="flex flex-col items-center">
                  <CreditCard className="h-5 sm:h-6 w-5 sm:w-6 text-amber-600 mb-1" />
                  <span className="text-xs text-gray-600">Cartão de Crédito</span>
                </div>
                <div className="flex flex-col items-center">
                  <QrCode className="h-5 sm:h-6 w-5 sm:w-6 text-amber-600 mb-1" />
                  <span className="text-xs text-gray-600">Pix</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
