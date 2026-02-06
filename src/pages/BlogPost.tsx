import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import TextAnimation from '../components/ui/scroll-text'

const blogData = {
    '1': {
        title: "The Future of Digital Branding",
        subtitle: "How AI and immersive technologies are reshaping connection.",
        date: "Feb 12, 2026",
        category: "Insights",
        image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop",
        content: `
            <p class="text-xl font-serif leading-relaxed mb-8 text-primary">
                The static logo is dead. In an era of fluid interfaces and generative content, a brand's identity must be a living, breathing system.
            </p>
            <p class="mb-6 text-lg text-primary/70 leading-relaxed font-sans">
                For decades, consistency was the golden rule of branding. A logo had to look the same on a business card as it did on a billboard. But digital ecosystems are not static. They shift, adapt, and personalize.
            </p>
            <h3 class="text-2xl font-serif text-primary mt-12 mb-6">Generative Identity</h3>
             <p class="mb-6 text-lg text-primary/70 leading-relaxed font-sans">
                Imagine a brand mark that evolves based on the time of day, the user's location, or the tempo of the music they are listening to. This isn't science fiction; it's the current capability of WebGL and generative code.
            </p>
            <p class="mb-6 text-lg text-primary/70 leading-relaxed font-sans">
                We are moving from "Corporate Identity" to "Algorithmic Personality." The core DNA of the brand remains constant—typographic rules, color variables, motion behaviors—but the expression is infinite.
            </p>
        `
    },
    '2': {
        title: "Minimalism in UI Design",
        subtitle: "Why less is more when it comes to user experience.",
        date: "Jan 28, 2026",
        category: "Design",
        image: "https://images.unsplash.com/photo-1545239351-ef35f43d5143?q=80&w=1000&auto=format&fit=crop",
        content: `
            <p class="text-xl font-serif leading-relaxed mb-8 text-primary">
                Minimalism is not about the absence of elements, but the presence of focus.
            </p>
            <p class="mb-6 text-lg text-primary/70 leading-relaxed font-sans">
                Every element on a screen adds cognitive load. When we strip away the decorative, the redundant, and the noisy, we leave room for the user to think, decide, and act.
            </p>
         `
    },
    'default': {
        title: "Blog Post",
        subtitle: "Thoughts on design and technology",
        date: "2026",
        category: "General",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop",
        content: "<p>Content coming soon...</p>"
    }
}

const BlogPost = () => {
    const { id } = useParams()
    const data = blogData[id as keyof typeof blogData] || blogData['default']

    return (
        <div className="min-h-screen bg-background pt-32 pb-20">
            {/* Hero Image */}
            <div className="w-full h-[50vh] relative overflow-hidden mb-20">
                <div className="absolute inset-0 bg-black/20 z-10" />
                <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
            </div>

            <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to="/blog" className="inline-flex items-center text-accent-olive font-bold uppercase tracking-widest text-xs mb-12 hover:underline">
                    ← Back to Thoughts
                </Link>

                <div className="mb-16">
                    <TextAnimation
                        text={`${data.category} • ${data.date}`}
                        classname="text-accent-olive font-bold tracking-widest uppercase mb-4 block text-xs"
                    />
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl font-serif text-primary mb-6"
                    >
                        {data.title}
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-primary/60 font-serif italic">
                        {data.subtitle}
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    dangerouslySetInnerHTML={{ __html: data.content }}
                />
            </article>
        </div>
    )
}

export default BlogPost
