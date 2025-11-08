import { BookOpen, HandHeart, Leaf, Building2, CalendarDays } from 'lucide-react'
import { motion } from 'framer-motion'

const items = [
  {
    icon: BookOpen,
    title: 'Learning & Classes',
    desc: 'Free workshops, skill-shares, and tutoring for all ages.',
    chip: 'Education',
    color: '#2A9D8F',
  },
  {
    icon: HandHeart,
    title: 'Mutual Aid',
    desc: 'Food drives, clothing swaps, and emergency assistance.',
    chip: 'Support',
    color: '#E07A5F',
  },
  {
    icon: Leaf,
    title: 'Gardening',
    desc: 'Community gardens, composting, and sustainability tips.',
    chip: 'Green',
    color: '#2A9D8F',
  },
  {
    icon: Building2,
    title: 'Spaces & Tools',
    desc: 'Makerspaces, public rooms, and shared equipment.',
    chip: 'Access',
    color: '#F4A261',
  },
  {
    icon: CalendarDays,
    title: 'Events Calendar',
    desc: 'Weekly meetups, cultural nights, and city events.',
    chip: 'Happenings',
    color: '#A8DADC',
  },
]

export default function ResourceGrid() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: '#264653' }}>Featured resources</h2>
          <button className="text-sm font-semibold underline" style={{ color: '#2A9D8F' }}>Browse all</button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group p-6 rounded-2xl bg-white shadow-sm border hover:shadow-xl transition overflow-hidden"
              style={{ borderColor: '#E9C46A' }}
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: item.color }}>
                  <item.icon className="text-white" size={20} />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: '#FFF3C4', color: '#7A5B00' }}>{item.chip}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold" style={{ color: '#264653' }}>{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: '#4A5568' }}>{item.desc}</p>
              <div className="mt-4">
                <button className="text-sm font-medium underline" style={{ color: '#E07A5F' }}>Learn more</button>
              </div>
              <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full opacity-20 blur-2xl" style={{ background: `radial-gradient(circle, ${item.color}, transparent 60%)` }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
