import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import TextAnimation from '../components/ui/scroll-text'

const services = [
    {
        title: "Digital Product Design",
        description: "We craft intuitive and beautiful interfaces that users love. From complex dashboards to consumer mobile apps.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop", // Abstract Fluid Blue/Dark
        tags: ["UI/UX", "Design Systems", "Prototyping"]
    },
    {
        title: "Web & Mobile Engineering",
        description: "Building robust, scalable applications using cutting-edge technologies like React, React Native, and Node.js.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop", // Dark tech workspace/team
        tags: ["React / Next.js", "React Native", "TypeScript"]
    },
    {
        title: "AI & Machine Learning",
        description: "Integrating intelligence into your products. Predictive analytics, NLP, and generative AI solutions.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop", // AI Generative Dark
        tags: ["LLM Integration", "Predictive Models", "Data Pipelines"]
    },
    {
        title: "Brand Strategy",
        description: "Defining who you are. We build cohesive brand systems that communicate your unique value.",
        image: "https://images.unsplash.com/photo-1507842217121-ad0773cf4a0f?q=80&w=2000&auto=format&fit=crop", // Dark Water/Ripple
        tags: ["Identity", "Tone of Voice", "Guidelines"]
    },
    {
        title: "Brand Marketing",
        description: "Amplifying your voice. We create data-driven campaigns that build community, drive engagement, and convert curiosity into loyalty.",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000&auto=format&fit=crop", // Business/Strategy abstract
        tags: ["Social Media", "Content Creation", "Growth"]
    }
]

const Services = () => {
    return (
        <div className="min-h-screen bg-background pt-40 pb-20">
            <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">

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
                        text="A full-cycle agency. We partner with you from the initial spark to the global launch."
                        as="p"
                        classname="text-xl md:text-2xl text-primary/70 max-w-3xl font-sans leading-relaxed"
                        lineAnime={true}
                    />
                </div>

                {/* Aesthetic Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[450px]">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative overflow-hidden rounded-md cursor-default border border-primary/5 ${index === 0 || index === 3 ? 'md:col-span-2' : ''}`}
                        >
                            {/* Background Image with Slow Zoom Animation (Ken Burns) */}
                            <div className="absolute inset-0 bg-black overflow-hidden">
                                <motion.img
                                    src={service.image}
                                    alt={service.title}
                                    initial={{ scale: 1 }}
                                    animate={{ scale: 1.1 }}
                                    transition={{
                                        duration: 20,
                                        ease: "linear",
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    }}
                                    className="w-full h-full object-cover opacity-70 group-hover:opacity-40 transition-opacity duration-700"
                                />
                            </div>

                            {/* Lighting/Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent opacity-80" />

                            {/* Animated Content Layer */}
                            <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12">
                                <motion.div
                                    initial={{ y: 0 }}
                                    whileHover={{ y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="mb-6 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                                        <span className="text-white/60 font-serif italic text-xl">0{index + 1}</span>
                                    </div>

                                    <h3 className="text-4xl lg:text-5xl font-serif text-white mb-4 tracking-tight group-hover:text-[#FFFBF4] transition-colors">
                                        {service.title}
                                    </h3>

                                    <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mb-6 transition-all duration-500 ease-in-out">
                                        <p className="text-white/80 leading-relaxed text-lg max-w-xl">
                                            {service.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-3 mt-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                        {service.tags.map(tag => (
                                            <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-[#11120D] bg-[#D8CFBC] px-4 py-2 rounded-full border border-white/10">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}

                    {/* CTA Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-[#11120D] relative overflow-hidden rounded-md p-8 flex flex-col justify-center items-center text-center group border border-primary/10"
                    >
                        {/* Subtle animated grain or noise */}
                        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>

                        <div className="relative z-10 flex flex-col items-center">
                            <h3 className="text-4xl font-serif text-white mb-6 italic">Ready to start?</h3>
                            <Link to="/contact" className="px-10 py-5 bg-[#D8CFBC] text-[#11120D] rounded-full font-serif text-sm font-bold uppercase tracking-widest hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg glow">
                                Book a Demo
                            </Link>
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    )
}

export default Services
