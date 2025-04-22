"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Crown,
  CheckCircle,
  Users,
  MessageSquare,
  Search,
  Award,
  Eye,
  Zap,
  Star,
  Sparkles,
  ArrowRight,
  Rocket,
} from "lucide-react"

export function RecommendationScreen({ quizResults, selectedPackage }) {
  const [activeTab, setActiveTab] = useState("premium")

  // Recomendações do LinkedIn Premium
  const premiumRecommendations = [
    {
      title: "Mensagens InMail",
      description: "Envie mensagens diretas para recrutadores e gerentes de contratação fora da sua rede",
      steps: [
        "Acesse sua conta Premium através do nosso método exclusivo",
        "Navegue até o perfil da pessoa que deseja contatar",
        "Clique no botão 'Mensagem' para enviar um InMail",
        "Use nossos modelos comprovados para taxas de resposta 3x maiores",
      ],
      icon: <MessageSquare className="h-5 w-5" />,
    },
    {
      title: "Quem Visualizou Seu Perfil",
      description: "Veja todos que visualizaram seu perfil nos últimos 90 dias",
      steps: [
        "Acesse a seção 'Quem visualizou seu perfil'",
        "Revise a lista completa de visualizadores (não limitada a 5)",
        "Use nossa estratégia de acompanhamento para se conectar com recrutadores interessados",
        "Implemente nossa técnica de aumento de visibilidade para aumentar as visualizações do perfil",
      ],
      icon: <Eye className="h-5 w-5" />,
    },
    {
      title: "Insights de Candidatos",
      description: "Veja como você se compara a outros candidatos para o mesmo trabalho",
      steps: [
        "Candidate-se a vagas através do LinkedIn Jobs",
        "Visualize a seção 'Insights de Candidatos' para cada aplicação",
        "Use nossa técnica de análise competitiva para se destacar",
        "Ajuste sua estratégia de candidatura com base nos insights",
      ],
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Candidato em Destaque",
      description: "Coloque sua candidatura no topo da lista do recrutador",
      steps: [
        "Candidate-se a vagas com o botão 'Candidatar-se com LinkedIn'",
        "Ative a opção 'Candidato em Destaque' (apenas Premium)",
        "Use nossa otimização de perfil para maximizar a visibilidade em destaque",
        "Siga nossa estratégia de tempo de aplicação para melhores resultados",
      ],
      icon: <Star className="h-5 w-5" />,
    },
  ]

  // Recomendações de otimização de perfil
  const profileRecommendations = [
    {
      title: "Otimização de Headline",
      description: "Crie um headline atraente que atraia recrutadores e apareça nas pesquisas",
      steps: [
        "Use nossa fórmula de headline rica em palavras-chave: [Cargo] + [Especialização] + [Proposta de Valor]",
        "Inclua palavras-chave específicas do setor que os recrutadores procuram",
        "Limite a 120 caracteres para máximo impacto",
        "Atualize seu headline a cada 30 dias usando nossa estratégia de rotação",
      ],
      icon: <Award className="h-5 w-5" />,
    },
    {
      title: "Aumento de Visibilidade do Perfil",
      description: "Aumente a visibilidade do seu perfil nos resultados de pesquisa do LinkedIn",
      steps: [
        "Implemente nossa estrutura de perfil otimizada para SEO",
        "Adicione as 10 palavras-chave críticas em locais estratégicos",
        "Use nossas configurações de perfil para aumentar a visibilidade",
        "Implemente o padrão de atividade semanal para visibilidade algorítmica",
      ],
      icon: <Search className="h-5 w-5" />,
    },
    {
      title: "Engajamento Estratégico de Conteúdo",
      description: "Envolva-se com conteúdo para aumentar sua visibilidade para recrutadores",
      steps: [
        "Siga nossa fórmula de engajamento semanal 3-2-1",
        "Comente em publicações de empresas-alvo usando nossos modelos",
        "Compartilhe conteúdo do setor com nosso formato otimizado para visibilidade",
        "Implemente nosso tempo estratégico para máxima exposição",
      ],
      icon: <MessageSquare className="h-5 w-5" />,
    },
    {
      title: "Estratégia de Expansão de Rede",
      description: "Expanda sua rede com conexões de qualidade que importam",
      steps: [
        "Implemente nossa estratégia de solicitação de conexão direcionada",
        "Use nossos modelos comprovados de mensagem de conexão",
        "Siga o método de priorização de conexão de 2º grau",
        "Aplique nosso plano de crescimento semanal de conexão (15-20 conexões estratégicas)",
      ],
      icon: <Users className="h-5 w-5" />,
    },
  ]

  // Recomendações de técnicas avançadas
  const advancedRecommendations = [
    {
      title: "Aumento de Visibilidade Algorítmica",
      description: "Técnicas avançadas para manipular o algoritmo do LinkedIn para máxima visibilidade",
      steps: [
        "Implemente nosso padrão de atividade de perfil para preferência algorítmica",
        "Use a técnica de densidade de palavras-chave estratégicas em todas as seções do perfil",
        "Aplique nossa estratégia de engajamento de conteúdo para acionar impulsos algorítmicos",
        "Implemente a técnica de 'perfil sombra' para alcance expandido",
      ],
      icon: <Zap className="h-5 w-5" />,
    },
    {
      title: "Sistema de Atração de Recrutadores",
      description: "Técnicas especializadas para aparecer nas pesquisas de recrutadores",
      steps: [
        "Implemente nossa otimização de palavras-chave focada em recrutadores",
        "Use a técnica de 'aumento de sinal' para visibilidade de recrutadores",
        "Aplique nossa formatação especializada de seção de perfil para compatibilidade com ATS",
        "Implemente a estratégia semanal de engajamento com recrutadores",
      ],
      icon: <Sparkles className="h-5 w-5" />,
    },
    {
      title: "Manutenção de Acesso Premium",
      description: "Garanta que seu acesso ao LinkedIn Premium permaneça ativo permanentemente",
      steps: [
        "Siga nosso protocolo mensal de manutenção de conta",
        "Implemente a técnica de atualização de acesso a cada 60 dias",
        "Use nosso método de bypass de verificação de conta quando solicitado",
        "Aplique a estratégia de rotação de recursos premium para saúde da conta",
      ],
      icon: <Crown className="h-5 w-5" />,
    },
    {
      title: "Aceleração de Oportunidades",
      description: "Acelere seu caminho para entrevistas e ofertas",
      steps: [
        "Implemente nossa otimização de perfil 'ímã de entrevista'",
        "Use a estratégia de alcance direto com nossos modelos comprovados",
        "Aplique a técnica de 'conexão interna' para indicações",
        "Implemente nossa rotina semanal de aceleração de oportunidades",
      ],
      icon: <Rocket className="h-5 w-5" />,
    },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-4"
        >
          <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span className="text-blue-800 dark:text-blue-300 font-medium">SUAS RECOMENDAÇÕES PERSONALIZADAS</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Sua{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Estratégia LinkedIn Premium
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
        >
          Com base na análise do seu perfil e no pacote selecionado, aqui estão suas recomendações personalizadas para
          maximizar seus benefícios do LinkedIn Premium e otimizar seu perfil.
        </motion.p>
      </div>

      <Card className="bg-white dark:bg-gray-800/90 shadow-xl border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm overflow-hidden mb-12">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/10 dark:bg-indigo-500/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>

        <CardHeader className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-full">
              <Crown className="h-5 w-5 text-white" />
            </div>
            <CardTitle className="text-xl text-gray-900 dark:text-white">
              Sua Estratégia de Acesso ao LinkedIn Premium
            </CardTitle>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Siga estas etapas para obter e manter seu acesso permanente ao LinkedIn Premium
          </p>
        </CardHeader>

        <CardContent className="relative z-10">
          <div className="space-y-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border border-blue-100 dark:border-blue-800/30">
              <h3 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Zap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                Método de Acesso Permanente ao LinkedIn Premium
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 dark:bg-blue-800/50 p-1 rounded-full mt-0.5 flex-shrink-0">
                    <span className="h-4 w-4 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs">
                      1
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm">Acesse Seu Pacote Premium</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Após a compra, você receberá acesso imediato ao seu pacote selecionado com instruções detalhadas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 dark:bg-blue-800/50 p-1 rounded-full mt-0.5 flex-shrink-0">
                    <span className="h-4 w-4 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs">
                      2
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                      Siga o Protocolo de Acesso Premium
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Nosso guia passo a passo o orientará pelo processo de ativação do LinkedIn Premium sem cobranças
                      recorrentes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 dark:bg-blue-800/50 p-1 rounded-full mt-0.5 flex-shrink-0">
                    <span className="h-4 w-4 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs">
                      3
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                      Implemente Procedimentos de Manutenção
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Aplique nossas técnicas proprietárias de manutenção para garantir que seu acesso Premium permaneça
                      ativo indefinidamente.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 dark:bg-blue-800/50 p-1 rounded-full mt-0.5 flex-shrink-0">
                    <span className="h-4 w-4 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs">
                      4
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                      Utilize Recursos Premium Estrategicamente
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Siga nosso guia para maximizar os benefícios dos seus recursos Premium para avanço profissional
                      ideal.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-5 rounded-xl border border-blue-100 dark:border-blue-800/30">
              <h3 className="font-bold text-gray-900 dark:text-white mb-3">O Que Você Receberá:</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 dark:bg-blue-800/50 p-1 rounded-full mt-0.5">
                    <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm">Guia de Acesso Detalhado</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Instruções passo a passo com capturas de tela
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 dark:bg-blue-800/50 p-1 rounded-full mt-0.5">
                    <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm">Protocolo de Manutenção</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Técnicas para manter acesso permanente</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 dark:bg-blue-800/50 p-1 rounded-full mt-0.5">
                    <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm">Guia de Solução de Problemas</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Soluções para quaisquer problemas potenciais
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 dark:bg-blue-800/50 p-1 rounded-full mt-0.5">
                    <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm">Guia de Recursos Premium</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Como maximizar cada recurso Premium</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mb-12">
        <Tabs defaultValue="premium" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-6">
            <TabsList className="grid grid-cols-3 w-full max-w-2xl">
              <TabsTrigger value="premium" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                <Crown className="h-4 w-4 mr-2" />
                Recursos Premium
              </TabsTrigger>
              <TabsTrigger value="profile" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                <Award className="h-4 w-4 mr-2" />
                Otimização de Perfil
              </TabsTrigger>
              <TabsTrigger value="advanced" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                <Sparkles className="h-4 w-4 mr-2" />
                Técnicas Avançadas
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="premium" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {premiumRecommendations.map((rec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-white dark:bg-gray-800/90 shadow-lg border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">{rec.icon}</div>
                        <h3 className="font-bold text-gray-900 dark:text-white">{rec.title}</h3>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{rec.description}</p>

                      <div className="space-y-3">
                        {rec.steps.map((step, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="bg-blue-100 dark:bg-blue-800/50 p-1 rounded-full mt-0.5 flex-shrink-0">
                              <span className="h-4 w-4 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs">
                                {idx + 1}
                              </span>
                            </div>
                            <p className="text-sm text-gray-700 dark:text-gray-300">{step}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="profile" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {profileRecommendations.map((rec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-white dark:bg-gray-800/90 shadow-lg border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-full">{rec.icon}</div>
                        <h3 className="font-bold text-gray-900 dark:text-white">{rec.title}</h3>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{rec.description}</p>

                      <div className="space-y-3">
                        {rec.steps.map((step, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="bg-indigo-100 dark:bg-indigo-800/50 p-1 rounded-full mt-0.5 flex-shrink-0">
                              <span className="h-4 w-4 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xs">
                                {idx + 1}
                              </span>
                            </div>
                            <p className="text-sm text-gray-700 dark:text-gray-300">{step}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="advanced" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {advancedRecommendations.map((rec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-white dark:bg-gray-800/90 shadow-lg border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-full">{rec.icon}</div>
                        <h3 className="font-bold text-gray-900 dark:text-white">{rec.title}</h3>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{rec.description}</p>

                      <div className="space-y-3">
                        {rec.steps.map((step, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="bg-purple-100 dark:bg-purple-800/50 p-1 rounded-full mt-0.5 flex-shrink-0">
                              <span className="h-4 w-4 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-xs">
                                {idx + 1}
                              </span>
                            </div>
                            <p className="text-sm text-gray-700 dark:text-gray-300">{step}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Pronto para Transformar Sua Experiência no LinkedIn?
        </h3>

        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
          Comece com seu pacote selecionado hoje e obtenha acesso permanente ao LinkedIn Premium junto com nossas
          poderosas estratégias de otimização.
        </p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
            Acessar Seu Pacote Premium
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}
