import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
    Globe,
    ShoppingCart,
    Smartphone,
    Cog,
    Palette,
    ShieldCheck,
    Scissors,
    ArrowRight,
    CheckCircle2,
    Zap
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const servicesList = [
    {
        num: '/01',
        title: 'Specialized Textile & Industrial Software',
        tagline: 'Loom Tracking, Dyeing & Mill ERPs',
        description: 'Bespoke ERPs built specifically for textile mills, weaving factories, chemical dyeing workflows, roll grading, and yarn inventory management.',
        deliverables: ['Real-time loom status board', 'Batch & shade variance logs', 'GST invoice & e-Way bill sync'],
        techBadges: ['IoT Sensors', 'Industrial ERP', 'Barcode/QR'],
        icon: Scissors,
    },
    {
        num: '/02',
        title: 'Custom Web Application Development',
        tagline: 'High-Performance & Scalable Web Systems',
        description: 'Transform manual business workflows into fast, automated web applications designed to convert visitors and streamline operations.',
        deliverables: ['Sub-second load times', 'Tailored admin control portal', 'Secure payment & API integration'],
        techBadges: ['React / Next.js', 'Node.js', 'PostgreSQL'],
        icon: Globe,
    },
    {
        num: '/03',
        title: 'eCommerce Platforms & Architecture',
        tagline: 'High-Converting Digital Stores',
        description: 'Full-featured online stores with smooth checkout flows, automated inventory sync, payment gateways, and real-time sales dashboards.',
        deliverables: ['1-click UPI & card checkout', 'Live multi-channel stock sync', 'Customer loyalty & promo engine'],
        techBadges: ['Stripe / Razorpay', 'Custom Cart', 'PWA Store'],
        icon: ShoppingCart,
    },
    {
        num: '/04',
        title: 'Cross-Platform Mobile App Development',
        tagline: 'Native 60fps iOS & Android Apps',
        description: 'Single codebase mobile apps delivering native 60fps performance, offline data sync, push notifications, and biometric security.',
        deliverables: ['iOS & Android App Store ready', 'Offline SQLite cloud sync', 'Push notification engine'],
        techBadges: ['React Native', 'Firebase', 'SQLite'],
        icon: Smartphone,
    },
    {
        num: '/05',
        title: 'Enterprise Software & Process Automation',
        tagline: 'Bespoke Business Management Systems',
        description: 'Eliminate repetitive manual entry with custom dashboards, role-based approval flows, automated invoice generators, and SLA trackers.',
        deliverables: ['Workflow automation bots', 'Role-based access control (RBAC)', 'Exportable C-suite KPI reports'],
        techBadges: ['Python', 'Docker', 'Redis Queue'],
        icon: Cog,
    },
    {
        num: '/06',
        title: 'Cloud Infrastructure & Security SLA',
        tagline: '99.9% Uptime & Automated Backups',
        description: 'Zero-downtime cloud migration, SSL/HIPAA compliance, automated database backups, and priority bug fix SLAs.',
        deliverables: ['Auto-scaling AWS/Vercel setup', 'Encrypted database backups', '24/7 Monitoring & 60-day SLA'],
        techBadges: ['AWS / Vercel', 'SSL Security', 'CI/CD Pipeline'],
        icon: ShieldCheck,
    },
];

