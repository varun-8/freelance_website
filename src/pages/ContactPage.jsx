import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send } from 'lucide-react';
import CTA from '../components/CTA';
import ScrollReveal from '../components/ScrollReveal';

export default function ContactPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full min-h-screen bg-black overflow-hidden relative"
        >
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neonBlue/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

            <div className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left Column: Contact Information */}
                    <ScrollReveal
                        type="slide-left"
                        duration={0.8}
                        className="flex flex-col justify-start pt-10"
                    >
                        <div className="inline-block mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-semibold tracking-[0.2em] text-neonBlue uppercase">
                            Get in Touch
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[1.1]">
                            Let's start your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-blue-500">
                                transition.
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 font-light mb-16 max-w-md leading-relaxed">
                            Reach out to discuss how we can engineer the perfect digital solution for your business needs.
                        </p>

                        <div className="space-y-10">
                            {/* Email Info */}
                            <motion.div
                                whileHover={{ x: 10 }}
                                className="flex items-center space-x-6 group cursor-pointer"
                            >
                                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center flex-shrink-0 group-hover:bg-neonBlue/10 group-hover:border-neonBlue transition-all duration-300 shadow-[0_0_0_rgba(0,240,255,0)] group-hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                                    <Mail className="text-gray-400 group-hover:text-neonBlue transition-colors duration-300" size={28} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-1">Email</p>
                                    <a href="mailto:contact@technova.com" className="text-2xl font-semibold tracking-tight text-gray-200 group-hover:text-white transition-colors duration-300">
                                        hello@technova.com
                                    </a>
                                </div>
                            </motion.div>

                            {/* WhatsApp Info */}
                            <motion.div
                                whileHover={{ x: 10 }}
                                className="flex items-center space-x-6 group cursor-pointer"
                            >
                                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366]/10 group-hover:border-[#25D366] transition-all duration-300 shadow-[0_0_0_rgba(37,211,102,0)] group-hover:shadow-[0_0_20px_rgba(37,211,102,0.3)]">
                                    <MessageCircle className="text-gray-400 group-hover:text-[#25D366] transition-colors duration-300" size={28} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-1">WhatsApp</p>
                                    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-2xl font-semibold tracking-tight text-gray-200 group-hover:text-white transition-colors duration-300">
                                        +1 (555) 123-4567
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </ScrollReveal>

                    {/* Right Column: Contact Form */}
                    <ScrollReveal
                        type="fade-up"
                        duration={0.8}
                        delay={0.2}
                        className="relative"
                    >
                        {/* Form Glass Container */}
                        <div className="glass p-8 sm:p-12 rounded-[2.5rem] relative overflow-hidden shadow-2xl">
                            <h3 className="text-3xl font-bold mb-10 tracking-tight text-white">Project Details</h3>

                            <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>

                                <div className="space-y-3 relative group">
                                    <label className="text-sm font-semibold tracking-wide text-gray-400 ml-1">Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white/5 border border-white/10 text-white focus:border-neonBlue focus:ring-1 focus:ring-neonBlue focus:bg-white/10 px-5 py-4 rounded-xl transition-all duration-300 font-light outline-none"
                                        placeholder="Enter your name"
                                    />
                                    {/* Neon Focus Indicator */}
                                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-neonBlue transition-all duration-300 group-focus-within:w-full rounded-full shadow-[0_0_10px_#00f0ff]"></div>
                                </div>

                                <div className="space-y-3 relative group">
                                    <label className="text-sm font-semibold tracking-wide text-gray-400 ml-1">Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-white/5 border border-white/10 text-white focus:border-neonBlue focus:ring-1 focus:ring-neonBlue focus:bg-white/10 px-5 py-4 rounded-xl transition-all duration-300 font-light outline-none"
                                        placeholder="you@company.com"
                                    />
                                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-neonBlue transition-all duration-300 group-focus-within:w-full rounded-full shadow-[0_0_10px_#00f0ff]"></div>
                                </div>

                                <div className="space-y-3 relative group">
                                    <label className="text-sm font-semibold tracking-wide text-gray-400 ml-1">Phone</label>
                                    <input
                                        type="tel"
                                        className="w-full bg-white/5 border border-white/10 text-white focus:border-neonBlue focus:ring-1 focus:ring-neonBlue focus:bg-white/10 px-5 py-4 rounded-xl transition-all duration-300 font-light outline-none"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-neonBlue transition-all duration-300 group-focus-within:w-full rounded-full shadow-[0_0_10px_#00f0ff]"></div>
                                </div>

                                <div className="space-y-3 relative group">
                                    <label className="text-sm font-semibold tracking-wide text-gray-400 ml-1">Project Description</label>
                                    <textarea
                                        rows="5"
                                        className="w-full bg-white/5 border border-white/10 text-white focus:border-neonBlue focus:ring-1 focus:ring-neonBlue focus:bg-white/10 px-5 py-4 rounded-xl transition-all duration-300 font-light outline-none resize-none"
                                        placeholder="Tell us about your technical requirements..."
                                    ></textarea>
                                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-neonBlue transition-all duration-300 group-focus-within:w-full rounded-full shadow-[0_0_10px_#00f0ff]"></div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full h-14 shimmer-btn text-lg group gap-3"
                                >
                                    Send Message
                                    <Send className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" size={20} strokeWidth={2.5} />
                                </button>
                            </form>
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            <ScrollReveal type="fade-up" className="relative z-20 mt-20">
                <CTA />
            </ScrollReveal>
        </motion.div>
    );
}
