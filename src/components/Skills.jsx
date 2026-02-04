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

    return (
        <section id="skills" className="py-20 bg-slate-950 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Technical <span className="text-cyan-400">Proficiency</span></h2>
                    <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full mb-10 opacity-50"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Technical Proficiency */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800"
                    >
                        <h3 className="text-3xl font-bold text-white mb-8">Technical Proficiency</h3>
                        <div className="space-y-6">
                            {technicalSkills.map((skill, index) => (
                                <div key={index}>
                                    <div className="flex justify-between items-end mb-2">
                                        <span className="text-white font-medium text-lg">{skill.name}</span>
                                        <div className="flex items-center gap-3">
                                            <span className="text-xs px-2 py-0.5 rounded bg-cyan-900/30 text-cyan-400 border border-cyan-500/20">{skill.category}</span>
                                            <span className="text-slate-400 text-base">{skill.level}%</span>
                                        </div>
                                    </div>
                                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.2 }}
                                            className="h-full bg-cyan-500 rounded-full"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Tools & Competencies */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800"
                        >
                            <h3 className="text-3xl font-bold text-white mb-8">Tools & Technologies</h3>
                            <div className="flex flex-wrap gap-3">
                                {tools.map((tool, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-slate-950 border border-slate-800 rounded-full text-slate-300 text-base hover:border-cyan-500/50 hover:text-cyan-400 transition-colors cursor-default"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800"
                        >
                            <h3 className="text-3xl font-bold text-white mb-8">Core Competencies</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {competencies.map((comp, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                                        <span className="text-slate-300 text-lg">{comp}</span>
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
