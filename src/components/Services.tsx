import { ReactLenis } from 'lenis/react'


const Services = () => {
  return (
    <ReactLenis root>
      <main className="bg-background">
        <div className="wrapper relative">

          {/* Section 1: Intro / UX & UI */}
          <section className="text-primary h-screen w-full bg-background grid place-content-center sticky top-0 border-b border-primary/5">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#2A25200a_1px,transparent_1px),linear-gradient(to_bottom,#2A25200a_1px,transparent_1px)] bg-size-[54px_54px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <div className="text-center relative z-10 px-4">
              <div className="inline-block border border-accent-stone/30 px-6 py-2 rounded-full mb-8 bg-white/50 backdrop-blur-sm">
                <span className="text-xs font-bold uppercase tracking-widest text-accent-rose">Our Expertise</span>
              </div>
              <h1 className="text-[10vw] lg:text-[8vw] font-serif font-medium tracking-tighter leading-[0.85] mb-8">
                We build digital <span className="italic text-accent-rose">legacies.</span>
              </h1>
              <p className="text-xl md:text-2xl font-sans text-primary/60 max-w-2xl mx-auto">
                Scroll to explore our crafts 👇
              </p>
            </div>
          </section>

          {/* Section 2: UX & UI Card */}
          <section className="bg-primary text-surface grid place-content-center h-screen sticky top-0 rounded-t-3xl overflow-hidden shadow-2xl">
            <div className="absolute bottom-0 left-0 right-0 top-0 opacity-10 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-size-[40px_40px]"></div>
            <div className="max-w-6xl mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-accent-rose font-bold tracking-widest uppercase mb-4 block">01. Service</span>
                <h2 className="text-6xl md:text-8xl font-serif mb-8 text-white">UX & UI Design</h2>
                <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-sans">
                  Designing interfaces that are intuitive, efficient, and enjoyable to use. We craft systems, not just screens.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1586717791821-3f44a5638d0f?q=80&w=1000&auto=format&fit=crop"
                  alt="UX Design"
                  className="rounded-lg shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 opacity-90"
                />
              </div>
            </div>
          </section>

          {/* Section 3: Web & Mobile App Card */}
          <section className="bg-surface text-primary grid place-content-center h-screen sticky top-0 rounded-t-3xl overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
            <div className="absolute bottom-0 left-0 right-0 top-0 opacity-5 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-size-[40px_40px]"></div>
            <div className="max-w-6xl mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <img
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1000&auto=format&fit=crop"
                  alt="Mobile App"
                  className="rounded-lg shadow-2xl -rotate-3 hover:rotate-0 transition-transform duration-500"
                />
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-primary/50 font-bold tracking-widest uppercase mb-4 block">02. Service</span>
                <h2 className="text-6xl md:text-8xl font-serif mb-8 text-primary">Web & Mobile</h2>
                <p className="text-xl md:text-2xl text-primary/70 leading-relaxed font-sans">
                  Transforming ideas into exceptional cross-platform experiences. From native iOS to responsive web apps.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Design & Creative Card */}
          <section className="bg-accent-rose text-white grid place-content-center h-screen sticky top-0 rounded-t-3xl overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.15)]">
            <div className="max-w-6xl mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-white/60 font-bold tracking-widest uppercase mb-4 block">03. Service</span>
                <h2 className="text-6xl md:text-8xl font-serif mb-8 text-white">Brand & Creative</h2>
                <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-sans">
                  Crafting visually stunning strategies that connect with your audience on an emotional level.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?w=500&auto=format&fit=crop" className="rounded-lg translate-y-8" alt="Brand 1" />
                <img src="https://images.unsplash.com/photo-1600508774634-4e11d34730e2?w=500&auto=format&fit=crop" className="rounded-lg -translate-y-8" alt="Brand 2" />
              </div>
            </div>
          </section>

          {/* Section 5: Development (Converted to Sticky Card) */}
          <section className="bg-primary text-surface grid place-content-center h-screen sticky top-0 rounded-t-3xl overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.2)]">
            <div className="absolute bottom-0 left-0 right-0 top-0 opacity-20 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-size-[40px_40px]"></div>
            <div className="max-w-6xl mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <img
                  src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=1000&auto=format&fit=crop"
                  alt="Code"
                  className="rounded-lg shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 opacity-90"
                />
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-accent-rose font-bold tracking-widest uppercase mb-4 block">04. Service</span>
                <h2 className="text-6xl md:text-8xl font-serif mb-8 text-white">Development</h2>
                <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-sans">
                  Bringing your vision to life with clean, scalable code. From complex backends to pixel-perfect frontends.
                </p>
              </div>
            </div>
          </section>
        </div>

      </main>
    </ReactLenis>
  )
}

export default Services
