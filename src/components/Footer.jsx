import { Link } from 'react-router-dom';
import { Mail, MessageCircle, ArrowUpRight, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className={`relative z-10 pt-20 pb-12 overflow-hidden border-t transition-colors duration-300 ${
            isDark
                ? 'bg-black text-white border-white/10'
                : 'bg-slate-50 text-slate-900 border-slate-200'
        }`}>
            {/* Top Cyan Accent Stroke */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70 shadow-[0_0_15px_rgba(0,240,255,0.4)]"></div>

            {/* Ambient Lighting */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none -z-10 ${
                isDark ? 'bg-cyan-500/5' : 'bg-cyan-500/10'
            }`} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Brand Column (Spans 4) */}
                    <ScrollReveal type="fade-up" duration={0.8} delay={0} className="lg:col-span-4 flex flex-col justify-between">
                        <div>
                            <Link to="/" onClick={scrollToTop} className="inline-flex items-center gap-2.5 group">
                                <div className={`p-2 rounded-md border transition-colors ${
                                    isDark
                                        ? 'bg-white/5 border-cyan-500/30 group-hover:border-cyan-400'
                                        : 'bg-cyan-50 border-cyan-200 group-hover:border-cyan-400'
                                }`}>
                                    <Zap size={20} className={isDark ? 'text-cyan-400' : 'text-cyan-600'} />
                                </div>
                                <span className={`text-2xl font-extrabold tracking-tight ${
                                    isDark ? 'text-white' : 'text-slate-900'
                                }`}>
                                    Tech<span className={isDark ? 'text-cyan-400' : 'text-cyan-600'}>Nova</span>
                                </span>
                            </Link>
                            <p className={`mt-6 text-sm leading-relaxed max-w-sm ${
                                isDark ? 'text-slate-400 font-light' : 'text-slate-600 font-normal'
                            }`}>
                                Deploying next-generation digital products, cloud infrastructure, custom ERPs, and high-performance software systems.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Quick Links Column (Spans 2) */}
                    <ScrollReveal type="fade-up" duration={0.8} delay={0.1} className="lg:col-span-2">
                        <h4 className={`font-bold mb-6 tracking-widest text-xs uppercase ${
                            isDark ? 'text-cyan-400' : 'text-cyan-600'
                        }`}>
                            Quick Links
                        </h4>
                        <ul className={`space-y-3.5 font-medium text-sm ${
                            isDark ? 'text-slate-300' : 'text-slate-700'
                        }`}>
                            <li>
                                <Link to="/" onClick={scrollToTop} className={isDark ? 'hover:text-cyan-300' : 'hover:text-cyan-600'}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" onClick={scrollToTop} className={isDark ? 'hover:text-cyan-300' : 'hover:text-cyan-600'}>
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" onClick={scrollToTop} className={isDark ? 'hover:text-cyan-300' : 'hover:text-cyan-600'}>
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/pricing" onClick={scrollToTop} className={isDark ? 'hover:text-cyan-300' : 'hover:text-cyan-600'}>
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" onClick={scrollToTop} className={isDark ? 'hover:text-cyan-300' : 'hover:text-cyan-600'}>
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </ScrollReveal>

                    {/* Specialties Column (Spans 3) */}
                    <ScrollReveal type="fade-up" duration={0.8} delay={0.2} className="lg:col-span-3">
                        <h4 className={`font-bold mb-6 tracking-widest text-xs uppercase ${
                            isDark ? 'text-cyan-400' : 'text-cyan-600'
                        }`}>
                            Specialties
                        </h4>
                        <ul className={`space-y-3.5 text-sm ${
                            isDark ? 'text-slate-300 font-light' : 'text-slate-700 font-normal'
                        }`}>
                            <li className="group flex items-center cursor-pointer">
                                <ArrowUpRight className={`mr-1.5 w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ${
                                    isDark ? 'text-cyan-400' : 'text-cyan-600'
                                }`} />
                                <span className={isDark ? 'group-hover:text-white' : 'group-hover:text-slate-900'}>Textile Industry ERPs</span>
                            </li>
                            <li className="group flex items-center cursor-pointer">
                                <ArrowUpRight className={`mr-1.5 w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ${
                                    isDark ? 'text-cyan-400' : 'text-cyan-600'
                                }`} />
                                <span className={isDark ? 'group-hover:text-white' : 'group-hover:text-slate-900'}>Web Applications & SaaS</span>
                            </li>
                            <li className="group flex items-center cursor-pointer">
                                <ArrowUpRight className={`mr-1.5 w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ${
                                    isDark ? 'text-cyan-400' : 'text-cyan-600'
                                }`} />
                                <span className={isDark ? 'group-hover:text-white' : 'group-hover:text-slate-900'}>Mobile iOS & Android</span>
                            </li>
                            <li className="group flex items-center cursor-pointer">
                                <ArrowUpRight className={`mr-1.5 w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ${
                                    isDark ? 'text-cyan-400' : 'text-cyan-600'
                                }`} />
                                <span className={isDark ? 'group-hover:text-white' : 'group-hover:text-slate-900'}>Cloud & DevOps Platforms</span>
                            </li>
                            <li className="group flex items-center cursor-pointer">
                                <ArrowUpRight className={`mr-1.5 w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ${
                                    isDark ? 'text-cyan-400' : 'text-cyan-600'
                                }`} />
                                <span className={isDark ? 'group-hover:text-white' : 'group-hover:text-slate-900'}>Custom Business Software</span>
                            </li>
                        </ul>
                    </ScrollReveal>

                    {/* Contact Column (Spans 3) */}
                    <ScrollReveal type="fade-up" duration={0.8} delay={0.3} className="lg:col-span-3">
                        <h4 className={`font-bold mb-6 tracking-widest text-xs uppercase ${
                            isDark ? 'text-cyan-400' : 'text-cyan-600'
                        }`}>
                            Get in Touch
                        </h4>

                        <div className="space-y-4">
                            <a
                                href="mailto:hello@technova.com"
                                className={`flex items-center space-x-3.5 group p-3 rounded-xl border transition-all ${
                                    isDark
                                        ? 'bg-white/[0.05] border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.1]'
                                        : 'bg-white border-slate-200 hover:border-cyan-500 hover:shadow-sm'
                                }`}
                            >
                                <div className={`w-9 h-9 rounded-lg border flex items-center justify-center group-hover:scale-110 transition-transform ${
                                    isDark
                                        ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
                                        : 'bg-cyan-50 border-cyan-200 text-cyan-600'
                                }`}>
                                    <Mail size={16} />
                                </div>
                                <div className="flex flex-col">
                                    <span className={`text-[10px] font-semibold uppercase tracking-wider ${
                                        isDark ? 'text-slate-400' : 'text-slate-500'
                                    }`}>Email</span>
                                    <span className={`text-xs font-semibold ${
                                        isDark ? 'text-slate-200 group-hover:text-white' : 'text-slate-900 group-hover:text-cyan-600'
                                    }`}>hello@technova.com</span>
                                </div>
                            </a>

                            <a
                                href="https://wa.me/1234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center space-x-3.5 group p-3 rounded-xl border transition-all ${
                                    isDark
                                        ? 'bg-white/[0.05] border-white/10 hover:border-emerald-500/40 hover:bg-white/[0.1]'
                                        : 'bg-white border-slate-200 hover:border-emerald-500 hover:shadow-sm'
                                }`}
                            >
                                <div className={`w-9 h-9 rounded-lg border flex items-center justify-center group-hover:scale-110 transition-transform ${
                                    isDark
                                        ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                                        : 'bg-emerald-50 border-emerald-200 text-emerald-600'
                                }`}>
                                    <MessageCircle size={16} />
                                </div>
                                <div className="flex flex-col">
                                    <span className={`text-[10px] font-semibold uppercase tracking-wider ${
                                        isDark ? 'text-slate-400' : 'text-slate-500'
                                    }`}>WhatsApp</span>
                                    <span className={`text-xs font-semibold ${
                                        isDark ? 'text-slate-200 group-hover:text-white' : 'text-slate-900 group-hover:text-emerald-600'
                                    }`}>+1 (555) 123-4567</span>
                                </div>
                            </a>
                        </div>
                    </ScrollReveal>

                </div>

                {/* Bottom Bar */}
                <div className={`pt-8 border-t flex flex-col md:flex-row justify-between items-center text-xs font-light ${
                    isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-600'
                }`}>
                    <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} TechNova Solutions. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <Link to="/" className={isDark ? 'hover:text-cyan-400' : 'hover:text-cyan-600'}>
                            Privacy Policy
                        </Link>
                        <Link to="/" className={isDark ? 'hover:text-cyan-400' : 'hover:text-cyan-600'}>
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
