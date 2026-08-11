import { motion } from 'framer-motion';
import { FaAws } from 'react-icons/fa6';
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiNodedotjs,
    SiPython,
    SiPostgresql,
    SiDocker,
    SiGraphql,
    SiVite,
    SiFramer,
    SiFirebase,
    SiMongodb,
    SiRedis,
    SiFlutter,
    SiSupabase,
    SiOpenai,
    SiVercel,
    SiCloudflare,
    SiKubernetes,
    SiExpress
} from 'react-icons/si';
import { useTheme } from '../context/ThemeContext';

const allTech = [
    { name: 'React', icon: SiReact, darkColor: '#61DAFB', lightColor: '#0088CC' },
    { name: 'Next.js', icon: SiNextdotjs, darkColor: '#FFFFFF', lightColor: '#000000' },
    { name: 'TypeScript', icon: SiTypescript, darkColor: '#3178C6', lightColor: '#3178C6' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, darkColor: '#06B6D4', lightColor: '#0284C7' },
    { name: 'Node.js', icon: SiNodedotjs, darkColor: '#5FA04E', lightColor: '#43853D' },
    { name: 'Python', icon: SiPython, darkColor: '#3776AB', lightColor: '#3776AB' },
    { name: 'PostgreSQL', icon: SiPostgresql, darkColor: '#4169E1', lightColor: '#336791' },
    { name: 'Docker', icon: SiDocker, darkColor: '#2496ED', lightColor: '#0db7ed' },
    { name: 'AWS', icon: FaAws, darkColor: '#FF9900', lightColor: '#FF9900' },
    { name: 'GraphQL', icon: SiGraphql, darkColor: '#E10098', lightColor: '#E10098' },
    { name: 'Vite', icon: SiVite, darkColor: '#646CFF', lightColor: '#646CFF' },
    { name: 'Framer Motion', icon: SiFramer, darkColor: '#0055FF', lightColor: '#0055FF' },
    { name: 'Firebase', icon: SiFirebase, darkColor: '#FFCA28', lightColor: '#F58220' },
    { name: 'MongoDB', icon: SiMongodb, darkColor: '#47A248', lightColor: '#13AA52' },
    { name: 'Redis', icon: SiRedis, darkColor: '#DC382D', lightColor: '#D82C20' },
    { name: 'Flutter', icon: SiFlutter, darkColor: '#02569B', lightColor: '#02569B' },
    { name: 'Supabase', icon: SiSupabase, darkColor: '#3ECF8E', lightColor: '#3ECF8E' },
    { name: 'OpenAI', icon: SiOpenai, darkColor: '#10A37F', lightColor: '#10A37F' },
    { name: 'Vercel', icon: SiVercel, darkColor: '#FFFFFF', lightColor: '#000000' },
    { name: 'Cloudflare', icon: SiCloudflare, darkColor: '#F38020', lightColor: '#F38020' },
    { name: 'Kubernetes', icon: SiKubernetes, darkColor: '#326CE5', lightColor: '#326CE5' },
    { name: 'Express.js', icon: SiExpress, darkColor: '#FFFFFF', lightColor: '#000000' },
];

export default function TechMarquee() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <section className={`w-full py-12 relative overflow-hidden border-t border-b z-10 transition-colors duration-300 ${
            isDark ? 'bg-black/60 border-white/10' : 'bg-slate-100/90 border-slate-200'
        }`}>
            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                        isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                        Powered by World-Class Technologies
                    </h2>
                </motion.div>
            </div>

            {/* Single Line Continuous Marquee */}
            <div className={`relative w-full overflow-hidden group before:absolute before:top-0 before:left-0 before:z-20 before:w-24 sm:before:w-40 before:h-full before:to-transparent after:absolute after:top-0 after:right-0 after:z-20 after:w-24 sm:after:w-40 after:h-full after:to-transparent pointer-events-auto ${
                isDark
                    ? 'before:bg-gradient-to-r before:from-black after:bg-gradient-to-l after:from-black'
                    : 'before:bg-gradient-to-r before:from-slate-100 after:bg-gradient-to-l after:from-slate-100'
            }`}>
                <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
                    {[...allTech, ...allTech, ...allTech].map((tech, idx) => {
                        const Icon = tech.icon;
                        const iconColor = isDark ? tech.darkColor : tech.lightColor;
                        return (
                            <div
                                key={`tech-${idx}`}
                                className={`flex items-center space-x-3 mx-3 px-5 py-3 rounded-xl border backdrop-blur-md transition-all duration-300 cursor-pointer group/card shadow-sm ${
                                    isDark
                                        ? 'bg-white/[0.03] border-white/10 hover:bg-white/[0.08] hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]'
                                        : 'bg-white border-slate-200 hover:bg-slate-50 hover:border-cyan-600/40 hover:shadow-md'
                                }`}
                            >
                                <Icon className="text-xl transition-transform duration-300 group-hover/card:scale-110" style={{ color: iconColor }} />
                                <span className={`text-sm font-semibold whitespace-nowrap ${
                                    isDark ? 'text-gray-200 group-hover/card:text-white' : 'text-slate-800 group-hover/card:text-slate-900'
                                }`}>
                                    {tech.name}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
