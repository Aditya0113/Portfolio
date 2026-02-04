import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, BarChart, ShoppingCart, Globe, Linkedin, Car, Crosshair, MapPin } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "TATA Cars Sales & Forecasting",
            subtitle: "Sales, Pricing & Forecasting Dashboard",
            description: "A comprehensive Power BI dashboard analyzing TATA Motors' sales data, pricing strategies, and future demand forecasting. Provides actionable insights into model performance, regional sales trends, and revenue generation to optimize business strategies.",
            features: [
                "Sales performance analysis by model and region",
                "Pricing strategy impact & revenue insights",
                "Future demand forecasting & trend visualization",
                "Interactive drill-downs for granular analysis"
            ],
            tech: ["Power BI", "Data Modeling", "DAX", "Forecasting"],
            github: "https://github.com/Aditya0113/TATA-Cars-Sales-Analytics-Dashboard",
            icon: <Car size={32} className="text-white" />,
            color: "cyan"
        },
        {
            title: "US Traffic Accident Dashboard",
            subtitle: "Interactive Nationwide Accident Analysis",
            description: "Created a fully interactive dashboard visualizing traffic accident patterns across the United States. Delivered insights on accident severity, environmental factors, location hotspots, and yearly trends to support data-driven road safety decisions.",
            features: [
                "KPIs for Total Accidents, Severity Score, and Avg. Temperature",
                "Day vs Night and Traffic Signal impact analysis",
                "Junction involvement and Top 5 accident-prone states",
                "Yearly trend analysis with dynamic filters and map visualization"
            ],
            tech: ["Power BI", "Data Modeling", "DAX"],
            github: "https://github.com/Aditya0113/US-TRAFFIC-ACCIDENT-DASHBOARD",
            icon: <Car size={32} className="text-white" />,
            color: "red"
        },
        {
            title: "HR Attrition Analysis",
            subtitle: "Employee Turnover Prediction and Insights",
            description: "Performed end-to-end HR attrition analysis including data loading, cleaning, EDA, preprocessing, feature engineering, model building, evaluation, and SHAP-based interpretability. Developed visual insights and trained predictive machine learning models.",
            features: [
                "Predictive modeling using Scikit-Learn",
                "Feature importance analysis with SHAP",
                "Interactive visualizations for HR insights"
            ],
            tech: ["Power BI", "Data Modeling", "DAX", "Python", "Pandas", "Scikit-Learn", "SHAP", "Matplotlib"],
            github: "https://github.com/Aditya0113/HR-Analytics-Employee-Attrition-Prediction",
            icon: <BarChart size={32} className="text-white" />,
            color: "purple"
        },
        {
            title: "SuperStore Sales Dashboard",
            subtitle: "Interactive Sales Performance Analysis",
            description: "Built a dynamic and fully interactive dashboard providing real-time insights into SuperStore sales performance. Enabled drill-down views for detailed analysis and created shareable, presentation-ready visuals for stakeholders.",
            features: [
                "Dynamic KPIs for Revenue, Profit, and Trends",
                "Regional and Category-wise breakdowns",
                "Drill-down capabilities for deep analysis"
            ],
            tech: ["Power BI", "Data Modeling", "DAX", "Excel"],
            github: "https://github.com/Aditya0113/SuperStore-Sales-Dashboard",
            icon: <ShoppingCart size={32} className="text-white" />,
            color: "cyan"
        },
        {
            title: "E-Commerce Sales Tracker",
            subtitle: "Sales Performance & Customer Behavior Analysis",
            description: "Developed an interactive and visually engaging dashboard in Power BI to analyze sales performance and customer behavior. The dashboard includes dynamic KPIs for Amount, Profit, Quantity, and AOV, along with detailed visual insights such as monthly profit trends, state-wise sales, category-wise distribution, and payment mode preferences.",
            features: [
                "Dynamic filtering by quarters and custom time ranges",
                "Monthly profit trend analysis",
                "State-wise sales distribution"
            ],
            tech: ["Power BI", "Data Visualization", "KPI Analysis", "Dashboard Design"],
            github: "https://github.com/Aditya0113/E-COMMERCE-SALES-TRACKER",
            icon: <MapPin size={32} className="text-white" />,
            color: "blue"
        },
        {
            title: "World Economic Indicators Analysis",
            subtitle: "Global Economic Trends & Insights",
            description: "A comprehensive Python-based project analyzing global economic indicators including GDP, inflation, unemployment, and population growth using real-world datasets. Features advanced data cleaning, visualization, and trend analysis to uncover insights across countries and regions.",
            features: [
                "Multi-country economic comparison",
                "Time-series trend analysis",
                "Interactive visualizations"
            ],
            tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "Plotly"],
            github: "https://github.com/Aditya0113/World-Economic-Indicators-Analysis",
            icon: <Globe size={32} className="text-white" />,
            color: "purple"
        },
        {
            title: "LinkedIn Profile Optimizer",
            subtitle: "AI-Powered Profile Enhancement",
            description: "An AI-powered web application that analyzes and enhances LinkedIn profiles using advanced algorithms. Provides personalized recommendations to improve visibility, headline optimization, summary enhancement, and keyword alignment using AI APIs like Gemini.",
            features: [
                "AI-powered profile analysis",
                "Personalized recommendations",
                "Keyword optimization suggestions"
            ],
            tech: ["HTML", "CSS", "JavaScript", "AI APIs", "Gemini AI"],
            github: "https://github.com/Aditya0113/LinkedIn_Profile_Optimizer",
            demo: "https://linkedin-profileoptimizer.vercel.app/",
            icon: <Linkedin size={32} className="text-white" />,
            color: "cyan"
        },
    ];

    return (
        <section id="projects" className="py-16 bg-slate-950 px-4">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Featured <span className="text-cyan-400">Projects</span></h2>
                    <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full opacity-50 mb-8"></div>
                    <p className="text-slate-400 max-w-3xl mx-auto text-xl">
                        Showcasing real-world data analysis projects that demonstrate expertise in visualization, statistical analysis, and business intelligence.
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-900/40 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/30 transition-all group"
                        >
                            <div className="p-8 md:p-10">
                                <div className="flex flex-col md:flex-row gap-8">
                                    <div className="flex-1">
                                        <div className="flex items-start gap-4 mb-6">
                                            <div className={`p-4 rounded-xl bg-gradient-to-br ${project.color === 'cyan' ? 'from-cyan-500 to-blue-600' : project.color === 'red' ? 'from-red-500 to-orange-600' : 'from-purple-500 to-indigo-600'} shadow-lg`}>
                                                {project.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                                    {project.title}
                                                </h3>
                                                <h4 className="text-slate-400 text-xl">{project.subtitle}</h4>
                                            </div>
                                        </div>

                                        <p className="text-slate-300 mb-8 leading-relaxed text-xl">
                                            {project.description}
                                        </p>

                                        <div className="mb-8">
                                            <h5 className="text-white font-semibold mb-4 text-lg">Technologies Used</h5>
                                            <div className="flex flex-wrap gap-3">
                                                {project.tech.map((t, idx) => (
                                                    <span key={idx} className={`text-base font-medium px-4 py-1.5 rounded-full ${project.color === 'cyan' ? 'bg-cyan-900/20 text-cyan-300 border border-cyan-500/30' : project.color === 'red' ? 'bg-red-900/20 text-red-300 border border-red-500/30' : 'bg-purple-900/20 text-purple-300 border border-purple-500/30'}`}>
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            {project.demo && (
                                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-white bg-slate-950 border border-slate-800 hover:border-slate-600 px-5 py-2.5 rounded-lg transition-all">
                                                    <ExternalLink size={18} /> View Project
                                                </a>
                                            )}
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-white bg-slate-950 border border-slate-800 hover:border-slate-600 px-5 py-2.5 rounded-lg transition-all">
                                                <Github size={18} /> Source Code
                                            </a>
                                        </div>
                                    </div>

                                    <div className="md:w-1/3 bg-slate-950/50 rounded-xl p-6 border border-slate-800/50">
                                        <h5 className="text-white font-semibold mb-4 border-b border-slate-800 pb-2 text-lg">Key Features</h5>
                                        <ul className="space-y-3">
                                            {project.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-slate-400 text-base">
                                                    <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${project.color === 'cyan' ? 'bg-cyan-500' : project.color === 'red' ? 'bg-red-500' : 'bg-purple-500'}`}></div>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
