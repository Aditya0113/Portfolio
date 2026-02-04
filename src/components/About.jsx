import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, PieChart, TrendingUp } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-950 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">About <span className="text-cyan-400">Me</span></h2>
                    <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full mb-10 opacity-50"></div>

                    <div className="bg-slate-900/40 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-slate-800 max-w-5xl mx-auto mb-20">
                        <p className="text-slate-300 text-xl md:text-2xl leading-relaxed font-light">
                            Detail-oriented and analytical Data Science student with a strong foundation in <span className="text-cyan-400 font-medium">statistical analysis</span>, <span className="text-cyan-400 font-medium">data visualization</span>, and <span className="text-purple-400 font-medium">business intelligence</span>. Skilled in Python, SQL, Excel, and Power BI, with hands-on experience in transforming raw data into actionable insights. Adept at using data to support decision-making, identify trends, and solve real-world problems. Eager to apply analytical skills and technical knowledge in a dynamic data analyst role.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ServiceCard
                            icon={<BarChart2 size={32} className="text-cyan-400" />}
                            title="Data Analysis"
                            description="Expert in statistical analysis and pattern recognition"
                            color="cyan"
                        />
                        <ServiceCard
                            icon={<PieChart size={32} className="text-cyan-400" />}
                            title="Visualization"
                            description="Creating compelling dashboards and reports"
                            color="cyan"
                        />
                        <ServiceCard
                            icon={<TrendingUp size={32} className="text-purple-400" />}
                            title="Business Intelligence"
                            description="Transforming data into strategic insights"
                            color="purple"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const ServiceCard = ({ icon, title, description, color }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800 hover:bg-slate-900 transition-all group"
    >
        <div className={`w-16 h-16 mx-auto bg-slate-950 rounded-full flex items-center justify-center mb-6 border border-slate-800 group-hover:border-${color}-500/50 transition-colors`}>
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-slate-400 text-base">{description}</p>
    </motion.div>
);

export default About;
