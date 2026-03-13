import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import InquiryModal from '../components/InquiryModal';
import {
    ShoppingBag,
    Code,
    Zap,
    Smartphone,
    Lock,
    Globe,
    CheckCircle,
    MessageCircle
} from 'lucide-react';
import { platformServices } from '../data/pricing';

const ShopifyDevelopment: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState("");

    const handleContact = (service: string) => {
        setSelectedService(service);
        setIsModalOpen(true);
    };

    const shopifyCategory = platformServices.find(s => s.category === "Shopify Store");
    const shopifyPlans = shopifyCategory?.plans || [];

    const features = [
        {
            icon: <ShoppingBag className="h-8 w-8 text-blue-500" />,
            title: "Store Setup & Configuration",
            description: "Complete Shopify store setup including payments and shipping."
        },
        {
            icon: <Code className="h-8 w-8 text-indigo-500" />,
            title: "Theme Customization",
            description: "Bespoke theme modifications to match your brand identity."
        },
        {
            icon: <Zap className="h-8 w-8 text-yellow-500" />,
            title: "Performance Optimization",
            description: "Optimized for speed and high conversion rates."
        },
        {
            icon: <Smartphone className="h-8 w-8 text-purple-500" />,
            title: "Mobile Commerce",
            description: "Seamless shopping experience across all mobile devices."
        },
        {
            icon: <Lock className="h-8 w-8 text-green-500" />,
            title: "App Integration",
            description: "Integration of essential apps to extend store functionality."
        },
        {
            icon: <Globe className="h-8 w-8 text-red-500" />,
            title: "Global Reach",
            description: "Setup multi-currency and international shipping options."
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans">
            <Helmet>
                <title>Shopify Development Services | Custom Ecommerce Stores | JSTECHSOLUTION</title>
                <meta name="description" content="Expert Shopify development services. Custom themes, store setup, app integration, and ecommerce solutions to grow your business." />
            </Helmet>

            <InquiryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                serviceName={selectedService}
            />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 text-white py-24 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=60&fm=webp')] bg-cover bg-center opacity-10"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
                        <ShoppingBag className="w-5 h-5 text-blue-400" />
                        <span className="text-sm font-medium">World Class Ecommerce Solutions</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Shopify</span><br />
                        Development
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        Scale your business with powerful, high-converting Shopify stores designed for growth.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => handleContact("Shopify Consultation")}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-500/30 transition-all hover:scale-105 flex items-center justify-center gap-2"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Launch Your Store
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Powerful Shopify Features
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            Everything you need to succeed in online retail
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, idx) => (
                            <div key={idx} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700 group">
                                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Shopify Development Packages
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            Professional ecommerce solutions at competitive prices
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {shopifyPlans.map((plan, index) => (
                            <div key={index} className={`bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${plan.popular ? 'border-yellow-400 dark:border-yellow-600 transform scale-105 z-10' : 'border-blue-200 dark:border-blue-900'}`}>
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-gray-900 px-6 py-1 rounded-full text-sm font-bold">
                                        POPULAR
                                    </div>
                                )}
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                                    <div className="flex items-baseline justify-center gap-2 mb-4">
                                        <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                                        <span className="text-gray-400 line-through">{plan.originalPrice}</span>
                                    </div>
                                    {plan.badge && <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-bold">{plan.badge}</span>}
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm">
                                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    onClick={() => handleContact(`Shopify ${plan.name} Plan`)}
                                    className={`w-full py-3 rounded-xl font-bold transition-all ${plan.popular ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                                >
                                    Get Started
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ShopifyDevelopment;
