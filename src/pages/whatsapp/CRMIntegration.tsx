import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
    Settings,
    CheckCircle,
    ArrowRight,
    Search,
    ShoppingBag,
    Link2,
    Database,
    Webhook,
    Share2,
    Briefcase,
    Zap,
    Layout,
    ChevronRight,
    FileText,
    Plug,
    Globe,
    Lock
} from 'lucide-react';
import { motion } from 'framer-motion';
import { waLink } from '../../config/contact';
import Breadcrumbs from '../../components/Breadcrumbs';

const CRMIntegration: React.FC = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <Helmet>
                <title>WhatsApp CRM & Tool Integration | API Automation | JS TECH SOLUTION</title>
                <meta name="description" content="Integrate WhatsApp Business API with your CRM, e-commerce platform, and marketing tools for seamless business automation." />
            </Helmet>

            <Breadcrumbs />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-indigo-900 via-slate-900 to-black text-white py-24 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                        backgroundSize: '30px 30px'
                    }}></div>
                </div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-300 px-5 py-2 rounded-full text-sm font-black mb-10 border border-indigo-500/30"
                    >
                        <Plug className="w-4 h-4" />
                        <span>Hyper-Connected Ecosystem</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter"
                    >
                        Sync Your Data <br /> <span className="text-indigo-400">Everywhere.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-indigo-100 max-w-4xl mx-auto mb-16 leading-relaxed font-medium"
                    >
                        Eliminate manual data entry. Connect WhatsApp API directly with your CRM, ERP, and E-commerce stores for a unified view of your customer journey.
                    </motion.p>
                    <div className="flex justify-center flex-wrap gap-6">
                        <Link to={waLink()} className="bg-white text-indigo-950 px-12 py-5 rounded-2xl text-xl font-black hover:scale-105 transition-all shadow-2xl flex items-center gap-3 active:scale-95">
                            Connect My Tools <Share2 className="w-6 h-6 text-indigo-500" />
                        </Link>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 py-32 space-y-32">

                {/* 1. Popular Integrations Grid */}
                <section>
                    <div className="text-center mb-20 text-slate-900 dark:text-white">
                        <h2 className="text-3xl lg:text-5xl font-black mb-6">Popular Integrations</h2>
                        <p className="text-slate-500 dark:text-slate-400 font-medium">We support 100+ native and custom tool connections.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {[
                            "Salesforce", "Zoho CRM", "HubSpot", "Pipedrive", "Bitrix24",
                            "Shopify", "WooCommerce", "Magento", "Wix Store", "FreshSales",
                            "Google Sheets", "Zapier", "Pabbly Connect", "Make (Integromat)", "Custom Webhooks"
                        ].map((tool, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="p-8 bg-white dark:bg-slate-800 rounded-[2rem] border border-slate-100 dark:border-slate-800 text-center shadow-lg hover:border-indigo-500 transition-all flex flex-col items-center justify-center h-40 group"
                            >
                                <div className="text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform mb-2">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <span className="font-black text-sm tracking-tighter text-slate-900 dark:text-white uppercase">{tool}</span>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* 2. Automation Architecture */}
                <section className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white mb-10">Data Workflow <br /> <span className="text-indigo-600">Automation</span></h2>
                        <p className="text-lg text-slate-500 dark:text-slate-400 mb-12 leading-relaxed font-medium">
                            Don't just send messages. Trigger them. Our integration experts build custom logic that works even while you sleep.
                        </p>
                        <div className="space-y-8">
                            {[
                                { t: "Order Confirmation", d: "Store purchase → WhatsApp message + Tracking ID sync." },
                                { t: "Lead Capture", d: "WhatsApp chat → CRM Lead creation + Sales person tag." },
                                { t: "Payment Alerts", d: "ERP Invoice creation → WhatsApp Payment reminder + PDF sync." },
                                { t: "Customer Feedback", d: "Service completion → WhatsApp CSAT survey → Sheets data sync." }
                            ].map((flow, i) => (
                                <div key={i} className="flex gap-4 group">
                                    <div className="mt-1"><Webhook className="w-6 h-6 text-indigo-500" /></div>
                                    <div>
                                        <h5 className="font-black text-slate-900 dark:text-white text-lg leading-tight uppercase text-xs tracking-widest text-indigo-600 dark:text-indigo-400">{flow.t}</h5>
                                        <p className="text-slate-700 dark:text-slate-300 font-bold text-sm mt-1">{flow.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-slate-900 p-12 lg:p-20 rounded-[4rem] text-white shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute bottom-0 right-0 p-8 opacity-10"><Database className="w-64 h-64 scale-150 rotate-12" /></div>
                        <h3 className="text-3xl font-black mb-10 border-b border-white/10 pb-6">Technical Architecture</h3>
                        <div className="space-y-8 relative z-10 font-bold">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center shrink-0">1</div>
                                <span className="text-slate-400">Secure AES-256 Data Encryption</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center shrink-0">2</div>
                                <span className="text-slate-400">Real-time Webhook Callbacks</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center shrink-0">3</div>
                                <span className="text-slate-400">99.9% Integration Uptime SLA</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center shrink-0">4</div>
                                <span className="text-slate-400">Restful API Connectivity</span>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* 3. Final Trust CTA */}
                <section className="bg-indigo-600 rounded-[3.5rem] py-16 lg:py-24 px-8 lg:px-20 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 left-0 p-8 opacity-20"><Settings className="w-48 h-48 -rotate-12" /></div>
                    <h2 className="text-4xl lg:text-7xl font-black mb-10 relative z-10 tracking-tight leading-tight">Bring Your Entire Stack <br /> Onto <span className="italic">WhatsApp</span></h2>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                        <Link to={waLink()} className="bg-white text-indigo-950 px-12 py-5 rounded-2xl font-black text-xl hover:shadow-[0_20px_50px_rgba(255,255,255,0.3)] transition-all active:scale-95">
                            Start Custom Integration
                        </Link>
                        <Link to="/whatsapp-business-api" className="bg-indigo-950/40 border-2 border-white/20 text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3">
                            <ChevronRight className="w-5 h-5 rotate-180" /> Back to API Hub
                        </Link>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default CRMIntegration;
