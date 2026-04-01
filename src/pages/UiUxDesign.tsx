import React from 'react';
import { Helmet } from 'react-helmet';
import {
    PenTool,
    Smartphone,
    Monitor,
    Layers,
    MessageCircle,
    ArrowRight,
} from 'lucide-react';
import { waLink } from '../config/contact';
import { uiuxServices } from '../data/pricing/digitalMarketing';
import { CheckCircle } from 'lucide-react';

const UiUxDesign: React.FC = () => {

    const handleContact = (service: string, plan?: string) => {
        const message = `🎨 UI/UX Design Inquiry - JS TECH SOLUTION\n\nService interested: ${service}${plan ? ` (${plan} Plan)` : ''}\n\nI'm looking for professional design services. Please share details!`;
        window.open(waLink(message), '_blank');
    };

    const process = [
        {
            step: "01",
            title: "Research",
            description: "Understanding your users, market, and business goals."
        },
        {
            step: "02",
            title: "Wireframing",
            description: "Creating structural blueprints of the interface."
        },
        {
            step: "03",
            title: "Prototyping",
            description: "Building interactive mockups to test user flow."
        },
        {
            step: "04",
            title: "Visual Design",
            description: "Crafting beautiful, pixel-perfect interfaces."
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans">
            <Helmet>
                <title>UI/UX Design Services | Mobile & Web Design | JS TECH SOLUTION</title>
                <meta name="description" content="Elevate your product with expert UI/UX design. We create intuitive, high-converting, and beautiful digital experiences for web and mobile. Figma experts." />
                <meta name="keywords" content="UI/UX design Jaipur, mobile app design, web design services, user experience design, Figma designers India" />
                <link rel="canonical" href="https://JSTECHSOLUTION.in/ui-ux-design" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://JSTECHSOLUTION.in/ui-ux-design" />
                <meta property="og:title" content="JS TECH SOLUTION | Premium UI/UX Design" />
                <meta property="og:description" content="Design that drives engagement. Transform your vision into a stunning digital reality." />
                <meta property="og:image" content="https://JSTECHSOLUTION.in/og-uiux.jpg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="UI/UX Design Excellence" />
                <meta name="twitter:description" content="User-centric design solutions for modern businesses." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-purple-900 via-fuchsia-900 to-slate-900 text-white py-24 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=60&fm=webp')] bg-cover bg-center opacity-10"></div>

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
                        <PenTool className="w-5 h-5 text-purple-400" />
                        <span className="text-sm font-medium">Crafting Digital Experiences</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        User-Centric <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">UI/UX Design</span><br />
                        Solutions
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        We blend aesthetics with functionality to create products that users love and businesses rely on.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => handleContact("UI/UX Consultation")}
                            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-purple-500/30 transition-all hover:scale-105 flex items-center justify-center gap-2"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Get Design Quote
                        </button>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-slate-700 hover:border-purple-200 transition-all">
                            <Smartphone className="h-10 w-10 text-purple-600 mb-6" />
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Mobile App Design</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">iOS and Android app designs that offer seamless user experiences and modern aesthetics.</p>
                            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                                <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-purple-500" /> iOS & Material Design</li>
                                <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-purple-500" /> Interaction Design</li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-slate-700 hover:border-purple-200 transition-all">
                            <Monitor className="h-10 w-10 text-pink-600 mb-6" />
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Web Design (UI)</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">Stunning website interfaces that capture your brand's essence and convert visitors.</p>
                            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                                <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-pink-500" /> Responsive Layouts</li>
                                <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-pink-500" /> Design Systems</li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-slate-700 hover:border-purple-200 transition-all">
                            <Layers className="h-10 w-10 text-blue-600 mb-6" />
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Prototyping</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">Interactive prototypes that visualize the final product before development begins.</p>
                            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                                <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-blue-500" /> High-Fidelity Mockups</li>
                                <li className="flex items-center gap-2"><ArrowRight className="h-4 w-4 text-blue-500" /> User Flow Testing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-24 px-4 bg-slate-50 dark:bg-slate-900 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 uppercase tracking-tighter italic">Pricing Plans</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-bold uppercase tracking-widest text-[10px]">Simple, transparent pricing for world-class design</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {uiuxServices[0]?.plans?.map((plan, idx) => (
                            <div key={idx} className={`bg-white dark:bg-slate-800 rounded-[3rem] p-10 shadow-2xl border-2 transition-all duration-500 relative flex flex-col group ${plan.popular ? 'border-purple-600 scale-105 z-10' : 'border-transparent hover:border-purple-600/20'}`}>
                                {plan.popular && (
                                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-[10px] font-black px-6 py-2 rounded-full shadow-xl uppercase tracking-widest">
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-10">
                                    <h3 className="text-xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-wider italic">{plan.name}</h3>
                                    <div className="flex items-baseline gap-1 mb-2">
                                        <span className="text-5xl font-black text-purple-600 dark:text-purple-400">{plan.price}</span>
                                    </div>
                                    {plan.originalPrice && (
                                        <div className="text-gray-400 line-through text-xs font-bold italic">{plan.originalPrice}</div>
                                    )}
                                </div>

                                <div className="space-y-4 mb-10 flex-grow">
                                    {plan.features.map((feature, fIdx) => (
                                        <div key={fIdx} className="flex items-start gap-3 group/item">
                                            <div className="mt-1 bg-purple-100 dark:bg-purple-900/30 p-0.5 rounded-full transition-colors group-hover/item:bg-purple-600">
                                                <CheckCircle className="w-3.5 h-3.5 text-purple-600 group-hover/item:text-white transition-colors" />
                                            </div>
                                            <span className="text-sm font-bold text-gray-600 dark:text-gray-400 group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    onClick={() => handleContact("UI/UX Design", plan.name)}
                                    className={`w-full py-5 rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-2 group/btn ${plan.popular
                                        ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-xl shadow-purple-500/30'
                                        : 'bg-slate-100 dark:bg-slate-700 text-gray-900 dark:text-white hover:bg-purple-600 hover:text-white'
                                        }`}
                                >
                                    GET STARTED
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-white dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Design Process</h2>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {process.map((item, idx) => (
                            <div key={idx} className="relative p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                                <span className="absolute -top-4 -right-4 text-6xl font-black text-gray-100 dark:text-slate-700 select-none z-0">
                                    {item.step}
                                </span>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UiUxDesign;
