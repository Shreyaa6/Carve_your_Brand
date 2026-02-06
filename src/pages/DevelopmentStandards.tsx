import { motion } from 'framer-motion'
import TextAnimation from '../components/ui/scroll-text'

const DevelopmentStandards = () => {
    // Slug mapping for SimpleIcons
    const icons = {
        web: [
            { name: "React", slug: "react" },
            { name: "Next.js", slug: "nextdotjs" },
            { name: "TypeScript", slug: "typescript" },
            { name: "Tailwind", slug: "tailwindcss" },
            { name: "Vite", slug: "vite" },
            { name: "Node.js", slug: "nodedotjs" },
            { name: "PostgreSQL", slug: "postgresql" },
            { name: "Three.js", slug: "threedotjs" }
        ],
        mobile: [
            { name: "React Native", slug: "react" },
            { name: "Expo", slug: "expo" },
            { name: "Swift", slug: "swift" },
            { name: "Kotlin", slug: "kotlin" },
            { name: "Flutter", slug: "flutter" },
            { name: "Android", slug: "android" },
            { name: "iOS", slug: "apple" }
        ],
        ai: [
            { name: "Python", slug: "python" },
            { name: "TensorFlow", slug: "tensorflow" },
            { name: "PyTorch", slug: "pytorch" },
            { name: "OpenAI", slug: "openai" },
            { name: "LangChain", slug: "langchain" },
            { name: "Anaconda", slug: "anaconda" }
        ],
        design: [
            { name: "Figma", slug: "figma" },
            { name: "Blender", slug: "blender" },
            { name: "Adobe AE", slug: "adobeaftereffects" },
            { name: "Rive", slug: "rive" }
        ],
        devops: [
            { name: "Git", slug: "git" },
            { name: "Docker", slug: "docker" },
            { name: "Kubernetes", slug: "kubernetes" },
            { name: "AWS", slug: "amazonwebservices" },
            { name: "Vercel", slug: "vercel" },
            { name: "Linux", slug: "linux" }
        ]
    }

    // Using the 'Olive' color for icons: 565449
    const iconColor = "565449"

    return (
        <div className="min-h-screen bg-background pt-40 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-32">
                    <TextAnimation
                        text="Engineering"
                        classname="text-accent-olive font-bold tracking-widest uppercase mb-4 block text-xs"
                    />
                    <TextAnimation
                        text="Code as Craft"
                        as="h1"
                        classname="text-6xl md:text-9xl font-serif text-primary mb-12"
                        letterAnime={true}
                    />
                    <TextAnimation
                        text="Our codebase is our studio. We maintain high standards not for their own sake, but because quality code enables exceptional experiences."
                        as="p"
                        classname="text-xl md:text-2xl text-primary/70 max-w-3xl font-sans leading-relaxed"
                        lineAnime={true}
                    />
                </div>

                {/* Tech Stack Interactive */}
                <section className="mb-40">
                    <div className="border-t border-primary/10 pt-12 mb-16">
                        <h2 className="text-3xl font-serif text-primary">The Stack</h2>
                    </div>

                    <div className="space-y-20">
                        {Object.entries(icons).map(([category, items]) => (
                            <div key={category}>
                                <span className="block text-xs uppercase tracking-widest text-accent-olive mb-8 border-b border-primary/5 pb-2 inline-block">
                                    {category === 'ai' ? 'AI & ML' : category.charAt(0).toUpperCase() + category.slice(1)}
                                </span>
                                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8">
                                    {items.map((tech, i) => (
                                        <motion.div
                                            key={tech.slug + i}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: i * 0.05 }}
                                            className="flex flex-col items-center gap-4 group"
                                        >
                                            <div className="w-16 h-16 rounded-2xl bg-surface/30 border border-primary/10 flex items-center justify-center group-hover:bg-primary/5 group-hover:border-accent-olive/30 transition-all duration-300 shadow-sm group-hover:-translate-y-1">
                                                <img
                                                    src={`https://cdn.simpleicons.org/${tech.slug}/${iconColor}`}
                                                    alt={tech.name}
                                                    className="w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity"
                                                    onError={(e) => {
                                                        // Fallback if icon fetch fails
                                                        (e.target as HTMLImageElement).style.display = 'none';
                                                    }}
                                                />
                                                {/* Fallback text if image hidden (simplified via CSS if needed, but here structure implies image presence) */}
                                            </div>
                                            <span className="text-xs font-mono text-primary/60 group-hover:text-primary transition-colors text-center w-full truncate px-2">
                                                {tech.name}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Principles Grid */}
                <section className="mb-40">
                    <div className="border-t border-primary/10 pt-12 mb-16">
                        <h2 className="text-3xl font-serif text-primary">Core Principles</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { title: "Declarative First", desc: "We prefer declarative over imperative. Tell the UI what to be, not how to change." },
                            { title: "Component Driven", desc: "Atomic design principles. Build small, testable, and reusable blocks." },
                            { title: "Performance Baked In", desc: "Animation should be 60fps. Core Vitals are not optional metrics." },
                            { title: "Type Safety", desc: "TypeScript ends the guessing game. Interfaces contract our data flow." },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="bg-surface/20 p-10 rounded-lg border border-primary/5 hover:border-primary/20 transition-all group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <span className="text-5xl font-mono text-primary/10 mb-6 block group-hover:text-accent-olive/20 transition-colors">0{i + 1}</span>
                                <h3 className="text-2xl font-serif text-primary mb-4">{item.title}</h3>
                                <p className="text-primary/70 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Code Snippet */}
                <section>
                    <div className="bg-[#11120D] text-gray-300 p-8 md:p-12 rounded-xl font-mono text-sm md:text-base overflow-x-auto shadow-2xl relative">
                        <div className="absolute top-6 right-6 flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <pre className="mt-8">
                            {`// The art of simplicity
const animateValue = (val: number) => {
  return spring(val, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
};`}
                        </pre>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default DevelopmentStandards
