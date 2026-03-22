import { useEffect, useState } from 'react';
import { fetchProjects } from '../services/api';
import type {Project} from '../types';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetchProjects().then(res => setProjects(res.data.data));
    }, []);

    return (
        <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 flex items-center">
                <span className="text-accent font-mono mr-2">03.</span> Some Things I’ve Built
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((p) => (
                    <motion.div
                        key={p._id}
                        whileHover={{ y: -10 }}
                        className="bg-[#112240] p-8 rounded-lg border border-transparent hover:border-accent/30 transition-all"
                    >
                        <div className="flex justify-between items-start mb-4">
              <span className="text-accent text-xs font-mono px-2 py-1 border border-accent rounded">
                {p.category}
              </span>
                            <div className="flex gap-4 text-slate-300">
                                {p.githubLink && <a href={p.githubLink}><Github size={20} /></a>}
                                {p.liveLink && <a href={p.liveLink}><ExternalLink size={20} /></a>}
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{p.title}</h3>
                        <p className="text-slate-400 mb-6">{p.description}</p>
                        <div className="flex flex-wrap gap-3">
                            {p.techStack.map(tech => (
                                <span key={tech} className="text-xs font-mono text-accent/80">{tech}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
export default Projects;