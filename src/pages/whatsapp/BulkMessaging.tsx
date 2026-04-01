import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
    MessageCircle,
    CheckCircle,
    Rocket,
    Megaphone,
    Target,
    Image,
    FileText,
    Volume2,
    Video,
    ShieldCheck,
    Users,
    ChevronRight,
    Zap,
    MailCheck,
    AlertTriangle
} from 'lucide-react';
import { motion } from 'framer-motion';
import { waLink } from '../../config/contact';
import Breadcrumbs from '../../components/Breadcrumbs';

const BulkMessaging: React.FC = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
            <Helmet>
                <title>Bulk WhatsApp Messaging Services | Campaigns | JS TECH SOLUTION</title>
                <meta name="description" content="Send promotional and transactional bulk WhatsApp messages at scale. High open rates, personalized campaigns, and media message support for businesses." />
                <meta name="keywords" content="bulk WhatsApp messaging, WhatsApp marketing campaigns, promotional WhatsApp messages, broadcast messages India, JS TECH SOLUTION WhatsApp" />
                <link rel="canonical" href="https://JSTECHSOLUTION.in/whatsapp-bulk-messaging" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://JSTECHSOLUTION.in/whatsapp-bulk-messaging" />
                <meta property="og:title" content="JS TECH SOLUTION | Reach Millions Instantly via WhatsApp" />
                <meta property="og:description" content="Hyper-personalized broadcasts with 98% open rates using our Official API Campaign Dashboard." />
                <meta property="og:image" content="https://JSTECHSOLUTION.in/og-bulk.jpg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Bulk WhatsApp Marketing - JS TECH SOLUTION" />
                <meta name="twitter:description" content="Send 100,000+ messages daily with complete safety and analytics." />
            </Helmet>

            <Breadcrumbs />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-emerald-600 via-teal-700 to-slate-900 text-white py-24 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-15">
                    <div className="absolute inset-0" style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/carbon-fibre.png")` }}></div>
                </div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl px-5 py-2 rounded-full text-sm font-black mb-10 border border-white/20 shadow-2xl"
                    >
                        <Megaphone className="w-4 h-4 text-yellow-400" />
                        <span>High-Engagement Marketing</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter"
                    >
                        Reach Millions <br /> <span className="text-yellow-400">Instantly.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-emerald-50 max-w-3xl mb-12 leading-relaxed font-medium"
                    >
                        Cut through the noise of emails and SMS. Send hyper-personalized broadcasts with 98% open rates using our Official API Campaign Dashboard.
                    </motion.p>
                    <div className="flex flex-wrap gap-6">
                        <Link to={waLink()} className="bg-white text-emerald-950 px-12 py-5 rounded-2xl text-xl font-black shadow-2xl hover:scale-105 hover:bg-yellow-400 hover:text-slate-900 transition-all inline-flex items-center gap-3 active:scale-95 group">
                            Launch My Campaign <Rocket className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 py-32 space-y-32">

                {/* 1. Capabilities & Rich Media */}
                <section className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white mb-10">Multi-Format <br /> <span className="text-emerald-600">Rich Communication</span></h2>
                        <p className="text-lg text-slate-500 dark:text-slate-400 mb-12 leading-relaxed font-medium">
                            Engage your audience with more than just text. Our platform supports the full spectrum of WhatsApp media to make your brand stand out.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { t: "Images & Banners", i: <Image /> },
                                { t: "Brochures (PDF)", i: <FileText /> },
                                { t: "Product Videos", i: <Video /> },
                                { t: "Audio Clips", i: <Volume2 /> }
                            ].map((media, i) => (
                                <div key={i} className="flex flex-col items-center p-6 bg-slate-50 dark:bg-slate-800 rounded-[2rem] border border-slate-100 dark:border-slate-800 group hover:bg-emerald-600 transition-all">
                                    <div className="w-12 h-12 bg-white dark:bg-slate-700 rounded-2xl flex items-center justify-center mb-4 text-emerald-600 group-hover:text-white transition-colors">
                                        {media.i}
                                    </div>
                                    <span className="font-black text-xs uppercase tracking-widest text-slate-600 dark:text-slate-300 group-hover:text-white text-center">{media.t}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-slate-50 dark:bg-slate-800/50 p-10 lg:p-16 rounded-[3.5rem] border border-slate-100 dark:border-slate-700 h-full"
                    >
                        <h3 className="text-2xl font-black mb-10 text-slate-900 dark:text-white flex items-center gap-3">
                            <MailCheck className="w-8 h-8 text-emerald-500" /> Smart Broadcast Logic
                        </h3>
                        <div className="space-y-8">
                            {[
                                { t: "Personalized Variables", d: "Hi [Customer Name], your order [ID] is ready!" },
                                { t: "Interactive Buttons", d: "Add CTA buttons like 'Buy Now' or 'Book Appointment'." },
                                { t: "Scheduled Triggers", d: "Set your campaigns to go live when your audience is active." },
                                { t: "Contact Grouping", d: "Tag and segment your users based on interest or city." }
                            ].map((logic, i) => (
                                <div key={i} className="flex gap-4 group">
                                    <div className="mt-1"><CheckCircle className="w-6 h-6 text-emerald-500" /></div>
                                    <div>
                                        <h5 className="font-black text-slate-900 dark:text-white text-lg">{logic.t}</h5>
                                        <p className="text-slate-500 dark:text-slate-400 font-medium">{logic.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* 2. Anti-Blocking & Compliance - Trust Focus */}
                <section className="bg-slate-900 p-12 lg:p-20 rounded-[4rem] text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full"></div>
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-4 text-center lg:text-left">
                            <ShieldCheck className="w-20 h-20 text-emerald-400 mb-8 mx-auto lg:mx-0" />
                            <h2 className="text-3xl lg:text-5xl font-black mb-6">Campaign <br /> Safety First</h2>
                            <p className="text-slate-400 font-medium">We ensure your broadasts respect WhatsApp policies to protect your number from being banned.</p>
                        </div>
                        <div className="lg:col-span-8 grid sm:grid-cols-2 gap-8">
                            {[
                                { t: "Opt-in Management", d: "Only send messages to users who have given consent.", icon: <Users /> },
                                { t: "Meta Approved Templates", d: "We help you draft messages that get instant Meta approval.", icon: <CheckCircle /> },
                                { t: "Rate Limiting", d: "Human-like message delivery to ensure high server trust.", icon: <Zap /> },
                                { t: "SPAM Control", d: "Real-time monitoring of customer reports and feedback.", icon: <AlertTriangle /> }
                            ].map((rule, i) => (
                                <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors">
                                    <div className="mb-4 text-emerald-400">{rule.icon}</div>
                                    <h4 className="font-black text-lg mb-2">{rule.t}</h4>
                                    <p className="text-slate-400 text-sm font-medium leading-relaxed">{rule.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. Performance Stats */}
                <section className="text-center">
                    <h2 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white mb-20 uppercase tracking-tighter">Impact Statistics</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                        <div className="bg-white dark:bg-slate-800 p-12 rounded-[3rem] shadow-xl border border-slate-100 dark:border-slate-800">
                            <Target className="w-12 h-12 text-emerald-500 mx-auto mb-6" />
                            <span className="text-6xl font-black block mb-2 dark:text-white tracking-widest">99%</span>
                            <span className="text-xs font-black uppercase text-slate-400 tracking-widest">Delivery Success</span>
                        </div>
                        <div className="bg-slate-50 dark:bg-slate-700/50 p-12 rounded-[3rem] shadow-xl border border-slate-100 dark:border-white/10">
                            <MessageCircle className="w-12 h-12 text-blue-500 mx-auto mb-6" />
                            <span className="text-6xl font-black block mb-2 dark:text-white tracking-widest">35%+</span>
                            <span className="text-xs font-black uppercase text-slate-400 tracking-widest">Average Click Rate</span>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-12 rounded-[3rem] shadow-xl border border-slate-100 dark:border-slate-800">
                            <Rocket className="w-12 h-12 text-purple-500 mx-auto mb-6" />
                            <span className="text-6xl font-black block mb-2 dark:text-white tracking-widest">10x</span>
                            <span className="text-xs font-black uppercase text-slate-400 tracking-widest">ROI vs Traditional SMS</span>
                        </div>
                    </div>
                </section>

                <div className="text-center">
                    <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
                        <Link to="/whatsapp-business-api" className="px-12 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all hover:bg-emerald-600 dark:hover:bg-emerald-600 dark:hover:text-white">
                            <ChevronRight className="w-5 h-5 rotate-180" /> Back to API Hub
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default BulkMessaging;
