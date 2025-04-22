"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

interface PulsatingButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function PulsatingButton({ children, className, onClick }: PulsatingButtonProps) {
  const [isPulsating, setIsPulsating] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsating((prev) => !prev)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Button
      className={`${className} ${
        isPulsating ? "animate-pulse shadow-lg shadow-amber-300/30" : ""
      } transition-all duration-300`}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}
