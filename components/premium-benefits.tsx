"use client"

import { motion } from "framer-motion"
import { Eye, MessageSquare, Star, Users, Search, Shield } from "lucide-react"

export function PremiumBenefits() {
  const benefits = [
    {
      icon: <Eye className="h-5 w-5 text-blue-500" />,
      title: "Modo Incógnito",
      description: "Navegue perfis sem deixar rastros, ideal para pesquisar concorrentes e empresas-alvo",
    },
    {
      icon: <MessageSquare className="h-5 w-5 text-blue-500" />,
      title: "InMail Ilimitado",
      description: "Envie mensagens diretas para qualquer pessoa, mesmo fora da sua rede de conexões",
    },
    {
      icon: <Star className="h-5 w-5 text-blue-500" />,
      title: "Candidato em Destaque",
      description: "Seu perfil aparece no topo da lista quando se candidata a vagas, aumentando suas chances",
    },
    {
      icon: <Users className="h-5 w-5 text-blue-500" />,
      title: "Insights de Candidatos",
      description: "Compare-se com outros candidatos e saiba exatamente como se destacar",
    },
    {
      icon: <Search className="h-5 w-5 text-blue-500" />,
      title: "Busca Avançada",
      description: "Filtros exclusivos para encontrar as melhores oportunidades e conexões estratégicas",
    },
    {
      icon: <Shield className="h-5 w-5 text-blue-500" />,
      title: "Visibilidade Completa",
      description: "Veja todos que visualizaram seu perfil nos últimos 90 dias e conecte-se estrategicamente",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {benefits.map((benefit, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
          className="bg-white dark:bg-gray-800/80 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm"
        >
          <div className="flex items-start gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-xl">{benefit.icon}</div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{benefit.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
