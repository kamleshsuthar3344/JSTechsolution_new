import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
    Building2,
    CheckCircle,
    ArrowRight,
    FileCheck,
    Smartphone,
    Network,
    ClipboardCheck,
    AlertCircle,
    Info,
    Calendar,
    ChevronRight,
    Lock,
    Rocket
} from 'lucide-react';
import { motion } from 'framer-motion';
import { waLink } from '../../config/contact';
import Breadcrumbs from '../../components/Breadcrumbs';

const SetupOnboarding: React.FC = () => {
    const timeline = [
        { day: "Day 1", title: "Registration", desc: "Configuration of Meta Business Manager and number registration.", icon: <Building2 /> },
        { day: "Day 2-3", title: "Documentation", desc: "Upload and verification of legal business certificates by Meta.", icon: <FileCheck /> },
        { day: "Day 4-5", title: "API Sandbox", desc: "Internal testing and webhook configuration for messaging.", icon: <Network /> },
        { day: "Day 6-7", title: "Go-Live", desc: "Template approval and final deployment for production use.", icon: <Rocket className="w-6 h-6" /> }
    ];

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
            <Helmet>
                <title>WhatsApp API Setup & Onboarding | Official JS TECH SOLUTION</title>
                <meta name="description" content="Get your official WhatsApp Business API with professional onboarding, business verification, and number registration services." />
            </Helmet>

            <Breadcrumbs />

            {/* Hero Section */}
            <section className="bg-slate-950 text-white py-24 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] -mr-40 -mt-40"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-5 py-2 rounded-full text-sm font-black mb-8 border border-green-500/30"
                    >
                        <Lock className="w-4 h-4" />
                        <span>Official & Secure Verification</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter"
                    >
                        WhatsApp API <br /> <span className="text-green-500">Setup & Onboarding</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-slate-400 max-w-3xl mb-12 leading-relaxed font-medium"
                    >
                        Scaling your communication shouldn't be a technical hurdle. We handle the complex Meta verification journey, ensuring your brand gets the official Green Tick status.
                    </motion.p>
                    <div className="flex flex-wrap gap-4">
                        <Link to={waLink()} className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-2xl font-black text-lg transition shadow-[0_20px_50px_rgba(34,197,94,0.3)] inline-flex items-center gap-3 hover:scale-105 active:scale-95">
                            Start Verification Journey <ArrowRight className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 py-32 space-y-32">

                {/* 1. Timeline Section */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">Onboarding Timeline</h2>
                        <p className="text-slate-500 dark:text-slate-400 font-medium">Clear roadmaps. No surprises.</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {timeline.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeIn}
                                transition={{ delay: idx * 0.1 }}
                                className="relative bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all group"
                            >
                                <div className="text-green-600 font-black text-sm mb-6 uppercase tracking-widest">{step.day}</div>
                                <div className="w-14 h-14 bg-white dark:bg-slate-700 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-green-600 group-hover:text-white transition-colors">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-black mb-2 dark:text-white">{step.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <div className="grid lg:grid-cols-12 gap-16 items-start">
                    {/* 2. Documentation Checklist (7 columns) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 bg-white dark:bg-slate-800 p-10 lg:p-16 rounded-[3rem] shadow-2xl border border-slate-100 dark:border-slate-700"
                    >
                        <h2 className="text-3xl font-black mb-10 dark:text-white flex items-center gap-4">
                            <ClipboardCheck className="w-8 h-8 text-green-600" /> Essential Checklist
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-8">
                            {[
                                { t: "Business Registration", d: "Legal COI or Tax documents." },
                                { t: "Official Domain", d: "Active business website URL." },
                                { t: "Fresh CRM Number", d: "A number not on regular WA app." },
                                { t: "Meta Manager ID", d: "Access to your Meta Business settings." },
                                { t: "ID Proof", d: "Business owner's national ID." },
                                { t: "Physical Address", d: "Proof of utility or office rent." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="mt-1"><CheckCircle className="w-5 h-5 text-green-500" /></div>
                                    <div>
                                        <h4 className="font-black text-slate-900 dark:text-white mb-1 uppercase text-xs tracking-widest">{item.t}</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-12 p-8 bg-blue-50 dark:bg-blue-900/20 rounded-[2rem] border-2 border-dashed border-blue-200 dark:border-blue-800 flex items-start gap-4">
                            <Info className="w-6 h-6 text-blue-600 shrink-0" />
                            <p className="text-sm font-bold text-blue-800 dark:text-blue-300 leading-relaxed">
                                Don't have everything? Our team provides a free "Readiness Audit" to help you prepare your files for 100% approval success.
                            </p>
                        </div>
                    </motion.div>

                    {/* 3. Rejection Risks (5 columns) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 space-y-8"
                    >
                        <div className="bg-amber-50 dark:bg-amber-900/10 p-10 rounded-[2.5rem] border border-amber-100 dark:border-amber-800/50">
                            <h3 className="text-2xl font-black mb-8 text-amber-800 dark:text-amber-500 flex items-center gap-3">
                                <AlertCircle className="w-6 h-6" /> Avoid Rejection
                            </h3>
                            <ul className="space-y-6">
                                {[
                                    "Mismatch in Legal Business Name & Website info",
                                    "Using a number already active on WhatsApp App",
                                    "Incomplete website (missing About or Contact page)",
                                    "Unsupported business category (Gambling, Tobacco)"
                                ].map((risk, i) => (
                                    <li key={i} className="flex gap-3 text-slate-700 dark:text-slate-300 font-bold text-sm leading-tight">
                                        <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0"></div>
                                        {risk}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white">
                            <Calendar className="w-10 h-10 text-green-500 mb-6" />
                            <h4 className="text-2xl font-black mb-4">Fast-Track Setup</h4>
                            <p className="text-slate-400 mb-8 font-medium">Need it yesterday? Ask about our VIP Fast-Track onboarding for urgent business launches.</p>
                            <Link to={waLink()} className="text-green-500 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                                Consult Onboarding Expert <ChevronRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Benefits Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-green-600 rounded-[3rem] py-16 px-8 lg:px-20 text-center text-white shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <Smartphone className="w-full h-full scale-150" />
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black mb-8 relative z-10 italic leading-tight">Ready to Secure Your Official <br /> WhatsApp Presence?</h2>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                        <Link to={waLink()} className="bg-white text-green-700 px-12 py-5 rounded-2xl font-black text-xl hover:shadow-[0_20px_50px_rgba(255,255,255,0.3)] hover:scale-105 transition-all active:scale-95">
                            Verify My Business Now
                        </Link>
                        <Link to="/whatsapp-business-api" className="bg-green-950 border-2 border-white/20 text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-white/10 transition">
                            Back to API Hub <ArrowRight className="w-5 h-5 rotate-180" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SetupOnboarding;
