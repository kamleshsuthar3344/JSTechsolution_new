import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import InquiryModal from '../components/InquiryModal';
import Breadcrumbs from '../components/Breadcrumbs';
import {
    Monitor,
    CheckCircle,
    MessageCircle,
    Sparkles,
    Megaphone,
    Search,
    ShoppingBag,
    Globe,
    PenTool
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { websiteIndustryPackages } from '../data/pricing';

const WebsiteDevelopment: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState("");

    const handleContact = (service: string) => {
        setSelectedService(service);
        setIsModalOpen(true);
    };

    // Transform modular data to fit the UI needs of this page
    const websiteCategories = websiteIndustryPackages.map(group => ({
        category: group.title,
        services: group.services.map(s => ({
            icon: s.icon,
            name: s.category,
            price: (s.plans?.[0]?.price || "₹2,500") + '+' // Show basic price as starting
        }))
    }));

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
            <Helmet>
                <title>India's Top Website Development Company | Jaipur, Rajasthan | JS TECH SOLUTION</title>
                <meta
                    name="description"
                    content="Experience world-class website development with India's top agency. Serving Jaipur, Rajasthan, and NCR. Custom e-commerce, corporate, and NGO websites."
                />
                <meta name="keywords" content="top website development company India, web design Jaipur, Gurugram web developers, Noida website development, NCR digital services" />
                <link rel="canonical" href="https://JSTECHSOLUTION.in/website-development" />
            </Helmet>

            <Breadcrumbs />

            <InquiryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                serviceName={selectedService}
            />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 lg:py-24 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.3) 2%, transparent 20%),
    radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.2) 1%, transparent 25%),
    radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.1) 1%, transparent 15%)`,
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-bold mb-6">
                        <Sparkles className="h-4 w-4" />
                        <span>Custom Web Solutions</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                        India's Top <span className="text-yellow-400">Website Development</span> <br />
                        Partner for Success
                    </h1>

                    <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
                        We create robust, scalable, and high-performance websites that drive growth and engagement. From custom coding to CMS solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            onClick={() => handleContact("Website Development Inquiry")}
                            className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2"
                        >
                            <MessageCircle className="h-5 w-5" />
                            Get Free Quote
                        </button>
                        <div className="flex items-center gap-2 text-blue-100">
                            <CheckCircle className="h-5 w-5 text-yellow-400" />
                            <span>24/7 Support</span>
                            <span className="mx-2">•</span>
                            <CheckCircle className="h-5 w-5 text-yellow-400" />
                            <span>Free Maintenance</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation Buttons (Premium Responsive Bar) */}
            <section className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 sticky top-[72px] z-40 shadow-sm overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-start overflow-x-auto no-scrollbar py-3 sm:py-4 space-x-3 scroll-smooth">
                        <Link
                            to="/services"
                            className="flex-shrink-0 px-5 py-2 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 border border-transparent"
                        >
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>All Services</span>
                        </Link>

                        <Link
                            to="/website-development"
                            className="flex-shrink-0 px-5 py-2 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 bg-blue-600 text-white shadow-md transform hover:scale-105"
                        >
                            <Monitor className="w-3.5 h-3.5" />
                            <span>Website Development</span>
                        </Link>

                        <Link
                            to="/digital-marketing"
                            className="flex-shrink-0 px-5 py-2 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 border border-transparent"
                        >
                            <Megaphone className="w-3.5 h-3.5" />
                            <span>Digital Marketing</span>
                        </Link>

                        <Link
                            to="/seo-services"
                            className="flex-shrink-0 px-5 py-2 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 border border-transparent"
                        >
                            <Search className="w-3.5 h-3.5" />
                            <span>SEO Services</span>
                        </Link>

                        <Link
                            to="/shopify-development"
                            className="flex-shrink-0 px-5 py-2 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 border border-transparent"
                        >
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span>Shopify Website</span>
                        </Link>

                        <Link
                            to="/wordpress-development"
                            className="flex-shrink-0 px-5 py-2 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 border border-transparent"
                        >
                            <Globe className="w-3.5 h-3.5" />
                            <span>Wordpress Website</span>
                        </Link>

                        <Link
                            to="/ui-ux-design"
                            className="flex-shrink-0 px-5 py-2 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 border border-transparent"
                        >
                            <PenTool className="w-3.5 h-3.5" />
                            <span>UI/UX Design</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Grid - 50+ Website Types */}
            <section className="py-20 bg-gray-50 dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            50+ Types of Websites We Build
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            From simple portfolios to complex e-commerce platforms - we build it all
                        </p>
                    </div>

                    {websiteCategories.map((category, catIndex) => (
                        <div key={catIndex} className="mb-16">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                                {category.category}
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {category.services.map((service, index) => (
                                    <div
                                        key={index}
                                        onClick={() => handleContact(service.name)}
                                        className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
                                    >
                                        <div className="flex flex-col items-center text-center">
                                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform">
                                                {service.icon}
                                            </div>
                                            <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">{service.name}</h4>
                                            <p className="text-blue-600 dark:text-blue-400 font-bold text-sm">{service.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    <div className="text-center mt-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8">
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                            <strong className="text-blue-600 dark:text-blue-400">Don't see your type?</strong> We build custom websites for any industry!
                        </p>
                        <button
                            onClick={() => handleContact("Custom Website Inquiry")}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition-all hover:scale-105 inline-flex items-center gap-2"
                        >
                            <MessageCircle className="h-5 w-5" />
                            Request Custom Quote
                        </button>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-blue-600 text-white">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-xl mb-8 text-blue-100">
                        Contact us today for a free consultation and quote.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => handleContact("Project Inquiry")}
                            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-2"
                        >
                            <MessageCircle className="h-5 w-5" />
                            Chat on WhatsApp
                        </button>
                    </div>
                </div>
            </section>

            {/* Service Areas Section */}
            <section className="py-16 bg-white dark:bg-slate-800">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                        Serving Businesses in <span className="text-blue-600">Rajasthan & Beyond</span>
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4 text-gray-600 dark:text-gray-300">
                        {["Jaipur", "Gurugram", "Noida", "Faridabad", "Ghaziabad", "Mumbai", "Bangalore", "Dehradun", "Jaipur"].map((city) => (
                            <span key={city} className="px-4 py-2 bg-gray-100 dark:bg-slate-700 rounded-full text-sm font-medium">
                                {city}
                            </span>
                        ))}
                    </div>
                    <p className="mt-8 text-gray-500 dark:text-gray-400">
                        Top-rated website development company providing services across India.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default WebsiteDevelopment;
