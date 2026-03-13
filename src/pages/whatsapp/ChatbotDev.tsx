import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
    Zap,
    CheckCircle,
    MessageCircle,
    ArrowRight,
    Cpu,
    MessagesSquare,
    Users,
    MousePointer2,
    Sparkles,
    Brain,
    Bot,
    Target,
    BarChart,
    ChevronRight,
    Search,
    MessageSquareText,
    Layers,
    Smile
} from 'lucide-react';
import { motion } from 'framer-motion';
import { waLink } from '../../config/contact';
import Breadcrumbs from '../../components/Breadcrumbs';

const ChatbotDev: React.FC = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <Helmet>
                <title>WhatsApp Chatbot Development | AI Bots | JS TECH SOLUTION</title>
                <meta name="description" content="Custom WhatsApp Chatbot development. AI-enabled conversational flows, FAQ bots, and lead capture automation for your business." />
            </Helmet>

            <Breadcrumbs />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-indigo-800 via-blue-900 to-slate-950 text-white py-24 px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 70% 20%, rgba(255, 255, 255, 0.4) 0%, transparent 40%),
                                          radial-gradient(circle at 10% 80%, rgba(79, 70, 229, 0.4) 0%, transparent 30%)`
                    }}></div>
                </div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl px-5 py-2 rounded-full text-sm font-black mb-8 border border-white/20 shadow-2xl"
                    >
                        <Brain className="w-4 h-4 text-blue-400" />
                        <span>Next-Gen AI Automation</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter"
                    >
                        Master the Art of <br /> <span className="text-blue-400">Conversational AI</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-12 leading-relaxed font-medium"
                    >
                        Don't just chat—convert. Our AI bots understand intent, answer complex FAQs, and drive lead generation 24/7 without a single human intervention.
                    </motion.p>
                    <div className="flex justify-center gap-6">
                        <Link to={waLink()} className="bg-white text-indigo-950 px-12 py-5 rounded-2xl text-xl font-black hover:bg-blue-400 hover:text-white transition-all shadow-[0_20px_50px_rgba(255,255,255,0.1)] flex items-center gap-3 active:scale-95 group">
                            Start Building Now <Zap className="w-6 h-6 text-yellow-500 group-hover:rotate-12" />
                        </Link>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 py-32 space-y-32">

                {/* 1. Comparison Section - Menu vs AI */}
                <section className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white mb-8">Menu-Based vs <br /> <span className="text-blue-600">AI-Powered Bots</span></h2>
                        <p className="text-xl text-slate-500 dark:text-slate-400 mb-10 leading-relaxed font-medium">
                            Whether you need a simple navigation menu or a complex AI assistant that speaks like a human, we've got the expertise to build it.
                        </p>
                        <div className="space-y-6">
                            {[
                                { t: "Guided Menus", d: "Click-based choices for quick info access.", icon: <MousePointer2 className="text-blue-500" /> },
                                { t: "Intent recognition", d: "AI that understands 'how much?' or 'pricing'.", icon: <Brain className="text-purple-500" /> },
                                { t: "Contextual Memory", d: "Bots that remember user preferences.", icon: <Layers className="text-green-500" /> }
                            ].map((feat, i) => (
                                <div key={i} className="flex gap-4 p-6 bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
                                    <div className="shrink-0 mt-1">{feat.icon}</div>
                                    <div>
                                        <h4 className="font-black text-slate-900 dark:text-white">{feat.t}</h4>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{feat.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-slate-900 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10"><Bot className="w-32 h-32" /></div>
                        <h3 className="text-2xl font-black mb-8 border-b border-white/10 pb-4">The AI Advantage</h3>
                        <ul className="space-y-6 mb-10">
                            {[
                                "Natural Language Processing (NLP)",
                                "Multilingual Support (100+ languages)",
                                "CRM & Database Real-time lookup",
                                "API Webhook support for orders",
                                "Sentiment analysis for human handover"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 group">
                                    <div className="p-1 bg-blue-500 rounded-full group-hover:scale-125 transition-transform"><CheckCircle className="w-4 h-4 text-white" /></div>
                                    <span className="font-extrabold text-slate-300 group-hover:text-white transition-colors">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="p-6 bg-blue-600/20 rounded-2xl border border-blue-500/30">
                            <p className="text-sm italic text-blue-200">"AI bots can reduce customer support costs by up to 30% while increasing lead conversion by 50%."</p>
                        </div>
                    </motion.div>
                </section>

                {/* 2. Chatbot Capabilities Grid */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white">Smart Bot Features</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: <MessagesSquare className="w-8 h-8" />, title: "Instant FAQ", desc: "Instantly answer 90% of repeat customer questions." },
                            { icon: <Sparkles className="w-8 h-8" />, title: "Lead Magnet Bots", desc: "Interactive quizzes and forms to qualify leads automatically." },
                            { icon: <Target className="w-8 h-8" />, title: "Automated Sales", desc: "Collect payments and confirm orders directly in the chat." },
                            { icon: <Cpu className="w-8 h-8" />, title: "AI Learning", desc: "Bots that get smarter with every customer interaction." },
                            { icon: <Smile className="w-8 h-8" />, title: "Personalized Interaction", desc: "Greet users by name and recommend products based on history." },
                            { icon: <MessageSquareText className="w-8 h-8" />, title: "Hybrid Intervention", desc: "Seamlessly push complex chats to live human agents." }
                        ].map((bot, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                className="bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-700 transition-all group hover:shadow-blue-500/10"
                            >
                                <div className="mb-8 w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:rotate-12 font-black">
                                    {bot.icon}
                                </div>
                                <h3 className="text-2xl font-black mb-4 dark:text-white leading-tight">{bot.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">{bot.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* 3. Logic Flow Section */}
                <section className="bg-slate-900 rounded-[4rem] p-12 lg:p-24 text-white text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full"></div>
                    <h2 className="text-4xl lg:text-6xl font-black mb-16 underline decoration-blue-500 underline-offset-8 decoration-4">Our Development Blueprint</h2>
                    <div className="grid md:grid-cols-4 gap-12 relative">
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-500/20 hidden lg:block -translate-y-1/2"></div>
                        {[
                            { s: "Discovery", d: "Mapping your business automation goals." },
                            { s: "Workflow Design", d: "Designing the logical chat pathways." },
                            { s: "AI Training", d: "Feeding the bot with your data & domain info." },
                            { s: "Deployment", d: "Official launch on API with 24/7 monitoring." }
                        ].map((step, idx) => (
                            <div key={idx} className="relative group">
                                <div className="text-6xl font-black text-blue-500/10 mb-6 group-hover:text-blue-500/30 transition-all">0{idx + 1}</div>
                                <h4 className="text-xl font-black mb-3 text-white">{step.s}</h4>
                                <p className="text-sm text-slate-400 font-medium leading-relaxed">{step.d}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="mt-24 text-center">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="inline-block"
                    >
                        <Link to="/whatsapp-business-api" className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black px-12 py-5 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-3 hover:bg-blue-600 hover:text-white transition-all">
                            <ChevronRight className="w-5 h-5 rotate-180" /> Back to API Hub
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ChatbotDev;
