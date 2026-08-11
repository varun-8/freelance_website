import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, ShieldCheck, CheckCircle2, TrendingUp, Cpu, Activity, Star, Terminal, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import heroShowcaseImg from '../assets/hero_showcase.png';

const dynamicPhrases = [
    "Web Applications",
    "Business Websites",
    "Mobile Apps",
    "Enterprise Software",
    "eCommerce Stores",
    "Cloud Infrastructure",
    "AI Solutions",
    "Custom Software",
    "Textile ERPs"
];

export default function Hero() {
    const [index, setIndex] = useState(0);
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % dynamicPhrases.length);
        }, 2600);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className={`relative min-h-[92vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden z-10 w-full pt-28 pb-20 transition-colors duration-300 ${
            isDark ? 'bg-black text-white bg-grid-pattern' : 'bg-slate-50 text-slate-900'
        }`}>
            {/* Ambient Background Glows */}
            {isDark && (
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[450px] rounded-full blur-[150px] pointer-events-none -z-10 bg-cyan-500/20" />
            )}

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                {/* Left Column: Hero Copy (Spans 7 Cols on Desktop) */}
                <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
                    
                    {/* Status Badge - Sharp Geometry */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className={`inline-flex items-center mb-6 px-4 py-2 rounded-sm border text-xs sm:text-sm font-extrabold shadow-sm backdrop-blur-xl transition-colors ${
                            isDark
                                ? 'border-cyan-500/30 bg-black/60 text-cyan-300'
                                : 'border-cyan-600/30 bg-cyan-100/90 text-cyan-900 shadow-slate-200/50'
                        }`}
                    >
                        <span className="relative flex h-2.5 w-2.5 mr-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                        </span>
                        <Sparkles className={`w-3.5 h-3.5 mr-1.5 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
                        Deploying Next-Gen Web & Software Solutions
                    </motion.div>

                    {/* Main Headline with Cleanly Formatted Dynamic Slot */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
                        className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight mb-6 leading-[1.25] sm:leading-[1.3] ${
                            isDark ? 'text-white' : 'text-slate-950'
                        }`}
                    >
                        <span className="block mb-2 sm:mb-3">Digital transformation</span>

                        {/* Line 2 & Line 3 with balanced vertical and horizontal spacing */}
                        <div className="flex flex-wrap items-baseline justify-center lg:justify-start gap-x-3 sm:gap-x-3.5 gap-y-2.5 sm:gap-y-3.5 overflow-visible">
                            <span className={`shrink-0 font-extrabold ${isDark ? 'text-white' : 'text-slate-950'}`}>
                                engineered for
                            </span>

                            {/* Fixed dynamic slot with proper vertical height and clearance */}
                            <div className="inline-block relative text-left h-[1.3em] min-w-[200px] sm:min-w-[280px] md:min-w-[340px]">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={dynamicPhrases[index]}
                                        initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }}
                                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                        exit={{ opacity: 0, y: -14, filter: 'blur(4px)' }}
                                        transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                                        className="absolute left-0 top-0 text-gradient-neon pb-2 whitespace-nowrap inline-block font-extrabold"
                                    >
                                        {dynamicPhrases[index]}.
                                        {/* Curved vector underline matching exact dynamic word width */}
                                        <svg
                                            className={`absolute -bottom-1 left-0 w-full h-3 opacity-90 overflow-visible pointer-events-none ${
                                                isDark ? 'text-cyan-400' : 'text-cyan-600'
                                            }`}
                                            viewBox="0 0 100 20"
                                            preserveAspectRatio="none"
                                        >
                                            <path
                                                d="M2 14 Q 50 2, 98 14"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                                fill="none"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </motion.span>
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.h1>

                    {/* Subheadline Paragraph */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                        className={`text-base sm:text-lg max-w-xl sm:max-w-2xl mb-8 leading-relaxed font-medium ${
                            isDark ? 'text-gray-200' : 'text-slate-700'
                        }`}
                    >
                        We build high-performance web applications, cloud infrastructure, industry ERPs, and bespoke digital automation tailored to scale your enterprise.
                    </motion.p>

                    {/* Quick Feature Badges - Sharp Geometry */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
                        className="flex flex-wrap justify-center lg:justify-start items-center gap-3 mb-10 text-xs sm:text-sm"
                    >
                        <span className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-sm border font-bold shadow-sm transition-colors ${
                            isDark
                                ? 'bg-white/5 border-white/10 text-gray-300'
                                : 'bg-white border-slate-300 text-slate-900 shadow-slate-200/50'
                        }`}>
                            <Zap className={`w-3.5 h-3.5 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} /> Ultra-Fast Architecture
                        </span>
                        <span className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-sm border font-bold shadow-sm transition-colors ${
                            isDark
                                ? 'bg-white/5 border-white/10 text-gray-300'
                                : 'bg-white border-slate-300 text-slate-900 shadow-slate-200/50'
                        }`}>
                            <ShieldCheck className={`w-3.5 h-3.5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} /> Enterprise Security
                        </span>
                        <span className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-sm border font-bold shadow-sm transition-colors ${
                            isDark
                                ? 'bg-white/5 border-white/10 text-gray-300'
                                : 'bg-white border-slate-300 text-slate-900 shadow-slate-200/50'
                        }`}>
                            <CheckCircle2 className={`w-3.5 h-3.5 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} /> 100% Custom Built
                        </span>
                    </motion.div>

                    {/* Call to Action Buttons - Sharp Geometry */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                        className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 w-full sm:w-auto"
                    >
                        <Link
                            to="/contact"
                            className={`group relative px-8 py-3.5 text-base font-extrabold uppercase tracking-wider rounded-sm transition-all duration-300 w-full sm:w-auto text-center shadow-md ${
                                isDark
                                    ? 'text-black bg-cyan-400 border border-cyan-400 hover:bg-cyan-300 shadow-[0_0_25px_rgba(0,240,255,0.35)]'
                                    : 'bg-cyan-700 hover:bg-cyan-800 text-white shadow-[0_4px_20px_rgba(2,132,199,0.35)] border border-cyan-700'
                            }`}
                        >
                            Start Your Project
                            <ArrowRight className="ml-2 inline group-hover:translate-x-1 transition-transform" size={18} />
                        </Link>
                        <Link
                            to="/services"
                            className={`px-8 py-3.5 text-base uppercase tracking-wider border font-extrabold rounded-sm transition-all duration-300 backdrop-blur-md w-full sm:w-auto text-center shadow-sm ${
                                isDark
                                    ? 'border-white/15 text-gray-200 bg-white/5 hover:bg-white/10 hover:text-white'
                                    : 'border-slate-300 text-slate-900 bg-white hover:bg-slate-100 shadow-slate-200/50'
                            }`}
                        >
                            Explore Services
                        </Link>
                    </motion.div>
                </div>

                {/* Right Column: Clean Realistic Engineering Showcase (No Overlaid Bubbles) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
                    transition={{
                        opacity: { duration: 0.9, delay: 0.2 },
                        scale: { duration: 0.9, delay: 0.2 },
                        y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="lg:col-span-5 relative w-full flex justify-center lg:justify-end mt-10 lg:mt-0 z-20"
                >
                    {/* Realistic Photo Showcase Container */}
                    <div className={`w-full max-w-lg rounded-2xl border p-3 shadow-2xl backdrop-blur-2xl transition-all duration-300 relative overflow-hidden group ${
                        isDark
                            ? 'bg-slate-950/80 border-cyan-500/20 shadow-[0_10px_50px_rgba(0,240,255,0.2)] hover:border-cyan-500/40'
                            : 'bg-white border-slate-300 shadow-[0_20px_50px_rgba(15,23,42,0.12)] hover:border-cyan-600/40'
                    }`}>
                        {/* Mockup Header Bar */}
                        <div className="flex items-center justify-between px-3 py-2.5 mb-2 border-b border-slate-200 dark:border-white/10">
                            <div className="flex items-center space-x-2">
                                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                                <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                            </div>
                            <div className={`text-[11px] font-mono font-bold px-3 py-0.5 rounded-full border ${
                                isDark ? 'bg-white/5 border-cyan-500/20 text-cyan-400' : 'bg-cyan-50 border-cyan-200 text-cyan-800'
                            }`}>
                                technova.dev/production-system
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                            </div>
                        </div>

                        {/* Clean Realistic Photo Frame */}
                        <div className="relative rounded-xl overflow-hidden aspect-[4/3] w-full bg-slate-950">
                            <img
                                src={heroShowcaseImg}
                                alt="Modern software engineering workspace and cloud architecture"
                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>

                        {/* Clean Metrics Footer */}
                        <div className="grid grid-cols-3 gap-2 mt-2.5 pt-1 text-center">
                            <div className={`p-2 rounded-lg border ${
                                isDark ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
                            }`}>
                                <div className={`text-xs font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>99.9%</div>
                                <div className="text-[10px] text-slate-500 dark:text-gray-400 font-medium">Uptime SLA</div>
                            </div>
                            <div className={`p-2 rounded-lg border ${
                                isDark ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
                            }`}>
                                <div className={`text-xs font-extrabold text-cyan-500 dark:text-cyan-400`}>100+</div>
                                <div className="text-[10px] text-slate-500 dark:text-gray-400 font-medium">Shipped Apps</div>
                            </div>
                            <div className={`p-2 rounded-lg border ${
                                isDark ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
                            }`}>
                                <div className={`text-xs font-extrabold text-emerald-500`}>Zero-Lag</div>
                                <div className="text-[10px] text-slate-500 dark:text-gray-400 font-medium">Optimization</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
