import { PORTFOLIO_CONFIG } from '../config/portfolio'

interface FooterProps {
  onOpenResume?: () => void
}

export default function Footer({ onOpenResume }: FooterProps) {
  return (
    <footer className="py-16 border-t border-zinc-900/80 px-6 md:px-16 relative z-20 bg-[#030303]">
      <div className="max-w-7xl mx-auto pl-2 sm:pl-4 md:pl-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-900/80">
          {/* Brand & Closing Statement */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="font-serif font-bold text-xl text-white tracking-tight">
                {PORTFOLIO_CONFIG.name}
              </span>
              <span className="font-mono text-xs text-zinc-600">/</span>
              <span className="font-mono text-xs text-zinc-400">© 2026</span>
            </div>

            <p className="text-xs text-zinc-400 font-light font-sans max-w-sm leading-relaxed">
              B.Tech Computer Science & Engineering student crafting high-performance web applications and resilient software architectures.
            </p>

            <p className="font-serif italic text-xs text-zinc-500">
              "Designed & built with curiosity."
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <span className="text-zinc-600 uppercase tracking-widest block font-medium">
              NAVIGATION DIRECTORY
            </span>
            <div className="grid grid-cols-2 gap-2 text-zinc-400">
              {PORTFOLIO_CONFIG.navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* External Directories & Resume */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="text-zinc-600 uppercase tracking-widest block font-medium">
              DIRECTORIES & RESUME
            </span>
            <div className="flex flex-col space-y-2 text-zinc-400">
              <a
                href={PORTFOLIO_CONFIG.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center justify-between"
              >
                <span>GitHub Profile</span>
                <span>↗</span>
              </a>
              <a
                href={PORTFOLIO_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center justify-between"
              >
                <span>LinkedIn Profile</span>
                <span>↗</span>
              </a>
              <button
                onClick={onOpenResume}
                className="hover:text-white transition-colors flex items-center justify-between text-left"
              >
                <span>Inspect Resume</span>
                <span>↓</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Hackathon Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] font-mono text-zinc-600">
          <p>© 2026 {PORTFOLIO_CONFIG.fullBrandName}. ALL RIGHTS RESERVED.</p>
          <p className="mt-2 sm:mt-0 uppercase tracking-widest">
            STUDENT PORTFOLIO HACKATHON 2026
          </p>
        </div>
      </div>
    </footer>
  )
}
