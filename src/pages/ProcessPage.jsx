import { motion } from 'framer-motion';
import Process from '../components/Process';
import CTA from '../components/CTA';

export default function ProcessPage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
        >
            <section className="pt-32 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                        The <span className="text-neonBlue">Process</span>.
                    </h1>
                    <p className="text-xl text-gray-400 font-light leading-relaxed">
                        A methodical, structured approach to producing world-class software and digital experiences.
                    </p>
                </motion.div>
            </section>

            <Process />
            <div className="pb-24">
                <CTA />
            </div>
        </motion.div>
    );
}
