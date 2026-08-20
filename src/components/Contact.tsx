import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import { PORTFOLIO_CONFIG } from '../config/portfolio'
import LiveAvatar from './LiveAvatar'

interface ContactProps {
  onOpenResume?: () => void
}

export default function Contact({ onOpenResume }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setIsSubmitting(true)

    // Form submission triggers direct mailto payload while showing clear client confirmation
    setTimeout(() => {
      const mailtoUrl = `mailto:${PORTFOLIO_CONFIG.social.email}?subject=${encodeURIComponent(
        formData.subject || `Portfolio Contact from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`

      window.open(mailtoUrl, '_blank')
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 600)
  }

  return (
    <section id="contact" className="py-24 px-6 md:px-16 border-t border-zinc-900/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto pl-2 sm:pl-4 md:pl-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
        >
          <div>
            <span className="font-mono text-xs text-zinc-500 tracking-[0.25em] uppercase block mb-3">
              05 / RECRUITER & CONNECT
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-serif uppercase leading-none mb-4">
              HAVE AN IDEA?<br />
              <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent">
                LET'S BUILD SOMETHING.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 font-light max-w-xl leading-relaxed">
              Open for software engineering opportunities, internships, and technical projects. Feel free to connect directly or download my resume.
            </p>
          </div>

          <div className="shrink-0 pt-4 md:pt-0 -translate-x-4 sm:-translate-x-6 lg:-translate-x-10">
            <LiveAvatar
              src="/avatars/coffee-break.png"
              alt="Ameya Coffee Break Sticker"
              animation="sipping"
              enableBlink={false}
              mirrored={true}
              imgClassName="w-40 sm:w-52 lg:w-60 h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] filter rotate-3 hover:rotate-0 hover:scale-105 transition-transform duration-300 pointer-events-none select-none"
              animationDuration={4}
            />
          </div>
        </motion.div>

        {/* Primary Recruiter Action Cards: Resume, LinkedIn, GitHub */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Card 1: Resume Download */}
          <button
            onClick={onOpenResume}
            className="group border border-zinc-800/90 bg-gradient-to-b from-zinc-950 to-[#08080a] p-6 sm:p-8 rounded-xl flex flex-col justify-between hover:border-white transition-all duration-300 shadow-xl text-left"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                  DOCUMENTATION
                </span>
                <span className="font-mono text-[10px] text-emerald-400 uppercase">
                  VERIFIED RESUME
                </span>
              </div>
              <h3 className="text-xl font-serif font-bold text-white group-hover:text-zinc-200 transition-colors mb-2">
                Download / View Resume
              </h3>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Inspect technical background, academic coursework, and verified project credentials.
              </p>
            </div>
            <div className="pt-6 border-t border-zinc-900 flex justify-between items-center font-mono text-xs text-zinc-300 group-hover:text-white w-full">
              <span>INSPECT RESUME</span>
              <span className="transform group-hover:translate-y-0.5 transition-transform">↓</span>
            </div>
          </button>

          {/* Card 2: LinkedIn Profile */}
          <a
            href={PORTFOLIO_CONFIG.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-zinc-800/90 bg-gradient-to-b from-zinc-950 to-[#08080a] p-6 sm:p-8 rounded-xl flex flex-col justify-between hover:border-white transition-all duration-300 shadow-xl"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                  PROFESSIONAL NETWORK
                </span>
                <span className="font-mono text-[10px] text-zinc-500 uppercase">
                  VERIFIED
                </span>
              </div>
              <h3 className="text-xl font-serif font-bold text-white group-hover:text-zinc-200 transition-colors mb-2">
                Connect on LinkedIn
              </h3>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                View professional endorsements, network connections, and career updates.
              </p>
            </div>
            <div className="pt-6 border-t border-zinc-900 flex justify-between items-center font-mono text-xs text-zinc-300 group-hover:text-white">
              <span>LINKEDIN / AMEYA</span>
              <span className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
            </div>
          </a>

          {/* Card 3: GitHub Repositories */}
          <a
            href={PORTFOLIO_CONFIG.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-zinc-800/90 bg-gradient-to-b from-zinc-950 to-[#08080a] p-6 sm:p-8 rounded-xl flex flex-col justify-between hover:border-white transition-all duration-300 shadow-xl"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                  SOURCE CODE
                </span>
                <span className="font-mono text-[10px] text-zinc-500 uppercase">
                  AMEYA48
                </span>
              </div>
              <h3 className="text-xl font-serif font-bold text-white group-hover:text-zinc-200 transition-colors mb-2">
                Explore GitHub Repos
              </h3>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Inspect open-source repositories, commit history, and algorithmic experiments.
              </p>
            </div>
            <div className="pt-6 border-t border-zinc-900 flex justify-between items-center font-mono text-xs text-zinc-300 group-hover:text-white">
              <span>GITHUB / AMEYA48</span>
              <span className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
            </div>
          </a>
        </div>

        {/* Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 space-y-6">
            <div className="border border-zinc-800/80 bg-zinc-950/60 p-6 rounded-xl space-y-3 font-mono text-xs">
              <div>
                <span className="text-zinc-500 uppercase tracking-widest block text-[10px]">
                  LET'S CONNECT
                </span>
                <span className="text-sm font-serif font-bold text-white block">
                  Direct & Open Line
                </span>
              </div>
              <div className="pt-3 border-t border-zinc-900">
                <span className="text-zinc-500 uppercase tracking-widest block text-[10px] mb-1">
                  DIRECT EMAIL:
                </span>
                <a
                  href={PORTFOLIO_CONFIG.social.mailto}
                  className="text-base sm:text-lg font-serif text-white hover:text-zinc-300 transition-colors font-bold block"
                >
                  {PORTFOLIO_CONFIG.social.email}
                </a>
              </div>
              <p className="text-[11px] text-zinc-500 font-light">
                Submitting the inquiry form will format a direct email addressed to ameyasagwekar@gmail.com.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 border border-zinc-800/80 bg-zinc-950/60 p-6 sm:p-10 rounded-2xl">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4 font-mono text-xs"
              >
                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">
                  MAIL CLIENT LAUNCHED
                </h3>
                <p className="text-zinc-400 font-light max-w-md mx-auto leading-relaxed">
                  Your message payload has been formatted and opened in your email client. You can also send an email directly to <span className="text-white">ameyasagwekar.work@gmail.com</span>.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs uppercase tracking-wider rounded-full hover:bg-zinc-800"
                >
                  SEND ANOTHER INQUIRY
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-zinc-500 uppercase tracking-widest mb-2">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-zinc-500 uppercase tracking-widest mb-2">
                      YOUR EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-zinc-500 uppercase tracking-widest mb-2">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Engineering Role / Project Collaboration"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-zinc-500 uppercase tracking-widest mb-2">
                    MESSAGE *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello Ameya, I'd like to discuss an opportunity..."
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-white text-black font-semibold uppercase tracking-widest rounded-lg hover:bg-zinc-200 transition-all shadow-lg hover:shadow-white/10 disabled:opacity-50"
                >
                  {isSubmitting ? 'FORMATTING PAYLOAD...' : 'SEND INQUIRY →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
