import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import CommandPalette from './components/CommandPalette'
import ResumeModal from './components/ResumeModal'
import InteractiveBackground from './components/InteractiveBackground'

function App() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false)
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false)

  // Global Cmd+K / Ctrl+K keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setIsCommandPaletteOpen((prev) => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Console Easter Egg for Recruiters & Evaluators
  useEffect(() => {
    console.log(
      `%c AMEYA SAGWEKAR %c CREATIVE DEVELOPER PORTFOLIO `,
      'background: #ffffff; color: #000000; font-weight: bold; padding: 4px 8px; border-radius: 4px 0 0 4px;',
      'background: #18181b; color: #a1a1aa; padding: 4px 8px; border-radius: 0 4px 4px 0;'
    )
    console.log(
      '%cInterested in inspect mode? Built with React 19, Vite, Tailwind v4, and Framer Motion.\nGitHub: https://github.com/Ameya48\nLinkedIn: https://www.linkedin.com/in/ameya-sagwekar-80081832a/',
      'color: #71717a; font-family: monospace; font-size: 11px;'
    )
  }, [])

  return (
    <div className="relative min-h-screen bg-[#030303] text-zinc-400 font-sans selection:bg-zinc-800 selection:text-white overflow-hidden">
      {/* Top Thin Scroll Progress Bar */}
      <ScrollProgress />

      {/* Desktop Custom Trailing Cursor */}
      <CustomCursor />

      {/* Dynamic Background Experience */}
      <InteractiveBackground />

      {/* Primary Fixed Navigation */}
      <Navbar
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      {/* Developer Command Palette Modal */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />

      {/* Interactive Resume Inspector Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Main Content Sections */}
      <main className="pt-20 relative z-20">
        {/* Hero Landing Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Skills Ecosystem Section */}
        <Skills />

        {/* Projects Case Study Section */}
        <Projects />

        {/* Achievements & Timeline Section */}
        <Achievements />

        {/* Contact & Inquiry Section */}
        <Contact onOpenResume={() => setIsResumeModalOpen(true)} />
      </main>

      {/* Premium Minimal Footer */}
      <Footer onOpenResume={() => setIsResumeModalOpen(true)} />
    </div>
  )
}

export default App
