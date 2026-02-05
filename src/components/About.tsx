import { motion } from 'framer-motion'

const About = () => {
  const stats = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '30+', label: 'Happy Clients' },
    { value: '5+', label: 'Years Experience' },
    { value: '100%', label: 'Client Satisfaction' }
  ]

  const values = [
    {
      title: 'Quality First',
      description: 'We never compromise on quality. Every line of code, every design decision is made with excellence in mind.',
      icon: '✨'
    },
    {
      title: 'Client-Centric',
      description: 'Your success is our success. We work closely with you to understand your vision and bring it to life.',
      icon: '🤝'
    },
    {
      title: 'Innovation Driven',
      description: 'We stay ahead of the curve, using the latest technologies and best practices to deliver cutting-edge solutions.',
      icon: '🚀'
    },
    {
      title: 'Transparent Communication',
      description: 'Clear, honest communication throughout the project. You always know where we stand and what\'s next.',
      icon: '💬'
    }
  ]

  return (
    <section id="about" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block border border-primary/20 px-6 py-2 rounded-full mb-8"
          >
            <span className="text-sm font-bold uppercase tracking-widest text-primary">About Us</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6 text-primary max-w-3xl mx-auto">
            We are not just developers. We are your partners in <span className="text-accent-rose italic">evolution.</span>
          </h2>
          <p className="text-xl text-primary/60 max-w-2xl mx-auto font-sans leading-relaxed">
            Establishing a new standard for your digital presence with precision, passion, and purpose.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-32 border-y border-accent-stone/30 py-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-serif text-primary mb-2">{stat.value}</div>
              <div className="text-accent-rose font-sans text-xs font-bold uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-surface p-12 hover:bg-white transition-colors duration-500 border-l-4 border-transparent hover:border-accent-rose group"
            >
              <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{value.icon}</div>
              <h3 className="text-2xl font-serif font-medium mb-4 text-primary">{value.title}</h3>
              <p className="text-primary/70 font-sans leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
