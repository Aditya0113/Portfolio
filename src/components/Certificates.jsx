import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import Tilt from 'react-parallax-tilt';
import { ExternalLink, X, Plus } from 'lucide-react';

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (selectedCert) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedCert]);

    const certificates = [
        {
            name: "Data Analytics Job Simulation",
            issuer: "Deloitte Australia | Forage",
            date: "July 2025",
            type: "Professional Simulation",
            description: "Completed a job simulation involving data quality assessment, data insights, and presentation of findings.",
            link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_zx6AfKLR6ZbY6P2yC_1752341833333_completion_certificate.pdf",
            image: "/deloitte-cert.png"
        },
        {
            name: "AWS: Data Analytics",
            issuer: "Amazon Web Services | Whizlabs",
            date: "July 2025",
            type: "Cloud Analytics",
            description: "Comprehensive training in AWS data analytics services and cloud-based data solutions.",
            link: "https://www.coursera.org/account/accomplishments/verify/C8LI7MNHHJ5Z",
            image: "/aws-cert.png"
        },
        {
            name: "Data Analytics MasterClass",
            issuer: "NoviTech R&D Pvt. Ltd.",
            date: "July 2025",
            type: "Data Analytics",
            description: "Successfully completed a 30-day MasterClass in Data Analytics.",
            link: "https://drive.google.com/file/d/1pOjtbHFkrp15dnpNYItC7CzTk3fl6qmN/view?usp=sharing",
            image: "/novitech-cert.png"
        },
        {
            name: "Data Structures and Algorithms",
            issuer: "GeeksforGeeks",
            date: "Dec 2024",
            type: "Course Completion",
            description: "Comprehensive course covering fundamental data structures and algorithm design patterns.",
            link: "https://www.geeksforgeeks.org/certificate/c2ee2f8d230857bd0d2b48cf280e499f",
            image: "/gfg-cert.png"
        },
        {
            name: "Introduction to MS Excel",
            issuer: "Microsoft | SimpliLearn",
            date: "July 2025",
            type: "Certification",
            description: "Foundational training in Microsoft Excel, covering formulas, functions, and data management.",
            link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzc3IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODY2NjU3Nl81NzU2NzM4MTc1MzE3NzkwMzY1OS5wbmciLCJ1c2VybmFtZSI6IkFkaXR5YSBSYWoifQ%3D%3D&utm_source=shared-certificate",
            image: "/excel-cert.png"
        },
        {
            name: "Excel Automation using ChatGPT",
            issuer: "Microsoft | SimpliLearn",
            date: "July 2025",
            type: "Automation",
            description: "Advanced Excel automation techniques using AI-powered tools and ChatGPT integration.",
            link: "https://lms.simplilearn.com/courses/6062/Excel%20Automation%20using%20ChatGPT/certificate/download-skillup",
            image: "/excel-automation-cert.png"
        },
        {
            name: "Code-A-Haunt 24 Hour Hackathon",
            issuer: "CodingBlocks LPU",
            date: "Mar 2024",
            type: "Hackathon Participation",
            description: "Participated in the 24-hour Code-A-Haunt Hackathon showcasing strong coding and problem-solving skills.",
            link: "https://drive.google.com/file/d/1z25zK7OGONq222CQ64h15TCA7fZ9eLkT/view?usp=sharing",
            image: "/hackathon-cert.png"
        },
    ];

    const headingText = "Certifications".split("");

    return (
        <section id="certificates" className="py-24 relative overflow-hidden px-4 min-h-[100vh]">
            {/* Background elements */}
            <div className="absolute top-[10%] left-[50%] -translate-x-1/2 w-[500px] h-[500px] bg-slate-800/20 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 flex justify-center flex-wrap uppercase tracking-widest">
                        {headingText.map((letter, i) => (
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
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="flex justify-center items-center gap-4 text-[10px] md:text-xs tracking-[0.2em] font-bold text-slate-500 mb-8"
                    >
                        <span className="px-4 py-2 rounded-full border border-white/5 bg-white/[0.02]">CLICK IMAGE TO ENLARGE</span>
                        <span className="px-4 py-2 rounded-full border border-white/5 bg-white/[0.02]">VERIFIED LEARNING</span>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => {
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                                className="glass-panel rounded-[2rem] overflow-hidden flex flex-col relative group border border-white/5 hover:border-white/10 transition-all duration-500 bg-[#0B0C10]/60 shadow-xl"
                            >
                                {/* Certificate Header / Image Container */}
                                <div 
                                    className="w-full h-56 bg-slate-900 relative cursor-pointer overflow-hidden border-b border-white/5"
                                    onClick={() => setSelectedCert(cert)}
                                >
                                    <div className="absolute inset-0 bg-[#0B0C10] animate-pulse"></div>
                                    <img 
                                        src={cert.image} 
                                        alt={cert.name} 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 relative z-10"
                                    />
                                    {/* Hover overlay hint */}
                                    <div className="absolute inset-0 bg-[#0B0C10]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center pointer-events-none">
                                        <div className="px-6 py-2.5 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white text-[11px] font-bold tracking-[0.2em] uppercase shadow-xl border border-white/20">
                                            Open Preview
                                        </div>
                                    </div>
                                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0B0C10] to-transparent z-10"></div>
                                </div>
                                
                                {/* Certificate Body */}
                                <div className="p-8 flex flex-col flex-grow relative z-10">
                                    <div className="flex justify-between items-center mb-6">
                                        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-400">
                                            Verified
                                        </span>
                                        <span className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[10px] font-mono font-bold text-slate-300">
                                            {(index + 1).toString().padStart(2, '0')}
                                        </span>
                                    </div>

                                    <h3 className="text-[clamp(1.1rem,1.5vw,1.25rem)] font-bold text-white leading-snug mb-2 pr-2 line-clamp-2">
                                        {cert.name}
                                    </h3>
                                    
                                    <p className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 mb-6">
                                        {cert.issuer}
                                    </p>

                                    <p className="text-slate-500 text-[13px] font-light leading-relaxed pr-4 mb-8">
                                        Click the certificate preview to inspect it in full size, then open the original source if available.
                                    </p>
                                    
                                    <div className="mt-auto flex">
                                        {cert.link ? (
                                            <a 
                                                href={cert.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-2 px-5 py-[10px] rounded-full bg-white hover:bg-slate-200 transition-colors text-black text-[11px] font-bold tracking-[0.15em] uppercase"
                                                onClick={(e) => e.stopPropagation()} // Prevent modal opening if they click the direct link
                                            >
                                                View Certificate
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                                            </a>
                                        ) : (
                                            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400">
                                                Preview Only
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Modal Overlay */}
            {mounted && createPortal(
                <AnimatePresence>
                    {selectedCert && (
                        <div className="fixed inset-0 z-[99999] flex items-center justify-center">
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 bg-[#0B0C10]/90 backdrop-blur-xl"
                                onClick={() => setSelectedCert(null)}
                            />

                            {/* Modal Content */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                className="relative w-full max-w-[1000px] max-h-[90vh] mx-4 flex flex-col bg-[#11131A] rounded-2xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden"
                            >
                                {/* Close button */}
                                <button 
                                    onClick={() => setSelectedCert(null)}
                                    className="absolute top-4 right-4 z-50 w-10 h-10 bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full border border-white/10 text-white flex items-center justify-center transition-all hover:scale-110"
                                >
                                    <X size={20} />
                                </button>

                                {/* Large Image Preview */}
                                <div className="w-full bg-[#0B0C10] flex items-center justify-center overflow-hidden h-[60vh] md:h-[70vh] border-b border-white/10 relative">
                                    <img 
                                        src={selectedCert.image} 
                                        alt={selectedCert.name}
                                        className="w-full h-full object-contain p-2"
                                        aria-label="Certificate Preview Fullscreen"
                                    />
                                </div>

                                {/* Modal Footer */}
                                <div className="p-6 md:px-8 md:py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 bg-[#11131A]">
                                    <div>
                                        <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-1">
                                            {selectedCert.name}
                                        </h2>
                                        <p className="text-[12px] uppercase tracking-[0.2em] font-bold text-slate-500">
                                            {selectedCert.issuer}
                                        </p>
                                    </div>

                                    {selectedCert.link && (
                                        <a 
                                            href={selectedCert.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-3 px-6 py-3 md:px-8 md:py-4 rounded-full bg-white text-black font-bold text-[11px] md:text-xs tracking-[0.2em] uppercase transition-all hover:scale-105 hover:bg-slate-200 shrink-0 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                                        >
                                            Open Certificate
                                            <ExternalLink size={16} />
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </section>
    );
};

export default Certificates;
