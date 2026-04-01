import React, { useState } from "react";
import { Helmet } from "react-helmet";
import InfoModal from "../components/InfoModal";
import { waLink, TEL_LINK, PHONE_DISPLAY } from "../config/contact";
import { Search, CheckCircle, ArrowRight, Link as LinkIcon, BarChart3, Shield, FileText, MessageCircle, Target, TrendingUp, Award } from "lucide-react";
import { backlinkServices as pricingBacklinkServices } from "../data/pricing";

const Backlink = () => {
    const [url, setUrl] = useState("");
    const [keyword, setKeyword] = useState("");
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
    const [selectedFeature, setSelectedFeature] = useState<{ title: string; description: string; details: string[] }>({ title: "", description: "", details: [] });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const message = `🔍 *Free SEO Audit Request*

*Website URL:* ${url}
*Target Keyword:* ${keyword}
*Email:* ${email}

Please send me a detailed SEO audit report for my website.`;

        window.open(waLink(message), '_blank');
    };

    const handleWhatsApp = (message: string) => {
        window.open(waLink(message), '_blank');
    };

    const auditFeatures = [
        { icon: <BarChart3 className="h-6 w-6" />, title: "Complete Site Analysis", desc: "Get a detailed overview of your website's SEO health" },
        { icon: <Target className="h-6 w-6" />, title: "Keyword Optimization", desc: "Identify top keywords and keyphrases for your site" },
        { icon: <Shield className="h-6 w-6" />, title: "Technical SEO Check", desc: "Find issues affecting your Google rankings" },
        { icon: <FileText className="h-6 w-6" />, title: "Priority Recommendations", desc: "Get actionable items ranked by importance" },
    ];

    const featureDetails: { [key: string]: { description: string; details: string[] } } = {
        "Complete Site Analysis": {
            description: "Comprehensive website health check and performance analysis",
            details: [
                "Technical health assessment including crawl errors, broken links, and redirect chains",
                "Page speed analysis for both mobile and desktop with Core Web Vitals metrics",
                "Mobile responsiveness testing across different devices and screen sizes",
                "Site architecture review to ensure optimal crawlability and indexation",
                "Security audit including HTTPS implementation and mixed content issues",
                "Duplicate content detection and canonicalization recommendations"
            ]
        },
        "Keyword Optimization": {
            description: "In-depth keyword analysis and optimization opportunities",
            details: [
                "Keyword density analysis to ensure optimal keyword usage without over-optimization",
                "LSI (Latent Semantic Indexing) keyword identification for content enrichment",
                "Search intent matching to align content with user expectations",
                "Competitor keyword gap analysis to find untapped opportunities",
                "Long-tail keyword suggestions for easier ranking wins",
                "Keyword cannibalization detection and resolution strategies"
            ]
        },
        "Technical SEO Check": {
            description: "Detailed technical SEO audit and optimization recommendations",
            details: [
                "Meta tags audit including title tags, meta descriptions, and header tags",
                "Robots.txt validation to ensure proper crawl directives",
                "XML sitemap check and optimization for better indexation",
                "Structured data (Schema markup) implementation review",
                "Internal linking structure analysis and improvement suggestions",
                "Image optimization check including alt tags, file sizes, and lazy loading"
            ]
        },
        "Priority Recommendations": {
            description: "Actionable SEO tasks prioritized by impact and effort",
            details: [
                "Quick wins: High-impact, low-effort fixes you can implement immediately",
                "Critical issues: Problems that are severely impacting your rankings",
                "Long-term strategies: Sustainable SEO improvements for ongoing growth",
                "Implementation roadmap with step-by-step guidance",
                "Resource allocation recommendations based on your budget and timeline",
                "Expected impact analysis for each recommended action"
            ]
        }
    };

    const handleFeatureClick = (featureTitle: string) => {
        const info = featureDetails[featureTitle];
        if (info) {
            setSelectedFeature({
                title: featureTitle,
                description: info.description,
                details: info.details
            });
            setIsInfoModalOpen(true);
        }
    };

    const backlinkServices = pricingBacklinkServices.map((p, idx) => ({
        icon: idx === 0 ? <LinkIcon className="h-8 w-8" /> : (idx === 1 ? <TrendingUp className="h-8 w-8" /> : <Award className="h-8 w-8" />),
        title: p.name,
        desc: idx === 0 ? "DA 50+ & DR 50+ websites for powerful SEO boost" : (idx === 1 ? "Complete backlink building solution" : "Ultimate authority building package"),
        price: p.price,
        popular: p.popular,
        features: p.features
    }));

    return (
        <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
            <Helmet>
                <title>Free SEO Audit & High Authority Backlinks | JS TECH SOLUTION</title>
                <meta name="description" content="Get a free website SEO audit report and discover ranking opportunities. Build high authority backlinks (DA 50+) to boost your Google search results." />
                <meta name="keywords" content="free SEO audit tool, buy quality backlinks, high DA guest posts, SEO authority building India, JS TECH SOLUTION backlink services" />
                <link rel="canonical" href="https://JSTECHSOLUTION.in/backlinks" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://JSTECHSOLUTION.in/backlinks" />
                <meta property="og:title" content="JS TECH SOLUTION | SEO Audit & Backlinks" />
                <meta property="og:description" content="Rank higher on Google. Get your free report and start your authority journey." />
                <meta property="og:image" content="https://JSTECHSOLUTION.in/og-backlinks.jpg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Dominante SEO with JS TECH" />
                <meta name="twitter:description" content="Free audit tools and premium backlink packages for serious growth." />
            </Helmet>

            <InfoModal
                isOpen={isInfoModalOpen}
                onClose={() => setIsInfoModalOpen(false)}
                title={selectedFeature.title}
                description={selectedFeature.description}
                details={selectedFeature.details}
            />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white py-24 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1200&q=60&fm=webp')] bg-cover bg-center opacity-10"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center text-white mb-12">
                        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/20">
                            <Search className="h-5 w-5 mr-2 text-yellow-400" />
                            <span className="text-sm font-semibold">Free SEO Audit Tool</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            Need help with your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">SEO efforts</span>?
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                            Download your website's SEO REPORT using our free website SEO audit tool. Get your report in less than a minute!
                        </p>
                    </div>

                    {/* SEO Audit Form */}
                    <div className="max-w-2xl mx-auto">
                        <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                                Get Your Free SEO Report
                            </h2>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Website URL *
                                    </label>
                                    <input
                                        type="url"
                                        value={url}
                                        onChange={(e) => setUrl(e.target.value)}
                                        placeholder="https://yourwebsite.com"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Target Keyword *
                                    </label>
                                    <input
                                        type="text"
                                        value={keyword}
                                        onChange={(e) => setKeyword(e.target.value)}
                                        placeholder="e.g., digital marketing services"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="your@email.com"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    />
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">A PDF report will be sent to your email</p>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                                >
                                    <Search className="h-5 w-5" />
                                    Get Free SEO Report
                                    <ArrowRight className="h-5 w-5" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-16 bg-gray-50 dark:bg-slate-800 transition-colors">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {auditFeatures.map((feature, index) => (
                            <div
                                key={index}
                                onClick={() => handleFeatureClick(feature.title)}
                                className="bg-white dark:bg-slate-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                            >
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{feature.desc}</p>
                                <span className="text-blue-600 dark:text-blue-400 text-xs font-semibold inline-flex items-center gap-1">
                                    Click to learn more
                                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About SEO Audit */}
            <section className="py-16 bg-white dark:bg-slate-900 transition-colors">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
                        About <span className="text-blue-600">Free SEO Audit</span>
                    </h2>

                    <div className="space-y-8">
                        <div className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-6 sm:p-8">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">What is an SEO Audit?</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                An SEO audit is a detailed website analysis of page factors that optimize or hinder Google's ability to index properly for page ranking. If your site needs help to be accurately understood and indexed by Google, individual website pages will be low ranked when search results are displayed to potential customers. It is a 'best practice' for an SEO analysis to be carried out regularly to sustain page ranking and visibility.
                            </p>
                        </div>

                        <div className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-6 sm:p-8">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Why Audit a Website?</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Google uses more than 300 ranking factors in its search algorithm, and an estimated 500 algorithm changes are updated yearly. Updates can significantly impact a website that needs to be updated or follows poor practice. Our free SEO audit tool provides a detailed overview of your website and audit of important site factors that impact your website's Google rankings.
                            </p>
                        </div>

                        <div className="bg-gray-50 dark:bg-slate-800 rounded-2xl p-6 sm:p-8">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">How Does This Help Build Backlinks?</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                When it comes to SEO, both on-page and off-page SEO efforts are equally important. Backlink building is an off-page SEO technique that has become necessary in enhancing a website's rankings and overall growth. With proper on-page SEO (identified through our audit), ranking your site becomes easier. Use the recommendations from the SEO report to optimize your website, then build quality backlinks for improved rankings.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Backlink Packages */}
            <section className="py-16 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Boost Your SEO with <span className="text-yellow-400">Trusted Backlinks</span>
                        </h2>
                        <p className="text-lg text-white/80 max-w-2xl mx-auto">
                            Every backlink we build is placed on websites with DA 50+ and DR 50+ or higher. Genuine, reliable, and long-lasting SEO gains.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {backlinkServices.map((service, index) => (
                            <div
                                key={index}
                                className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border ${service.popular ? 'border-yellow-400 ring-2 ring-yellow-400/50' : 'border-white/20'} hover:bg-white/20 transition-all duration-300`}
                            >
                                {service.popular && (
                                    <div className="bg-yellow-500 text-gray-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                                        ⭐ MOST POPULAR
                                    </div>
                                )}
                                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white mb-4">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                <p className="text-white/70 text-sm mb-4">{service.desc}</p>
                                <div className="text-3xl font-bold text-yellow-400 mb-6">{service.price}</div>

                                <ul className="space-y-3 mb-6">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm">
                                            <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={() => handleWhatsApp(`I'm interested in ${service.title} package for ${service.price}`)}
                                    className="w-full bg-white text-gray-900 hover:bg-gray-100 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                                >
                                    <MessageCircle className="h-5 w-5" />
                                    Get Started
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-white dark:bg-slate-900 transition-colors">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        Ready to Improve Your <span className="text-blue-600">SEO Rankings</span>?
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                        Get your free SEO audit today and start building quality backlinks for better search engine visibility.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => handleWhatsApp("I want a free SEO audit for my website")}
                            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                        >
                            <MessageCircle className="h-5 w-5" />
                            Get Free Audit on WhatsApp
                        </button>
                        <a
                            href={TEL_LINK}
                            className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            📞 Call {PHONE_DISPLAY}
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Backlink;
