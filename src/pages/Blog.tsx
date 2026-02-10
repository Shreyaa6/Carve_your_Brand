import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const blogPosts = [
    {
        id: 4,
        title: "Why Most Digital Products Fail — And It Has Nothing to Do With Code",
        excerpt: "Products rarely fail because of code. They fail because they were built without clarity.",
        date: "Feb 10, 2026",
        category: "Insights",
        image: "https://i.pinimg.com/736x/4f/6e/37/4f6e37adec5834503ecc891b47b789ff.jpg"
    },
    {
        id: 5,
        title: "From Idea to Impact: How We Design Digital Products That Scale",
        excerpt: "Scalability isn’t added later — it’s designed from day one with clarity, UX simplicity, and modular systems.",
        date: "Feb 10, 2026",
        category: "Insights",
        image: "https://i.pinimg.com/1200x/24/1e/52/241e521caa67fb5ec8a2a269f9030e39.jpg"
    },
    {
        id: 6,
        title: "Trust Is the Most Underrated Growth Strategy in Digital Products",
        excerpt: "In a world crowded with apps and promises, the products that grow are the ones users trust enough to return to.",
        date: "Feb 10, 2026",
        category: "Insights",
        image: "https://i.pinimg.com/1200x/5d/ad/e0/5dade02cc4a2fe002d57a2f72ae7b362.jpg"
    }
]

const Blog = () => {
    return (
        <div className="min-h-screen bg-background pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="text-accent-olive font-bold tracking-widest uppercase mb-4 block text-xs">Our Thoughts</span>
                    <h1 className="text-5xl md:text-7xl font-serif text-primary mb-6">Values & <span className="italic text-accent-stone">Insights</span></h1>
                    <p className="text-xl text-primary/60 max-w-2xl mx-auto font-sans">
                        Exploring the intersection of design, technology, and human experience.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {blogPosts.map((post, i) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="group cursor-pointer"
                        >
                            <Link to={`/blog/${post.id}`}>
                                <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-6 shadow-sm">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-primary">
                                        {post.category}
                                    </div>
                                </div>
                            </Link>
                            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-primary/40 mb-3">
                                <span>{post.date}</span>
                            </div>
                            <Link to={`/blog/${post.id}`}>
                                <h3 className="text-2xl font-serif text-primary mb-3 group-hover:text-accent-olive transition-colors">
                                    {post.title}
                                </h3>
                            </Link>
                            <p className="text-primary/70 leading-relaxed font-sans text-sm">
                                {post.excerpt}
                            </p>
                            <Link to={`/blog/${post.id}`} className="mt-6 flex items-center text-primary font-medium text-sm group-hover:underline underline-offset-4">
                                Read Article <span className="ml-2">→</span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blog
