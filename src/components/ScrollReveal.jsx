import { motion } from 'framer-motion';

export default function ScrollReveal({
    children,
    type = 'fade-up',
    delay = 0,
    duration = 0.6,
    className = ""
}) {
    const variants = {
        'fade-up': { opacity: 0, y: 30 },
        'slide-left': { opacity: 0, x: -50 },
        'slide-right': { opacity: 0, x: 50 },
        'scale-in': { opacity: 0, scale: 0.9 }
    };

    const animateTo = {
        opacity: 1, x: 0, y: 0, scale: 1
    };

    return (
        <motion.div
            initial={variants[type]}
            whileInView={animateTo}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
