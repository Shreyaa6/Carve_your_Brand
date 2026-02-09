import { motion } from 'framer-motion'
import TextAnimation from '../components/ui/scroll-text'

const CALENDLY_LINK = 'https://calendly.com/carveyourbrand-agency/30min'

const ContactPage = () => {

    return (
        <div className="min-h-screen bg-background pt-40 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Intro */}
                <div className="mb-20 text-center">
                    <TextAnimation
                        text="Get in Touch"
                        classname="text-accent-olive font-bold tracking-widest uppercase mb-4 block text-xs"
                    />
                    <TextAnimation
                        text="Let's create something timeless."
                        as="h1"
                        classname="text-5xl md:text-8xl font-serif text-primary mb-8"
                        letterAnime={true}
                    />
                    <TextAnimation
                        text="Ready to start? We are waiting to hear your story."
                        as="p"
                        classname="text-xl md:text-2xl text-primary/70 max-w-2xl mx-auto font-sans leading-relaxed"
                        lineAnime={true}
                    />
                </div>


                <div className="max-w-4xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-16">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-center"
                        >
                            <h3 className="text-xl font-sans font-bold uppercase tracking-widest mb-10 text-primary">Contact Details</h3>
                            <div className="space-y-12 mb-12">
                                <div>
                                    <h4 className="font-bold text-xs uppercase tracking-widest text-primary/40 mb-3">Email</h4>
                                    <a href="mailto:carveyourbrand.agency@gmail.com" className="text-3xl md:text-4xl text-primary font-serif italic hover:text-accent-rose transition-colors underline decoration-primary/20 underline-offset-8">
                                        carveyourbrand.agency@gmail.com
                                    </a>
                                </div>
                                <div>
                                    <h4 className="font-bold text-xs uppercase tracking-widest text-primary/40 mb-3">Phone</h4>
                                    <a href="tel:+918679144515" className="text-3xl md:text-4xl text-primary font-serif italic hover:text-accent-rose transition-colors underline decoration-primary/20 underline-offset-8">
                                        +91 8679144515
                                    </a>
                                </div>
                            </div>
                            <motion.a
                                href={CALENDLY_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-8 py-5 bg-primary text-white rounded-full font-serif text-lg hover:bg-accent-rose transition-colors duration-300"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Let's Talk
                            </motion.a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="bg-black text-white p-10 rounded-2xl relative overflow-hidden"
                        >
                            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>
                            <h3 className="text-xl font-bold font-sans uppercase tracking-widest mb-6 relative z-10 text-white">Why Partner With Us?</h3>
                            <ul className="space-y-4 relative z-10">
                                {['Fast response time', 'Transparent pricing', 'Dedicated project manager', 'Ongoing support & maintenance'].map((item) => (
                                    <li key={item} className="flex items-start text-white">
                                        <span className="mr-3 text-accent-rose">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
