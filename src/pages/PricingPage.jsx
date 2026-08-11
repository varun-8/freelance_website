import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
    Check,
    HelpCircle,
    Zap,
    Rocket,
    Building2,
    ShieldCheck,
    Clock,
    ChevronDown,
    ArrowRight,
    Calculator,
    CheckCircle2,
    Lock,
    Users,
    Code2,
    Sparkles
} from 'lucide-react';
import CTA from '../components/CTA';
import ScrollReveal from '../components/ScrollReveal';
import { useTheme } from '../context/ThemeContext';

const plans = [
    {
        name: 'MVP Launchpad',
        badge: 'Startup Favorite',
        scopeFocus: 'Fixed-Scope MVP & Prototype',
        desc: 'Ideal for early-stage startups and founders needing rapid market validation with production-ready software.',
        timeframe: '10 - 14 Days',
        icon: Rocket,
        features: [
            'Full Custom Web App / PWA',
            'Responsive UI & Mobile Polish',
            'User Authentication & Database',
            'Stripe / Razorpay Payment Sync',
            'Basic Admin Control Portal',
            '100% Source Code Ownership',
            '30-Day SLA Warranty & Support',
        ],
        popular: false,
    },
    {
        name: 'Growth & Scale',
        badge: 'Most Popular',
        scopeFocus: 'Full SaaS & Business Suite',
        desc: 'Comprehensive software architecture for scaling platforms, SaaS products, and established digital brands.',
        timeframe: '3 - 4 Weeks',
        icon: Zap,
        features: [
            'Advanced Custom Web & Mobile System',
            'High-Speed API & Third-Party Integrations',
            'Role-Based Access Control (RBAC)',
            'Real-Time Analytics & PDF Reporting',
            'SEO & Core Web Vitals Optimization',
            'Dedicated Lead Developer & PM',
            '60-Day Priority SLA Support',
        ],
        popular: true,
    },
    {
        name: 'Enterprise Suite',
        badge: 'Custom Architecture',
        scopeFocus: 'Bespoke Multi-System Architecture',
        desc: 'Uncompromised performance, multi-mill ERPs, IoT connectors, and enterprise cloud software infrastructure.',
        timeframe: 'Tailored Scope Timeline',
        icon: Building2,
        features: [
            'Bespoke Microservices Architecture',
            'IoT, Sensors & Hardware Connectors',
            'Legacy System Refactoring & Cloud Sync',
            'High-Security & Compliance Audits',
            'On-Premise / Multi-Cloud Setup',
            'Dedicated 24/7 Tech Team Allocation',
            'Unlimited Post-Launch SLA Support',
        ],
        popular: false,
    },
];

const projectTypes = [
    { id: 'landing', label: 'Showcase Site & Portfolio', scale: 'Core Scope', time: '3-5 Days', team: '1 Engineer + 1 UI Designer' },
    { id: 'webapp', label: 'Full Web Application', scale: 'Interactive App', time: '10-14 Days', team: '2 Engineers + 1 UI Designer + 1 PM' },
    { id: 'mobileapp', label: 'Native Mobile App (iOS & Android)', scale: 'Cross-Platform App', time: '2-3 Weeks', timeExpress: '10-12 Days', team: '2 Mobile Engineers + 1 Backend Dev + 1 PM' },
    { id: 'erp', label: 'Custom ERP / Industrial POS', scale: 'Enterprise Suite', time: '3-4 Weeks', timeExpress: '2 Weeks', team: '3 Engineers + 1 Architect + 1 PM' },
];

const featureOptions = [
    { id: 'auth', label: 'User Auth & Role Access Control' },
    { id: 'payments', label: 'Multi-Payment & Billing Engine' },
    { id: 'admin', label: 'Custom Admin Analytics Desk' },
    { id: 'realtime', label: 'Real-time Chat & Notifications' },
    { id: 'ai', label: 'AI Integration & Automation' },
    { id: 'multilingual', label: 'Multi-Currency & Multi-Language' },
];

const faqs = [
    {
        q: 'How are project proposals estimated?',
        a: 'We provide transparent, fixed-scope proposals based on your specific requirements, feature complexity, and target delivery timeframe. No hidden fees or unexpected billings.'
    },
    {
        q: 'Do I get full ownership of the source code?',
        a: 'Yes, 100%. Upon completion and project sign-off, you receive full intellectual property rights, Git repository access, database schemas, and deployment credentials.'
    },
    {
        q: 'What post-launch support is included?',
        a: 'Every project includes 30 to 60 days of complimentary technical support covering bug fixes, server optimizations, and technical guidance to ensure flawless operation.'
    },
    {
        q: 'Can we adjust features mid-development?',
        a: 'We follow agile development sprints. Any new features or adjustments during development are accommodated smoothly through transparent scope revisions.'
    },
    {
        q: 'What technologies do you build with?',
        a: 'We build with modern tech stacks: React, Next.js, Node.js, Python, Tailwind CSS, React Native, PostgreSQL, Redis, Docker, and AWS/Vercel cloud infrastructure.'
    },
];

