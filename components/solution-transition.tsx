"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { ArrowRight, Crown, Unlock, Target, CheckCircle, Shield } from "lucide-react"

export function SolutionTransition({ quizResults, onContinue }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <Card className="bg-white dark:bg-gray-800/90 shadow-xl border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400/10 dark:bg-indigo-500/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>

        <CardHeader className="text-center relative z-10 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="bg-white/20 p-2 rounded-full">
              <Target className="h-6 w-6" />
            </div>
            <CardTitle className="text-2xl">Sua Solução LinkedIn Premium</CardTitle>
          </div>
          <p className="text-blue-100">
            Identificamos a solução perfeita para ajudá-lo a alcançar seus objetivos no LinkedIn
          </p>
        </CardHeader>

        <CardContent className="pt-6 relative z-10">
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-4"
            >
              <Crown className="h-10 w-10 text-white" />
            </motion.div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Acesso ao LinkedIn Premium</h3>

            <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
              Nosso objetivo é fornecer a você{" "}
              <span className="font-bold text-blue-600 dark:text-blue-400">acesso permanente ao LinkedIn Premium</span>{" "}
              enquanto otimizamos seu perfil para máxima visibilidade e oportunidades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                  <Unlock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white">Nossa Promessa</h4>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Garantimos que você obterá acesso ao LinkedIn Premium sem taxas mensais contínuas. Nossos métodos são
                éticos e aproveitam recursos legítimos do sistema.
              </p>

              <ul className="space-y-2">
                {["Acesso permanente", "Sem mensalidades", "Métodos éticos", "Acesso a todos os recursos"].map(
                  (item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                    >
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ),
                )}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                  <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white">Nossa Abordagem</h4>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Fornecemos uma solução abrangente que não apenas dá acesso ao LinkedIn Premium, mas também otimiza seu
                perfil para resultados máximos.
              </p>

              <ul className="space-y-2">
                {[
                  "Estratégias de acesso Premium",
                  "Otimização de perfil",
                  "Aumento de visibilidade",
                  "Táticas de crescimento de rede",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                  >
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-5 rounded-xl border border-blue-100 dark:border-blue-800/30"
          >
            <h4 className="font-bold text-gray-900 dark:text-white text-center mb-3">O Que Você Receberá</h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 dark:bg-blue-800/50 p-1 rounded-full mt-0.5">
                  <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white text-sm">Acesso ao LinkedIn Premium</h5>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Acesso permanente sem mensalidades</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-100 dark:bg-blue-800/50 p-1 rounded-full mt-0.5">
                  <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white text-sm">Otimização de Perfil</h5>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Melhorias estratégicas para máxima visibilidade
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-100 dark:bg-blue-800/50 p-1 rounded-full mt-0.5">
                  <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white text-sm">Estratégias de Engajamento</h5>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Técnicas para aumentar a visibilidade do seu conteúdo
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-100 dark:bg-blue-800/50 p-1 rounded-full mt-0.5">
                  <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white text-sm">Crescimento de Rede</h5>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Métodos para expandir suas conexões profissionais
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </CardContent>

        <CardFooter className="flex justify-center pb-6 relative z-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            <Button
              onClick={onContinue}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8"
              size="lg"
            >
              Ver Pacotes Personalizados
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
