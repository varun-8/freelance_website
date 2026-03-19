import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const processSteps = [
    {
        number: '01',
        title: 'Discovery',
        desc: 'Understanding client needs, aligning business goals, and defining project scope and technical requirements.',
    },
    {
        number: '02',
        title: 'Planning',
        desc: 'Designing scalable architecture, mapping system workflows, and creating high-fidelity UX/UI prototypes.',
    },
    {
        number: '03',
        title: 'Development',
        desc: 'Building high-performance, secure systems with clean code, utilizing modern frameworks and best practices.',
    },
    {
        number: '04',
        title: 'Deployment',
        desc: 'Seamlessly deploying your application on scalable cloud infrastructure or robust local servers.',
    },
    {
        number: '05',
        title: 'Support',
        desc: 'Providing continuous maintenance, rapid bug fixes, performance monitoring, and feature updates.',
    }
];

export default function Process() {
    return (
        <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative w-full z-10 overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-neonBlue/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

            <ScrollReveal type="fade-up" className="text-center mb-20 md:mb-32">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-blue-500">Process</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
                    A streamlined, transparent workflow designed to transform complex requirements into elegant, high-performance solutions.
                </p>
            </ScrollReveal>

            <div className="relative max-w-5xl mx-auto">
                {/* Central Timeline Line */}
                <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white/10 to-transparent md:-translate-x-1/2">
                    {/* Glowing animated line inside timeline */}
                    <motion.div
                        className="absolute top-0 left-0 w-full bg-gradient-to-b from-transparent via-neonBlue to-transparent shadow-[0_0_10px_#00f0ff]"
                        initial={{ height: "0%", opacity: 0 }}
                        whileInView={{ height: "100%", opacity: 1 }}
                        viewport={{ once: true, margin: '-20%' }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                </div>

                <div className="space-y-16 md:space-y-32">
                    {processSteps.map((step, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                            <ScrollReveal
                                key={step.number}
                                type={isEven ? "slide-right" : "slide-left"}
                                duration={0.8}
                                className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:justify-start' : 'md:justify-end'
                                    }`}
                            >
                                {/* Timeline Node / Dot */}
                                <div className="absolute left-[28px] md:left-1/2 w-14 h-14 rounded-full bg-black border border-white/20 flex items-center justify-center transform -translate-x-1/2 z-20 group transition-colors duration-300 hover:border-neonBlue hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] md:mt-0">
                                    <div className="w-3 h-3 rounded-full bg-neonBlue/50 group-hover:bg-neonBlue group-hover:shadow-[0_0_10px_#00f0ff] transition-all duration-300"></div>
                                </div>

                                {/* Step Card */}
                                <div
                                    className={`w-full md:w-[45%] pl-20 md:pl-0 pt-2 md:pt-0 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'
                                        }`}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                        className="relative p-8 rounded-3xl glass hover:border-white/20 transition-all duration-300 group overflow-hidden"
                                    >
                                        {/* Hover Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none text-gradient"></div>

                                        <div className={`text-6xl font-black text-white/5 absolute -top-4 ${isEven ? 'md:left-4 md:right-auto right-4 text-right' : 'right-4 text-right'} pointer-events-none transition-colors duration-500`}>
                                            {step.number}
                                        </div>

                                        <div className="relative z-10 mt-4">
                                            <div className="text-neonBlue font-mono text-sm tracking-widest mb-3 flex items-center gap-2 font-semibold">
                                                <span className={`${isEven ? 'md:ml-auto' : ''}`}>STEP {step.number}</span>
                                            </div>
                                            <h3 className="text-2xl font-bold mb-4 tracking-tight text-white">{step.title}</h3>
                                            <p className="text-gray-400 font-light leading-relaxed">
                                                {step.desc}
                                            </p>
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
