
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    products: {
      title: 'Products',
      links: [
        { name: 'Work', href: '/work' },
        { name: 'Services', href: '/services' },
        { name: 'Mobile Apps', href: '/services' },
        { name: 'Prototyping', href: '/services' }
      ]
    },
    solutions: {
      title: 'Solutions',
      links: [
        { name: 'E-commerce', href: '/work' },
        { name: 'SaaS Platforms', href: '/work' },
        { name: 'CMS Integration', href: '/services' },
        { name: 'Marketing Sites', href: '/services' }
      ]
    },
    resources: {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Brand Guidelines', href: '/brand-guidelines' },
        { name: 'Development Standards', href: '/development-standards' }
      ]
    },
    company: {
      title: 'Company',
      links: [
        { name: 'About', href: '/about' }
      ]
    }
  }

  return (
    <footer className="bg-[#050505] pt-24 pb-12 text-white border-t border-white/10">
      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 mb-32">

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key} className="flex flex-col gap-4">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">
                {section.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-sm text-white/80 hover:text-white transition-colors font-sans">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA Column */}
          <div className="flex flex-col gap-4 lg:items-end pt-8 lg:pt-0">
            <Link to="/contact" className="px-6 py-3 bg-[#E3DACD] text-black text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-white transition-colors text-center w-full lg:w-auto">
              Start Project
            </Link>
            <Link to="/contact" className="px-6 py-3 bg-transparent border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-white/10 transition-colors text-center w-full lg:w-auto">
              Book a Demo
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-end border-t border-white/10 pt-12">

          {/* Massive Logo */}
          <div className="w-full lg:w-auto mb-8 lg:mb-0">
            <h1 className="text-[15vw] lg:text-[13vw] leading-none font-serif italic tracking-tighter text-white select-none">
              Carve Your Brand
            </h1>
          </div>

          {/* Legal / Copyright */}
          <div className="w-full lg:w-auto flex flex-col items-start lg:items-end gap-8 pb-4">
            <div className="flex flex-wrap gap-6 text-[10px] font-bold uppercase tracking-widest text-white/40">
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/security" className="hover:text-white transition-colors">Security</Link>
            </div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-white/20">
              &copy; {currentYear} Carve Your Brand.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
