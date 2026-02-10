import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import TextAnimation from '../components/ui/scroll-text'
import kiddo1 from '../assets/kiddo1.mov'
import mimzerImg from '../assets/mimzer.png'
import pulseVideo from '../assets/pulse.mov'
import sgi1 from '../assets/sgi1.mov'

const projects = [
    {
        id: "sri-gangotri-industries",
        title: "Sri Gangotri Industries",
        category: "Agriculture & Agro Products",
        description: "Establishing a professional digital identity for a well-established agriculture-focused enterprise operating across 4+ Indian states, with 50+ registered products and ₹5 Crore annual revenue.",
        year: "2024",
        tags: ["Digital Strategy", "Brand Positioning", "Website Development"],
        color: "#565449",
        media: {
            type: "video",
            src: sgi1
        }
    },
    {
        id: "kiddo",
        title: "Kiddo",
        category: "Digital Platform",
        description: "A comprehensive digital platform designed to enhance user experience with innovative solutions and seamless interactions.",
        year: "2024",
        tags: ["Strategy", "UX/UI", "Development"],
        color: "#E8E6E1",
        media: {
            type: "video",
            src: kiddo1
        }
    },
    {
        id: "pulse",
        title: "Pulse",
        category: "Digital Experience",
        description: "Creating a dynamic and engaging digital experience that resonates with modern audiences through innovative design and technology.",
        year: "2024",
        tags: ["Branding", "Web Design", "Motion"],
        color: "#D8CFBC",
        media: {
            type: "video",
            src: pulseVideo
        }
    },
    {
        id: "mimzer",
        title: "Mimzer",
        category: "D2C / FMCG (Tea & Wellness)",
        description: "Launching a conversion-ready D2C e-commerce tea brand, building trust and credibility for a new brand competing in a competitive market with 4 specialty tea variants.",
        year: "2025",
        tags: ["D2C E-commerce", "Brand Positioning", "Website Development"],
        color: "#E6E6FA",
        media: {
            type: "image",
            src: mimzerImg
        }
    }
]

const CaseStudies = () => {
    return (
        <div className="min-h-screen bg-background pt-40 pb-20">
            <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-32 max-w-4xl">
                    <TextAnimation
                        text="Curated Work"
                        classname="text-accent-olive font-bold tracking-widest uppercase mb-4 block text-xs"
                        variants={{
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                        }}
                    />
                    <TextAnimation
                        text="Selected Case Studies"
                        as="h1"
                        classname="text-6xl md:text-9xl font-serif text-primary mb-12"
                        letterAnime={true}
                    />
                    <TextAnimation
                        text="We believe in work that speaks for itself. Here is a selection of our most recent partnerships, where strategy met execution to define new standards."
                        as="p"
                        classname="text-xl md:text-2xl text-primary/70 font-sans leading-relaxed max-w-2xl"
                        lineAnime={true}
                    />
                </div>

                {/* Projects List */}
                <div className="space-y-40">
                    {projects.map((project, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>
                            {/* Visual Side */}
                            <motion.div
                                className="w-full lg:w-3/5 aspect-[16/9] lg:aspect-[3/2] bg-surface relative overflow-hidden group"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: true, margin: "-100px" }}
                            >
                                <Link to={`/case-studies/${project.id}`}>
                                    <div
                                        className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 bg-cover bg-center"
                                        style={{ backgroundColor: project.color }}
                                    >
                                        {project.media?.type === "video" ? (
                                            <video
                                                src={project.media.src}
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                className="w-full h-full object-cover"
                                            />
                                        ) : project.media?.type === "image" ? (
                                            <img
                                                src={project.media.src}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <>
                                                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <span className="text-[10rem] font-serif text-primary/5 font-italic">{index + 1}</span>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </Link>
                            </motion.div>

                            {/* Content Side */}
                            <div className="w-full lg:w-2/5 flex flex-col justify-center">
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <span className="text-xs font-mono border border-primary/20 px-3 py-1 rounded-full mb-6 inline-block text-primary/60">
                                        {project.year} — {project.category}
                                    </span>
                                    <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
                                        {project.title}
                                    </h2>
                                    <p className="text-lg text-primary/70 mb-8 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-12">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs font-bold uppercase tracking-widest text-primary/40">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <Link to={`/case-studies/${project.id}`} className="text-primary border-b border-primary pb-1 self-start font-serif italic text-lg hover:text-accent-olive hover:border-accent-olive transition-colors">
                                        View Case Study
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer CTA area */}
                <div className="mt-40 border-t border-primary/10 pt-20 text-center">
                    <TextAnimation
                        text="Have a vision?"
                        as="h3"
                        classname="text-4xl font-serif text-primary mb-6"
                    />
                    <a href="https://calendly.com/carveyourbrand-agency/30min" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-background px-8 py-4 rounded-full font-serif text-lg hover:bg-primary/90 transition-colors">
                        Let's build it together
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CaseStudies
