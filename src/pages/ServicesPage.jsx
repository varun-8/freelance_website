import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
    Layers,
    ShieldCheck,
    Lock,
    Clock,
    CheckCircle2,
    ArrowRight,
    Scissors,
    ShoppingBag,
    Utensils,
    Building2,
    Rocket,
    Briefcase,
    Smartphone,
    Award,
    Sparkles
} from 'lucide-react';
import Services from '../components/Services';
import CTA from '../components/CTA';
import ScrollReveal from '../components/ScrollReveal';
import { useTheme } from '../context/ThemeContext';
import servicesHeaderImg from '../assets/services_header.png';

const trustStats = [
    { value: '100+', label: 'Digital Products Shipped' },
    { value: '99.9%', label: 'System Uptime SLA' },
    { value: '100%', label: 'Source Code Ownership' },
    { value: '30-60 Days', label: 'Complimentary SLA Warranty' },
];

const valuePillars = [
    {
        title: 'Fixed-Scope Guarantee',
        desc: 'Clear upfront pricing with defined milestones. No surprise invoices or unexpected scope costs.',
        icon: Lock,
    },
    {
        title: 'Rapid Agile Sprints',
        desc: 'Shipped in weeks, not months. We deliver working prototypes quickly to accelerate your time-to-market.',
        icon: Clock,
    },
    {
        title: 'Full IP & Code Ownership',
        desc: 'Upon project completion, you retain 100% intellectual property rights and full Git repository access.',
        icon: ShieldCheck,
    },
    {
        title: 'Post-Launch SLA Support',
        desc: 'Includes 30 to 60 days of free technical support, performance tuning, and bug fix warranty.',
        icon: Award,
    },
];

const industryShowcaseSectors = [
    {
        id: 'retail',
        label: 'Manufacturing & Commerce',
        solutions: [
            { title: 'Textile ERP & Loom Management', desc: 'Real-time production tracking across weaving, spinning, and loom operations.', icon: Scissors, features: ['Real-time loom tracking', 'Shift & yield analytics', 'Downtime alerts'] },
            { title: 'Full eCommerce Storefront', desc: 'High-converting online store with seamless checkout and inventory sync.', icon: ShoppingBag, features: ['Sub-second page speeds', 'Custom cart & checkout', 'Dynamic promo engine'] },
        ],
    },
    {
        id: 'hospitality',
        label: 'Food & Hospitality',
        solutions: [
            { title: 'Digital Menu & Ordering System', desc: 'QR code menus, table ordering, and instant kitchen ticket printing.', icon: Utensils, features: ['Contactless QR ordering', 'Instant kitchen ticket print', 'Item availability control'] },
            { title: 'Multi-Resource Booking Calendar', desc: 'Book rooms, equipment, doctors, or staff without double-bookings.', icon: Clock, features: ['No double-booking engine', 'Multi-staff availability grid', 'Buffer time locks'] },
        ],
    },
    {
        id: 'services',
        label: 'Healthcare & Services',
        solutions: [
            { title: 'Property Listing & CRM Portal', desc: 'High-converting property showcases with location maps and lead tracking.', icon: Building2, features: ['Interactive map search', 'Lead assignment Kanban', 'Site visit calendar'] },
            { title: 'Electronic Health Records (EHR)', desc: 'Secure cloud prescriptions, lab results, and patient medical history.', icon: ShieldCheck, features: ['Encrypted medical history', 'Digital Rx builder', 'Lab PDF attachments'] },
        ],
    },
    {
        id: 'tech',
        label: 'Tech & Enterprise',
        solutions: [
            { title: 'Rapid MVP Web App', desc: 'Production-ready MVP launched in weeks to validate your market.', icon: Rocket, features: ['Production-ready codebase', 'User auth & DB setup', 'Stripe payment sync'] },
            { title: 'Enterprise Portal & Intranet', desc: 'Centralized employee hub for company announcements, workflows, and tools.', icon: Briefcase, features: ['Company noticeboard feed', 'Single Sign-On (SSO)', 'Multi-tier approval chains'] },
        ],
    },
];

