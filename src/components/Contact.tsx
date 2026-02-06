import { motion } from 'framer-motion'
import { useState } from 'react'
import TextAnimation from './ui/scroll-text'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-32 bg-background border-t border-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <TextAnimation
            text="Let's create something timeless."
            as="h2"
            classname="text-4xl md:text-5xl font-serif font-medium mb-6 text-primary"
            letterAnime={true}
          />
          <p className="text-xl text-primary/60 max-w-2xl mx-auto font-sans">
            Ready to start? We are waiting to hear your story.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-background"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-primary/40 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-b border-primary/20 focus:border-accent-rose focus:ring-0 bg-transparent outline-none transition placeholder-primary/20 text-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-primary/40 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-b border-primary/20 focus:border-accent-rose focus:ring-0 bg-transparent outline-none transition placeholder-primary/20 text-primary"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-xs font-bold uppercase tracking-widest text-primary/40 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-b border-primary/20 focus:border-accent-rose focus:ring-0 bg-transparent outline-none transition placeholder-primary/20 text-primary"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-primary/40 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-b border-primary/20 focus:border-accent-rose focus:ring-0 bg-transparent outline-none transition resize-none placeholder-primary/20 text-primary"
                  placeholder="Tell us about your project..."
                />
              </div>
              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-primary text-white rounded-full font-serif text-lg hover:bg-accent-rose transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="p-0">
              <h3 className="text-xl font-sans font-bold uppercase tracking-widest mb-8 text-primary">Get in Touch</h3>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest text-primary/40 mb-2">Email</h4>
                    <a href="mailto:carveyourbrand.agency@gmail.com" className="text-xl text-primary font-serif italic hover:text-accent-rose transition-colors">
                      carveyourbrand.agency@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-widest text-primary/40 mb-2">Phone</h4>
                    <a href="tel:+918679144515" className="text-xl text-primary font-serif italic hover:text-accent-rose transition-colors">
                      +91 8679144515
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-surface border border-transparent rounded-2xl">
              <h3 className="text-xl font-bold font-sans uppercase tracking-widest mb-6 text-primary">Why Choose Us?</h3>
              <ul className="space-y-4">
                {['Fast response time', 'Transparent pricing', 'Dedicated project manager', 'Ongoing support & maintenance'].map((item) => (
                  <li key={item} className="flex items-start text-primary/70">
                    <span className="mr-3 text-accent-rose">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
