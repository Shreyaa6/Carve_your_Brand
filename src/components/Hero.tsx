import { motion } from 'framer-motion'
import videoBg from '../assets/a.mp4'
import TextAnimation from './ui/scroll-text'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-32 pb-12 bg-black">

      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover grayscale opacity-80"
        >
          <source src={videoBg} type="video/mp4" />
        </video>
      </div>

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 z-[1] bg-black/50 pointer-events-none" />

      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

        {/* Main Headline — warm muted taupe */}
        <div className="w-full flex flex-col items-center">
          {["Digital", "Products", "& Brands"].map((word, i) => (
            <TextAnimation
              key={i}
              text={word}
              as="div"
              classname="text-[12vw] leading-[0.85] font-serif font-medium tracking-tighter text-hero-heading text-center"
              variants={{
                hidden: { filter: 'blur(10px)', opacity: 0, y: 20 },
                visible: {
                  filter: 'blur(0px)',
                  opacity: 1,
                  y: 0,
                  transition: {
                    ease: 'linear',
                    duration: 1.2,
                    delay: i * 0.15
                  }
                },
              }}
            />
          ))}
        </div>

        <div className="mt-12 max-w-lg text-center">
          <TextAnimation
            text="We engineer digital experiences that captivate, convert, and leave a mark."
            as="p"
            classname="text-xl md:text-2xl font-sans text-nav-muted font-medium leading-relaxed"
            variants={{
              hidden: { filter: 'blur(4px)', opacity: 0, y: 20 },
              visible: {
                filter: 'blur(0px)',
                opacity: 1,
                y: 0,
                transition: { delay: 1, duration: 1 }
              },
            }}
          />
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 flex items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-cta-light text-primary rounded-full font-serif text-lg tracking-wide hover:bg-white/90 transition-colors duration-300"
          >
            Start a Project
          </a>
        </motion.div>

      </div>



    </section>
  )
}

export default Hero
