import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTA() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 w-full">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8 }}
                className="glass p-12 md:p-20 rounded-[3rem] border border-white/10 text-center relative overflow-hidden"
            >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-full max-h-96 bg-neonBlue/10 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="relative z-10">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 leading-tight">
                        Ready to scale your <br className="hidden md:block" /> digital presence?
                    </h2>
                    <p className="text-xl text-gray-400 font-light mb-10 max-w-2xl mx-auto">
                        Get in touch to discuss your next project, from a lightning-fast static website to a complex cloud-native SaaS application.
                    </p>
                    <Link
                        to="/contact"
                        className="group inline-flex items-center px-8 py-4 bg-neonBlue text-black font-semibold rounded-full hover:bg-blue-400 transition-all duration-300 shadow-[0_0_30px_rgba(0,240,255,0.3)] hover:shadow-[0_0_50px_rgba(0,240,255,0.5)]"
                    >
                        Contact our engineering team
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
