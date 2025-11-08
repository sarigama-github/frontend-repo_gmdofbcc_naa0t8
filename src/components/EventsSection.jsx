import { Calendar, MapPin, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

const events = [
  { title: 'Neighborhood Potluck', date: 'Sat, Nov 16', time: '5:00 PM', location: 'Central Park Pavilion', color: '#E9C46A' },
  { title: 'Skill-share Night', date: 'Wed, Nov 20', time: '7:30 PM', location: 'Makerspace 2F', color: '#A8DADC' },
  { title: 'Community Clean-up', date: 'Sun, Nov 24', time: '9:00 AM', location: 'Riverside Trail', color: '#E07A5F' },
]

export default function EventsSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#2A9D8F' }}>
            <Calendar className="text-white" size={20} />
          </div>
          <h2 className="text-3xl font-bold" style={{ color: '#264653' }}>Upcoming events</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((e, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-6 rounded-2xl bg-white border shadow-sm hover:shadow-lg transition"
              style={{ borderColor: e.color }}
            >
              <h3 className="text-xl font-semibold" style={{ color: '#264653' }}>{e.title}</h3>
              <div className="mt-3 space-y-1 text-sm" style={{ color: '#4A5568' }}>
                <div className="flex items-center gap-2"><Calendar size={16} /> <span>{e.date}</span></div>
                <div className="flex items-center gap-2"><Clock size={16} /> <span>{e.time}</span></div>
                <div className="flex items-center gap-2"><MapPin size={16} /> <span>{e.location}</span></div>
              </div>
              <button className="mt-4 px-4 py-2 rounded-lg text-sm font-semibold" style={{ backgroundColor: e.color, color: '#1D3557' }}>RSVP</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
