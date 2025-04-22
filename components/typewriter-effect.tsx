"use client"

import { useEffect, useState, useRef } from "react"

interface TypewriterEffectProps {
  text: string | string[]
  className?: string
  speed?: number
}

export function TypewriterEffect({ text, className = "", speed = 50 }: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const textArray = Array.isArray(text) ? text : [text]
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (currentTextIndex >= textArray.length) {
      return
    }

    const currentText = textArray[currentTextIndex]

    if (currentIndex < currentText.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayText((prev) => prev + currentText[currentIndex])
        setCurrentIndex(currentIndex + 1)
      }, speed)
    } else {
      // Move to next text after a pause
      timeoutRef.current = setTimeout(() => {
        if (currentTextIndex < textArray.length - 1) {
          setDisplayText("")
          setCurrentIndex(0)
          setCurrentTextIndex(currentTextIndex + 1)
        }
      }, 2000)
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [currentIndex, currentTextIndex, textArray, speed])

  return <div className={className}>{displayText}</div>
}

// Add default export for compatibility
export default TypewriterEffect
