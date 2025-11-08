import Hero from './components/Hero'
import ResourceGrid from './components/ResourceGrid'
import EventsSection from './components/EventsSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br" style={{ backgroundImage: 'linear-gradient(135deg, #FFF6F1 0%, #F0FAF8 100%)' }}>
      <Hero />
      <ResourceGrid />
      <EventsSection />
      <Footer />
    </div>
  )
}

export default App
