import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import CTA from '../components/CTA';

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full flex flex-col items-center"
        >
            <Hero />

            {/* Trust / Stats Banner */}
            <section className="w-full py-24 border-t border-b border-white/5 bg-black/40 backdrop-blur-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
                        {[
                            { label: 'Uptime', value: '99.9%' },
                            { label: 'Performance', value: '90+ LS' },
                            { label: 'Client Delivery', value: 'Record' },
                            { label: 'Tech Stack', value: 'Modern' },
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="flex flex-col items-center justify-center space-y-2"
                            >
                                <span className="text-4xl md:text-5xl font-bold tracking-tighter text-white">{stat.value}</span>
                                <span className="text-sm text-gray-500 uppercase tracking-widest font-semibold">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Services />
            <Process />
            <CTA />
        </motion.div>
    );
}
