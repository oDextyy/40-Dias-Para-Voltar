"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<string | null>(null)

  const faqs = [
    {
      question: "Qual a diferença entre os planos de 40, 80 e 120 dias?",
      answer:
        "Cada plano oferece uma jornada devocional com duração diferente. O plano de 40 dias é ideal para quem está começando, o de 80 dias proporciona uma experiência mais profunda, e o de 120 dias é a jornada mais completa para uma transformação espiritual profunda. Os planos mais longos incluem mais recursos e materiais complementares.",
    },
    {
      question: "Como recebo o material após a compra?",
      answer:
        "Imediatamente após a confirmação do pagamento, você receberá um e-mail com as instruções de acesso e os links para download de todos os materiais incluídos no plano escolhido. Todos os arquivos estão em formato PDF, prontos para serem lidos em qualquer dispositivo.",
    },
    {
      question: "Posso imprimir o material?",
      answer:
        "Sim! Todos os materiais são fornecidos em formato PDF de alta qualidade, otimizados tanto para leitura digital quanto para impressão. Muitas pessoas preferem imprimir para fazer anotações e marcar seu progresso diretamente no papel.",
    },
    {
      question: "Como funciona a garantia de 30 dias?",
      answer:
        "Oferecemos uma garantia incondicional de satisfação. Se por qualquer motivo você não estiver satisfeito com o material nos primeiros 30 dias após a compra, basta enviar um e-mail solicitando o reembolso e devolveremos 100% do valor investido, sem questionamentos.",
    },
    {
      question: "Preciso ter conhecimento bíblico avançado para aproveitar o devocional?",
      answer:
        "Não! O devocional foi criado pensando em pessoas em diferentes níveis de maturidade espiritual. As reflexões são profundas, mas acessíveis, com explicações claras e aplicações práticas que qualquer pessoa pode entender e implementar.",
    },
    {
      question: "Posso compartilhar o material com outras pessoas?",
      answer:
        "O material é licenciado para uso individual. Ao adquirir o devocional, você recebe uma licença para uso pessoal. Se deseja compartilhar com amigos ou familiares, incentivamos que cada pessoa adquira sua própria cópia, o que também ajuda a manter este ministério.",
    },
    {
      question: "Quanto tempo tenho acesso ao material?",
      answer:
        "Você terá acesso vitalício a todos os materiais incluídos no plano escolhido. Uma vez baixados, os arquivos são seus para sempre, e você pode revisitar o devocional quantas vezes desejar no futuro.",
    },
    {
      question: "O devocional é adequado para qual denominação cristã?",
      answer:
        "O devocional '40, 80 ou 120 Dias Pra Voltar' foi criado com base nos princípios fundamentais da fé cristã, presentes na Bíblia, e é adequado para cristãos de todas as denominações que buscam uma renovação em sua intimidade com Deus.",
    },
  ]

  return (
    <section id="faq" className="py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-amber-50 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-medium mb-4"
          >
            DÚVIDAS FREQUENTES
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-amber-800 mb-4"
          >
            Perguntas Frequentes
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto"
          >
            Encontre respostas para as dúvidas mais comuns sobre o devocional e o processo de compra
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-amber-200 rounded-lg overflow-hidden bg-white shadow-sm"
                >
                  <AccordionTrigger className="px-4 md:px-6 py-3 md:py-4 hover:bg-amber-50 transition-colors text-left font-medium text-amber-900 text-sm md:text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 md:px-6 py-3 md:py-4 text-gray-700 text-sm md:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
