import vid from '../assets/vid.mp4'

const Showreel = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <span className="inline-block px-5 py-2 rounded-full border border-primary/10 bg-white/70 backdrop-blur-md text-[10px] font-bold uppercase tracking-[0.2em] text-primary/60">
            Studio Reel
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-primary">
            A glimpse into how we build, ship, and refine.
          </h2>
        </div>

        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
          <video
            src={vid}
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Showreel

