"use client"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  AlertTriangle,
  CheckCircle,
  ChevronDown,
  Star,
  Eye,
  CheckCheck,
  TrendingUp,
  MessageSquare,
  Rocket,
  ThumbsUp,
  Bookmark,
  Linkedin,
  Search,
  Flame,
  Gauge,
  Megaphone,
  Crown,
  Unlock,
  Lock,
  Infinity,
} from "lucide-react"
import { PulsatingButton } from "@/components/pulsating-button"

// Importe o componente de elegibilidade
import { LinkedInPremiumEligibility } from "./linkedin-premium-eligibility"

// Enhanced Floating Particles component
const FloatingParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      opacity: number
      pulse: boolean
      pulseSpeed: number
    }[] = []

    const colors = ["#3b82f6", "#60a5fa", "#93c5fd", "#2563eb", "#1d4ed8", "#4f46e5", "#6366f1"]

    // Create particles
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.5 + 0.1,
        pulse: Math.random() > 0.5,
        pulseSpeed: Math.random() * 0.02 + 0.01,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        // Pulse effect
        if (p.pulse) {
          p.opacity += p.pulseSpeed
          if (p.opacity > 0.6 || p.opacity < 0.1) {
            p.pulseSpeed *= -1
          }
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle =
          p.color +
          Math.floor(p.opacity * 255)
            .toString(16)
            .padStart(2, "0")
        ctx.fill()

        p.x += p.speedX
        p.y += p.speedY

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1
      })

      requestAnimationFrame(draw)
    }

    draw()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0 opacity-30 pointer-events-none" />
}

// Enhanced Modern Gradient Background
const ModernGradientBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-blue-950/30 dark:to-indigo-950/30"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-400/10 to-indigo-500/10 blur-3xl rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-400/10 to-purple-500/10 blur-3xl rounded-full transform -translate-x-1/4 translate-y-1/4"></div>

      {/* Additional subtle animated gradients */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-300/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-300/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
      />
    </div>
  )
}

// Enhanced Testimonial Card with animations and better visuals
const TestimonialCard = ({ name, role, text, rating, image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
      className="bg-white dark:bg-gray-800/80 p-6 rounded-xl shadow-lg relative border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm"
    >
      <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 w-20 h-20 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-2xl"></div>

      <div className="flex items-start gap-4 relative z-10">
        <div className="rounded-full overflow-hidden w-14 h-14 flex-shrink-0 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 flex items-center justify-center border-2 border-white dark:border-gray-700 shadow-md">
          {image ? (
            <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">{name.charAt(0)}</span>
          )}
        </div>

        <div className="flex-1">
          <h4 className="font-bold text-gray-900 dark:text-white text-lg">{name}</h4>
          <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-1">{role}</p>
          <div className="flex mt-1 mb-3">
            {Array.from({ length: rating }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
              </motion.div>
            ))}
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-sm italic leading-relaxed">"{text}"</p>
        </div>
      </div>

      <div className="absolute bottom-3 right-3 opacity-10">
        <Linkedin className="h-8 w-8" />
      </div>
    </motion.div>
  )
}

