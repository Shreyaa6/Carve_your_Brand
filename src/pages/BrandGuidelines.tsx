import { motion } from 'framer-motion'
import TextAnimation from '../components/ui/scroll-text'

const BrandGuidelines = () => {
    return (
        <div className="min-h-screen bg-background pt-40 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-32">
                    <TextAnimation
                        text="Visual Identity"
                        classname="text-accent-olive font-bold tracking-widest uppercase mb-4 block text-xs"
                    />
                    <TextAnimation
                        text="Brand Guidelines"
                        as="h1"
                        classname="text-6xl md:text-9xl font-serif text-primary mb-12"
                        letterAnime={true}
                    />
                    <TextAnimation
                        text="The DNA of our digital presence. A system designed for coherence, elegance, and timelessness."
                        as="p"
                        classname="text-xl md:text-2xl text-primary/70 max-w-3xl font-sans leading-relaxed"
                        lineAnime={true}
                    />
                </div>

                {/* Typography Section */}
                <section className="mb-40">
                    <div className="border-t border-primary/10 pt-12 mb-16">
                        <h2 className="text-3xl font-serif text-primary">Typography</h2>
                    </div>

                    <div className="space-y-24">
                        {/* Serif */}
                        <div className="grid md:grid-cols-12 gap-8">
                            <div className="md:col-span-4">
                                <span className="block text-xs uppercase tracking-widest text-accent-olive mb-2">Primary Serif</span>
                                <h3 className="text-2xl font-sans text-primary">Playfair Display</h3>
                                <p className="mt-4 text-primary/60 text-sm leading-relaxed max-w-xs">
                                    A transitional serif typeface with high contrast and delicate hairlines. Used for headlines and moments of editorial impact.
                                </p>
                            </div>
                            <div className="md:col-span-8 overflow-hidden">
                                <motion.div
                                    className="text-[12vw] leading-none text-primary font-serif whitespace-nowrap"
                                    initial={{ x: 0 }}
                                    animate={{ x: "-20%" }}
                                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                                >
                                    Aa Bb Cc Dd Ee Ff Gg Hh
                                </motion.div>
                                <div className="mt-8 grid grid-cols-2 gap-8">
                                    <div className="text-6xl font-serif">Ag.</div>
                                    <p className="font-serif text-3xl leading-snug">
                                        "Simplicity is the ultimate sophistication."
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Sans */}
                        <div className="grid md:grid-cols-12 gap-8">
                            <div className="md:col-span-4">
                                <span className="block text-xs uppercase tracking-widest text-accent-olive mb-2">Secondary Sans</span>
                                <h3 className="text-2xl font-sans text-primary">Outfit</h3>
                                <p className="mt-4 text-primary/60 text-sm leading-relaxed max-w-xs">
                                    A geometric sans-serif that balances modern minimalism with warmth. Used for UI elements, navigation, and body copy.
                                </p>
                            </div>
                            <div className="md:col-span-8">
                                <div className="text-[8vw] leading-none text-primary font-sans font-bold mb-4">
                                    Aa Bb Cc Dd
                                </div>
                                <div className="p-8 bg-surface/30 rounded-lg">
                                    <p className="font-sans text-lg leading-relaxed text-primary/80">
                                        ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                                        abcdefghijklmnopqrstuvwxyz<br />
                                        0123456789
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Colors Section */}
                <section className="mb-40">
                    <div className="border-t border-primary/10 pt-12 mb-16">
                        <h2 className="text-3xl font-serif text-primary">Color Palette</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { name: 'Floral White', hex: '#FFFBF4', bg: 'bg-[#FFFBF4]', text: 'text-black', usage: 'Background' },
                            { name: 'Bone', hex: '#D8CFBC', bg: 'bg-[#D8CFBC]', text: 'text-black', usage: 'Surface / UI' },
                            { name: 'Olive Drab', hex: '#565449', bg: 'bg-[#565449]', text: 'text-white', usage: 'Accents' },
                            { name: 'Smoky Black', hex: '#11120D', bg: 'bg-[#11120D]', text: 'text-white', usage: 'Primary Text' },
                        ].map((color, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <div className={`aspect-[3/4] ${color.bg} rounded-lg shadow-sm mb-4 relative overflow-hidden transition-all duration-500 group-hover:-translate-y-2`}>
                                    <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <p className={`font-mono text-xs uppercase tracking-widest ${color.text} opacity-50`}>{color.usage}</p>
                                    </div>
                                </div>
                                <div className="px-1">
                                    <h3 className="font-serif text-xl text-primary">{color.name}</h3>
                                    <p className="font-mono text-xs text-primary/50 mt-1 uppercase">{color.hex}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Logo Section */}
                <section>
                    <div className="border-t border-primary/10 pt-12 mb-16">
                        <h2 className="text-3xl font-serif text-primary">Logomark</h2>
                    </div>
                    <div className="bg-primary aspect-video flex flex-col items-center justify-center rounded-2xl relative overflow-hidden">
                        {/* Abstract pattern bg */}
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-700 via-black to-black"></div>

                        <motion.h1
                            className="text-[6vw] font-serif italic text-[#FFFBF4] relative z-10"
                            initial={{ filter: "blur(20px)", opacity: 0 }}
                            whileInView={{ filter: "blur(0px)", opacity: 1 }}
                            transition={{ duration: 1.5 }}
                        >
                            Carve Your Brand.
                        </motion.h1>
                        <p className="text-[#FFFBF4]/50 font-sans tracking-[0.3em] uppercase text-sm mt-8 relative z-10">
                            Est. 2024
                        </p>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default BrandGuidelines
