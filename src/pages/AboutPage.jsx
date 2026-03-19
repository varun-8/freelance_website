import { motion } from 'framer-motion';
import CTA from '../components/CTA';
import ScrollReveal from '../components/ScrollReveal';
import { Code2, Zap, Users, Target, Rocket, Award, TrendingUp, CheckCircle2 } from 'lucide-react';

const specialties = [
    { icon: Code2, title: "Custom Business Software", desc: "Tailored solutions designed specifically for your business needs" },
    { icon: Zap, title: "Cloud Platforms", desc: "Scalable, secure infrastructure for enterprise growth" },
    { icon: TrendingUp, title: "Web Applications", desc: "Modern, fast, and responsive digital experiences" },
    { icon: Target, title: "Industry-Specific Systems", desc: "Domain expertise across multiple sectors" }
];

const stats = [
    { number: "50+", label: "Projects Completed", icon: Code2 },
    { number: "100%", label: "Client Satisfaction", icon: Award },
    { number: "8+", label: "Years Experience", icon: Rocket },
    { number: "24/7", label: "Support Available", icon: Users }
];

const values = [
    { icon: Target, title: "Precision", desc: "Meticulous attention to every detail" },
    { icon: Zap, title: "Performance", desc: "Speed and efficiency in everything we build" },
    { icon: Users, title: "Partnership", desc: "We succeed when you succeed" },
    { icon: Award, title: "Excellence", desc: "Highest standards in all deliverables" }
];

