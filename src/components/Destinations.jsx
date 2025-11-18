import { motion } from 'framer-motion'

const cards = [
  {
    title: 'Kyoto',
    image:
      'https://images.unsplash.com/photo-1503891450247-ee5f8ec46dc3?q=80&w=1600&auto=format&fit=crop',
    desc: 'Temple bells, tea houses, and the glow of lantern-lit lanes.'
  },
  {
    title: 'Tokyo',
    image:
      'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=1600&auto=format&fit=crop',
    desc: 'A symphony of neon, food alleys, and avant‑garde fashion.'
  },
  {
    title: 'Mount Fuji',
    image:
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1600&auto=format&fit=crop',
    desc: 'Snow‑capped serenity reflected in mirror‑still lakes.'
  },
  {
    title: 'Nara',
    image:
      'https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1600&auto=format&fit=crop',
    desc: 'Ancient shrines and gentle deer roaming free.'
  }
]

function Destinations() {
  return (
    <section id="destinations" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Signature Destinations</h2>
          <p className="mt-3 text-white/70 max-w-2xl">Curated places where tradition and modernity intertwine. Each card opens a doorway into a distinct mood of Japan.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur border border-white/10"
            >
              <div className="absolute inset-0 overflow-hidden">
                <img src={c.image} alt={c.title} className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              </div>
              <div className="relative z-10 p-4 h-48 flex flex-col justify-end">
                <h3 className="text-xl font-semibold drop-shadow">{c.title}</h3>
                <p className="text-sm text-white/80">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Destinations