// Export the FeatureCard component so it can be imported in included-resources-section.tsx
// Enhanced Feature Card with animations and better visuals
export const FeatureCard = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
      className="bg-white dark:bg-gray-800/80 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 w-24 h-24 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-2xl"></div>

      <div className="flex items-start gap-4 relative z-10">
        <motion.div
          whileHover={{ rotate: 10, scale: 1.05 }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-3 rounded-xl text-blue-600 dark:text-blue-400 shadow-sm border border-blue-100 dark:border-blue-800/50"
        >
          {icon}
        </motion.div>
        <div>
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{title}</h4>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

// Enhanced FAQ Component with better animations and visuals
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Como funciona o LinkedIn Premium permanente?",
      answer:
        "Nosso método exclusivo permite que você obtenha acesso ao LinkedIn Premium de forma permanente sem pagar mensalidades. Utilizamos técnicas legítimas que exploram brechas no sistema de promoções e testes gratuitos do LinkedIn. Você receberá instruções detalhadas e suporte completo para ativar e manter seu acesso Premium indefinidamente.",
    },
    {
      question: "Isso é legal?",
      answer:
        "Sim. O conteúdo é 100% educacional. Você não infringe nenhuma regra. Tudo que ensinamos são técnicas de growth hacking e engenharia social que exploram brechas legítimas no sistema. Não há nada ilegal ou contra os termos de serviço do LinkedIn.",
    },
    {
      question: "Funciona mesmo?",
      answer:
        "Funciona comprovadamente. Temos mais de 3.700 alunos com resultados documentados. Garantia de 7 dias sem perguntas. Se você seguir o passo a passo e não conseguir os resultados prometidos, devolvemos 100% do seu dinheiro. Sem burocracia.",
    },
    {
      question: "Como recebo o acesso?",
      answer:
        "Após o pagamento, você recebe liberação imediata no seu e-mail. Você terá instruções detalhadas de acesso à área de membros exclusiva onde todo o conteúdo estará disponível para download e streaming. Suporte disponível 24/7 para ajudar com qualquer dúvida.",
    },
    {
      question: "Por que tão barato?",
      answer:
        "Porque nossa estratégia é de volume e impacto. Queremos democratizar o acesso a informação que antes era guardada a sete chaves. Estamos criando uma comunidade de insiders e precisamos espalhar esse conhecimento rapidamente antes que as brechas sejam fechadas.",
    },
    {
      question: "Preciso ter experiência técnica?",
      answer:
        "Não. Todo o material foi desenvolvido para ser acessível mesmo para quem não tem conhecimento técnico. Fornecemos tutoriais passo a passo, scripts prontos e ferramentas com interface amigável que qualquer pessoa pode usar, independente do seu nível de habilidade.",
    },
  ]

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      <div className="flex items-center justify-center gap-2 mb-8">
        <motion.div
          whileHover={{ rotate: 10, scale: 1.05 }}
          className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full"
        >
          <MessageSquare className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        </motion.div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center">Perguntas Frequentes</h3>
      </div>

      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="border border-gray-200 dark:border-gray-700/50 rounded-xl overflow-hidden bg-white dark:bg-gray-800/80 backdrop-blur-sm shadow-md"
        >
          <motion.button
            whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
            className="w-full px-6 py-4 text-left flex justify-between items-center text-gray-900 dark:text-white transition-colors"
            onClick={() => toggleQuestion(index)}
            type="button"
            aria-expanded={openIndex === index}
          >
            <div className="flex items-center gap-3">
              <motion.div whileHover={{ rotate: 10 }} className="bg-blue-100 dark:bg-blue-900/30 p-1.5 rounded-full">
                <Bookmark className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </motion.div>
              <span className="font-medium text-lg">{faq.question}</span>
            </div>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-100 dark:bg-gray-700/50 p-1.5 rounded-full"
            >
              <ChevronDown className="h-4 w-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
            </motion.div>
          </motion.button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700/50 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}

// Enhanced Testimonials with better visuals and animations
const Testimonials = () => {
  const testimonials = [
    {
      name: "Marcos Silva",
      role: "Dev Frontend",
      text: "O LinkedIn Premium permanente mudou tudo! Em 3 semanas: 4 propostas. Peguei a que me pagou 40% a mais. Melhor investimento que já fiz.",
      rating: 5,
    },
    {
      name: "Juliana Costa",
      role: "Product Manager",
      text: "O método de acesso permanente ao Premium me economizou R$1.200/ano. As ferramentas triplicaram minhas conexões. Resultado: vaga em multinacional com salário 2x maior.",
      rating: 5,
    },
    {
      name: "Rafael Mendes",
      role: "Analista de Dados",
      text: "Pensei que era exagero. Mas o Premium permanente + scripts funcionaram. 200+ conexões em 15 dias. 5 entrevistas. E tô contratado com um pacote 35% acima da média.",
      rating: 5,
    },
    {
      name: "Camila Rocha",
      role: "UX Designer",
      text: "Meu perfil estava invisível. Depois do Premium permanente e otimização, 3 recrutadores me procuraram na primeira semana. Fechei contrato com uma startup americana.",
      rating: 5,
    },
    {
      name: "Bruno Almeida",
      role: "Engenheiro de Software",
      text: "Estava há 6 meses procurando sem sucesso. Com o Premium permanente e as técnicas de otimização, consegui 8 entrevistas em 3 semanas e 3 ofertas para escolher.",
      rating: 5,
    },
    {
      name: "Fernanda Lima",
      role: "Marketing Digital",
      text: "As técnicas de engenharia social + Premium permanente são geniais. Consegui conexões com C-levels que antes nem respondiam. Resultado: promoção e aumento de 28%.",
      rating: 5,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          name={testimonial.name}
          role={testimonial.role}
          text={testimonial.text}
          rating={testimonial.rating}
          image={null}
          index={index}
        />
      ))}
    </div>
  )
}

