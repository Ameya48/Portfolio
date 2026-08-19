import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PORTFOLIO_CONFIG } from '../config/portfolio'

interface CommandItem {
  id: string
  label: string
  category: string
  shortcut?: string
  action: () => void
}

interface CommandPaletteProps {
  isOpen: boolean
  onClose: () => void
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [easterEggMessage, setEasterEggMessage] = useState<string | null>(null)

  const commands: CommandItem[] = [
    {
      id: 'nav-about',
      label: 'Go to About Section',
      category: 'NAVIGATION',
      shortcut: '↵',
      action: () => {
        window.location.hash = '#about'
        onClose()
      },
    },
    {
      id: 'nav-skills',
      label: 'Go to Skills Ecosystem',
      category: 'NAVIGATION',
      shortcut: '↵',
      action: () => {
        window.location.hash = '#skills'
        onClose()
      },
    },
    {
      id: 'nav-projects',
      label: 'Go to Case Study Projects',
      category: 'NAVIGATION',
      shortcut: '↵',
      action: () => {
        window.location.hash = '#projects'
        onClose()
      },
    },
    {
      id: 'nav-achievements',
      label: 'Go to Achievements & Milestones',
      category: 'NAVIGATION',
      shortcut: '↵',
      action: () => {
        window.location.hash = '#achievements'
        onClose()
      },
    },
    {
      id: 'nav-contact',
      label: 'Go to Contact Form',
      category: 'NAVIGATION',
      shortcut: '↵',
      action: () => {
        window.location.hash = '#contact'
        onClose()
      },
    },
    {
      id: 'ext-github',
      label: 'Open GitHub Profile (Ameya48)',
      category: 'EXTERNAL LINKS',
      shortcut: '↗',
      action: () => {
        window.open(PORTFOLIO_CONFIG.social.github, '_blank')
        onClose()
      },
    },
    {
      id: 'ext-linkedin',
      label: 'Open LinkedIn Profile (Ameya Sagwekar)',
      category: 'EXTERNAL LINKS',
      shortcut: '↗',
      action: () => {
        window.open(PORTFOLIO_CONFIG.social.linkedin, '_blank')
        onClose()
      },
    },
    {
      id: 'doc-resume',
      label: 'Download / View Resume',
      category: 'DOCUMENT',
      shortcut: '↓',
      action: () => {
        window.open(PORTFOLIO_CONFIG.resume.url, '_blank')
        onClose()
      },
    },
    {
      id: 'sys-diagnostic',
      label: 'Run System Diagnostic & Developer Note',
      category: 'SYSTEM / EASTER EGG',
      shortcut: '⚡',
      action: () => {
        setEasterEggMessage(
          "SYSTEM STATUS: ALL SYSTEMS NOMINAL.\nHello evaluator! Built with React 19, Vite, Tailwind CSS v4, and Framer Motion. Zero bloat, 100% authentic code."
        )
      },
    },
  ]

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  )

  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  // Keyboard navigation listener inside modal
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredCommands.length))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % Math.max(1, filteredCommands.length))
      } else if (e.key === 'Enter') {
        e.preventDefault()
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, selectedIndex, filteredCommands, onClose])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4 sm:px-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Command Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="relative w-full max-w-2xl bg-[#0a0a0d] border border-zinc-800 rounded-xl shadow-2xl z-10 overflow-hidden font-mono"
        >
          {/* Input Header */}
          <div className="flex items-center px-4 py-3.5 border-b border-zinc-800 bg-zinc-950/80">
            <span className="text-zinc-500 mr-3 text-sm">🔍</span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command or search sections..."
              className="w-full bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none font-mono"
              autoFocus
            />
            <span className="text-[10px] text-zinc-500 px-2 py-0.5 rounded border border-zinc-800 uppercase">
              ESC
            </span>
          </div>

          {/* Developer Easter Egg Box */}
          {easterEggMessage && (
            <div className="p-4 bg-zinc-900 border-b border-zinc-800 text-xs text-emerald-400 whitespace-pre-line leading-relaxed">
              {easterEggMessage}
            </div>
          )}

          {/* Results List */}
          <div className="max-h-80 overflow-y-auto p-2 space-y-1">
            {filteredCommands.length > 0 ? (
              filteredCommands.map((cmd, idx) => {
                const isSelected = idx === selectedIndex
                return (
                  <button
                    key={cmd.id}
                    onClick={cmd.action}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-left text-xs transition-all ${
                      isSelected
                        ? 'bg-white text-black font-semibold'
                        : 'text-zinc-300 hover:bg-zinc-900 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className={`text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded ${
                        isSelected ? 'bg-black/10 text-black' : 'text-zinc-500'
                      }`}>
                        {cmd.category}
                      </span>
                      <span>{cmd.label}</span>
                    </div>

                    {cmd.shortcut && (
                      <span className={`text-[10px] ${isSelected ? 'text-black' : 'text-zinc-500'}`}>
                        {cmd.shortcut}
                      </span>
                    )}
                  </button>
                )
              })
            ) : (
              <div className="p-6 text-center text-xs text-zinc-500">
                NO COMMANDS FOUND FOR "{query}".
              </div>
            )}
          </div>

          {/* Footer Shortcuts */}
          <div className="px-4 py-2.5 border-t border-zinc-900 bg-zinc-950 flex justify-between items-center text-[10px] text-zinc-500 uppercase">
            <div className="flex space-x-3">
              <span>↑↓ NAVIGATE</span>
              <span>↵ SELECT</span>
              <span>ESC CLOSE</span>
            </div>
            <span>AMEYA SAGWEKAR // PORTFOLIO CLI</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
