import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
    Clock,
    CheckCircle,
    MessageCircle,
    ArrowRight,
    Users,
    UserCheck,
    Contact,
    Bot,
    Headset,
    ShieldCheck,
    Zap,
    Layout,
    BarChart3,
    CheckSquare,
    ChevronRight,
    Search,
    Inbox,
    MessagesSquare
} from 'lucide-react';
import { motion } from 'framer-motion';
import { waLink } from '../../config/contact';
import Breadcrumbs from '../../components/Breadcrumbs';

const SupportAutomation: React.FC = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <Helmet>
                <title>Customer Support Automation | WhatsApp Business API | JS TECH SOLUTION</title>
                <meta name="description" content="Automate your customer support on WhatsApp. Ticket-based support, multi-agent login, auto-replies, and live chat automation." />
            </Helmet>

            <Breadcrumbs />

            {/* Hero Section */}
            <section className="bg-slate-950 text-white py-24 px-4 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-500/10 rounded-full blur-[120px]"></div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-5 py-2 rounded-full text-sm font-black mb-10 border border-blue-500/30"
                    >
                        <Clock className="w-4 h-4" />
                        <span>Instant Resolution Excellence</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter"
                    >
                        24/7 Support <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Automated.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto mb-16 leading-relaxed font-medium"
                    >
                        Scale your customer delight without scaling your team. Transform WhatsApp into a professional helpdesk with multi-agent support and AI handovers.
                    </motion.p>
                    <div className="flex justify-center flex-wrap gap-6">
                        <Link to={waLink()} className="bg-white text-slate-950 px-12 py-6 rounded-2xl text-xl font-black hover:scale-105 transition-all shadow-2xl flex items-center gap-3 active:scale-95">
                            Upgrade My Support <Headset className="w-6 h-6 text-blue-600" />
                        </Link>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 py-32 space-y-32">

                {/* 1. Shared Team Inbox Feature */}
                <section className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1"
                    >
                        <div className="bg-white dark:bg-slate-800 p-10 lg:p-16 rounded-[3rem] shadow-2xl border border-slate-100 dark:border-slate-800 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-[4rem]"></div>
                            <h3 className="text-3xl font-black mb-10 dark:text-white flex items-center gap-3">
                                <Inbox className="w-8 h-8 text-blue-600" /> Unified Team Inbox
                            </h3>
                            <div className="space-y-8">
                                {[
                                    { t: "One Number, Multi-Users", d: "Your entire team can respond using a single official business number." },
                                    { t: "Chat Assignment", d: "Route specific chats to technical or sales experts automatically." },
                                    { t: "Agent Performance", d: "Track reply times and resolution rates for every support agent." },
                                    { t: "Internal Notes", d: "Add private notes for teammates without the customer seeing them." }
                                ].map((box, i) => (
                                    <div key={i} className="flex gap-4 group">
                                        <div className="mt-1"><CheckSquare className="w-6 h-6 text-blue-600" /></div>
                                        <div>
                                            <h5 className="font-black text-slate-900 dark:text-white text-lg">{box.t}</h5>
                                            <p className="text-slate-500 dark:text-slate-400 font-medium">{box.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2"
                    >
                        <h2 className="text-4xl lg:text-6xl font-black text-slate-900 dark:text-white mb-8 leading-tight">Elite <br /> <span className="text-blue-600">Support Productivity</span></h2>
                        <p className="text-xl text-slate-500 dark:text-slate-400 mb-10 leading-relaxed font-medium">
                            Stop chatting in silos. Our API infrastructure provides a dashboard that gives you total control over every customer ticket.
                        </p>
                        <div className="p-8 bg-blue-600 rounded-[2.5rem] text-white shadow-xl">
                            <h4 className="text-2xl font-black mb-6 flex items-center gap-3"><Zap className="w-6 h-6" /> Key Productivity Metrics</h4>
                            <div className="grid grid-cols-2 gap-8">
                                <div className="text-center p-4 bg-white/10 rounded-2xl">
                                    <span className="text-3xl font-black block">60s</span>
                                    <span className="text-[10px] uppercase font-bold tracking-widest opacity-70">Avg Response</span>
                                </div>
                                <div className="text-center p-4 bg-white/10 rounded-2xl">
                                    <span className="text-3xl font-black block">92%</span>
                                    <span className="text-[10px] uppercase font-bold tracking-widest opacity-70">Satisfaction</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* 2. Automation Components Grid */}
                <section>
                    <div className="text-center mb-20 text-slate-900 dark:text-white">
                        <h2 className="text-3xl lg:text-5xl font-black underline decoration-blue-500 underline-offset-8 decoration-4">Automation Ecosystem</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <Bot />, t: "Auto-Greeting", d: "Welcome every new customer instantly with a personalized message." },
                            { icon: <Clock />, t: "Away Messages", d: "Set expert expectations during holidays and non-office hours." },
                            { icon: <MessagesSquare />, t: "Quick Replies", d: "One-click templates for common questions like 'Address' or 'Pricing'." },
                            { icon: <Layout />, t: "Ticket Tagging", d: "Categorize chats into 'Sales', 'Service', or 'Urgent' automatically." }
                        ].map((comp, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] shadow-lg border border-slate-100 dark:border-slate-800 text-center flex flex-col items-center group transition-all"
                            >
                                <div className="w-16 h-16 bg-slate-50 dark:bg-slate-700 rounded-3xl flex items-center justify-center mb-8 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:rotate-6">
                                    {comp.icon}
                                </div>
                                <h4 className="text-xl font-black mb-4 dark:text-white">{comp.t}</h4>
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed">{comp.d}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* 3. Call to Action Strip */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-blue-600 rounded-[3.5rem] p-12 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-20"><ShieldCheck className="w-64 h-64 rotate-12" /></div>
                    <h2 className="text-4xl lg:text-6xl font-black mb-8 relative z-10 leading-tight">Reduce Support Time <br /> by Up to <span className="italic">70%</span></h2>
                    <p className="text-xl text-blue-100 mb-12 max-w-4xl mx-auto font-medium relative z-10">
                        Join modern teams who are humanizing automation. Give your customers the instant support they deserve on the app they love.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                        <Link to={waLink()} className="bg-white text-blue-600 px-12 py-5 rounded-2xl font-black text-xl hover:shadow-[0_20px_50px_rgba(255,255,255,0.3)] transition-all">
                            Book a Support Audit
                        </Link>
                        <Link to="/whatsapp-business-api" className="bg-blue-950/40 border-2 border-white/20 text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3">
                            Explore API Hub <ChevronRight className="w-5 h-5 rotate-180" />
                        </Link>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default SupportAutomation;
