"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function BeforeAfter() {
  const transformations = [
    {
      before: "Distanciamento de Deus e sensação de vazio espiritual",
      after: "Intimidade restaurada e presença constante de Deus em sua vida",
    },
    {
      before: "Dificuldade em manter uma vida devocional consistente",
      after: "Disciplina espiritual fortalecida e hábitos devocionais estabelecidos",
    },
    {
      before: "Orações mecânicas e sem profundidade",
      after: "Vida de oração vibrante e comunicação íntima com Deus",
    },
    {
      before: "Leitura bíblica superficial e sem aplicação prática",
      after: "Compreensão profunda da Palavra e aplicação transformadora",
    },
    {
      before: "Falta de direção e propósito espiritual",
      after: "Clareza sobre seu chamado e propósito no Reino de Deus",
    },
    {
      before: "Culpa, vergonha e sensação de indignidade",
      after: "Liberdade, aceitação e identidade firmada no amor de Deus",
    },
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -left-64 top-40 w-96 h-96 rounded-full bg-amber-100/30 blur-3xl"></div>
      <div className="absolute -right-64 bottom-40 w-96 h-96 rounded-full bg-amber-100/30 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-800 mb-4">Transformação Real</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Veja como sua vida espiritual pode ser transformada através da jornada de 40 dias. Estas são mudanças reais
            experimentadas por pessoas que completaram o devocional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full border-amber-200 bg-white shadow-sm">
                <div className="flex flex-col h-full">
                  <div className="bg-red-50 p-4 rounded-lg mb-4 border border-red-100">
                    <h3 className="text-lg font-medium text-red-700 mb-1">Antes:</h3>
                    <p className="text-gray-700">{item.before}</p>
                  </div>

                  <div className="flex justify-center my-2">
                    <ArrowRight className="h-8 w-8 text-amber-600" />
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg mt-2 border border-green-100 flex-grow">
                    <h3 className="text-lg font-medium text-green-700 mb-1">Depois:</h3>
                    <p className="text-gray-700">{item.after}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center max-w-3xl mx-auto bg-amber-50 p-8 rounded-lg border border-amber-200"
        >
          <h3 className="text-2xl font-serif font-bold text-amber-800 mb-4">
            Sua História de Transformação Está Prestes a Começar
          </h3>
          <p className="text-lg text-gray-700">
            Estas transformações não são apenas para os outros. Deus deseja realizar uma obra profunda em sua vida
            também. O devocional "40 Dias Pra Voltar" é o instrumento que Ele quer usar para guiar você nesta jornada de
            restauração e renovação espiritual.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
