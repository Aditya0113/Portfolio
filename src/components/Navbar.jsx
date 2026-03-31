import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, Briefcase, Cpu, FolderGit2, Award, Mail, Home, Terminal } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('Home');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const handleScroll = () => {
            const sectionMap = [
                { id: 'home', name: 'Home' },
                { id: 'about', name: 'About' },
                { id: 'experience', name: 'Experience' },
                { id: 'skills', name: 'Skills' },
                { id: 'code', name: 'Code' },
                { id: 'projects', name: 'Projects' },
                { id: 'certificates', name: 'Certificates' },
                { id: 'contact', name: 'Contact' }
            ];
            
            let current = 'Home';
            for (const section of sectionMap) {
                const element = document.getElementById(section.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If the section top crosses the 40% height of viewport
                    if (rect.top <= window.innerHeight * 0.4) {
                        current = section.name;
                    }
                }
            }
            
            setActiveSection((prev) => current !== prev ? current : prev);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Check once on mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const navLinks = [
        { name: 'Home', href: '#home', icon: <Home size={20} /> },
        { name: 'About', href: '#about', icon: <User size={20} /> },
        { name: 'Experience', href: '#experience', icon: <Briefcase size={20} /> },
        { name: 'Skills', href: '#skills', icon: <Cpu size={20} /> },
        { name: 'Code', href: '#code', icon: <Terminal size={20} /> },
        { name: 'Projects', href: '#projects', icon: <FolderGit2 size={20} /> },
        { name: 'Certificates', href: '#certificates', icon: <Award size={20} /> },
        { name: 'Contact', href: '#contact', icon: <Mail size={20} /> },
    ];

    return (
        <>
            <motion.nav 
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="fixed top-0 left-0 w-full z-50 pt-6 px-4 md:px-8 pointer-events-none"
            >
                <div className="flex justify-between items-center max-w-[1800px] mx-auto w-full pointer-events-auto">
                    
                    {/* Far Left Side Label (Outside Pill) */}
                    <div className="hidden lg:flex flex-col text-[11px] font-bold tracking-[0.2em] leading-[1.3] text-slate-500 w-[140px] shrink-0">
                        <span>DATA</span>
                        <span>ANALYST</span>
                        <span>SPECIALIST</span>
                    </div>

                    {/* Wide Center Pill */}
                    <div className="flex-1 max-w-5xl mx-auto bg-[#1A1F2E]/80 backdrop-blur-3xl border border-white/5 p-2 rounded-full flex items-center justify-between shadow-[0_10px_40px_rgba(0,0,0,0.6)] transition-all">
                        
                        {/* Avatar & Name Area (Left Side of Pill) */}
                        <div className="flex items-center gap-4 pl-2 shrink-0 lg:w-[220px]">
                            <div className="w-[42px] h-[42px] rounded-full bg-gradient-to-br from-[#00bfff] to-[#C56CEF] flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(0,191,255,0.3)] relative overflow-hidden">
                                <img src="/aditya-profile.jpg" alt="Aditya Raj" className="absolute inset-[1.5px] w-[calc(100%-3px)] h-[calc(100%-3px)] rounded-full object-cover z-10" />
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#00bfff] mb-0.5">Portfolio</span>
                                <span className="text-[14px] font-bold text-white leading-none tracking-wide whitespace-nowrap">Aditya Raj</span>
                            </div>
                        </div>

                        {/* Navigation Links Area (Right side of Pill) */}
                        <div className="hidden lg:flex flex-1 items-center justify-end gap-1 pr-2 relative">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setActiveSection(link.name)}
                                    className={`px-5 py-2.5 rounded-full text-[13px] font-semibold tracking-wider transition-colors duration-300 relative group ${
                                        activeSection === link.name 
                                            ? 'text-white' 
                                            : 'text-slate-400 hover:text-white hover:bg-white/5'
                                    }`}
                                >
                                    {activeSection === link.name && (
                                        <motion.div
                                            layoutId="navbar-indicator"
                                            className="absolute inset-0 bg-white/5 rounded-full z-0 pointer-events-none"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        >
                                            <div className="absolute bottom-1 left-5 right-5 h-[1px] bg-white rounded-full"></div>
                                        </motion.div>
                                    )}
                                    <span className="relative z-10">{link.name}</span>
                                </a>
                            ))}
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden p-3 ml-auto mr-1 text-slate-300 hover:text-white rounded-full hover:bg-white/10 transition-colors"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>

                    {/* Far Right Area (Empty Spacer to balance Far Left Label) */}
                    <div className="hidden lg:block w-[140px] shrink-0"></div>
                </div>
            </motion.nav>

            {/* Mobile Menu Backdrop & Drawer */}
            {mounted && createPortal(
                <AnimatePresence>
                    {isOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsOpen(false)}
                                className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-[9998] xl:hidden"
                                style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9998 }}
                            />

                            {/* Side Drawer */}
                            <motion.div
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                                className="fixed top-0 right-0 h-full w-[75%] max-w-xs border-l border-slate-800 shadow-2xl xl:hidden flex flex-col pt-24 px-6"
                                style={{ backgroundColor: '#020617', zIndex: 9999, position: 'fixed', top: 0, right: 0 }}
                            >
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white transition-colors hover:bg-slate-800 rounded-full"
                                    aria-label="Close Menu"
                                >
                                    <X size={32} />
                                </button>

                                <div className="flex flex-col gap-2">
                                    {navLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => {
                                                setIsOpen(false);
                                                setActiveSection(link.name);
                                            }}
                                            className={`group flex items-center gap-4 p-4 rounded-xl transition-all border border-transparent hover:border-slate-700/50 ${
                                                activeSection === link.name
                                                    ? 'bg-slate-800/80 text-white'
                                                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                                            }`}
                                        >
                                            <span className={`${activeSection === link.name ? 'text-[#00bfff]' : 'text-slate-500 group-hover:text-cyan-400'} transition-colors`}>
                                                {link.icon}
                                            </span>
                                            <span className="text-base font-medium tracking-wide">
                                                {link.name}
                                            </span>
                                        </a>
                                    ))}
                                </div>

                                <div className="mt-auto mb-8 pt-6 border-t border-slate-800">
                                    <p className="text-xs text-slate-500 text-center uppercase tracking-widest">
                                        © 2024 Aditya Raj
                                    </p>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
};

export default Navbar;
