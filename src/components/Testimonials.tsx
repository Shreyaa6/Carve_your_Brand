import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import TextAnimation from './ui/scroll-text'
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
