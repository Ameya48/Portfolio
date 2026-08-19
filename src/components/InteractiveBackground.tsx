import { useEffect, useState } from 'react'

export default function InteractiveBackground() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Dynamic Mouse Glow */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full transition-transform duration-300 ease-out opacity-20 bg-radial from-zinc-500/20 via-zinc-800/5 to-transparent blur-3xl"
        style={{
          transform: `translate(${mousePosition.x - 300}px, ${mousePosition.y - 300}px)`,
        }}
      />

      {/* Primary Ambient Gradient Spotlights */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-radial from-zinc-800/20 via-transparent to-transparent opacity-60 blur-3xl animate-pulse duration-[10000ms]" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[45vw] h-[45vw] max-w-[550px] max-h-[550px] rounded-full bg-radial from-zinc-700/15 via-transparent to-transparent opacity-40 blur-3xl" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-overlay opacity-80" />

      {/* Subtle Digital Noise */}
      <div className="absolute inset-0 noise-overlay opacity-60" />

      {/* Structural Thin Lines */}
      <div className="absolute left-6 md:left-16 top-0 bottom-0 w-[1px] bg-gradient-to-b from-zinc-800/40 via-zinc-900/60 to-transparent" />
      <div className="absolute right-6 md:right-16 top-0 bottom-0 w-[1px] bg-gradient-to-b from-zinc-800/40 via-zinc-900/60 to-transparent" />
    </div>
  )
}
