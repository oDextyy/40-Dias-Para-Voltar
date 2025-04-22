"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  BarChart,
  Users,
  MessageSquare,
  Award,
  Linkedin,
  RefreshCw,
  ThumbsUp,
  Eye,
  ArrowRight,
  Share2,
  TrendingUp,
  FileText,
  Camera,
  Sparkles,
  Briefcase,
  Star,
  Zap,
  Crown,
  Unlock,
  Lightbulb,
} from "lucide-react"

// Simplified quiz questions with clearer language
const quizQuestions = [
  {
    id: 1,
    question: "Como está a foto do seu perfil no LinkedIn?",
    options: [
      { id: "a", text: "Não tenho foto", score: 1 },
      { id: "b", text: "Tenho uma foto casual", score: 2 },
      { id: "c", text: "Tenho uma foto profissional", score: 3 },
      { id: "d", text: "Tenho uma foto profissional recente e de alta qualidade", score: 4 },
    ],
    icon: <Camera className="h-6 w-6" />,
    category: "completude",
    tip: "Uma boa foto de perfil aumenta em 14x suas chances de ser visto por recrutadores.",
  },
  {
    id: 2,
    question: "O título abaixo do seu nome descreve bem o que você faz?",
    options: [
      { id: "a", text: "Só coloquei meu cargo atual", score: 1 },
      { id: "b", text: "Tenho cargo e empresa apenas", score: 2 },
      { id: "c", text: "Incluí algumas palavras-chave importantes", score: 3 },
      { id: "d", text: "Meu título é completo e mostra meu valor profissional", score: 4 },
    ],
    icon: <FileText className="h-6 w-6" />,
    category: "completude",
    tip: "O título é a segunda coisa mais vista depois da sua foto. Use palavras-chave que recrutadores buscam.",
  },
  {
    id: 3,
    question: "Com que frequência você publica conteúdo no LinkedIn?",
    options: [
      { id: "a", text: "Nunca publico nada", score: 1 },
      { id: "b", text: "Raramente (uma vez por mês ou menos)", score: 2 },
      { id: "c", text: "Às vezes (semanalmente)", score: 3 },
      { id: "d", text: "Regularmente (várias vezes por semana)", score: 4 },
    ],
    icon: <MessageSquare className="h-6 w-6" />,
    category: "engajamento",
    tip: "Perfis ativos aparecem até 5x mais nos resultados de busca.",
  },
  {
    id: 4,
    question: "Quantas conexões você tem no LinkedIn?",
    options: [
      { id: "a", text: "Menos de 100", score: 1 },
      { id: "b", text: "Entre 100 e 300", score: 2 },
      { id: "c", text: "Entre 300 e 500", score: 3 },
      { id: "d", text: "Mais de 500", score: 4 },
    ],
    icon: <Users className="h-6 w-6" />,
    category: "rede",
    tip: "Ter mais de 500 conexões aumenta sua credibilidade e amplia seu alcance.",
  },
  {
    id: 5,
    question: "Você interage com o conteúdo de outras pessoas?",
    options: [
      { id: "a", text: "Raramente interajo", score: 1 },
      { id: "b", text: "Às vezes curto alguns posts", score: 2 },
      { id: "c", text: "Curto e comento regularmente", score: 3 },
      { id: "d", text: "Interajo diariamente com comentários relevantes", score: 4 },
    ],
    icon: <ThumbsUp className="h-6 w-6" />,
    category: "engajamento",
    tip: "Comentários relevantes geram 8x mais visibilidade que apenas curtidas.",
  },
  {
    id: 6,
    question: "Como você descreve suas experiências profissionais?",
    options: [
      { id: "a", text: "Apenas listei empresas e cargos", score: 1 },
      { id: "b", text: "Adicionei descrições básicas", score: 2 },
      { id: "c", text: "Descrevi responsabilidades e algumas conquistas", score: 3 },
      { id: "d", text: "Detalhei conquistas com números e resultados", score: 4 },
    ],
    icon: <Briefcase className="h-6 w-6" />,
    category: "completude",
    tip: "Experiências com resultados quantificáveis aumentam em 40% suas chances de ser contatado.",
  },
  {
    id: 7,
    question: "Você recebe mensagens de recrutadores?",
    options: [
      { id: "a", text: "Nunca recebi", score: 1 },
      { id: "b", text: "Raramente (uma ou duas vezes por ano)", score: 2 },
      { id: "c", text: "Às vezes (algumas vezes por mês)", score: 3 },
      { id: "d", text: "Frequentemente (várias vezes por semana)", score: 4 },
    ],
    icon: <Eye className="h-6 w-6" />,
    category: "visibilidade",
    tip: "Perfis otimizados recebem até 5x mais mensagens de recrutadores.",
  },
  {
    id: 8,
    question: "Você tem recomendações no seu perfil?",
    options: [
      { id: "a", text: "Não tenho nenhuma", score: 1 },
      { id: "b", text: "Tenho 1-2 recomendações", score: 2 },
      { id: "c", text: "Tenho 3-5 recomendações", score: 3 },
      { id: "d", text: "Tenho mais de 5 recomendações", score: 4 },
    ],
    icon: <Award className="h-6 w-6" />,
    category: "completude",
    tip: "Recomendações aumentam sua credibilidade e são um diferencial para recrutadores.",
  },
  {
    id: 9,
    question: "Você busca novas conexões de forma estratégica?",
    options: [
      { id: "a", text: "Apenas aceito conexões que recebo", score: 1 },
      { id: "b", text: "Às vezes busco novas conexões", score: 2 },
      { id: "c", text: "Regularmente me conecto com pessoas estratégicas", score: 3 },
      { id: "d", text: "Tenho uma estratégia definida de networking", score: 4 },
    ],
    icon: <TrendingUp className="h-6 w-6" />,
    category: "estrategia",
    tip: "Networking estratégico é responsável por 85% das oportunidades de carreira.",
  },
  {
    id: 10,
    question: "Você já usou o LinkedIn Premium?",
    options: [
      { id: "a", text: "Nunca usei", score: 1 },
      { id: "b", text: "Usei apenas o período gratuito", score: 2 },
      { id: "c", text: "Já paguei por alguns meses", score: 3 },
      { id: "d", text: "Uso atualmente", score: 4 },
    ],
    icon: <Crown className="h-6 w-6" />,
    category: "premium",
    tip: "O LinkedIn Premium oferece recursos que podem aumentar sua visibilidade em até 300%.",
  },
]

