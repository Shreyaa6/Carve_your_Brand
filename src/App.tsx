import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
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

const DEFAULT_TITLE = 'Carve Your Brand | Web, App, Brand & AI/ML Solutions Agency'
const DEFAULT_DESCRIPTION =
  'Carve Your Brand is a product design and engineering agency building websites, mobile apps, brand systems, and AI/ML solutions. Explore our work and case studies.'

function Seo() {
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname
    let title = DEFAULT_TITLE
    let description = DEFAULT_DESCRIPTION

    if (path === '/services') {
      title = 'Services | Carve Your Brand'
      description =
        'Explore our services: website and mobile app engineering, digital product design, brand strategy and management, and AI/ML solutions.'
    } else if (path === '/work') {
      title = 'Work | Carve Your Brand'
      description =
        'A curated showcase of product, brand, and engineering work across websites, apps, and AI-driven experiences.'
    } else if (path === '/case-studies') {
      title = 'Case Studies | Carve Your Brand'
      description =
        'Real projects we delivered: product strategy, design, engineering, and brand systems that drive measurable impact.'
    } else if (path.startsWith('/case-studies/')) {
      title = 'Case Study | Carve Your Brand'
      description =
        'A detailed breakdown of strategy, design, and engineering decisions behind a delivered project.'
    } else if (path === '/blog') {
      title = 'Blog | Carve Your Brand'
      description =
        'Insights on digital products, UX, engineering, brand strategy, and building AI-powered experiences.'
    } else if (path.startsWith('/blog/')) {
      title = 'Blog Post | Carve Your Brand'
      description =
        'Insights on product, design, engineering, and brand strategy from Carve Your Brand.'
    } else if (path === '/about') {
      title = 'About | Carve Your Brand'
      description =
        'We build high-performing websites, apps, and brand systems, with AI/ML capabilities for teams that want to scale.'
    } else if (path === '/contact') {
      title = 'Contact | Carve Your Brand'
      description =
        'Talk to Carve Your Brand about your next website, app, brand, or AI/ML project.'
    } else if (path === '/testimonials') {
      title = 'Testimonials | Carve Your Brand'
      description =
        'What clients say about working with Carve Your Brand across product, engineering, and brand strategy.'
    }

    document.title = title

    const descriptionTag = document.querySelector('meta[name="description"]')
    descriptionTag?.setAttribute('content', description)

    const ogTitleTag = document.querySelector('meta[property="og:title"]')
    ogTitleTag?.setAttribute('content', title)

    const ogDescriptionTag = document.querySelector('meta[property="og:description"]')
    ogDescriptionTag?.setAttribute('content', description)

    const twitterTitleTag = document.querySelector('meta[name="twitter:title"]')
    twitterTitleTag?.setAttribute('content', title)

    const twitterDescriptionTag = document.querySelector('meta[name="twitter:description"]')
    twitterDescriptionTag?.setAttribute('content', description)
  }, [location.pathname])

  return null
}

function App() {
  // Disable smooth scrolling on mobile to fix jitter
  useEffect(() => {
    // Optional: add mobile check if needed
  }, [])

  return (
    <Router>
      <Seo />
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
