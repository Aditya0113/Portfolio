import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const technicalSkills = [
        { name: "Python", level: 88, category: "Programming" },
        { name: "SQL", level: 85, category: "Database" },
        { name: "Power BI", level: 95, category: "Visualization" },
        { name: "Excel", level: 92, category: "Spreadsheet" },
        { name: "Pandas", level: 82, category: "Library" },
        { name: "Matplotlib/Seaborn", level: 75, category: "Visualization" }
    ];

    const tools = [
        "Python", "SQL", "Power BI", "Excel", "Pandas", "NumPy",
        "Matplotlib", "Seaborn", "Plotly", "Jupyter", "Git",
        "HTML/CSS", "JavaScript"
    ];

    const competencies = [
        "Data Mining", "Statistical Modeling",
        "Dashboard Development", "Trend Analysis"
    ];

    const headingText = "Technical Skills".split("");

    return (
        <section id="skills" className="py-24 relative overflow-hidden px-4">
            {/* Background elements */}
            <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 flex justify-center flex-wrap">
                        {headingText.map((letter, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                className={letter === ' ' ? 'mr-3' : (i >= 9 ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#00bfff] to-[#C56CEF]' : '')}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Technical Proficiency */}
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="glass-card p-8 md:p-10 rounded-3xl"
                        >
                            <h3 className="text-2xl font-bold text-white mb-8 tracking-tight flex items-center gap-3">
                                <span className="w-8 h-1 bg-gradient-to-r from-[#00bfff] to-transparent rounded-full"></span>
                                Technical Proficiency
                            </h3>
                            <div className="space-y-8">
                                {technicalSkills.map((skill, index) => (
                                    <div key={index} className="group cursor-default">
                                        <div className="flex justify-between items-end mb-3">
                                            <span className="text-white font-medium text-base group-hover:text-[#00bfff] transition-colors">{skill.name}</span>
                                            <div className="flex items-center gap-3">
                                                <span className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-md bg-white/5 text-slate-400 border border-white/10">{skill.category}</span>
                                                <span className="text-white font-mono text-sm font-bold flex items-center gap-1 group-hover:text-glow transition-all">
                                                    {skill.level} <span className="text-[#C56CEF]">%</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="h-1 bg-white/5 rounded-full overflow-hidden relative">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                                                className="h-full bg-gradient-to-r from-[#00bfff] to-[#C56CEF] rounded-full relative"
                                            >
                                                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-r from-transparent to-white/50 blur-[2px]"></div>
                                            </motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Tools & Competencies */}
                    <div className="space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="glass-card p-8 md:p-10 rounded-3xl"
                        >
                            <h3 className="text-2xl font-bold text-white mb-8 tracking-tight flex items-center gap-3">
                                <span className="w-8 h-1 bg-gradient-to-r from-[#C56CEF] to-transparent rounded-full"></span>
                                Tools & Technologies
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {tools.map((tool, index) => (
                                    <motion.span
                                        key={index}
                                        whileHover={{ y: -3, scale: 1.05 }}
                                        className="px-5 py-2 glass-panel rounded-xl text-slate-300 text-sm font-medium hover:text-[#00bfff] hover:border-[#00bfff]/50 transition-colors cursor-default shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_rgba(0,191,255,0.2)]"
                                    >
                                        {tool}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="glass-card p-8 md:p-10 rounded-3xl"
                        >
                            <h3 className="text-2xl font-bold text-white mb-8 tracking-tight flex items-center gap-3">
                                <span className="w-8 h-1 bg-gradient-to-r from-[#FF5F56] to-transparent rounded-full"></span>
                                Core Competencies
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {competencies.map((comp, index) => (
                                    <div key={index} className="flex items-center gap-4 group">
                                        <div className="w-2 h-2 rounded-full bg-[#FF5F56] group-hover:shadow-[0_0_10px_#FF5F56] transition-shadow duration-300"></div>
                                        <span className="text-slate-300 text-base font-light group-hover:text-white transition-colors">{comp}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
