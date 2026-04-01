import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { waLink } from "../config/contact";
import Breadcrumbs from "../components/Breadcrumbs";
import {
    Search,
    TrendingUp,
    Globe,
    Link2,
    Users,
    CheckCircle,
    ArrowRight,
    Target,
    Bot,
    ShoppingCart,
    Building,
    Rocket,
    ChevronDown,
    ChevronUp,
    Phone,
    MessageCircle
} from "lucide-react";
import { seoServices, seoAuditService } from "../data/pricing";
import ServiceSchema from "../components/Schema/ServiceSchema";
import BreadcrumbSchema from "../components/Schema/BreadcrumbSchema";

// Modal Component for detailed service view
const InfoModal: React.FC<{ isOpen: boolean; onClose: () => void; title: string; description: string; details: string[] }> = ({ isOpen, onClose, title, description, details }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
                <div className="p-8 border-b border-gray-100 dark:border-slate-800 flex justify-between items-center">
                    <h3 className="text-2xl font-bold dark:text-white">{title}</h3>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                        <Rocket className="w-6 h-6 rotate-45 text-gray-500" />
                    </button>
                </div>
                <div className="p-8">
                    <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">{description}</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {details.map((detail, idx) => (
                            <div key={idx} className="flex gap-3 text-sm text-gray-700 dark:text-gray-300">
                                <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                                <span>{detail}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="p-8 bg-gray-50 dark:bg-slate-800/50 flex justify-end">
                    <button onClick={onClose} className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-xl font-bold transition-all hover:scale-105 active:scale-95">
                        Close Details
                    </button>
                </div>
            </div>
        </div>
    );
};

