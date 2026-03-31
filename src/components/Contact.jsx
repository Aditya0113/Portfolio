import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        emailjs
            .sendForm(
                'service_szow7xj',
                'template_038d8h4',
                form.current,
                {
                    publicKey: 'JogAZhNVErWLUEkkB',
                }
            )
            .then(
                () => {
                    setStatus({
                        type: 'success',
                        message: 'Signal received successfully! I will get back to you soon.',
                    });
                    form.current.reset();
                },
                (error) => {
                    setStatus({
                        type: 'error',
                        message: 'Failed to transmit message. Please try again later.',
                    });
                    console.error('FAILED...', error.text);
                }
            )
            .finally(() => {
                setIsSubmitting(false);
                setTimeout(() => {
                    setStatus(prev => prev.type === 'success' ? { type: '', message: '' } : prev);
                }, 5000);
            });
    };

    const headingText = "Get In Touch".split("");

    return (
        <section id="contact" className="py-24 relative overflow-hidden px-4">
            {/* Background elements */}
            <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 flex justify-center flex-wrap">
                        {headingText.map((letter, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                className={letter === ' ' ? 'mr-3' : 'text-white'}
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
                        className="text-slate-400 max-w-2xl mx-auto text-lg font-light tracking-wide"
                    >
                        Ready to transform data into insights? Let's discuss how I can help drive your business decisions with analytics.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-card p-8 md:p-12 rounded-3xl h-full flex flex-col"
                    >
                        <h3 className="text-3xl font-bold text-white mb-10 tracking-tight">Contact Information</h3>
                        <div className="space-y-8 flex-grow">
                            <ContactItem
                                icon={<Mail size={24} />}
                                title="Email"
                                content="kumarm8445@gmail.com"
                                href="mailto:kumarm8445@gmail.com"
                                color="#00bfff"
                            />
                            <ContactItem
                                icon={<Phone size={24} />}
                                title="Phone"
                                content="+91 9060483918"
                                href="tel:+919060483918"
                                color="#C56CEF"
                            />
                            <ContactItem
                                icon={<MapPin size={24} />}
                                title="Location"
                                content="Navratan Pur, Bari Khagaul, Patna, Bihar 801105"
                                color="#27C93F"
                            />
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/5">
                            <h4 className="text-slate-300 font-medium tracking-wide mb-6 text-sm uppercase">Connect Network</h4>
                            <div className="flex gap-4">
                                <SocialButton href="https://linkedin.com/in/adityaraj0213" icon={<Linkedin size={22} />} color="#00bfff" />
                                <SocialButton href="https://github.com/Aditya0113" icon={<Github size={22} />} color="#C56CEF" />
                                <SocialButton href="mailto:kumarm8445@gmail.com" icon={<Mail size={22} />} color="#FF5F56" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass-card p-8 md:p-12 rounded-3xl"
                    >
                        <h3 className="text-3xl font-bold text-white mb-8 tracking-tight">Transmit Data</h3>

                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <InputField label="First Name" name="first_name" placeholder="John" disabled={isSubmitting} />
                                <InputField label="Last Name" name="last_name" placeholder="Doe" disabled={isSubmitting} />
                            </div>

                            <InputField label="Email" name="email" type="email" placeholder="john.doe@example.com" disabled={isSubmitting} />
                            <InputField label="Subject" name="subject" placeholder="Project inquiry, collaboration, etc." disabled={isSubmitting} />

                            <div className="space-y-2 group">
                                <label className="text-xs font-semibold tracking-wide text-slate-400 uppercase ml-1 group-focus-within:text-[#00bfff] transition-colors">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    placeholder="Tell me about your project or how I can help..."
                                    className="w-full bg-[#0B0C10]/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-[#00bfff] focus:ring-1 focus:ring-[#00bfff] transition-all duration-300 resize-none text-sm font-light shadow-inner"
                                    disabled={isSubmitting}
                                ></textarea>
                            </div>

                            {/* Status Message */}
                            {status.message && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0, y: -10 }}
                                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                                    className={`p-4 rounded-xl flex items-center gap-3 backdrop-blur-md ${status.type === 'success' ? 'bg-[#27C93F]/10 text-[#27C93F] border border-[#27C93F]/20' : 'bg-[#FF5F56]/10 text-[#FF5F56] border border-[#FF5F56]/20'
                                        }`}
                                >
                                    {status.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                                    <p className="text-sm font-medium tracking-wide">{status.message}</p>
                                </motion.div>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full relative overflow-hidden bg-gradient-to-r from-[#00bfff] to-[#C56CEF] text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group text-base disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-[0_0_20px_rgba(197,108,239,0.4)] mt-4"
                            >
                                {/* Glow wave effect */}
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out pointer-events-none"></div>

                                {isSubmitting ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin relative z-10" />
                                        <span className="relative z-10 font-mono tracking-widest text-sm">TRANSMITTING...</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="relative z-10 tracking-widest uppercase font-mono text-sm group-hover:-translate-x-1 transition-transform">Send Message</span>
                                        <Send size={18} className="group-hover:translate-x-1 transition-transform relative z-10 -mt-0.5" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>

                <div className="mt-24 pt-8 border-t border-white/5 text-center text-slate-500 text-sm font-light tracking-wide">
                    <p>© 2026 Aditya Raj. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
};

// Reusable Input Component
const InputField = ({ label, name, type = "text", placeholder, disabled }) => (
    <div className="space-y-2 group">
        <label className="text-xs font-semibold tracking-wide text-slate-400 uppercase ml-1 group-focus-within:text-[#00bfff] transition-colors">{label}</label>
        <input
            type={type}
            name={name}
            required
            placeholder={placeholder}
            className="w-full bg-[#0B0C10]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-[#C56CEF] focus:ring-1 focus:ring-[#C56CEF] transition-all duration-300 text-sm font-light shadow-inner"
            disabled={disabled}
        />
    </div>
);

const ContactItem = ({ icon, title, content, href, color }) => (
    <div className="flex items-start gap-5 group">
        <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
            style={{ backgroundColor: `${color}15`, color: color }}
        >
            {icon}
        </div>
        <div>
            <h4 className="text-white font-bold text-lg mb-1 tracking-tight">{title}</h4>
            {href ? (
                <a href={href} className="text-slate-400 font-light hover:text-white transition-colors text-sm md:text-base leading-relaxed" style={{ '--hover-color': color }} onMouseEnter={(e) => e.target.style.color = color} onMouseLeave={(e) => e.target.style.color = ''}>{content}</a>
            ) : (
                <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed">{content}</p>
            )}
        </div>
    </div>
);

const SocialButton = ({ href, icon, color }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-[0_4px_10px_rgba(0,0,0,0.2)]"
        style={{ '--hover-border': `${color}50`, '--hover-bg': `${color}20` }}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = color; Object.assign(e.currentTarget.style, { boxShadow: `0 0 15px ${color}30` }) }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; Object.assign(e.currentTarget.style, { boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }) }}
    >
        {icon}
    </a>
);

export default Contact;