export default function ServicesPage() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const navigate = useNavigate();

    const [activeSector, setActiveSector] = useState('retail');

    const activeSectorObj = industryShowcaseSectors.find(s => s.id === activeSector) || industryShowcaseSectors[0];

    const handleInquireSolution = (title) => {
        navigate(`/contact?solution=${encodeURIComponent(title)}&category=Industry+Solution`);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`w-full min-h-screen relative overflow-hidden transition-colors duration-300 ${
                isDark ? 'bg-black text-white' : 'bg-slate-50 text-slate-900'
            }`}
        >
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-cyan-500/5 rounded-full blur-[180px] -z-10 pointer-events-none" />
            <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[160px] -z-10 pointer-events-none" />

            {/* EXECUTIVE HERO SECTION WITH MINIMALIST NATURAL HEADER IMAGE */}
            <section className={`pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b relative z-10 ${
                isDark ? 'border-white/10' : 'border-slate-200'
            }`}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left Headline & Content (7 Cols) */}
                    <ScrollReveal type="fade-up" duration={0.8} className="lg:col-span-7">
                        <div className="inline-flex items-center space-x-2 mb-6">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                            </span>
                            <span className={`text-xs uppercase tracking-widest font-extrabold px-4 py-1.5 rounded-full border ${
                                isDark ? 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20' : 'text-cyan-800 bg-cyan-100 border-cyan-300'
                            }`}>
                                ENTERPRISE SOFTWARE & SERVICES
                            </span>
                        </div>

                        <h1 className={`text-4xl sm:text-6xl lg:text-[4.25rem] font-extrabold tracking-tighter mb-6 leading-[1.1] ${
                            isDark ? 'text-white' : 'text-slate-950'
                        }`}>
                            Engineering <br />
                            <span className="text-gradient-neon">Digital Excellence</span> With Measurable ROI.
                        </h1>

                        <p className={`text-base sm:text-lg font-medium leading-relaxed max-w-xl mb-10 ${
                            isDark ? 'text-gray-300' : 'text-slate-700'
                        }`}>
                            Custom web applications, eCommerce architectures, mobile apps, and textile ERPs engineered for speed, scale, and profitability.
                        </p>

                        {/* Trust Metrics Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
                            {trustStats.map((stat, i) => (
                                <div key={i} className={`p-3.5 sm:p-4 rounded-2xl border backdrop-blur-xl ${
                                    isDark ? 'bg-white/[0.03] border-white/10' : 'bg-white border-slate-200 shadow-sm'
                                }`}>
                                    <div className={`text-xl sm:text-2xl font-black tracking-tight ${
                                        isDark ? 'text-cyan-400' : 'text-cyan-700'
                                    }`}>
                                        {stat.value}
                                    </div>
                                    <div className={`text-[11px] font-semibold mt-0.5 ${
                                        isDark ? 'text-gray-400' : 'text-slate-600'
                                    }`}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* Right Minimalist Natural Image Banner (5 Cols) */}
                    <ScrollReveal type="fade-up" delay={0.2} className="lg:col-span-5">
                        <div className="relative group">
                            {/* Subtle Ambient Glow behind Image */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-cyan-500/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition duration-500 pointer-events-none" />
                            
                            <div className={`relative rounded-3xl border overflow-hidden backdrop-blur-xl transition-all duration-300 ${
                                isDark
                                    ? 'bg-black/60 border-white/15 hover:border-cyan-400/40'
                                    : 'bg-white border-slate-300 shadow-xl shadow-slate-200/80 hover:border-cyan-600'
                            }`}>
                                <img
                                    src={servicesHeaderImg}
                                    alt="Minimalist Software Architecture Illustration"
                                    className="w-full h-[320px] sm:h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Minimalist Overlay Badge */}
                                <div className={`p-4 border-t flex items-center justify-between text-xs font-bold ${
                                    isDark ? 'bg-black/80 border-white/10 text-gray-300' : 'bg-slate-50 border-slate-200 text-slate-800'
                                }`}>
                                    <div className="flex items-center space-x-2">
                                        <Sparkles className="w-4 h-4 text-cyan-500" />
                                        <span>High-Performance Stack Architecture</span>
                                    </div>
                                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-500 border border-cyan-500/20">
                                        Enterprise Ready
                                    </span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* CUSTOMER VALUE PROPOSITION ("Why Clients Choose Us") */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
                <ScrollReveal type="fade-up" className="text-center max-w-3xl mx-auto mb-16">
                    <span className={`text-xs uppercase tracking-widest font-extrabold ${
                        isDark ? 'text-cyan-400' : 'text-cyan-700'
                    }`}>
                        - OUR VALUE PROPOSITION
                    </span>
                    <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 tracking-tight ${
                        isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                        Built With Trust, Speed & Quality.
                    </h2>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {valuePillars.map((pillar, i) => {
                        const Icon = pillar.icon;
                        return (
                            <ScrollReveal key={pillar.title} type="fade-up" delay={i * 0.1}>
                                <div className={`h-full p-6 sm:p-8 rounded-3xl border transition-all duration-300 ${
                                    isDark
                                        ? 'bg-white/[0.02] border-white/10 hover:border-cyan-400/50 hover:bg-black/60'
                                        : 'bg-white border-slate-200 shadow-md hover:border-cyan-600'
                                }`}>
                                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-6 ${
                                        isDark ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400' : 'bg-cyan-100 border-cyan-200 text-cyan-700'
                                    }`}>
                                        <Icon className="w-6 h-6" />
                                    </div>

                                    <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                        {pillar.title}
                                    </h3>

                                    <p className={`text-xs leading-relaxed ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                                        {pillar.desc}
                                    </p>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </section>

            {/* CORE SERVICES OFFERINGS */}
            <Services hideHeader={false} />

            {/* SEARCH-FREE INDUSTRY SOLUTIONS SHOWCASE */}
            <section className={`py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 border-t ${
                isDark ? 'border-white/10' : 'border-slate-200'
            }`}>
                <ScrollReveal type="fade-up" className="text-center max-w-3xl mx-auto mb-12">
                    <span className={`text-xs uppercase tracking-widest font-extrabold ${
                        isDark ? 'text-cyan-400' : 'text-cyan-700'
                    }`}>
                        - INDUSTRY SPECIFIC MODULES
                    </span>
                    <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 tracking-tight ${
                        isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                        Tailored Industry Solutions
                    </h2>
                    <p className={`text-sm sm:text-base mt-3 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                        Structured modules pre-architected for fast deployment across major sectors.
                    </p>
                </ScrollReveal>

                {/* Clean Sector Tabs */}
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
                    {industryShowcaseSectors.map((sec) => (
                        <button
                            key={sec.id}
                            onClick={() => setActiveSector(sec.id)}
                            className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                                activeSector === sec.id
                                    ? isDark
                                        ? 'bg-cyan-500 text-black font-extrabold shadow-[0_0_20px_rgba(0,240,255,0.4)]'
                                        : 'bg-cyan-700 text-white font-extrabold shadow-md'
                                    : isDark
                                        ? 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
                                        : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200 shadow-sm'
                            }`}
                        >
                            {sec.label}
                        </button>
                    ))}
                </div>

                {/* Industry Solutions Display Cards (Search-Free) */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeSector}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
                    >
                        {activeSectorObj.solutions.map((sol) => {
                            const SolIcon = sol.icon;
                            return (
                                <div
                                    key={sol.title}
                                    className={`p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 ${
                                        isDark
                                            ? 'bg-white/[0.02] border-white/10 hover:border-cyan-400/50 hover:bg-black/60'
                                            : 'bg-white border-slate-200 shadow-lg hover:border-cyan-600'
                                    }`}
                                >
                                    <div>
                                        <div className="flex items-center space-x-4 mb-6">
                                            <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 ${
                                                isDark ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400' : 'bg-cyan-100 border-cyan-200 text-cyan-700'
                                            }`}>
                                                <SolIcon className="w-6 h-6" />
                                            </div>
                                            <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                                {sol.title}
                                            </h3>
                                        </div>

                                        <p className={`text-xs leading-relaxed mb-6 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                                            {sol.desc}
                                        </p>

                                        <div className="space-y-2 mb-8 pt-4 border-t border-white/10">
                                            <p className={`text-[10px] font-extrabold uppercase tracking-wider ${
                                                isDark ? 'text-gray-400' : 'text-slate-500'
                                            }`}>
                                                Key Capabilities:
                                            </p>
                                            {sol.features.map((feat, i) => (
                                                <div key={i} className="flex items-center space-x-2 text-xs font-medium">
                                                    <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                                                    <span className={isDark ? 'text-gray-300' : 'text-slate-800'}>{feat}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => handleInquireSolution(sol.title)}
                                        className={`w-full py-3.5 px-4 rounded-2xl font-extrabold text-xs flex items-center justify-center space-x-2 transition-all border ${
                                            isDark
                                                ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:brightness-110'
                                                : 'bg-cyan-600 text-white hover:bg-cyan-700'
                                        }`}
                                    >
                                        <span>Inquire About This Solution</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>
            </section>

            {/* HIGH IMPACT CTA */}
            <ScrollReveal type="fade-up" className="relative z-20 pb-24">
                <CTA />
            </ScrollReveal>
        </motion.div>
    );
}
