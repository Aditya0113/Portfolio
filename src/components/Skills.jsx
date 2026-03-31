import React from 'react';
import { motion } from 'framer-motion';
import { Github, Code2, Terminal, ArrowUpRight } from 'lucide-react';

const Skills = () => {
    const techCategories = [
        {
            title: "PROGRAMMING",
            color: "#00bfff",
            skills: ["PYTHON", "C", "C++", "JAVA", "JAVASCRIPT", "KOTLIN"]
        },
        {
            title: "ML & DATA SCIENCE",
            color: "#C56CEF",
            skills: ["MACHINE LEARNING", "PANDAS / NUMPY", "SCIKIT-LEARN", "PYTORCH", "OPENCV", "MATPLOTLIB"]
        },
        {
            title: "BI & ANALYTICS",
            color: "#FF5F56",
            skills: ["POWER BI", "EXCEL", "TABLEAU", "DATA MODELING", "FORECASTING"]
        },
        {
            title: "TOOLS & APIS",
            color: "#27C93F",
            skills: ["MYSQL", "GIT / GITHUB", "EXCEL", "POWER BI", "CURSOR", "HADOOP", "ANTIGRAVITY", "GEMINI API", "VS CODE", "JUPYTER"]
        }
    ];

    const codeProfiles = [
        {
            platform: "GITHUB",
            username: "@Aditya0113",
            icon: <Github size={24} />,
            color: "#ffffff",
            desc: "Explore my open-source projects, ML models, and data analytics repositories.",
            stats: [
                { label: "REPOSITORIES", value: "20+" },
                { label: "CONTRIBUTIONS", value: "350+" },
                { label: "TOP LANGUAGE", value: "Python" }
            ],
            link: "https://github.com/Aditya0113?tab=repositories"
        },
        {
            platform: "LEETCODE",
            username: "@Aditya0113",
            icon: <Code2 size={24} />,
            color: "#FFA116",
            desc: "Solving algorithmic challenges daily — DSA, dynamic programming, and graphs.",
            stats: [
                { label: "PROBLEMS SOLVED", value: "100+" },
                { label: "FOCUS", value: "DSA & Algorithms", highlight: true },
                { label: "APPROACH", value: "Daily Practice", highlight: true }
            ],
            link: "https://leetcode.com/u/KeLheKx7VL/"
        },
        {
            platform: "GEEKSFORGEEKS",
            username: "@adityaraj",
            icon: <Terminal size={24} />,
            color: "#2F8D46",
            desc: "Practising computer science fundamentals and interview preparation.",
            stats: [
                { label: "PROBLEMS SOLVED", value: "100+" },
                { label: "FOCUS", value: "DSA & Algorithms", highlight: true },
                { label: "APPROACH", value: "Daily Practice", highlight: true }
            ],
            link: "https://www.geeksforgeeks.org/profile/kumarmuizf?tab=activity"
        }
    ];

    const techHeading = "Tech Stack".split("");
    const codeHeading = "Code Profiles".split("");

    return (
        <section id="skills" className="py-24 relative overflow-hidden px-4">
            <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#C56CEF]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-[#00bfff]/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* TECH STACK SECTION */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 flex justify-center flex-wrap uppercase tracking-widest">
                        {techHeading.map((letter, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: i * 0.03 }}
                                className={letter === ' ' ? 'mr-3' : 'text-slate-100'}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
                    {techCategories.map((cat, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="glass-panel bg-[#0B0C10]/60 border border-white/5 hover:border-white/10 rounded-3xl p-6 md:p-8 transition-all duration-500 relative overflow-hidden group shadow-xl"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" style={{ backgroundColor: cat.color }}></div>
                            
                            <h3 className="text-sm font-bold text-white mb-8 tracking-widest uppercase flex items-center gap-3 relative z-10">
                                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.color }}></span>
                                {cat.title}
                            </h3>
                            
                            <div className="grid grid-cols-2 gap-3 relative z-10">
                                {cat.skills.map((skill, j) => (
                                    <div key={j} className="bg-white/5 border border-white/5 rounded-2xl py-3 px-2 flex items-center justify-center text-center hover:bg-white/10 hover:border-white/20 transition-all shadow-inner col-span-1 min-h-[50px]">
                                        <span className="text-[10px] md:text-white/80 font-bold text-slate-300 tracking-wider">
                                            {skill}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CODE PROFILES SECTION */}
                <div id="code" className="text-center mb-16 pt-24 mt-[-6rem]">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 flex justify-center flex-wrap uppercase tracking-widest">
                        {codeHeading.map((letter, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: i * 0.03 }}
                                className={letter === ' ' ? 'mr-3' : 'text-slate-100'}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    {codeProfiles.map((profile, i) => (
                        <motion.a
                            href={profile.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="glass-panel bg-[#0B0C10]/60 border border-white/5 hover:border-white/10 rounded-3xl p-8 transition-all duration-500 group relative overflow-hidden flex flex-col shadow-xl cursor-pointer hover:-translate-y-2 hover:shadow-2xl"
                        >
                            <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-[70px] opacity-10 pointer-events-none" style={{ backgroundColor: profile.color }}></div>
                            
                            <div className="flex justify-between items-start mb-6 relative z-10">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                                        {profile.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-black text-white tracking-widest uppercase leading-tight">{profile.platform}</h3>
                                        <p className="text-xs font-mono text-slate-500">{profile.username}</p>
                                    </div>
                                </div>
                                <div className="text-slate-500 group-hover:text-white group-hover:scale-110 group-hover:-translate-y-1 transition-all p-2 -mr-2 -mt-2">
                                    <ArrowUpRight size={20} />
                                </div>
                            </div>

                            <p className="text-sm text-slate-400 font-light leading-relaxed mb-8 relative z-10 min-h-[60px]">
                                {profile.desc}
                            </p>

                            <div className="border-t border-white/5 pt-6 space-y-5 relative z-10 mt-auto">
                                {profile.stats.map((stat, j) => (
                                    <div key={j} className="flex justify-between items-center">
                                        <span className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">{stat.label}</span>
                                        <span className={`text-[13px] font-black ${stat.highlight ? '' : 'text-white'}`} style={stat.highlight ? { color: profile.color } : {}}>
                                            {stat.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* ACTIVITY DASHBOARDS */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Github Activity */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="glass-panel bg-[#0B0C10]/60 border border-white/5 hover:border-white/10 transition-all duration-500 rounded-3xl p-8 lg:col-span-2 relative overflow-hidden shadow-xl"
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-10 h-10 rounded-xl bg-white border border-white/20 flex items-center justify-center text-black">
                                <Github size={20} />
                            </div>
                            <h3 className="text-xl font-black text-white uppercase tracking-widest">GITHUB ACTIVITY</h3>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-white/5 p-6 rounded-2xl flex flex-col justify-center border border-white/5 shadow-inner hover:bg-white/10 transition-colors">
                                <span className="text-4xl font-black text-white mb-2">20+</span>
                                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">TOTAL REPOS</span>
                            </div>
                            <div className="bg-white/5 p-6 rounded-2xl flex flex-col justify-center border border-white/5 shadow-inner hover:bg-white/10 transition-colors">
                                <span className="text-4xl font-black text-white mb-2">50+</span>
                                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">CONTRIBUTIONS</span>
                            </div>
                            <div className="bg-white/5 p-6 rounded-2xl flex flex-col justify-center border border-white/5 shadow-inner hover:bg-white/10 transition-colors">
                                <span className="text-4xl font-black text-white mb-2">15+</span>
                                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">PULL REQUESTS</span>
                            </div>
                            <div className="bg-white/5 p-6 rounded-2xl flex flex-col justify-center border border-white/5 relative overflow-hidden group shadow-inner hover:bg-white/10 transition-colors">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer" />
                                <span className="text-2xl md:text-3xl font-black text-white mb-2">TOP 40%</span>
                                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">GLOBAL RANKING</span>
                            </div>
                        </div>
                    </motion.div>
                    
                    {/* LeetCode Visual */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="glass-panel bg-[#0B0C10]/60 border border-white/5 hover:border-white/10 transition-all duration-500 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between shadow-xl"
                    >
                        <div className="flex items-center gap-4 mb-10 relative z-10">
                            <div className="w-10 h-10 rounded-xl bg-[#FFA116] border border-white/20 flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,161,22,0.4)]">
                                <Code2 size={20} />
                            </div>
                            <h3 className="text-lg font-black text-white uppercase tracking-widest">LEETCODE VISUAL</h3>
                        </div>

                        <div className="w-full h-16 bg-white/5 rounded-xl border border-white/5 flex items-center px-4 relative overflow-hidden mb-8 z-10 shadow-inner">
                            <div className="absolute left-0 top-0 bottom-0 w-[50%] bg-[#FFA116]/10 border-r-2 border-[#FFA116] flex items-center justify-center shadow-[0_0_20px_rgba(255,161,22,0.1)]">
                                <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#FFA116] w-full text-center px-2 truncate">CONSISTENCY STREAK: 25 DAYS</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-5 relative z-10 p-4 border border-white/5 rounded-2xl bg-white/5 shadow-inner">
                            <div className="w-1.5 h-6 bg-[#FFA116] rounded-full shadow-[0_0_10px_rgba(255,161,22,0.5)]"></div>
                            <div>
                                <p className="text-[10px] md:text-xs uppercase font-bold text-white tracking-widest">SOLVED: 100+ PROBLEMS</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* GFG Performance */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="glass-panel bg-[#0B0C10]/60 border border-white/5 hover:border-white/10 transition-all duration-500 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between shadow-xl"
                    >
                        <div className="flex items-center gap-4 mb-10 relative z-10">
                            <div className="w-10 h-10 rounded-xl bg-[#2F8D46] border border-white/20 flex items-center justify-center text-white shadow-[0_0_15px_rgba(47,141,70,0.4)]">
                                <Terminal size={20} />
                            </div>
                            <h3 className="text-lg font-black text-white uppercase tracking-widest">GFG PERFORMANCE</h3>
                        </div>

                        <div className="w-full h-16 bg-white/5 rounded-xl border border-white/5 flex items-center px-4 relative overflow-hidden mb-8 z-10 shadow-inner">
                            <div className="absolute left-0 top-0 bottom-0 w-[75%] bg-[#2F8D46]/10 border-r-2 border-[#2F8D46] flex items-center justify-center shadow-[0_0_20px_rgba(47,141,70,0.1)]">
                                <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#2F8D46] w-full text-center px-2 truncate">CONSISTENCY STREAK: 66 DAYS</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-5 relative z-10 p-4 border border-white/5 rounded-2xl bg-white/5 shadow-inner">
                            <div className="w-1.5 h-6 bg-[#2F8D46] rounded-full shadow-[0_0_10px_rgba(47,141,70,0.5)]"></div>
                            <div>
                                <p className="text-[10px] md:text-xs uppercase font-bold text-white tracking-widest">SOLVED: 100+ PROBLEMS</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Skills;
