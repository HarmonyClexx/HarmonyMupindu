const About = () => {
    return (
        <section id="about" className="py-24 max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 flex items-center">
                <span className="text-accent font-mono mr-2">01.</span> About Me
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
                <div className="md:col-span-2 text-slate-400 space-y-4 text-lg">
                    <p>
                        I am a Software Developer with over 2 years of experience building and maintaining
                        production-grade systems. My core expertise lies in <span className="text-accent">backend engineering</span>,
                        specifically working with distributed tools like <span className="text-white font-mono">Kafka and Redis</span>.
                    </p>
                    <p>
                        Currently, I am contributing to enterprise-level applications at <span className="text-white">Akiyoshi</span>,
                        focusing on Discovery's Advisor 360 and frontline systems. I am also pursuing my
                        <span className="text-accent"> Honours in Computer Science</span> at the University of Pretoria,
                        with a research focus on AI and LLM systems.
                    </p>
                    <p>
                        I thrive on solving complex architectural problems, whether it's migrating legacy
                        workflows to modern orchestrators like <span className="text-white font-mono">Temporal</span> or
                        optimizing event processing latency.
                    </p>
                </div>
                <div className="relative group">
                    <div className="w-full aspect-square border-2 border-accent rounded-lg absolute top-4 left-4 group-hover:top-2 group-hover:left-2 transition-all"></div>
                    <div className="w-full aspect-square bg-[#112240] rounded-lg overflow-hidden relative">
                        {/* Replace with your image */}
                        <div className="w-full h-full bg-accent/20 flex items-center justify-center text-accent font-mono">
                            [Profile Image]
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;