import { motion } from 'framer-motion';
import {
    Code,
    AppWindow,
    Cloud,
    HardDrive,
    TerminalSquare,
    Repeat,
    Scissors,
    Receipt,
    Smartphone
} from 'lucide-react';

const servicesList = [
    {
        title: 'Static Website Development',
        description: 'Blazing fast, SEO-optimized landing pages and portfolios built for peak performance.',
        icon: Code,
    },
    {
        title: 'Dynamic Web Applications',
        description: 'Interactive, data-driven web experiences tailored to your complex business needs.',
        icon: AppWindow,
    },
    {
        title: 'Cloud Hosting',
        description: 'Reliable deployment, scaling, and infrastructure management in the cloud.',
        icon: Cloud,
    },
    {
        title: 'Local Hosting',
        description: 'Secure, on-premise server solutions configured for optimal local performance.',
        icon: HardDrive,
    },
    {
        title: 'Local Software Development',
        description: 'Custom desktop applications engineered for specific industry workflows.',
        icon: TerminalSquare,
    },
    {
        title: 'Subscription Management Systems',
        description: 'Automated recurring billing and user lifecycle management platforms.',
        icon: Repeat,
    },
    {
        title: 'Textile Industry Software',
        description: 'Specialized enterprise resource planning and inventory tools for textile manufacturing.',
        icon: Scissors,
    },
    {
        title: 'Billing Systems',
        description: 'Robust invoicing, accounting integration, and secure payment gateways.',
        icon: Receipt,
    },
    {
        title: 'Desktop + Mobile Integration',
        description: 'Unified ecosystem bridging desktop power with mobile accessibility.',
        icon: Smartphone,
    },
];

export default function Services({ hideHeader = false }) {
    return (
        <section className={`py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative w-full ${hideHeader ? 'pt-10' : ''}`}>
            {!hideHeader && (
                <div className="mb-20 md:mb-28 text-center md:text-left">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-black tracking-tighter mb-6"
                    >
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Expertise</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-gray-400 max-w-2xl text-lg md:text-xl font-light leading-relaxed mx-auto md:mx-0"
                    >
                        We deliver specialized, high-performance digital solutions ranging from web infrastructure to industry-specific native software.
                    </motion.p>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {servicesList.map((service, index) => {
                    const Icon = service.icon;
                    return (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                            whileHover={{ y: -4 }}
                            className="group relative h-full w-full"
                        >
                            {/* Card Content */}
                            <div className="relative h-full bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-xl rounded-[2rem] p-8 md:p-10 border border-white/5 hover:border-white/10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 flex flex-col items-start overflow-hidden">

                                {/* Subtle Ambient Radial Highlight on Hover */}
                                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-neonBlue/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                                {/* Refined Icon Container */}
                                <div className="mb-8 w-14 h-14 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/10 flex items-center justify-center relative z-10 overflow-hidden group-hover:bg-white/[0.08] transition-colors duration-500 shadow-sm">
                                    <Icon size={26} strokeWidth={1} className="text-gray-400 group-hover:text-white transition-colors duration-500 relative z-10" />
                                </div>

                                {/* Text Content */}
                                <div className="relative z-10 flex-grow flex flex-col">
                                    <h3 className="text-2xl font-bold mb-3 tracking-tight text-white transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400 font-light leading-relaxed group-hover:text-gray-300 transition-colors duration-500 flex-grow">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
