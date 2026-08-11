import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Smartphone, Monitor, Tablet, Zap, CheckCircle2, ArrowRight, Layers, ShieldCheck, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import homeDevicesImg from '../assets/home_devices.png';

const features = [
    {
        title: "Adaptive Responsive Layouts",
        desc: "Engineered from mobile viewport up to 4K ultra-wide displays with fluid typography and zero cumulative layout shift.",
        icon: Smartphone,
    },
    {
        title: "Real-Time Cloud Synchronization",
        desc: "Instant live data synchronization across all connected devices using optimized WebSockets and state pipelines.",
        icon: Zap,
    },
    {
        title: "Sub-Second Core Web Vitals",
        desc: "Ultra-lean JavaScript bundles, server-side caching, and modern asset delivery achieving 95+ Google Lighthouse scores.",
        icon: Layers,
    },
    {
        title: "Turnkey Enterprise Ownership",
        desc: "Full source code handover, complete Git repository access, and 60-day complimentary SLA maintenance included.",
        icon: ShieldCheck,
    },
];

export default function DeviceShowcase() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <section className={`w-full py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 transition-colors duration-300`}>
            {/* Ambient Background Glow */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] rounded-full blur-[160px] pointer-events-none -z-10 ${
                isDark ? 'bg-cyan-500/10' : 'bg-cyan-500/10'
            }`} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
                {/* Left Side: Clean Realistic Multi-Device Photograph Showcase */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="lg:col-span-6 relative order-2 lg:order-1"
                >
                    {/* Image Card Container */}
                    <div className={`relative rounded-3xl border p-3 shadow-2xl backdrop-blur-2xl transition-all duration-300 overflow-hidden group ${
                        isDark
                            ? 'bg-slate-950/80 border-white/10 shadow-[0_15px_60px_rgba(0,240,255,0.15)] hover:border-cyan-500/40'
                            : 'bg-white border-slate-300 shadow-[0_20px_50px_rgba(15,23,42,0.1)] hover:border-cyan-600/40'
                    }`}>
                        {/* Browser Window Header */}
                        <div className="flex items-center justify-between px-3 py-2 mb-2 border-b border-slate-200 dark:border-white/10">
                            <div className="flex items-center space-x-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                            </div>
                            <div className={`text-[11px] font-mono font-bold px-3 py-0.5 rounded-full border ${
                                isDark ? 'bg-white/5 border-cyan-500/20 text-cyan-400' : 'bg-cyan-50 border-cyan-200 text-cyan-800'
                            }`}>
                                ecosystem.technova.dev
                            </div>
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                        </div>

                        {/* Clean Realistic Photo Frame */}
                        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] w-full bg-slate-950">
                            <img
                                src={homeDevicesImg}
                                alt="Realistic multi-device workstation with MacBook, iPad, and iPhone running SaaS applications"
                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Copy & Feature Highlights */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="lg:col-span-6 flex flex-col items-start order-1 lg:order-2"
                >
                    <div className="inline-flex items-center space-x-2 mb-4">
                        <Sparkles className="w-4 h-4 text-cyan-500" />
                        <span className={`text-xs uppercase tracking-widest font-extrabold px-3 py-1 rounded-full border ${
                            isDark ? 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20' : 'text-cyan-800 bg-cyan-100 border-cyan-300'
                        }`}>
                            SEAMLESS USER EXPERIENCE
                        </span>
                    </div>

                    <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 leading-tight ${
                        isDark ? 'text-white' : 'text-slate-950'
                    }`}>
                        Built to look stunning <br />
                        on every single screen.
                    </h2>

                    <p className={`text-base sm:text-lg mb-8 leading-relaxed font-medium ${
                        isDark ? 'text-gray-300' : 'text-slate-700'
                    }`}>
                        We engineer digital platforms that adapt effortlessly whether your clients are on a high-resolution desktop, an iPad on the move, or a mobile phone on 4G.
                    </p>

                    {/* Features List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
                        {features.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={i}
                                    className={`p-4 rounded-xl border transition-all duration-300 ${
                                        isDark
                                            ? 'bg-white/[0.03] border-white/10 hover:border-cyan-500/30'
                                            : 'bg-slate-50 border-slate-200 hover:border-cyan-600/30 shadow-sm'
                                    }`}
                                >
                                    <div className="flex items-center space-x-2.5 mb-2">
                                        <div className={`p-1.5 rounded-lg ${
                                            isDark ? 'bg-cyan-500/10 text-cyan-400' : 'bg-cyan-100 text-cyan-700'
                                        }`}>
                                            <Icon size={16} />
                                        </div>
                                        <h4 className={`text-sm font-bold ${
                                            isDark ? 'text-white' : 'text-slate-900'
                                        }`}>
                                            {item.title}
                                        </h4>
                                    </div>
                                    <p className={`text-xs leading-relaxed ${
                                        isDark ? 'text-gray-400' : 'text-slate-600'
                                    }`}>
                                        {item.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Action Link */}
                    <div className="flex items-center gap-4">
                        <Link
                            to="/services"
                            className={`inline-flex items-center px-6 py-3 text-sm font-extrabold uppercase tracking-wider rounded-sm transition-all duration-300 ${
                                isDark
                                    ? 'bg-cyan-400 hover:bg-cyan-300 text-black shadow-[0_0_20px_rgba(0,240,255,0.3)]'
                                    : 'bg-cyan-700 hover:bg-cyan-800 text-white shadow-md'
                            }`}
                        >
                            Explore All Services
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
