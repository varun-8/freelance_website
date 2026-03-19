import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Process', path: '/process' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
                    ? 'py-3 bg-gradient-to-b from-black/70 to-black/40 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,240,255,0.08)]'
                    : 'py-6 bg-transparent border-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center relative z-50">
                {/* Premium Logo */}
                <Link to="/" className="flex items-center gap-2 cursor-pointer group">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-neonBlue to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300 -m-1"></div>
                        <div className="relative bg-black px-3 py-1.5 rounded-lg border border-neonBlue/30">
                            <Zap size={18} className="text-neonBlue" />
                        </div>
                    </div>
                    <span className="text-xl font-bold tracking-tighter text-white group-hover:text-neonBlue transition-colors duration-300">
                        Tech<span className="text-neonBlue">Nova</span>
                    </span>
                </Link>

                {/* Desktop Nav - Enhanced */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`relative px-4 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 group rounded-lg ${
                                    isActive 
                                        ? 'text-white bg-white/5 border border-neonBlue/30' 
                                        : 'text-gray-400 hover:text-white hover:bg-white/[0.02] border border-transparent'
                                }`}
                            >
                                <span className={`relative z-10 block transition-all duration-300 ${isActive ? 'text-neonBlue' : 'group-hover:text-neonBlue'}`}>
                                    {link.name}
                                </span>

                                {/* Active Link Glow */}
                                {isActive && (
                                    <motion.div
                                        layoutId="navbar-bg"
                                        className="absolute inset-0 bg-gradient-to-r from-neonBlue/10 to-blue-600/5 rounded-lg -z-10"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}

                                {/* Hover Glow for non-active */}
                                {!isActive && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-neonBlue/0 to-blue-600/0 group-hover:from-neonBlue/5 group-hover:to-blue-600/5 rounded-lg -z-10 transition-all duration-300" />
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* Premium CTA Button */}
                <div className="hidden md:block">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                            to="/contact"
                            className="relative group inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm text-black bg-gradient-to-r from-neonBlue to-blue-400 hover:from-neonBlue hover:to-cyan-400 transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] overflow-hidden"
                        >
                            <span className="relative z-10">Get Started</span>
                            <motion.div
                                animate={{ x: [0, 4, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="relative z-10"
                            >
                                →
                            </motion.div>
                        </Link>
                    </motion.div>
                </div>

                {/* Mobile Menu Toggle - Premium */}
                <button
                    className="md:hidden relative z-50 p-2 text-gray-300 hover:text-neonBlue transition-colors duration-300 hover:bg-white/5 rounded-lg"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={isOpen ? "close" : "open"}
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 90 }}
                            transition={{ duration: 0.2 }}
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </motion.div>
                    </AnimatePresence>
                </button>
            </div>

            {/* Premium Mobile Nav Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 w-full h-screen bg-gradient-to-b from-black/95 via-black/90 to-black/95 backdrop-blur-3xl md:hidden overflow-hidden flex flex-col pt-32 px-6 z-40"
                    >
                        {/* Background Gradient Accent */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-neonBlue/10 blur-[100px] pointer-events-none"></div>

                        <div className="flex flex-col space-y-8 flex-grow relative z-10">
                            {/* Navigation Links */}
                            <div className="space-y-4">
                                <h3 className="text-xs uppercase tracking-widest text-gray-500 font-semibold ml-2">Navigation</h3>
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + (i * 0.08), ease: "easeOut" }}
                                    >
                                        <Link
                                            to={link.path}
                                            className={`text-3xl font-bold tracking-tight relative group block py-3 px-4 rounded-lg transition-all duration-300 ${
                                                location.pathname === link.path 
                                                    ? 'text-neonBlue bg-neonBlue/10 border border-neonBlue/30' 
                                                    : 'text-gray-300 hover:text-white hover:bg-white/5 border border-transparent'
                                            }`}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {/* CTA Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + (navLinks.length * 0.08), ease: "easeOut" }}
                                className="w-full pt-8 mt-auto pb-12 space-y-4"
                            >
                                <Link
                                    to="/contact"
                                    className="block w-full text-center py-4 text-black bg-gradient-to-r from-neonBlue to-blue-400 hover:from-neonBlue hover:to-cyan-400 transition-all duration-300 font-bold tracking-tight rounded-xl text-lg shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)]"
                                >
                                    Get Started
                                </Link>
                                <p className="text-center text-xs text-gray-500 tracking-wide uppercase">Available 24/7</p>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
