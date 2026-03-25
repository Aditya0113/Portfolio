import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Github, ExternalLink, BarChart, ShoppingCart, Globe, Linkedin, Car, Crosshair, MapPin, Play } from 'lucide-react';

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
            demo: "https://app.powerbi.com/view?r=eyJrIjoiZWJkNzkyOTgtZDRmYS00OWVjLTk0NDctYzNmMDAzMDZkODhkIiwidCI6ImUxNGU3M2ViLTUyNTEtNDM4OC04ZDY3LThmOWYyZTJkNWE0NiIsImMiOjEwfQ%3D%3D",
            icon: <Car size={24} />,
            themeColor: "#00bfff",
            image: "/tata-cars.png"
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
            icon: <Car size={24} />,
            themeColor: "#FF5F56",
            image: "/us-traffic.png"
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
            icon: <BarChart size={24} />,
            themeColor: "#C56CEF",
            image: "/hr-attrition.png"
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
            icon: <ShoppingCart size={24} />,
            themeColor: "#27C93F",
            image: "/superstore.png"
        },
        {
            title: "E-Commerce Sales Tracker",
            subtitle: "Sales Performance & Customer Behavior Analysis",
            description: "Developed an interactive and visually engaging dashboard in Power BI to analyze sales performance and customer behavior. The dashboard includes dynamic KPIs for Amount, Profit, Quantity, and AOV, along with detailed visual insights such as monthly profit trends, state-wise sales, etc.",
            features: [
                "Dynamic filtering by quarters and custom time ranges",
                "Monthly profit trend analysis",
                "State-wise sales distribution"
            ],
            tech: ["Power BI", "Data Visualization", "KPI Analysis", "Dashboard Design"],
            github: "https://github.com/Aditya0113/E-COMMERCE-SALES-TRACKER",
            icon: <MapPin size={24} />,
            themeColor: "#00bfff",
            image: "/ecommerce.png"
        },
        {
            title: "World Economic Indicators Analysis",
            subtitle: "Global Economic Trends & Insights",
            description: "A comprehensive Python-based project analyzing global economic indicators including GDP, inflation, unemployment, and population growth using real-world datasets. Features advanced data cleaning, visualization, and trend analysis.",
            features: [
                "Multi-country economic comparison",
                "Time-series trend analysis",
                "Interactive visualizations"
            ],
            tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "Plotly"],
            github: "https://github.com/Aditya0113/World-Economic-Indicators-Analysis",
            icon: <Globe size={24} />,
            themeColor: "#C56CEF",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: "LinkedIn Profile Optimizer",
            subtitle: "AI-Powered Profile Enhancement",
            description: "An AI-powered web application that analyzes and enhances LinkedIn profiles using advanced algorithms. Provides personalized recommendations to improve visibility, headline optimization, summary enhancement, and keyword alignment using AI APIs.",
            features: [
                "AI-powered profile analysis",
                "Personalized recommendations",
                "Keyword optimization suggestions"
            ],
            tech: ["HTML", "CSS", "JavaScript", "Gemini AI"],
            github: "https://github.com/Aditya0113/LinkedIn_Profile_Optimizer",
            demo: "https://linkedin-profileoptimizer.vercel.app/",
            icon: <Linkedin size={24} />,
            themeColor: "#FFBD2E",
            image: "/linkedin-optimizer.png"
        },
    ];

    const headingText = "Featured Projects".split("");

    return (
        <section id="projects" className="py-24 relative overflow-hidden px-4">
            {/* Background elements */}
            <div className="absolute top-[30%] left-[-20%] w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 flex justify-center flex-wrap">
                        {headingText.map((letter, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                className={letter === ' ' ? 'mr-3' : (i >= 8 ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#00bfff] to-[#C56CEF]' : '')}
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
                        className="text-slate-400 max-w-3xl mx-auto text-lg font-light tracking-wide"
                    >
                        Showcasing real-world data analysis projects that demonstrate expertise in visualization, statistical analysis, and business intelligence.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <Tilt key={index} tiltMaxAngleX={4} tiltMaxAngleY={4} scale={1.01} transitionSpeed={2000} className="w-full h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.7 }}
                                className="glass-panel rounded-3xl overflow-hidden h-full flex flex-col group relative border border-white/5 hover:border-white/20 transition-all duration-500"
                            >
                                {/* Glowing Base Aura */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" style={{ background: `radial-gradient(circle at center, ${project.themeColor}, transparent 80%)` }}></div>
                                
                                {/* Project Thumbnail Image */}
                                <div className="w-full h-52 relative overflow-hidden shrink-0 border-b border-white/5">
                                    <div className="absolute inset-0 bg-[#0B0C10] animate-pulse"></div>
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 z-10 relative"
                                    />
                                    {/* Gradient overlay to smoothly blend image into the card body */}
                                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0d121c] to-transparent z-20"></div>
                                </div>

                                <div className="p-8 md:p-10 flex flex-col flex-grow relative z-10 h-full">
                                    {/* Header Section */}
                                    <div className="flex justify-between items-start mb-6 gap-4">
                                        <div className="flex items-start gap-5">
                                            <div 
                                                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform duration-500"
                                                style={{ backgroundColor: `${project.themeColor}15`, color: project.themeColor, boxShadow: `0 0 15px ${project.themeColor}30` }}
                                            >
                                                {project.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold tracking-tight text-white mb-2 leading-tight group-hover:text-glow transition-all duration-300">
                                                    {project.title}
                                                </h3>
                                                <span className="text-sm font-semibold tracking-wide uppercase font-mono" style={{ color: project.themeColor }}>
                                                    {project.subtitle}
                                                </span>
                                            </div>
                                        </div>
                                        {/* Action Links */}
                                        <div className="flex gap-2 shrink-0 flex-col sm:flex-row">
                                            {project.demo && (
                                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center transition-all hover:scale-110 hover:bg-white/10" style={{ boxShadow: `0 0 10px ${project.themeColor}20` }} title="View Demo">
                                                    <Play fill="currentColor" size={16} className="ml-1" />
                                                </a>
                                            )}
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-slate-300 flex items-center justify-center transition-all hover:scale-110 hover:bg-white/10 hover:text-white" title="Source Code">
                                                <Github size={18} />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Reveal-on-Hover Interface Hint */}
                                    <div className="flex items-center gap-2 mb-2 opacity-100 group-hover:opacity-0 transition-opacity duration-300 absolute bottom-10 right-10">
                                        <span className="text-xs tracking-widest uppercase font-mono text-slate-500">Hover Details</span>
                                        <div className="w-8 h-1 bg-slate-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-slate-500 w-1/3 animate-[translateX_2s_infinite]"></div>
                                        </div>
                                    </div>

                                    {/* Hover Reveal Content (Blur -> Clear) */}
                                    <div className="flex flex-col flex-grow blur-[8px] opacity-30 group-hover:blur-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-700 ease-out relative z-20">
                                        <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 font-light">
                                            {project.description}
                                        </p>

                                        <ul className="space-y-3 mb-8">
                                            {project.features.map((feature, fIdx) => (
                                                <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-400 font-light">
                                                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: project.themeColor, boxShadow: `0 0 8px ${project.themeColor}` }}></span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {project.tech.map((t, idx) => (
                                                <span key={idx} className="text-xs font-mono font-medium px-3 py-1.5 rounded-lg border backdrop-blur-md transition-colors" style={{ backgroundColor: `${project.themeColor}10`, borderColor: `${project.themeColor}30`, color: project.themeColor }}>
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </Tilt>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
