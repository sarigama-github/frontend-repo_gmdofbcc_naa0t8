import { Rocket, Users, HeartHandshake } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-25 blur-3xl" style={{ background: 'radial-gradient(circle at 30% 30%, #E07A5F, transparent 60%)' }} />
        <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full opacity-25 blur-3xl" style={{ background: 'radial-gradient(circle at 70% 70%, #2A9D8F, transparent 60%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 pb-16">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: '#2A9D8F' }}>
              <Rocket className="text-white" size={20} />
            </div>
            <span className="font-semibold tracking-tight" style={{ color: '#264653' }}>Community Hub</span>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <button className="px-3 py-2 rounded-lg text-sm font-medium" style={{ color: '#264653' }}>About</button>
            <button className="px-3 py-2 rounded-lg text-sm font-medium" style={{ color: '#264653' }}>Resources</button>
            <button className="px-3 py-2 rounded-lg text-sm font-medium" style={{ color: '#264653' }}>Events</button>
            <button className="px-3 py-2 rounded-lg text-sm font-medium" style={{ color: '#264653' }}>Contact</button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center mt-14">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
              style={{ color: '#264653' }}
            >
              A modern hub for local connections and shared resources
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 text-lg sm:text-xl max-w-xl"
              style={{ color: '#4A5568' }}
            >
              Discover community programs, lend a helping hand, and find uplifting events — all in one beautiful, welcoming space.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <button
                className="px-5 py-3 rounded-xl text-white font-semibold shadow-md hover:shadow-lg transition"
                style={{ backgroundColor: '#E9C46A' }}
              >
                Explore Resources
              </button>
              <button
                className="px-5 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition"
                style={{ backgroundColor: '#A8DADC', color: '#1D3557' }}
              >
                See Events
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 flex items-center gap-6"
            >
              <div className="flex items-center gap-2">
                <Users size={20} style={{ color: '#2A9D8F' }} />
                <span className="text-sm" style={{ color: '#4A5568' }}>2,400+ neighbors joined</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake size={20} style={{ color: '#E07A5F' }} />
                <span className="text-sm" style={{ color: '#4A5568' }}>300+ active volunteers</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border" style={{ borderColor: '#E9C46A' }}>
              <div className="w-full h-full bg-gradient-to-br" style={{ backgroundImage: 'linear-gradient(135deg, #E07A5F, #F4A261)' }} />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-md rounded-2xl p-4 shadow-xl border" style={{ borderColor: '#A8DADC' }}>
              <p className="text-sm font-medium" style={{ color: '#1D3557' }}>Weekly community meetup every Saturday</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
