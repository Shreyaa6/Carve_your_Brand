import { BrowserRouter as Router } from 'react-router-dom'
import { ReactLenis } from 'lenis/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <ReactLenis root options={{ lerp: 0.08 }}>
        <div className="App">
          <Navbar />
          <Hero />
          <Services />
          <TechStack />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </ReactLenis>
    </Router>
  )
}

export default App
