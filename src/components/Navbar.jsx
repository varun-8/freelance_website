import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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
            className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${scrolled
                    ? 'bg-black/60 backdrop-blur-2xl border-white/5 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
                    : 'bg-transparent border-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center relative z-50">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold tracking-tighter cursor-pointer group flex items-center gap-1">
                    Tech<span className="text-neonBlue transition-colors duration-300 group-hover:text-blue-400 group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]">Nova</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-1">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`relative px-4 py-2 text-sm tracking-wide transition-colors duration-300 font-medium group ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                <span className="relative z-10 group-hover:text-neonBlue transition-colors duration-300">{link.name}</span>

                                {/* Active Link Indicator */}
                                {isActive && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute bottom-0 left-0 w-full h-[2px] bg-neonBlue shadow-[0_0_8px_rgba(0,240,255,0.8)]"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}

                                {/* Hover Indicator for non-active links */}
                                {!isActive && (
                                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-neonBlue/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link
                        to="/contact"
                        className="shimmer-btn h-10 px-5 text-sm"
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden relative z-50 p-2 text-gray-300 hover:text-white transition-colors"
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

            {/* Mobile Nav Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 w-full h-screen bg-black/95 backdrop-blur-3xl md:hidden overflow-hidden flex flex-col pt-32 px-6 z-40"
                    >
                        <div className="flex flex-col space-y-6 flex-grow">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + (i * 0.1), ease: "easeOut" }}
                                >
                                    <Link
                                        to={link.path}
                                        className={`text-4xl font-bold tracking-tighter relative group block w-fit ${location.pathname === link.path ? 'text-white' : 'text-gray-400 hover:text-white'
                                            }`}
                                    >
                                        <span className="group-hover:text-neonBlue transition-colors duration-300">{link.name}</span>
                                        {location.pathname === link.path && (
                                            <span className="absolute -bottom-1 left-0 w-1/2 h-[3px] bg-neonBlue shadow-[0_0_10px_rgba(0,240,255,0.8)]" />
                                        )}
                                        {/* Hover Indicator for mobile non-active */}
                                        {location.pathname !== link.path && (
                                            <div className="absolute -bottom-1 left-0 w-1/2 h-[3px] bg-neonBlue/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                        )}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + (navLinks.length * 0.1), ease: "easeOut" }}
                                className="w-full pt-10 mt-auto pb-12"
                            >
                                <Link
                                    to="/contact"
                                    className="block w-full text-center py-4 text-black bg-neonBlue hover:bg-white transition-colors duration-300 font-bold tracking-tighter rounded-xl text-xl shadow-[0_0_20px_rgba(0,240,255,0.3)]"
                                >
                                    Contact Us
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
