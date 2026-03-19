import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send, MapPin, Clock, Phone } from 'lucide-react';
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

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10 relative">
                <ScrollReveal type="fade-up" className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-neonBlue/30 bg-neonBlue/5">
                        <span className="text-xs font-semibold tracking-[0.15em] text-neonBlue uppercase">Get in Touch</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-[1.1]">
                        Let's Build Your <br />
                        <span className="text-gradient-neon">Digital Future</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Connect with us today. We're here to discuss how TechNova can transform your business through innovative digital solutions.
                    </p>
                </ScrollReveal>
            </section>

            <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">

                    {/* Left Column: Contact Information */}
                    <ScrollReveal
                        type="slide-left"
                        duration={0.8}
                    >
                        <div className="space-y-12">
                            {/* Contact Cards */}
                            {/* Email */}
                            <motion.div
                                whileHover={{ x: 8 }}
                                className="group"
                            >
                                <div className="flex items-start space-x-5">
                                    <div className="w-14 h-14 rounded-xl bg-neonBlue/10 border border-neonBlue/30 flex items-center justify-center flex-shrink-0 group-hover:bg-neonBlue/20 group-hover:border-neonBlue/50 transition-all duration-300">
                                        <Mail className="text-neonBlue" size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs font-bold tracking-widest text-neonBlue uppercase mb-1">Email</p>
                                        <a href="mailto:hello@technova.in" className="text-lg font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
                                            hello@technova.in
                                        </a>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Phone */}
                            <motion.div
                                whileHover={{ x: 8 }}
                                className="group"
                            >
                                <div className="flex items-start space-x-5">
                                    <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 group-hover:border-blue-500/50 transition-all duration-300">
                                        <Phone className="text-blue-400" size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs font-bold tracking-widest text-blue-400 uppercase mb-2">Phone</p>
                                        <div className="space-y-1">
                                            <a href="tel:+919876543210" className="block text-lg font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
                                                +91 98765 43210
                                            </a>
                                            <p className="text-sm text-gray-500">Available Mon-Fri, 9 AM - 6 PM IST</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* WhatsApp */}
                            <motion.div
                                whileHover={{ x: 8 }}
                                className="group"
                            >
                                <div className="flex items-start space-x-5">
                                    <div className="w-14 h-14 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366]/20 group-hover:border-[#25D366]/50 transition-all duration-300">
                                        <MessageCircle className="text-[#25D366]" size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs font-bold tracking-widest text-[#25D366] uppercase mb-1">WhatsApp</p>
                                        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
                                            +91 98765 43210
                                        </a>
                                        <p className="text-sm text-gray-500 mt-1">Quick response within hours</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Office Location */}
                            <motion.div
                                whileHover={{ x: 8 }}
                                className="group"
                            >
                                <div className="flex items-start space-x-5">
                                    <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/20 group-hover:border-purple-500/50 transition-all duration-300">
                                        <MapPin className="text-purple-400" size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs font-bold tracking-widest text-purple-400 uppercase mb-1">Office</p>
                                        <p className="text-lg font-semibold text-gray-300">Bangalore, India</p>
                                        <p className="text-sm text-gray-500 mt-1">Tech Hub, Innovation District</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Timezone */}
                            <motion.div
                                whileHover={{ x: 8 }}
                                className="group"
                            >
                                <div className="flex items-start space-x-5">
                                    <div className="w-14 h-14 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300">
                                        <Clock className="text-orange-400" size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs font-bold tracking-widest text-orange-400 uppercase mb-1">Timezone</p>
                                        <p className="text-lg font-semibold text-gray-300">IST (UTC +5:30)</p>
                                        <p className="text-sm text-gray-500 mt-1">Same timezone, no delays</p>
                                    </div>
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
                        <div className="glass p-8 sm:p-12 rounded-2xl relative overflow-hidden border border-white/10 shadow-2xl">
                            <h3 className="text-3xl font-black mb-10 tracking-tight text-white">Let's Connect</h3>

                            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>

                                <div className="space-y-3 relative group">
                                    <label className="text-sm font-semibold text-gray-400">Full Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white/5 border border-white/10 text-white focus:border-neonBlue focus:ring-1 focus:ring-neonBlue focus:bg-white/10 px-4 py-3 rounded-lg transition-all duration-300 font-light outline-none"
                                        placeholder="Your Name"
                                    />
                                </div>

                                <div className="space-y-3 relative group">
                                    <label className="text-sm font-semibold text-gray-400">Company</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white/5 border border-white/10 text-white focus:border-neonBlue focus:ring-1 focus:ring-neonBlue focus:bg-white/10 px-4 py-3 rounded-lg transition-all duration-300 font-light outline-none"
                                        placeholder="Company Name"
                                    />
                                </div>

                                <div className="space-y-3 relative group">
                                    <label className="text-sm font-semibold text-gray-400">Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-white/5 border border-white/10 text-white focus:border-neonBlue focus:ring-1 focus:ring-neonBlue focus:bg-white/10 px-4 py-3 rounded-lg transition-all duration-300 font-light outline-none"
                                        placeholder="you@company.com"
                                    />
                                </div>

                                <div className="space-y-3 relative group">
                                    <label className="text-sm font-semibold text-gray-400">Phone (India)</label>
                                    <input
                                        type="tel"
                                        className="w-full bg-white/5 border border-white/10 text-white focus:border-neonBlue focus:ring-1 focus:ring-neonBlue focus:bg-white/10 px-4 py-3 rounded-lg transition-all duration-300 font-light outline-none"
                                        placeholder="+91 XXXXX XXXXX"
                                    />
                                </div>

                                <div className="space-y-3 relative group">
                                    <label className="text-sm font-semibold text-gray-400">Service Interest</label>
                                    <select className="w-full bg-white/5 border border-white/10 text-white focus:border-neonBlue focus:ring-1 focus:ring-neonBlue focus:bg-white/10 px-4 py-3 rounded-lg transition-all duration-300 font-light outline-none">
                                        <option className="bg-black text-white">Select a service...</option>
                                        <option className="bg-black text-white">Web Application Development</option>
                                        <option className="bg-black text-white">Enterprise Software</option>
                                        <option className="bg-black text-white">Cloud Solutions</option>
                                        <option className="bg-black text-white">Mobile App Development</option>
                                        <option className="bg-black text-white">Textile Industry Software</option>
                                        <option className="bg-black text-white">Other Services</option>
                                    </select>
                                </div>

                                <div className="space-y-3 relative group">
                                    <label className="text-sm font-semibold text-gray-400">Project Details</label>
                                    <textarea
                                        rows="4"
                                        className="w-full bg-white/5 border border-white/10 text-white focus:border-neonBlue focus:ring-1 focus:ring-neonBlue focus:bg-white/10 px-4 py-3 rounded-lg transition-all duration-300 font-light outline-none resize-none"
                                        placeholder="Tell us about your project, requirements, and goals..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full h-12 shimmer-btn text-base font-semibold flex items-center justify-center gap-2 group"
                                >
                                    Send Message
                                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>

                                <p className="text-xs text-gray-500 text-center">
                                    We'll respond within 24 hours. Available in English & Hindi.
                                </p>
                            </form>
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            {/* Why Connect Section */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10 relative border-t border-white/5">
                <ScrollReveal type="fade-up" className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
                        Why Partner With <span className="text-gradient-neon">TechNova</span>
                    </h2>
                </ScrollReveal>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {[
                        { title: "Local Expertise", desc: "Deep understanding of Indian business landscape" },
                        { title: "Same Timezone", desc: "Real-time support and quick response times" },
                        { title: "Proven Track Record", desc: "50+ successful projects across India" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-xl border border-white/10 bg-white/[0.03] hover:border-neonBlue/50 hover:bg-white/[0.06] transition-all duration-300"
                        >
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-400">{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            <ScrollReveal type="fade-up" className="relative z-20 mt-20">
                <CTA />
            </ScrollReveal>
        </motion.div>
    );
}
