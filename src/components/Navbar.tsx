import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Work', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Studio', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Shop', href: '#shop' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-background/90 backdrop-blur-md border-b border-accent-stone/20 py-4'
        : 'bg-transparent py-8'
        }`}
    >
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="relative group">
            <span className="text-2xl font-serif font-bold tracking-tight text-primary">Carve Your Brand</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-rose transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* Center Links */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-primary/60 hover:text-accent-rose transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#contact"
              className="px-6 py-2 bg-primary text-white text-xs font-sans font-bold uppercase tracking-[0.2em] rounded-full hover:bg-accent-rose transition-colors duration-300"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary"
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
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-8 space-y-4 flex flex-col items-center">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg font-serif text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-4 px-8 py-3 bg-primary text-white text-sm font-sans font-medium uppercase tracking-widest rounded-full"
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
