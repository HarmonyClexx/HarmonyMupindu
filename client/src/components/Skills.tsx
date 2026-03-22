import { motion } from 'framer-motion';

const skills = [
    { category: "Languages", items: ["TypeScript", "Java", "Python", "JavaScript", "C#"] },
    { category: "Backend & Infra", items: ["Node.js", "NestJS", "Spring Boot", "AWS", "Docker", "Kubernetes"] },
    { category: "Distributed Systems", items: ["Apache Kafka", "Redis", "Temporal.io"] },
    { category: "Databases", items: ["MongoDB", "Oracle SQL", "MySQL", "PostgreSQL"] },
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-[#0a192f]/50">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 flex items-center">
                    <span className="text-accent font-mono mr-2">02.</span> Tech Stack
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skillGroup, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#112240] p-6 rounded-lg border-b-2 border-transparent hover:border-accent transition-all shadow-xl"
                        >
                            <h3 className="text-accent font-mono mb-4 text-sm uppercase tracking-widest">{skillGroup.category}</h3>
                            <ul className="space-y-2 text-slate-300">
                                {skillGroup.items.map(item => (
                                    <li key={item} className="flex items-center gap-2">
                                        <span className="text-accent text-xs">▹</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;