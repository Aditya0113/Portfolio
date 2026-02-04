import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-slate-900/30 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Professional <span className="text-purple-400">Experience</span></h2>
                    <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full mb-10 opacity-50"></div>
                </motion.div>

                <div className="relative border-l-2 border-slate-800 ml-4 md:ml-0 md:pl-12 space-y-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative pl-8 md:pl-0"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute -left-[9px] md:-left-[57px] top-0 w-6 h-6 rounded-full bg-slate-950 border-4 border-purple-500 z-10 shadow-[0_0_15px_rgba(168,85,247,0.5)]" />

                        <div className="bg-slate-900/40 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-900/10">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-1">Data Analyst Intern</h3>
                                    <h4 className="text-purple-400 text-xl font-medium mb-4">Elevate Labs</h4>
                                    <p className="text-slate-400 mb-6 flex items-center gap-2 text-lg">
                                        <Calendar size={18} />
                                        October 2024 - December 2024
                                    </p>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start gap-3 text-slate-300 text-lg">
                                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2.5 flex-shrink-0"></span>
                                    Analyzed large datasets using Python (Pandas, NumPy) and SQL to identify key business trends.
                                </li>
                                <li className="flex items-start gap-3 text-slate-300 text-lg">
                                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2.5 flex-shrink-0"></span>
                                    Created interactive dashboards in Power BI and Tableau, improving data visibility for stakeholders.
                                </li>
                                <li className="flex items-start gap-3 text-slate-300 text-lg">
                                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2.5 flex-shrink-0"></span>
                                    Collaborated with the team to optimize data pipelines and improve reporting efficiency by 20%.
                                </li>
                            </ul>

                            <div className="flex flex-wrap gap-3">
                                {["Python", "Pandas", "NumPy", "Matplotlib", "Power BI", "Excel"].map((tech, idx) => (
                                    <span key={idx} className="text-sm font-medium text-purple-300 bg-purple-900/20 border border-purple-500/30 px-3 py-1.5 rounded-lg">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
