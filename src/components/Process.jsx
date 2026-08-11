import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { Search, Lightbulb, Code, Rocket, LifeBuoy } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const processSteps = [
    {
        number: '01',
        title: 'Discovery',
        desc: 'We dive deep into understanding your business, goals, and challenges. Through workshops and research, we define scope, requirements, and create a strategic roadmap.',
        icon: Search,
        duration: '1-2 weeks',
        deliverables: ['Project Roadmap', 'Requirements Document', 'Technology Stack']
    },
    {
        number: '02',
        title: 'Strategy & Design',
        desc: 'Our architects design scalable solutions while designers craft intuitive interfaces. We validate concepts through prototypes and gather feedback before development.',
        icon: Lightbulb,
        duration: '2-3 weeks',
        deliverables: ['Architecture Docs', 'UI/UX Designs', 'Prototypes']
    },
    {
        number: '03',
        title: 'Development',
        desc: 'Our expert developers build your solution using best practices, clean code, and modern frameworks. We follow agile sprints with regular demos and feedback loops.',
        icon: Code,
        duration: '4-8 weeks',
        deliverables: ['Production Code', 'Unit Tests', 'Documentation']
    },
    {
        number: '04',
        title: 'Testing & Launch',
        desc: 'Rigorous QA testing ensures performance, security, and reliability. We deploy to production with zero-downtime strategies and comprehensive monitoring.',
        icon: Rocket,
        duration: '1-2 weeks',
        deliverables: ['Test Reports', 'Deployment Guide', 'Monitoring Setup']
    },
    {
        number: '05',
        title: 'Support & Growth',
        desc: 'We provide ongoing maintenance, performance optimization, and continuous improvements. Our team stays engaged to help your product evolve with market needs.',
        icon: LifeBuoy,
        duration: 'Ongoing',
        deliverables: ['24/7 Support', 'Performance Reports', 'Feature Updates']
    }
];

export default function Process() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <section className={`py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative w-full z-10 overflow-hidden border-t transition-colors duration-300 ${
            isDark ? 'border-white/5 bg-black' : 'border-slate-200 bg-white text-slate-900'
        }`}>
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

            <ScrollReveal type="fade-up" className="text-center mb-24 md:mb-32">
                <h2 className={`text-4xl md:text-6xl font-black tracking-tighter mb-6 ${
                    isDark ? 'text-white' : 'text-slate-900'
                }`}>
                    <span className="text-gradient-neon">Five Steps to Success</span>
                </h2>
                <p className={`max-w-3xl mx-auto text-lg md:text-xl font-medium leading-relaxed ${
                    isDark ? 'text-gray-400' : 'text-slate-700'
                }`}>
                    A streamlined, collaborative workflow designed to deliver exceptional solutions while keeping you informed every step of the way.
                </p>
            </ScrollReveal>

            <div className="relative max-w-5xl mx-auto">
                {/* Central Timeline Line */}
                <div className={`absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-1/2 pointer-events-none ${
                    isDark ? 'bg-gradient-to-b from-transparent via-white/10 to-transparent' : 'bg-gradient-to-b from-transparent via-slate-300 to-transparent'
                }`}>
                    <motion.div
                        className="absolute top-0 left-0 w-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent shadow-[0_0_10px_#00f0ff]"
                        initial={{ height: "0%", opacity: 0 }}
                        whileInView={{ height: "100%", opacity: 1 }}
                        viewport={{ once: true, margin: '-20%' }}
                        transition={{ duration: 2.5, ease: "easeInOut" }}
                    />
                </div>

                <div className="space-y-20 md:space-y-32">
                    {processSteps.map((step, idx) => {
                        const Icon = step.icon;
                        const isEven = idx % 2 === 0;
                        return (
                            <ScrollReveal
                                key={step.number}
                                type={isEven ? "slide-right" : "slide-left"}
                                duration={0.8}
                                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                                    isEven ? 'md:justify-start' : 'md:justify-end'
                                }`}
                            >
                                {/* Timeline Node / Dot */}
                                <motion.div className={`absolute left-[28px] md:left-1/2 w-16 h-16 rounded-full border-2 flex items-center justify-center transform -translate-x-1/2 z-20 transition-all duration-300 group shadow-md ${
                                    isDark
                                        ? 'bg-black border-white/20 hover:border-cyan-400'
                                        : 'bg-white border-slate-300 hover:border-cyan-600'
                                }`}>
                                    <Icon className={`w-6 h-6 group-hover:scale-110 transition-transform duration-300 ${
                                        isDark ? 'text-cyan-400' : 'text-cyan-600'
                                    }`} />
                                </motion.div>

                                {/* Step Card */}
                                <div
                                    className={`w-full md:w-[calc(50%-3rem)] pl-20 md:pl-0 pt-2 md:pt-0 ${
                                        isEven ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'
                                    }`}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.02, y: -5 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                        className={`relative p-8 md:p-10 rounded-2xl border transition-all duration-300 group overflow-hidden z-10 shadow-md ${
                                            isDark
                                                ? 'bg-gradient-to-br from-white/[0.05] to-white/[0.02] border-white/10 hover:border-cyan-500/50'
                                                : 'bg-white border-slate-300 hover:border-cyan-600 shadow-slate-200/50'
                                        }`}
                                    >
                                        {/* Header */}
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-bold ${
                                                isDark ? 'bg-cyan-500/20 text-cyan-400' : 'bg-cyan-100 text-cyan-700'
                                            }`}>
                                                <span>{step.number}</span>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className={`text-2xl md:text-3xl font-black tracking-tight ${
                                                    isDark ? 'text-white' : 'text-slate-900'
                                                }`}>
                                                    {step.title}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Duration Badge */}
                                        <div className="mb-4">
                                            <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full border ${
                                                isDark
                                                    ? 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20'
                                                    : 'text-cyan-700 bg-cyan-50 border-cyan-300'
                                            }`}>
                                                {step.duration}
                                            </span>
                                        </div>

                                        {/* Description */}
                                        <p className={`leading-relaxed mb-6 text-base font-normal ${
                                            isDark ? 'text-gray-300' : 'text-slate-700'
                                        }`}>
                                            {step.desc}
                                        </p>

                                        {/* Deliverables */}
                                        <div className={`border-t pt-4 ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                                            <p className={`text-xs font-bold uppercase tracking-wider mb-3 ${
                                                isDark ? 'text-cyan-400' : 'text-cyan-700'
                                            }`}>
                                                Deliverables
                                            </p>
                                            <ul className="space-y-2">
                                                {step.deliverables.map((item, i) => (
                                                    <li key={i} className={`text-sm flex items-center gap-2 font-medium ${
                                                        isDark ? 'text-gray-400' : 'text-slate-700'
                                                    }`}>
                                                        <span className={`w-1.5 h-1.5 rounded-full ${
                                                            isDark ? 'bg-cyan-400' : 'bg-cyan-600'
                                                        }`}></span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
