import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import InquiryModal from '../components/InquiryModal';
import {
    Layout,
    Database,
    CheckCircle,
    MessageCircle,
    Monitor,
    Phone
} from 'lucide-react';
import { platformServices } from '../data/pricing';

const Wordpress: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState("");

    const handleContact = (service: string) => {
        setSelectedService(service);
        setIsModalOpen(true);
    };

    const wordpressCategory = platformServices.find(s => s.category === "WordPress Website");
    const wordpressPlans = wordpressCategory?.plans || [];

    const features = [
        {
            icon: <Layout className="h-8 w-8 text-blue-500" />,
            title: "Custom Theme Development",
            description: "Unique, pixel-perfect themes tailored to your brand identity."
        },
        // ... (other features remains same)
        {
            icon: <Database className="h-8 w-8 text-red-500" />,
            title: "Easy Migration",
            description: "Seamless migration from other platforms to WordPress."
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans">
            <Helmet>
                <title>WordPress Development | Secure & Scalable Websites | JS TECH SOLUTION</title>
                <meta name="description" content="Professional WordPress development services. Custom themes, plugin development, and secure solutions for businesses looking for flexibility and power." />
                <meta name="keywords" content="WordPress development Jaipur, custom WP themes, WordPress maintenance India, professional blogging websites" />
                <link rel="canonical" href="https://JSTECHSOLUTION.in/wordpress-development" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://JSTECHSOLUTION.in/wordpress-development" />
                <meta property="og:title" content="JS TECH SOLUTION | WordPress Experts" />
                <meta property="og:description" content="Scaling the web with powerful WordPress solutions. Secure, fast, and feature-rich." />
                <meta property="og:image" content="https://JSTECHSOLUTION.in/og-wordpress.jpg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Professional WordPress Sites" />
                <meta name="twitter:description" content="Customized WordPress solutions for your unique business needs." />
            </Helmet>

            <InquiryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                serviceName={selectedService}
            />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white py-24 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&w=1200&q=60&fm=webp')] bg-cover bg-center opacity-10"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
                        <Monitor className="w-5 h-5 text-blue-400" />
                        <span className="text-sm font-medium">Powering 40% of the Web</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">WordPress</span><br />
                        Development
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        We build scalable, secure, and high-performance WordPress websites that drive growth and engagement.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => handleContact("WordPress Consultation")}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-500/30 transition-all hover:scale-105 flex items-center justify-center gap-2"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Start Project
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Why Choose Our WordPress Services?
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            Comprehensive solutions for your digital presence
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
                            WordPress Development Pricing
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            Flexible pricing plans to suit your needs
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {wordpressPlans.map((plan, index) => (
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
                                    onClick={() => handleContact(`WordPress ${plan.name} Plan`)}
                                    className={`w-full py-3 rounded-xl font-bold transition-all ${plan.popular ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                                >
                                    Get Started
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-slate-100 dark:bg-slate-800">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                        Ready to build your dream website?
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                        Let's discuss your project and create something amazing together.
                    </p>
                    <button
                        onClick={() => handleContact("Bottom CTA - WordPress")}
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg transition-all hover:scale-105 inline-flex items-center gap-2"
                    >
                        <Phone className="h-5 w-5" />
                        Book a Free Consultation
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Wordpress;
