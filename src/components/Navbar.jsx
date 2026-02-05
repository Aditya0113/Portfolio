import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, Briefcase, Cpu, FolderGit2, Award, Mail } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
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
        { name: 'About', href: '#about', icon: <User size={20} /> },
        { name: 'Experience', href: '#experience', icon: <Briefcase size={20} /> },
        { name: 'Skills', href: '#skills', icon: <Cpu size={20} /> },
        { name: 'Projects', href: '#projects', icon: <FolderGit2 size={20} /> },
        { name: 'Certificates', href: '#certificates', icon: <Award size={20} /> },
        { name: 'Contact', href: '#contact', icon: <Mail size={20} /> },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                <a href="#" className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 tracking-tighter z-50 relative">
                    AR.
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-slate-300 hover:text-cyan-400 transition-colors text-xl font-medium tracking-wide hover:scale-105 transform"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-slate-300 hover:text-cyan-400 transition-colors z-50 relative p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Backdrop & Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-[9998] md:hidden"
                        />

                        {/* Side Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-[75%] max-w-xs border-l border-slate-800 shadow-2xl md:hidden flex flex-col pt-24 px-6"
                            style={{ backgroundColor: '#020617', zIndex: 9999, position: 'fixed', top: 0, right: 0 }}
                        >
                            {/* Close Button Inside Drawer */}
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
                                        onClick={() => setIsOpen(false)}
                                        className="group flex items-center gap-4 p-4 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all border border-transparent hover:border-slate-700/50"
                                    >
                                        <span className="text-cyan-500/70 group-hover:text-cyan-400 transition-colors">
                                            {link.icon}
                                        </span>
                                        <span className="text-lg font-medium tracking-wide">
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
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
