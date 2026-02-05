import { motion } from 'framer-motion'

const TechStack = () => {
    const stack1 = [
        { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    ]

    const stack2 = [
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'Canva', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    ]

    const stack3 = [
        { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'LinkedIn', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg' },
        { name: 'Instagram', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg' },
        { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    ]

    // Duplicating for infinite loop effect (4 sets to ensure coverage)
    const col1 = [...stack1, ...stack1, ...stack1, ...stack1]
    const col2 = [...stack2, ...stack2, ...stack2, ...stack2]
    const col3 = [...stack3, ...stack3, ...stack3, ...stack3]

    return (
        <section className="py-20 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">

            {/* Left Text */}
            <div className="lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left">
                {["Our", "Tech", "Stack"].map((word, i) => (
                    <h2
                        key={i}
                        className="text-[15vw] lg:text-[11vw] leading-[0.85] font-serif font-medium tracking-tighter text-primary mix-blend-multiply"
                    >
                        {word}
                    </h2>
                ))}
                <p className="mt-8 text-2xl font-sans text-accent-stone font-medium max-w-lg leading-relaxed">
                    We assume responsibility for our code and design, ensuring scalability and performance.
                </p>
            </div>

            {/* Right Grid / Rows */}
            <div className="w-full lg:w-[50%] flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-4 md:h-[800px] overflow-hidden relative mask-gradient">

                {/* Mobile View: Horizontal Rows */}
                <div className="md:hidden flex flex-col gap-6 w-full">
                    {/* Row 1 - Left */}
                    <div className="relative w-full overflow-hidden">
                        <motion.div
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                            className="flex gap-4 w-fit"
                        >
                            {col1.map((tech, i) => (
                                <div key={i} className="w-24 h-24 bg-surface flex-shrink-0 flex flex-col items-center justify-center p-2 border border-transparent">
                                    <img src={tech.logo} alt={tech.name} className="w-8 h-8 mb-2 object-contain opacity-80" />
                                    <span className="font-serif font-medium text-primary text-xs">{tech.name}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Row 2 - Right */}
                    <div className="relative w-full overflow-hidden">
                        <motion.div
                            animate={{ x: ["-50%", "0%"] }}
                            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
                            className="flex gap-4 w-fit"
                        >
                            {col2.map((tech, i) => (
                                <div key={i} className="w-24 h-24 bg-surface flex-shrink-0 flex flex-col items-center justify-center p-2 border border-transparent">
                                    <img src={tech.logo} alt={tech.name} className="w-8 h-8 mb-2 object-contain opacity-80" />
                                    <span className="font-serif font-medium text-primary text-xs">{tech.name}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Row 3 - Left */}
                    <div className="relative w-full overflow-hidden">
                        <motion.div
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                            className="flex gap-4 w-fit"
                        >
                            {col3.map((tech, i) => (
                                <div key={i} className="w-24 h-24 bg-surface flex-shrink-0 flex flex-col items-center justify-center p-2 border border-transparent">
                                    <img src={tech.logo} alt={tech.name} className="w-8 h-8 mb-2 object-contain opacity-80" />
                                    <span className="font-serif font-medium text-primary text-xs">{tech.name}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Desktop View: Vertical Columns */}
                {/* Column 1 - Up */}
                <div className="hidden md:block relative w-full h-full overflow-hidden">
                    <motion.div
                        animate={{ y: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                        className="flex flex-col gap-4 absolute w-full"
                    >
                        {col1.map((tech, i) => (
                            <div key={i} className="w-full aspect-square bg-surface rounded-none flex flex-col items-center justify-center p-4 border border-transparent hover:border-accent-rose transition-colors duration-300">
                                <img src={tech.logo} alt={tech.name} className="w-10 h-10 mb-3 object-contain opacity-80" />
                                <span className="font-serif font-medium text-primary text-sm">{tech.name}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Column 2 - Down */}
                <div className="hidden md:block relative w-full h-full overflow-hidden">
                    <motion.div
                        animate={{ y: ["-50%", "0%"] }}
                        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
                        className="flex flex-col gap-4 absolute w-full"
                    >
                        {col2.map((tech, i) => (
                            <div key={i} className="w-full aspect-square bg-surface rounded-none flex flex-col items-center justify-center p-4 border border-transparent hover:border-accent-rose transition-colors duration-300">
                                <img src={tech.logo} alt={tech.name} className="w-10 h-10 mb-3 object-contain opacity-80" />
                                <span className="font-serif font-medium text-primary text-sm">{tech.name}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Column 3 - Up */}
                <div className="hidden md:block relative w-full h-full overflow-hidden">
                    <motion.div
                        animate={{ y: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                        className="flex flex-col gap-4 absolute w-full"
                    >
                        {col3.map((tech, i) => (
                            <div key={i} className="w-full aspect-square bg-surface rounded-none flex flex-col items-center justify-center p-4 border border-transparent hover:border-accent-rose transition-colors duration-300">
                                <img src={tech.logo} alt={tech.name} className="w-10 h-10 mb-3 object-contain opacity-80" />
                                <span className="font-serif font-medium text-primary text-sm">{tech.name}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    )
}

export default TechStack
