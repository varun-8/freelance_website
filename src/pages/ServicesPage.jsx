import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';
import Services from '../components/Services';
import CTA from '../components/CTA';
import ScrollReveal from '../components/ScrollReveal';

export default function ServicesPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full min-h-screen bg-black overflow-hidden relative"
        >
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-neonBlue/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

            <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/5 relative z-10">
                <ScrollReveal type="fade-up" duration={0.8} className="max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-neonBlue text-sm font-medium tracking-wide mb-8">
                        <Layers size={16} />
                        <span>Core Capabilities</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-black tracking-tighter mb-8 leading-[1.1]">
                        Engineering <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-blue-500 hover:from-blue-400 hover:to-neonBlue transition-all duration-700">Digital</span> Excellence.
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl">
                        From scalable cloud architectures to custom enterprise software, TechNova builds premium digital products designed to scale, perform, and inspire absolute trust.
                    </p>
                </ScrollReveal>
            </section>

            {/* The actual Services Grid */}
            <div className="relative">
                {/* Secondary ambient glow behind the grid */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
                <Services hideHeader={true} />
            </div>

            <ScrollReveal type="fade-up" className="relative z-20 pb-24">
                <CTA />
            </ScrollReveal>
        </motion.div>
    );
}
