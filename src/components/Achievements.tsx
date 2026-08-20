import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PORTFOLIO_CONFIG } from '../config/portfolio'

export default function Achievements() {
  const [activeCategory, setActiveCategory] = useState<string>('ALL')

  const categories = ['ALL', 'CERTIFICATIONS', 'EXPERIENCE']

  const filteredAchievements = PORTFOLIO_CONFIG.achievements.filter((item) => {
    if (activeCategory === 'ALL') return true
    return item.category === activeCategory
  })

  return (
    <section id="achievements" className="py-24 px-6 md:px-16 border-t border-zinc-900/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto pl-2 sm:pl-4 md:pl-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
        >
          <div>
            <span className="font-mono text-xs text-zinc-500 tracking-[0.25em] uppercase block mb-3">
              04 / MILESTONES & JOURNEY
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-serif uppercase">
              ACHIEVEMENTS &<br />
              <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent">
                PROFESSIONAL PROGRESSION.
              </span>
            </h2>
          </div>

          <div className="shrink-0 pt-4 md:pt-0 -translate-x-4 sm:-translate-x-6 lg:-translate-x-10">
            <img
              src="/avatars/achievement.png"
              alt="Ameya Achievement Sticker"
              className="w-36 sm:w-48 lg:w-56 h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)] filter scale-x-[-1] -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300 pointer-events-none select-none"
            />
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 pb-4 border-b border-zinc-900 font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-white text-black font-semibold shadow-md'
                  : 'bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Timeline Grid */}
        <div className="relative border-l border-zinc-800/80 ml-3 sm:ml-4 pl-6 sm:pl-10 space-y-10 mb-24">
          <AnimatePresence>
            {filteredAchievements.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="relative group border border-zinc-900/90 bg-zinc-950/40 p-6 rounded-xl hover:border-zinc-800 transition-all duration-300"
              >
                {/* Timeline node */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-3 h-3 rounded-full bg-zinc-900 border border-zinc-600 group-hover:border-white group-hover:bg-white transition-all duration-300" />

                <div className="flex flex-wrap justify-between items-start mb-3 gap-2">
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-[10px] px-2.5 py-0.5 rounded bg-zinc-900 text-zinc-400 uppercase border border-zinc-800 font-medium">
                      {item.category}
                    </span>
                    {item.isPlaceholder && (
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-zinc-900/80 text-zinc-500 uppercase border border-zinc-800">
                        PLACEHOLDER
                      </span>
                    )}
                  </div>
                  <span className="font-mono text-xs text-zinc-400 font-medium">
                    [{item.year}]
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-white group-hover:text-zinc-200 transition-colors mb-1">
                  {item.title}
                </h3>
                <p className="font-mono text-xs text-zinc-400 uppercase mb-3">
                  {item.organization}
                </p>

                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-4">
                  {item.description}
                </p>

                {item.credentialUrl && (
                  <a
                    href={item.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 font-mono text-xs text-white hover:text-zinc-300 underline"
                  >
                    <span>VERIFY CREDENTIAL</span>
                    <span>↗</span>
                  </a>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* COMPACT "CURRENTLY EXPLORING" LEARNING FOCUS AREA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="pt-12 border-t border-zinc-900/80"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Title & 2x2 Cube Grid of Focus Cards */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <span className="font-mono text-xs text-zinc-500 tracking-[0.2em] uppercase block mb-2">
                  ACTIVE GROWTH & RESEARCH
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white uppercase tracking-tight">
                  CURRENTLY EXPLORING
                </h3>
              </div>

              {/* 2x2 Cube Matrix for the 4 Focus Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {PORTFOLIO_CONFIG.currentlyExploring.map((area, idx) => (
                  <div
                    key={idx}
                    className="border border-zinc-900 bg-zinc-950/60 p-5 sm:p-6 rounded-xl hover:border-zinc-800 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center space-x-2 font-mono text-[11px] text-zinc-500 uppercase mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>[ LEARNING FOCUS 0{idx + 1} ]</span>
                      </div>
                      <h4 className="text-base font-serif font-bold text-white mb-2 leading-snug">
                        {area.title}
                      </h4>
                      <p className="text-xs text-zinc-400 font-light leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Avatar Standing/Sitting on Glowing Disc Filling the Right Side */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center relative pt-4 lg:pt-0">
              <img
                src="/avatars/learning.png"
                alt="Ameya Learning Sticker"
                className="w-48 sm:w-60 md:w-64 lg:w-72 xl:w-80 h-auto object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.9)] filter scale-x-[-1] rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 pointer-events-none select-none relative z-10"
              />
              {/* Circular Disc Platform */}
              <div
                className="-mt-5 w-40 sm:w-52 lg:w-60 h-6 sm:h-7 rounded-[50%] z-0"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(0,206,209,0.35) 0%, rgba(0,206,209,0.15) 40%, rgba(0,206,209,0.05) 70%, transparent 100%)',
                  boxShadow: '0 0 30px 10px rgba(0,206,209,0.12)',
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