const SeoServices: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState<{ title: string; description: string; details: string[] }>({ title: "", description: "", details: [] });

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const handleContact = (service: string, plan?: string) => {
        const message = `🔍 SEO Services Inquiry - JSTECHSOLUTION\n\nService Interested: ${service}${plan ? ` (${plan} Plan)` : ''}\n\nI'm interested in your SEO services. Please share more details and pricing!`;
        window.open(waLink(message), '_blank');
    };

    const handleLearnMore = (serviceTitle: string) => {
        const serviceInfo: { [key: string]: { description: string; details: string[] } } = {
            "Organic SEO": {
                description: "Natural search optimization for long-term growth",
                details: [
                    "Comprehensive keyword research and analysis to identify high-value search terms",
                    "On-page optimization including meta tags, headers, and content structure",
                    "Technical SEO improvements for better crawlability and indexing",
                    "Content strategy development aligned with user search intent",
                    "Link building campaigns to increase domain authority",
                    "Regular performance monitoring and optimization adjustments"
                ]
            },
            "E-Commerce SEO": {
                description: "Specialized optimization for online stores",
                details: [
                    "Product page optimization with rich snippets and schema markup",
                    "Category page structure and internal linking strategy",
                    "Shopping feed optimization for Google Shopping and other platforms",
                    "Conversion rate optimization to maximize sales from organic traffic",
                    "User experience improvements for better engagement and lower bounce rates",
                    "Platform-specific optimization for Shopify, WooCommerce, and other e-commerce systems"
                ]
            },
            "AI SEO": {
                description: "Cutting-edge AI-powered SEO strategies",
                details: [
                    "AI-driven keyword research using predictive analytics and trend forecasting",
                    "Automated content generation and optimization using advanced language models",
                    "Competitor analysis powered by machine learning algorithms",
                    "Real-time ranking predictions and opportunity identification",
                    "Personalized content recommendations based on user behavior patterns",
                    "Automated technical SEO audits with AI-powered issue detection"
                ]
            },
            "Backlinks": {
                description: "High-quality link building for authority growth",
                details: [
                    "Manual outreach to high DA/DR websites (50+ domain authority)",
                    "Guest posting on niche-relevant, authoritative publications",
                    "Niche edits and contextual link placements on established content",
                    "Broken link building to replace dead links with your content",
                    "Link monitoring and disavow file management for clean link profile",
                    "Monthly backlink reports with detailed metrics and growth tracking"
                ]
            },
            "Consultancy": {
                description: "Expert guidance for your in-house team",
                details: [
                    "Comprehensive SEO audit identifying all technical and content issues",
                    "Custom SEO strategy development aligned with business goals",
                    "Team training sessions on SEO best practices and tools",
                    "Monthly strategy calls to review progress and adjust tactics",
                    "Access to proprietary SEO tools and resources",
                    "Ongoing support via email and chat for quick questions and guidance"
                ]
            },
            "Industries": {
                description: "Tailored SEO for your specific industry",
                details: [
                    "Industry-specific keyword research targeting your niche audience",
                    "Competitor analysis within your specific market vertical",
                    "Content strategy designed for your industry's unique search patterns",
                    "Compliance with industry-specific regulations (HIPAA, FINRA, etc.)",
                    "Local SEO optimization for service-area businesses",
                    "Industry-relevant backlink acquisition from authoritative sources"
                ]
            }
        };

        const info = serviceInfo[serviceTitle];
        if (info) {
            setSelectedService({
                title: serviceTitle,
                description: info.description,
                details: info.details
            });
            setIsInfoModalOpen(true);
        }
    };

    const services = [
        {
            title: "Organic SEO",
            description: "Dominate search results naturally. We optimize your website's architecture and content to rank high for valuable keywords without paying for ads.",
            icon: <Search className="w-8 h-8" />,
            color: "bg-blue-100 text-blue-600",
            gradient: "from-blue-500 to-blue-600"
        },
        {
            title: "E-Commerce SEO",
            description: "Drive more sales to your online store. Specialized optimization for product pages, categories, and technical structure for platforms like Shopify and WooCommerce.",
            icon: <ShoppingCart className="w-8 h-8" />,
            color: "bg-green-100 text-green-600",
            gradient: "from-green-500 to-emerald-600"
        },
        {
            title: "AI SEO",
            description: "Leverage the power of Artificial Intelligence. We use advanced AI tools for predictive keyword analysis, content generation, and competitor insights.",
            icon: <Bot className="w-8 h-8" />,
            color: "bg-purple-100 text-purple-600",
            gradient: "from-purple-500 to-violet-600"
        },
        {
            title: "Backlinks",
            description: "Build authority and trust. We secure high-quality backlinks from reputable websites to signal your site's credibility to search engines.",
            icon: <Link2 className="w-8 h-8" />,
            color: "bg-orange-100 text-orange-600",
            gradient: "from-orange-500 to-red-500"
        },
        {
            title: "Consultancy",
            description: "Expert guidance for your internal team. We provide strategic roadmaps, technical audits, and ongoing advice to keep your SEO on track.",
            icon: <Users className="w-8 h-8" />,
            color: "bg-pink-100 text-pink-600",
            gradient: "from-pink-500 to-rose-600"
        },
        {
            title: "Industries",
            description: "Tailored strategies for your niche. Whether it's Real Estate, Healthcare, Finance, or SaaS, we understand your specific market dynamics.",
            icon: <Building className="w-8 h-8" />,
            color: "bg-teal-100 text-teal-600",
            gradient: "from-teal-500 to-cyan-600"
        }
    ];

    const benefits = [
        {
            title: "Increased Organic Traffic",
            description: "Attract more qualified visitors without paying for ads.",
            icon: <Users className="w-6 h-6 text-green-500" />
        },
        {
            title: "Better Brand Visibility",
            description: "Stay top-of-mind by ranking for key industry terms.",
            icon: <Globe className="w-6 h-6 text-blue-500" />
        },
        {
            title: "Higher Conversion Rates",
            description: "Target users who are actively looking for your solutions.",
            icon: <Target className="w-6 h-6 text-red-500" />
        },
        {
            title: "Long-Term Results",
            description: "Unlike ads, SEO provides sustainable growth over time.",
            icon: <TrendingUp className="w-6 h-6 text-purple-500" />
        }
    ];

    const faqs = [
        {
            question: "What makes JSTECHSOLUTION different from other SEO agencies?",
            answer: "We focus on data-driven strategies and transparent results. Unlike others, we don't just promise rankings; we focus on traffic and conversions that actually grow your business. Our team provides personalized attention and custom strategies for every client."
        },
        {
            question: "How long does it take to see results from SEO?",
            answer: "SEO is a long-term strategy. Typically, you can expect to see noticeable improvements in 3 to 6 months. However, the timeline depends on your industry competitiveness, current website status, and the aggressiveness of the campaign."
        },
        {
            question: "Do you offer guarantees for #1 ranking?",
            answer: "No ethical SEO agency can guarantee a #1 ranking because Google constantly updates its algorithms. We guarantee we will apply the best industry practices to significantly improve your visibility and traffic."
        },
        {
            question: "Is Local SEO included in your packages?",
            answer: "Yes! For businesses serving a specific geographic area, Local SEO is a core part of our strategy. We optimize your Google Business Profile and local citations to help you capture local market share."
        },
        {
            question: "How do I get started with JSTECHSOLUTION?",
            answer: "Simply request a free SEO audit or contact us directly. We'll analyze your website, discuss your goals, and propose a tailored plan to help you achieve success."
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans">
            <Helmet>
                <title>Expert SEO Services | Rank #1 on Google | JS TECH SOLUTION</title>
                <meta name="description" content="Dominate search results with expert SEO services. Organic SEO, E-commerce SEO, AI-driven strategies, and high-quality backlinks designed to grow your revenue." />
                <meta name="keywords" content="SEO services India, rank #1 on Google, best SEO agency Jaipur, organic traffic growth, backlink building, search engine optimization, JS TECH SOLUTION SEO" />
                <link rel="canonical" href="https://JSTECHSOLUTION.in/seo-services" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://JSTECHSOLUTION.in/seo-services" />
                <meta property="og:title" content="JS TECH SOLUTION | SEO Success & Rankings" />
                <meta property="og:description" content="Witness the power of data-driven SEO. Get your website to the first page of Google." />
                <meta property="og:image" content="https://JSTECHSOLUTION.in/og-seo.jpg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Dominate Search Rankings - JS TECH SOLUTION" />
                <meta name="twitter:description" content="Expert SEO strategies that deliver measurable results and traffic." />
            </Helmet>

            <ServiceSchema 
                name="SEO Services" 
                description="Dominate search results with expert SEO services. Organic SEO, E-commerce SEO, AI-driven strategies, and high-quality backlinks designed to grow your revenue." 
                provider={{ name: "JS TECH SOLUTION" }} 
                areaServed="India" 
                url="https://jstechsolution.in/seo-services" 
            />
            <BreadcrumbSchema 
                items={[
                    { name: "Home", item: "https://jstechsolution.in/" },
                    { name: "Services", item: "https://jstechsolution.in/services" },
                    { name: "SEO Services", item: "https://jstechsolution.in/seo-services" }
                ]} 
            />

            <Breadcrumbs />

            <InfoModal
                isOpen={isInfoModalOpen}
                onClose={() => setIsInfoModalOpen(false)}
                title={selectedService.title}
                description={selectedService.description}
                details={selectedService.details}
            />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white py-24 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=60&fm=webp')] bg-cover bg-center opacity-10"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
                        <Rocket className="w-5 h-5 text-yellow-400" />
                        <span className="text-sm font-medium">Rank #1 on Google</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        We don't just do SEO,<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">We Dominate Google Rankings</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Stop losing customers to your competitors. Our data-driven SEO strategies guarantee higher rankings, more traffic, and increased revenue.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => handleContact("Free SEO Audit Hero")}
                            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-2"
                        >
                            <Search className="w-5 h-5" />
                            Get Free SEO Audit
                        </button>
                        <a
                            href="#packages"
                            className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-2"
                        >
                            <Target className="w-5 h-5" />
                            View Packages
                        </a>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-white dark:bg-slate-800 border-b border-gray-100 dark:border-slate-700">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100 dark:divide-slate-700">
                        {[
                            { label: "Websites Optimized", value: "500+", color: "text-blue-600" },
                            { label: "Keywords Ranked", value: "10M+", color: "text-emerald-600" },
                            { label: "Traffic Increase", value: "200%", color: "text-purple-600" },
                            { label: "Years Experience", value: "5+", color: "text-orange-600" },
                        ].map((stat, idx) => (
                            <div key={idx} className="p-4 border-l border-gray-100 dark:border-slate-700 first:border-0">
                                <div className={`text-4xl font-extrabold ${stat.color} mb-2`}>{stat.value}</div>
                                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Services Section */}
            <section className="py-24 px-4 bg-slate-50 dark:bg-slate-900">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <span className="text-blue-600 font-bold tracking-wider uppercase text-xs bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Our Expertise</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mt-6 mb-6">Comprehensive SEO Solutions</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-light">
                            From technical foundations to AI-driven growth, we cover every aspect of modern search.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, idx) => (
                            <div key={idx} className="group relative bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-slate-700 overflow-hidden hover:-translate-y-2">
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                                <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                                    {service.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                                    {service.description}
                                </p>

                                <button
                                    onClick={() => handleLearnMore(service.title)}
                                    className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                                >
                                    Learn More
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 px-4 bg-white dark:bg-slate-800">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Why Choose Our SEO Services?</h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">We combine technical expertise with creative strategy to deliver exceptional results.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 transition-all hover:shadow-lg">
                                <div className="mb-6">{benefit.icon}</div>
                                <h3 className="text-xl font-bold mb-3 dark:text-white">{benefit.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="packages" className="py-24 px-4 bg-slate-50 dark:bg-slate-900">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 font-sans">
                        <h2 className="text-4xl md:text-5xl font-black mb-4 dark:text-white">Pricing & Packages</h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">Choose the perfect plan to grow your organic visibility.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {seoServices.map((plan, index) => (
                            <div key={index} className={`bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-xl border-2 transition-all duration-300 flex flex-col ${plan.popular ? 'border-orange-500 transform scale-105 z-10' : 'border-transparent'}`}>
                                {plan.badge && (
                                    <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-6">
                                        {plan.badge}
                                    </div>
                                )}
                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl font-black text-orange-600">{plan.price}</span>
                                        <span className="text-gray-500 text-sm">{plan.duration}</span>
                                    </div>
                                    <div className="text-gray-400 line-through text-sm mt-1">{plan.originalPrice}</div>
                                </div>

                                <ul className="space-y-4 mb-8 flex-grow">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                                            <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={() => handleContact("SEO Service", plan.name)}
                                    className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-slate-100 dark:bg-slate-700 text-gray-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600'}`}
                                >
                                    Get Started
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* SEO Audit CTA */}
                    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="max-w-2xl">
                                <div className="bg-white/20 px-4 py-1 rounded-full text-sm font-bold w-fit mb-6 backdrop-blur-sm border border-white/30">
                                    {seoAuditService.badge}
                                </div>
                                <h3 className="text-3xl font-black mb-4">{seoAuditService.name}</h3>
                                <p className="text-indigo-100 text-lg mb-6 leading-relaxed">
                                    Get a professional, manual SEO audit of your website. We identify technical errors, content gaps, and ranking opportunities to give you a clear roadmap for growth.
                                </p>
                                <div className="flex flex-wrap gap-4 text-sm">
                                    {seoAuditService.features.slice(0, 4).map((f, i) => (
                                        <div key={i} className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg border border-white/20">
                                            <CheckCircle className="w-4 h-4" />
                                            <span>{f}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="text-center md:text-right bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 min-w-[280px]">
                                <div className="text-sm font-bold opacity-60 line-through mb-1">{seoAuditService.originalPrice}</div>
                                <div className="text-5xl font-black mb-2">{seoAuditService.price}</div>
                                <div className="text-sm font-bold mb-8 uppercase tracking-widest">{seoAuditService.duration}</div>
                                <button
                                    onClick={() => handleContact("Premium SEO Audit")}
                                    className="w-full bg-white text-indigo-900 px-8 py-4 rounded-xl font-black text-lg hover:bg-yellow-400 hover:scale-105 transition-all shadow-xl"
                                >
                                    Order Audit Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 px-4 bg-white dark:bg-slate-800">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
                        <p className="text-gray-600 dark:text-gray-300">Detailed answers to your most pressing questions.</p>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="border border-gray-200 dark:border-slate-700 rounded-2xl bg-white dark:bg-slate-800 overflow-hidden transition-all duration-300 hover:shadow-md">
                                <button
                                    onClick={() => toggleFaq(idx)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className="font-bold text-lg text-gray-900 dark:text-white pr-8">{faq.question}</span>
                                    {openFaq === idx ?
                                        <ChevronUp className="w-6 h-6 text-blue-500 flex-shrink-0" /> :
                                        <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                                    }
                                </button>
                                {openFaq === idx && (
                                    <div className="px-6 pb-6 pt-0 text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 px-4 bg-slate-50 dark:bg-slate-900">
                <div className="max-w-6xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[3rem] p-10 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to rank #1?</h2>
                        <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto font-light">
                            Don't let your competitors take your customers. Contact JSTECHSOLUTION today for a free SEO consultation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <button
                                onClick={() => handleContact("Final Bottom CTA")}
                                className="bg-white text-blue-700 px-12 py-5 rounded-2xl font-bold hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 transition-all flex items-center justify-center gap-3 text-lg"
                            >
                                <Phone className="w-6 h-6" />
                                Contact Us
                            </button>
                            <a
                                href={waLink()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 text-white px-12 py-5 rounded-2xl font-bold hover:bg-green-400 hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:scale-105 transition-all flex items-center justify-center gap-3 text-lg"
                            >
                                <MessageCircle className="w-6 h-6" />
                                WhatsApp Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SeoServices;
