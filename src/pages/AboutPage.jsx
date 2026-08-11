import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
    MapPin,
    Globe2,
    Users,
    Laptop,
    ShieldCheck,
    Code2,
    MessageSquare,
    Clock,
    HeartHandshake,
    TrendingUp,
    Sparkles,
    CheckCircle2,
    ArrowRight
} from 'lucide-react';
import CTA from '../components/CTA';
import ScrollReveal from '../components/ScrollReveal';
import { useTheme } from '../context/ThemeContext';

// Import generated visual assets
import remoteImg from '../assets/remote_engineers.png';
import virtualWorkImg from '../assets/virtual_work.png';

const actualValues = [
    {
        title: "Craft Over Shortcuts",
        desc: "We write clean code, not quick fixes. Every project is built to grow with your business, not against it.",
        icon: Code2,
    },
    {
        title: "Clear Communication",
        desc: "You'll never have to ask where your project stands. We send regular updates and we're always a message away.",
        icon: MessageSquare,
    },
    {
        title: "We Respect Deadlines",
        desc: "We set realistic timelines and we stick to them. No endless delays, no scope surprises, just honest delivery.",
        icon: Clock,
    },
    {
        title: "Your Trust, Our Priority",
        desc: "Your data, your ideas and your budget are safe with us. We're upfront about everything, from costs to timelines.",
        icon: HeartHandshake,
    },
    {
        title: "We Care About Results",
        desc: "A pretty website means nothing if it doesn't work for your business. We judge our success by your outcomes, not by how it looks.",
        icon: TrendingUp,
    },
    {
        title: "Long-Term Thinking",
        desc: "We don't vanish after launch. We stick around to maintain, improve and grow the site with your business.",
        icon: ShieldCheck,
    },
];

