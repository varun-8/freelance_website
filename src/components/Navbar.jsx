import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, ArrowRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

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
            className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
                scrolled
                    ? isDark
                        ? 'bg-black/90 backdrop-blur-2xl border-b border-white/10 py-3 shadow-xl'
                        : 'bg-white/95 backdrop-blur-2xl border-b border-slate-300 py-3 shadow-lg shadow-slate-200/60'
                    : isDark
                        ? 'bg-gradient-to-b from-black/90 via-black/40 to-transparent py-4 border-b border-white/5'
                        : 'bg-white/90 backdrop-blur-md py-4 border-b border-slate-200 shadow-sm'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center relative z-50">
                {/* Brand Logo - Sharp Modern Geometry */}
                <Link to="/" className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative">
                        <div className="absolute inset-0 bg-cyan-400/30 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className={`relative p-2 rounded-sm border transition-all duration-300 ${
                            isDark
                                ? 'bg-black/60 border-cyan-500/40 text-cyan-400 group-hover:border-cyan-400 group-hover:bg-cyan-500/10'
                                : 'bg-cyan-50 border-cyan-300 text-cyan-700 group-hover:border-cyan-600 group-hover:bg-cyan-100'
                        }`}>
                            <Zap size={18} />
                        </div>
                    </div>
                    <span className={`text-xl font-extrabold tracking-tighter uppercase transition-colors duration-300 ${
                        isDark ? 'text-white' : 'text-slate-950'
                    }`}>
                        Tech<span className={isDark ? 'text-cyan-400' : 'text-cyan-600'}>Nova</span>
                    </span>
                </Link>

                {/* Desktop Navigation Links - Crisp Underline & Smooth Indicator */}
                <div className="hidden md:flex items-center space-x-1">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`relative px-4 py-2 text-xs uppercase tracking-widest font-extrabold transition-all duration-300 rounded-sm ${
                                    isActive
                                        ? isDark ? 'text-cyan-400' : 'text-cyan-700'
                                        : isDark ? 'text-gray-300 hover:text-white' : 'text-slate-700 hover:text-slate-950'
                                }`}
                            >
                                <span className="relative z-10">{link.name}</span>

                                {/* Active Smooth Sliding Bottom Bar (Sharp Edge) */}
                                {isActive && (
                                    <motion.div
                                        layoutId="navbar-sharp-indicator"
                                        className={`absolute bottom-0 left-1 right-1 h-[2.5px] ${
                                            isDark
                                                ? 'bg-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.8)]'
                                                : 'bg-cyan-600 shadow-[0_2px_8px_rgba(2,132,199,0.5)]'
                                        }`}
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* Right Action Bar: Theme Switcher & Sharp CTA Button */}
                <div className="hidden md:flex items-center space-x-3">
                    {/* Sharp Geometric Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className={`p-2.5 rounded-sm border transition-all duration-300 ${
                            isDark
                                ? 'bg-white/5 border-white/10 text-gray-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-white/10'
                                : 'bg-slate-100 border-slate-300 text-slate-800 hover:text-cyan-700 hover:border-cyan-600 hover:bg-white'
                        }`}
                        title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                        aria-label="Toggle Theme"
                    >
                        {isDark ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-slate-800" />}
                    </button>

                    {/* Sharp Edge Primary Action Button */}
                    <Link
                        to="/contact"
                        className={`group inline-flex items-center space-x-2 px-5 py-2.5 rounded-sm font-extrabold text-xs uppercase tracking-wider transition-all duration-300 border ${
                            isDark
                                ? 'text-black bg-cyan-400 border-cyan-400 hover:bg-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.3)]'
                                : 'text-white bg-cyan-700 border-cyan-700 hover:bg-cyan-800 shadow-md shadow-cyan-700/25'
                        }`}
                    >
                        <span>Start Project</span>
                        <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                </div>

                {/* Mobile Hamburger & Theme Switcher */}
                <div className="flex items-center space-x-2 md:hidden">
                    <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-sm border ${
                            isDark ? 'bg-white/5 border-white/10 text-gray-300' : 'bg-white border-slate-300 text-slate-800'
                        }`}
                        aria-label="Toggle Theme"
                    >
                        {isDark ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-slate-800" />}
                    </button>

                    <button
                        className={`p-2 rounded-sm border transition-colors ${
                            isDark ? 'bg-white/5 border-white/10 text-gray-300' : 'bg-white border-slate-300 text-slate-800'
                        }`}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={isOpen ? "close" : "open"}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.2 }}
                            >
                                {isOpen ? <X size={22} /> : <Menu size={22} />}
                            </motion.div>
                        </AnimatePresence>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Navigation Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className={`fixed inset-x-0 top-[60px] border-b backdrop-blur-3xl md:hidden flex flex-col p-6 z-40 ${
                            isDark ? 'bg-black/95 border-white/15 text-white' : 'bg-white/95 border-slate-300 text-slate-900 shadow-2xl'
                        }`}
                    >
                        <div className="flex flex-col space-y-2">
                            {navLinks.map((link) => {
                                const isActive = location.pathname === link.path;
                                return (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className={`text-sm uppercase font-extrabold tracking-widest py-3 px-4 rounded-sm transition-all border ${
                                            isActive
                                                ? isDark
                                                    ? 'text-cyan-400 bg-cyan-500/10 border-cyan-500/40'
                                                    : 'text-cyan-800 bg-cyan-50 border-cyan-300'
                                                : isDark
                                                    ? 'text-gray-300 border-transparent hover:text-white hover:bg-white/5'
                                                    : 'text-slate-800 border-transparent hover:text-slate-950 hover:bg-slate-100'
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}

                            <div className={`pt-4 border-t mt-3 ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                                <Link
                                    to="/contact"
                                    className={`flex items-center justify-center space-x-2 w-full py-3.5 uppercase font-extrabold tracking-wider text-xs rounded-sm transition-all ${
                                        isDark
                                            ? 'text-black bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.3)]'
                                            : 'text-white bg-cyan-700 hover:bg-cyan-800 shadow-md'
                                    }`}
                                >
                                    <span>Start Project</span>
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
