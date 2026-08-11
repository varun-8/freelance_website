import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import TechMarquee from '../components/TechMarquee';
import Services from '../components/Services';
import DeviceShowcase from '../components/DeviceShowcase';
import WhyUs from '../components/WhyUs';
import CTA from '../components/CTA';
import ScrollReveal from '../components/ScrollReveal';

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full flex flex-col items-center overflow-x-hidden"
        >
            {/* Hero Section with Realistic Engineering Showcase */}
            <Hero />
            
            {/* Enterprise Tech Stack Single Line Marquee */}
            <ScrollReveal type="fade-up" duration={0.8} className="w-full">
                <TechMarquee />
            </ScrollReveal>

            {/* Core Services Grid */}
            <ScrollReveal type="fade-up" duration={0.8} className="w-full">
                <Services />
            </ScrollReveal>

            {/* Multi-Device Architecture Showcase with Realistic Device Mockup */}
            <ScrollReveal type="fade-up" duration={0.8} className="w-full">
                <DeviceShowcase />
            </ScrollReveal>

            {/* Why Choose Us */}
            <ScrollReveal type="fade-up" duration={0.8} className="w-full">
                <WhyUs />
            </ScrollReveal>

            {/* High Impact CTA Banner */}
            <ScrollReveal type="fade-up" duration={0.8} className="w-full">
                <CTA />
            </ScrollReveal>
        </motion.div>
    );
}
