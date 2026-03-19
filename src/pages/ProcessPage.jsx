import { motion } from 'framer-motion';
import Process from '../components/Process';
import CTA from '../components/CTA';
import ScrollReveal from '../components/ScrollReveal';
import { Zap, Target, Code2 } from 'lucide-react';

const highlights = [
    { icon: Target, title: "Clear Goals", desc: "Aligned objectives from day one" },
    { icon: Code2, title: "Expert Team", desc: "Specialized developers and architects" },
    { icon: Zap, title: "Fast Delivery", desc: "Agile sprints for rapid progress" }
];

export default function ProcessPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full bg-black text-white overflow-hidden"
        >
            {/* Ambient glows */}
            <div className="fixed inset-0 pointer-events-none -z-10">
                <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-neonBlue/10 rounded-full blur-[150px]"></div>
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-900/10 rounded-full blur-[150px]"></div>
            </div>

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-neonBlue/30 bg-neonBlue/5">
                        <span className="text-xs font-semibold tracking-[0.15em] text-neonBlue uppercase">How We Work</span>
                    </div>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter mb-6 leading-[1.1]">
                        Our Proven <br />
                        <span className="text-gradient-neon">Development Process</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed">
                        We follow a structured, transparent methodology that ensures quality, reliability, and exceptional results at every stage of your project.
                    </p>
                </motion.div>
            </section>

            {/* Highlights Section */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-white/5 bg-white/[0.02]">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {highlights.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-4 p-6 rounded-lg bg-white/[0.03] border border-white/5 hover:border-neonBlue/30 transition-all duration-300"
                                >
                                    <Icon className="w-6 h-6 text-neonBlue flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-white mb-1">{item.title}</h3>
                                        <p className="text-sm text-gray-400">{item.desc}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            <Process />

            {/* Timeline Info Section */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-gradient-to-b from-white/[0.01] to-transparent">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ScrollReveal type="fade-up" delay={0}>
                            <div className="p-8 rounded-xl border border-white/10 bg-white/[0.03]">
                                <div className="text-4xl font-black text-neonBlue mb-2">2-4 Weeks</div>
                                <p className="text-gray-400">Average project timeline from kickoff to first iteration</p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal type="fade-up" delay={0.1}>
                            <div className="p-8 rounded-xl border border-white/10 bg-white/[0.03]">
                                <div className="text-4xl font-black text-neonBlue mb-2">Weekly Syncs</div>
                                <p className="text-gray-400">Regular check-ins to track progress and address concerns</p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal type="fade-up" delay={0.2}>
                            <div className="p-8 rounded-xl border border-white/10 bg-white/[0.03]">
                                <div className="text-4xl font-black text-neonBlue mb-2">100% Agile</div>
                                <p className="text-gray-400">Flexible, iterative approach with continuous improvements</p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <div className="pb-24">
                <CTA />
            </div>
        </motion.div>
    );
}
