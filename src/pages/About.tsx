import { motion } from 'framer-motion'
import heroVideo from '../assets/branding.mp4'
import TextAnimation from '../components/ui/scroll-text'

const About = () => {
    return (
        <div className="min-h-screen bg-background pt-40 pb-20">
            {/* Intro */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
                <div className="text-center max-w-5xl mx-auto">
                    <TextAnimation
                        text="Our Story"
                        classname="text-accent-olive font-bold tracking-widest uppercase mb-4 block text-xs"
                        direction="down"
                    />
                    <TextAnimation
                        text="Carving digital masterpieces."
                        as="h1"
                        classname="text-5xl md:text-8xl font-serif text-primary mb-12"
                        letterAnime={true}
                    />
                    <TextAnimation
                        text="We are a boutique digital agency obsessed with quality. We don't just build websites; we craft digital identities that stand the test of time."
                        as="p"
                        classname="text-xl md:text-2xl text-primary/70 max-w-3xl mx-auto font-sans leading-relaxed"
                        lineAnime={true}
                    />
                </div>
            </div>

            {/* Video / Visual */}
            <motion.div
                className="w-full h-[60vh] md:h-[80vh] bg-black/5 relative overflow-hidden mb-32"
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
            >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-80"
                >
                    <source src={heroVideo} type="video/mp4" />
                </video>
            </motion.div>

            {/* Philosophy */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-20 mb-32">
                <div>
                    <TextAnimation
                        text="The Philosophy"
                        as="h3"
                        classname="text-4xl font-serif text-primary mb-8"
                    />
                    <motion.p
                        className="text-primary/70 mb-6 leading-relaxed text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        In a world of noise, clarity is power. Our design philosophy is rooted in subtraction—removing the unnecessary to reveal the essential. We believe that true luxury lies in simplicity, performance, and attention to detail.
                    </motion.p>
                    <motion.p
                        className="text-primary/70 leading-relaxed text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Every pixel we place and every line of code we write is intentional. We partner with brands that share our vision for excellence.
                    </motion.p>
                </div>
                <div>
                    <TextAnimation
                        text="The Partners"
                        as="h3"
                        classname="text-4xl font-serif text-primary mb-8"
                    />
                    <motion.p
                        className="text-primary/70 mb-8 leading-relaxed text-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Led by visionaries who live at the intersection of design and technology.
                    </motion.p>
                    <ul className="space-y-6 pt-6 border-t border-primary/10">
                        {[
                            { name: "Shreya Narayani", role: "Co-Founder", loc: "Creative Director" },
                            { name: "Manish Kumar", role: "Co-Founder", loc: "Technical Director" },
                        ].map((item, i) => (
                            <motion.li
                                key={i}
                                className="flex justify-between items-center text-primary/80 text-lg"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + (i * 0.1) }}
                            >
                                <div className="flex flex-col">
                                    <span className="font-serif text-xl text-primary">{item.name}</span>
                                    <span className="font-sans text-sm text-primary/50">{item.role}</span>
                                </div>
                                <span className="font-serif italic text-primary/50 text-base">{item.loc}</span>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About
