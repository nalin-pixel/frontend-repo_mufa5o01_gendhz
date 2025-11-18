import { motion } from 'framer-motion'

function CTA() {
  return (
    <section id="plan" className="relative py-24 bg-gradient-to-t from-slate-950 to-slate-900 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 backdrop-blur">
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_20%,rgba(244,114,182,0.25),transparent)]" />
          <div className="relative p-10 sm:p-16 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-3xl sm:text-4xl font-bold"
              >
                Craft an unforgettable itinerary
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="mt-3 text-white/80"
              >
                Tell us your pace and passions—we'll map temples, izakayas, scenic trains, and secret viewpoints into a seamless route.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-6 flex flex-col sm:flex-row gap-3"
              >
                <a href="#" className="px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:scale-[1.02] active:scale-[0.99] transition-transform shadow-lg">
                  Start Planning
                </a>
                <a href="#destinations" className="px-6 py-3 rounded-xl border border-white/30 text-white hover:bg-white/10 backdrop-blur transition-colors">
                  Explore More
                </a>
              </motion.div>
            </div>

            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                src="https://images.unsplash.com/photo-1545569341-9eb8b30979d1?q=80&w=1600&auto=format&fit=crop"
                alt="Shinkansen passing Mount Fuji"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-tr from-rose-400/30 to-amber-300/20 rounded-full blur-2xl" />
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-gradient-to-tr from-sky-300/30 to-indigo-400/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
