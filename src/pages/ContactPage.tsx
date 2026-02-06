import { motion } from 'framer-motion'
import { useState } from 'react'
import TextAnimation from '../components/ui/scroll-text'

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        alert('Thank you for your message! We\'ll get back to you soon.')
        setFormData({ name: '', email: '', company: '', message: '' })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

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


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-surface/30 p-8 md:p-12 rounded-3xl border border-primary/5"
                    >
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div>
                                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-primary/40 mb-2">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-0 py-3 border-b border-primary/20 focus:border-accent-rose focus:ring-0 bg-transparent outline-none transition placeholder-primary/20 text-primary"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-primary/40 mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-0 py-3 border-b border-primary/20 focus:border-accent-rose focus:ring-0 bg-transparent outline-none transition placeholder-primary/20 text-primary"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="company" className="block text-xs font-bold uppercase tracking-widest text-primary/40 mb-2">
                                    Company
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full px-0 py-3 border-b border-primary/20 focus:border-accent-rose focus:ring-0 bg-transparent outline-none transition placeholder-primary/20 text-primary"
                                    placeholder="Your company"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-primary/40 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-0 py-3 border-b border-primary/20 focus:border-accent-rose focus:ring-0 bg-transparent outline-none transition resize-none placeholder-primary/20 text-primary"
                                    placeholder="Tell us about your project..."
                                />
                            </div>
                            <motion.button
                                type="submit"
                                className="w-full px-8 py-5 bg-primary text-white rounded-full font-serif text-lg hover:bg-accent-rose transition-colors duration-300"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <div className="space-y-16">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <h3 className="text-xl font-sans font-bold uppercase tracking-widest mb-10 text-primary">Contact Details</h3>
                            <div className="space-y-12">
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
                                <div>
                                    <h4 className="font-bold text-xs uppercase tracking-widest text-primary/40 mb-3">Office</h4>
                                    <p className="text-xl text-primary/70 font-sans max-w-xs leading-relaxed">
                                        Rishihood University, Bahalgarh,<br />
                                        Sonipat, Haryana,<br />
                                        131021, India
                                    </p>
                                </div>
                            </div>
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
