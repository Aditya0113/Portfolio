import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const Experience = () => {
    const headingText = "Work Experience".split("");

    return (
        <section id="experience" className="py-24 relative overflow-hidden px-4">
            {/* Background elements */}
            <div className="absolute top-[30%] left-[-10%] w-[400px] h-[400px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 flex justify-center flex-wrap">
                        {headingText.map((letter, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                className={letter === ' ' ? 'mr-3' : (i >= 5 ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#C56CEF] to-[#00bfff]' : '')}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </h2>
                </div>

                {/* Vertical Timeline Container */}
                <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-16">
                    {/* Single experience item */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative pl-8 md:pl-16"
                    >
                        {/* Glowing Pulse Node */}
                        <div className="absolute -left-[9px] top-8 w-4 h-4 rounded-full bg-[#C56CEF] shadow-[0_0_20px_#C56CEF] animate-[pulse_2s_ease-in-out_infinite] z-10 box-content border-4 border-[#0B0C10]" />
                        
                        {/* Connecting subtle line glow */}
                        <div className="absolute left-0 top-8 w-[1px] h-32 bg-gradient-to-b from-[#C56CEF] to-transparent shadow-[0_0_10px_#C56CEF] -z-10 blur-[1px]"></div>

                        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} className="w-full">
                            <div className="glass-panel p-8 md:p-10 rounded-3xl relative group xl:overflow-hidden">
                                {/* Hover background glow */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#C56CEF]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                                
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 relative z-10">
                                    <div className="flex items-start gap-5">
                                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(197,108,239,0.15)]">
                                            <Briefcase className="text-[#00bfff]" size={28} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight group-hover:text-glow transition-all duration-300">Data Analyst Intern</h3>
                                            <h4 className="text-[#C56CEF] text-lg font-semibold tracking-wide flex items-center gap-2">
                                                Elevate Labs
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="mt-4 md:mt-0 flex items-center gap-2 text-slate-400 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm self-start">
                                        <Calendar size={16} className="text-[#00bfff]" />
                                        <span className="text-sm font-medium tracking-wide">Oct 2024 - Dec 2024</span>
                                    </div>
                                </div>

                                <ul className="space-y-5 mb-10 relative z-10">
                                    <li className="flex items-start gap-4 text-slate-300 text-base md:text-lg font-light leading-relaxed">
                                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00bfff] to-[#C56CEF] mt-2.5 shrink-0 shadow-[0_0_8px_rgba(0,191,255,0.8)]"></span>
                                        Analyzed large datasets using Python (Pandas, NumPy) and SQL to identify key business trends.
                                    </li>
                                    <li className="flex items-start gap-4 text-slate-300 text-base md:text-lg font-light leading-relaxed">
                                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00bfff] to-[#C56CEF] mt-2.5 shrink-0 shadow-[0_0_8px_rgba(0,191,255,0.8)]"></span>
                                        Created interactive dashboards in Power BI and Tableau, improving data visibility for stakeholders.
                                    </li>
                                    <li className="flex items-start gap-4 text-slate-300 text-base md:text-lg font-light leading-relaxed">
                                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00bfff] to-[#C56CEF] mt-2.5 shrink-0 shadow-[0_0_8px_rgba(0,191,255,0.8)]"></span>
                                        Collaborated with the team to optimize data pipelines and improve reporting efficiency by 20%.
                                    </li>
                                </ul>

                                <div className="flex flex-wrap gap-3 relative z-10">
                                    {["Python", "Pandas", "NumPy", "Matplotlib", "Power BI", "Excel"].map((tech, idx) => (
                                        <span key={idx} className="text-sm font-medium text-[#00bfff] bg-[#00bfff]/10 border border-[#00bfff]/20 px-4 py-2 rounded-xl group-hover:border-[#00bfff]/50 transition-colors">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Tilt>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
