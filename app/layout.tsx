import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LinkedIn Hack | Técnicas Proibidas de Recrutamento",
  description:
    "Descubra como hackear o algoritmo do LinkedIn e conseguir entrevistas em empresas de elite mesmo sem experiência ou diploma.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} overflow-x-hidden m-0 p-0`} style={{ margin: 0, padding: 0 }}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

import "./globals.css"

import "./globals.css"
