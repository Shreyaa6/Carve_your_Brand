import { motion } from 'framer-motion'
import videoBg from '../assets/a.mp4'

const Hero = () => {
  // Logos array removed as it was unused and we are using a cleaner layout

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-32 pb-12">

      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover grayscale"
        >
          <source src={videoBg} type="video/mp4" />
        </video>
      </div>

      {/* Background Shapes removed for cleaner look */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* No colors */}
      </div>

      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

        {/* Main Headline */}
        <div className="w-full flex flex-col items-center">
          {["Digital", "Products", "& Brands"].map((word, i) => (
            <motion.h1
              key={i}
              className="text-[12vw] leading-[0.85] font-serif font-medium tracking-tighter text-primary mix-blend-multiply text-center"
              initial={{ y: 100, opacity: 0, rotate: 2 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              transition={{
                duration: 1.2,
                ease: [0.2, 0.65, 0.3, 0.9],
                delay: i * 0.15
              }}
            >
              {word}
            </motion.h1>
          ))}
        </div>

        <motion.p
          className="mt-12 text-xl md:text-2xl font-sans text-accent-stone font-medium max-w-lg text-center leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          We engineer digital experiences that captivate, convert, and leave a mark.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="mt-12 flex items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-accent-rose text-white rounded-full font-serif text-lg tracking-wide hover:bg-primary transition-colors duration-300"
          >
            Start a Project
          </a>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest text-accent-stone">Scroll</span>
        <div className="w-[1px] h-12 bg-accent-stone/50">
          <motion.div
            className="w-full h-1/2 bg-accent-stone"
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

    </section>
  )
}

export default Hero
