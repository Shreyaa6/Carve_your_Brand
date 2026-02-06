import { motion } from 'framer-motion'
import TextAnimation from '../components/ui/scroll-text'

const services = [
    {
        title: "Digital Product Design",
        description: "We craft intuitive and beautiful interfaces that users love. From complex dashboards to consumer mobile apps, we focus on clarity, usability, and emotion.",
        tags: ["UI/UX", "Design Systems", "Prototyping", "User Research"]
    },
    {
        title: "Web & Mobile Engineering",
        description: "Building robust, scalable applications using cutting-edge technologies. We prioritize performance, security, and maintainability in every line of code.",
        tags: ["React / Next.js", "React Native", "TypeScript", "Node.js"]
    },
    {
        title: "AI & Machine Learning",
        description: "Integrating intelligence into your products. Whether it's predictive analytics, natural language processing, or generative AI, we help you leverage the power of data.",
        tags: ["LLM Integration", "Predictive Models", "Computer Vision", "Data Pipelines"]
    },
    {
        title: "Brand Strategy & Identity",
        description: "Defining who you are and why you matter. We build cohesive brand systems that communicate your unique value proposition across all touchpoints.",
        tags: ["Logo Design", "Visual Identity", "Tone of Voice", "Brand Guidelines"]
    },
    {
        title: "Motion & Interaction",
        description: "Bringing your digital presence to life. We use animation to guide, inform, and delight users, making every interaction feel responsive and natural.",
        tags: ["WebGL", "Three.js", "Framer Motion", "Micro-interactions"]
    }
]

const Services = () => {
    return (
        <div className="min-h-screen bg-background pt-40 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-32">
                    <TextAnimation
                        text="Our Expertise"
                        classname="text-accent-olive font-bold tracking-widest uppercase mb-4 block text-xs"
                    />
                    <TextAnimation
                        text="Services"
                        as="h1"
                        classname="text-6xl md:text-9xl font-serif text-primary mb-12"
                        letterAnime={true}
                    />
                    <TextAnimation
                        text="A full-cycle digital agency. We partner with you from the initial spark of an idea to the final polish of a global launch."
                        as="p"
                        classname="text-xl md:text-2xl text-primary/70 max-w-3xl font-sans leading-relaxed"
                        lineAnime={true}
                    />
                </div>

                {/* Services List */}
                <div className="space-y-px bg-primary/10 border-b border-primary/10">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-background py-16 group border-t border-primary/10"
                        >
                            <div className="grid md:grid-cols-12 gap-8 items-start">
                                <div className="md:col-span-1 text-primary/20 font-mono text-xl">
                                    0{index + 1}
                                </div>
                                <div className="md:col-span-5">
                                    <h3 className="text-3xl md:text-4xl font-serif text-primary group-hover:text-accent-olive transition-colors mb-4">{service.title}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {service.tags.map(tag => (
                                            <span key={tag} className="text-xs font-bold uppercase tracking-widest text-primary/40 border border-primary/10 px-2 py-1 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="md:col-span-6">
                                    <p className="text-lg text-primary/70 leading-relaxed max-w-xl">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer CTA area */}
                <div className="mt-40 border-t border-primary/10 pt-20 text-center">
                    <TextAnimation
                        text="Ready to start?"
                        as="h3"
                        classname="text-4xl font-serif text-primary mb-6"
                    />
                    <a href="/#contact" className="inline-block bg-primary text-background px-8 py-4 rounded-full font-serif text-lg hover:bg-primary/90 transition-colors">
                        Get text in touch
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Services
