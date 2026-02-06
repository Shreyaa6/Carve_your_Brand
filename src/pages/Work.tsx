import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import TextAnimation from '../components/ui/scroll-text'

const projects = [
    {
        id: "lumina",
        title: "Lumina",
        category: "E-Commerce Experience",
        year: "2024",
        color: "#E8E6E1"
    },
    {
        id: "apex-finance",
        title: "Apex Finance",
        category: "FinTech Platform",
        year: "2023",
        color: "#1A1A1A"
    },
    {
        id: "vantage",
        title: "Vantage",
        category: "Real Estate Brand",
        year: "2023",
        color: "#D8CFBC"
    },
    {
        id: "nexus",
        title: "Nexus",
        category: "AI Technology",
        year: "2024",
        color: "#565449"
    }
]

const Work = () => {
    return (
        <div className="min-h-screen bg-background pt-40 pb-20">
            <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-32">
                    <TextAnimation
                        text="Portfolio"
                        classname="text-accent-olive font-bold tracking-widest uppercase mb-4 block text-xs"
                    />
                    <TextAnimation
                        text="Our Work"
                        as="h1"
                        classname="text-6xl md:text-9xl font-serif text-primary mb-12"
                        letterAnime={true}
                    />
                    <TextAnimation
                        text="A showcase of digital craftsmanship. We take pride in building things that last."
                        as="p"
                        classname="text-xl md:text-2xl text-primary/70 max-w-3xl font-sans leading-relaxed"
                        lineAnime={true}
                    />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <Link to={`/case-studies/${project.id}`} key={index}>
                            <motion.div
                                className="group cursor-pointer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div
                                    className="aspect-[4/3] w-full bg-surface mb-6 relative overflow-hidden"
                                    style={{ backgroundColor: project.color }}
                                >
                                    {/* Placeholder visual pattern */}
                                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>
                                    <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                                        <span className="text-[8rem] font-serif text-primary/5 font-italic">{index + 1}</span>
                                    </div>
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                                </div>
                                <div className="flex justify-between items-baseline border-b border-primary/10 pb-4">
                                    <h3 className="text-3xl font-serif text-primary group-hover:text-accent-olive transition-colors">{project.title}</h3>
                                    <span className="text-sm font-mono text-primary/50">{project.year}</span>
                                </div>
                                <p className="text-primary/60 mt-2">{project.category}</p>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Work
