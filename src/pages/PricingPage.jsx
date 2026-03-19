import { motion } from 'framer-motion';
import { Check, Info } from 'lucide-react';
import CTA from '../components/CTA';
import ScrollReveal from '../components/ScrollReveal';

const plans = [
    {
        name: 'Starter',
        desc: 'Essential features for individuals and small startups establishing their presence.',
        price: '...',
        features: ['Core Development', 'Standard Support', 'Basic Analytics', 'Community Access']
    },
    {
        name: 'Business',
        desc: 'Advanced capabilities for growing companies requiring scaled performance.',
        price: '...',
        features: ['Advanced Development', 'Priority Support', 'Custom Integrations', 'Dedicated Account Manager'],
        popular: true
    },
    {
        name: 'Enterprise',
        desc: 'Uncompromised power, security, and custom architecture for large organizations.',
        price: '...',
        features: ['Bespoke Architecture', '24/7 SLA Support', 'On-premise Options', 'Advanced Security Audits']
    }
];

export default function PricingPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full min-h-screen mb-32 relative overflow-hidden"
        >
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-neonBlue/10 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

            <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/5 relative">
                <ScrollReveal type="fade-up" className="text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-neonBlue text-sm font-medium tracking-wide mb-8">
                        <Info size={16} />
                        <span>Pricing Update</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">
                        Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-blue-500">Value</span>.
                    </h1>

                    {/* Exact User Requested Content */}
                    <div className="p-8 mt-12 mb-8 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] inline-block">
                        <p className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-3">
                            Pricing will be available soon.
                        </p>
                        <p className="text-xl text-gray-400 font-light">
                            Contact us for project estimates.
                        </p>
                    </div>
                </ScrollReveal>
            </section>

            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, idx) => (
                        <ScrollReveal
                            key={plan.name}
                            type="fade-up"
                            duration={0.7}
                            delay={idx * 0.1}
                            className={`group relative h-full`}
                        >
                            {/* Animated Background Gradient for Popular Plan */}
                            {plan.popular && (
                                <div className="absolute -inset-0.5 bg-gradient-to-br from-neonBlue/20 to-blue-600/20 rounded-[2rem] blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                            )}

                            <div className={`relative h-full bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-xl p-10 rounded-[2rem] border flex flex-col justify-between transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] ${plan.popular
                                ? 'border-neonBlue/30 hover:border-neonBlue/50'
                                : 'border-white/5 hover:border-white/10'
                                }`}>
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-1.5 bg-gradient-to-r from-neonBlue to-blue-500 text-black text-xs font-black rounded-full tracking-widest uppercase shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className="text-3xl font-bold mb-3 tracking-tight text-white transition-colors duration-300">
                                        {plan.name}
                                    </h3>
                                    <p className="text-gray-400 font-light h-14 leading-relaxed">
                                        {plan.desc}
                                    </p>

                                    <div className="my-10 text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">
                                        {plan.price}
                                    </div>

                                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent mb-8"></div>

                                    <ul className="space-y-5 relative z-10">
                                        {plan.features.map(feat => (
                                            <li key={feat} className="flex items-start text-gray-300 group/item">
                                                <div className="mr-4 mt-1 w-5 h-5 rounded-full bg-white/5 flex items-center justify-center transition-colors duration-300 flex-shrink-0 group-hover:bg-neonBlue/10">
                                                    <Check className="text-neonBlue w-3 h-3" strokeWidth={3} />
                                                </div>
                                                <span className="font-light transition-colors duration-300">{feat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Exact User Requested CTA */}
                                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-8 relative z-10">
                                    <button className={`w-full py-4 rounded-2xl font-bold tracking-wide transition-all duration-300 relative overflow-hidden group/btn ${plan.popular
                                        ? 'bg-neonBlue text-black shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:shadow-[0_0_25px_rgba(0,240,255,0.4)]'
                                        : 'bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black'
                                        }`}>
                                        <span className="relative z-10">Request Quote</span>
                                        {/* Button hover effect */}
                                        {plan.popular && (
                                            <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
                                        )}
                                    </button>
                                </motion.div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            <div className="relative z-20 mt-10">
                <CTA />
            </div>
        </motion.div>
    );
}