// Enhanced Profile Scanner with better animations and visuals
const ProfileScanner = () => {
  const [scanning, setScanning] = useState(false)
  const [scanComplete, setScanComplete] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [scanProgress, setScanProgress] = useState(0)

  const scanSteps = [
    "Analisando visibilidade do perfil...",
    "Verificando otimização para recrutadores...",
    "Avaliando taxa de resposta...",
    "Comparando com perfis de alto desempenho...",
    "Identificando oportunidades de melhoria...",
  ]

  const scanResults = [
    "Visibilidade reduzida para 77% dos recrutadores",
    "Palavras-chave insuficientes para algoritmos de busca",
    "Perfil não otimizado para filtros de IA",
    "Taxa de resposta abaixo da média do mercado",
    "Potencial de conexões de qualidade não explorado",
  ]

  const startScan = () => {
    setScanning(true)
    setCurrentStep(0)
    setScanComplete(false)
    setScanProgress(0)

    // Progress animation
    const progressInterval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 1
      })
    }, 50)

    // Step animation
    setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= scanSteps.length - 1) {
            clearInterval(interval)
            setTimeout(() => {
              setScanComplete(true)
            }, 1000)
            return prev
          }
          return prev + 1
        })
      }, 1200)
    }, 1500)
  }

  return (
    <Card className="bg-white/90 dark:bg-gray-800/80 shadow-xl border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm rounded-xl overflow-hidden">
      <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 w-64 h-64 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 transform -translate-x-1/3 translate-y-1/3 w-64 h-64 bg-indigo-400/10 dark:bg-indigo-500/10 rounded-full blur-3xl"></div>

      <CardContent className="p-8 relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <motion.div
            whileHover={{ rotate: 10, scale: 1.05 }}
            className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 p-3 rounded-xl shadow-sm"
          >
            <Search className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </motion.div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Análise de Perfil</h3>
            <p className="text-blue-600 dark:text-blue-400">Descubra seu potencial oculto</p>
          </div>
        </div>

        {!scanning && !scanComplete ? (
          <div className="text-center">
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
              Descubra como seu perfil está sendo visto pelos recrutadores e o que você pode melhorar
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={startScan}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 rounded-xl text-lg shadow-lg"
                size="lg"
              >
                Iniciar Análise Gratuita
              </Button>
            </motion.div>
          </div>
        ) : (
          <div>
            <div className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700/50 rounded-xl p-6 overflow-hidden relative h-64 shadow-inner">
              {scanning && (
                <>
                  <p className="text-blue-600 dark:text-blue-400 mb-4 font-medium text-lg flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <Gauge className="h-5 w-5" />
                    </motion.div>
                    Analisando seu perfil...
                  </p>

                  {/* Progress bar */}
                  <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full mb-4 overflow-hidden shadow-inner">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
                      initial={{ width: "0%" }}
                      animate={{ width: `${scanProgress}%` }}
                      style={{ boxShadow: "0 0 8px rgba(59, 130, 246, 0.5)" }}
                    />
                  </div>

                  <div className="text-gray-700 dark:text-gray-300 mb-4 text-sm flex items-center justify-between">
                    <span>Progresso: {scanProgress}%</span>
                    <span className="text-blue-600 dark:text-blue-400 font-medium">{scanSteps[currentStep]}</span>
                  </div>

                  {currentStep > 0 && (
                    <div className="space-y-3">
                      {scanResults.slice(0, currentStep).map((result, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-amber-600 dark:text-amber-500 text-sm flex items-start gap-2 bg-amber-50 dark:bg-amber-900/20 p-2 rounded-lg border border-amber-100 dark:border-amber-800/30"
                        >
                          <AlertTriangle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                          <span>{result}</span>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Subtle scanning effect */}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 2,
                      ease: "linear",
                    }}
                  />
                </>
              )}

              {scanComplete && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                  <div className="space-y-3">
                    {scanResults.map((result, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="text-amber-600 dark:text-amber-500 text-sm flex items-start gap-2 bg-amber-50 dark:bg-amber-900/20 p-2 rounded-lg border border-amber-100 dark:border-amber-800/30"
                      >
                        <AlertTriangle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                        <span>{result}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="mt-6 text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2"
                  >
                    <Megaphone className="h-5 w-5 text-amber-500" />
                    Seu perfil está invisível para a maioria dos recrutadores.
                  </motion.div>
                </motion.div>
              )}
            </div>

            {scanComplete && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="mt-6 text-center"
              >
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                  Veja abaixo como obter o LinkedIn Premium permanentemente e otimizar seu perfil.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 rounded-xl text-lg shadow-lg"
                    size="lg"
                    onClick={() => {
                      const element = document.getElementById("ofertas")
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                  >
                    Ver Soluções Recomendadas
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

// Enhanced Results Comparison with better animations and visuals
const ResultsComparison = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-white/90 dark:bg-gray-800/80 p-8 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 w-64 h-64 bg-amber-400/10 dark:bg-amber-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.05 }}
              className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-xl shadow-sm"
            >
              <Lock className="h-6 w-6 text-amber-600 dark:text-amber-500" />
            </motion.div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">Sem LinkedIn Premium</h4>
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex justify-between mb-2">
                <p className="text-gray-700 dark:text-gray-300 font-medium">Visibilidade para Recrutadores</p>
                <p className="text-amber-600 dark:text-amber-500 font-bold">23%</p>
              </div>
              <div className="w-full h-5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-amber-400 to-amber-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "23%" }}
                  transition={{ duration: 1 }}
                  style={{ boxShadow: "0 0 8px rgba(251, 191, 36, 0.5)" }}
                />
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 italic">
                77% dos recrutadores nunca veem seu perfil
              </p>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <p className="text-gray-700 dark:text-gray-300 font-medium">Taxa de Resposta</p>
                <p className="text-amber-600 dark:text-amber-500 font-bold">38%</p>
              </div>
              <div className="w-full h-5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-amber-400 to-amber-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "38%" }}
                  transition={{ duration: 1 }}
                  style={{ boxShadow: "0 0 8px rgba(251, 191, 36, 0.5)" }}
                />
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 italic">
                Mais da metade das suas mensagens são ignoradas
              </p>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <p className="text-gray-700 dark:text-gray-300 font-medium">Acesso a Vagas Premium</p>
                <p className="text-amber-600 dark:text-amber-500 font-bold">12%</p>
              </div>
              <div className="w-full h-5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-amber-400 to-amber-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "12%" }}
                  transition={{ duration: 1 }}
                  style={{ boxShadow: "0 0 8px rgba(251, 191, 36, 0.5)" }}
                />
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 italic">
                88% das melhores vagas estão inacessíveis
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-white/90 dark:bg-gray-800/80 p-8 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 w-64 h-64 bg-green-400/10 dark:bg-green-500/10 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.05 }}
              className="bg-green-100 dark:bg-green-900/30 p-2 rounded-xl shadow-sm"
            >
              <Unlock className="h-6 w-6 text-green-600 dark:text-green-500" />
            </motion.div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">Com LinkedIn Premium Permanente</h4>
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex justify-between mb-2">
                <p className="text-gray-700 dark:text-gray-300 font-medium">Visibilidade para Recrutadores</p>
                <p className="text-green-600 dark:text-green-500 font-bold">97%</p>
              </div>
              <div className="w-full h-5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-400 to-green-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "97%" }}
                  transition={{ duration: 1 }}
                  style={{ boxShadow: "0 0 8px rgba(34, 197, 94, 0.5)" }}
                />
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 italic">
                Seu perfil aparece para quase todos os recrutadores
              </p>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <p className="text-gray-700 dark:text-gray-300 font-medium">Taxa de Resposta</p>
                <p className="text-green-600 dark:text-green-500 font-bold">92%</p>
              </div>
              <div className="w-full h-5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-400 to-green-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "92%" }}
                  transition={{ duration: 1 }}
                  style={{ boxShadow: "0 0 8px rgba(34, 197, 94, 0.5)" }}
                />
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 italic">
                Quase todas as suas mensagens recebem resposta
              </p>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <p className="text-gray-700 dark:text-gray-300 font-medium">Acesso a Vagas Premium</p>
                <p className="text-green-600 dark:text-green-500 font-bold">100%</p>
              </div>
              <div className="w-full h-5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-400 to-green-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1 }}
                  style={{ boxShadow: "0 0 8px rgba(34, 197, 94, 0.5)" }}
                />
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 italic">
                Acesso total às melhores oportunidades do mercado
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

// Enhanced Guaranteed Results with better animations and visuals
const GuaranteedResults = () => {
  const results = [
    {
      icon: <Infinity />,
      title: "LinkedIn Premium Permanente",
      description: "Acesso a todos os recursos premium sem pagar mensalidade",
    },
    {
      icon: <Eye />,
      title: "300% mais visibilidade",
      description: "Seu perfil aparecerá para muito mais recrutadores",
    },
    {
      icon: <TrendingUp />,
      title: "5x mais conexões",
      description: "Aumente sua rede de forma exponencial e estratégica",
    },
    {
      icon: <CheckCheck />,
      title: "Resposta em 24h",
      description: "Recrutadores responderão suas mensagens rapidamente",
    },
  ]

  return (
    <Card className="bg-white/90 dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700/50 shadow-xl backdrop-blur-sm rounded-xl overflow-hidden">
      <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 w-64 h-64 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 transform -translate-x-1/3 translate-y-1/3 w-64 h-64 bg-indigo-400/10 dark:bg-indigo-500/10 rounded-full blur-3xl"></div>

      <CardContent className="p-8 relative z-10">
        <div className="flex items-center justify-center gap-3 mb-8">
          <motion.div
            whileHover={{ rotate: 10, scale: 1.05 }}
            className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 p-3 rounded-xl shadow-sm"
          >
            <ThumbsUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </motion.div>
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white">Resultados Garantidos</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
              className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700/30 text-center"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800/30 shadow-md"
              >
                {result.icon}
              </motion.div>
              <h4 className="text-gray-900 dark:text-white font-bold mb-2 text-lg">{result.title}</h4>
              <p className="text-gray-600 dark:text-gray-400">{result.description}</p>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

// Enhanced Pricing Section with better animations and visuals
const PricingSection = () => {
  const [stockCount, setStockCount] = useState(37)
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null)
  const [hoveredPackage, setHoveredPackage] = useState<number | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setStockCount((prev) => {
        if (prev > 1) {
          return prev - 1
        }
        clearInterval(interval)
        return 1
      })
    }, 60000) // Diminui 1 a cada minuto
  }, [])

  // Função para simular o processo de compra
  const handlePurchase = (packageId: number) => {
    setSelectedPackage(packageId)

    // Redirecionar para o link de pagamento correspondente
    if (packageId === 1) {
      window.open("https://pay.kiwify.com.br/ppiZmfI", "_blank")
    } else if (packageId === 2) {
      window.open("https://pay.kiwify.com.br/D668adt", "_blank")
    } else if (packageId === 3) {
      window.open("https://pay.kiwify.com.br/NeHnyLl", "_blank")
    }
  }

  return (
    <div id="ofertas">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center gap-2 mb-4 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full">
          <Infinity className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span className="text-blue-800 dark:text-blue-300 font-medium">LINKEDIN PREMIUM PERMANENTE</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Desbloqueie o LinkedIn Premium Permanentemente
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
          Escolha a solução que melhor atende às suas necessidades e obtenha acesso ao LinkedIn Premium de forma
          permanente, além de técnicas avançadas de otimização de perfil
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Pacote 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative"
          onMouseEnter={() => setHoveredPackage(1)}
          onMouseLeave={() => setHoveredPackage(null)}
        >
          <Card
            className={`bg-white/90 dark:bg-gray-800/80 border-gray-100 dark:border-gray-700/50 overflow-hidden h-full backdrop-blur-sm rounded-xl transition-all duration-300 ${
              selectedPackage === 1 ? "ring-4 ring-blue-500/50" : ""
            } ${hoveredPackage === 1 ? "shadow-2xl -translate-y-2" : "shadow-xl"}`}
          >
            <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 w-64 h-64 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl"></div>

            <CardContent className="p-8 relative z-10">
              <div className="flex items-center mb-4">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.05 }}
                  className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 p-2 rounded-xl shadow-sm mr-3"
                >
                  <Unlock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Acesso Premium Básico</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">ACESSO PERMANENTE</p>
                </div>
              </div>

              <div className="mb-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800/30">
                <p className="text-gray-500 dark:text-gray-400 line-through text-sm">R$ 29,90</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">R$ 9,90</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2 text-sm">pagamento único</span>
                </div>
              </div>

              <ul className="space-y-4 text-gray-600 dark:text-gray-300 mb-6">
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mt-0.5">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500" />
                  </div>
                  <span>LinkedIn Premium Permanente</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mt-0.5">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500" />
                  </div>
                  <span>Guia de otimização básica de perfil</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mt-0.5">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500" />
                  </div>
                  <span>Templates de headline otimizados</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mt-0.5">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500" />
                  </div>
                  <span>Acesso imediato sem cartão</span>
                </li>
              </ul>

              <div className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-xl mb-6 border border-gray-200 dark:border-gray-700/50">
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <span className="font-bold">Ideal para:</span> Quem quer acesso permanente ao LinkedIn Premium e
                  melhorar o básico do perfil
                </p>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-6 rounded-xl text-lg shadow-lg"
                  onClick={() => handlePurchase(1)}
                >
                  Obter Premium Permanente
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Pacote 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
          onMouseEnter={() => setHoveredPackage(2)}
          onMouseLeave={() => setHoveredPackage(null)}
        >
          <motion.div
            className="absolute top-0 right-0 left-0 mx-auto w-max bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold px-6 py-2 rounded-b-xl shadow-lg z-10"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            MAIS POPULAR
          </motion.div>

          <Card
            className={`bg-white/90 dark:bg-gray-800/80 border-gray-100 dark:border-gray-700/50 overflow-hidden h-full backdrop-blur-sm rounded-xl transition-all duration-300 ${
              selectedPackage === 2 ? "ring-4 ring-blue-500/50" : ""
            } ${hoveredPackage === 2 ? "shadow-2xl -translate-y-2" : "shadow-xl"} mt-6`}
          >
            <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 w-64 h-64 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 transform -translate-x-1/3 translate-y-1/3 w-64 h-64 bg-indigo-400/10 dark:bg-indigo-500/10 rounded-full blur-3xl"></div>

            <CardContent className="p-8 relative z-10">
              <div className="flex items-center mb-4">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.05 }}
                  className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 p-2 rounded-xl shadow-sm mr-3"
                >
                  <Rocket className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Acesso Premium Pro</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">VISIBILIDADE AVANÇADA</p>
                </div>
              </div>

              <div className="mb-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800/30">
                <p className="text-gray-500 dark:text-gray-400 line-through text-sm">R$ 97,00</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">R$ 19,99</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2 text-sm">pagamento único</span>
                </div>
              </div>

              <ul className="space-y-4 text-gray-600 dark:text-gray-300 mb-6">
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mt-0.5">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500" />
                  </div>
                  <span>LinkedIn Premium Permanente</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mt-0.5">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500" />
                  </div>
                  <span>Scripts de automação de conexões</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mt-0.5">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500" />
                  </div>
                  <span>Estratégia de conteúdo personalizada</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mt-0.5">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500" />
                  </div>
                  <span>Técnicas de engajamento com recrutadores</span>
                </li>
              </ul>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl mb-6 border border-blue-100 dark:border-blue-800/30">
                <div className="flex items-center gap-2">
                  <Flame className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    <span className="font-bold text-blue-700 dark:text-blue-400">Recomendado:</span> Premium permanente
                    + otimização completa do perfil
                  </p>
                </div>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <PulsatingButton
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-6 rounded-xl text-lg shadow-lg"
                  onClick={() => handlePurchase(2)}
                >
                  Escolher Este Plano
                </PulsatingButton>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Pacote 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative"
          onMouseEnter={() => setHoveredPackage(3)}
          onMouseLeave={() => setHoveredPackage(null)}
        >
          <Card
            className={`bg-white/90 dark:bg-gray-800/80 border-gray-100 dark:border-gray-700/50 overflow-hidden h-full backdrop-blur-sm rounded-xl transition-all duration-300 ${
              selectedPackage === 3 ? "ring-4 ring-blue-500/50" : ""
            } ${hoveredPackage === 3 ? "shadow-2xl -translate-y-2" : "shadow-xl"}`}
          >
            <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 w-64 h-64 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl"></div>

            <CardContent className="p-8 relative z-10">
              <div className="flex items-center mb-4">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.05 }}
                  className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 p-2 rounded-xl shadow-sm mr-3"
                >
                  <Crown className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Arsenal Completo</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">SISTEMA COMPLETO</p>
                </div>
              </div>

              <div className="mb-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800/30">
                <p className="text-gray-500 dark:text-gray-400 line-through text-sm">R$ 126,90</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">R$ 24,90</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2 text-sm">pagamento único</span>
                </div>
              </div>

              <ul className="space-y-4 text-gray-600 dark:text-gray-300 mb-6">
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mt-0.5">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500" />
                  </div>
                  <span>LinkedIn Premium Permanente</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mt-0.5">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500" />
                  </div>
                  <span>Algoritmos de manipulação de visibilidade</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mt-0.5">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500" />
                  </div>
                  <span>Técnicas avançadas de engenharia social</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full mt-0.5">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-500" />
                  </div>
                  <span>Sistema de posicionamento como autoridade</span>
                </li>
              </ul>

              <div className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-xl mb-6 border border-gray-200 dark:border-gray-700/50">
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <span className="font-bold">Acesso completo:</span> Premium permanente + todas as ferramentas
                  avançadas
                </p>
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-6 rounded-xl text-lg shadow-lg"
                  onClick={() => handlePurchase(3)}
                >
                  Obter Arsenal Completo
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="text-center mt-4 mb-8 text-gray-500 dark:text-gray-400 text-sm">
        <p>
          Restam apenas <span className="font-bold text-amber-500">{stockCount}</span> vagas disponíveis hoje. Garanta a
          sua!
        </p>
      </div>
    </div>
  )
}

