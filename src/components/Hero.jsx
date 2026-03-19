import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const yOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const yPostion = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

    return (
        <section ref={containerRef} className="relative min-h-[95vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden z-10 w-full bg-grid-pattern">
            <motion.div
                style={{ opacity: yOpacity, y: yPostion }}
                className="text-center max-w-5xl mx-auto"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-sm font-medium tracking-wide text-gray-300"
                >
                    Deploying the Future of Web & Software
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
                    className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.1]"
                >
                    Digital transformation <br className="hidden md:block" />
                    <span className="text-gradient-neon">engineered</span> for you.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
                >
                    We deliver premium static websites, dynamic web apps, cloud solutions, and bespoke software tailored for businesses, colleges, and the textile industry.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                    className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
                >
                    <Link
                        to="/contact"
                        className="group relative shimmer-btn"
                    >
                        Start Your Project
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </Link>
                    <Link
                        to="/services"
                        className="px-8 py-4 text-sm border border-white/10 text-gray-300 font-medium rounded-full hover:bg-white/5 hover:text-white transition-all duration-300 backdrop-blur-sm"
                    >
                        Explore Services
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}
