import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import TextAnimation from '../components/ui/scroll-text'

const caseStudyData = {
    'lumina': {
        title: "Lumina",
        category: "E-Commerce Experience",
        year: "2024",
        color: "#E8E6E1",
        content: `
            <h2 class="text-3xl font-serif mb-6 text-primary">The Challenge</h2>
            <p class="mb-8 text-lg text-primary/70 leading-relaxed">
                Lumina, a high-end lighting manufacturer, needed a digital presence that matched the elegance of their physical products. Their existing site was functional but lacked emotion. They wanted an immersive "digital flagship" that would allow customers to experience the quality of light through a screen.
            </p>
            <h2 class="text-3xl font-serif mb-6 text-primary">Our Approach</h2>
            <p class="mb-8 text-lg text-primary/70 leading-relaxed">
                We focused on the interplay of light and shadow. Using WebGL, we created interactive product visualizations that respond to user cursor movement, mimicking the effect of moving a light source. The navigation was designed to be fluid and non-intrusive, prioritizing the visual content.
            </p>
            <h2 class="text-3xl font-serif mb-6 text-primary">The Result</h2>
            <p class="mb-8 text-lg text-primary/70 leading-relaxed">
                The new platform led to a 40% increase in session duration and a 25% increase in conversion rate. More importantly, it established Lumina as a forward-thinking design leader in their industry.
            </p>
        `,
        images: [
            "https://images.unsplash.com/photo-1513506003011-3b03c8b8bf53?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=2000&auto=format&fit=crop"
        ]
    },
    'apex-finance': {
        title: "Apex Finance",
        category: "FinTech Platform",
        year: "2023",
        color: "#1A1A1A",
        content: `
            <h2 class="text-3xl font-serif mb-6 text-primary">The Challenge</h2>
            <p class="mb-8 text-lg text-primary/70 leading-relaxed">
                Financial dashboards are notoriously cluttered and difficult to navigate. Apex Finance wanted to disrupt the market with a trading platform that was powerful enough for professionals but intuitive enough for new investors.
            </p>
            <h2 class="text-3xl font-serif mb-6 text-primary">Our Approach</h2>
            <p class="mb-8 text-lg text-primary/70 leading-relaxed">
                We adopted a "progressive disclosure" strategy. Information is layered, with the most critical data points visible at a glance, and deeper analytics available on demand. We used a strict grid system and a restrained color palette to reduce cognitive load.
            </p>
             <h2 class="text-3xl font-serif mb-6 text-primary">The Result</h2>
            <p class="mb-8 text-lg text-primary/70 leading-relaxed">
               User testing showed a 50% reduction in time-to-execute for common trade actions. The platform has since onboarded over 100,000 active users.
            </p>
        `,
        images: [
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=2000&auto=format&fit=crop"
        ]
    },
    // Fallback for others
    'default': {
        title: "Project Detail",
        category: "Digital Experience",
        year: "2024",
        color: "#D8CFBC",
        content: `
            <p class="mb-8 text-lg text-primary/70 leading-relaxed">
                Detailed case study content coming soon. This represents a placeholder for a deep dive into our strategic process, design exploration, and technical implementation.
            </p>
        `,
        images: [
            "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
        ]
    }
}

const CaseStudyDetail = () => {
    const { id } = useParams()
    const data = caseStudyData[id as keyof typeof caseStudyData] || caseStudyData['default']

    return (
        <div className="min-h-screen bg-background pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <Link to="/case-studies" className="inline-flex items-center text-accent-olive font-bold uppercase tracking-widest text-xs mb-12 hover:underline">
                    ← Back to Work
                </Link>

                <div className="mb-20">
                    <TextAnimation
                        text={`${data.category} — ${data.year}`}
                        classname="text-accent-olive font-bold tracking-widest uppercase mb-4 block text-xs"
                    />
                    <TextAnimation
                        text={data.title || "Untitled Project"}
                        as="h1"
                        classname="text-6xl md:text-8xl font-serif text-primary mb-8"
                        letterAnime={true}
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full aspect-[21/9] bg-surface rounded-lg overflow-hidden mb-20"
                >
                    {/* Hero Image */}
                    {data.images && data.images[0] && (
                        <img src={data.images[0]} alt="Hero" className="w-full h-full object-cover" />
                    )}
                </motion.div>

                <div className="grid md:grid-cols-12 gap-12">
                    <div className="md:col-span-8 md:col-start-3 content-block">
                        <div dangerouslySetInnerHTML={{ __html: data.content }} />
                    </div>
                </div>

                <div className="mt-20 grid md:grid-cols-2 gap-8">
                    {data.images && data.images.slice(1).map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="aspect-video bg-surface rounded-lg overflow-hidden"
                        >
                            <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default CaseStudyDetail
