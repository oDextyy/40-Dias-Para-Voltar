"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  initialMinutes?: number
  initialSeconds?: number
  onComplete?: () => void
  hours?: number
  minutes?: number
  seconds?: number
}

export default function CountdownTimer({
  initialMinutes = 15,
  initialSeconds = 0,
  onComplete,
  hours = 0,
  minutes = 0,
  seconds = 0,
}: CountdownTimerProps) {
  // Compatibilidade com a versão anterior que usava hours, minutes, seconds
  const startMinutes = minutes || initialMinutes
  const startSeconds = seconds || initialSeconds

  const [timeLeft, setTimeLeft] = useState({
    hours: hours || 0,
    minutes: startMinutes,
    seconds: startSeconds,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else {
          clearInterval(timer)
          onComplete?.()
          return { hours: 0, minutes: 0, seconds: 0 }
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [initialMinutes, initialSeconds, hours, minutes, seconds, onComplete])

  const formatTime = (value: number) => {
    return value < 10 ? `0${value}` : value
  }

  // Se estiver usando o formato antigo com hours
  if (hours > 0 || timeLeft.hours > 0) {
    return (
      <div className="flex justify-center items-center space-x-2 text-xl font-mono">
        <div className="bg-gray-800 p-2 rounded-md">
          <span className="text-amber-400">{formatTime(timeLeft.hours)}</span>
        </div>
        <span className="text-amber-400">:</span>
        <div className="bg-gray-800 p-2 rounded-md">
          <span className="text-amber-400">{formatTime(timeLeft.minutes)}</span>
        </div>
        <span className="text-amber-400">:</span>
        <div className="bg-gray-800 p-2 rounded-md">
          <span className="text-amber-400">{formatTime(timeLeft.seconds)}</span>
        </div>
      </div>
    )
  }

  // Formato simplificado para minutos e segundos
  return (
    <div className="flex justify-center items-center space-x-2 text-xl font-mono">
      <div className="bg-gray-800 p-2 rounded-md">
        <span className="text-amber-400">{formatTime(timeLeft.minutes)}</span>
      </div>
      <span className="text-amber-400">:</span>
      <div className="bg-gray-800 p-2 rounded-md">
        <span className="text-amber-400">{formatTime(timeLeft.seconds)}</span>
      </div>
    </div>
  )
}

export { CountdownTimer }
