import { motion } from 'framer-motion'

const highlights = [
  {
    title: 'Tea Ceremony',
    image: 'https://images.unsplash.com/flagged/photo-1565080636132-56952ee2861c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUZWElMjBDZXJlbW9ueXxlbnwwfDB8fHwxNzYzNDk3MDQ4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    text: 'Quiet rituals that celebrate presence, simplicity, and respect.'
  },
  {
    title: 'Ryokan Stay',
    image: 'https://images.unsplash.com/photo-1720792445167-c622bb1d8378?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSeW9rYW4lMjBTdGF5fGVufDB8MHx8fDE3NjM0OTcwNDh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    text: 'Tatami rooms, onsen baths, and exquisite kaiseki cuisine.'
  },
  {
    title: 'Festivals',
    image: 'https://images.unsplash.com/photo-1615870393091-0242c4ba45c5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGZXN0aXZhbHN8ZW58MHwwfHx8MTc2MzQ5NzA0OXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    text: 'From lanterns to drums, vibrant traditions light up the seasons.'
  }
]

function Culture() {
  return (
    <section id="culture" className="relative py-24 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Cultural Highlights</h2>
            <p className="mt-3 text-white/70 max-w-2xl">Embrace the aesthetics of wabi‑sabi and the joy of omotenashi. These experiences root your journey in authenticity.</p>
          </div>
          <a href="#plan" className="hidden sm:inline-block px-5 py-2 rounded-xl border border-white/20 hover:bg-white/10 transition-colors">Plan Your Trip</a>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <motion.article
              key={h.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={h.image} alt={h.title} className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{h.title}</h3>
                <p className="mt-2 text-white/75">{h.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Culture