// Include PersonalizedRecommendations component
const PersonalizedRecommendations = ({ recommendations }) => {
  if (!recommendations) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white/90 dark:bg-gray-800/80 p-6 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm mb-12"
    >
      <div className="flex items-center gap-3 mb-4">
        <motion.div
          whileHover={{ rotate: 10, scale: 1.05 }}
          className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 p-2 rounded-xl shadow-sm"
        >
          <Rocket className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        </motion.div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{recommendations.title}</h3>
          <p className="text-blue-600 dark:text-blue-400 text-sm">{recommendations.description}</p>
        </div>
      </div>

      <div className="space-y-3 mt-4">
        {recommendations.actionItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.3 }}
            className="flex items-start gap-3 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-100 dark:border-blue-800/30"
          >
            <div className="bg-blue-100 dark:bg-blue-900/30 p-1 rounded-full text-blue-600 dark:text-blue-400 mt-0.5">
              <CheckCircle className="h-4 w-4" />
            </div>
            <span className="text-gray-700 dark:text-gray-300">{item}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

// Modifique a função LinkedInHackPage para usar o componente de elegibilidade
export function LinkedInHackPage({ initialQuizResults }) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Componente de elegibilidade */}
      <LinkedInPremiumEligibility quizResults={initialQuizResults} />
    </div>
  )
}
