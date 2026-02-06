import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ReactLenis } from 'lenis/react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Blog from './pages/Blog'
import About from './pages/About'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Security from './pages/Security'

import CaseStudies from './pages/CaseStudies'
import CaseStudyDetail from './pages/CaseStudyDetail'
import BrandGuidelines from './pages/BrandGuidelines'
import DevelopmentStandards from './pages/DevelopmentStandards'
import BlogPost from './pages/BlogPost'
import ScrollToTop from './components/ScrollToTop'

import Work from './pages/Work'
import Services from './pages/Services'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ReactLenis root options={{ lerp: 0.08 }}>
        <div className="App flex flex-col min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/security" element={<Security />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
            <Route path="/brand-guidelines" element={<BrandGuidelines />} />
            <Route path="/development-standards" element={<DevelopmentStandards />} />
          </Routes>
          <Footer />
        </div>
      </ReactLenis>
    </Router>
  )
}

export default App
