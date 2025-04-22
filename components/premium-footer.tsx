"use client"

import { Heart } from "lucide-react"

export default function PremiumFooter() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-slate-950 text-white py-12 md:py-16 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-amber-400 mb-4">40 Dias Pra Voltar</h3>
            <p className="text-gray-400 mb-6 text-sm md:text-base">
              Uma jornada transformadora de 40, 80 ou 120 dias para restaurar sua conexão com Deus e redescobrir a
              intimidade com o Pai.
            </p>
            <div className="flex items-center justify-center md:justify-start">
              <span className="text-amber-400 font-medium text-sm md:text-base">Garantia de 30 dias</span>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-base md:text-lg font-bold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-gray-400 hover:text-amber-400 transition-colors text-sm md:text-base"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("dor")}
                  className="text-gray-400 hover:text-amber-400 transition-colors text-sm md:text-base"
                >
                  O Problema
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("product")}
                  className="text-gray-400 hover:text-amber-400 transition-colors text-sm md:text-base"
                >
                  O Devocional
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("depoimentos")}
                  className="text-gray-400 hover:text-amber-400 transition-colors text-sm md:text-base"
                >
                  Depoimentos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("oferta")}
                  className="text-gray-400 hover:text-amber-400 transition-colors text-sm md:text-base"
                >
                  Oferta
                </button>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-base md:text-lg font-bold text-white mb-4">Formas de Pagamento</h3>
            <div className="flex justify-center md:justify-end space-x-3 md:space-x-4 mb-6">
              <div className="bg-white/10 p-2 rounded-md">
                <span className="text-xs md:text-sm text-white">Cartão de Crédito</span>
              </div>
              <div className="bg-white/10 p-2 rounded-md">
                <span className="text-xs md:text-sm text-white">Pix</span>
              </div>
            </div>
            <p className="text-gray-400 text-xs md:text-sm">Pagamento 100% seguro e processado pela Kiwify</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 md:mt-10 pt-6 text-center">
          <p className="text-gray-500 text-xs md:text-sm flex items-center justify-center">
            © {currentYear} 40 Dias Pra Voltar. Todos os direitos reservados. Feito com{" "}
            <Heart className="h-3 w-3 md:h-4 md:w-4 text-amber-500 mx-1" /> para a glória de Deus
          </p>
        </div>
      </div>
    </footer>
  )
}
