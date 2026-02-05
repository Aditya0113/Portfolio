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
                        message: 'Message sent successfully! I will get back to you soon.',
                    });
                    form.current.reset();
                },
                (error) => {
                    setStatus({
                        type: 'error',
                        message: 'Failed to send message. Please try again later.',
                    });
                    console.error('FAILED...', error.text);
                }
            )
            .finally(() => {
                setIsSubmitting(false);
                // Clear success message after 5 seconds
                setTimeout(() => {
                    setStatus(prev => prev.type === 'success' ? { type: '', message: '' } : prev);
                }, 5000);
            });
    };

    return (
        <section id="contact" className="py-20 bg-slate-950 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Get In <span className="text-cyan-400">Touch</span></h2>
                    <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full opacity-50 mb-8"></div>
                    <p className="text-slate-400 max-w-3xl mx-auto text-xl">
                        Ready to transform data into insights? Let's discuss how I can help drive your business decisions with analytics.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800 h-full"
                    >
                        <h3 className="text-3xl font-bold text-white mb-8">Contact Information</h3>
                        <div className="space-y-8">
                            <ContactItem
                                icon={<Mail size={24} />}
                                title="Email"
                                content="kumarm8445@gmail.com"
                                href="mailto:kumarm8445@gmail.com"
                            />
                            <ContactItem
                                icon={<Phone size={24} />}
                                title="Phone"
                                content="+91 9060483918"
                                href="tel:+919060483918"
                            />
                            <ContactItem
                                icon={<MapPin size={24} />}
                                title="Location"
                                content="Navratan Pur, Bari Khagaul, Patna, Bihar 801105"
                            />
                        </div>

                        <div className="mt-12">
                            <h4 className="text-white font-semibold mb-6 text-xl">Connect with me</h4>
                            <div className="flex gap-4">
                                <SocialButton href="https://linkedin.com/in/adityaraj0213" icon={<Linkedin size={24} />} />
                                <SocialButton href="https://github.com/Aditya0113" icon={<Github size={24} />} />
                                <SocialButton href="mailto:kumarm8445@gmail.com" icon={<Mail size={24} />} />
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800"
                    >
                        <h3 className="text-3xl font-bold text-white mb-8">Send a Message</h3>

                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-base font-medium text-slate-300">First Name</label>
                                    <input
                                        type="text"
                                        name="first_name"
                                        required
                                        placeholder="Your first name"
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors text-lg"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-base font-medium text-slate-300">Last Name</label>
                                    <input
                                        type="text"
                                        name="last_name"
                                        required
                                        placeholder="Your last name"
                                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors text-lg"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-base font-medium text-slate-300">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="your.email@example.com"
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors text-lg"
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-base font-medium text-slate-300">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    placeholder="Project inquiry, collaboration, etc."
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors text-lg"
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-base font-medium text-slate-300">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    placeholder="Tell me about your project or how I can help..."
                                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none text-lg"
                                    disabled={isSubmitting}
                                ></textarea>
                            </div>

                            {status.message && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`p-4 rounded-lg flex items-center gap-2 ${status.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
                                        }`}
                                >
                                    {status.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                                    <p className="text-sm font-medium">{status.message}</p>
                                </motion.div>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-slate-800 hover:bg-slate-700 text-white font-medium py-4 rounded-lg transition-all flex items-center justify-center gap-2 group text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>

                <div className="mt-20 pt-8 border-t border-slate-900 text-center text-slate-500 text-base">
                    <p>© 2024 Aditya Raj. Designed with passion for data analytics.</p>
                </div>
            </div>
        </section>
    );
};

const ContactItem = ({ icon, title, content, href }) => (
    <div className="flex items-start gap-4">
        <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-cyan-400">
            {icon}
        </div>
        <div>
            <h4 className="text-white font-bold text-xl mb-1">{title}</h4>
            {href ? (
                <a href={href} className="text-slate-400 hover:text-cyan-400 transition-colors text-lg">{content}</a>
            ) : (
                <p className="text-slate-400 text-lg">{content}</p>
            )}
        </div>
    </div>
);

const SocialButton = ({ href, icon }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/50 transition-all"
    >
        {icon}
    </a>
);

export default Contact;
