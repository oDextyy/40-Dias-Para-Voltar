"use client"

import type React from "react"
import { ArrowRight } from "lucide-react"

interface ActionButtonProps {
  onClick?: () => void
  children: React.ReactNode
  icon?: React.ReactNode
  className?: string
}

export default function ActionButton({ onClick, children, icon = <ArrowRight />, className = "" }: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        inline-block
        bg-amber-600
        hover:bg-amber-700
        text-white
        font-medium
        rounded-full
        px-4 py-3
        sm:px-6 sm:py-4
        transition-all
        duration-300
        shadow-md
        hover:shadow-lg
        text-center
        w-full
        max-w-[280px]
        sm:max-w-[320px]
        break-words
        ${className}
      `}
      style={{
        whiteSpace: "normal",
        wordBreak: "break-word",
        lineHeight: 1.4,
        minHeight: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
      }}
    >
      <span>{children}</span>
      <span className="flex-shrink-0">{icon}</span>
    </button>
  )
}
