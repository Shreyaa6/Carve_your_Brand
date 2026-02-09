import { motion } from 'framer-motion'
import TextAnimation from './ui/scroll-text'

const CALENDLY_LINK = 'https://calendly.com/carveyourbrand-agency/30min'

const Contact = () => {

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

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12 text-center"
          >
            <div className="p-0">
              <h3 className="text-xl font-sans font-bold uppercase tracking-widest mb-8 text-primary">Get in Touch</h3>
              <div className="space-y-8 mb-12">
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest text-primary/40 mb-2">Email</h4>
                  <a href="mailto:carveyourbrand.agency@gmail.com" className="text-xl md:text-2xl text-primary font-serif italic hover:text-accent-rose transition-colors">
                    carveyourbrand.agency@gmail.com
                  </a>
                </div>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest text-primary/40 mb-2">Phone</h4>
                  <a href="tel:+918679144515" className="text-xl md:text-2xl text-primary font-serif italic hover:text-accent-rose transition-colors">
                    +91 8679144515
                  </a>
                </div>
              </div>
              <motion.a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-primary text-white rounded-full font-serif text-lg hover:bg-accent-rose transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Let's Talk
              </motion.a>
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
