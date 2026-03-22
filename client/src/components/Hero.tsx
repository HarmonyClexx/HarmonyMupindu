import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="h-screen flex items-center justify-center pt-20">
            <div className="max-w-4xl px-6">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-accent font-mono mb-4"
                >
                    Hi, my name is
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-4"
                >
                    Harmony Mupindu.
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-6xl font-bold text-slate-400 mb-6"
                >
                    I build scalable distributed systems.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="max-w-xl text-slate-400 text-lg mb-10"
                >
                    Software Developer specialized in backend engineering, event-driven architectures (Kafka/Redis),
                    and workflow orchestration. Currently building enterprise solutions at Akiyoshi.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex gap-4"
                >
                    <a href="#projects" className="px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-primary transition-all rounded-md">
                        View My Work
                    </a>
                    <a href="/HarmonyMupinduResume.pdf" target="_blank" className="px-8 py-3 bg-accent text-primary font-bold rounded-md hover:opacity-90 transition-all">
                        Download CV
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
export default Hero;