export default function Services({ hideHeader = false }) {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const navigate = useNavigate();

    const handleInquire = (serviceTitle) => {
        navigate(`/contact?solution=${encodeURIComponent(serviceTitle)}&category=Core+Service`);
    };

    return (
        <section className={`py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative w-full ${hideHeader ? 'pt-6' : ''}`}>
            {!hideHeader && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7"
                    >
                        <div className="inline-flex items-center space-x-2 mb-3">
                            <Zap className="w-4 h-4 text-cyan-500" />
                            <span className={`text-xs uppercase tracking-widest font-extrabold ${
                                isDark ? 'text-cyan-400' : 'text-cyan-700'
                            }`}>
                                CORE SERVICE OFFERINGS
                            </span>
                        </div>

                        <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight ${
                            isDark ? 'text-white' : 'text-slate-900'
                        }`}>
                            Customer-Focused <br />
                            <span className={isDark ? 'text-gradient-neon' : 'text-gradient-neon'}>Engineering Services.</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-5 lg:pt-10"
                    >
                        <p className={`text-base sm:text-lg font-medium leading-relaxed ${
                            isDark ? 'text-gray-400' : 'text-slate-700'
                        }`}>
                            Every service is engineered with strict attention to performance, security, and measurable ROI for your business.
                        </p>
                    </motion.div>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {servicesList.map((service, index) => {
                    const Icon = service.icon;
                    return (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative h-full flex"
                        >
                            <div className={`relative w-full border backdrop-blur-2xl rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 overflow-hidden ${
                                isDark
                                    ? 'bg-white/[0.02] border-white/10 hover:bg-black/80 hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(0,240,255,0.18)]'
                                    : 'bg-white border-slate-200 shadow-md hover:border-cyan-600 hover:shadow-xl hover:shadow-cyan-600/10'
                            }`}>
                                <div>
                                    {/* Top Row: Icon & Service Number */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all duration-300 ${
                                            isDark
                                                ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-black'
                                                : 'bg-cyan-100/70 border-cyan-200 text-cyan-700 group-hover:scale-110 group-hover:bg-cyan-600 group-hover:text-white'
                                        }`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <span className={`text-xs font-mono font-extrabold px-3 py-1 rounded-full border ${
                                            isDark ? 'bg-white/5 border-white/10 text-cyan-400' : 'bg-slate-100 border-slate-200 text-cyan-700'
                                        }`}>
                                            {service.num}
                                        </span>
                                    </div>

                                    {/* Subtitle & Title */}
                                    <span className={`text-[11px] font-extrabold uppercase tracking-wider block mb-1 ${
                                        isDark ? 'text-cyan-400' : 'text-cyan-700'
                                    }`}>
                                        {service.tagline}
                                    </span>

                                    <h3 className={`text-xl font-bold mb-3 transition-colors leading-tight ${
                                        isDark ? 'text-white group-hover:text-cyan-300' : 'text-slate-900 group-hover:text-cyan-700'
                                    }`}>
                                        {service.title}
                                    </h3>

                                    <p className={`text-xs leading-relaxed font-normal mb-6 ${
                                        isDark ? 'text-gray-400' : 'text-slate-600'
                                    }`}>
                                        {service.description}
                                    </p>

                                    {/* Key Deliverables List */}
                                    <div className="space-y-2 mb-6 pt-4 border-t border-white/10">
                                        <p className={`text-[10px] font-extrabold uppercase tracking-wider ${
                                            isDark ? 'text-gray-400' : 'text-slate-500'
                                        }`}>
                                            Key Deliverables:
                                        </p>
                                        {service.deliverables.map((deliv, i) => (
                                            <div key={i} className="flex items-start space-x-2 text-xs font-medium">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                                                <span className={isDark ? 'text-gray-300' : 'text-slate-800'}>{deliv}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Tech Badges */}
                                    <div className="flex flex-wrap gap-1.5 mb-8">
                                        {service.techBadges.map((badge) => (
                                            <span key={badge} className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${
                                                isDark ? 'bg-white/5 border-white/10 text-gray-400' : 'bg-slate-100 border-slate-200 text-slate-700'
                                            }`}>
                                                {badge}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Inquire CTA Button */}
                                <button
                                    onClick={() => handleInquire(service.title)}
                                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 transition-all duration-300 border ${
                                        isDark
                                            ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300 hover:bg-cyan-500 hover:text-black hover:border-cyan-400'
                                            : 'bg-cyan-600 border-cyan-600 text-white hover:bg-cyan-700'
                                    }`}
                                >
                                    <span>Inquire About This Service</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
