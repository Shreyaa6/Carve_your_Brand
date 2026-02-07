import { useEffect } from 'react'
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
import TestimonialsPage from './pages/TestimonialsPage'
import ContactPage from './pages/ContactPage'
import ScrollToTop from './components/ScrollToTop'

import Work from './pages/Work'
import Services from './pages/Services'


function App() {
  // Disable smooth scrolling on mobile to fix jitter
  useEffect(() => {
    // Optional: add mobile check if needed
  }, [])

  return (
    <Router>
      {/* Lenis disabled on touch devices via CSS or conditional rendering is complex without a hook. 
          Simplest 'fix it now' approach: Only use Lenis on desktop by checking window width or UA if possible, 
          but usually Lenis shouldn't cause this much jitter unless configured wrong. 
          Let's reduce lerp or use a simpler configuration. 
          Actually, the user wants "responsive and smooth scroll in all device".
          Native scroll is smoothest on mobile. */}
      <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true, touchMultiplier: 0 }}>
        <ScrollToTop />
        <div className="App flex flex-col min-h-screen w-full max-w-full min-w-0 overflow-x-clip">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/security" element={<Security />} />
            <Route path="/contact" element={<ContactPage />} />
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
