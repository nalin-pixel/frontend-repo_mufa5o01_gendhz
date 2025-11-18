import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -120])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6])

  return (
    <section ref={ref} className="relative h-[100svh] w-full overflow-hidden">
      {/* Background image */}
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=2000&auto=format&fit=crop"
          alt="Torii gate at sunset in Miyajima, Japan"
          className="w-full h-full object-cover"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-900"></div>
      </motion.div>

      {/* Decorative subtle grain */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-overlay bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.25),transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Simple nav */}
        <div className="px-6 sm:px-10 pt-6 flex items-center justify-between">
          <div className="text-white/90 font-semibold tracking-wide">Nihon Journey</div>
          <nav className="hidden sm:flex gap-6 text-white/80 text-sm">
            <a href="#destinations" className="hover:text-white transition-colors">Destinations</a>
            <a href="#culture" className="hover:text-white transition-colors">Culture</a>
            <a href="#plan" className="hover:text-white transition-colors">Plan</a>
          </nav>
        </div>

        <div className="flex-1 grid place-items-center px-6 sm:px-10">
          <div className="max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mb-4 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-white/80 backdrop-blur"
            >
              Wander with intention • 和の心
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_30px_rgba(0,0,0,0.35)]"
            >
              Discover Japan
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-amber-200 to-sky-200">beyond the postcards</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.9 }}
              className="mt-6 text-lg sm:text-xl text-white/85"
            >
              From tranquil tea gardens in Kyoto to neon dreams in Shibuya—immerse yourself in timeless tradition and cutting‑edge culture.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a href="#destinations" className="px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:scale-[1.02] active:scale-[0.99] transition-transform shadow-lg">
                Explore Destinations
              </a>
              <a href="#culture" className="px-6 py-3 rounded-xl border border-white/30 text-white hover:bg-white/10 backdrop-blur transition-colors">
                Cultural Highlights
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="pb-8 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-white/80 text-sm"
          >
            Scroll
            <span className="ml-2 inline-block h-5 w-[2px] bg-white/60 align-middle rounded-full animate-pulse" />
          </motion.div>
        </div>
      </div>

      {/* Floating sakura petals */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: Math.random() * 100 + 'vw', y: -50, rotate: 0, opacity: 0 }}
          animate={{
            x: [null, Math.random() * 100 + 'vw'],
            y: '110vh',
            rotate: 360,
            opacity: [0, 1, 0.8, 0],
          }}
          transition={{ duration: 12 + Math.random() * 8, repeat: Infinity, delay: Math.random() * 4, ease: 'linear' }}
          className="pointer-events-none absolute top-0 left-0 w-5 h-5"
        >
          <svg viewBox="0 0 24 24" className="w-full h-full" fill="url(#petal)" opacity="0.9">
            <defs>
              <linearGradient id="petal" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f9a8d4" />
                <stop offset="100%" stopColor="#f472b6" />
              </linearGradient>
            </defs>
            <path d="M12 2c2.5 3.5 7 4 8 8 1 3.5-1.5 6-4 7s-4 1-4 5c0-4-1.5-4-4-5s-5-3.5-4-7c1-4 5.5-4.5 8-8z" />
          </svg>
        </motion.div>
      ))}
    </section>
  )
}

export default Hero
