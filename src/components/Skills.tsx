import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PORTFOLIO_CONFIG } from '../config/portfolio'
import LiveAvatar from './LiveAvatar'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [hoveredSkill, setHoveredSkill] = useState<{
    name: string
    category: string
    description: string
  } | null>({
    name: "React",
    category: "FRONTEND",
    description: "Component-driven UI, state management, and custom hooks architecture."
  })

  // Filter skills by selected tab
  const filteredCategories = PORTFOLIO_CONFIG.skillCategories.filter((cat) =>
    activeCategory === 'all' ? true : cat.id === activeCategory
  )

  return (
    <section id="skills" className="py-24 px-6 md:px-16 border-t border-zinc-900/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto pl-2 sm:pl-4 md:pl-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="mb-12"
        >
          <span className="font-mono text-xs text-zinc-500 tracking-[0.25em] uppercase block mb-3">
            02 / CAPABILITIES & ECOSYSTEM
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-serif uppercase">
            TECHNICAL<br />
            <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent">
              STACK & ECOSYSTEM.
            </span>
          </h2>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-4 border-b border-zinc-900/80 font-mono text-xs">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full uppercase tracking-wider transition-all duration-300 ${
              activeCategory === 'all'
                ? 'bg-white text-black font-semibold shadow-md'
                : 'bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
            }`}
          >
            ALL TECH
          </button>
          {PORTFOLIO_CONFIG.skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-white text-black font-semibold shadow-md'
                  : 'bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Dynamic Skill Details Inspector Panel */}
        <div className="mb-12 p-6 sm:p-8 rounded-xl border border-zinc-800/80 bg-gradient-to-r from-zinc-950 via-[#0a0a0c] to-zinc-950 relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex-1 space-y-2">
            <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block mb-2">
              INSPECTOR // HOVER A TECH NODE
            </div>

            <AnimatePresence mode="wait">
              {hoveredSkill ? (
                <motion.div
                  key={hoveredSkill.name}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-3">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span className="font-mono text-xs text-zinc-400 tracking-widest uppercase font-semibold">
                      {hoveredSkill.category}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                    {hoveredSkill.name}
                  </h3>
                  <p className="text-sm text-zinc-400 font-light max-w-2xl leading-relaxed">
                    {hoveredSkill.description}
                  </p>
                </motion.div>
              ) : (
                <div className="py-2 text-zinc-600 font-mono text-xs">
                  HOVER OVER OR TAP ANY TECHNOLOGY BELOW TO INSPECT ARCHITECTURAL DETAILS.
                </div>
              )}
            </AnimatePresence>
          </div>

          <div className="shrink-0 self-center pt-4 md:pt-0 -translate-x-4 sm:-translate-x-6 lg:-translate-x-10">
            <LiveAvatar
              src="/avatars/coding.png"
              alt="Ameya Coding Sticker"
              animation="typing"
              enableBlink={true}
              blinkInterval={4}
              mirrored={true}
              leftEye={{ top: '12%', left: '50%', width: '9%', height: '4%' }}
              rightEye={{ top: '12%', left: '63%', width: '8%', height: '4%' }}
              imgClassName="w-36 sm:w-48 lg:w-56 h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)] filter -rotate-3 hover:rotate-0 hover:scale-105 transition-transform duration-300 pointer-events-none select-none"
            />
          </div>
        </div>

        {/* Layered Constellation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="border border-zinc-900/90 bg-zinc-950/40 p-6 rounded-xl flex flex-col justify-between hover:border-zinc-800 transition-colors"
            >
              <div>
                <div className="flex justify-between items-center mb-4 pb-3 border-b border-zinc-900">
                  <h3 className="font-mono text-xs tracking-widest text-zinc-300 font-bold uppercase">
                    {category.title}
                  </h3>
                  <span className="font-mono text-[10px] text-zinc-600">
                    [{category.skills.length} MODULES]
                  </span>
                </div>
                <p className="text-xs text-zinc-500 mb-6 font-light">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => {
                    const isSelected = hoveredSkill?.name === skill.name
                    return (
                      <button
                        key={skill.name}
                        onMouseEnter={() =>
                          setHoveredSkill({
                            name: skill.name,
                            category: category.title,
                            description: skill.description,
                          })
                        }
                        onClick={() =>
                          setHoveredSkill({
                            name: skill.name,
                            category: category.title,
                            description: skill.description,
                          })
                        }
                        className={`font-mono text-xs px-3.5 py-2 rounded-lg border transition-all duration-300 text-left flex items-center space-x-2 ${
                          isSelected
                            ? 'bg-white text-black border-white font-semibold shadow-lg shadow-white/10 scale-105'
                            : 'bg-zinc-900/60 border-zinc-800/80 text-zinc-300 hover:border-zinc-500 hover:text-white hover:bg-zinc-800/80'
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-black' : 'bg-zinc-600'}`} />
                        <span>{skill.name}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
