import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isLightBackgroundRoute = [
    /^\/work/,
    /^\/services/,
    /^\/blog/,
    /^\/about/,
    /^\/case-studies/,
    /^\/brand-guidelines/,
    /^\/development-standards/,
    /^\/contact/,
  ].some((r) => r.test(location.pathname))

  const navItems = [
    { name: 'Work', href: '/work' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled
        ? 'bg-black/95 backdrop-blur-md border-b border-white/10 py-4'
        : 'bg-transparent py-8'
        }`}
    >
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="relative group">
            <span className={`text-3xl font-cursive font-bold lowercase transition-colors duration-300 ${isScrolled ? 'text-surface' : isLightBackgroundRoute ? 'text-primary' : 'text-surface'}`}>carveyourbrand</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cta-light transition-all duration-300 group-hover:w-full"></span>
          </Link>

          {/* Center Links */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-xs font-sans font-bold uppercase tracking-[0.2em] hover:text-white transition-colors duration-300 ${isScrolled ? 'text-surface/80' : isLightBackgroundRoute ? 'text-primary' : 'text-surface'}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right: Let's Talk — dark pill, light grey text, subtle border */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="https://calendly.com/carveyourbrand-agency/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-black/80 border border-white/15 text-white text-sm font-sans font-bold uppercase tracking-[0.2em] rounded-full hover:bg-white/10 hover:text-white hover:border-white/25 transition-colors duration-300"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-[102] p-2 text-white bg-white/10 backdrop-blur-md rounded-full border border-white/10 hover:bg-white/20 transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-t border-white/10"
          >
            <div className="px-4 py-8 space-y-4 flex flex-col items-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-lg font-serif text-surface"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://calendly.com/carveyourbrand-agency/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-8 py-3 bg-white/10 border border-white/15 text-surface text-sm font-sans font-medium uppercase tracking-widest rounded-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
