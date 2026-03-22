import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
    return (
        <div className="bg-primary min-h-screen">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <footer className="py-10 text-center text-slate-500 font-mono text-sm border-t border-slate-800">
                Designed & Built by Harmony Mupindu © {new Date().getFullYear()}
            </footer>
        </div>
    );
}

export default App;