// Simplified category descriptions
const categoryDescriptions = {
  completude: {
    low: "Seu perfil está incompleto, o que reduz sua visibilidade para recrutadores.",
    medium: "Seu perfil tem informações básicas, mas faltam elementos importantes.",
    high: "Seu perfil está bem completo, mas ainda há espaço para melhorias.",
  },
  engajamento: {
    low: "Sua atividade no LinkedIn é mínima, tornando você quase invisível.",
    medium: "Você tem alguma atividade, mas não o suficiente para maximizar sua visibilidade.",
    high: "Seu nível de engajamento é bom, mas pode ser ainda melhor.",
  },
  rede: {
    low: "Sua rede é muito limitada, reduzindo suas oportunidades profissionais.",
    medium: "Sua rede tem um tamanho razoável, mas está abaixo do ideal.",
    high: "Você tem uma boa rede, mas técnicas avançadas podem expandir seu alcance.",
  },
  visibilidade: {
    low: "Seu perfil está quase invisível para recrutadores e oportunidades premium.",
    medium: "Você tem alguma visibilidade, mas está longe do potencial máximo.",
    high: "Sua visibilidade é boa, mas técnicas avançadas podem melhorá-la ainda mais.",
  },
  estrategia: {
    low: "Você não tem uma estratégia clara para o LinkedIn.",
    medium: "Você tem algumas ações estratégicas, mas falta consistência.",
    high: "Sua estratégia é boa, mas técnicas avançadas podem multiplicar seus resultados.",
  },
  premium: {
    low: "Você está perdendo recursos valiosos por não usar o LinkedIn Premium.",
    medium: "Você já experimentou o LinkedIn Premium, mas não está aproveitando todo seu potencial.",
    high: "Você conhece o valor do LinkedIn Premium, mas pode aprender a usá-lo sem custos.",
  },
}

