import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import TextAnimation from './ui/scroll-text'

const testimonials = [
    {
        quote: "Carve Your Brand didn't just redesign our website; they reimagined our entire digital identity. The result is nothing short of breathtaking.",
        author: "Sarah Jenkins",
        role: "CMO, Lumina Lighting",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    },
    {
        quote: "The attention to detail is obsessive in the best possible way. Every animation, every pixel serves a purpose. A true partner in growth.",
        author: "David Chen",
        role: "Founder, Apex Finance",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop"
    },
    {
        quote: "They managed to capture the essence of our luxury real estate brand and translate it into a digital experience that feels as premium as our properties.",
        author: "Elena Rodriguez",
        role: "Director, Vantage",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
    },
    {
        quote: "Working with this team was seamless. They understood our vision for AI humanization and delivered a brand language that is both tech-forward and warm.",
        author: "James Wilson",
        role: "CEO, Nexus AI",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    {
        quote: "From concept to launch, the process was transparent and collaborative. The final product exceeded our expectations in every metric.",
        author: "Priya Patel",
        role: "Founder, Mimzer",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=200&auto=format&fit=crop"
    }
]

const Testimonials = () => {
    return (
        <section className="py-32 bg-background relative overflow-hidden">
            {/* Background Element */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-surface/30 -skew-x-12 transform origin-top-right z-0 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-20 text-center">
                    <TextAnimation
                        text="Client Stories"
                        classname="text-accent-olive font-bold tracking-widest uppercase mb-4 block text-xs"
                    />
                    <TextAnimation
                        text="Don't just take our word for it."
                        as="h2"
                        classname="text-4xl md:text-6xl font-serif text-primary"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.slice(0, 3).map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-primary/5 hover:border-primary/20 transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full overflow-hidden border border-primary/10">
                                    <img src={item.image} alt={item.author} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h4 className="font-serif text-lg text-primary">{item.author}</h4>
                                    <p className="text-xs uppercase tracking-wider text-primary/50">{item.role}</p>
                                </div>
                            </div>

                            <p className="text-primary/70 leading-relaxed italic font-sans">
                                "{item.quote}"
                            </p>
                        </motion.div>
                    ))}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-primary text-background p-8 rounded-2xl flex flex-col justify-center items-center text-center md:col-span-2 lg:col-span-3 xl:col-span-1"
                    >
                        <h3 className="text-2xl font-serif mb-4 italic">More success stories</h3>
                        <p className="text-white/70 mb-8 max-w-sm">
                            Read how we've helped other visionary brands define their digital legacy.
                        </p>
                        <Link to="/testimonials" className="inline-block border border-white/20 text-white px-8 py-3 rounded-full hover:bg-white hover:text-primary transition-all duration-300 uppercase tracking-widest text-xs font-bold">
                            View All Stories
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
