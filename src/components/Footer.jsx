import { Link } from 'react-router-dom';
import { Mail, MessageCircle, ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative z-10 bg-black pt-20 pb-10 overflow-hidden">
            {/* Top Glowing Divider */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neonBlue/50 to-transparent shadow-[0_0_15px_rgba(0,240,255,0.4)]"></div>

            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-neonBlue/5 rounded-full blur-[120px] -translate-y-1/2 -z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

                    {/* Brand Column (Spans 4) */}
                    <ScrollReveal type="fade-up" duration={0.8} delay={0} className="lg:col-span-4 flex flex-col justify-between">
                        <div>
                            <Link to="/" onClick={scrollToTop} className="text-3xl font-black tracking-tighter inline-flex items-center gap-1 group">
                                Tech<span className="text-neonBlue transition-colors duration-300 group-hover:text-blue-400 group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]">Nova</span>
                            </Link>
                            <p className="mt-6 text-gray-400 text-base leading-relaxed font-light max-w-sm">
                                Architecting the transition from traditional systems into powerful, high-performance digital solutions.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Quick Links Column (Spans 2) */}
                    <ScrollReveal type="fade-up" duration={0.8} delay={0.1} className="lg:col-span-2">
                        <h4 className="text-white font-semibold mb-6 tracking-widest text-xs uppercase">Quick Links</h4>
                        <ul className="space-y-4 text-gray-400 font-light text-sm">
                            <li className="group">
                                <Link to="/" onClick={scrollToTop} className="relative inline-block hover:text-white transition-colors duration-300">
                                    Home
                                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neonBlue transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                            <li className="group">
                                <Link to="/about" onClick={scrollToTop} className="relative inline-block hover:text-white transition-colors duration-300">
                                    About
                                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neonBlue transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                            <li className="group">
                                <Link to="/services" onClick={scrollToTop} className="relative inline-block hover:text-white transition-colors duration-300">
                                    Services
                                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neonBlue transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                            <li className="group">
                                <Link to="/process" onClick={scrollToTop} className="relative inline-block hover:text-white transition-colors duration-300">
                                    Process
                                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neonBlue transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                            <li className="group">
                                <Link to="/pricing" onClick={scrollToTop} className="relative inline-block hover:text-white transition-colors duration-300">
                                    Pricing
                                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neonBlue transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                        </ul>
                    </ScrollReveal>

                    {/* Services Summary Column (Spans 3) */}
                    <ScrollReveal type="fade-up" duration={0.8} delay={0.2} className="lg:col-span-3">
                        <h4 className="text-white font-semibold mb-6 tracking-widest text-xs uppercase">Specialties</h4>
                        <ul className="space-y-4 text-gray-400 font-light text-sm">
                            <li className="group flex items-center cursor-pointer">
                                <ArrowUpRight className="mr-2 text-neonBlue opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" size={14} />
                                <span className="group-hover:text-white group-hover:translate-x-1 transition-all duration-300">Custom Business Software</span>
                            </li>
                            <li className="group flex items-center cursor-pointer">
                                <ArrowUpRight className="mr-2 text-neonBlue opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" size={14} />
                                <span className="group-hover:text-white group-hover:translate-x-1 transition-all duration-300">Cloud Platforms</span>
                            </li>
                            <li className="group flex items-center cursor-pointer">
                                <ArrowUpRight className="mr-2 text-neonBlue opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" size={14} />
                                <span className="group-hover:text-white group-hover:translate-x-1 transition-all duration-300">Dynamic Web Applications</span>
                            </li>
                            <li className="group flex items-center cursor-pointer">
                                <ArrowUpRight className="mr-2 text-neonBlue opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" size={14} />
                                <span className="group-hover:text-white group-hover:translate-x-1 transition-all duration-300">Textile ERP Systems</span>
                            </li>
                            <li className="group flex items-center cursor-pointer">
                                <ArrowUpRight className="mr-2 text-neonBlue opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" size={14} />
                                <span className="group-hover:text-white group-hover:translate-x-1 transition-all duration-300">Subscription & Billing</span>
                            </li>
                        </ul>
                    </ScrollReveal>

                    {/* Contact Column (Spans 3) */}
                    <ScrollReveal type="fade-up" duration={0.8} delay={0.3} className="lg:col-span-3">
                        <h4 className="text-white font-semibold mb-6 tracking-widest text-xs uppercase">Get in Touch</h4>

                        <div className="space-y-6">
                            <a
                                href="mailto:hello@technova.com"
                                className="flex items-center space-x-4 group p-3 -ml-3 rounded-xl hover:bg-white/5 transition-colors duration-300"
                            >
                                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-neonBlue group-hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all duration-300">
                                    <Mail className="text-gray-400 group-hover:text-neonBlue transition-colors duration-300" size={18} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-0.5">Email</span>
                                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">hello@technova.com</span>
                                </div>
                            </a>

                            <a
                                href="https://wa.me/1234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-4 group p-3 -ml-3 rounded-xl hover:bg-white/5 transition-colors duration-300"
                            >
                                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-[#25D366] group-hover:shadow-[0_0_15px_rgba(37,211,102,0.3)] transition-all duration-300">
                                    <MessageCircle className="text-gray-400 group-hover:text-[#25D366] transition-colors duration-300" size={18} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-0.5">WhatsApp</span>
                                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">+1 (555) 123-4567</span>
                                </div>
                            </a>
                        </div>
                    </ScrollReveal>

                </div>

                {/* Bottom Bar with Neon Divider */}
                <div className="relative pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-light mt-16">
                    {/* Inner minimal divider */}
                    <div className="absolute top-0 left-0 w-full h-px bg-white/10"></div>

                    <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} TechNova. Architecture for the Future.</p>
                    <div className="flex space-x-8">
                        <Link to="/" className="hover:text-neonBlue transition-colors duration-300 relative group">
                            Privacy Policy
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neonBlue transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link to="/" className="hover:text-neonBlue transition-colors duration-300 relative group">
                            Terms of Service
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neonBlue transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
