"use client"

import { useState, useEffect, useCallback } from "react"
import { AnimatePresence, motion } from "framer-motion"
import {
  AlertTriangle,
  CheckCircle,
  Lock,
  X,
  Clock,
  Shield,
  Zap,
  Eye,
  ArrowRight,
  Terminal,
  Key,
  Unlock,
} from "lucide-react"
import { Button } from "@/components/ui/button"

// Efeito de digitação com cursor piscante
const TypewriterEffect = ({ text, speed = 50, className = "", onComplete = () => {} }) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    // Efeito de cursor piscante
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    } else if (!isComplete) {
      setIsComplete(true)
      onComplete()
    }
  }, [currentIndex, text, speed, isComplete, onComplete])

  return (
    <div className={`font-mono ${className}`}>
      {displayText}
      {showCursor && <span className="text-green-500 animate-pulse">▌</span>}
    </div>
  )
}

// Efeito de texto com glitch sutil
const GlitchText = ({ children, className = "" }) => {
  const [glitchActive, setGlitchActive] = useState(false)

  useEffect(() => {
    // Ativar glitch ocasionalmente
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setGlitchActive(true)
        setTimeout(() => setGlitchActive(false), 150)
      }
    }, 3000)

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <div className={`relative ${className}`}>
      <div className="relative inline-block">
        <span className="relative z-10">{children}</span>
        {glitchActive && (
          <>
            <span
              className="absolute top-0 left-0 z-0 text-red-500 opacity-70"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)", transform: "translate(-2px, -2px)" }}
            >
              {children}
            </span>
            <span
              className="absolute top-0 left-0 z-0 text-blue-500 opacity-70"
              style={{ clipPath: "polygon(0 45%, 100% 45%, 100% 100%, 0 100%)", transform: "translate(2px, 2px)" }}
            >
              {children}
            </span>
          </>
        )}
      </div>
    </div>
  )
}

// Contador regressivo com estilo profissional
const CountdownTimer = ({ initialMinutes = 15, initialSeconds = 0, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState({
    minutes: initialMinutes,
    seconds: initialSeconds,
  })
  const [isWarning, setIsWarning] = useState(false)
  const [isCritical, setIsCritical] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 }
        } else {
          clearInterval(timer)
          onComplete()
          return { minutes: 0, seconds: 0 }
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [onComplete])

  // Definir estados de alerta com base no tempo restante
  useEffect(() => {
    const totalSeconds = timeLeft.minutes * 60 + timeLeft.seconds
    setIsWarning(totalSeconds < 300) // Menos de 5 minutos
    setIsCritical(totalSeconds < 60) // Menos de 1 minuto
  }, [timeLeft])

  const percentageLeft = ((timeLeft.minutes * 60 + timeLeft.seconds) / (initialMinutes * 60 + initialSeconds)) * 100

  return (
    <div className="w-full">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Clock
          className={`h-5 w-5 ${isCritical ? "text-red-500" : isWarning ? "text-yellow-500" : "text-green-500"}`}
        />
        <h3
          className={`text-lg font-bold ${isCritical ? "text-red-500" : isWarning ? "text-yellow-500" : "text-white"}`}
        >
          OFERTA EXPIRA EM
        </h3>
      </div>

      <div className="flex justify-center items-center mb-3">
        <motion.div
          className={`text-4xl font-bold font-mono ${
            isCritical ? "text-red-500" : isWarning ? "text-yellow-500" : "text-white"
          }`}
          animate={isCritical ? { scale: [1, 1.05, 1] } : {}}
          transition={isCritical ? { duration: 0.5, repeat: Number.POSITIVE_INFINITY } : {}}
        >
          {timeLeft.minutes.toString().padStart(2, "0")}:{timeLeft.seconds.toString().padStart(2, "0")}
        </motion.div>
      </div>

      <div className="w-full h-4 bg-gray-800 rounded-full overflow-hidden mb-2">
        <motion.div
          className={`h-full ${isCritical ? "bg-red-600" : isWarning ? "bg-yellow-600" : "bg-green-600"}`}
          initial={{ width: "100%" }}
          animate={{ width: `${percentageLeft}%` }}
          transition={{ duration: 1 }}
        />
      </div>

      <p className="text-center text-xs text-gray-400 mt-2 font-mono">
        {isCritical
          ? "ATENÇÃO: Oferta quase expirando!"
          : isWarning
            ? "Tempo limitado! Esta oferta não estará disponível depois."
            : "Ao fechar esta aba, o acesso será revogado."}
      </p>
    </div>
  )
}

// Efeito de fundo sutil
const MatrixBackground = () => {
  return (
    <div className="absolute inset-0 z-0 bg-black opacity-20">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=50&width=50')] opacity-10 bg-repeat"></div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "linear" }}
      />
    </div>
  )
}

