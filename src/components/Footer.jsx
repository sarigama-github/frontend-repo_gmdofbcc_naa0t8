import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 rounded-3xl shadow-inner" style={{ backgroundColor: '#F8F5F2' }}>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold" style={{ color: '#264653' }}>Community Hub</h3>
            <p className="mt-2 text-sm" style={{ color: '#4A5568' }}>Built by neighbors, for neighbors. Sharing resources, kindness, and knowledge.</p>
          </div>
          <div className="text-sm" style={{ color: '#4A5568' }}>
            <p>Contact: hello@community.local</p>
            <p className="mt-1">Location: 123 Commons Ave</p>
          </div>
          <div className="flex items-center gap-4">
            <a className="p-2 rounded-lg hover:opacity-80" href="#" aria-label="Twitter" style={{ backgroundColor: '#A8DADC' }}>
              <Twitter size={18} />
            </a>
            <a className="p-2 rounded-lg hover:opacity-80" href="#" aria-label="Facebook" style={{ backgroundColor: '#E9C46A' }}>
              <Facebook size={18} />
            </a>
            <a className="p-2 rounded-lg hover:opacity-80" href="#" aria-label="Instagram" style={{ backgroundColor: '#E07A5F', color: 'white' }}>
              <Instagram size={18} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-xs text-center" style={{ color: '#718096' }}>
          © {new Date().getFullYear()} Community Hub — All rights reserved.
        </div>
      </div>
    </footer>
  )
}
