import { motion } from 'framer-motion'
import TextAnimation from '../components/ui/scroll-text'

const DevelopmentStandards = () => {
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

                {/* Tech Stack Interactive */}
                {/* Tech Stack Interactive */}
                <section className="mb-40">
                    <div className="border-t border-primary/10 pt-12 mb-16">
                        <h2 className="text-3xl font-serif text-primary">The Stack</h2>
                    </div>

                    <div className="space-y-16">
                        {/* Web Foundation */}
                        <div>
                            <span className="block text-xs uppercase tracking-widest text-accent-olive mb-6">Web & Fundamental</span>
                            <div className="flex flex-wrap gap-4">
                                {[
                                    "React 19", "Next.js 15", "TypeScript", "TailwindCSS", "Framer Motion", "Vite", "Zustand", "Node.js", "Bun", "PostgreSQL"
                                ].map((tech, i) => (
                                    <motion.div
                                        key={tech}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: i * 0.05 }}
                                        whileHover={{ scale: 1.05, backgroundColor: "#11120D", color: "#FFFBF4" }}
                                        className="px-6 py-3 rounded-full border border-primary/20 text-primary font-mono text-sm cursor-default transition-colors bg-background"
                                    >
                                        {tech}
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Mobile & Cross Platform */}
                        <div>
                            <span className="block text-xs uppercase tracking-widest text-accent-olive mb-6">Mobile & App</span>
                            <div className="flex flex-wrap gap-4">
                                {[
                                    "React Native", "Expo", "SwiftUI", "Kotlin", "Flutter", "iOS", "Android", "PWA"
                                ].map((tech, i) => (
                                    <motion.div
                                        key={tech}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: i * 0.05 }}
                                        whileHover={{ scale: 1.05, backgroundColor: "#11120D", color: "#FFFBF4" }}
                                        className="px-6 py-3 rounded-full border border-primary/20 text-primary font-mono text-sm cursor-default transition-colors bg-background"
                                    >
                                        {tech}
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* AI & ML */}
                        <div>
                            <span className="block text-xs uppercase tracking-widest text-accent-olive mb-6">AI & Machine Learning</span>
                            <div className="flex flex-wrap gap-4">
                                {[
                                    "Python", "TensorFlow", "PyTorch", "OpenAI API", "Hugging Face", "LangChain", "Pinecone", "CUDA", "FastAPI"
                                ].map((tech, i) => (
                                    <motion.div
                                        key={tech}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: i * 0.05 }}
                                        whileHover={{ scale: 1.05, backgroundColor: "#11120D", color: "#FFFBF4" }}
                                        className="px-6 py-3 rounded-full border border-primary/20 text-primary font-mono text-sm cursor-default transition-colors bg-background"
                                    >
                                        {tech}
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Design & Creative */}
                        <div>
                            <span className="block text-xs uppercase tracking-widest text-accent-olive mb-6">Design & Creative</span>
                            <div className="flex flex-wrap gap-4">
                                {[
                                    "Figma", "Three.js", "R3F", "Blender", "Spline", "GLSL", "After Effects", "Rive", "WebGL"
                                ].map((tech, i) => (
                                    <motion.div
                                        key={tech}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: i * 0.05 }}
                                        whileHover={{ scale: 1.05, backgroundColor: "#11120D", color: "#FFFBF4" }}
                                        className="px-6 py-3 rounded-full border border-primary/20 text-primary font-mono text-sm cursor-default transition-colors bg-background"
                                    >
                                        {tech}
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* DevOps & Tools */}
                        <div>
                            <span className="block text-xs uppercase tracking-widest text-accent-olive mb-6">DevOps & Tools</span>
                            <div className="flex flex-wrap gap-4">
                                {[
                                    "Git", "GitHub Actions", "Docker", "Kubernetes", "AWS", "Vercel", "Turborepo", "Jest", "Playwright", "Linear"
                                ].map((tech, i) => (
                                    <motion.div
                                        key={tech}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: i * 0.05 }}
                                        whileHover={{ scale: 1.05, backgroundColor: "#11120D", color: "#FFFBF4" }}
                                        className="px-6 py-3 rounded-full border border-primary/20 text-primary font-mono text-sm cursor-default transition-colors bg-background"
                                    >
                                        {tech}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
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
};

export const Experience = () => (
  <Canvas dpr={[1, 2]}>
    <Suspense fallback={null}>
       <Model />
       <Environment preset="studio" />
    </Suspense>
  </Canvas>
);`}
                        </pre>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default DevelopmentStandards
