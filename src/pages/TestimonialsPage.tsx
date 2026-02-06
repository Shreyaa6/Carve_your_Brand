import { motion } from 'framer-motion'
import TextAnimation from '../components/ui/scroll-text'

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
    },
    {
        quote: "A masterclass in modern web design. They pushed our boundaries and challenged us to be better. The ROI has been immediate.",
        author: "Marcus Thorne",
        role: "VP Marketing, SolaTech",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop"
    }
]

const TestimonialsPage = () => {
    return (
        <div className="min-h-screen bg-background pt-40 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                <div className="text-center max-w-4xl mx-auto">
                    <TextAnimation
                        text="Testimonials"
                        classname="text-accent-olive font-bold tracking-widest uppercase mb-4 block text-xs"
                    />
                    <TextAnimation
                        text="Words from our partners."
                        as="h1"
                        classname="text-5xl md:text-8xl font-serif text-primary mb-12"
                        letterAnime={true}
                    />
                    <TextAnimation
                        text="The true measure of our success is the impact we create for our clients. Here's what they have to say about the journey."
                        as="p"
                        classname="text-xl md:text-2xl text-primary/70 max-w-3xl mx-auto font-sans leading-relaxed"
                        lineAnime={true}
                    />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="masonry-grid grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="bg-surface/30 p-10 rounded-2xl break-inside-avoid mb-8 hover:bg-surface/60 transition-colors duration-500 border border-primary/5 hover:border-primary/10"
                        >
                            <div className="text-6xl text-accent-rose font-serif opacity-30 mb-6">"</div>
                            <p className="text-2xl font-serif text-primary mb-8 leading-snug">
                                {item.quote}
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full overflow-hidden border border-primary/10">
                                    <img src={item.image} alt={item.author} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-primary">{item.author}</h4>
                                    <p className="text-xs uppercase tracking-widest text-primary/50">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="mt-32 text-center">
                <h2 className="text-3xl font-serif text-primary mb-8">Ready to write your success story?</h2>
                <a href="/#contact" className="inline-block bg-primary text-background px-10 py-4 rounded-full font-serif text-lg hover:bg-primary/90 transition-all duration-300">
                    Partner With Us
                </a>
            </div>

        </div>
    )
}

export default TestimonialsPage
