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
      {/* Soft Warm Mouse Spotlight */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full transition-transform duration-500 ease-out opacity-15 bg-radial from-zinc-400/20 via-zinc-700/5 to-transparent blur-3xl"
        style={{
          transform: `translate(${mousePosition.x - 250}px, ${mousePosition.y - 250}px)`,
        }}
      />

      {/* Warm Ambient Architectural Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-radial from-zinc-700/15 via-transparent to-transparent opacity-50 blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[45vw] h-[45vw] max-w-[550px] max-h-[550px] rounded-full bg-radial from-zinc-600/10 via-transparent to-transparent opacity-30 blur-3xl" />

      {/* Structural Minimal Border Guide Lines */}
      <div className="absolute left-6 md:left-16 top-0 bottom-0 w-[1px] bg-gradient-to-b from-zinc-800/30 via-zinc-900/40 to-transparent" />
      <div className="absolute right-6 md:right-16 top-0 bottom-0 w-[1px] bg-gradient-to-b from-zinc-800/30 via-zinc-900/40 to-transparent" />
    </div>
  )
}

