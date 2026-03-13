import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
    BarChart3,
    CheckCircle,
    ArrowRight,
    TrendingUp,
    PieChart,
    Activity,
    LineChart,
    ShieldCheck,
    Eye,
    MousePointer2,
    Target,
    Zap,
    ChevronRight,
    Search,
    Calendar,
    Download,
    Share2,
    FileBarChart
} from 'lucide-react';
import { motion } from 'framer-motion';
import { waLink } from '../../config/contact';
import Breadcrumbs from '../../components/Breadcrumbs';

const CampaignAnalytics: React.FC = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const metrics = [
        { t: "Open Rate", v: "98%", d: "Incredible visibility compared to 20% in emails.", icon: <Eye /> },
        { t: "Response Rate", v: "45%", d: "Engage users twice as fast with real-time chats.", icon: <Activity /> },
        { t: "Click Rate", v: "25%+", d: "High quality traffic for your landing pages.", icon: <MousePointer2 /> },
        { t: "ROI Increase", v: "10x", d: "Massive return on investment over SMS/Ads.", icon: <Target /> }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
            <Helmet>
                <title>WhatsApp Campaign Management & Analytics | JS TECH SOLUTION</title>
                <meta name="description" content="Track your WhatsApp marketing performance with detailed analytics. Message delivery reports, read rates, and ROI tracking." />
            </Helmet>

            <Breadcrumbs />

            {/* Hero Section */}
            <section className="bg-slate-50 dark:bg-slate-800 py-24 px-4 relative overflow-hidden border-b border-slate-100 dark:border-slate-700">
                <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 rounded-br-full blur-3xl"></div>
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-5 py-2 rounded-full text-sm font-black mb-10 border border-blue-500/20"
                    >
                        <FileBarChart className="w-4 h-4" />
                        <span>Data-Driven Growth Intelligence</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-8xl font-black mb-10 dark:text-white leading-tight tracking-tighter"
                    >
                        Insight into <br /> <span className="text-blue-600">Every Message.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 max-w-4xl mx-auto mb-16 leading-relaxed font-medium"
                    >
                        Stop marketing in the dark. Our official API analytics dashboard provides real-time visibility into delivery, read rates, and exact customer interaction logs.
                    </motion.p>
                    <div className="flex justify-center flex-wrap gap-6">
                        <Link to={waLink()} className="bg-blue-600 text-white px-12 py-6 rounded-2xl text-xl font-black hover:bg-blue-700 transition shadow-2xl inline-flex items-center gap-3 hover:scale-105 active:scale-95 group">
                            Unlock My Dashboard <BarChart3 className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 py-32 space-y-32">

                {/* 1. Key Metrics Visualizer */}
                <section>
                    <div className="text-center mb-20 text-slate-900 dark:text-white">
                        <h2 className="text-3xl lg:text-5xl font-black mb-6">Metrics That Matter</h2>
                        <p className="text-slate-500 dark:text-slate-400 font-medium font-bold">Standard industry performance for WhatsApp API Campaigns.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {metrics.map((metric, idx) => (
                            <motion.div
                                key={idx}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeIn}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-800 text-center flex flex-col items-center group cursor-default"
                            >
                                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-8 text-blue-600 group-hover:scale-110 transition-transform">
                                    {metric.icon}
                                </div>
                                <span className="text-5xl font-black block mb-2 dark:text-white tracking-tighter">{metric.v}</span>
                                <h4 className="text-sm font-black uppercase text-slate-400 tracking-widest mb-6">{metric.t}</h4>
                                <p className="text-slate-500 dark:text-slate-400 text-xs font-medium leading-relaxed">{metric.d}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* 2. Advanced Analytic Features */}
                <section className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl lg:text-6xl font-black text-slate-900 dark:text-white mb-10 leading-tight">Beyond Simple <br /> <span className="text-blue-600">Reporting</span></h2>
                        <p className="text-xl text-slate-500 dark:text-slate-400 mb-12 leading-relaxed font-medium">
                            Our dashboard doesn't just show numbers. It translates them into actionable business intelligence to refine your future campaigns.
                        </p>
                        <div className="space-y-8">
                            {[
                                { t: "Real-time Traceability", d: "Track exactly who read which message at what time.", icon: <LineChart /> },
                                { t: "A/B Testing Reports", d: "Compare different templates to see what resonates best with your audience.", icon: <Activity /> },
                                { t: "Scheduling Performance", d: "Identify the ideal time-slots for maximum customer engagement.", icon: <Calendar /> },
                                { t: "Exportable Insights", d: "One-click CSV/PDF export for your monthly marketing presentations.", icon: <Download /> }
                            ].map((feat, i) => (
                                <div key={i} className="flex gap-4 group">
                                    <div className="mt-1"><Zap className="w-6 h-6 text-blue-600" /></div>
                                    <div>
                                        <h5 className="font-black text-slate-900 dark:text-white text-lg">{feat.t}</h5>
                                        <p className="text-slate-500 dark:text-slate-400 font-medium text-sm mt-1">{feat.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-10 bg-blue-500/10 rounded-full blur-[100px]"></div>
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                            alt="Data Dashboard"
                            className="relative rounded-[3rem] shadow-2xl border-8 border-white dark:border-slate-800 hover:scale-[1.02] transition-transform duration-500"
                        />
                        <div className="absolute -bottom-10 -right-10 p-12 bg-slate-900 text-white rounded-[3rem] shadow-2xl hidden md:block border-4 border-white/10">
                            <div className="flex items-center gap-4 mb-4">
                                <ShieldCheck className="w-8 h-8 text-green-500" />
                                <span className="font-black tracking-widest uppercase text-xs">Official API Verified</span>
                            </div>
                            <p className="text-sm text-slate-400 font-bold leading-relaxed">99% Data accuracy <br /> direct from Meta Servers.</p>
                        </div>
                    </motion.div>
                </section>

                {/* 3. ROI Focused CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-slate-950 rounded-[4rem] p-12 lg:p-24 text-center text-white shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                        <TrendingUp className="w-full h-full scale-150 rotate-12" />
                    </div>
                    <h2 className="text-4xl lg:text-7xl font-black mb-10 relative z-10 leading-tight">Data with <span className="text-blue-500">Direction.</span></h2>
                    <p className="text-xl text-slate-400 mb-16 max-w-4xl mx-auto leading-relaxed font-medium relative z-10">
                        Join 200+ brands tracking their success with JS TECH SOLUTION. Don't leave your WhatsApp marketing to chance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-8 justify-center relative z-10">
                        <Link to={waLink()} className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-black text-xl hover:shadow-[0_20px_50px_rgba(37,99,235,0.3)] transition-all active:scale-95">
                            Consult Marketing Analyst
                        </Link>
                        <Link to="/whatsapp-business-api" className="bg-white/10 border-2 border-white/20 text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-white/20">
                            <ChevronRight className="w-5 h-5 rotate-180" /> API Hub
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default CampaignAnalytics;
