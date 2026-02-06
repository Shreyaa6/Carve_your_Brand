import { motion } from 'framer-motion'
import TextAnimation from './ui/scroll-text'

const TechStack = () => {
    const stack1 = [
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
        { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
        { name: 'Scikit-learn', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
        { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
        { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
    ]

    const stack2 = [
        { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
        { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
        { name: 'Google Cloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
        { name: 'OpenCV', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    ]

    const stack3 = [
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Jupyter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
        { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    ]

    // Duplicating for infinite loop effect
    const col1 = [...stack1, ...stack1, ...stack1]
    const col2 = [...stack2, ...stack2, ...stack2]
    const col3 = [...stack3, ...stack3, ...stack3]

    const LogoItem = ({ tech, className }: { tech: { name: string, logo: string }, className?: string }) => (
        <div className={`bg-surface flex-shrink-0 flex flex-col items-center justify-center border border-transparent ${className}`}>
            <div
                className="w-8 h-8 mb-2 bg-primary"
                style={{
                    maskImage: `url(${tech.logo})`,
                    WebkitMaskImage: `url(${tech.logo})`,
                    maskSize: 'contain',
                    WebkitMaskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    WebkitMaskPosition: 'center'
                }}
            />
            <span className="font-serif font-medium text-primary text-xs">{tech.name}</span>
        </div>
    )

    return (
        <section className="py-20 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">

            {/* Left Text */}
            <div className="lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left">
                {["Our", "Tech", "Stack"].map((word, i) => (
                    <TextAnimation
                        key={i}
                        text={word}
                        as="h2"
                        classname="text-[15vw] lg:text-[11vw] leading-[0.85] font-serif font-medium tracking-tighter text-primary mix-blend-multiply"
                        variants={{
                            hidden: { filter: 'blur(10px)', opacity: 0, y: 20 },
                            visible: {
                                filter: 'blur(0px)',
                                opacity: 1,
                                y: 0,
                                transition: { ease: 'linear', duration: 0.5 }
                            },
                        }}
                    />
                ))}

                <div className="mt-8 max-w-lg">
                    <TextAnimation
                        as="p"
                        text="Powering intelligent solutions with cutting-edge ML and development technologies."
                        classname="text-2xl font-sans text-accent-stone font-medium leading-relaxed"
                        lineAnime={true}
                        variants={{
                            hidden: { filter: 'blur(4px)', opacity: 0, y: 10 },
                            visible: {
                                filter: 'blur(0px)',
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.4 }
                            },
                        }}
                    />
                </div>
            </div>

            {/* Right Grid / Rows */}
            <div className="w-full lg:w-[50%] flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-4 md:h-[800px] overflow-hidden relative mask-gradient">

                {/* Mobile View: Horizontal Rows */}
                <div className="md:hidden flex flex-col gap-6 w-full">
                    {/* Row 1 - Left */}
                    <div className="relative w-full overflow-hidden">
                        <motion.div
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                            className="flex gap-4 w-fit"
                        >
                            {col1.map((tech, i) => (
                                <LogoItem key={i} tech={tech} className="w-24 h-24 p-2" />
                            ))}
                        </motion.div>
                    </div>

                    {/* Row 2 - Right */}
                    <div className="relative w-full overflow-hidden">
                        <motion.div
                            animate={{ x: ["-50%", "0%"] }}
                            transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
                            className="flex gap-4 w-fit"
                        >
                            {col2.map((tech, i) => (
                                <LogoItem key={i} tech={tech} className="w-24 h-24 p-2" />
                            ))}
                        </motion.div>
                    </div>

                    {/* Row 3 - Left */}
                    <div className="relative w-full overflow-hidden">
                        <motion.div
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
                            className="flex gap-4 w-fit"
                        >
                            {col3.map((tech, i) => (
                                <LogoItem key={i} tech={tech} className="w-24 h-24 p-2" />
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Desktop View: Vertical Columns */}
                {/* Column 1 - Up */}
                <div className="hidden md:block relative w-full h-full overflow-hidden">
                    <motion.div
                        animate={{ y: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                        className="flex flex-col gap-4 absolute w-full"
                    >
                        {col1.map((tech, i) => (
                            <div key={i} className="w-full aspect-square bg-surface rounded-none flex flex-col items-center justify-center p-4 border border-transparent hover:border-accent-rose transition-colors duration-300">
                                <div
                                    className="w-10 h-10 mb-3 bg-primary"
                                    style={{
                                        maskImage: `url(${tech.logo})`,
                                        WebkitMaskImage: `url(${tech.logo})`,
                                        maskSize: 'contain',
                                        WebkitMaskSize: 'contain',
                                        maskRepeat: 'no-repeat',
                                        WebkitMaskRepeat: 'no-repeat',
                                        maskPosition: 'center',
                                        WebkitMaskPosition: 'center'
                                    }}
                                />
                                <span className="font-serif font-medium text-primary text-sm">{tech.name}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Column 2 - Down */}
                <div className="hidden md:block relative w-full h-full overflow-hidden">
                    <motion.div
                        animate={{ y: ["-50%", "0%"] }}
                        transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
                        className="flex flex-col gap-4 absolute w-full"
                    >
                        {col2.map((tech, i) => (
                            <div key={i} className="w-full aspect-square bg-surface rounded-none flex flex-col items-center justify-center p-4 border border-transparent hover:border-accent-rose transition-colors duration-300">
                                <div
                                    className="w-10 h-10 mb-3 bg-primary"
                                    style={{
                                        maskImage: `url(${tech.logo})`,
                                        WebkitMaskImage: `url(${tech.logo})`,
                                        maskSize: 'contain',
                                        WebkitMaskSize: 'contain',
                                        maskRepeat: 'no-repeat',
                                        WebkitMaskRepeat: 'no-repeat',
                                        maskPosition: 'center',
                                        WebkitMaskPosition: 'center'
                                    }}
                                />
                                <span className="font-serif font-medium text-primary text-sm">{tech.name}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Column 3 - Up */}
                <div className="hidden md:block relative w-full h-full overflow-hidden">
                    <motion.div
                        animate={{ y: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
                        className="flex flex-col gap-4 absolute w-full"
                    >
                        {col3.map((tech, i) => (
                            <div key={i} className="w-full aspect-square bg-surface rounded-none flex flex-col items-center justify-center p-4 border border-transparent hover:border-accent-rose transition-colors duration-300">
                                <div
                                    className="w-10 h-10 mb-3 bg-primary"
                                    style={{
                                        maskImage: `url(${tech.logo})`,
                                        WebkitMaskImage: `url(${tech.logo})`,
                                        maskSize: 'contain',
                                        WebkitMaskSize: 'contain',
                                        maskRepeat: 'no-repeat',
                                        WebkitMaskRepeat: 'no-repeat',
                                        maskPosition: 'center',
                                        WebkitMaskPosition: 'center'
                                    }}
                                />
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