export default function AboutPage() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const navigate = useNavigate();

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
            {/* Ambient Lighting Orbs */}
            <div className="fixed inset-0 pointer-events-none -z-10">
                <div className={`absolute top-0 left-1/4 w-[700px] h-[700px] rounded-full blur-[180px] ${
                    isDark ? 'bg-cyan-500/10' : 'bg-cyan-400/15'
                }`} />
                <div className={`absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full blur-[160px] ${
                    isDark ? 'bg-blue-600/10' : 'bg-blue-400/15'
                }`} />
            </div>

            {/* HERO SECTION */}
            <section className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center z-10">
                <ScrollReveal type="fade-up">
                    <div className="inline-flex items-center space-x-2 mb-6">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                        </span>
                        <span className={`text-xs uppercase tracking-widest font-extrabold px-4 py-1.5 rounded-full border ${
                            isDark ? 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20' : 'text-cyan-800 bg-cyan-100 border-cyan-300'
                        }`}>
                            ABOUT TECHNOVA
                        </span>
                    </div>

                    <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.1] ${
                        isDark ? 'text-white' : 'text-slate-950'
                    }`}>
                        Boundaryless <br />
                        <span className="text-gradient-neon">Engineering Talent</span>
                    </h1>

                    <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium ${
                        isDark ? 'text-gray-300' : 'text-slate-700'
                    }`}>
                        We are a distributed team of top MNC engineers based in Erode, operating entirely remote to build software beyond traditional office boundaries.
                    </p>
                </ScrollReveal>
            </section>

            {/* ERODE & VIRTUAL REMOTE STORY SECTION */}
            <section className={`relative py-20 px-4 sm:px-6 lg:px-8 border-y z-10 ${
                isDark ? 'border-white/10 bg-white/[0.01]' : 'border-slate-200 bg-white shadow-sm'
            }`}>
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
                        {/* Story Text */}
                        <ScrollReveal type="fade-up" className="lg:col-span-6">
                            <div>
                                <div className="inline-flex items-center space-x-2 mb-4">
                                    <MapPin className="w-4 h-4 text-cyan-500" />
                                    <span className={`text-xs font-extrabold uppercase tracking-wider ${
                                        isDark ? 'text-cyan-400' : 'text-cyan-700'
                                    }`}>
                                        Engineered in Erode • Operating Globally
                                    </span>
                                </div>

                                <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight ${
                                    isDark ? 'text-white' : 'text-slate-950'
                                }`}>
                                    No Physical Office. <br />
                                    Top Engineers Working Remotely.
                                </h2>

                                <p className={`text-base sm:text-lg leading-relaxed mb-6 font-medium ${
                                    isDark ? 'text-gray-300' : 'text-slate-700'
                                }`}>
                                    Our core engineering team is located in <strong className={isDark ? 'text-cyan-400' : 'text-cyan-700'}>Erode</strong>. We intentionally do not maintain a physical office building—instead, our team consists of experienced software engineers with top MNC backgrounds working remotely.
                                </p>

                                <p className={`text-base leading-relaxed font-normal mb-8 ${
                                    isDark ? 'text-gray-400' : 'text-slate-600'
                                }`}>
                                    We embrace a modern, <strong>virtual-first remote approach</strong> that connects us beyond geographic boundaries. This allows us to cut corporate overhead and focus 100% of our energy on engineering world-class software for your business.
                                </p>

                                <div className={`p-4 sm:p-5 rounded-2xl border flex items-center space-x-4 ${
                                    isDark ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300' : 'bg-cyan-50 border-cyan-200 text-cyan-900'
                                }`}>
                                    <Globe2 className="w-8 h-8 text-cyan-500 shrink-0" />
                                    <div className="text-xs font-semibold">
                                        <strong>Virtual Collaboration:</strong> Instant Slack/WhatsApp communication, regular screen share sprint demos, and zero geographical friction.
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Attractive Image Feature 1 */}
                        <ScrollReveal type="fade-up" delay={0.2} className="lg:col-span-6">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
                                <div className={`relative rounded-3xl border overflow-hidden backdrop-blur-2xl ${
                                    isDark ? 'bg-black/60 border-white/15' : 'bg-white border-slate-300 shadow-2xl shadow-slate-200/80'
                                }`}>
                                    <img
                                        src={remoteImg}
                                        alt="Remote Software Engineers Collaborating in Erode"
                                        className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className={`p-5 border-t flex items-center justify-between text-xs font-bold ${
                                        isDark ? 'bg-black/80 border-white/10 text-gray-300' : 'bg-slate-50 border-slate-200 text-slate-800'
                                    }`}>
                                        <span className="flex items-center space-x-2">
                                            <Laptop className="w-4 h-4 text-cyan-500" />
                                            <span>Remote Engineering Team • Erode</span>
                                        </span>
                                        <span className="text-cyan-500">Virtual Synergy</span>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* VALUES WE ACTUALLY FOLLOW SECTION */}
            <section className={`relative py-28 px-4 sm:px-6 lg:px-8 border-b z-10 ${
                isDark ? 'border-white/10' : 'border-slate-200 bg-slate-50'
            }`}>
                <div className="max-w-6xl mx-auto">
                    <ScrollReveal type="fade-up" className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center space-x-2 mb-3">
                            <Sparkles className="w-4 h-4 text-cyan-500" />
                            <span className={`text-xs uppercase tracking-widest font-extrabold ${
                                isDark ? 'text-cyan-400' : 'text-cyan-700'
                            }`}>
                                OPERATING CODE OF CONDUCT
                            </span>
                        </div>

                        <h2 className={`text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 ${
                            isDark ? 'text-white' : 'text-slate-900'
                        }`}>
                            Values We Actually Follow
                        </h2>

                        <p className={`text-base sm:text-lg leading-relaxed font-medium max-w-2xl mx-auto ${
                            isDark ? 'text-gray-300' : 'text-slate-700'
                        }`}>
                            Not corporate buzzwords, these are the principles we apply to every project, every conversation, and every line of code.
                        </p>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {actualValues.map((val, i) => {
                            const Icon = val.icon;
                            return (
                                <ScrollReveal key={val.title} type="fade-up" delay={i * 0.1}>
                                    <div className={`h-full p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                                        isDark
                                            ? 'bg-white/[0.02] border-white/10 hover:border-cyan-400/50 hover:bg-black/70 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]'
                                            : 'bg-white border-slate-200 shadow-lg shadow-slate-200/60 hover:border-cyan-600'
                                    }`}>
                                        <div>
                                            <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${
                                                isDark
                                                    ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
                                                    : 'bg-cyan-100 border-cyan-200 text-cyan-700'
                                            }`}>
                                                <Icon className="w-6 h-6" />
                                            </div>

                                            <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                                {val.title}
                                            </h3>

                                            <p className={`text-xs leading-relaxed font-normal ${
                                                isDark ? 'text-gray-400' : 'text-slate-600'
                                            }`}>
                                                {val.desc}
                                            </p>
                                        </div>

                                        <div className="pt-6 mt-6 border-t border-white/10 flex items-center space-x-2 text-[11px] font-bold text-cyan-500">
                                            <CheckCircle2 className="w-4 h-4" />
                                            <span>Applied to your project</span>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* VIRTUAL COLLABORATION IMAGE FEATURE 2 */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
                <div className={`rounded-3xl border p-8 sm:p-12 overflow-hidden backdrop-blur-2xl ${
                    isDark ? 'bg-gradient-to-r from-white/[0.03] to-black border-white/15' : 'bg-white border-slate-300 shadow-xl'
                }`}>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7">
                            <div className="inline-flex items-center space-x-2 mb-3">
                                <Users className="w-4 h-4 text-cyan-500" />
                                <span className={`text-xs font-extrabold uppercase tracking-wider ${isDark ? 'text-cyan-400' : 'text-cyan-700'}`}>
                                    Connecting Beyond Boundaries
                                </span>
                            </div>

                            <h3 className={`text-3xl font-extrabold tracking-tight mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                Modern Virtual Workflow for Global Clients
                            </h3>

                            <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                                Whether you are in India, North America, Europe, or Australia, our virtual-first setup guarantees zero lag in communication. We work on your timeline, send structured updates, and deliver clean software.
                            </p>

                            <button
                                onClick={() => navigate('/contact')}
                                className={`px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm inline-flex items-center space-x-2 transition-all shadow-md ${
                                    isDark
                                        ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:brightness-110'
                                        : 'bg-cyan-700 text-white hover:bg-cyan-800'
                                }`}
                            >
                                <span>Get in Touch With Us</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="rounded-2xl border overflow-hidden shadow-lg border-white/10">
                                <img
                                    src={virtualWorkImg}
                                    alt="Virtual Work Beyond Boundaries"
                                    className="w-full h-56 sm:h-64 object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <ScrollReveal type="fade-up" className="relative z-20">
                <CTA />
            </ScrollReveal>
        </motion.div>
    );
}
