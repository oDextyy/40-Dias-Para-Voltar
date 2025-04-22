"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Linkedin, Trophy, Zap, CheckCircle, Users, MessageSquare } from "lucide-react"

export function WelcomeScreen({ onStart }) {
  const benefits = [
    {
      icon: <Trophy className="h-5 w-5 text-amber-500" />,
      title: "LinkedIn Premium Permanente",
      description: "Descubra como obter acesso ao LinkedIn Premium sem pagar mensalidades",
    },
    {
      icon: <Zap className="h-5 w-5 text-blue-500" />,
      title: "Visibilidade Aumentada",
      description: "Apareça para mais recrutadores e oportunidades premium",
    },
    {
      icon: <Users className="h-5 w-5 text-indigo-500" />,
      title: "Rede Estratégica",
      description: "Expanda sua rede com conexões de qualidade que realmente importam",
    },
    {
      icon: <MessageSquare className="h-5 w-5 text-green-500" />,
      title: "Engajamento Otimizado",
      description: "Aumente suas interações e visibilidade na plataforma",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8 inline-flex items-center justify-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full"
      >
        <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
        <span className="text-blue-800 dark:text-blue-300 font-medium">AVALIAÇÃO DE PERFIL LINKEDIN</span>
      </motion.div>

      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
      >
        Descubra se Você é Elegível para o{" "}
        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          LinkedIn Premium Permanente
        </span>
      </motion.h1>

      <motion.p
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
      >
        Faça nosso quiz rápido para avaliar seu perfil do LinkedIn e descobrir se você se qualifica para nosso método
        exclusivo de acesso permanente ao LinkedIn Premium sem mensalidades.
      </motion.p>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-12"
      >
        <Button
          onClick={onStart}
          size="lg"
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg px-8 py-6 rounded-xl shadow-lg"
        >
          Iniciar Avaliação Gratuita
        </Button>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
      >
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)" }}
            className="bg-white dark:bg-gray-800/80 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm"
          >
            <div className="flex items-start gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-xl">{benefit.icon}</div>
              <div className="text-left">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{benefit.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800/30 max-w-3xl mx-auto"
      >
        <div className="flex items-center justify-center gap-2 mb-3">
          <CheckCircle className="h-5 w-5 text-green-500" />
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Garantia de Satisfação 100%</h3>
        </div>
        <p className="text-gray-700 dark:text-gray-300">
          Se você não conseguir acesso permanente ao LinkedIn Premium com nosso método, devolvemos seu dinheiro
          integralmente. Sem perguntas, sem burocracia.
        </p>
      </motion.div>
    </div>
  )
}
