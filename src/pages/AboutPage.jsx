import { motion } from 'framer-motion';
import CTA from '../components/CTA';
import ScrollReveal from '../components/ScrollReveal';

const specialties = [
    "custom business software",
    "cloud platforms",
    "web applications",
    "industry-specific systems"
];

// Reusable animation variants for Apple-style subtlety
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

export default function AboutPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full min-h-screen bg-black text-white overflow-hidden"
        >
            {/* Extremely subtle ambient glow to prevent pure black starkness */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none -z-10"></div>

            {/* Hero / Introduction */}
            <section className="pt-40 pb-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center flex flex-col items-center justify-center min-h-[60vh] bg-grid-pattern relative">
                <div className="absolute inset-0 bg-black/80 pointer-events-none -z-10"></div>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className="max-w-4xl"
                >
                    <div className="inline-block mb-10 px-5 py-2 rounded-full border border-white/10 bg-white/[0.02] text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">
                        About TechNova
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-10 leading-[1.05] text-white">
                        Transition into <br />
                        <span className="text-gradient">
                            powerful digital solutions.
                        </span>
                    </h1>
                    <p className="text-xl md:text-3xl text-gray-500 font-normal tracking-tight leading-relaxed max-w-3xl mx-auto">
                        TechNova helps businesses seamlessly transition from traditional systems into the modern era of computing.
                    </p>
                </motion.div>
            </section>

            {/* Specialties Section */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-white/[0.01]">
                <div className="max-w-6xl mx-auto text-center">
                    <ScrollReveal type="fade-up" className="mb-16 md:mb-24">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">We specialize in</h2>
                        <div className="w-16 h-1 bg-neonBlue mx-auto rounded-full"></div>
                    </ScrollReveal>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 md:gap-y-16 max-w-4xl mx-auto"
                    >
                        {specialties.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUp}
                                className="group cursor-default"
                            >
                                <div className="text-3xl md:text-4xl font-bold tracking-tight text-gray-300 group-hover:text-white transition-colors duration-500 ease-out">
                                    {item}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-40 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative items-center justify-center flex">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neonBlue/5 pointer-events-none -z-10"></div>

                <ScrollReveal type="scale-in" duration={0.8} className="max-w-5xl mx-auto text-center">
                    <div className="text-neonBlue text-sm font-bold tracking-widest uppercase mb-8">Out Mission</div>
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-tight text-white mb-10">
                        Empower businesses with modern technology.
                    </h2>
                </ScrollReveal>
            </section>

            <ScrollReveal type="fade-up">
                <CTA />
            </ScrollReveal>
        </motion.div>
    );
}
