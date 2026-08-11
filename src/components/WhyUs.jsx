import { motion } from 'framer-motion';
import { Gauge, Search, Palette, Target, ShieldCheck, HeartHandshake } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const features = [
    {
        num: '/01',
        title: 'Lightning Fast',
        desc: 'Sub-second loads, clean Core Web Vitals, and Lighthouse scores that quietly beat the competition.',
        icon: Gauge,
    },
    {
        num: '/02',
        title: 'SEO Done Right',
        desc: 'Built to rank. Semantic markup, schema, sitemaps and metadata dialled in on every single page.',
        icon: Search,
    },
    {
        num: '/03',
        title: 'Premium Design',
        desc: 'Dark-first looks, considered motion, and pixel-level detail. The kind of polish your brand actually deserves.',
        icon: Palette,
    },
    {
        num: '/04',
        title: 'Built to Convert',
        desc: 'Every section, every CTA, every line of copy is shaped to turn visitors into paying clients.',
        icon: Target,
    },
    {
        num: '/05',
        title: 'Secure by Default',
        desc: 'RLS, validated inputs and modern auth. Your data and your users stay protected, end to end.',
        icon: ShieldCheck,
    },
    {
        num: '/06',
        title: 'Long-term Partnership',
        desc: 'We don\'t ghost you after launch. We stick around to iterate, fix and grow the site with your business.',
        icon: HeartHandshake,
    },
];

export default function WhyUs() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <section className={`w-full py-28 relative overflow-hidden border-t z-10 transition-colors duration-300 ${
            isDark ? 'bg-black/80 border-white/10' : 'bg-slate-50 border-slate-200'
        }`}>
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Row */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-6"
                    >
                        <span className={`text-xs uppercase tracking-widest font-semibold ${
                            isDark ? 'text-cyan-400' : 'text-cyan-600'
                        }`}>
                            - WHY TECHNOVA
                        </span>
                        <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-3 tracking-tight leading-tight ${
                            isDark ? 'text-white' : 'text-slate-900'
                        }`}>
                            The difference <br />
                            is in the details.
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-6 lg:pt-8"
                    >
                        <p className={`text-lg sm:text-xl font-light leading-relaxed ${
                            isDark ? 'text-gray-400' : 'text-slate-600'
                        }`}>
                            We sweat the small stuff. Speed, type, motion, copy, structure. That's what separates a forgettable site from one that actually converts.
                        </p>
                    </motion.div>
                </div>

                {/* 6 Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className={`group relative p-8 rounded-2xl border backdrop-blur-xl transition-all duration-300 flex flex-col justify-between ${
                                    isDark
                                        ? 'bg-white/[0.02] border-white/10 hover:bg-white/[0.05] hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]'
                                        : 'bg-white border-slate-200 shadow-sm hover:bg-slate-50 hover:border-cyan-600/40 hover:shadow-md'
                                }`}
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-8">
                                        <div className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300 ${
                                            isDark
                                                ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-black'
                                                : 'bg-cyan-50 border-cyan-200 text-cyan-600 group-hover:scale-110 group-hover:bg-cyan-600 group-hover:text-white'
                                        }`}>
                                            <Icon size={22} />
                                        </div>
                                        <span className={`text-xs font-mono font-bold ${
                                            isDark ? 'text-cyan-400/70 group-hover:text-cyan-300' : 'text-cyan-600'
                                        }`}>
                                            {item.num}
                                        </span>
                                    </div>

                                    <h3 className={`text-2xl font-bold mb-3 transition-colors ${
                                        isDark ? 'text-white group-hover:text-cyan-300' : 'text-slate-900 group-hover:text-cyan-600'
                                    }`}>
                                        {item.title}
                                    </h3>
                                    <p className={`text-sm leading-relaxed font-light ${
                                        isDark ? 'text-gray-400' : 'text-slate-600'
                                    }`}>
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
