import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function CTA() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 w-full">
            <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8 }}
                className={`p-10 md:p-16 rounded-3xl border text-center relative overflow-hidden backdrop-blur-xl transition-colors duration-300 ${
                    isDark
                        ? 'bg-white/[0.03] border-white/10 shadow-lg'
                        : 'bg-white border-slate-300 shadow-xl shadow-slate-200/50'
                }`}
            >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-full max-h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="relative z-10">
                    <h2 className={`text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight ${
                        isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                        Ready to scale your <br className="hidden md:block" /> digital presence?
                    </h2>
                    <p className={`text-lg md:text-xl font-normal mb-8 max-w-2xl mx-auto ${
                        isDark ? 'text-gray-400' : 'text-slate-700'
                    }`}>
                        Get in touch to discuss your next project, from specialized textile ERPs to complex enterprise software.
                    </p>
                    <Link
                        to="/contact"
                        className={`group inline-flex items-center px-8 py-4 font-bold rounded-md transition-all duration-300 ${
                            isDark
                                ? 'bg-cyan-400 hover:bg-cyan-300 text-black shadow-[0_0_25px_rgba(0,240,255,0.3)] hover:shadow-[0_0_40px_rgba(0,240,255,0.5)]'
                                : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-md shadow-cyan-600/30'
                        }`}
                    >
                        Contact Engineering Team
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
