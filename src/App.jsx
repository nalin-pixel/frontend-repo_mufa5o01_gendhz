import Hero from './components/Hero'
import Destinations from './components/Destinations'
import Culture from './components/Culture'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Hero />
      <Destinations />
      <Culture />
      <CTA />
      <footer className="py-12 bg-slate-950 text-center text-white/60 text-sm">
        Made with care • 日本へようこそ
      </footer>
    </div>
  )
}

export default App
