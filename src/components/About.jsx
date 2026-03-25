import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Award, Target, Zap, Shield, Database, Lightbulb, TrendingUp, Cpu } from 'lucide-react';

const About = () => {
    // For the terminal typing effect
    const [text, setText] = useState('');
    const fullText = `root@aditya-data:~# ./init_analysis.sh\n[+] Initializing data pipeline...\n[+] Cleaning and preprocessing dataset... OK\n[!] Insight generated: 20% growth identified.\nroot@aditya-data:~# `;
    
    useEffect(() => {
        let currentIndex = 0;
        const intervalId = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setText(fullText.substring(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(intervalId);
            }
        }, 50);
        return () => clearInterval(intervalId);
    }, []);

    const headingText = "About Me".split("");

    return (
        <section id="about" className="py-24 relative overflow-hidden px-4">
            {/* Background Accents */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] bg-cyan-900/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Subtitle */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 flex justify-center flex-wrap">
                        {headingText.map((letter, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                className={letter === ' ' ? 'mr-3' : (i >= 6 ? 'text-[#00bfff] text-glow' : '')}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </h2>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-slate-400 text-lg font-light tracking-wide"
                    >
                        Passionate about empowering businesses through data-driven insights and innovative analytics
                    </motion.p>
                </div>

                {/* Metrics Row (Interactive Floating Tiles) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
                >
                    <MetricCard icon={<Award size={32} />} title="5+" subtitle="Projects Completed" />
                    <MetricCard icon={<Target size={32} />} title="100%" subtitle="Commitment" />
                    <MetricCard icon={<Zap size={32} />} title="<24hrs" subtitle="Turnaround Time" />
                    <MetricCard icon={<Shield size={32} />} title="High" subtitle="Data Accuracy" />
                </motion.div>

                {/* Split Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 item-start">
                    {/* Left Column: Philosophy & Terminal */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-12"
                    >
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-6 tracking-tight flex items-center gap-3">
                                <span className="w-8 h-1 bg-gradient-to-r from-[#C56CEF] to-transparent rounded-full"></span>
                                My Data Philosophy
                            </h3>
                            <div className="glass-panel p-6 md:p-8 rounded-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl"></div>
                                <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 font-light relative z-10">
                                    I’m Aditya Raj, a data enthusiast focused on transforming raw data into actionable business insights that drive meaningful decisions.
                                </p>
                                <p className="text-white font-bold text-base md:text-lg tracking-wide mb-6 relative z-10">
                                   My target role: Data Analyst
                                </p>
                                <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 font-light relative z-10">
                                    I specialize in analyzing complex datasets to uncover patterns, trends, and actionable insights. Rather than just building dashboards, I focus on how data can be used to identify inefficiencies, reduce risks, and highlight opportunities for growth.
                                </p>
                                <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 font-light relative z-10">
                                    With a strong foundation in statistical analysis, I apply analytical thinking to interpret data accurately and support decision-making. I also work on validating and stress-testing data to ensure reliability and uncover hidden issues before they impact performance.
                                </p>
                                <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 font-light relative z-10">
                                    Beyond analysis, I’m interested in business intelligence, data visualization, and improving data workflows using modern tools. I continuously enhance my skills by working on real-world projects that combine data analysis with practical problem-solving.
                                </p>
                                <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 font-light relative z-10">
                                    My goal is to become a Data Analyst who delivers clear, impactful insights that help organizations make better and faster decisions.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6 tracking-tight flex items-center gap-3">
                                <span className="w-8 h-1 bg-gradient-to-r from-[#00bfff] to-transparent rounded-full"></span>
                                Analysis Workflow
                            </h3>
                            {/* Terminal Window (Floating IDE) */}
                            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1000} scale={1.02} transitionSpeed={2000}>
                                <motion.div 
                                    animate={{ y: [-5, 5, -5] }}
                                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                    className="glass-panel rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] glow-border"
                                >
                                    {/* Terminal Header */}
                                    <div className="bg-black/40 backdrop-blur-md px-4 py-3 flex items-center gap-2 border-b border-white/5 relative">
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-[0_0_10px_rgba(255,95,86,0.5)]"></div>
                                            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-[0_0_10px_rgba(255,189,46,0.5)]"></div>
                                            <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-[0_0_10px_rgba(39,201,63,0.5)]"></div>
                                        </div>
                                        <span className="absolute left-1/2 -translate-x-1/2 text-slate-400 text-xs font-mono tracking-widest">root@aditya-data</span>
                                    </div>
                                    {/* Terminal Body */}
                                    <div className="p-6 font-mono text-xs md:text-sm leading-relaxed h-[240px] overflow-y-auto bg-[#0A0C10]/80">
                                        <pre className="text-slate-300 whitespace-pre-wrap font-mono relative">
                                            {text.split('\n').map((line, i) => (
                                                <div key={i} className="mb-1">
                                                    {line.startsWith('[!]') ? (
                                                        <span className="text-[#FFBD2E]">{line}</span>
                                                    ) : line.startsWith('[+]') ? (
                                                        <span className="text-[#27C93F]">{line}</span>
                                                    ) : line.startsWith('root@') ? (
                                                        <span className="text-[#00bfff]">{line}</span>
                                                    ) : (
                                                        line
                                                    )}
                                                </div>
                                            ))}
                                            <span className="inline-block w-2 h-4 bg-[#C56CEF] animate-pulse absolute mt-1 ml-1 rounded-[1px] shadow-[0_0_8px_#C56CEF]"></span>
                                        </pre>
                                    </div>
                                </motion.div>
                            </Tilt>
                        </div>
                    </motion.div>

                    {/* Right Column: 2x2 Skill Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <h3 className="text-3xl font-bold text-white mb-6 tracking-tight flex items-center gap-3 lg:hidden">
                            <span className="w-8 h-1 bg-gradient-to-r from-[#C56CEF] to-transparent rounded-full"></span>
                            Core Expertise
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-[calc(100%-80px)]">
                            <SkillCard
                                icon={<Database size={24} />}
                                title="Data Analyst"
                                description="Transforming raw datasets into actionable insights using modern analytical frameworks."
                                tags="Python, SQL, Excel"
                                color="#00bfff"
                            />
                            <SkillCard
                                icon={<TrendingUp size={24} />}
                                title="Business Intelligence"
                                description="Designing interactive dashboards and reports to support strategic decision-making."
                                tags="Power BI, Tableau"
                                color="#C56CEF"
                            />
                            <SkillCard
                                icon={<Cpu size={24} />}
                                title="Statistical Analysis"
                                description="Applying statistical methods to identify trends, patterns, and anomalies in complex data."
                                tags="Pandas, Math, DAX"
                                color="#FF5F56"
                            />
                            <SkillCard
                                icon={<Lightbulb size={24} />}
                                title="Problem Solver"
                                description="Approaching business challenges with a logical and structured data-driven mindset."
                                tags="Strategy, Research"
                                color="#27C93F"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const MetricCard = ({ icon, title, subtitle }) => (
    <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20} scale={1.05} transitionSpeed={1000} className="h-full">
        <div className="glass-card p-6 h-full rounded-2xl flex flex-col items-center justify-center text-center cursor-pointer group">
            <div className="mb-4 text-[#00bfff] group-hover:text-[#C56CEF] transition-all duration-500 group-hover:scale-125 group-hover:drop-shadow-[0_0_15px_rgba(197,108,239,0.5)]">
                {icon}
            </div>
            <h4 className="text-3xl font-black text-white mb-2 group-hover:text-glow transition-all duration-300">{title}</h4>
            <p className="text-slate-400 text-xs tracking-[0.2em] font-medium uppercase font-mono">{subtitle}</p>
        </div>
    </Tilt>
);

const SkillCard = ({ icon, title, description, tags, color }) => {
    return (
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.03} transitionSpeed={1500} className="h-full">
            <div className="glass-card p-6 rounded-2xl flex flex-col h-full group relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" style={{ background: `radial-gradient(circle at center, ${color}, transparent 70%)` }}></div>
                
                <div 
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1`}
                    style={{ backgroundColor: `${color}15`, color: color }}
                >
                    {icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 relative z-10 transition-colors duration-300" style={{ '--hover-color': color }}>
                    <span className="group-hover:text-[var(--hover-color)] transition-colors">{title}</span>
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow relative z-10 font-light group-hover:text-slate-300 transition-colors">
                    {description}
                </p>
                
                <div className="mt-auto relative z-10 overflow-hidden pt-2 border-t border-white/5 group-hover:border-white/20 transition-colors">
                    <p 
                        className="text-xs font-mono font-semibold tracking-wider translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
                        style={{ color: color }}
                    >
                        {tags}
                    </p>
                </div>
            </div>
        </Tilt>
    );
};

export default About;