// Animation variants
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
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
            {/* Ambient glows */}
            <div className="fixed inset-0 pointer-events-none -z-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-neonBlue/10 rounded-full blur-[150px]"></div>
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-900/10 rounded-full blur-[150px]"></div>
            </div>

            {/* Hero Section */}
            <section className="relative pt-40 pb-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-neonBlue/30 bg-neonBlue/5">
                        <Rocket className="w-4 h-4 text-neonBlue" />
                        <span className="text-xs font-semibold tracking-[0.15em] text-neonBlue uppercase">About TechNova</span>
                    </div>

                    <motion.h1
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1.1]"
                    >
                        We Build the <br />
                        <span className="text-gradient-neon">Future of Tech</span>
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        From concept to deployment, we engineer innovative digital solutions that transform businesses and drive measurable impact.
                    </motion.p>
                </motion.div>
            </section>

            {/* Stats Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-y border-white/5 bg-white/[0.02]">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {stats.map((stat, i) => {
                            const Icon = stat.icon;
                            return (
                                <motion.div
                                    key={i}
                                    variants={scaleIn}
                                    className="flex flex-col items-center text-center group"
                                >
                                    <div className="mb-4 p-3 rounded-lg bg-neonBlue/10 group-hover:bg-neonBlue/20 transition-colors duration-300">
                                        <Icon className="w-6 h-6 text-neonBlue" />
                                    </div>
                                    <div className="text-3xl md:text-4xl font-black text-white mb-1">{stat.number}</div>
                                    <p className="text-sm text-gray-400">{stat.label}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="relative py-32 px-4 sm:px-6 lg:px-8 border-b border-white/5">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal type="fade-up">
                            <div>
                                <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-neonBlue/10 border border-neonBlue/20">
                                    <span className="w-2 h-2 bg-neonBlue rounded-full"></span>
                                    <span className="text-xs font-semibold text-neonBlue uppercase tracking-wider">Our Story</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-white">
                                    Building Tomorrow's Solutions Today
                                </h2>
                                <p className="text-gray-400 text-lg leading-relaxed mb-4">
                                    Founded with a mission to democratize advanced technology, TechNova began as a small team of passionate developers with a bold vision. Today, we're recognized as a trusted partner for enterprises seeking digital transformation.
                                </p>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    We don't just write code—we craft solutions that solve real business challenges, accelerate growth, and unlock new possibilities for our clients.
                                </p>
                            </div>
                        </ScrollReveal>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInRight}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-neonBlue/20 to-blue-900/10 rounded-2xl blur-2xl"></div>
                            <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/10 p-12 flex flex-col items-center justify-center min-h-[400px]">
                                <Rocket className="w-24 h-24 text-neonBlue/30 mb-6" />
                                <p className="text-center text-gray-300 font-semibold text-lg">Innovation Driven. Results Focused.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="relative py-32 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-white/[0.01]">
                <div className="max-w-6xl mx-auto">
                    <ScrollReveal type="fade-up" className="mb-20 text-center">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">Our Core Values</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">Guiding principles that define how we work</p>
                    </ScrollReveal>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {values.map((value, i) => {
                            const Icon = value.icon;
                            return (
                                <motion.div
                                    key={i}
                                    variants={fadeUp}
                                    className="group p-8 rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-neonBlue/50 transition-all duration-300 hover:bg-gradient-to-br hover:from-neonBlue/10 hover:to-white/[0.02]"
                                >
                                    <Icon className="w-10 h-10 text-neonBlue mb-4 group-hover:scale-110 transition-transform duration-300" />
                                    <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Specialties Section */}
            <section className="relative py-32 px-4 sm:px-6 lg:px-8 border-b border-white/5">
                <div className="max-w-6xl mx-auto">
                    <ScrollReveal type="fade-up" className="mb-20 text-center">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">What We Specialize In</h2>
                        <p className="text-gray-400 text-lg">Comprehensive expertise across diverse domains</p>
                    </ScrollReveal>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {specialties.map((specialty, i) => {
                            const Icon = specialty.icon;
                            return (
                                <motion.div
                                    key={i}
                                    variants={fadeUp}
                                    className="group p-8 rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent hover:from-neonBlue/10 hover:border-neonBlue/50 transition-all duration-300 cursor-default"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 p-3 rounded-lg bg-neonBlue/20 group-hover:bg-neonBlue/30 transition-colors duration-300">
                                            <Icon className="w-6 h-6 text-neonBlue" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neonBlue transition-colors duration-300">
                                                {specialty.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm leading-relaxed">{specialty.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="relative py-32 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-white/[0.01]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInLeft}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-neonBlue/10 rounded-2xl blur-2xl"></div>
                            <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/10 p-12 flex flex-col items-center justify-center min-h-[400px]">
                                <Users className="w-24 h-24 text-blue-400/30 mb-6" />
                                <p className="text-center text-gray-300 font-semibold text-lg">Trusted Partnerships</p>
                            </div>
                        </motion.div>

                        <ScrollReveal type="fade-up">
                            <div>
                                <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-neonBlue/10 border border-neonBlue/20">
                                    <span className="w-2 h-2 bg-neonBlue rounded-full"></span>
                                    <span className="text-xs font-semibold text-neonBlue uppercase tracking-wider">Why Us</span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8 text-white">
                                    Your Success is Our Mission
                                </h2>
                                <ul className="space-y-4">
                                    {[
                                        "Proven expertise with Fortune 500 clients",
                                        "Agile methodology for rapid innovation",
                                        "Advanced security and compliance protocols",
                                        "Transparent communication throughout projects",
                                        "Scalable solutions built to grow with you"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-300">
                                            <CheckCircle2 className="w-5 h-5 text-neonBlue flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="relative py-40 px-4 sm:px-6 lg:px-8 border-b border-white/5">
                <div className="absolute inset-0 bg-gradient-to-b from-neonBlue/5 to-transparent pointer-events-none -z-10"></div>
                <ScrollReveal type="scale-in" className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 mb-8 px-3 py-1 rounded-full bg-neonBlue/10 border border-neonBlue/20">
                        <span className="w-2 h-2 bg-neonBlue rounded-full"></span>
                        <span className="text-xs font-semibold text-neonBlue uppercase tracking-wider">Our Mission</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight text-white mb-6">
                        Empower Businesses Everywhere
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                        We believe every organization deserves access to world-class technology and expert guidance to thrive in the digital age.
                    </p>
                </ScrollReveal>
            </section>

            {/* CTA */}
            <ScrollReveal type="fade-up">
                <CTA />
            </ScrollReveal>
        </motion.div>
    );
}
