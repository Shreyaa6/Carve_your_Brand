import { motion } from 'framer-motion'
import TextAnimation from '../components/ui/scroll-text'
import sgii from '../assets/sgii.jpg'
import kid from '../assets/kid.png'
import mim from '../assets/mim.png'

const testimonials = [
    {
        quote: "Working with carveyourbrand was a genuinely collaborative experience. They didn’t just focus on creating a digital presence; they invested time in understanding the scale, compliance needs, and operational realities of our agriculture business. The outcome reflects our credibility, product strength, and multi-state operations in a way that aligns with how we work on the ground.",
        author: "Sri Gangotri Industries",
        role: "CEO — Agriculture & Government Supply",
        image: sgii
    },
    {
        quote: "As a founder, I was looking for clarity and direction more than anything else. carveyourbrand helped us shape Mimzer into a brand that feels authentic, premium, and trustworthy from day one. They understood our competitive landscape and built an e-commerce experience that allows us to grow with confidence rather than rush into scale.",
        author: "Mimzer",
        role: "CEO — D2C E‑commerce Tea Brand",
        image: mim
    },
    {
        quote: "Building a quick commerce platform requires more than speed—it requires thoughtful product decisions. carveyourbrand approached Kiddo as a complete ecosystem, carefully designing both the consumer and rider experiences. Their attention to trust, usability, and operational flow made a real difference in how the product came together.",
        author: "Kiddo",
        role: "CEO — Quick Commerce · Baby & Mother Care",
        image: kid
    },
    {
        quote: "For Pulse, we needed a partner who understood both journalism and technology. carveyourbrand delivered a platform that gives us full control over content, subscriptions, and analytics while keeping the reader experience clean and focused. Their work has helped us confidently transition into a digital‑first news operation.",
        author: "Pulse",
        role: "CEO — Subscription‑Based News Platform",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=200&auto=format&fit=crop"
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
