import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Play } from 'lucide-react';

const projects = [
    {
        id: 'lifepath',
        tag: 'HEALTHCARE · MARKETING SITE',
        title: 'LifePath - Dental Clinic',
        size: 'large',
        badge: 'LIVE PREVIEW',
        gradient: 'from-emerald-500/20 via-teal-500/10 to-cyan-500/20',
        borderColor: 'hover:border-emerald-500/50',
        bgIllustration: 'medical',
    },
    {
        id: 'quantum',
        tag: 'WEB3 · MARKETING SITE',
        title: 'Quantum - Tokenomics',
        size: 'large',
        badge: 'LIVE PREVIEW',
        gradient: 'from-purple-600/30 via-emerald-500/20 to-blue-600/30',
        borderColor: 'hover:border-purple-500/50',
        bgIllustration: 'tokenomics',
    },
    {
        id: 'horizon',
        tag: 'MARKETPLACE · REAL ESTATE',
        title: 'Horizon Estate - Real Estate',
        size: 'small',
        gradient: 'from-blue-600/20 to-slate-800/40',
        borderColor: 'hover:border-blue-500/50',
        bgIllustration: 'realestate',
    },
    {
        id: 'snaptrips',
        tag: 'TRAVEL · BOOKING SITE',
        title: 'SnapTrips - Travel',
        size: 'small',
        gradient: 'from-cyan-500/20 to-teal-800/40',
        borderColor: 'hover:border-cyan-500/50',
        bgIllustration: 'travel',
    },
    {
        id: 'michal',
        tag: 'PERSONAL · PORTFOLIO',
        title: 'Michal Bolt - Portfolio',
        size: 'small',
        gradient: 'from-zinc-700/30 to-black',
        borderColor: 'hover:border-gray-500/50',
        bgIllustration: 'portfolio',
    },
];

export default function FeaturedWork() {
    return (
        <section className="w-full py-28 bg-black relative overflow-hidden z-10 border-t border-white/10">
            {/* Ambient Lighting */}
            <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-xs uppercase tracking-widest font-semibold text-cyan-400">
                            - WHAT WE CAN BUILD FOR YOU
                        </span>
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mt-3 tracking-tight">
                            Design directions <br className="hidden sm:block" />
                            we can build for you.
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Link
                            to="/services"
                            className="inline-flex items-center text-sm font-semibold text-white hover:text-cyan-400 pb-1 border-b border-white/30 hover:border-cyan-400 transition-all duration-300 group"
                        >
                            View all services
                            <ArrowUpRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Top Row - 2 Large Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {projects.filter(p => p.size === 'large').map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                            className={`group relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br ${project.gradient} backdrop-blur-xl ${project.borderColor} transition-all duration-500 p-6 sm:p-8 flex flex-col justify-between min-h-[380px] sm:min-h-[440px] hover:shadow-[0_0_35px_rgba(0,240,255,0.15)]`}
                        >
                            {/* Card Top Row: Live Preview Badge */}
                            <div className="flex items-center justify-between z-10">
                                {project.badge && (
                                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-black/60 border border-white/20 text-[10px] font-bold tracking-widest text-white backdrop-blur-md">
                                        <Play className="w-2.5 h-2.5 mr-1.5 fill-current text-cyan-400" />
                                        {project.badge}
                                    </span>
                                )}
                            </div>

                            {/* Center Visual Mockup Box */}
                            <div className="my-6 relative w-full h-44 sm:h-52 rounded-2xl border border-white/15 bg-black/40 backdrop-blur-md overflow-hidden flex items-center justify-center p-4 group-hover:border-cyan-400/40 transition-colors">
                                {project.id === 'lifepath' && (
                                    <div className="w-full h-full rounded-lg bg-gradient-to-br from-teal-900/40 via-cyan-900/30 to-black p-4 flex flex-col justify-between border border-teal-500/20">
                                        <div className="flex items-center justify-between text-xs text-teal-300 font-mono">
                                            <span>lifepath.health/clinic</span>
                                            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">98% Satisfaction</span>
                                        </div>
                                        <div className="text-left space-y-1.5">
                                            <div className="text-lg font-bold text-white">A Simple Way to Save on Dental Care</div>
                                            <div className="text-xs text-gray-400">Expert healthcare & clinical booking software</div>
                                        </div>
                                    </div>
                                )}
                                {project.id === 'quantum' && (
                                    <div className="w-full h-full rounded-lg bg-gradient-to-br from-purple-900/40 via-black to-emerald-900/30 p-4 flex flex-col justify-between border border-purple-500/20">
                                        <div className="flex items-center justify-between text-xs text-purple-300 font-mono">
                                            <span>quantum.web3/tokenomics</span>
                                            <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">HFT Platform</span>
                                        </div>
                                        <div className="text-left space-y-1.5">
                                            <div className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-purple-400">
                                                QUANT TOKENOMICS
                                            </div>
                                            <div className="text-xs text-gray-400">DeFi Architecture & Next-Gen Smart Contracts</div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Card Bottom Meta */}
                            <div className="flex items-end justify-between z-10 pt-4 border-t border-white/10">
                                <div>
                                    <span className="text-[11px] font-semibold tracking-wider text-cyan-400 uppercase">
                                        {project.tag}
                                    </span>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 group-hover:text-cyan-300 transition-colors">
                                        {project.title}
                                    </h3>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:bg-cyan-500 group-hover:text-black group-hover:border-cyan-400 transition-all duration-300">
                                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Row - 3 Medium Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.filter(p => p.size === 'small').map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                            className={`group relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br ${project.gradient} backdrop-blur-xl ${project.borderColor} transition-all duration-500 p-6 flex flex-col justify-between min-h-[300px] hover:shadow-[0_0_25px_rgba(0,240,255,0.1)]`}
                        >
                            {/* Card Preview Box */}
                            <div className="w-full h-32 rounded-xl bg-black/50 border border-white/10 p-3 flex flex-col justify-between mb-6 group-hover:border-cyan-400/30 transition-colors">
                                <span className="text-[10px] font-mono text-gray-400">{project.id}.demo/app</span>
                                <div className="text-sm font-semibold text-white truncate">{project.title}</div>
                            </div>

                            {/* Card Bottom Meta */}
                            <div className="flex items-end justify-between z-10 pt-3 border-t border-white/10">
                                <div>
                                    <span className="text-[10px] font-semibold tracking-wider text-cyan-400 uppercase">
                                        {project.tag}
                                    </span>
                                    <h4 className="text-base sm:text-lg font-bold text-white mt-1 group-hover:text-cyan-300 transition-colors">
                                        {project.title}
                                    </h4>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300">
                                    <ArrowUpRight className="w-4 h-4" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
