import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, Send } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const Hero = () => {
    const nameText = "Aditya Raj".split("");

    return (
        <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-24 pb-16 px-4">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-[#C56CEF]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute bottom-[0%] right-[-10%] w-[50%] h-[50%] bg-[#00bfff]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '6s' }} />
            </div>

            <div className="z-10 max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20">
                {/* Left Column: Image Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-full md:w-1/2 flex justify-center md:justify-start lg:ml-10"
                >
                    <motion.div
                        animate={{ y: [-15, 15, -15] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        className="w-full flex justify-center"
                    >
                        <Tilt 
                            tiltMaxAngleX={10} 
                            tiltMaxAngleY={10} 
                            perspective={1000} 
                            scale={1.03} 
                            transitionSpeed={2000}
                            className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[460px] relative pointer-events-auto cursor-pointer group"
                        >
                            {/* Frame overlay/glow */}
                            <div className="absolute -inset-1 bg-gradient-to-tr from-[#00bfff] to-[#C56CEF] rounded-[2rem] blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none"></div>
                            
                            {/* main image container - replacing old circle */}
                            <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-slate-900 border-[1px] border-white/10 shadow-2xl">
                                <img 
                                    src="/aditya-profile.jpg" 
                                    alt="Aditya Raj" 
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                />
                                {/* Bottom dark gradient for blending in space context */}
                                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B0C10]/80 to-transparent pointer-events-none"></div>
                                {/* Tint hover overlay overlay */}
                                <div className="absolute inset-0 bg-[#00bfff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay"></div>
                            </div>
                        </Tilt>
                    </motion.div>
                </motion.div>

                {/* Right Column: Content */}
                <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start z-10 pointer-events-auto">
                    <div className="mb-2">
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight flex justify-center md:justify-start flex-wrap">
                            {nameText.map((letter, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, y: 50, rotateX: -90 }}
                                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.05, type: 'spring', damping: 10 }}
                                    className={letter === ' ' ? 'mr-4' : 'text-glow'}
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </h1>
                        <motion.h2 
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#C56CEF] to-[#00bfff] font-bold tracking-wide"
                        >
                            Data Analyst & Business Intelligence Specialist
                        </motion.h2>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                        className="text-slate-400 text-lg mb-10 max-w-lg leading-relaxed font-light mt-4"
                    >
                        Transforming raw data into actionable insights with expertise in Python, SQL, Power BI, and statistical analysis.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1, duration: 0.5 }}
                        className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start items-center mb-12 w-full"
                    >
                        <a
                            href="https://docs.google.com/document/d/1sK_oA7KiFQFG8tYweYBpvAR9SsJBB4RgTS2gCEmLSwo/edit?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 glass-panel text-white px-8 py-4 rounded-xl hover:shadow-[inset_0_0_20px_rgba(197,108,239,0.5)] transition-all duration-300 group w-full sm:w-auto"
                        >
                            <Download size={20} className="text-[#C56CEF] group-hover:scale-110 transition-transform" />
                            <span className="font-semibold tracking-wide">Download Resume</span>
                        </a>
                        <a
                            href="#contact"
                            className="flex items-center justify-center gap-3 glass-panel text-white px-8 py-4 rounded-xl hover:shadow-[inset_0_0_20px_rgba(0,191,255,0.5)] transition-all duration-300 group w-full sm:w-auto"
                        >
                            <Send size={20} className="text-[#00bfff] group-hover:scale-110 transition-transform" />
                            <span className="font-semibold tracking-wide">Contact Me</span>
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.3, duration: 0.5 }}
                        className="flex gap-6 justify-center md:justify-start"
                    >
                        <SocialLink href="https://linkedin.com/in/adityaraj0213" icon={<Linkedin size={22} />} hoverColor="hover:text-[#0077b5]" />
                        <SocialLink href="https://github.com/Aditya0113" icon={<Github size={22} />} hoverColor="hover:text-white" />
                        <SocialLink href="mailto:kumarm8445@gmail.com" icon={<Mail size={22} />} hoverColor="hover:text-[#EA4335]" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const SocialLink = ({ href, icon, hoverColor }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`p-3 rounded-full glass-panel text-slate-400 ${hoverColor} hover:-translate-y-1 transition-all duration-300`}
    >
        {icon}
    </a>
);

export default Hero;
