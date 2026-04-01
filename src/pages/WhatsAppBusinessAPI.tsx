import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
    MessageCircle,
    CheckCircle,
    Rocket,
    Shield,
    Zap,
    TrendingUp,
    Target,
    Settings,
    BarChart3,
    Info,
    Globe,
    PenTool,
    Building2,
    Clock,
    UserCheck,
    Star,
    ArrowRight,
    X,
    Cpu,
    MessagesSquare,
    UserPlus,
    Megaphone,
    Headset,
    Link2
} from 'lucide-react';
import { motion } from 'framer-motion';
import { waLink } from '../config/contact';
import Breadcrumbs from '../components/Breadcrumbs';
import InquiryModal from '../components/InquiryModal';
import { whatsappServices } from '../data/pricing/digitalMarketing';
import ServiceSchema from '../components/Schema/ServiceSchema';
import BreadcrumbSchema from '../components/Schema/BreadcrumbSchema';

const WhatsAppBusinessAPI: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService] = useState("");

    const handleContact = (service: string, plan?: string) => {
        const message = `📱 WhatsApp API Inquiry - JSTECHSOLUTION\n\nService Interested: ${service}${plan ? ` (${plan} Plan)` : ''}\n\nI'm looking for official WhatsApp API solutions for my business. Please share details!`;
        window.open(waLink(message), '_blank');
    };

    const subServices = [
        { id: 'setup', name: 'API Setup', icon: <Building2 className="w-4 h-4" />, href: '/whatsapp-api-setup' },
        { id: 'chatbot', name: 'Chatbot Dev', icon: <Zap className="w-4 h-4" />, href: '/whatsapp-chatbot' },
        { id: 'bulk', name: 'Bulk Messaging', icon: <MessageCircle className="w-4 h-4" />, href: '/whatsapp-bulk-messaging' },
        { id: 'support', name: 'Support Automation', icon: <Clock className="w-4 h-4" />, href: '/whatsapp-support' },
        { id: 'crm', name: 'CRM Integration', icon: <Settings className="w-4 h-4" />, href: '/whatsapp-crm-integration' },
        { id: 'analytics', name: 'Campaign Analytics', icon: <BarChart3 className="w-4 h-4" />, href: '/whatsapp-analytics' }
    ];

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300 selection:bg-green-100 selection:text-green-900">
            <Helmet>
                <title>Official WhatsApp Business API Service Provider | JS TECH SOLUTION</title>
                <meta name="description" content="Official WhatsApp Business API solutions for scale. Automate support with AI chatbots, send bulk notifications, and integrate with your CRM for seamless customer engagement." />
                <meta name="keywords" content="official WhatsApp Business API India, WhatsApp chatbot development, bulk WhatsApp messaging service, WhatsApp CRM integration, business automation" />
                <link rel="canonical" href="https://JSTECHSOLUTION.in/whatsapp-business-api" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://JSTECHSOLUTION.in/whatsapp-business-api" />
                <meta property="og:title" content="JS TECH SOLUTION | Official WhatsApp Business API Solutions" />
                <meta property="og:description" content="Transform your business communication with official WhatsApp API. Automation, Chatbots, and Scale." />
                <meta property="og:image" content="https://JSTECHSOLUTION.in/og-whatsapp.jpg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="WhatsApp API for Business - JS TECH SOLUTION" />
                <meta name="twitter:description" content="The most reliable WhatsApp API infrastructure for your brand." />
            </Helmet>

            <ServiceSchema 
                name="WhatsApp Business API Services" 
                description="Official WhatsApp Business API solutions for scale. Automate support with AI chatbots, send bulk notifications, and integrate with your CRM for seamless customer engagement." 
                provider={{ name: "JS TECH SOLUTION" }} 
                areaServed="India" 
                url="https://jstechsolution.in/whatsapp-business-api" 
            />
            <BreadcrumbSchema 
                items={[
                    { name: "Home", item: "https://jstechsolution.in/" },
                    { name: "Services", item: "https://jstechsolution.in/services" },
                    { name: "WhatsApp Business API", item: "https://jstechsolution.in/whatsapp-business-api" }
                ]} 
            />

            <Breadcrumbs />

            <InquiryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                serviceName={selectedService}
            />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-15">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 10% 90%, rgba(255, 255, 255, 0.4) 2%, transparent 20%),
                        radial-gradient(circle at 90% 10%, rgba(255, 255, 255, 0.3) 1%, transparent 25%)`,
                    }}></div>
                </div>

                {/* Floating Elements Animation */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 right-20 hidden lg:block opacity-20"
                >
                    <MessageCircle className="w-32 h-32" />
                </motion.div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-bold mb-8 border border-white/30 shadow-xl"
                    >
                        <UserCheck className="h-4 w-4" />
                        <span>Official WhatsApp Business Solution Provider</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tight"
                    >
                        WhatsApp Business <br />
                        <span className="text-yellow-300 drop-shadow-lg">API Services</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-green-50 max-w-4xl mx-auto mb-12 leading-relaxed font-medium"
                    >
                        Scale your business communication with the world’s most trusted messaging platform.
                        Our official API solutions empower you to automate support, send mass notifications, and drive sales.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    >
                        <Link
                            to={waLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-green-700 px-10 py-5 rounded-2xl font-black text-xl shadow-2xl hover:shadow-green-500/50 hover:scale-105 transition-all flex items-center gap-3 active:scale-95"
                        >
                            <MessageCircle className="h-6 w-6" />
                            Get Started Now
                        </Link>
                        <button
                            onClick={() => handleContact("WhatsApp API Consultation")}
                            className="bg-green-500/10 backdrop-blur-xl border-2 border-white/40 hover:bg-green-500/30 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all active:scale-95 flex items-center gap-2"
                        >
                            <Zap className="h-6 w-6 text-yellow-300" />
                            Free Strategy Call
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Sub-page Navigation Sticky Bar */}
            <section className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border-b border-gray-200 dark:border-slate-800 sticky top-[72px] z-50 shadow-lg overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-start overflow-x-auto no-scrollbar py-4 space-x-4 scroll-smooth">
                        {subServices.map((service) => (
                            <Link
                                key={service.id}
                                to={service.href}
                                className="flex-shrink-0 px-6 py-2.5 rounded-full font-extrabold text-sm transition-all duration-300 flex items-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-green-600 hover:text-white dark:hover:bg-green-600 border border-transparent shadow-sm whitespace-nowrap active:scale-95 hover:shadow-lg hover:shadow-green-500/20"
                            >
                                {service.icon}
                                <span>{service.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-32">

                {/* 1. Service Overview & Trust Badges */}
                <section className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="lg:w-1/2"
                    >
                        <div className="inline-flex items-center gap-2 text-green-600 bg-green-100 dark:bg-green-900/30 px-4 py-1.5 rounded-full text-sm font-black mb-6 uppercase tracking-widest">
                            <Info className="h-4 w-4" />
                            <span>Professional Solutions</span>
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-black text-slate-900 dark:text-white mb-8 leading-tight">
                            Growth-Engine for <br /> <span className="text-green-600">Modern Businesses</span>
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                            Our WhatsApp Business API Services help medium and large businesses move beyond the limitations of personal accounts.
                            We provide a scalable, secure, and officially verified infrastructure that transforms how you connect with your customers.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <div className="bg-green-50 dark:bg-slate-800 p-4 rounded-2xl flex items-center gap-3 border border-green-100 dark:border-slate-700">
                                <Shield className="w-6 h-6 text-green-600" />
                                <span className="font-bold text-slate-900 dark:text-white">End-to-End Encrypted</span>
                            </div>
                            <div className="bg-green-50 dark:bg-slate-800 p-4 rounded-2xl flex items-center gap-3 border border-green-100 dark:border-slate-700">
                                <Star className="w-6 h-6 text-yellow-500" />
                                <span className="font-bold text-slate-900 dark:text-white">Official Partner Status</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 grid grid-cols-2 gap-6"
                    >
                        {[
                            { val: "98%", label: "Open Rate", icon: <MessagesSquare className="text-green-500" />, color: "bg-green-500/10" },
                            { val: "45%", label: "CTR Avg", icon: <Target className="text-blue-500" />, color: "bg-blue-500/10" },
                            { val: "3x", label: "ROI Potential", icon: <TrendingUp className="text-purple-500" />, color: "bg-purple-500/10" },
                            { val: "24/7", label: "Automation", icon: <Zap className="text-yellow-500" />, color: "bg-yellow-500/10" }
                        ].map((stat, i) => (
                            <div key={i} className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-700 text-center hover:scale-105 transition-all duration-300 group">
                                <div className={`w-12 h-12 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform`}>
                                    {stat.icon}
                                </div>
                                <span className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white block mb-2">{stat.val}</span>
                                <span className="text-sm font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{stat.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </section>

                {/* 2. Comparison Table - Why API? */}
                <section className="bg-white dark:bg-slate-800 rounded-[3rem] p-8 lg:p-16 shadow-2xl border border-slate-100 dark:border-slate-700 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 blur-[100px] rounded-full"></div>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">WhatsApp API vs Business App</h2>
                        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">Understand why top brands are switching to official API infrastructure.</p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-slate-100 dark:border-slate-700">
                                    <th className="py-6 px-4 text-slate-500 font-bold uppercase tracking-wider text-sm">Feature</th>
                                    <th className="py-6 px-4 text-slate-500 font-bold uppercase tracking-wider text-sm">WhatsApp Business App</th>
                                    <th className="py-6 px-4 text-green-600 font-black uppercase tracking-wider text-sm bg-green-500/5 rounded-t-2xl">Official API Solution</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50 dark:divide-slate-700/50">
                                {[
                                    { f: "Contact Limit", a: "Max 256 for Broadcast", b: "Unlimited Contacts" },
                                    { f: "Multi-User Support", a: "Max 4-5 devices", b: "Unlimited Team Members" },
                                    { f: "Automation / Bot", a: "Basic Away Messages", b: "Advanced Custom Chatbots" },
                                    { f: "Green Tick Badge", a: "Not Available", b: "Supported (Official Verify)" },
                                    { f: "CRM Integration", a: "Manual Data Entry", b: "Full Automated Sync" },
                                    { f: "Anti-Ban Protection", a: "High Risk of Blocking", b: "Officially Whitelisted" }
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                                        <td className="py-6 px-4 font-bold text-slate-900 dark:text-white">{row.f}</td>
                                        <td className="py-6 px-4 text-slate-500 dark:text-slate-400 font-medium">{row.a}</td>
                                        <td className="py-6 px-4 text-green-700 dark:text-green-400 font-black bg-green-500/5">{row.b}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* 3. How It Works - Step-by-Step */}
                <section>
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 text-indigo-600 bg-indigo-100 dark:bg-indigo-900/30 px-4 py-1.5 rounded-full text-sm font-black mb-6 uppercase tracking-widest">
                            <Rocket className="h-4 w-4" />
                            <span>Implementation</span>
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight">Your Journey to <span className="text-indigo-600">Verification</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-indigo-500 to-purple-500 hidden lg:block -translate-y-1/2 opacity-20"></div>
                        {[
                            { s: "Step 01", t: "Registration", d: "We register your number on Meta Dashboard.", icon: <UserPlus className="text-white" />, color: "bg-green-600 shadow-green-500/40" },
                            { s: "Step 02", t: "Verification", d: "Business credentials & documents approval.", icon: <Shield className="text-white" />, color: "bg-blue-600 shadow-blue-500/40" },
                            { s: "Step 03", t: "Integration", d: "Linking API with CRM or custom tools.", icon: <Settings className="text-white" />, color: "bg-purple-600 shadow-purple-500/40" },
                            { s: "Step 04", t: "Go Live", d: "Start sending official campaigns & bots.", icon: <Rocket className="text-white" />, color: "bg-indigo-600 shadow-indigo-500/40" }
                        ].map((step, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-700 text-center relative z-10"
                            >
                                <div className={`w-16 h-16 ${step.color} rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl scale-125 -mt-12 group-hover:rotate-12 transition-all`}>
                                    {step.icon}
                                </div>
                                <span className="text-sm font-black text-slate-400 mb-2 block uppercase tracking-tighter">{step.s}</span>
                                <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-4">{step.t}</h4>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">{step.d}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* 4. Our Specializations Grid */}
                <section id="services-grid">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white">Our API Specializations</h2>
                        <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-2xl mx-auto">Custom build solutions for specialized business workflows.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                id: 'setup',
                                title: "1. Setup & Onboarding",
                                href: "/whatsapp-api-setup",
                                icon: <Building2 className="w-8 h-8 text-green-500" />,
                                features: ["Official API approval", "Business verification", "Number registration", "Dedicated dashboard"]
                            },
                            {
                                id: 'chatbot',
                                title: "2. Chatbot Development",
                                href: "/whatsapp-chatbot",
                                icon: <Cpu className="w-8 h-8 text-indigo-500" />,
                                features: ["Automated replies", "FAQ chatbots", "Lead capture bots", "AI conversation flows"]
                            },
                            {
                                id: 'bulk',
                                title: "3. Bulk Messaging",
                                href: "/whatsapp-bulk-messaging",
                                icon: <Megaphone className="w-8 h-8 text-blue-500" />,
                                features: ["Promotional campaigns", "Transactional alerts", "Personalized messaging", "Media message support"]
                            },
                            {
                                id: 'support',
                                title: "4. Support Automation",
                                href: "/whatsapp-support",
                                icon: <Headset className="w-8 h-8 text-purple-500" />,
                                features: ["Auto-replies & hours", "Ticket management", "Multi-user login", "Live chat + Bot hybrid"]
                            },
                            {
                                id: 'crm',
                                title: "5. CRM & Tool Integrations",
                                href: "/whatsapp-crm-integration",
                                icon: <Link2 className="w-8 h-8 text-slate-700 dark:text-slate-300" />,
                                features: ["Full CRM integration", "Landing page sync", "Payment tracking", "Webhook automation"]
                            },
                            {
                                id: 'analytics',
                                title: "6. Management & Reports",
                                href: "/whatsapp-analytics",
                                icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
                                features: ["Campaign execution", "Delivery & read reports", "Customer tracking", "Performance analytics"]
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.02 }}
                                className="group relative bg-white dark:bg-slate-800 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 shadow-xl overflow-hidden hover:shadow-green-500/10 transition-all"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 dark:bg-slate-700/30 rounded-bl-[4rem] group-hover:bg-green-100 dark:group-hover:bg-green-900/20 transition-colors"></div>
                                <div className="mb-8 relative z-10 w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 relative z-10">{item.title}</h3>
                                <ul className="space-y-4 mb-10 relative z-10">
                                    {item.features.map((f, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-400 font-medium">
                                            <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <Link to={item.href} className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold text-sm hover:bg-green-600 dark:hover:bg-green-600 dark:hover:text-white transition-all shadow-lg active:scale-95">
                                    Dive into Detail <ArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* 5. Industries - Use Case Focus */}
                <section className="bg-slate-900 text-white rounded-[4rem] p-12 lg:p-24 relative overflow-hidden shadow-2xl">
                    <div className="absolute bottom-0 right-0 w-full h-full opacity-5 pointer-events-none">
                        <Globe className="w-full h-full scale-125" />
                    </div>
                    <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 text-teal-400 bg-white/10 px-4 py-1.5 rounded-full text-sm font-black mb-8 uppercase tracking-widest">
                                <Globe className="h-4 w-4" />
                                <span>Global Impact</span>
                            </div>
                            <h2 className="text-4xl lg:text-7xl font-black mb-8 leading-tight">Industries We <br /> <span className="text-teal-400">Transform</span></h2>
                            <p className="text-xl text-slate-400 leading-relaxed mb-12">
                                We help business across various verticals automate their sales and support funnels using WhatsApp's unparalleled reach.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { t: "E-commerce", d: "Order status & Abandoned cart recovery." },
                                    { t: "Real Estate", d: "Lead qualification & viewing reminders." },
                                    { t: "Education", d: "Course counseling & Fee alerts." },
                                    { t: "Healthcare", d: "Appointment booking & Lab reports." }
                                ].map((ind, i) => (
                                    <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all">
                                        <h5 className="font-black text-teal-400 mb-2">{ind.t}</h5>
                                        <p className="text-sm text-slate-300 leading-snug">{ind.d}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-3xl p-8 rounded-[3rem] border border-white/10 shadow-2xl">
                            <div className="flex flex-wrap justify-center gap-4">
                                {[
                                    "FinTech", "Automotive", "Travel & Tourism", "Logistics", "Local Services", "D2C Brands", "NGOs", "Retail Chains"
                                ].map((industry, idx) => (
                                    <span key={idx} className="px-6 py-3 bg-white/10 border border-white/10 rounded-full font-black text-sm text-white hover:bg-teal-400 hover:text-slate-950 transition-all cursor-default">
                                        {industry}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Transparency - Pricing */}
                <section className="bg-white dark:bg-slate-800 p-12 lg:p-24 rounded-[4rem] shadow-2xl border-t-8 border-green-500 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-green-500/5 rounded-br-full"></div>
                    <div className="text-center mb-16 relative z-10">
                        <div className="inline-flex items-center gap-2 text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 px-4 py-1.5 rounded-full text-sm font-black mb-6 uppercase tracking-widest">
                            <BarChart3 className="h-4 w-4" />
                            <span>ROI Optimized</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6">Honest & Transparent Pricing</h2>
                        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">No hidden fees. You pay for value and throughput, optimized for your business size.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
                        {whatsappServices[0]?.plans?.map((plan, idx) => (
                            <div key={idx} className={`p-8 bg-slate-50 dark:bg-slate-700/50 rounded-3xl text-center border-2 transition-all h-full flex flex-col items-center group ${plan.popular ? 'border-green-500 shadow-2xl scale-105 bg-white dark:bg-slate-800' : 'border-transparent hover:border-green-500/20'}`}>
                                <div className="mb-6 w-14 h-14 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-green-600 border border-slate-100 dark:border-slate-700 shadow-sm group-hover:rotate-12 transition-transform">
                                    <MessageCircle />
                                </div>
                                <h3 className="text-slate-900 dark:text-white font-black text-2xl mb-2 leading-tight uppercase italic">{plan.name}</h3>
                                <div className="text-4xl font-black text-green-600 mb-2">{plan.price}</div>
                                {plan.duration && <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">{plan.duration}</div>}

                                <ul className="space-y-4 mb-8 flex-grow w-full text-left">
                                    {plan.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex gap-2 text-sm font-bold text-slate-600 dark:text-slate-400 leading-tight">
                                            <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={() => handleContact("WhatsApp Marketing", plan.name)}
                                    className={`w-full py-4 rounded-xl font-black text-sm transition-all flex items-center justify-center gap-2 ${plan.popular
                                        ? 'bg-green-600 text-white hover:bg-green-700 shadow-xl shadow-green-500/30'
                                        : 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:bg-green-600 hover:text-white dark:hover:bg-green-600'
                                        }`}
                                >
                                    Select Plan <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 pt-16 border-t border-slate-100 dark:border-slate-700 text-center relative z-10">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="bg-green-600 inline-block p-1 rounded-2xl mb-8 shadow-2xl"
                        >
                            <Link to={waLink()} className="bg-slate-950 text-white px-12 py-5 rounded-xl font-black text-xl hover:bg-green-600 transition-all flex items-center gap-3">
                                Get a Custom Quote <PenTool className="w-6 h-6" />
                            </Link>
                        </motion.div>
                        <p className="text-lg font-extrabold text-blue-600 dark:text-blue-400 flex items-center justify-center gap-2">
                            We serve everything from Startups to Enterprises <CheckCircle className="w-5 h-5" />
                        </p>
                    </div>
                </section>

                {/* 7. Why Us - Final Trust Push */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white">Why JS TECH SOLUTION?</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {[
                            { t: "Official Meta Partner", d: "Whitelisted access." },
                            { s: "Fastest Approval", d: "72-hour onboarding." },
                            { t: "Advanced Security", d: "ISO Compliant data." },
                            { t: "Expert Support", d: "24/7 Tech guidance." },
                            { t: "Best ROI API", d: "Cost-effective plans." }
                        ].map((usp, idx) => (
                            <div key={idx} className="p-8 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-3xl text-center shadow-lg hover:border-green-500 transition-all">
                                <Star className="w-10 h-10 text-yellow-400 mx-auto mb-4" />
                                <h6 className="font-black text-slate-900 dark:text-white mb-2 leading-tight">{usp.t || usp.s}</h6>
                                <p className="text-xs text-slate-500 tracking-wider uppercase font-extrabold">{usp.d}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Main CTA Section - Super Stylish */}
                <section className="relative bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 rounded-[4rem] p-12 lg:p-24 text-center text-white shadow-[0_50px_100px_-20px_rgba(43,108,176,0.3)] overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                    <div className="absolute top-0 right-0 p-8 opacity-20">
                        <Rocket className="h-64 w-64 rotate-12" />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        <h2 className="text-5xl lg:text-8xl font-black mb-8 leading-tight tracking-tighter">Ready to Scale on <br /> WhatsApp?</h2>
                        <p className="text-xl md:text-2xl text-blue-100 mb-16 max-w-3xl mx-auto leading-relaxed font-medium">
                            Join 500+ businesses who have transformed their sales funnel using our Official WhatsApp API Infrastructure.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                            <Link to={waLink()} className="bg-white text-indigo-900 px-16 py-6 rounded-[2rem] text-2xl font-black hover:bg-yellow-300 hover:scale-110 transition-all shadow-[0_20px_50px_rgba(255,255,255,0.2)] active:scale-95">
                                Request Access Now
                            </Link>
                            <Link to="/contact" className="text-white border-2 border-white/30 px-12 py-6 rounded-[2rem] text-xl font-bold hover:bg-white/10 transition-all px-12">
                                Talk to Expert
                            </Link>
                        </div>
                    </motion.div>
                </section>

                {/* 8. Compliance & FAQ Section */}
                <section className="pb-24">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div className="bg-slate-100 dark:bg-slate-800/50 p-12 rounded-[3.5rem] border border-slate-100 dark:border-slate-700">
                            <h3 className="text-3xl font-black mb-10 text-slate-900 dark:text-white flex items-center gap-4">
                                <Shield className="w-8 h-8 text-green-600" /> Compliance Protocols
                            </h3>
                            <ul className="space-y-6">
                                {[
                                    { t: "Meta Official Guidelines", d: "We ensure your business follows all commerce & messaging policies." },
                                    { t: "GDPR & Privacy Ready", d: "End-to-end encryption for all user data and communication." },
                                    { t: "Opt-in Management", d: "Tools to manage user consent effectively to avoid reports." },
                                    { t: "Approved Templates", d: "Assistance in drafting messages that Meta loves and approves." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 group">
                                        <div className="mt-1"><CheckCircle className="w-6 h-6 text-green-500" /></div>
                                        <div>
                                            <h5 className="font-black text-slate-900 dark:text-white text-lg">{item.t}</h5>
                                            <p className="text-slate-500 dark:text-slate-400 font-medium">{item.d}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-3xl font-black mb-10 text-slate-900 dark:text-white">Success Insights (FAQ)</h3>
                            <div className="space-y-6">
                                {[
                                    { q: "Is business verification mandatory?", a: "Yes, for official Business API, Meta requires verification of your business documents to prove identity and build trust." },
                                    { q: "Can I use my existing WhatsApp number?", a: "We recommend a new number. If using an old one, you must delete the existing personal/business app account linked to it first." },
                                    { q: "Do you provide API for Betting or Adult games?", a: "No. We strictly follow Meta's commerce policy which prohibits certain industries like gambling, tobacco, and adult content." },
                                    { q: "How many agents can use the same number?", a: "Unlimited. Through our dashboard, your entire customer success team can login simultaneously." }
                                ].map((faq, idx) => (
                                    <details key={idx} className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-700 group shadow-sm hover:shadow-xl transition-all">
                                        <summary className="font-extrabold text-lg text-slate-900 dark:text-white list-none cursor-pointer flex justify-between items-center group-open:text-green-600 active:scale-[0.99] transition-all">
                                            {faq.q}
                                            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center transition-transform group-open:rotate-180 group-open:bg-green-600 group-open:text-white">
                                                <X className="w-4 h-4" />
                                            </div>
                                        </summary>
                                        <div className="mt-6 pt-6 border-t border-slate-50 dark:border-slate-700">
                                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{faq.a}</p>
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            {/* Bottom Mobile Floating CTA */}
            <div className="fixed bottom-6 left-6 right-6 z-50 lg:hidden pointer-events-none">
                <Link
                    to={waLink()}
                    className="w-full bg-green-600 text-white py-5 rounded-[2rem] font-black text-xl shadow-2xl flex items-center justify-center gap-3 backdrop-blur-xl border-2 border-white/20 pointer-events-auto active:scale-95 transition-all animate-bounce"
                >
                    <MessageCircle className="w-6 h-6" /> Talk to Expert
                </Link>
            </div>
        </div>
    );
};

export default WhatsAppBusinessAPI;
