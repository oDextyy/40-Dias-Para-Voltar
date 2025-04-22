"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Heart, BookOpen, Gift, Shield, Clock } from "lucide-react"
import { TypewriterEffect } from "@/components/typewriter-effect"
import { TestimonialCard } from "@/components/testimonial-card"
import { BeforeAfterComparison } from "@/components/before-after-comparison"
import { FlickeringCandle } from "@/components/flickering-candle"
import { CountdownTimer } from "@/components/countdown-timer"
import Image from "next/image"

export function PaginaVendas() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="relative min-h-screen pb-20">
      {/* Efeito de vela tremulando no canto */}
      <div className="fixed top-10 right-10 opacity-30 pointer-events-none">
        <FlickeringCandle />
      </div>

      {/* Seção Hero */}
      <section className="pt-20 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/jesus-light.jpeg"
            alt="Jesus na luz divina"
            fill
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Tem gente que se afastou de Deus, mas continua amando Ele com tudo que tem.
            </h1>
            <p className="text-xl md:text-2xl text-amber-200 font-serif italic drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Se você é essa pessoa... essa jornada é sua.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bloco de Dor */}
      <section className="py-16 px-4 bg-slate-900/90 relative">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <TypewriterEffect
              text={[
                "Eu me sinto longe de Deus.",
                "Não sei orar como antes.",
                "Me afasto, mas nunca esqueço Dele.",
                "Às vezes me sinto sujo demais pra voltar.",
                "Mas alguma coisa me puxa.",
                "Como se Ele ainda estivesse me esperando…",
              ]}
              className="text-lg md:text-xl text-white font-serif leading-relaxed"
            />
          </motion.div>
        </div>
      </section>

      {/* Apresentação do Produto */}
      <section className="py-16 px-4 relative">
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/jesus-golden.jpeg"
            alt="Jesus com braços abertos"
            fill
            className="object-cover opacity-50"
          />
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white font-serif drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              "40 Dias Pra Voltar"
            </h2>
            <p className="text-lg text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Uma jornada prática e íntima de reconexão com Deus.
            </p>
            <p className="text-lg text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Devocionais simples, profundos e sem religiosidade.
            </p>
            <p className="text-lg text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Reflexões diárias. Versículos vivos.
            </p>
            <p className="text-lg text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Só você, Deus, e um caminho de volta.
            </p>
          </motion.div>

          <div className="relative w-64 h-80 mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, rotateY: -30 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute inset-0 bg-gradient-to-br from-amber-700 to-amber-900 rounded-lg shadow-2xl shadow-amber-900/50 overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2 font-serif">40 Dias Pra Voltar</h3>
                <p className="text-amber-200 text-sm mb-4">Uma jornada de reconexão com Deus</p>
                <div className="w-16 h-0.5 bg-amber-300/50 mb-4"></div>
                <BookOpen className="w-12 h-12 text-amber-200 mb-4" />
                <p className="text-white text-xs italic font-serif">
                  "Eu te amei com amor eterno; por isso, com amor leal te atraí."
                </p>
                <p className="text-amber-200 text-xs mt-1">Jeremias 31:3</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* O Que Você Recebe */}
      <section className="py-16 px-4 bg-slate-900">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">O Que Você Recebe</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800 border border-amber-500/10 rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-start mb-4">
                <div className="bg-amber-500/10 p-2 rounded-full mr-4">
                  <BookOpen className="h-6 w-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">40 devocionais (1 por dia)</h3>
                  <p className="text-gray-300">
                    Cada devocional foi escrito como uma carta pessoal de Deus para você, abordando as lutas reais que
                    enfrentamos ao nos sentirmos distantes.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800 border border-amber-500/10 rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-start mb-4">
                <div className="bg-amber-500/10 p-2 rounded-full mr-4">
                  <Heart className="h-6 w-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Reflexões que conversam com seu coração</h3>
                  <p className="text-gray-300">
                    Palavras que parecem ter sido escritas especialmente para você, tocando exatamente onde você precisa
                    ser tocado.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-slate-800 border border-amber-500/10 rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-start mb-4">
                <div className="bg-amber-500/10 p-2 rounded-full mr-4">
                  <BookOpen className="h-6 w-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Versículos explicados com profundidade e amor</h3>
                  <p className="text-gray-300">
                    Não apenas citações, mas explicações que revelam o coração de Deus por trás de cada palavra das
                    Escrituras.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-slate-800 border border-amber-500/10 rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-start mb-4">
                <div className="bg-amber-500/10 p-2 rounded-full mr-4">
                  <Heart className="h-6 w-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">
                    Estilo de escrita direto, sensível e sem julgamentos
                  </h3>
                  <p className="text-gray-300">
                    Sem religiosidade vazia ou cobranças. Apenas a verdade do amor de Deus apresentada com gentileza e
                    compreensão.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bônus */}
      <section className="py-16 px-4 bg-slate-800">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">Bônus Inclusos</h2>
            <p className="text-gray-300 text-sm">sem aumentar o valor</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-900/30 to-slate-900/80 border border-amber-500/20 rounded-lg p-6 shadow-lg"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-amber-500/10 p-3 rounded-full">
                  <Gift className="h-8 w-8 text-amber-400" />
                </div>
              </div>
              <h3 className="text-xl font-medium text-white mb-3 text-center">"Orações Cruas"</h3>
              <p className="text-gray-300 text-center">
                Guia de oração para quando faltam palavras. Orações simples e honestas para momentos de seca espiritual.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-900/30 to-slate-900/80 border border-amber-500/20 rounded-lg p-6 shadow-lg"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-amber-500/10 p-3 rounded-full">
                  <Gift className="h-8 w-8 text-amber-400" />
                </div>
              </div>
              <h3 className="text-xl font-medium text-white mb-3 text-center">"Versículos Que Seguram"</h3>
              <p className="text-gray-300 text-center">
                40 versículos para te manter firme, com explicações práticas e aplicações para sua vida diária.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Antes e Depois */}
      <section className="py-16 px-4 bg-slate-900 relative">
        <div className="absolute inset-0 z-0 flex justify-center items-center">
          <div className="w-full h-full max-w-md opacity-10">
            <Image
              src="/images/jesus-illustration.jpeg"
              alt="Jesus ilustração"
              width={400}
              height={400}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Transformação Real</h2>
          </motion.div>

          <BeforeAfterComparison />
        </div>
      </section>

      {/* Testemunhos */}
      <section className="py-16 px-4 bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Vidas Transformadas</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard quote="No dia 4 eu chorei como não chorava há anos. Foi Deus." author="Mariana, 28 anos" />
            <TestimonialCard quote="Esse devocional fez mais por mim que 5 pregações." author="Lucas, 34 anos" />
            <TestimonialCard quote="Voltei a sentir vontade de falar com Deus." author="Juliana, 26 anos" />
          </div>
        </div>
      </section>

      {/* Oferta e Valor */}
      <section className="py-16 px-4 bg-gradient-to-b from-slate-900 to-slate-950 relative">
        <div className="absolute inset-0 z-0">
          <Image src="/images/jesus-light.jpeg" alt="Jesus na luz divina" fill className="object-cover opacity-20" />
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Investimento</h2>

            <div className="bg-slate-800/80 border border-amber-500/20 rounded-lg p-8 shadow-xl mb-8">
              <p className="text-gray-300 mb-4">Valor normal</p>
              <p className="text-2xl text-gray-400 line-through mb-6">R$ 97,00</p>

              <p className="text-white mb-2">Valor promocional</p>
              <p className="text-4xl md:text-5xl font-bold text-amber-400 mb-6">R$ 9,90</p>

              <div className="flex flex-col gap-2 mb-8 text-sm text-gray-300">
                <p>sem mensalidade, sem burocracia</p>
                <p>acesso imediato</p>
                <p>não precisa app, só um PDF</p>
                <p>você pode começar hoje mesmo</p>
              </div>

              <div className="flex justify-center">
                <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-lg py-6 px-8 rounded-lg shadow-lg shadow-amber-500/20 transition-all duration-300 hover:shadow-amber-500/30 hover:scale-105">
                  QUERO VOLTAR PRA DEUS – BAIXAR AGORA
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <p className="text-gray-300 text-sm mt-6 italic font-serif">Comece hoje. Só você e Ele. De novo.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-12 px-4 bg-slate-900">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-800 border border-amber-500/10 rounded-lg p-8 shadow-lg text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-amber-500/10 p-3 rounded-full">
                <Shield className="h-8 w-8 text-amber-400" />
              </div>
            </div>

            <h3 className="text-xl font-medium text-white mb-4">Garantia Sem Culpa</h3>

            <p className="text-gray-300 mb-6">
              Se em 7 dias você não sentir que algo mudou,
              <br />
              te devolvo o valor. Sem perguntas.
              <br />
              Isso aqui não é sobre dinheiro. É sobre volta.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Urgência */}
      <section className="py-12 px-4 bg-slate-800 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/jesus-golden.jpeg"
            alt="Jesus com braços abertos"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center mb-4">
              <Clock className="h-5 w-5 text-amber-400 mr-2" />
              <h3 className="text-lg font-medium text-white">Promoção de lançamento</h3>
            </div>

            <p className="text-gray-300 mb-6">Valor simbólico só até hoje à meia-noite</p>

            <div className="mb-8">
              <CountdownTimer />
            </div>

            <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold text-lg py-6 px-8 rounded-lg shadow-lg shadow-amber-500/20 transition-all duration-300 hover:shadow-amber-500/30 hover:scale-105">
              QUERO VOLTAR PRA DEUS – BAIXAR AGORA
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Mensagem Final */}
      <section className="py-16 px-4 bg-slate-900 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/jesus-illustration.jpeg"
            alt="Jesus ilustração"
            fill
            className="object-contain opacity-20"
          />
        </div>
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-lg md:text-xl text-white font-serif italic leading-relaxed">
              "Eu nunca deixei de te amar.
              <br />
              Mesmo quando você se afastou.
              <br />
              Estou esperando seu retorno.
              <br />
              Não para te julgar, mas para te abraçar.
              <br />
              <span className="text-amber-400">40 dias é o tempo que preciso para restaurar o que foi quebrado.</span>
              <br />
              Vamos recomeçar?"
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
