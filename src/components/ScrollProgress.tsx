import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100
        setScrollProgress(currentProgress)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-transparent pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-zinc-500 via-white to-zinc-300 shadow-[0_0_10px_rgba(255,255,255,0.8)]"
        style={{ width: `${scrollProgress}%` }}
        transition={{ ease: 'easeOut', duration: 0.1 }}
      />
    </div>
  )
}
