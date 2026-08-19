import { motion } from 'framer-motion'
import { PORTFOLIO_CONFIG } from '../config/portfolio'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 25, opacity: 0, filter: 'blur(4px)' },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  }

  return (
    <section className="relative min-h-[92svh] flex flex-col justify-between px-6 py-10 md:px-16 md:py-16 overflow-hidden">
      {/* Background Editorial Sculptural Visual */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full pointer-events-none z-0 opacity-40 lg:opacity-60 overflow-hidden">
        <img
          src="/images/hero/hero-visual.jpg"
          alt="Abstract 3D Sculpture"
          className="w-full h-full object-cover object-right mix-blend-lighten filter brightness-90 contrast-105"
        />
        {/* Soft Gradient Overlay for Seamless Editorial Blend */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-[#030303]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/60" />
      </div>

      {/* Top Status & Context Bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className="flex flex-wrap justify-between items-center z-10 w-full pt-4 md:pt-0 gap-3"
      >
        {/* Availability Badge */}
        <div className="flex items-center space-x-3 bg-zinc-950/80 border border-zinc-800/80 px-3.5 py-1.5 rounded-full backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-mono text-[11px] tracking-wider text-zinc-300 uppercase font-medium">
            {PORTFOLIO_CONFIG.status.label}
          </span>
        </div>

        {/* Location & Authentic Coordinates */}
        <div className="hidden sm:flex items-center space-x-4 font-mono text-xs text-zinc-500 tracking-wider uppercase">
          <span>{PORTFOLIO_CONFIG.location}</span>
          <span>•</span>
          <span>[ {PORTFOLIO_CONFIG.coordinates} ]</span>
        </div>
      </motion.div>

      {/* Main Editorial Hero Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="my-auto z-10 pl-2 sm:pl-4 md:pl-12 py-10 max-w-6xl select-none"
      >
        {/* Subtitle / Role */}
        <motion.div variants={itemVariants} className="mb-4">
          <span className="font-mono text-xs sm:text-sm tracking-[0.25em] text-zinc-400 uppercase font-medium block">
            {PORTFOLIO_CONFIG.tagline}
          </span>
        </motion.div>

        {/* Primary Identity Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-8xl lg:text-[7.5rem] font-extrabold tracking-tighter text-white leading-[0.9] mb-8 font-serif uppercase"
        >
          AMEYA<br />
          <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
            SAGWEKAR.
          </span>
        </motion.h1>

        {/* Tagline Headline & Supporting Narrative */}
        <motion.div variants={itemVariants} className="max-w-2xl mb-10">
          <p className="text-xl sm:text-2xl font-serif text-zinc-200 tracking-tight mb-3">
            "{PORTFOLIO_CONFIG.headline}"
          </p>
          <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed font-sans">
            {PORTFOLIO_CONFIG.subtext}
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8">
          {/* Action 1: Explore My Work */}
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center px-7 py-3.5 text-xs sm:text-sm font-mono tracking-wider uppercase font-semibold text-black bg-white rounded-full overflow-hidden transition-all duration-300 hover:bg-zinc-200 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>EXPLORE MY WORK</span>
              <svg
                className="w-4 h-4 text-black transform group-hover:translate-y-0.5 transition-transform"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
            </span>
          </a>

          {/* Action 2: Let's Connect */}
          <a
            href="#contact"
            className="group inline-flex items-center space-x-2 px-7 py-3.5 text-xs sm:text-sm font-mono tracking-wider uppercase font-medium text-zinc-200 hover:text-white border border-zinc-800 hover:border-zinc-500 bg-zinc-950/60 rounded-full backdrop-blur-sm transition-all duration-300"
          >
            <span>LET'S CONNECT</span>
            <svg
              className="w-4 h-4 text-zinc-400 group-hover:text-white transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </motion.div>

        {/* Social Links Row */}
        <motion.div variants={itemVariants} className="flex items-center space-x-6 pt-2">
          <span className="font-mono text-[10px] tracking-widest text-zinc-600 uppercase">
            DIRECTORIES:
          </span>

          <a
            href={PORTFOLIO_CONFIG.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-zinc-400 hover:text-white flex items-center space-x-1.5 transition-colors group"
          >
            <svg className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            <span>GITHUB</span>
          </a>

          <a
            href={PORTFOLIO_CONFIG.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-zinc-400 hover:text-white flex items-center space-x-1.5 transition-colors group"
          >
            <svg className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            <span>LINKEDIN</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex justify-between items-end z-10 w-full pl-2 sm:pl-4 md:pl-12"
      >
        <div className="font-mono text-[10px] tracking-widest text-zinc-600 uppercase hidden sm:block">
          SYS_VER: 2026.01 // PRODUCTION
        </div>

        <a
          href="#projects"
          className="flex items-center space-x-2 text-zinc-400 hover:text-white transition-colors group"
        >
          <span className="font-mono text-xs tracking-widest uppercase">
            SCROLL TO EXPLORE
          </span>
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="text-zinc-400 group-hover:text-white"
          >
            ↓
          </motion.span>
        </a>
      </motion.div>
    </section>
  )
}
