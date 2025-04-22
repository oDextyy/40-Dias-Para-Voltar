"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function FallingLeaves() {
  const [leaves, setLeaves] = useState<{ id: number; x: number; delay: number; duration: number; rotation: number }[]>(
    [],
  )

  useEffect(() => {
    const newLeaves = []
    const leafCount = 15

    for (let i = 0; i < leafCount; i++) {
      newLeaves.push({
        id: i,
        x: Math.random() * 100, // random horizontal position (0-100%)
        delay: Math.random() * 20, // random delay (0-20s)
        duration: 15 + Math.random() * 15, // random duration (15-30s)
        rotation: Math.random() * 360, // random rotation (0-360deg)
      })
    }

    setLeaves(newLeaves)
  }, [])

  return (
    <div className="w-full h-full overflow-hidden">
      <AnimatePresence>
        {leaves.map((leaf) => (
          <motion.div
            key={leaf.id}
            initial={{
              opacity: 0,
              y: -100,
              x: `${leaf.x}%`,
              rotate: leaf.rotation,
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              y: ["0vh", "100vh"],
              rotate: leaf.rotation + 360,
            }}
            transition={{
              duration: leaf.duration,
              delay: leaf.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute w-6 h-6 text-amber-500/30"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
