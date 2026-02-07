
import uiVideo from '../assets/ui.mp4'
import appVideo from '../assets/app.mp4'
import brandingVideo from '../assets/branding.mp4'
import devVideo from '../assets/dev.mp4'


const Services = () => {
  return (

    <main className="bg-background">
      <div className="wrapper relative">


        {/* Section 1: Intro / UX & UI */}
        <section className="text-primary h-[100dvh] w-full bg-background flex flex-col justify-center items-center sticky top-0 z-10 border-b border-primary/5 px-4 text-center">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#2A25200a_1px,transparent_1px),linear-gradient(to_bottom,#2A25200a_1px,transparent_1px)] bg-size-[54px_54px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6">
            <div className="inline-block border border-accent-stone/30 px-6 py-2 rounded-full bg-white/50 backdrop-blur-sm">
              <span className="text-xs font-bold uppercase tracking-widest text-accent-rose">Our Expertise</span>
            </div>
            <h1 className="text-[12vw] lg:text-[7vw] font-serif font-medium tracking-tighter leading-[0.9]">
              We build digital <br className="md:hidden" />
              <span className="italic text-accent-rose">legacies.</span>
            </h1>
            <p className="text-lg md:text-2xl font-sans text-primary/60 max-w-xl mx-auto leading-relaxed">
              Scroll to explore our crafts
            </p>
          </div>
        </section>

        {/* Section 2: UX & UI Card */}
        <section className="bg-primary text-surface grid place-content-center h-[100dvh] sticky top-0 z-20 rounded-t-3xl overflow-hidden shadow-2xl">
          <div className="w-full max-w-[90rem] mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center h-full sm:h-auto content-center">
            <div className="lg:col-span-2 flex flex-col justify-center text-center lg:text-left pt-8 lg:pt-0">
              <span className="text-accent-rose font-bold tracking-widest uppercase mb-4 block text-sm">01. Service</span>
              <h2 className="text-4xl sm:text-6xl md:text-8xl font-serif mb-4 lg:mb-8 text-white">UX & UI Design</h2>
              <p className="text-base sm:text-xl md:text-2xl text-white/70 leading-relaxed font-sans max-w-md mx-auto lg:mx-0">
                Designing interfaces that are intuitive, efficient, and enjoyable to use. We craft systems, not just screens.
              </p>
            </div>
            <div className="relative lg:col-span-3 w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-90">
                <source src={uiVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        {/* Section 3: Web & Mobile App Card */}
        <section className="bg-surface text-primary grid place-content-center h-[100dvh] sticky top-0 z-30 rounded-t-3xl overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
          <div className="w-full max-w-[90rem] mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center h-full sm:h-auto content-center">
            <div className="order-2 lg:order-1 relative lg:col-span-3 w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src={appVideo} type="video/mp4" />
              </video>
            </div>
            <div className="order-1 lg:order-2 lg:col-span-2 flex flex-col justify-center text-center lg:text-left pt-8 lg:pt-0">
              <span className="text-primary/50 font-bold tracking-widest uppercase mb-4 block text-sm">02. Service</span>
              <h2 className="text-4xl sm:text-6xl md:text-8xl font-serif mb-4 lg:mb-8 text-primary">Web & Mobile</h2>
              <p className="text-base sm:text-xl md:text-2xl text-primary/70 leading-relaxed font-sans max-w-md mx-auto lg:mx-0">
                Transforming ideas into exceptional cross-platform experiences. From native iOS to responsive web apps.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Design & Creative Card */}
        <section className="bg-accent-rose text-white grid place-content-center h-[100dvh] sticky top-0 z-40 rounded-t-3xl overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.15)]">
          <div className="w-full max-w-[90rem] mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center h-full sm:h-auto content-center">
            <div className="lg:col-span-2 flex flex-col justify-center text-center lg:text-left pt-8 lg:pt-0">
              <span className="text-white/60 font-bold tracking-widest uppercase mb-4 block text-sm">03. Service</span>
              <h2 className="text-4xl sm:text-6xl md:text-8xl font-serif mb-4 lg:mb-8 text-white">Brand & Creative</h2>
              <p className="text-base sm:text-xl md:text-2xl text-white/80 leading-relaxed font-sans max-w-md mx-auto lg:mx-0">
                Crafting visually stunning strategies that connect with your audience on an emotional level.
              </p>
            </div>
            <div className="relative lg:col-span-3 w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                <source src={brandingVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        {/* Section 5: Development (Last Card - Relative to allow unstacking) */}
        <section className="bg-primary text-surface grid place-content-center min-h-[100dvh] relative z-50 rounded-t-3xl overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.2)]">
          <div className="w-full max-w-[90rem] mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center py-20 lg:py-0">
            <div className="order-2 lg:order-1 relative lg:col-span-3 w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-90">
                <source src={devVideo} type="video/mp4" />
              </video>
            </div>
            <div className="order-1 lg:order-2 lg:col-span-2 flex flex-col justify-center text-center lg:text-left">
              <span className="text-accent-rose font-bold tracking-widest uppercase mb-4 block text-sm">04. Service</span>
              <h2 className="text-4xl sm:text-6xl md:text-8xl font-serif mb-4 lg:mb-8 text-white">Development</h2>
              <p className="text-base sm:text-xl md:text-2xl text-white/70 leading-relaxed font-sans max-w-md mx-auto lg:mx-0">
                Bringing your vision to life with clean, scalable code. From complex backends to pixel-perfect frontends.
              </p>
            </div>
          </div>
        </section>
      </div>

    </main>
  )
}

export default Services
