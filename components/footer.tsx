"use client"
import { Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 relative">
      <div className="absolute inset-0 bg-slate-950 z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-amber-400 font-serif text-xl font-medium mb-4">40 Dias Pra Voltar</h3>
            <p className="text-gray-400">
              Uma jornada de reconexão com Deus para quem se sente distante mas deseja voltar.
            </p>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-white font-medium mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#product" className="text-gray-400 hover:text-amber-400 transition-colors">
                  O Livro
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#offer" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Oferta
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex justify-center items-center">
          <p className="text-gray-400 text-sm flex items-center">
            © {currentYear} 40 Dias Pra Voltar. Todos os direitos reservados. Feito com{" "}
            <Heart className="h-4 w-4 text-amber-500 mx-1" /> para a glória de Deus
          </p>
        </div>
      </div>
    </footer>
  )
}
