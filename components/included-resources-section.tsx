"use client"
import { Gift, Rocket, Sparkles, Eye, Shield, Users } from "lucide-react"
import { FeatureCard } from "./linkedin-hack-page"

// Enhanced Included Resources Section
export function IncludedResourcesSection() {
  const resources = [
    {
      icon: <Gift className="h-5 w-5" />,
      title: "LinkedIn Premium Grátis",
      description: "Método exclusivo para obter o LinkedIn Premium sem pagar mensalidade",
    },
    {
      icon: <Rocket className="h-5 w-5" />,
      title: "Estratégias de Conteúdo",
      description: "Técnicas para criar conteúdo que atrai recrutadores e gera oportunidades",
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: "Otimização de Algoritmo",
      description: "Métodos para aparecer nas primeiras posições de busca",
    },
    {
      icon: <Eye className="h-5 w-5" />,
      title: "Engenharia de Visibilidade",
      description: "Técnicas para aumentar sua exposição em 300%",
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Posicionamento Estratégico",
      description: "Como se posicionar como autoridade no seu nicho",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Networking Automatizado",
      description: "Scripts para expandir sua rede de forma estratégica",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {resources.map((resource, index) => (
        <FeatureCard
          key={index}
          icon={resource.icon}
          title={resource.title}
          description={resource.description}
          index={index}
        />
      ))}
    </div>
  )
}
