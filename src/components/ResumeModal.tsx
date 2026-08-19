import { motion, AnimatePresence } from 'framer-motion'
import { PORTFOLIO_CONFIG } from '../config/portfolio'

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="relative w-full max-w-3xl bg-[#0a0a0d] border border-zinc-800 rounded-2xl p-6 sm:p-10 z-10 my-8 shadow-2xl text-zinc-300 max-h-[90vh] overflow-y-auto font-sans"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-900 border border-zinc-800 focus:outline-none"
          >
            ✕
          </button>

          {/* Header */}
          <div className="mb-8 pb-6 border-b border-zinc-900 flex justify-between items-start flex-wrap gap-4">
            <div>
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block mb-1">
                VERIFIED RESUME INSPECTOR
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-white">
                {PORTFOLIO_CONFIG.fullBrandName}
              </h2>
              <p className="font-mono text-xs text-zinc-400 mt-1 uppercase">
                {PORTFOLIO_CONFIG.tagline} • {PORTFOLIO_CONFIG.location}
              </p>
            </div>

            <a
              href={PORTFOLIO_CONFIG.resume.url}
              download={PORTFOLIO_CONFIG.resume.filename}
              className="px-4 py-2 bg-white text-black font-mono text-xs uppercase font-semibold rounded-full hover:bg-zinc-200 transition-colors flex items-center space-x-1.5"
            >
              <span>DOWNLOAD PDF</span>
              <span>↓</span>
            </a>
          </div>

          {/* Summary */}
          <div className="space-y-6 text-sm">
            <div>
              <h3 className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-2 font-bold">
                [ EXECUTIVE SUMMARY ]
              </h3>
              <p className="text-zinc-300 font-light leading-relaxed">
                {PORTFOLIO_CONFIG.resume.summary}
              </p>
            </div>

            {/* Education */}
            <div>
              <h3 className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-2 font-bold">
                [ EDUCATION ]
              </h3>
              <div className="p-4 bg-zinc-950 rounded-lg border border-zinc-900">
                <div className="flex justify-between items-center font-semibold text-white mb-1 flex-wrap gap-2">
                  <span>{PORTFOLIO_CONFIG.resume.education.degree}</span>
                  <span className="font-mono text-xs text-zinc-400">{PORTFOLIO_CONFIG.resume.education.year}</span>
                </div>
                <p className="text-xs text-zinc-400 font-mono uppercase">
                  {PORTFOLIO_CONFIG.resume.education.institution} • {PORTFOLIO_CONFIG.resume.education.location}
                </p>
              </div>
            </div>

            {/* Work Experience */}
            <div>
              <h3 className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-2 font-bold">
                [ WORK EXPERIENCE ]
              </h3>
              <div className="space-y-3">
                {PORTFOLIO_CONFIG.experience.map((exp, idx) => (
                  <div key={idx} className="p-4 bg-zinc-950 rounded-lg border border-zinc-900">
                    <div className="flex flex-wrap justify-between items-start mb-1 gap-1">
                      <div>
                        <span className="font-semibold text-white block">{exp.role}</span>
                        <span className="text-xs text-zinc-400 font-mono uppercase">{exp.company} • {exp.location}</span>
                      </div>
                      <span className="font-mono text-xs text-zinc-400">{exp.period}</span>
                    </div>
                    <ul className="list-disc list-inside text-xs text-zinc-400 font-light space-y-1 pt-1">
                      {exp.highlights.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Competencies */}
            <div>
              <h3 className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-2 font-bold">
                [ CORE TECHNICAL SKILLS ]
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs">
                <div className="p-3 bg-zinc-950 rounded border border-zinc-900">
                  <span className="text-zinc-500 block text-[10px]">LANGUAGES</span>
                  <span className="text-white">C++, JavaScript, Python, SQL, HTML, CSS</span>
                </div>
                <div className="p-3 bg-zinc-950 rounded border border-zinc-900">
                  <span className="text-zinc-500 block text-[10px]">FRONTEND</span>
                  <span className="text-white">React.js, HTML5, CSS3, JavaScript</span>
                </div>
                <div className="p-3 bg-zinc-950 rounded border border-zinc-900">
                  <span className="text-zinc-500 block text-[10px]">BACKEND</span>
                  <span className="text-white">Node.js, Express.js, REST APIs</span>
                </div>
                <div className="p-3 bg-zinc-950 rounded border border-zinc-900">
                  <span className="text-zinc-500 block text-[10px]">DATABASES</span>
                  <span className="text-white">MongoDB, Firebase, Firestore, PostgreSQL</span>
                </div>
                <div className="p-3 bg-zinc-950 rounded border border-zinc-900">
                  <span className="text-zinc-500 block text-[10px]">TOOLS</span>
                  <span className="text-white">Git, GitHub, Docker, AWS, MongoDB Compass</span>
                </div>
                <div className="p-3 bg-zinc-950 rounded border border-zinc-900">
                  <span className="text-zinc-500 block text-[10px]">CONCEPTS</span>
                  <span className="text-white">DSA, OOP, DBMS, Blockchain, Cloud</span>
                </div>
              </div>
            </div>

            {/* Featured Projects */}
            <div>
              <h3 className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-2 font-bold">
                [ FEATURED CASE STUDY ]
              </h3>
              <div className="p-4 bg-zinc-950 rounded-lg border border-zinc-900 space-y-1">
                <div className="flex justify-between items-center font-semibold text-white">
                  <span>{PORTFOLIO_CONFIG.featuredProject.title}</span>
                  <span className="font-mono text-xs text-emerald-400">FLAGSHIP</span>
                </div>
                <p className="text-xs text-zinc-400 font-light">
                  {PORTFOLIO_CONFIG.featuredProject.subtitle}
                </p>
                <p className="text-xs text-zinc-500 pt-1 font-mono">
                  Stack: {PORTFOLIO_CONFIG.featuredProject.technologies.join(', ')}
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-zinc-900 flex justify-between items-center font-mono text-xs">
            <span className="text-zinc-500">RESUME VERIFIED // 2026</span>
            <button
              onClick={onClose}
              className="px-5 py-2 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-full hover:bg-zinc-800"
            >
              Close Viewer
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
