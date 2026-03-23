import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const Certificates = () => {
    const certificates = [
        {
            name: "Data Analytics Job Simulation",
            issuer: "Deloitte Australia | Forage",
            date: "July 2025",
            type: "Professional Simulation",
            description: "Completed a job simulation involving data quality assessment, data insights, and presentation of findings.",
            link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_zx6AfKLR6ZbY6P2yC_1752341833333_completion_certificate.pdf"
        },
        {
            name: "AWS: Data Analytics",
            issuer: "Amazon Web Services | Whizlabs",
            date: "July 2025",
            type: "Cloud Analytics",
            description: "Comprehensive training in AWS data analytics services and cloud-based data solutions.",
            link: "https://www.coursera.org/account/accomplishments/verify/C8LI7MNHHJ5Z"
        },
        {
            name: "Data Analytics MasterClass",
            issuer: "NoviTech R&D Private Limited",
            date: "July 2025 to Aug 2025",
            type: "Data Analytics",
            description: "Successfully completed a 30-day MasterClass in Data Analytics conducted by NoviTech R&D Pvt. Ltd.",
            link: "https://drive.google.com/file/d/1pOjtbHFkrp15dnpNYItC7CzTk3fl6qmN/view?usp=sharing"
        },
        {
            name: "Data Structures and Algorithms",
            issuer: "GeeksforGeeks",
            date: "Dec 2024 - July 2025",
            type: "Course Completion",
            description: "Comprehensive course covering fundamental data structures and algorithm design patterns.",
            link: "https://www.geeksforgeeks.org/certificate/c2ee2f8d230857bd0d2b48cf280e499f"
        },
        {
            name: "Introduction to MS Excel",
            issuer: "Microsoft | SimliLearn",
            date: "July 2025",
            type: "Certification",
            description: "Foundational training in Microsoft Excel, covering formulas, functions, and data management.",
            link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzc3IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODY2NjU3Nl81NzU2NzM4MTc1MzE3NzkwMzY1OS5wbmciLCJ1c2VybmFtZSI6IkFkaXR5YSBSYWoifQ%3D%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4277%2FIntroduction%2520to%2520MS%2520Excel%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1494903871592078193&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVdw53KgxKDI0qj0yyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAmmDpsT8AAAA%3D"
        },
        {
            name: "Excel Automation using ChatGPT",
            issuer: "Microsoft | simplilearn",
            date: "July 2025",
            type: "Automation",
            description: "Advanced Excel automation techniques using AI-powered tools and ChatGPT integration.",
            link: "https://lms.simplilearn.com/courses/6062/Excel%20Automation%20using%20ChatGPT/certificate/download-skillup"
        },
        {
            name: "Code-A-Haunt 24 Hour Hackathon",
            issuer: "CodingBlocks LPU | Lovely Professional University",
            date: "Feb 2024 - Mar 2024",
            type: "Hackathon Participation",
            description: "Participated in the 24-hour Code-A-Haunt Hackathon showcasing strong coding and problem-solving skills.",
            link: "https://drive.google.com/file/d/1z25zK7OGONq222CQ64h15TCA7fZ9eLkT/view?usp=sharing"
        },
    ];

    return (
        <section id="certificates" className="py-20 bg-slate-900/20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Certificates & <span className="text-blue-400">Achievements</span></h2>
                    <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full opacity-50 mb-8"></div>
                    <p className="text-slate-400 max-w-3xl mx-auto text-xl">
                        Continuous learning and professional development in data analytics and related technologies.
                    </p>
                </motion.div>

                <div className="space-y-6">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-900/60 p-6 md:p-8 rounded-xl border border-slate-800 hover:border-purple-500/30 transition-all group"
                        >
                            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                                <div className="p-4 bg-slate-950 rounded-lg border border-slate-800 group-hover:border-purple-500/50 transition-colors">
                                    <Award className="text-purple-400" size={28} />
                                </div>

                                <div className="flex-1">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                                        <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                                            {cert.name}
                                        </h3>
                                        <span className="text-sm font-medium px-3 py-1 rounded-full bg-slate-800 text-purple-300 border border-purple-500/20 mt-2 md:mt-0 w-fit">
                                            {cert.type}
                                        </span>
                                    </div>

                                    <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-slate-400 text-base mb-4">
                                        <span>{cert.issuer}</span>
                                        <span className="hidden md:block">•</span>
                                        <span>{cert.date}</span>
                                    </div>

                                    <p className="text-slate-500 text-base mb-4 leading-relaxed">
                                        {cert.description}
                                    </p>

                                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-base font-medium transition-colors">
                                        <ExternalLink size={16} /> View Certificate
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