// Componente principal de oferta de saída
export function ExitIntentOffer() {
  const [isVisible, setIsVisible] = useState(false)
  const [stage, setStage] = useState("initial") // initial, access, offer
  const [pulseEffect, setPulseEffect] = useState(false)
  const [activeUsers, setActiveUsers] = useState(Math.floor(Math.random() * 20) + 35)

  // Detectar botão de voltar
  const handlePopState = useCallback(() => {
    // Mostrar a oferta quando o usuário clica em voltar
    console.log("Botão voltar detectado")
    setIsVisible(true)
    // Adicionar nova entrada no histórico para evitar que o usuário saia da página
    window.history.pushState(null, "", window.location.href)
  }, [])

  useEffect(() => {
    // Adicionar entrada no histórico para capturar o botão de voltar
    window.history.pushState(null, "", window.location.href)

    // Configurar detecção de botão voltar (funciona em desktop e mobile)
    window.addEventListener("popstate", handlePopState)

    // Atualizar número de usuários ativos aleatoriamente
    const userInterval = setInterval(() => {
      setActiveUsers((prev) => {
        const change = Math.random() > 0.5 ? 1 : -1
        return Math.max(30, Math.min(65, prev + change))
      })
    }, 3000)

    return () => {
      window.removeEventListener("popstate", handlePopState)
      clearInterval(userInterval)
    }
  }, [handlePopState])

  // Efeito de pulsação para o botão CTA
  useEffect(() => {
    if (stage === "offer") {
      const interval = setInterval(() => {
        setPulseEffect((prev) => !prev)
      }, 2000)
      return () => clearInterval(interval)
    }
  }, [stage])

  const handleClose = () => {
    setIsVisible(false)
    setStage("initial")
  }

  const handlePurchase = () => {
    // Abrir link de pagamento em uma nova aba
    window.open("https://pay.kiwify.com.br/NeHnyLl", "_blank")
  }

  const handleAccessGrant = () => {
    setStage("access")

    // Avançar para a oferta após 3 segundos
    setTimeout(() => {
      setStage("offer")
    }, 3000)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
        >
          <MatrixBackground />

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-3xl bg-gray-900 border border-red-600 rounded-lg overflow-hidden shadow-xl"
          >
            {/* Botão de fechar */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
              aria-label="Fechar"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Cabeçalho */}
            <div className="bg-black p-4 border-b border-red-800 flex items-center">
              <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
              <h2 className="text-lg font-bold text-white font-mono">ACESSO PRIORITÁRIO DETECTADO</h2>

              {/* Contador de usuários ativos */}
              <div className="ml-auto flex items-center gap-2 bg-black/50 px-3 py-1 rounded-full border border-red-900">
                <Eye className="h-4 w-4 text-red-400" />
                <motion.span
                  className="text-xs text-red-400 font-mono"
                  key={activeUsers}
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeUsers} visualizando
                </motion.span>
              </div>
            </div>

            {/* Conteúdo */}
            <div className="p-6">
              {stage === "initial" && (
                <div className="text-center">
                  <GlitchText className="text-2xl md:text-3xl font-bold text-red-500 mb-6">
                    SAÍDA DETECTADA - ÚLTIMA CHANCE
                  </GlitchText>

                  <div className="bg-black/70 p-4 rounded-lg border border-red-800 mb-6">
                    <TypewriterEffect
                      text="Você quase foi embora... Mas o sistema identificou seu perfil como ELEGÍVEL PARA ACESSO PRIVILEGIADO."
                      className="text-green-500 text-lg mb-4"
                      speed={20}
                    />
                    <TypewriterEffect
                      text="Deseja iniciar o protocolo de acesso especial?"
                      className="text-green-500"
                      speed={20}
                    />

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2, duration: 0.5 }}
                      className="mt-6"
                    >
                      <Button
                        onClick={handleAccessGrant}
                        className="bg-green-600 hover:bg-green-700 text-white font-mono"
                        size="lg"
                      >
                        INICIAR PROTOCOLO DE ACESSO
                      </Button>
                    </motion.div>
                  </div>
                </div>
              )}

              {stage === "access" && (
                <div className="text-center">
                  <GlitchText className="text-2xl md:text-3xl font-bold text-green-500 mb-6">
                    ACESSO SENDO CONCEDIDO
                  </GlitchText>

                  <div className="bg-black p-4 rounded-lg border border-green-800 mb-6">
                    <div className="flex justify-center mb-4">
                      <motion.div
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      >
                        <Terminal className="h-12 w-12 text-green-500" />
                      </motion.div>
                    </div>

                    <TypewriterEffect text="> VERIFICANDO CREDENCIAIS..." className="text-green-500 mb-2" speed={20} />
                    <TypewriterEffect text="> ACESSO CONCEDIDO" className="text-green-500 mb-2" speed={20} />
                    <TypewriterEffect
                      text="> CARREGANDO OFERTA ESPECIAL..."
                      className="text-green-500 font-bold"
                      speed={20}
                    />

                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden mt-4">
                      <motion.div
                        className="h-full bg-green-600"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 3 }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {stage === "offer" && (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-black/70 p-6 rounded-lg border border-red-800 mb-6 text-center relative overflow-hidden"
                  >
                    {/* Efeito de destaque sutil */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "linear" }}
                    />

                    <div className="relative z-10">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Key className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                      </motion.div>

                      <p className="text-white font-mono mb-4 text-lg">
                        OFERTA EXCLUSIVA: ARSENAL COMPLETO COM <span className="text-red-500 font-bold">50% OFF</span>
                      </p>

                      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
                        <p className="text-gray-400 line-through text-xl">R$ 24,90</p>
                        <motion.div
                          animate={{
                            scale: pulseEffect ? 1.05 : 1,
                          }}
                          transition={{ duration: 0.5 }}
                          className="relative"
                        >
                          <p className="text-4xl font-bold text-red-500">R$ 12,45</p>
                          <div className="absolute -top-3 -right-3 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full transform rotate-12">
                            -50%
                          </div>
                        </motion.div>
                        <p className="text-gray-400 text-sm">pagamento único</p>
                      </div>

                      <p className="text-yellow-400 text-sm font-mono">
                        ATENÇÃO: Disponível apenas enquanto esta aba estiver aberta.
                      </p>
                    </div>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="bg-gray-800/50 p-4 rounded-lg border border-green-800"
                    >
                      <h3 className="text-green-500 font-bold mb-3 font-mono flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        ACESSO PRIVILEGIADO INCLUI:
                      </h3>
                      <ul className="space-y-2 text-gray-300 text-sm font-mono">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>LinkedIn Premium grátis (método completo)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Mais de 50 ferramentas e scripts secretos</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Estratégias de manipulação de algoritmo</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Suporte por WhatsApp</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Acesso vitalício sem mensalidade</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Resultados 10x mais rápidos e visíveis</span>
                        </li>
                      </ul>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="bg-gray-800/50 p-4 rounded-lg border border-red-800"
                    >
                      <CountdownTimer initialMinutes={14} initialSeconds={59} onComplete={handleClose} />

                      <div className="mt-4 grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <Shield className="h-4 w-4 text-green-500" />
                          <p className="text-xs text-gray-300 font-mono">Pagamento 100% seguro</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Unlock className="h-4 w-4 text-green-500" />
                          <p className="text-xs text-gray-300 font-mono">Acesso imediato</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Zap className="h-4 w-4 text-green-500" />
                          <p className="text-xs text-gray-300 font-mono">Resultados em 24h</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Lock className="h-4 w-4 text-green-500" />
                          <p className="text-xs text-gray-300 font-mono">Garantia de 7 dias</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <div className="text-center mb-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      animate={{
                        scale: pulseEffect ? 1.05 : 1,
                        boxShadow: pulseEffect ? "0 0 15px rgba(220, 38, 38, 0.6)" : "0 0 5px rgba(220, 38, 38, 0.3)",
                      }}
                      transition={{ duration: 0.5 }}
                      className="relative"
                    >
                      {/* Setas animadas apontando para o botão */}
                      <motion.div
                        className="absolute -left-16 top-1/2 transform -translate-y-1/2 hidden md:block"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <ArrowRight className="h-6 w-6 text-red-500" />
                      </motion.div>

                      <motion.div
                        className="absolute -right-16 top-1/2 transform -translate-y-1/2 hidden md:block"
                        animate={{ x: [0, -5, 0] }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <ArrowRight className="h-6 w-6 text-red-500 transform rotate-180" />
                      </motion.div>

                      <Button
                        onClick={handlePurchase}
                        className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-mono text-lg py-6 px-8 w-full md:w-auto border border-red-500"
                        size="lg"
                      >
                        DESBLOQUEAR ARSENAL COMPLETO COM 50% OFF
                      </Button>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="text-center"
                  >
                    <p className="text-gray-300 font-mono text-sm">
                      Esta oferta é exclusiva para você. Não perca esta oportunidade.
                    </p>
                  </motion.div>
                </>
              )}
            </div>

            {/* Footer */}
            <div className="bg-black p-3 border-t border-red-800">
              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-400 font-mono">ACESSO RESTRITO</p>
                <p className="text-xs text-gray-400 font-mono">SISTEMA ARSENAL</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
