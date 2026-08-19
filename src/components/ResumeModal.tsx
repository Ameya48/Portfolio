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
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="relative w-full max-w-5xl bg-[#0a0a0d] border border-zinc-800 rounded-2xl p-4 sm:p-6 z-10 my-4 shadow-2xl text-zinc-300 max-h-[95vh] flex flex-col font-sans"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-900 border border-zinc-800 focus:outline-none transition-colors z-20"
          >
            ✕
          </button>

          {/* Header */}
          <div className="mb-4 pb-4 border-b border-zinc-900 flex justify-between items-center flex-wrap gap-3 pr-10">
            <div>
              <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block mb-0.5">
                CURRICULUM VITAE // DIRECT PDF VIEWER
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-extrabold text-white">
                {PORTFOLIO_CONFIG.fullBrandName} — RESUME
              </h2>
            </div>

            <div className="flex items-center space-x-3">
              <a
                href={PORTFOLIO_CONFIG.resume.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono text-xs uppercase rounded-full hover:border-zinc-600 hover:text-white transition-colors flex items-center space-x-1"
              >
                <span>OPEN FULL PAGE</span>
                <span>↗</span>
              </a>

              <a
                href={PORTFOLIO_CONFIG.resume.url}
                download={PORTFOLIO_CONFIG.resume.filename}
                className="px-4 py-1.5 bg-white text-black font-mono text-xs uppercase font-semibold rounded-full hover:bg-zinc-200 transition-colors flex items-center space-x-1.5"
              >
                <span>DOWNLOAD PDF</span>
                <span>↓</span>
              </a>
            </div>
          </div>

          {/* Direct Embedded PDF Viewer */}
          <div className="relative flex-1 min-h-[65vh] sm:min-h-[72vh] w-full rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-inner">
            <iframe
              src={`${PORTFOLIO_CONFIG.resume.url}#view=FitH`}
              className="w-full h-full min-h-[65vh] sm:min-h-[72vh] rounded-xl border-none"
              title="Ameya Sagwekar Resume PDF"
            />
          </div>

          {/* Footer Bar */}
          <div className="mt-4 pt-3 border-t border-zinc-900 flex justify-between items-center font-mono text-xs text-zinc-500 flex-wrap gap-2">
            <span>RESUME FILE: {PORTFOLIO_CONFIG.resume.filename}</span>
            <div className="flex items-center space-x-4">
              <a
                href={PORTFOLIO_CONFIG.resume.url}
                download={PORTFOLIO_CONFIG.resume.filename}
                className="text-zinc-400 hover:text-white underline"
              >
                Having trouble viewing? Download PDF
              </a>
              <button
                onClick={onClose}
                className="px-4 py-1.5 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-full hover:bg-zinc-800"
              >
                Close Viewer
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

