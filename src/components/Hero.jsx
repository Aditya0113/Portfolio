import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, Send } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-slate-950 px-4 pt-24 pb-16">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-purple-900/20 rounded-full blur-[150px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-cyan-900/20 rounded-full blur-[150px]" />
            </div>

            <div className="z-10 text-center max-w-6xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
                        Aditya Raj
                    </h1>
                    <h2 className="text-2xl md:text-4xl text-slate-300 mb-4 font-light tracking-wide">
                        Data Analyst & Business Intelligence Specialist
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-slate-400 text-xl md:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed"
                >
                    Transforming raw data into actionable insights with expertise in Python, SQL, Power BI, and statistical analysis.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16"
                >
                    <a
                        href="https://drive.google.com/file/d/1ejguYtcXdEmEW7KqgYmLy1545zQYuX_d/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 bg-slate-900/80 text-white px-8 py-4 rounded-lg border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800 transition-all group"
                    >
                        <Download size={20} className="group-hover:text-cyan-400 transition-colors" />
                        <span className="font-medium">Download Resume</span>
                    </a>
                    <a
                        href="#contact"
                        className="flex items-center gap-3 bg-slate-800/50 text-white px-8 py-4 rounded-lg border border-slate-700 hover:border-purple-500/50 hover:bg-slate-800 transition-all group"
                    >
                        <Send size={20} className="group-hover:text-purple-400 transition-colors" />
                        <span className="font-medium">Contact Me</span>
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="flex gap-6 justify-center"
                >
                    <SocialLink href="https://linkedin.com/in/adityaraj0213" icon={<Linkedin size={24} />} />
                    <SocialLink href="https://github.com/Aditya0113" icon={<Github size={24} />} />
                    <SocialLink href="mailto:kumarm8445@gmail.com" icon={<Mail size={24} />} />
                </motion.div>
            </div>
        </section>
    );
};

const SocialLink = ({ href, icon }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 rounded-full bg-slate-800/40 text-slate-400 hover:text-white hover:bg-slate-700 transition-all duration-300"
    >
        {icon}
    </a>
);

export default Hero;
