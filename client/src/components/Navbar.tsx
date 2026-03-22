import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link to="hero" smooth={true} className="cursor-pointer flex items-center gap-2 text-accent font-bold text-xl">
                    <Terminal size={24} />
                    <span className="text-white font-mono">Harmony.dev</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link, i) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            spy={true}
                            activeClass="text-accent"
                            className="text-slate-300 hover:text-accent font-mono text-sm cursor-pointer transition-colors"
                        >
                            <span className="text-accent mr-1">0{i + 1}.</span> {link.name}
                        </Link>
                    ))}
                    <a
                        href="/HarmonyMupinduResume.pdf"
                        target="_blank"
                        className="px-5 py-2 border border-accent text-accent rounded hover:bg-accent/10 transition-all font-mono text-sm"
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden text-accent cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={30} /> : <Menu size={30} />}
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        className="fixed inset-y-0 right-0 w-3/4 bg-[#112240] z-40 flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        {navLinks.map((link, i) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                onClick={() => setIsOpen(false)}
                                className="text-xl text-slate-300 font-mono"
                            >
                                <span className="text-accent mr-2">0{i + 1}.</span> {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;