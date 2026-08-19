import { motion } from 'framer-motion'
import { PORTFOLIO_CONFIG } from '../config/portfolio'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  }

  return (
    <section id="about" className="py-24 px-6 md:px-16 border-t border-zinc-900/80 relative overflow-hidden">
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
            01 / BACKGROUND & PHILOSOPHY
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-serif uppercase">
            CRAFTING RESILIENT<br />
            <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent">
              SOFTWARE SYSTEMS.
            </span>
          </h2>
        </motion.div>

        {/* Narrative & Focus Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
          {/* Main Editorial Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-lg sm:text-xl text-zinc-200 font-serif font-light leading-relaxed">
              I am a Computer Science & Engineering student driven by a deep fascination for software architecture, computational efficiency, and thoughtful user interface design.
            </p>
            <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed font-sans">
              Rather than viewing code strictly as syntax, I treat software engineering as the art of building reliable, real-world systems. My work spans the full technology stack—from low-level algorithmic logic in C++ to cloud-native backends in Node.js and fluid, responsive interfaces in React.
            </p>
            <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed font-sans">
              I prioritize clean system design, maintainable codebase structures, and performance optimization. Whether designing RESTful microservices, containerizing environments with Docker, or tuning database queries, my objective remains constant: deliver robust engineering with zero unnecessary complexity.
            </p>

            {/* Quick Stat Pill Highlights */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono text-xs">
              <div className="border border-zinc-900 bg-zinc-950/60 p-4 rounded-lg">
                <span className="text-zinc-500 block mb-1">DEGREE</span>
                <span className="text-zinc-200 font-semibold">B.Tech CSE</span>
              </div>
              <div className="border border-zinc-900 bg-zinc-950/60 p-4 rounded-lg">
                <span className="text-zinc-500 block mb-1">FOCUS</span>
                <span className="text-zinc-200 font-semibold">Full Stack & Systems</span>
              </div>
              <div className="border border-zinc-900 bg-zinc-950/60 p-4 rounded-lg col-span-2 sm:col-span-1">
                <span className="text-zinc-500 block mb-1">LOCATION</span>
                <span className="text-zinc-200 font-semibold">Mumbai, India</span>
              </div>
            </div>
          </motion.div>

          {/* Specialization Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            <motion.div variants={itemVariants} className="border border-zinc-900 bg-zinc-950/40 p-6 rounded-lg hover:border-zinc-800 transition-colors">
              <span className="font-mono text-xs text-zinc-500 block mb-2">[ 01 ] SYSTEM ARCHITECTURE</span>
              <h3 className="text-base font-bold text-white mb-2 font-serif">Scalable Backend & APIs</h3>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Building structured REST APIs and microservice endpoints using Node.js, Express, and resilient database storage.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="border border-zinc-900 bg-zinc-950/40 p-6 rounded-lg hover:border-zinc-800 transition-colors">
              <span className="font-mono text-xs text-zinc-500 block mb-2">[ 02 ] INTERFACE ENGINEERING</span>
              <h3 className="text-base font-bold text-white mb-2 font-serif">High-Performance Web UI</h3>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Developing responsive, state-driven user interfaces in React with modern CSS architectures and Framer Motion.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="border border-zinc-900 bg-zinc-950/40 p-6 rounded-lg hover:border-zinc-800 transition-colors">
              <span className="font-mono text-xs text-zinc-500 block mb-2">[ 03 ] INFRASTRUCTURE & DSA</span>
              <h3 className="text-base font-bold text-white mb-2 font-serif">DevOps & Algorithmic Problem Solving</h3>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Applying core Data Structures & Algorithms in C++ alongside Docker containerization and cloud tooling.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Technical Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="pt-12 border-t border-zinc-900/60"
        >
          <span className="font-mono text-xs text-zinc-500 tracking-[0.2em] uppercase block mb-8">
            TECHNICAL EVOLUTION & MILESTONES
          </span>

          <div className="relative border-l border-zinc-800/80 ml-3 sm:ml-4 space-y-12 pl-6 sm:pl-8">
            {PORTFOLIO_CONFIG.timeline.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-zinc-900 border border-zinc-600 group-hover:border-white group-hover:bg-white transition-all duration-300" />
                
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                  <h4 className="text-base sm:text-lg font-bold text-white font-serif group-hover:text-zinc-200 transition-colors">
                    {item.title}
                  </h4>
                  <span className="font-mono text-xs text-zinc-400 tracking-wider font-medium mt-1 sm:mt-0">
                    [{item.year}]
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 font-light max-w-3xl leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
