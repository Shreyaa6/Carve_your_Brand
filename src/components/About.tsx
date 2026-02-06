import { motion } from 'framer-motion'
import TextAnimation from './ui/scroll-text'

const About = () => {
  const stats = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '30+', label: 'Happy Clients' },
    { value: '5+', label: 'Years Experience' },
    { value: '100%', label: 'Client Satisfaction' }
  ]

  return (
    <section id="about" className="py-20 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-display text-3xl md:text-4xl mb-4">
            Why Carve Your Brand is not just an agency
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are your partners in digital evolution.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary-700 mb-2 font-display">{stat.value}</div>
              <div className="text-gray-600 font-medium text-sm uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Animated text + image blocks */}
        <div className="space-y-20 md:space-y-28">
          {/* 1. We don't just build. We craft. — image left */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200"
            >
              <img
                src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80"
                alt="Craft and design"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
            <div className="flex flex-col justify-center">
              <TextAnimation
                text="We don't just build. We craft."
                variants={{
                  hidden: { filter: 'blur(10px)', opacity: 0, y: 20 },
                  visible: {
                    filter: 'blur(0px)',
                    opacity: 1,
                    y: 0,
                    transition: { ease: 'easeOut', duration: 0.6 },
                  },
                }}
                classname="text-3xl md:text-4xl xl:text-5xl font-medium font-display text-gray-900 capitalize"
              />
            </div>
          </div>

          {/* 2. Your vision. Our craft. — image right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1 flex flex-col justify-center">
              <TextAnimation
                as="p"
                letterAnime={true}
                text="Your vision. Our craft. One outcome."
                classname="text-2xl md:text-3xl xl:text-4xl font-display text-gray-900 lowercase"
                variants={{
                  hidden: { filter: 'blur(4px)', opacity: 0, y: 20 },
                  visible: {
                    filter: 'blur(0px)',
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.2 },
                  },
                }}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2 relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Vision and partnership"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* 3. From concept to launch — image left */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200"
            >
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="Concept to launch"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
            <div className="flex flex-col justify-center md:text-right">
              <TextAnimation
                text="From concept to launch, with clarity at every step."
                direction="right"
                classname="text-2xl md:text-3xl xl:text-4xl font-display text-gray-900 capitalize md:ml-auto max-w-xl"
                variants={{
                  hidden: { filter: 'blur(8px)', opacity: 0, x: 24 },
                  visible: {
                    filter: 'blur(0px)',
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, ease: 'easeOut' },
                  },
                }}
              />
            </div>
          </div>

          {/* 4. Quality in every line — image right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1 flex flex-col justify-center">
              <TextAnimation
                text="Quality in every line. Partnership in every project."
                direction="down"
                lineAnime={true}
                classname="text-2xl md:text-3xl xl:text-4xl font-display text-gray-900 capitalize max-w-xl"
                variants={{
                  hidden: { filter: 'blur(6px)', opacity: 0, y: -16 },
                  visible: {
                    filter: 'blur(0px)',
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: 'easeOut' },
                  },
                }}
              />
            </div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2 relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200"
            >
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
                alt="Quality and partnership"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* 5. Let's turn ideas into reality — full width image + text */}
          <div className="relative rounded-2xl overflow-hidden aspect-[21/9] min-h-[280px] bg-gray-200">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80"
              alt="Ideas into reality"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4">
              <TextAnimation
                text="Let's turn ideas into reality."
                classname="text-3xl md:text-4xl xl:text-5xl font-medium font-display text-white capitalize text-center drop-shadow-lg"
                variants={{
                  hidden: { filter: 'blur(10px)', opacity: 0, y: 20 },
                  visible: {
                    filter: 'blur(0px)',
                    opacity: 1,
                    y: 0,
                    transition: { ease: 'easeOut', duration: 0.6 },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
