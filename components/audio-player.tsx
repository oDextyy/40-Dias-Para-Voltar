"use client"

import { useState, useRef } from "react"
import { Volume2, VolumeX } from "lucide-react"

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const toggleAudio = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }

    setIsPlaying(!isPlaying)
  }

  return (
    <div className="flex items-center bg-slate-800/70 backdrop-blur-sm border border-amber-500/20 rounded-full p-2 shadow-lg">
      <button
        onClick={toggleAudio}
        className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-300 hover:bg-amber-500/30 transition-colors"
      >
        {isPlaying ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>

      <span className="text-gray-300 text-xs ml-2 mr-1">{isPlaying ? "Pausar" : "Música"} Ambiente</span>

      <audio
        ref={audioRef}
        loop
        src="https://soundbible.com/mp3/rain_ambient-Mike_Koenig-1681389445.mp3"
        className="hidden"
      />
    </div>
  )
}
