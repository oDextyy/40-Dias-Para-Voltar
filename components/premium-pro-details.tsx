"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Crown,
  Rocket,
  Zap,
  CheckCircle,
  Users,
  MessageSquare,
  Search,
  Eye,
  Star,
  ArrowRight,
  Shield,
  Clock,
  FileText,
  Briefcase,
  TrendingUp,
  Lock,
} from "lucide-react"
import { PulsatingButton } from "@/components/pulsating-button"

export function PremiumProDetails() {
  const [activeTab, setActiveTab] = useState("features")

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-4"
        >
          <Rocket className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span className="text-blue-800 dark:text-blue-300 font-medium">PACOTE PREMIUM PRO</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Acesso Completo ao{" "}
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
          Transforme sua presença no LinkedIn com nosso pacote completo de otimização e acesso permanente ao LinkedIn
          Premium sem mensalidades.
        </motion.p>
      </div>

      <Card className="bg-white dark:bg-gray-800/90 shadow-xl border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm overflow-hidden mb-12">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/10 dark:bg-indigo-500/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>

        <CardContent className="p-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Coluna da esquerda - Imagem/Detalhes do pacote */}
            <div className="md:w-1/3">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-xl text-white mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white/20 p-2 rounded-full">
                    <Rocket className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Premium Pro</h3>
                </div>
                <p className="text-blue-100 mb-4">
                  Acesso completo ao LinkedIn Premium com otimização avançada de perfil
                </p>

                <div className="mb-4">
                  <p className="text-blue-200 line-through text-sm">De R$ 97,00</p>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">R$ 19,99</span>
                    <span className="text-blue-200 ml-2 text-sm">pagamento único</span>
                  </div>
                </div>

                <div className="bg-white/10 p-3 rounded-lg mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-blue-200" />
                    <p className="text-blue-100 text-sm">Acesso imediato após a compra</p>
                  </div>
                </div>

                <PulsatingButton
                  className="w-full bg-white hover:bg-blue-50 text-blue-600 font-bold py-3 rounded-lg"
                  onClick={() => window.open("https://pay.kiwify.com.br/D668adt", "_blank")}
                >
                  Obter Acesso Agora
                </PulsatingButton>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800/30">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <h3 className="font-bold text-gray-900 dark:text-white">Garantia de 7 Dias</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Se você não ficar satisfeito com os resultados nos primeiros 7 dias, devolvemos seu dinheiro
                  integralmente. Sem perguntas.
                </p>
              </div>
            </div>

            {/* Coluna da direita - Tabs com detalhes */}
            <div className="md:w-2/3">
              <Tabs defaultValue="features" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-4 w-full mb-6">
                  <TabsTrigger
                    value="features"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    <Star className="h-4 w-4 mr-2" />
                    Recursos
                  </TabsTrigger>
                  <TabsTrigger
                    value="benefits"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    <Zap className="h-4 w-4 mr-2" />
                    Benefícios
                  </TabsTrigger>
                  <TabsTrigger value="howto" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                    <FileText className="h-4 w-4 mr-2" />
                    Como Funciona
                  </TabsTrigger>
                  <TabsTrigger value="faq" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    FAQ
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="features" className="mt-0">
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700/30">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                          <Crown className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h4 className="font-bold text-gray-900 dark:text-white">LinkedIn Premium Permanente</h4>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 pl-11">
                        Acesso vitalício a todos os recursos premium do LinkedIn sem mensalidades. Economize mais de
                        R$360 por ano com nosso método exclusivo e legítimo.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700/30">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                          <Search className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h4 className="font-bold text-gray-900 dark:text-white">Otimização Avançada de Perfil</h4>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 pl-11">
                        Técnicas profissionais para otimizar seu perfil com palavras-chave estratégicas, aumentando sua
                        visibilidade para recrutadores em até 300%.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700/30">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                          <MessageSquare className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h4 className="font-bold text-gray-900 dark:text-white">Templates de Estratégia de Conteúdo</h4>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 pl-11">
                        Modelos prontos de conteúdo estratégico que geram engajamento e aumentam sua visibilidade no
                        feed de contatos relevantes e recrutadores.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700/30">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                          <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h4 className="font-bold text-gray-900 dark:text-white">Técnicas de Crescimento de Rede</h4>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 pl-11">
                        Scripts e estratégias para expandir sua rede de forma direcionada, conectando-se com pessoas
                        estratégicas que podem impulsionar sua carreira.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700/30">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                          <Eye className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h4 className="font-bold text-gray-900 dark:text-white">
                          Técnicas de Engajamento com Recrutadores
                        </h4>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 pl-11">
                        Métodos comprovados para atrair a atenção de recrutadores e aumentar suas chances de ser
                        contatado para oportunidades premium.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700/30">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                          <MessageSquare className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h4 className="font-bold text-gray-900 dark:text-white">Suporte Prioritário por 60 Dias</h4>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 pl-11">
                        Acesso a suporte dedicado para tirar dúvidas e receber orientações personalizadas durante os
                        primeiros 60 dias após a compra.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="benefits" className="mt-0">
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-5 rounded-xl border border-blue-100 dark:border-blue-800/30">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        Benefícios Imediatos
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-blue-100 dark:bg-blue-800/50 p-1 rounded-full mt-0.5">
                            <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                              Economia de R$360-720 por ano
                            </h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              Nunca mais pague mensalidades do LinkedIn Premium
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="bg-blue-100 dark:bg-blue-800/50 p-1 rounded-full mt-0.5">
                            <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                              Visibilidade aumentada em 300%
                            </h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              Apareça para muito mais recrutadores e oportunidades
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="bg-blue-100 dark:bg-blue-800/50 p-1 rounded-full mt-0.5">
                            <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                              Acesso a vagas premium
                            </h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              Candidate-se com destaque a vagas exclusivas
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="bg-blue-100 dark:bg-blue-800/50 p-1 rounded-full mt-0.5">
                            <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white text-sm">InMail ilimitado</h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              Envie mensagens diretas para qualquer pessoa
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800/50 p-5 rounded-xl border border-gray-100 dark:border-gray-700/30">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        Impacto na Carreira
                      </h3>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mt-0.5">
                            <Zap className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white">
                              Redução do tempo de busca por emprego
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Nossos usuários relatam redução de 68% no tempo médio de busca por novas oportunidades,
                              encontrando posições ideais em semanas, não meses.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mt-0.5">
                            <Zap className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white">Ofertas salariais mais altas</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Perfis otimizados com nossa metodologia recebem ofertas iniciais 15-40% maiores que a
                              média do mercado para posições similares.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mt-0.5">
                            <Zap className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white">Oportunidades passivas</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              73% dos nossos usuários relatam ser abordados para vagas que nunca se candidataram,
                              criando um fluxo constante de oportunidades.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800/50 p-5 rounded-xl border border-gray-100 dark:border-gray-700/30">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-4">Depoimentos de Usuários</h3>

                      <div className="space-y-4">
                        <div className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg">
                          <p className="text-gray-700 dark:text-gray-300 italic mb-3">
                            "Estava há 6 meses procurando sem sucesso. Com o LinkedIn Premium e as técnicas de
                            otimização, consegui 8 entrevistas em 3 semanas e 3 ofertas para escolher. Aceitei uma
                            proposta com salário 40% maior que meu emprego anterior."
                          </p>
                          <div className="flex items-center">
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              ))}
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                              Marcos S. - Desenvolvedor Frontend
                            </p>
                          </div>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg">
                          <p className="text-gray-700 dark:text-gray-300 italic mb-3">
                            "O método de acesso permanente ao Premium me economizou R$1.200/ano. As ferramentas
                            triplicaram minhas conexões. Resultado: vaga em multinacional com salário 2x maior e
                            possibilidade de trabalho remoto."
                          </p>
                          <div className="flex items-center">
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                              ))}
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                              Juliana C. - Product Manager
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="howto" className="mt-0">
                  <div className="space-y-6">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border border-blue-100 dark:border-blue-800/30">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                        <Zap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        Como Funciona o Acesso Permanente ao LinkedIn Premium
                      </h3>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-blue-100 dark:bg-blue-800/50 p-1 rounded-full mt-0.5 flex-shrink-0">
                            <span className="h-4 w-4 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs">
                              1
                            </span>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                              Acesse Seu Pacote Premium
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                              Após a compra, você receberá acesso imediato ao seu pacote com instruções detalhadas por
                              email.
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
                              Nosso guia passo a passo o orientará pelo processo de ativação do LinkedIn Premium sem
                              cobranças recorrentes.
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
                              Aplique nossas técnicas proprietárias de manutenção para garantir que seu acesso Premium
                              permaneça ativo indefinidamente.
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
                              Siga nosso guia para maximizar os benefícios dos seus recursos Premium para avanço
                              profissional ideal.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800/50 p-5 rounded-xl border border-gray-100 dark:border-gray-700/30">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-3">O Que Você Receberá:</h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-blue-100 dark:bg-blue-800/50 p-1 rounded-full mt-0.5">
                            <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                              Guia de Acesso Detalhado
                            </h4>
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
                            <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                              Protocolo de Manutenção
                            </h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              Técnicas para manter acesso permanente
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="bg-blue-100 dark:bg-blue-800/50 p-1 rounded-full mt-0.5">
                            <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                              Templates de Otimização
                            </h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              Modelos prontos para cada seção do seu perfil
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="bg-blue-100 dark:bg-blue-800/50 p-1 rounded-full mt-0.5">
                            <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                              Guia de Recursos Premium
                            </h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              Como maximizar cada recurso Premium
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800/50 p-5 rounded-xl border border-gray-100 dark:border-gray-700/30">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-3">Cronograma de Implementação</h3>

                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <div className="w-24 text-center">
                            <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mx-auto w-10 h-10 flex items-center justify-center mb-1">
                              <span className="text-blue-600 dark:text-blue-400 font-bold">Dia 1</span>
                            </div>
                          </div>
                          <div className="flex-1 bg-gray-50 dark:bg-gray-700/30 p-3 rounded-lg">
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Ativação do LinkedIn Premium e configuração inicial do perfil
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="w-24 text-center">
                            <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mx-auto w-10 h-10 flex items-center justify-center mb-1">
                              <span className="text-blue-600 dark:text-blue-400 font-bold">Dia 2-7</span>
                            </div>
                          </div>
                          <div className="flex-1 bg-gray-50 dark:bg-gray-700/30 p-3 rounded-lg">
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Otimização completa do perfil e implementação de palavras-chave estratégicas
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="w-24 text-center">
                            <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mx-auto w-10 h-10 flex items-center justify-center mb-1">
                              <span className="text-blue-600 dark:text-blue-400 font-bold">Semana 2</span>
                            </div>
                          </div>
                          <div className="flex-1 bg-gray-50 dark:bg-gray-700/30 p-3 rounded-lg">
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Implementação da estratégia de conteúdo e início do crescimento de rede
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="w-24 text-center">
                            <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mx-auto w-10 h-10 flex items-center justify-center mb-1">
                              <span className="text-blue-600 dark:text-blue-400 font-bold">Mês 1</span>
                            </div>
                          </div>
                          <div className="flex-1 bg-gray-50 dark:bg-gray-700/30 p-3 rounded-lg">
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Primeiros resultados visíveis: aumento de visualizações e contatos de recrutadores
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="faq" className="mt-0">
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700/30">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        Como funciona o LinkedIn Premium permanente?
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        Nosso método exclusivo permite que você obtenha acesso ao LinkedIn Premium de forma permanente
                        sem pagar mensalidades. Utilizamos técnicas legítimas que exploram brechas no sistema de
                        promoções e testes gratuitos do LinkedIn. Você receberá instruções detalhadas e suporte completo
                        para ativar e manter seu acesso Premium indefinidamente.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700/30">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        Isso é legal?
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        Sim. O conteúdo é 100% educacional. Você não infringe nenhuma regra. Tudo que ensinamos são
                        técnicas de growth hacking e engenharia social que exploram brechas legítimas no sistema. Não há
                        nada ilegal ou contra os termos de serviço do LinkedIn.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700/30">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        Funciona mesmo?
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        Funciona comprovadamente. Temos mais de 3.700 alunos com resultados documentados. Garantia de 7
                        dias sem perguntas. Se você seguir o passo a passo e não conseguir os resultados prometidos,
                        devolvemos 100% do seu dinheiro. Sem burocracia.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700/30">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        Como recebo o acesso?
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        Após o pagamento, você recebe liberação imediata no seu e-mail. Você terá instruções detalhadas
                        de acesso à área de membros exclusiva onde todo o conteúdo estará disponível para download e
                        streaming. Suporte disponível 24/7 para ajudar com qualquer dúvida.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700/30">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        Por que tão barato?
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        Porque nossa estratégia é de volume e impacto. Queremos democratizar o acesso a informação que
                        antes era guardada a sete chaves. Estamos criando uma comunidade de insiders e precisamos
                        espalhar esse conhecimento rapidamente antes que as brechas sejam fechadas.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700/30">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        Preciso ter experiência técnica?
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        Não. Todo o material foi desenvolvido para ser acessível mesmo para quem não tem conhecimento
                        técnico. Fornecemos tutoriais passo a passo, scripts prontos e ferramentas com interface
                        amigável que qualquer pessoa pode usar, independente do seu nível de habilidade.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-xl border border-blue-100 dark:border-blue-800/30 mb-12">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            O Que Está Incluído no Pacote Premium Pro
          </h3>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Tudo o que você precisa para transformar sua presença no LinkedIn e maximizar suas oportunidades
            profissionais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800/80 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-xl">
                <Crown className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white">LinkedIn Premium Permanente</h4>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300 text-sm">Acesso a todos os recursos premium</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300 text-sm">InMail ilimitado para recrutadores</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300 text-sm">Modo de navegação anônima</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300 text-sm">Candidato em destaque nas vagas</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300 text-sm">Insights de candidatos completos</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800/80 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-xl">
                <Search className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white">Otimização de Perfil</h4>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300 text-sm">Template de headline otimizado</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300 text-sm">Otimização SEO para recrutadores</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300 text-sm">Modelos de experiência profissional</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300 text-sm">Estratégia de palavras-chave</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300 text-sm">Técnicas de destaque visual</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800/80 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-xl">
                <Rocket className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="font-bold text-gray-900 dark:text-white">Estratégias Avançadas</h4>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300 text-sm">Scripts de automação de conexões</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300 text-sm">Estratégia de conteúdo personalizada</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300 text-sm">
                  Técnicas de engajamento com recrutadores
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300 text-sm">Suporte prioritário por 60 dias</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300 text-sm">Guia de domínio dos recursos Premium</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Pronto para Transformar Sua Presença no LinkedIn?
        </h3>

        <div className="bg-white dark:bg-gray-800/80 p-8 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700/50 max-w-2xl mx-auto">
          <div className="mb-6">
            <p className="text-gray-500 dark:text-gray-400 line-through text-lg">Valor normal: R$ 97,00</p>
            <div className="flex items-baseline justify-center">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">R$ 19,99</span>
              <span className="text-gray-500 dark:text-gray-400 ml-2">pagamento único</span>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-3 justify-center">
              <Lock className="h-5 w-5 text-green-500" />
              <span className="text-gray-700 dark:text-gray-300">Pagamento 100% seguro</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <Shield className="h-5 w-5 text-green-500" />
              <span className="text-gray-700 dark:text-gray-300">Garantia de 7 dias ou seu dinheiro de volta</span>
            </div>
          </div>

          <PulsatingButton
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-6 rounded-xl text-xl font-bold shadow-lg"
            onClick={() => window.open("https://pay.kiwify.com.br/D668adt", "_blank")}
          >
            Obter Acesso Agora
            <ArrowRight className="ml-2 h-5 w-5" />
          </PulsatingButton>
        </div>
      </div>
    </div>
  )
}