export default function PricingPage() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const navigate = useNavigate();

    const [engagementModel, setEngagementModel] = useState('fixed'); // 'fixed' or 'dedicated'

    // Interactive Scope Estimator State
    const [selectedType, setSelectedType] = useState('webapp');
    const [selectedFeatures, setSelectedFeatures] = useState(['auth', 'payments', 'admin']);
    const [isExpress, setIsExpress] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const currentTypeObj = projectTypes.find(t => t.id === selectedType) || projectTypes[1];

    const toggleFeature = (id) => {
        if (selectedFeatures.includes(id)) {
            setSelectedFeatures(selectedFeatures.filter(f => f !== id));
        } else {
            setSelectedFeatures([...selectedFeatures, id]);
        }
    };

    const handlePlanSelect = (planName) => {
        navigate(`/contact?plan=${encodeURIComponent(planName)}`);
    };

    const handleEstimatorSubmit = () => {
        const featNames = selectedFeatures
            .map(id => featureOptions.find(f => f.id === id)?.label)
            .filter(Boolean)
            .join(', ');
        const details = `Build Request: ${currentTypeObj.label} | Features: ${featNames} | Urgency: ${isExpress ? 'Express Rush' : 'Standard'}`;
        navigate(`/contact?solution=${encodeURIComponent(details)}&category=Scope+Estimate`);
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
            {/* Ambient Background Glow Effects */}
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] rounded-full blur-[180px] -z-10 pointer-events-none ${
                isDark ? 'bg-cyan-500/10' : 'bg-cyan-400/15'
            }`} />
            <div className={`absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full blur-[160px] -z-10 pointer-events-none ${
                isDark ? 'bg-blue-600/10' : 'bg-blue-400/15'
            }`} />

            {/* HERO SECTION */}
            <section className="pt-36 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative z-10">
                <ScrollReveal type="fade-up">
                    <div className="inline-flex items-center space-x-2 mb-6">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                        </span>
                        <span className={`text-xs uppercase tracking-widest font-extrabold px-4 py-1.5 rounded-full border ${
                            isDark ? 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20' : 'text-cyan-800 bg-cyan-100 border-cyan-300'
                        }`}>
                            ENGAGEMENT & PROPOSALS
                        </span>
                    </div>

                    <h1 className={`text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-[1.1] ${
                        isDark ? 'text-white' : 'text-slate-950'
                    }`}>
                        Tailored Scope. <br />
                        <span className={isDark ? 'text-gradient-neon' : 'text-gradient-neon'}>Predictable Delivery.</span>
                    </h1>

                    <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium mb-10 ${
                        isDark ? 'text-gray-400' : 'text-slate-700'
                    }`}>
                        Select a structured project engagement model or request a tailored proposal for your business needs.
                    </p>

                    {/* Trust Badges Bar */}
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-semibold mb-12">
                        <div className="flex items-center space-x-2 text-cyan-600">
                            <ShieldCheck className="w-4 h-4" />
                            <span className={isDark ? 'text-gray-300' : 'text-slate-800'}>100% Source Code Ownership</span>
                        </div>
                        <div className="flex items-center space-x-2 text-cyan-600">
                            <Lock className="w-4 h-4" />
                            <span className={isDark ? 'text-gray-300' : 'text-slate-800'}>Fixed-Scope Milestones</span>
                        </div>
                        <div className="flex items-center space-x-2 text-cyan-600">
                            <CheckCircle2 className="w-4 h-4" />
                            <span className={isDark ? 'text-gray-300' : 'text-slate-800'}>Complimentary SLA Warranty</span>
                        </div>
                    </div>

                    {/* Engagement Model Switcher Toggle */}
                    <div className={`inline-flex items-center p-1.5 rounded-2xl border backdrop-blur-xl mb-16 shadow-lg ${
                        isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-300 shadow-slate-200/80'
                    }`}>
                        <button
                            onClick={() => setEngagementModel('fixed')}
                            className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-300 ${
                                engagementModel === 'fixed'
                                    ? isDark
                                        ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-md'
                                        : 'bg-cyan-700 text-white shadow-md'
                                    : isDark ? 'text-gray-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                            }`}
                        >
                            Fixed Scope Delivery
                        </button>

                        <button
                            onClick={() => setEngagementModel('dedicated')}
                            className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-300 flex items-center space-x-2 ${
                                engagementModel === 'dedicated'
                                    ? isDark
                                        ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black shadow-md'
                                        : 'bg-cyan-700 text-white shadow-md'
                                    : isDark ? 'text-gray-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                            }`}
                        >
                            <span>Dedicated Engineering Team</span>
                            <span className={`text-[10px] uppercase font-black px-2 py-0.5 rounded-md ${
                                engagementModel === 'dedicated'
                                    ? isDark ? 'bg-black/20 text-black' : 'bg-white/20 text-white'
                                    : isDark ? 'bg-cyan-500/20 text-cyan-300' : 'bg-cyan-100 text-cyan-800'
                            }`}>
                                Agile Sprint
                            </span>
                        </button>
                    </div>
                </ScrollReveal>
            </section>

            {/* PROPOSAL & ENGAGEMENT TIERS (NO PRICING MENTIONED) */}
            <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {plans.map((plan, idx) => {
                        const Icon = plan.icon;

                        return (
                            <ScrollReveal
                                key={plan.name}
                                type="fade-up"
                                duration={0.6}
                                delay={idx * 0.15}
                                className="h-full flex"
                            >
                                <div className={`relative w-full rounded-3xl p-8 border flex flex-col justify-between transition-all duration-300 backdrop-blur-xl ${
                                    plan.popular
                                        ? isDark
                                            ? 'bg-gradient-to-b from-cyan-950/40 via-black to-black border-cyan-400/60 shadow-[0_0_40px_rgba(6,182,212,0.25)] scale-102 lg:-translate-y-2'
                                            : 'bg-white border-cyan-600 shadow-2xl shadow-cyan-600/15 scale-102 lg:-translate-y-2'
                                        : isDark
                                            ? 'bg-white/[0.02] border-white/10 hover:border-cyan-400/40 hover:bg-black/80'
                                            : 'bg-white border-slate-300 shadow-lg shadow-slate-200/50 hover:border-cyan-600'
                                }`}>
                                    {plan.popular && (
                                        <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-[11px] font-extrabold uppercase tracking-widest rounded-full shadow-md ${
                                            isDark ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black' : 'bg-cyan-700 text-white'
                                        }`}>
                                            ★ {plan.badge}
                                        </div>
                                    )}

                                    <div>
                                        {/* Card Header */}
                                        <div className="flex items-center justify-between mb-6">
                                            <div className={`p-3 rounded-2xl border ${
                                                isDark ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400' : 'bg-cyan-100 border-cyan-200 text-cyan-700'
                                            }`}>
                                                <Icon className="w-6 h-6" />
                                            </div>

                                            <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${
                                                isDark ? 'bg-white/5 border-white/10 text-gray-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                                            }`}>
                                                {plan.badge}
                                            </span>
                                        </div>

                                        <h3 className={`text-2xl font-extrabold mb-2 tracking-tight ${
                                            isDark ? 'text-white' : 'text-slate-900'
                                        }`}>
                                            {plan.name}
                                        </h3>

                                        <p className={`text-xs leading-relaxed mb-6 font-normal ${
                                            isDark ? 'text-gray-400' : 'text-slate-600'
                                        }`}>
                                            {plan.desc}
                                        </p>

                                        {/* Scope Focus & Timeframe */}
                                        <div className={`mb-6 pb-6 border-b ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                                            <span className={`text-xs uppercase font-bold tracking-wider block mb-1 ${
                                                isDark ? 'text-cyan-400' : 'text-cyan-700'
                                            }`}>
                                                Scope Model:
                                            </span>
                                            <div className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                                {plan.scopeFocus}
                                            </div>

                                            <div className={`flex items-center space-x-1.5 mt-3 text-xs font-semibold ${
                                                isDark ? 'text-gray-400' : 'text-slate-600'
                                            }`}>
                                                <Clock className="w-3.5 h-3.5 text-cyan-500" />
                                                <span>Est. Turnaround: <strong className={isDark ? 'text-gray-200' : 'text-slate-900'}>{plan.timeframe}</strong></span>
                                            </div>
                                        </div>

                                        {/* Feature Bullets */}
                                        <div className="space-y-3 mb-8">
                                            <p className={`text-xs font-extrabold uppercase tracking-wider mb-2 ${
                                                isDark ? 'text-gray-400' : 'text-slate-500'
                                            }`}>
                                                Deliverables & Capabilities:
                                            </p>
                                            {plan.features.map((feat) => (
                                                <div key={feat} className="flex items-start space-x-2.5 text-xs font-medium">
                                                    <Check className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                                                    <span className={isDark ? 'text-gray-300' : 'text-slate-800'}>{feat}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action CTA Button */}
                                    <button
                                        onClick={() => handlePlanSelect(plan.name)}
                                        className={`w-full py-3.5 px-4 rounded-2xl font-extrabold text-sm flex items-center justify-center space-x-2 transition-all duration-300 shadow-md ${
                                            plan.popular
                                                ? isDark
                                                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:brightness-110 shadow-cyan-500/25'
                                                    : 'bg-cyan-700 text-white hover:bg-cyan-800 shadow-cyan-700/25'
                                                : isDark
                                                    ? 'bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-cyan-400/50'
                                                    : 'bg-slate-100 border border-slate-300 text-slate-900 hover:bg-slate-200'
                                        }`}
                                    >
                                        <span>Request Proposal for {plan.name}</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </section>

            {/* INTERACTIVE SCOPE & TIMELINE ESTIMATOR WIDGET (NO PRICING MENTIONED) */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative z-10 mb-24">
                <ScrollReveal type="fade-up">
                    <div className={`rounded-3xl border p-8 sm:p-12 backdrop-blur-2xl transition-colors ${
                        isDark ? 'bg-gradient-to-b from-white/[0.04] to-black border-white/15' : 'bg-white border-slate-300 shadow-2xl shadow-slate-200/80'
                    }`}>
                        <div className={`flex flex-col md:flex-row md:items-center justify-between mb-10 pb-6 border-b ${
                            isDark ? 'border-white/10' : 'border-slate-200'
                        }`}>
                            <div>
                                <div className="inline-flex items-center space-x-2 mb-2">
                                    <Calculator className="w-5 h-5 text-cyan-500" />
                                    <span className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-cyan-400' : 'text-cyan-700'}`}>
                                        Interactive Scope Calculator
                                    </span>
                                </div>
                                <h2 className={`text-3xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                    Estimate Build Timeframe & Team Allocation
                                </h2>
                                <p className={`text-xs sm:text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                                    Select your application type and core modules to calculate estimated delivery time and dedicated team setup.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            {/* Inputs Column */}
                            <div className="lg:col-span-7 space-y-6">
                                {/* Step 1: Project Type */}
                                <div>
                                    <label className={`text-xs font-extrabold uppercase tracking-wider block mb-3 ${
                                        isDark ? 'text-gray-300' : 'text-slate-700'
                                    }`}>
                                        1. Select Build Type
                                    </label>
                                    <div className="grid grid-cols-2 gap-2.5">
                                        {projectTypes.map((type) => (
                                            <button
                                                key={type.id}
                                                onClick={() => setSelectedType(type.id)}
                                                className={`p-3 rounded-xl border text-left text-xs font-bold transition-all ${
                                                    selectedType === type.id
                                                        ? isDark
                                                            ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                                                            : 'bg-cyan-700 text-white border-cyan-700'
                                                        : isDark
                                                            ? 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                                                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                                                }`}
                                            >
                                                {type.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Step 2: Features Needed */}
                                <div>
                                    <label className={`text-xs font-extrabold uppercase tracking-wider block mb-3 ${
                                        isDark ? 'text-gray-300' : 'text-slate-700'
                                    }`}>
                                        2. Select Modules & Capabilities
                                    </label>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                        {featureOptions.map((feat) => {
                                            const isSelected = selectedFeatures.includes(feat.id);
                                            return (
                                                <button
                                                    key={feat.id}
                                                    onClick={() => toggleFeature(feat.id)}
                                                    className={`p-3 rounded-xl border text-left text-xs font-medium flex items-center justify-between transition-all ${
                                                        isSelected
                                                            ? isDark
                                                                ? 'bg-white/10 border-cyan-400 text-cyan-300'
                                                                : 'bg-cyan-50 border-cyan-500 text-cyan-800 font-bold'
                                                            : isDark
                                                                ? 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                                                                : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                                                    }`}
                                                >
                                                    <span>{feat.label}</span>
                                                    {isSelected && <Check className="w-4 h-4 text-cyan-500" />}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Step 3: Speed/Urgency */}
                                <div className={`flex items-center justify-between p-4 rounded-2xl border ${
                                    isDark ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
                                }`}>
                                    <div>
                                        <span className={`text-xs font-bold block ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                            Express Delivery Speed (Rush Sprint)
                                        </span>
                                        <span className={`text-[11px] ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                                            Prioritizes 2x engineering team allocation for urgent launches
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => setIsExpress(!isExpress)}
                                        className={`w-12 h-6 rounded-full p-1 transition-colors ${
                                            isExpress ? 'bg-cyan-500' : isDark ? 'bg-white/20' : 'bg-slate-300'
                                        }`}
                                    >
                                        <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                                            isExpress ? 'translate-x-6' : 'translate-x-0'
                                        }`} />
                                    </button>
                                </div>
                            </div>

                            {/* Estimated Output Card (NO PRICING) */}
                            <div className={`lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl border ${
                                isDark
                                    ? 'bg-gradient-to-br from-cyan-500/10 via-black to-black border-cyan-500/30'
                                    : 'bg-gradient-to-br from-cyan-50 via-slate-50 to-white border-cyan-200 shadow-lg text-slate-900'
                            }`}>
                                <div>
                                    <span className={`text-[11px] font-extrabold uppercase tracking-widest block mb-2 ${
                                        isDark ? 'text-cyan-400' : 'text-cyan-700'
                                    }`}>
                                        Calculated Scope Output
                                    </span>
                                    <h3 className={`text-xl font-extrabold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                        {currentTypeObj.label}
                                    </h3>
                                    <p className={`text-xs mb-6 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                                        Configured with {selectedFeatures.length} core functional modules.
                                    </p>

                                    <div className={`mb-6 pb-6 border-b ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                                        <span className={`text-xs block ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>Team Allocation</span>
                                        <div className={`text-sm font-bold mt-1 flex items-center space-x-2 ${
                                            isDark ? 'text-cyan-300' : 'text-cyan-800'
                                        }`}>
                                            <Users className="w-4 h-4 text-cyan-500" />
                                            <span>{currentTypeObj.team}</span>
                                        </div>
                                    </div>

                                    <div className={`space-y-2.5 text-xs font-medium mb-8 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                                        <div className="flex items-center justify-between">
                                            <span>Target Delivery Time:</span>
                                            <strong className={isDark ? 'text-white' : 'text-slate-900'}>
                                                {isExpress ? 'Fast Track (1-2 Weeks)' : currentTypeObj.time}
                                            </strong>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span>IP & Repository:</span>
                                            <strong className="text-cyan-500 font-bold">100% Owned by You</strong>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span>Support SLA:</span>
                                            <strong className={isDark ? 'text-gray-200' : 'text-slate-900'}>30-60 Days Included</strong>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={handleEstimatorSubmit}
                                    className={`w-full py-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all shadow-md ${
                                        isDark
                                            ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:brightness-110 shadow-cyan-500/20'
                                            : 'bg-cyan-700 text-white hover:bg-cyan-800 shadow-cyan-700/25'
                                    }`}
                                >
                                    <span>Request Proposal for this Scope</span>
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </section>

            {/* FREQUENTLY ASKED QUESTIONS (FAQ) */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative z-10 mb-32">
                <ScrollReveal type="fade-up" className="text-center mb-12">
                    <div className="inline-flex items-center space-x-2 mb-3">
                        <HelpCircle className="w-4 h-4 text-cyan-500" />
                        <span className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-cyan-400' : 'text-cyan-700'}`}>
                            CLEAR ANSWERS
                        </span>
                    </div>
                    <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        Proposals & Engagement FAQ
                    </h2>
                </ScrollReveal>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openFaqIndex === index;
                        return (
                            <ScrollReveal key={index} type="fade-up" delay={index * 0.1}>
                                <div className={`rounded-2xl border transition-colors ${
                                    isDark ? 'bg-white/[0.02] border-white/10' : 'bg-white border-slate-200 shadow-sm'
                                }`}>
                                    <button
                                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                                        className="w-full p-6 text-left flex items-center justify-between focus:outline-none"
                                    >
                                        <span className={`text-base font-bold pr-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                            {faq.q}
                                        </span>
                                        <ChevronDown className={`w-5 h-5 text-cyan-500 shrink-0 transition-transform duration-300 ${
                                            isOpen ? 'rotate-180' : 'rotate-0'
                                        }`} />
                                    </button>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.25 }}
                                                className={`px-6 pb-6 text-xs sm:text-sm leading-relaxed border-t pt-4 ${
                                                    isDark ? 'text-gray-400 border-white/5' : 'text-slate-600 border-slate-100'
                                                }`}
                                            >
                                                {faq.a}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>
            </section>

            {/* CTA BANNER */}
            <div className="relative z-20 mt-10">
                <CTA />
            </div>
        </motion.div>
    );
}