// Improvement suggestions with focus on LinkedIn Premium
const improvementSuggestions = {
  completude: [
    "Adicione uma foto profissional de alta qualidade",
    "Crie um título estratégico com palavras-chave relevantes",
    "Detalhe suas experiências com resultados quantificáveis",
    "Solicite recomendações de colegas e gestores",
    "Complete todas as seções do perfil",
  ],
  engajamento: [
    "Publique conteúdo relevante semanalmente",
    "Comente em publicações de influenciadores da sua área",
    "Participe de grupos relevantes para sua carreira",
    "Compartilhe conteúdo de valor com sua perspectiva",
    "Dedique 15-30 minutos por dia para engajamento",
  ],
  rede: [
    "Conecte-se com recrutadores da sua área",
    "Expanda sua rede com profissionais de empresas-alvo",
    "Use técnicas de networking automatizado",
    "Implemente a estratégia de conexões de 2º grau",
    "Participe de eventos e use o QR code do LinkedIn",
  ],
  visibilidade: [
    "Otimize seu perfil com palavras-chave estratégicas",
    "Ative o modo 'Open to Work' de forma personalizada",
    "Use técnicas para aparecer nas primeiras posições de busca",
    "Implemente hashtags estratégicas",
    "Crie conteúdo que demonstre sua expertise",
  ],
  estrategia: [
    "Defina objetivos claros para sua presença no LinkedIn",
    "Analise métricas semanalmente",
    "Implemente um calendário de conteúdo estratégico",
    "Use ferramentas avançadas para otimizar resultados",
    "Desenvolva uma estratégia de posicionamento como referência",
  ],
  premium: [
    "Aprenda a obter o LinkedIn Premium permanentemente sem mensalidade",
    "Utilize o InMail para contatar recrutadores diretamente",
    "Aproveite o modo incógnito para pesquisar concorrentes",
    "Use os dados comparativos salariais para negociações",
    "Destaque-se entre candidatos com o selo Premium",
  ],
}

// LinkedIn Premium benefits with more emphasis on perpetual access
const premiumBenefits = [
  {
    title: "Acesso Premium Permanente",
    description: "Aprenda como obter o LinkedIn Premium de forma permanente sem pagar mensalidades",
    icon: <Unlock className="h-5 w-5" />,
  },
  {
    title: "InMail direto para recrutadores",
    description: "Envie mensagens para pessoas fora da sua rede, incluindo recrutadores de elite",
    icon: <MessageSquare className="h-5 w-5" />,
  },
  {
    title: "Modo incógnito",
    description: "Navegue perfis sem deixar rastros, ideal para pesquisar concorrentes",
    icon: <Eye className="h-5 w-5" />,
  },
  {
    title: "Cursos exclusivos do LinkedIn Learning",
    description: "Acesso a mais de 16.000 cursos profissionais para aprimorar suas habilidades",
    icon: <Award className="h-5 w-5" />,
  },
  {
    title: "Destaque entre candidatos",
    description: "Seu perfil aparece em destaque nas buscas de recrutadores",
    icon: <Star className="h-5 w-5" />,
  },
  {
    title: "Dados comparativos salariais",
    description: "Veja como seu salário se compara com outros profissionais da sua área",
    icon: <BarChart className="h-5 w-5" />,
  },
]

// Enhanced floating tip component with animation
const FloatingTip = ({ tip }: { tip: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="mt-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 p-3 rounded-lg text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2 shadow-sm"
    >
      <Lightbulb className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
      <span>{tip}</span>
    </motion.div>
  )
}

