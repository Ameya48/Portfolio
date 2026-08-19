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

          <div className="shrink-0 hidden md:block">
            <img
              src="/avatars/achievement.png"
              alt="Ameya Achievement Sticker"
              className="w-28 h-auto object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.85)] filter -rotate-3 hover:rotate-0 hover:scale-110 transition-all duration-300 pointer-events-none select-none"
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
          <div className="mb-8 flex items-center justify-between">
            <div>
              <span className="font-mono text-xs text-zinc-500 tracking-[0.2em] uppercase block mb-2">
                ACTIVE GROWTH & RESEARCH
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white uppercase">
                CURRENTLY EXPLORING
              </h3>
            </div>
            <img
              src="/avatars/learning.png"
              alt="Ameya Learning Sticker"
              className="w-20 h-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] filter rotate-2 hover:rotate-0 hover:scale-110 transition-all duration-300 pointer-events-none select-none shrink-0 hidden sm:block"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_CONFIG.currentlyExploring.map((area, idx) => (
              <div
                key={idx}
                className="border border-zinc-900 bg-zinc-950/40 p-6 rounded-xl hover:border-zinc-800 transition-colors"
              >
                <div className="flex items-center space-x-2 font-mono text-xs text-zinc-500 uppercase mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span>[ LEARNING FOCUS 0{idx + 1} ]</span>
                </div>
                <h4 className="text-base font-serif font-bold text-white mb-2">
                  {area.title}
                </h4>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
