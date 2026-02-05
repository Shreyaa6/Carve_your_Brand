import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Services from './components/Services'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hero />
        <Services />
        <TechStack />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </Router>
  )
}

export default App
