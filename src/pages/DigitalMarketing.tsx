import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import InquiryModal from '../components/InquiryModal';
import {
    TrendingUp,
    Target,
    Users,
    Sparkles,
    Megaphone,
    Search,
    Video,
    Instagram,
    Mail,
    PenTool,
    Zap,
    MapPin,
    MessageCircle,
    CheckCircle,
    Palette,
    Facebook,
    ArrowRight,
    Monitor,
    ShoppingBag,
    Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { waLink } from '../config/contact';

import {
    socialMediaServices,
    emailServices,
    whatsappServices,
    contentServices,
    videoServices,
    quickServices,
    graphicServices
} from "../data/pricing/digitalMarketing";

interface LocalPlan {
    name: string;
    price: string;
    originalPrice?: string;
    features: string[];
    popular?: boolean;
    badge?: string | null;
    duration?: string;
}

interface Service {
    icon: React.ReactNode;
    name: string;
    description: string;
    plans: LocalPlan[];
}

interface ServiceCategory {
    id: string;
    title: string;
    icon: React.ReactNode;
    description: string;
    services: Service[];
}

const DigitalMarketing: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('social');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService] = useState("");

    const handleContact = (service: string) => {
        const message = `🚀 Digital Marketing Inquiry - JSTECHSOLUTION\n\nService Interested: ${service}\n\nI'm looking for expert digital marketing services to grow my brand. Please share details!`;
        window.open(waLink(message), '_blank');
    };

    const serviceCategories: ServiceCategory[] = [
        {
            id: 'social',
            title: 'Social Media',
            icon: <Users className="h-5 w-5" />,
            description: 'Build your brand presence and engage with your audience across all platforms.',
            services: [
                {
                    icon: <Instagram className="h-8 w-8" />,
                    name: 'Social Media Marketing',
                    description: 'Aggressive growth and marketing strategies for your social handles.',
                    plans: socialMediaServices[0]?.plans || []
                },
                {
                    icon: <Facebook className="h-8 w-8" />,
                    name: 'Social Media Management',
                    description: 'Professional day-to-day management of your social profiles.',
                    plans: socialMediaServices[1]?.plans || []
                }
            ]
        },
        {
            id: 'ads',
            title: 'Visual & Design',
            icon: <Palette className="h-5 w-5" />,
            description: 'Stunning visuals and design solutions for your brand.',
            services: [
                {
                    icon: <Sparkles className="h-8 w-8" />,
                    name: 'Graphic Design',
                    description: 'Professional social media posts and brand identity design.',
                    plans: graphicServices[0]?.plans || []
                },
                {
                    icon: <Video className="h-8 w-8" />,
                    name: 'Video Marketing',
                    description: 'Engaging video content for social media and YouTube.',
                    plans: videoServices[0]?.plans || []
                }
            ]
        },
        {
            id: 'advanced',
            title: 'Direct Marketing',
            icon: <MessageCircle className="h-5 w-5" />,
            description: 'Direct customer engagement through high-engagement channels.',
            services: [
                {
                    icon: <MessageCircle className="h-8 w-8" />,
                    name: 'WhatsApp Marketing',
                    description: 'Bulk messaging and automation with 98% open rates.',
                    plans: whatsappServices[0]?.plans || []
                },
                {
                    icon: <Mail className="h-8 w-8" />,
                    name: 'Email Marketing',
                    description: 'Nurture leads and drive conversions with targeted campaigns.',
                    plans: emailServices[0]?.plans || []
                }
            ]
        },
        {
            id: 'content',
            title: 'Content & SEO',
            icon: <PenTool className="h-5 w-5" />,
            description: 'Create value that attracts, engages, and converts subscribers.',
            services: [
                {
                    icon: <PenTool className="h-8 w-8" />,
                    name: 'Content Writing',
                    description: 'High-quality SEO blogs and articles that drive authority.',
                    plans: contentServices[0]?.plans || []
                },
                {
                    icon: <MapPin className="h-8 w-8" />,
                    name: 'Local SEO (GMB)',
                    description: 'Optimize your local presence to rank in Google Maps.',
                    plans: [
                        {
                            name: 'GMB Setup',
                            price: quickServices[1]?.price || "₹999",
                            originalPrice: quickServices[1]?.originalPrice || "₹2,999",
                            features: quickServices[1]?.features || [],
                            badge: 'ESSENTIAL'
                        }
                    ]
                }
            ]
        },
        {
            id: 'quick',
            title: 'Quick Solutions',
            icon: <Zap className="h-5 w-5" />,
            description: 'Fast and effective digital solutions to get you started immediately.',
            services: quickServices.map(s => ({
                icon: s.icon,
                name: s.name,
                description: s.description,
                plans: [{
                    name: 'ONE-TIME',
                    price: s.price,
                    originalPrice: s.originalPrice,
                    features: s.features,
                    badge: 'STARTUP'
                }]
            }))
        }
    ];

    const currentCategory = serviceCategories.find(cat => cat.id === activeTab) || serviceCategories[0];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans">
            <Helmet>
                <title>Best Digital Marketing Agency in Jaipur & India | JS TECH SOLUTION</title>
                <meta name="description" content="Grow your business with the best digital marketing agency. Expert Social Media Marketing, Content Writing, Graphic Design, and WhatsApp Marketing strategies that deliver results." />
                <meta name="keywords" content="digital marketing agency Jaipur, best social media marketing India, professional content writing, graphic design services, WhatsApp marketing agency" />
                <link rel="canonical" href="https://JSTECHSOLUTION.in/digital-marketing" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://JSTECHSOLUTION.in/digital-marketing" />
                <meta property="og:title" content="JS TECH SOLUTION | Expert Digital Marketing Services" />
                <meta property="og:description" content="Dominate your market with our data-driven digital marketing strategies. Free consultation today!" />
                <meta property="og:image" content="https://JSTECHSOLUTION.in/og-marketing.jpg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Scale Your Brand - JS TECH SOLUTION" />
                <meta name="twitter:description" content="The ultimate digital growth partner for modern brands." />
            </Helmet>

            <Breadcrumbs />

            <InquiryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                serviceName={selectedService}
            />

            {/* Global Service Navigation */}
            <section className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 sticky top-[72px] z-40 shadow-sm overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-start overflow-x-auto no-scrollbar py-3 sm:py-4 space-x-3 scroll-smooth">
                        {[
                            { to: "/services", label: "All Services", icon: <Sparkles className="w-3.5 h-3.5" /> },
                            { to: "/website-development", label: "Website Development", icon: <Monitor className="w-3.5 h-3.5" /> },
                            { to: "/digital-marketing", label: "Digital Marketing", icon: <Megaphone className="w-3.5 h-3.5" />, active: true },
                            { to: "/seo-services", label: "SEO Services", icon: <Search className="w-3.5 h-3.5" /> },
                            { to: "/shopify-development", label: "Shopify Website", icon: <ShoppingBag className="w-3.5 h-3.5" /> },
                            { to: "/wordpress-development", label: "Wordpress Website", icon: <Globe className="w-3.5 h-3.5" /> },
                            { to: "/ui-ux-design", label: "UI/UX Design", icon: <PenTool className="w-3.5 h-3.5" /> },
                        ].map((link, idx) => (
                            <Link
                                key={idx}
                                to={link.to}
                                className={`flex-shrink-0 px-5 py-2 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 ${link.active
                                    ? 'bg-pink-600 text-white shadow-md transform scale-105'
                                    : 'bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 border border-transparent'
                                    }`}
                            >
                                {link.icon}
                                <span>{link.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white py-24 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=60&fm=webp')] bg-cover bg-center opacity-10"></div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
                        <TrendingUp className="w-5 h-5 text-green-400" />
                        <span className="text-sm font-medium">Accelerate Your Digital Growth</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        India's Best <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">Digital Marketing</span><br />
                        Agency for Growth
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        From social media mastery to high-performance ads, we provide everything you need to dominate your market online.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => handleContact("Digital Marketing Consultation")}
                            className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-purple-500/30 transition-all hover:scale-105 flex items-center justify-center gap-2"
                        >
                            <Megaphone className="w-5 h-5" />
                            Get Free Strategy
                        </button>
                        <a
                            href="#expertise"
                            className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-2"
                        >
                            <Target className="w-5 h-5" />
                            Explore Services
                        </a>
                    </div>
                </div>
            </section>

            {/* Services Navigation Tabs */}
            <section id="expertise" className="sticky top-20 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex overflow-x-auto py-4 space-x-2 no-scrollbar">
                        {serviceCategories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveTab(category.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all whitespace-nowrap ${activeTab === category.id
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800'
                                    }`}
                            >
                                {category.icon}
                                {category.title}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Services Content with Nested Plans */}
            <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            {currentCategory?.title}
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light">
                            {currentCategory?.description}
                        </p>
                    </div>

                    <div className="space-y-32">
                        {currentCategory?.services.map((service, serviceIdx) => (
                            <div key={serviceIdx} className="space-y-12">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg">
                                        {service.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{service.name}</h3>
                                        <p className="text-gray-500 dark:text-gray-400">{service.description}</p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                    {service.plans.map((plan, planIdx) => (
                                        <div key={planIdx} className={`bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-xl border-2 transition-all duration-300 relative flex flex-col ${plan.popular ? 'border-pink-500 transform scale-105 z-10' : 'border-transparent hover:border-blue-500/30'}`}>
                                            {plan.badge && (
                                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500 to-orange-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg uppercase tracking-tighter">
                                                    {plan.badge}
                                                </div>
                                            )}

                                            <div className="mb-8">
                                                <h4 className="text-lg font-black text-gray-900 dark:text-white mb-4 uppercase tracking-wider">{plan.name}</h4>
                                                <div className="flex items-baseline gap-1">
                                                    <span className="text-3xl font-black text-blue-600 dark:text-blue-400">{plan.price}</span>
                                                    {plan.duration && <span className="text-gray-400 text-xs font-bold uppercase">{plan.duration}</span>}
                                                </div>
                                                {plan.originalPrice && (
                                                    <div className="text-gray-400 line-through text-xs font-bold mt-1">{plan.originalPrice}</div>
                                                )}
                                            </div>

                                            <ul className="space-y-3 mb-8 flex-grow">
                                                {plan.features.slice(0, 8).map((feature, fIdx) => (
                                                    <li key={fIdx} className="flex items-start gap-2 text-xs leading-tight text-gray-600 dark:text-gray-400">
                                                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            <button
                                                onClick={() => handleContact(`${service.name} - ${plan.name} Plan`)}
                                                className={`w-full py-4 rounded-xl font-black text-sm transition-all flex items-center justify-center gap-2 ${plan.popular ? 'bg-pink-600 text-white hover:bg-pink-700 shadow-lg shadow-pink-500/20' : 'bg-slate-100 dark:bg-slate-700 text-gray-900 dark:text-white hover:bg-blue-600 hover:text-white'}`}
                                            >
                                                Select Plan <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white dark:bg-slate-900">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="bg-gradient-to-br from-indigo-600 to-purple-800 rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-black mb-8">Ready to Scale?</h2>
                            <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto">
                                Join 500+ brands growing with JSTECHSOLUTION. Get your custom growth roadmap today.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <button
                                    onClick={() => handleContact("Free Consultation - Bottom CTA")}
                                    className="bg-white text-indigo-900 px-12 py-5 rounded-2xl font-black hover:scale-105 transition-all shadow-xl text-lg"
                                >
                                    Book Free Strategy Call
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DigitalMarketing;
