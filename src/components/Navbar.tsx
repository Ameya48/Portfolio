import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PORTFOLIO_CONFIG } from '../config/portfolio'

interface NavbarProps {
  onOpenCommandPalette?: () => void
  onOpenResume?: () => void
}

export default function Navbar({ onOpenCommandPalette, onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Active section observer
  useEffect(() => {
    const sections = PORTFOLIO_CONFIG.navLinks.map((link) =>
      document.querySelector(link.href)
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      { threshold: 0.3 }
    )

    sections.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section)
      })
    }
  }, [])

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev)

  return (
    <>
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 md:px-16 ${
          scrolled
            ? 'bg-[#030303]/85 backdrop-blur-md border-b border-zinc-800/60 shadow-2xl shadow-black/50'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left Brand Logo */}
          <a
            href="#"
            className="flex items-center space-x-3 group text-white font-serif font-bold text-lg md:text-xl tracking-tight"
          >
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent group-hover:text-glow transition-all">
              {PORTFOLIO_CONFIG.brandName}
            </span>
            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest hidden sm:inline-block">
              / PORTFOLIO
            </span>
          </a>

          {/* Desktop Links & Command Palette Trigger */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {PORTFOLIO_CONFIG.navLinks.map((link) => {
                const isActive = activeSection === link.href
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative font-mono text-xs tracking-widest uppercase transition-all duration-300 py-1 ${
                      isActive ? 'text-white font-semibold' : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-white rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                )
              })}
            </div>

            {/* Command Palette Badge Button */}
            {onOpenCommandPalette && (
              <button
                onClick={onOpenCommandPalette}
                className="font-mono text-xs text-zinc-400 hover:text-white px-2.5 py-1 rounded border border-zinc-800 bg-zinc-950/60 flex items-center space-x-1 transition-colors"
                title="Open Command Palette (Cmd+K)"
              >
                <span className="text-[10px]">⌘K</span>
              </button>
            )}

            {/* Resume CTA Button */}
            <button
              onClick={onOpenResume}
              className="font-mono text-xs tracking-wider uppercase px-4 py-2 rounded-md border border-zinc-700 hover:border-white text-zinc-200 hover:text-white bg-zinc-900/60 hover:bg-zinc-800/80 transition-all duration-300 shadow-sm flex items-center space-x-1.5"
            >
              <span>RESUME</span>
              <svg
                className="w-3 h-3 text-zinc-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center space-x-3 lg:hidden">
            {onOpenCommandPalette && (
              <button
                onClick={onOpenCommandPalette}
                className="font-mono text-xs text-zinc-400 px-2 py-1 rounded border border-zinc-800 bg-zinc-950/60"
              >
                ⌘K
              </button>
            )}
            <button
              onClick={onOpenResume}
              className="font-mono text-[11px] tracking-wider uppercase px-3 py-1.5 rounded border border-zinc-800 text-zinc-300 bg-zinc-900/40"
            >
              RESUME
            </button>
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-md text-zinc-300 hover:text-white focus:outline-none bg-zinc-900/60 border border-zinc-800"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-[65px] left-0 right-0 z-40 bg-[#08080a]/95 backdrop-blur-xl border-b border-zinc-800 lg:hidden overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {PORTFOLIO_CONFIG.navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-mono text-sm tracking-widest uppercase text-zinc-300 hover:text-white flex items-center justify-between border-b border-zinc-900 pb-3"
                >
                  <span>{link.name}</span>
                  <span className="text-zinc-600 text-xs">↗</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
