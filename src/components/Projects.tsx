import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PORTFOLIO_CONFIG } from '../config/portfolio'
import TiltCard from './TiltCard'

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL')
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState<boolean>(false)
  const [previewTab, setPreviewTab] = useState<'metrics' | 'code'>('metrics')

  const featured = PORTFOLIO_CONFIG.featuredProject
  const categories = ['ALL', 'FULL STACK', 'BLOCKCHAIN']

  const filteredProjects = PORTFOLIO_CONFIG.curatedProjects.filter((project) => {
    if (selectedCategory === 'ALL') return true
    return project.category === selectedCategory
  })

  return (
    <section id="projects" className="py-24 px-6 md:px-16 border-t border-zinc-900/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto pl-2 sm:pl-4 md:pl-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-zinc-500 tracking-[0.25em] uppercase block mb-3">
            03 / SELECTED WORKS & CASE STUDIES
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-serif uppercase">
            ENGINEERING<br />
            <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent">
              CASE STUDIES & PROJECTS.
            </span>
          </h2>
        </motion.div>

        {/* FLAGSHIP FEATURED PROJECT BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <TiltCard className="mb-24 border border-zinc-800/90 rounded-2xl bg-gradient-to-b from-[#0a0a0d] to-[#040405] p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl">
            {/* Subtle Ambient Background Highlight */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-radial from-zinc-800/10 via-transparent to-transparent blur-3xl pointer-events-none" />

            {/* Top Flagship Header Tag */}
            <div className="flex flex-wrap justify-between items-center pb-6 mb-8 border-b border-zinc-900 gap-4">
              <div className="flex items-center space-x-3">
                <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                <span className="font-mono text-xs text-zinc-300 font-semibold tracking-widest uppercase">
                  FLAGSHIP CASE STUDY
                </span>
              </div>
              <div className="font-mono text-xs text-zinc-500">
                ALGORITHMIC OPTIMIZATION ENGINE
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Narrative Column */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-serif tracking-tight mb-2">
                    {featured.title}
                  </h3>
                  <p className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                    {featured.subtitle}
                  </p>
                </div>

                {/* Problem Callout Box */}
                <div className="p-4 rounded-lg border border-zinc-800/80 bg-zinc-950/70">
                  <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block mb-1">
                    PROBLEM STATEMENT
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                    "{featured.problemStatement}"
                  </p>
                </div>

                {/* Solution Narrative */}
                <p className="text-sm text-zinc-400 font-light leading-relaxed">
                  {featured.solution}
                </p>

                {/* Algorithmic Concepts & Tech Tags */}
                <div className="space-y-3 pt-2">
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider mr-2">
                      ALGORITHMS:
                    </span>
                    {featured.algorithms.map((algo) => (
                      <span
                        key={algo}
                        className="font-mono text-xs px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300"
                      >
                        {algo}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-wider mr-2">
                      STACK:
                    </span>
                    {featured.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-2.5 py-1 rounded bg-zinc-950 border border-zinc-900 text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-6 flex flex-wrap gap-4">
                  <button
                    onClick={() => setIsCaseStudyOpen(true)}
                    className="px-6 py-3 bg-white text-black font-mono text-xs uppercase font-semibold tracking-wider rounded-full hover:bg-zinc-200 transition-all shadow-lg hover:shadow-white/20 flex items-center space-x-2"
                  >
                    <span>VIEW CASE STUDY</span>
                    <span>→</span>
                  </button>

                  <a
                    href={featured.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white font-mono text-xs uppercase tracking-wider rounded-full hover:border-zinc-600 transition-all flex items-center space-x-2"
                  >
                    <svg className="w-4 h-4 text-zinc-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    <span>GITHUB REPO</span>
                  </a>
                </div>
              </div>

              {/* Right Abstract Visual Dashboard Preview with Code Toggle */}
              <div className="lg:col-span-5 border border-zinc-800/80 rounded-xl bg-zinc-950 p-6 space-y-5 font-mono text-xs relative overflow-hidden">
                <div className="flex justify-between items-center pb-3 border-b border-zinc-900 text-zinc-500 text-[10px] tracking-widest">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setPreviewTab('metrics')}
                      className={`px-2 py-0.5 rounded transition-colors ${
                        previewTab === 'metrics' ? 'bg-white text-black font-bold' : 'text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      METRICS
                    </button>
                    <button
                      onClick={() => setPreviewTab('code')}
                      className={`px-2 py-0.5 rounded transition-colors ${
                        previewTab === 'code' ? 'bg-white text-black font-bold' : 'text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      CODE CORE
                    </button>
                  </div>
                  <span>LATENCY: &lt; 30MS</span>
                </div>

                {previewTab === 'metrics' ? (
                  <div className="space-y-3">
                    <div className="flex justify-between text-zinc-400">
                      <span>MONTHLY INCOME</span>
                      <span className="text-white">$5,400.00</span>
                    </div>
                    <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-zinc-400 h-full w-[85%]" />
                    </div>

                    <div className="flex justify-between text-zinc-400">
                      <span>FIXED COMMITMENTS (KNAPSACK)</span>
                      <span className="text-zinc-300">$2,100.00</span>
                    </div>
                    <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full w-[38%]" />
                    </div>

                    <div className="flex justify-between text-zinc-400">
                      <span>GREEDY SURPLUS ALLOCATION</span>
                      <span className="text-white font-semibold">$1,850.00</span>
                    </div>
                    <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-white h-full w-[65%]" />
                    </div>

                    <div className="pt-3 border-t border-zinc-900 text-[11px] space-y-1 text-zinc-500">
                      <p><span className="text-emerald-400">✓</span> PriorityQueue.sort(essential_weights)</p>
                      <p><span className="text-emerald-400">✓</span> Knapsack.optimize(capacity, surplus)</p>
                      <p className="text-zinc-400">→ Investment yield target: +14.2% annualized</p>
                    </div>
                  </div>
                ) : (
                  <div className="overflow-x-auto p-3 bg-[#050507] rounded border border-zinc-900 text-[11px] text-zinc-300 font-mono leading-relaxed">
                    <pre>{featured.codeSnippet}</pre>
                  </div>
                )}
              </div>
            </div>
          </TiltCard>
        </motion.div>

        {/* CURATED OTHER PROJECTS SECTION */}
        <div className="pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 pb-4 border-b border-zinc-900 gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white uppercase">
                CURATED PROJECT DIRECTORY
              </h3>
              <p className="text-xs text-zinc-500 font-mono mt-1">
                HAND-PICKED REPOSITORIES & RECENT WORK
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full uppercase tracking-wider transition-all duration-300 ${
                    selectedCategory === cat
                      ? 'bg-white text-black font-semibold'
                      : 'bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Curated Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <TiltCard className="border border-zinc-900/90 bg-zinc-950/40 p-6 rounded-xl flex flex-col justify-between hover:border-zinc-800 transition-all duration-300 group h-full">
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-mono text-[10px] px-2.5 py-0.5 rounded bg-zinc-900 text-zinc-400 uppercase border border-zinc-800">
                          {project.category}
                        </span>
                      </div>

                      <h4 className="text-lg font-serif font-bold text-white group-hover:text-zinc-200 transition-colors mb-2">
                        {project.name}
                      </h4>

                      <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.technologies.map((t) => (
                          <span key={t} className="font-mono text-[10px] text-zinc-500">
                            #{t}
                          </span>
                        ))}
                      </div>

                      {/* GitHub Link */}
                      <div className="pt-4 border-t border-zinc-900 flex justify-between items-center">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs text-zinc-400 hover:text-white flex items-center space-x-1.5 transition-colors"
                        >
                          <span>VIEW REPOSITORY</span>
                          <span>↗</span>
                        </a>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Prominent GitHub Profile CTA */}
          <div className="text-center py-8 border-t border-zinc-900/80">
            <a
              href={PORTFOLIO_CONFIG.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-zinc-950 border border-zinc-800 hover:border-white text-zinc-200 hover:text-white font-mono text-xs uppercase tracking-widest rounded-full transition-all duration-300 group shadow-lg"
            >
              <span>EXPLORE MORE ON GITHUB</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* FULL-SCREEN CASE STUDY MODAL */}
      <AnimatePresence>
        {isCaseStudyOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCaseStudyOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Content Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="relative w-full max-w-4xl bg-[#0a0a0d] border border-zinc-800 rounded-2xl p-6 sm:p-10 z-10 my-8 shadow-2xl text-zinc-300 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsCaseStudyOpen(false)}
                className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-900 border border-zinc-800 focus:outline-none"
              >
                ✕
              </button>

              {/* Modal Header */}
              <div className="mb-8 pb-6 border-b border-zinc-900">
                <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block mb-2">
                  CASE STUDY ARCHITECTURE
                </span>
                <h2 className="text-2xl sm:text-4xl font-serif font-extrabold text-white mb-2">
                  {featured.title}
                </h2>
                <p className="font-mono text-xs text-zinc-400 uppercase">
                  {featured.subtitle}
                </p>
              </div>

              {/* Case Study Sections */}
              <div className="space-y-8 text-sm leading-relaxed">
                <div>
                  <h3 className="font-mono text-xs text-zinc-400 uppercase tracking-widest block mb-2 font-bold">
                    [ PROBLEM ]
                  </h3>
                  <p className="text-zinc-300 font-light">
                    {featured.caseStudyDetails.problem}
                  </p>
                </div>

                <div>
                  <h3 className="font-mono text-xs text-zinc-400 uppercase tracking-widest block mb-2 font-bold">
                    [ APPROACH ]
                  </h3>
                  <p className="text-zinc-300 font-light">
                    {featured.caseStudyDetails.approach}
                  </p>
                </div>

                <div>
                  <h3 className="font-mono text-xs text-zinc-400 uppercase tracking-widest block mb-2 font-bold">
                    [ TECHNICAL IMPLEMENTATION ]
                  </h3>
                  <p className="text-zinc-300 font-light mb-4">
                    {featured.caseStudyDetails.implementation}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
                    <div className="p-3 bg-zinc-950 rounded border border-zinc-900">
                      <span className="text-zinc-500 block text-[10px]">CORE ALG</span>
                      <span className="text-white">Knapsack & Greedy</span>
                    </div>
                    <div className="p-3 bg-zinc-950 rounded border border-zinc-900">
                      <span className="text-zinc-500 block text-[10px]">DATABASE</span>
                      <span className="text-white">MongoDB / Firebase</span>
                    </div>
                    <div className="p-3 bg-zinc-950 rounded border border-zinc-900">
                      <span className="text-zinc-500 block text-[10px]">FRONTEND</span>
                      <span className="text-white">React & Tailwind</span>
                    </div>
                    <div className="p-3 bg-zinc-950 rounded border border-zinc-900">
                      <span className="text-zinc-500 block text-[10px]">BACKEND</span>
                      <span className="text-white">Node.js / Express</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-mono text-xs text-zinc-400 uppercase tracking-widest block mb-2 font-bold">
                    [ ENGINEERING CHALLENGES ]
                  </h3>
                  <p className="text-zinc-300 font-light">
                    {featured.caseStudyDetails.challenges}
                  </p>
                </div>

                <div>
                  <h3 className="font-mono text-xs text-zinc-400 uppercase tracking-widest block mb-2 font-bold">
                    [ SYSTEM OUTCOME ]
                  </h3>
                  <p className="text-zinc-300 font-light">
                    {featured.caseStudyDetails.outcome}
                  </p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="mt-8 pt-6 border-t border-zinc-900 flex justify-between items-center">
                <a
                  href={featured.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-white underline hover:text-zinc-300"
                >
                  Visit Repository on GitHub ↗
                </a>

                <button
                  onClick={() => setIsCaseStudyOpen(false)}
                  className="px-5 py-2.5 bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono rounded-full hover:bg-zinc-800"
                >
                  Close Case Study
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