// Main Quiz Component with improved UI
export function LinkedInQuizBR({ onComplete }: { onComplete: (results: any) => void }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [results, setResults] = useState<any>(null)
  const [showingResults, setShowingResults] = useState(false)
  const [loadingResults, setLoadingResults] = useState(false)
  const [showTip, setShowTip] = useState(false)
  const [animateBackground, setAnimateBackground] = useState(false)

  // Effect to animate background when quiz completes
  useEffect(() => {
    if (quizCompleted) {
      setAnimateBackground(true)
    }
  }, [quizCompleted])

  // Calculate progress percentage
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  // Handle option selection
  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId)
    setAnswers({ ...answers, [quizQuestions[currentQuestion].id]: optionId })
    setShowTip(true)
  }

  // Navigate to next question
  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedOption(answers[quizQuestions[currentQuestion + 1]?.id] || null)
      setShowTip(false)
    } else {
      setLoadingResults(true)
      setTimeout(() => {
        const results = calculateResults()
        setResults(results)
        setLoadingResults(false)
        setQuizCompleted(true)
        setShowingResults(true)
      }, 1500)
    }
  }

  // Navigate to previous question
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedOption(answers[quizQuestions[currentQuestion - 1].id] || null)
      setShowTip(false)
    }
  }

  // Calculate results with enhanced personalized recommendations
  const calculateResults = () => {
    const categories: Record<string, number[]> = {
      completude: [],
      engajamento: [],
      rede: [],
      visibilidade: [],
      estrategia: [],
      premium: [],
    }

    // Group scores by category
    quizQuestions.forEach((question) => {
      const answer = answers[question.id]
      if (answer) {
        const option = question.options.find((opt) => opt.id === answer)
        if (option && question.category) {
          categories[question.category].push(option.score)
        }
      }
    })

    // Calculate average score for each category
    const categoryScores: Record<string, number> = {}
    let totalScore = 0
    let totalQuestions = 0

    Object.keys(categories).forEach((category) => {
      const scores = categories[category]
      if (scores.length > 0) {
        const sum = scores.reduce((a, b) => a + b, 0)
        const average = sum / scores.length
        categoryScores[category] = average
        totalScore += sum
        totalQuestions += scores.length
      } else {
        categoryScores[category] = 0
      }
    })

    // Calculate overall score
    const overallScore = totalQuestions > 0 ? (totalScore / (totalQuestions * 4)) * 100 : 0

    // Determine weakest and strongest categories
    let weakestCategory = Object.keys(categoryScores)[0]
    let strongestCategory = Object.keys(categoryScores)[0]

    Object.keys(categoryScores).forEach((category) => {
      if (categoryScores[category] < categoryScores[weakestCategory]) {
        weakestCategory = category
      }
      if (categoryScores[category] > categoryScores[strongestCategory]) {
        strongestCategory = category
      }
    })

    // Generate improvement suggestions
    const suggestions: string[] = []

    // Add suggestions for weak categories
    Object.keys(categoryScores).forEach((category) => {
      const score = categoryScores[category]
      if (score < 2.5) {
        suggestions.push(...improvementSuggestions[category].slice(0, 2))
      }
    })

    // Add more suggestions from the weakest category
    suggestions.push(...improvementSuggestions[weakestCategory].slice(0, 3))

    // Remove duplicates
    const uniqueSuggestions = [...new Set(suggestions)]

    // Determine level for each category
    const categoryLevels: Record<string, string> = {}
    Object.keys(categoryScores).forEach((category) => {
      const score = categoryScores[category]
      if (score < 2) {
        categoryLevels[category] = "low"
      } else if (score < 3) {
        categoryLevels[category] = "medium"
      } else {
        categoryLevels[category] = "high"
      }
    })

    // Generate personalized recommendations
    const personalizedRecommendations = generatePersonalizedRecommendations(categoryScores, weakestCategory)

    // Prepare final results
    const finalResults = {
      overallScore: Math.round(overallScore),
      categoryScores,
      categoryLevels,
      weakestCategory,
      strongestCategory,
      suggestions: uniqueSuggestions.slice(0, 5),
      personalizedRecommendations,
      premiumRecommendations: generatePremiumRecommendations(categoryScores, weakestCategory),
    }

    return finalResults
  }

  // Generate LinkedIn Premium recommendations with focus on perpetual access
  const generatePremiumRecommendations = (categoryScores: Record<string, number>, weakestCategory: string) => {
    // Select relevant Premium benefits based on user's weakest areas
    let relevantBenefits = [...premiumBenefits]

    // Always put perpetual access first
    relevantBenefits = [
      premiumBenefits[0], // Perpetual access
      ...relevantBenefits.filter((_, i) => i !== 0),
    ]

    // Prioritize benefits based on weakest category
    if (weakestCategory === "visibilidade") {
      relevantBenefits = [
        premiumBenefits[0], // Perpetual access
        premiumBenefits[4], // Featured applicant
        ...relevantBenefits.filter((_, i) => i !== 0 && i !== 4),
      ]
    } else if (weakestCategory === "rede") {
      relevantBenefits = [
        premiumBenefits[0], // Perpetual access
        premiumBenefits[1], // InMail
        ...relevantBenefits.filter((_, i) => i !== 0 && i !== 1),
      ]
    } else if (weakestCategory === "completude" || weakestCategory === "estrategia") {
      relevantBenefits = [
        premiumBenefits[0], // Perpetual access
        premiumBenefits[3], // LinkedIn Learning
        ...relevantBenefits.filter((_, i) => i !== 0 && i !== 3),
      ]
    }

    return {
      title: "LinkedIn Premium Permanente",
      description:
        "O LinkedIn Premium é essencial para maximizar sua visibilidade e oportunidades. Veja como você pode obtê-lo permanentemente:",
      benefits: relevantBenefits.slice(0, 4), // Show top 4 most relevant benefits
      howToGet: [
        "Acesse nosso método exclusivo para obter o LinkedIn Premium permanentemente",
        "Sem necessidade de cartão de crédito ou compromissos mensais",
        "Acesso imediato após a compra do pacote",
        "Suporte completo para configuração e uso dos recursos premium",
      ],
    }
  }

  // Generate personalized recommendations with focus on LinkedIn Premium
  const generatePersonalizedRecommendations = (categoryScores: Record<string, number>, weakestCategory: string) => {
    const recommendations = {
      title: "Otimização de Perfil Personalizada",
      description: "Com base na sua análise, estas são as melhorias mais importantes para seu perfil:",
      actionItems: [] as string[],
    }

    // Always include LinkedIn Premium as first recommendation
    const premiumRecommendation = "Obtenha o LinkedIn Premium permanentemente sem pagar mensalidade"

    // Add action items based on weakest category
    switch (weakestCategory) {
      case "completude":
        recommendations.actionItems = [
          premiumRecommendation,
          "Adicione uma foto profissional de alta qualidade",
          "Crie um título estratégico com palavras-chave específicas do seu setor",
          "Detalhe suas experiências com resultados quantificáveis",
          "Solicite pelo menos 3 recomendações de colegas e gestores",
        ]
        break
      case "engajamento":
        recommendations.actionItems = [
          premiumRecommendation,
          "Estabeleça uma rotina de publicações semanais com conteúdo relevante",
          "Comente de forma estratégica em publicações de influenciadores da sua área",
          "Participe ativamente de grupos relevantes para sua carreira",
          "Utilize a técnica de engajamento 3-2-1 (3 comentários, 2 compartilhamentos, 1 post por dia)",
        ]
        break
      case "rede":
        recommendations.actionItems = [
          premiumRecommendation,
          "Conecte-se estrategicamente com recrutadores da sua área usando mensagens personalizadas",
          "Implemente a técnica de conexões de 2º grau para alcançar pessoas-chave",
          "Utilize scripts de automação para expandir sua rede de forma consistente",
          "Aplique a estratégia de networking reverso para atrair conexões de qualidade",
        ]
        break
      case "visibilidade":
        recommendations.actionItems = [
          premiumRecommendation,
          "Otimize seu perfil com palavras-chave que recrutadores realmente buscam",
          "Implemente a técnica de visibilidade cruzada com hashtags estratégicas",
          "Ative o modo 'Open to Work' de forma personalizada e estratégica",
          "Utilize técnicas avançadas para aparecer nas primeiras posições de busca",
        ]
        break
      case "estrategia":
        recommendations.actionItems = [
          premiumRecommendation,
          "Defina objetivos claros e mensuráveis para sua presença no LinkedIn",
          "Implemente um calendário de conteúdo estratégico para sua área",
          "Utilize ferramentas de análise para medir e otimizar seus resultados",
          "Desenvolva uma estratégia de posicionamento como autoridade no seu nicho",
        ]
        break
      case "premium":
        recommendations.actionItems = [
          premiumRecommendation,
          "Utilize o InMail para contatar recrutadores diretamente",
          "Aproveite o modo incógnito para pesquisar concorrentes sem deixar rastros",
          "Use os dados comparativos salariais para negociações mais eficazes",
          "Destaque-se entre candidatos com o selo Premium em suas candidaturas",
        ]
        break
    }

    return recommendations
  }

  // Premium recommendations component with enhanced visuals
  const PremiumRecommendations = ({ recommendations }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 border border-blue-200 dark:border-blue-800/40 rounded-xl p-6 mb-8 shadow-md relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400/5 rounded-full blur-2xl transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-400/5 rounded-full blur-2xl transform -translate-x-1/4 translate-y-1/4"></div>

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-blue-500/5 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "linear" }}
        />

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 p-2 rounded-full shadow-md"
            >
              <Crown className="h-5 w-5 text-white" />
            </motion.div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{recommendations.title}</h3>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-6">{recommendations.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {recommendations.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
                className="bg-white dark:bg-gray-800/50 p-4 rounded-lg border border-blue-100 dark:border-blue-900/30 flex items-start gap-3 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full text-blue-600 dark:text-blue-400 mt-0.5">
                  {benefit.icon}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-sm">{benefit.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="bg-blue-100/50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800/30 shadow-inner"
          >
            <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <Zap className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              Como obter o LinkedIn Premium permanentemente:
            </h4>
            <div className="space-y-2">
              {recommendations.howToGet.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                  className="flex items-start gap-2"
                >
                  <div className="bg-blue-200 dark:bg-blue-800/50 p-1 rounded-full text-blue-600 dark:text-blue-400 mt-0.5">
                    <CheckCircle className="h-3 w-3" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    )
  }

  // Personalized recommendations component with enhanced visuals
  const PersonalizedRecommendations = ({ recommendations }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700/50 rounded-xl p-6 mb-8 shadow-sm relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400/5 rounded-full blur-2xl transform translate-x-1/4 -translate-y-1/4"></div>

        <div className="relative z-10">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            {recommendations.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{recommendations.description}</p>

          <div className="space-y-3">
            {recommendations.actionItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                className="flex items-start gap-3"
              >
                <div className="bg-blue-100 dark:bg-blue-800/30 p-1 rounded-full text-blue-600 dark:text-blue-400 mt-0.5">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    )
  }

  // Handle quiz completion
  const handleComplete = () => {
    if (onComplete && results) {
      onComplete(results)
    }
  }

  // Restart quiz
  const handleRestart = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setSelectedOption(null)
    setQuizCompleted(false)
    setShowingResults(false)
    setResults(null)
    setAnimateBackground(false)
  }

  // Share results
  const handleShare = () => {
    if (!results) return

    const score = results.overallScore
    const text = `Acabei de descobrir que meu perfil do LinkedIn está ${score < 40 ? "invisível" : score < 70 ? "subotimizado" : "parcialmente otimizado"} (${score}%). Faça o teste e descubra como está o seu!`

    if (navigator.share) {
      navigator.share({
        title: "Meu resultado no Quiz do LinkedIn",
        text: text,
        url: window.location.href,
      })
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(`${text} ${window.location.href}`)
      alert("Link copiado para a área de transferência!")
    }
  }

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-all duration-700 ${
        animateBackground
          ? "bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-950/40"
          : "bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-950/30"
      } p-4 relative overflow-hidden`}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-indigo-400/10 dark:bg-indigo-500/10 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>

      <div className="w-full max-w-3xl relative z-10">
        <AnimatePresence mode="wait">
          {!quizCompleted ? (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              {/* Quiz Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white relative overflow-hidden">
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "linear" }}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <motion.div whileHover={{ rotate: 10 }} className="bg-white/20 p-2 rounded-lg">
                        <Linkedin className="h-6 w-6" />
                      </motion.div>
                      <h2 className="text-xl font-bold">Análise de Perfil LinkedIn</h2>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full"
                    >
                      {currentQuestion + 1} de {quizQuestions.length}
                    </motion.div>
                  </div>
                  <Progress value={progress} className="h-2 bg-white/20" indicatorClassName="bg-white" />
                </div>
              </div>

              {/* Quiz Content */}
              <div className="p-6">
                {loadingResults ? (
                  <div className="py-12 flex flex-col items-center justify-center">
                    <div className="relative w-20 h-20 mb-4">
                      <motion.div
                        className="absolute inset-0 border-4 border-blue-200 dark:border-blue-900 rounded-full"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0.5 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                      />
                      <motion.div
                        className="absolute inset-0 border-4 border-t-blue-600 border-r-transparent border-b-transparent border-l-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Analisando suas respostas...
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Estamos calculando seu perfil de visibilidade no LinkedIn
                    </p>

                    {/* Loading animation */}
                    <motion.div className="mt-6 h-1 w-48 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      />
                    </motion.div>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <div className="flex items-center gap-3 mb-4">
                        <motion.div
                          whileHover={{ rotate: 10, scale: 1.05 }}
                          className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg text-blue-600 dark:text-blue-400"
                        >
                          {quizQuestions[currentQuestion].icon}
                        </motion.div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {quizQuestions[currentQuestion].question}
                        </h3>
                      </div>

                      <div className="space-y-3">
                        {quizQuestions[currentQuestion].options.map((option) => (
                          <motion.div
                            key={option.id}
                            whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)" }}
                            whileTap={{ scale: 0.98 }}
                            className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                              selectedOption === option.id
                                ? "border-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:border-blue-500"
                                : "border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700"
                            }`}
                            onClick={() => handleOptionSelect(option.id)}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-5 h-5 rounded-full flex items-center justify-center border-2 ${
                                  selectedOption === option.id
                                    ? "border-blue-600 bg-blue-600 dark:border-blue-500 dark:bg-blue-500"
                                    : "border-gray-300 dark:border-gray-600"
                                }`}
                              >
                                {selectedOption === option.id && (
                                  <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-2 h-2 bg-white rounded-full"
                                  />
                                )}
                              </div>
                              <span
                                className={`text-lg ${
                                  selectedOption === option.id
                                    ? "text-gray-900 dark:text-white font-medium"
                                    : "text-gray-700 dark:text-gray-300"
                                }`}
                              >
                                {option.text}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      <AnimatePresence>
                        {showTip && selectedOption && <FloatingTip tip={quizQuestions[currentQuestion].tip} />}
                      </AnimatePresence>
                    </div>

                    <div className="flex justify-between">
                      <Button
                        variant="outline"
                        onClick={handlePrevious}
                        disabled={currentQuestion === 0}
                        className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <ChevronLeft className="h-4 w-4" />
                        Anterior
                      </Button>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          onClick={handleNext}
                          disabled={!selectedOption}
                          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
                        >
                          {currentQuestion < quizQuestions.length - 1 ? (
                            <>
                              Próxima
                              <ChevronRight className="h-4 w-4" />
                            </>
                          ) : (
                            <>
                              Ver Resultados
                              <BarChart className="h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              {/* Results Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white relative overflow-hidden">
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "linear" }}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <motion.div whileHover={{ rotate: 10 }} className="bg-white/20 p-2 rounded-lg">
                      <BarChart className="h-6 w-6" />
                    </motion.div>
                    <h2 className="text-xl font-bold">Resultado da Sua Análise</h2>
                  </div>
                  <p className="text-white/80">
                    Com base nas suas respostas, identificamos oportunidades para otimizar seu perfil
                  </p>
                </div>
              </div>

              {/* Results Content */}
              <div className="p-6">
                {/* Overall Score */}
                <div className="mb-8 text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <div className="absolute inset-0 rounded-full bg-gray-100 dark:bg-gray-700"></div>
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="10"
                        className="dark:stroke-gray-600"
                      />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="10"
                        strokeDasharray="282.7"
                        strokeDashoffset={282.7 - (282.7 * results?.overallScore) / 100}
                        strokeLinecap="round"
                        initial={{ strokeDashoffset: 282.7 }}
                        animate={{ strokeDashoffset: 282.7 - (282.7 * results?.overallScore) / 100 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#2563EB" />
                          <stop offset="100%" stopColor="#4F46E5" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div>
                        <motion.div
                          className="text-3xl font-bold text-gray-900 dark:text-white"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
                        >
                          {results?.overallScore}%
                        </motion.div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Pontuação</div>
                      </div>
                    </div>
                  </div>

                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="text-xl font-bold text-gray-900 dark:text-white mb-2"
                  >
                    Seu Perfil LinkedIn Está{" "}
                    <span
                      className={
                        results?.overallScore < 40
                          ? "text-red-500 dark:text-red-400"
                          : results?.overallScore < 70
                            ? "text-amber-500 dark:text-amber-400"
                            : "text-green-500 dark:text-green-400"
                      }
                    >
                      {results?.overallScore < 40
                        ? "Invisível"
                        : results?.overallScore < 70
                          ? "Subotimizado"
                          : "Parcialmente Otimizado"}
                    </span>
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.7, duration: 0.5 }}
                    className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto"
                  >
                    {results?.overallScore < 40
                      ? "Seu perfil está praticamente invisível para recrutadores. Você está perdendo oportunidades valiosas."
                      : results?.overallScore < 70
                        ? "Seu perfil tem potencial, mas não está otimizado para atrair as melhores oportunidades."
                        : "Seu perfil tem uma boa base, mas técnicas avançadas podem multiplicar seus resultados."}
                  </motion.p>
                </div>

                {/* LinkedIn Premium Recommendations */}
                {results?.premiumRecommendations && (
                  <div className="mb-8">
                    <PremiumRecommendations recommendations={results.premiumRecommendations} />
                  </div>
                )}

                {/* Personalized Recommendations */}
                {results?.personalizedRecommendations && (
                  <div className="mb-8">
                    <PersonalizedRecommendations recommendations={results.personalizedRecommendations} />
                  </div>
                )}

                {/* Category Scores */}
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Análise por Categoria</h3>
                  <div className="space-y-4">
                    {results &&
                      Object.keys(results.categoryScores).map((category, index) => {
                        const score = results.categoryScores[category]
                        const percentage = (score / 4) * 100
                        const level = results.categoryLevels[category]

                        return (
                          <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                            className="space-y-2"
                          >
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-2">
                                <span className="capitalize text-gray-700 dark:text-gray-300 font-medium">
                                  {category === "completude"
                                    ? "Completude do Perfil"
                                    : category === "engajamento"
                                      ? "Engajamento"
                                      : category === "rede"
                                        ? "Rede de Contatos"
                                        : category === "visibilidade"
                                          ? "Visibilidade"
                                          : category === "premium"
                                            ? "LinkedIn Premium"
                                            : "Estratégia"}
                                </span>
                                {category === results.weakestCategory && (
                                  <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2 + index * 0.1 + 0.3, type: "spring" }}
                                    className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-500 text-xs px-2 py-0.5 rounded-full"
                                  >
                                    Precisa de atenção
                                  </motion.span>
                                )}
                                {category === results.strongestCategory && (
                                  <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2 + index * 0.1 + 0.3, type: "spring" }}
                                    className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-500 text-xs px-2 py-0.5 rounded-full"
                                  >
                                    Ponto forte
                                  </motion.span>
                                )}
                              </div>
                              <span className="text-gray-900 dark:text-white font-bold">{Math.round(percentage)}%</span>
                            </div>
                            <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                              <motion.div
                                className={`h-full rounded-full ${
                                  percentage < 40 ? "bg-red-500" : percentage < 70 ? "bg-amber-500" : "bg-green-500"
                                }`}
                                initial={{ width: "0%" }}
                                animate={{ width: `${percentage}%` }}
                                transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                              />
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {categoryDescriptions[category][level]}
                            </p>
                          </motion.div>
                        )
                      })}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      onClick={handleRestart}
                      variant="outline"
                      className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <RefreshCw className="h-4 w-4" />
                      Refazer Análise
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      onClick={handleShare}
                      variant="outline"
                      className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800/30 flex items-center gap-2"
                    >
                      <Share2 className="h-4 w-4" />
                      Compartilhar Resultado
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative">
                    {/* Pulsating effect */}
                    <motion.div
                      className="absolute inset-0 rounded-md bg-blue-400/30 dark:bg-blue-500/30 blur-md"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />
                    <Button
                      onClick={handleComplete}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white flex items-center gap-2 relative z-10 shadow-md"
                    >
                      Ver Soluções Recomendadas
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
