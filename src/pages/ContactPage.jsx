import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { Mail, MessageCircle, Send, MapPin, Clock, Phone, Sparkles } from 'lucide-react';
import CTA from '../components/CTA';
import ScrollReveal from '../components/ScrollReveal';
import { useTheme } from '../context/ThemeContext';

export default function ContactPage() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [searchParams] = useSearchParams();
    const initialSolution = searchParams.get('solution') || '';
    const initialCategory = searchParams.get('category') || '';

    const [messageDetails, setMessageDetails] = useState('');
    const [selectedService, setSelectedService] = useState('Select a service...');

    useEffect(() => {
        if (initialSolution) {
            setMessageDetails(`Hi, I am interested in getting a quote for the "${initialSolution}" solution${initialCategory ? ` (${initialCategory})` : ''}.`);
            setSelectedService('Enterprise Software');
        }
    }, [initialSolution, initialCategory]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`w-full min-h-screen overflow-hidden relative transition-colors duration-300 ${
                isDark ? 'bg-black text-white' : 'bg-white text-slate-900'
            }`}
        >
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

            {/* Hero Section */}
            <section className="pt-36 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10 relative">
                <ScrollReveal type="fade-up" className="text-center mb-16">
                    <div className={`inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border ${
                        isDark ? 'border-cyan-500/30 bg-cyan-500/5 text-cyan-400' : 'border-cyan-600/30 bg-cyan-50 text-cyan-700'
                    }`}>
                        <span className="text-xs font-bold tracking-widest uppercase">Get in Touch</span>
                    </div>
                    <h1 className={`text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-[1.1] ${
                        isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                        Let's Build Your <br />
                        <span className="text-gradient-neon">Digital Future</span>
                    </h1>
                    <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-normal ${
                        isDark ? 'text-gray-400' : 'text-slate-700'
                    }`}>
                        Connect with us today. We're here to discuss how TechNova can transform your business through innovative digital solutions.
                    </p>
                </ScrollReveal>
            </section>

            <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10 relative mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">

                    {/* Left Column: Contact Information */}
                    <ScrollReveal type="slide-left" duration={0.8}>
                        <div className="space-y-10">
                            {/* Email */}
                            <motion.div whileHover={{ x: 8 }} className="group">
                                <div className="flex items-start space-x-5">
                                    <div className={`w-14 h-14 rounded-xl border flex items-center justify-center flex-shrink-0 transition-colors ${
                                        isDark ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' : 'bg-cyan-50 border-cyan-200 text-cyan-600'
                                    }`}>
                                        <Mail size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <p className={`text-xs font-bold tracking-widest uppercase mb-1 ${
                                            isDark ? 'text-cyan-400' : 'text-cyan-700'
                                        }`}>Email</p>
                                        <a href="mailto:hello@technova.in" className={`text-lg font-bold transition-colors ${
                                            isDark ? 'text-gray-300 hover:text-white' : 'text-slate-900 hover:text-cyan-700'
                                        }`}>
                                            hello@technova.in
                                        </a>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Phone */}
                            <motion.div whileHover={{ x: 8 }} className="group">
                                <div className="flex items-start space-x-5">
                                    <div className={`w-14 h-14 rounded-xl border flex items-center justify-center flex-shrink-0 transition-colors ${
                                        isDark ? 'bg-blue-500/10 border-blue-500/30 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-600'
                                    }`}>
                                        <Phone size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <p className={`text-xs font-bold tracking-widest uppercase mb-1 ${
                                            isDark ? 'text-blue-400' : 'text-blue-700'
                                        }`}>Phone</p>
                                        <a href="tel:+919876543210" className={`text-lg font-bold transition-colors ${
                                            isDark ? 'text-gray-300 hover:text-white' : 'text-slate-900 hover:text-blue-700'
                                        }`}>
                                            +91 98765 43210
                                        </a>
                                        <p className={`text-xs mt-1 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>Available Mon-Fri, 9 AM - 6 PM IST</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* WhatsApp */}
                            <motion.div whileHover={{ x: 8 }} className="group">
                                <div className="flex items-start space-x-5">
                                    <div className={`w-14 h-14 rounded-xl border flex items-center justify-center flex-shrink-0 transition-colors ${
                                        isDark ? 'bg-[#25D366]/10 border-[#25D366]/30 text-[#25D366]' : 'bg-emerald-50 border-emerald-200 text-emerald-600'
                                    }`}>
                                        <MessageCircle size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <p className={`text-xs font-bold tracking-widest uppercase mb-1 ${
                                            isDark ? 'text-[#25D366]' : 'text-emerald-700'
                                        }`}>WhatsApp</p>
                                        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className={`text-lg font-bold transition-colors ${
                                            isDark ? 'text-gray-300 hover:text-white' : 'text-slate-900 hover:text-emerald-700'
                                        }`}>
                                            +91 98765 43210
                                        </a>
                                        <p className={`text-xs mt-1 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>Quick response within hours</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Office Location */}
                            <motion.div whileHover={{ x: 8 }} className="group">
                                <div className="flex items-start space-x-5">
                                    <div className={`w-14 h-14 rounded-xl border flex items-center justify-center flex-shrink-0 transition-colors ${
                                        isDark ? 'bg-purple-500/10 border-purple-500/30 text-purple-400' : 'bg-purple-50 border-purple-200 text-purple-600'
                                    }`}>
                                        <MapPin size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <p className={`text-xs font-bold tracking-widest uppercase mb-1 ${
                                            isDark ? 'text-purple-400' : 'text-purple-700'
                                        }`}>Office</p>
                                        <p className={`text-lg font-bold ${isDark ? 'text-gray-300' : 'text-slate-900'}`}>Bangalore, India</p>
                                        <p className={`text-xs mt-1 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>Tech Hub, Innovation District</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Timezone */}
                            <motion.div whileHover={{ x: 8 }} className="group">
                                <div className="flex items-start space-x-5">
                                    <div className={`w-14 h-14 rounded-xl border flex items-center justify-center flex-shrink-0 transition-colors ${
                                        isDark ? 'bg-orange-500/10 border-orange-500/30 text-orange-400' : 'bg-amber-50 border-amber-200 text-amber-600'
                                    }`}>
                                        <Clock size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <p className={`text-xs font-bold tracking-widest uppercase mb-1 ${
                                            isDark ? 'text-orange-400' : 'text-amber-700'
                                        }`}>Timezone</p>
                                        <p className={`text-lg font-bold ${isDark ? 'text-gray-300' : 'text-slate-900'}`}>IST (UTC +5:30)</p>
                                        <p className={`text-xs mt-1 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>Same timezone, no delays</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </ScrollReveal>

                    {/* Right Column: Contact Form */}
                    <ScrollReveal type="fade-up" duration={0.8} delay={0.2} className="relative">
                        <div className={`p-8 sm:p-12 rounded-3xl border transition-colors ${
                            isDark
                                ? 'bg-white/[0.03] backdrop-blur-xl border-white/10 shadow-2xl'
                                : 'bg-white border-slate-300 shadow-xl shadow-slate-200/60'
                        }`}>
                            <h3 className={`text-3xl font-extrabold mb-8 tracking-tight ${
                                isDark ? 'text-white' : 'text-slate-900'
                            }`}>Let's Connect</h3>

                            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>

                                <div className="space-y-2">
                                    <label className={`text-xs font-bold uppercase tracking-wider ${
                                        isDark ? 'text-gray-400' : 'text-slate-700'
                                    }`}>Full Name</label>
                                    <input
                                        type="text"
                                        className={`w-full px-4 py-3 rounded-xl border font-medium outline-none transition-all ${
                                            isDark
                                                ? 'bg-white/5 border-white/10 text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                                                : 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600'
                                        }`}
                                        placeholder="Your Name"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className={`text-xs font-bold uppercase tracking-wider ${
                                        isDark ? 'text-gray-400' : 'text-slate-700'
                                    }`}>Company</label>
                                    <input
                                        type="text"
                                        className={`w-full px-4 py-3 rounded-xl border font-medium outline-none transition-all ${
                                            isDark
                                                ? 'bg-white/5 border-white/10 text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                                                : 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600'
                                        }`}
                                        placeholder="Company Name"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className={`text-xs font-bold uppercase tracking-wider ${
                                        isDark ? 'text-gray-400' : 'text-slate-700'
                                    }`}>Email</label>
                                    <input
                                        type="email"
                                        className={`w-full px-4 py-3 rounded-xl border font-medium outline-none transition-all ${
                                            isDark
                                                ? 'bg-white/5 border-white/10 text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                                                : 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600'
                                        }`}
                                        placeholder="you@company.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className={`text-xs font-bold uppercase tracking-wider ${
                                        isDark ? 'text-gray-400' : 'text-slate-700'
                                    }`}>Service Interest</label>
                                    <select 
                                        value={selectedService}
                                        onChange={(e) => setSelectedService(e.target.value)}
                                        className={`w-full px-4 py-3 rounded-xl border font-medium outline-none transition-all ${
                                            isDark
                                                ? 'bg-black border-white/10 text-white focus:border-cyan-400'
                                                : 'bg-white border-slate-300 text-slate-900 focus:border-cyan-600'
                                        }`}
                                    >
                                        <option className={isDark ? 'bg-black text-white' : 'bg-white text-slate-900'}>Select a service...</option>
                                        <option className={isDark ? 'bg-black text-white' : 'bg-white text-slate-900'}>Web Application Development</option>
                                        <option className={isDark ? 'bg-black text-white' : 'bg-white text-slate-900'}>Enterprise Software</option>
                                        <option className={isDark ? 'bg-black text-white' : 'bg-white text-slate-900'}>Cloud Solutions</option>
                                        <option className={isDark ? 'bg-black text-white' : 'bg-white text-slate-900'}>Mobile App Development</option>
                                        <option className={isDark ? 'bg-black text-white' : 'bg-white text-slate-900'}>Textile Industry Software</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className={`text-xs font-bold uppercase tracking-wider ${
                                        isDark ? 'text-gray-400' : 'text-slate-700'
                                    }`}>Project Details</label>
                                    <textarea
                                        rows="4"
                                        value={messageDetails}
                                        onChange={(e) => setMessageDetails(e.target.value)}
                                        className={`w-full px-4 py-3 rounded-xl border font-medium outline-none transition-all resize-none ${
                                            isDark
                                                ? 'bg-white/5 border-white/10 text-white focus:border-cyan-400'
                                                : 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-cyan-600'
                                        }`}
                                        placeholder="Tell us about your project, requirements, and goals..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className={`w-full h-12 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all shadow-md ${
                                        isDark
                                            ? 'shimmer-btn text-white'
                                            : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-cyan-600/30'
                                    }`}
                                >
                                    Send Message
                                    <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            <ScrollReveal type="fade-up" className="relative z-20 mt-10">
                <CTA />
            </ScrollReveal>
        </motion.div>
    );
}
