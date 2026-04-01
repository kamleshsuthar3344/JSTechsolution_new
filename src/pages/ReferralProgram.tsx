import React from "react";
import { Helmet } from "react-helmet";
import {
    Gift,
    DollarSign,
    Users,
    Share2,
    CheckCircle,
    MessageCircle,
    Phone,
    Wallet,
    UserPlus,
    Trophy,
    Award
} from "lucide-react";
import { motion } from "framer-motion";

import { waLink, WHATSAPP_NUMBER } from '../config/contact';

const ReferralProgram: React.FC = () => {
    const steps = [
        {
            icon: <MessageCircle className="h-8 w-8" />,
            title: "Contact Us",
            description: "Contact our team to get your unique referral details"
        },
        {
            icon: <Share2 className="h-8 w-8" />,
            title: "Invite Friends",
            description: "Share the details with your friends and business network"
        },
        {
            icon: <Users className="h-8 w-8" />,
            title: "Successful Purchase",
            description: "When your referral purchases any of our services"
        },
        {
            icon: <Wallet className="h-8 w-8" />,
            title: "Earn 25%",
            description: "Receive 25% commission on the project value"
        }
    ];

    const benefits = [
        "25% commission on every successful referral",
        "No limit on earnings - refer as many as you want",
        "Direct payouts via UPI/Bank Transfer/Cash",
        "High converting marketing materials provided",
        "Priority support for our network partners",
        "Bonus rewards for high-volume referrers",
        "No complex portals - direct communication",
        "Reliable and transparent business partnership"
    ];

    const handleJoin = () => {
        const message = `🎁 Referral Program Join Request - JS TECH SOLUTION\n\nI want to join the referral program and earn 25% commission per referral!\n\nPlease share the details and my referral link.`;
        window.open(waLink(message), '_blank');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
            <Helmet>
                <title>Refer & Earn 25% | Affiliate Program | JS TECH SOLUTION</title>
                <meta name="description" content="Earn massive commissions! Join the JS TECH SOLUTION Referral Program and earn 25% on every successful referral for web development and marketing services." />
                <meta name="keywords" content="digital marketing referral program, earn commission India, affiliate marketing Jaipur, refer and earn 25%, JS TECH SOLUTION affiliate" />
                <link rel="canonical" href="https://JSTECHSOLUTION.in/referral-program" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://JSTECHSOLUTION.in/referral-program" />
                <meta property="og:title" content="Refer JS TECH SOLUTION - Build Wealth" />
                <meta property="og:description" content="Turn your network into net worth. High commissions, instant payouts." />
                <meta property="og:image" content="https://JSTECHSOLUTION.in/og-referral.jpg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Earn with JS TECH SOLUTION" />
                <meta name="twitter:description" content="Join our referral network and earn 25% on every successful sale." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 text-white py-24 overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>

                <div className="relative max-w-7xl mx-auto px-4 text-center">
                    <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/30">
                        <Gift className="h-5 w-5 text-yellow-300 mr-2" />
                        <span className="text-sm font-semibold">Join Free & Start Earning Today!</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Earn
                        <span className="block text-yellow-300 text-6xl sm:text-7xl md:text-8xl">
                            25%
                        </span>
                        <span className="text-3xl sm:text-4xl md:text-5xl">Per Referral</span>
                    </h1>

                    <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                        Join our referral program and earn 25% commission every time someone you refer makes a purchase. No limits on earnings!
                    </p>                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={handleJoin}
                            className="bg-white text-orange-600 px-10 py-5 rounded-2xl font-bold text-xl transition-all hover:scale-105 shadow-2xl flex items-center justify-center gap-3"
                        >
                            <MessageCircle className="h-6 w-6" />
                            Message on WhatsApp
                        </button>
                        <a
                            href={`tel:+91${WHATSAPP_NUMBER}`}
                            className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all hover:bg-white hover:text-orange-600 flex items-center justify-center gap-3"
                        >
                            <Phone className="h-6 w-6" />
                            Call Us Directly
                        </a>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 bg-white dark:bg-slate-800">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="p-6">
                            <div className="text-4xl font-bold text-orange-600 mb-2">25%</div>
                            <div className="text-gray-600 dark:text-gray-300">Commission Rate</div>
                        </div>
                        <div className="p-6">
                            <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
                            <div className="text-gray-600 dark:text-gray-300">Active Partners</div>
                        </div>
                        <div className="p-6">
                            <div className="text-4xl font-bold text-blue-600 mb-2">₹20L+</div>
                            <div className="text-gray-600 dark:text-gray-300">Total Paid Out</div>
                        </div>
                        <div className="p-6">
                            <div className="text-4xl font-bold text-purple-600 mb-2">∞</div>
                            <div className="text-gray-600 dark:text-gray-300">Earning Potential</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reward Tiers Section */}
            <section className="py-20 bg-gray-50 dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Partner <span className="text-orange-600">Rewards Tiers</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            The more you refer, the more you earn!
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                tier: "Silver",
                                range: "0 - 10 Sales",
                                commission: "10%",
                                theme: "from-slate-400 to-slate-500",
                                perks: ["Std Link", "Monthly Payout", "Dashboard"]
                            },
                            {
                                tier: "Gold",
                                range: "11 - 50 Sales",
                                commission: "15%",
                                theme: "from-yellow-400 to-amber-600",
                                featured: true,
                                perks: ["Custom Link", "Bi-weekly Payout", "Priority Support"]
                            },
                            {
                                tier: "Platinum",
                                range: "50+ Sales",
                                commission: "25%",
                                theme: "from-blue-500 to-purple-600",
                                perks: ["White Label", "Weekly Payout", "Personal Manager"]
                            }
                        ].map((tier, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className={`relative rounded-3xl p-8 bg-white dark:bg-slate-800 shadow-xl border-2 ${tier.featured ? 'border-orange-500 scale-105 z-10' : 'border-transparent opacity-80'}`}
                            >
                                {tier.featured && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                                        MOST POPULAR
                                    </div>
                                )}
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tier.theme} flex items-center justify-center mb-6 shadow-lg`}>
                                    <Trophy className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-3xl font-black mb-2 dark:text-white">{tier.tier}</h3>
                                <p className="text-gray-500 font-medium mb-6">{tier.range}</p>
                                <div className="text-5xl font-black text-orange-600 mb-8">{tier.commission}</div>
                                <ul className="space-y-4 mb-8">
                                    {tier.perks.map((perk, pidx) => (
                                        <li key={pidx} className="flex items-center gap-3 text-gray-600 dark:text-gray-300 font-medium">
                                            <CheckCircle className="h-5 w-5 text-green-500" />
                                            {perk}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            How It Works
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            Start earning in 4 simple steps
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="relative text-center">
                                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                                    {step.icon}
                                </div>
                                <div className="absolute top-10 left-1/2 w-full h-0.5 bg-orange-200 dark:bg-orange-800 -z-10 hidden md:block" style={{ display: index === 3 ? 'none' : undefined }}></div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 bg-white dark:bg-slate-800">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                                Why Join Our Referral Program?
                            </h2>
                            <ul className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                                        <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                                        </div>
                                        <span className="text-lg">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-orange-100 to-yellow-100 dark:from-orange-900/30 dark:to-yellow-900/30 rounded-3xl p-8 text-center">
                            <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                                <DollarSign className="h-12 w-12" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                Calculate Your Earnings
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                If your referral spends ₹10,000, you earn:
                            </p>
                            <div className="text-5xl font-bold text-orange-600 mb-4">₹2,500</div>
                            <p className="text-gray-500 dark:text-gray-400">That's 25% commission!</p>

                            <button
                                onClick={handleJoin}
                                className="mt-8 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-2 mx-auto"
                            >
                                <Gift className="h-5 w-5" />
                                Start Earning Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Start Earning?
                    </h2>
                    <p className="text-xl mb-8 text-white/90">
                        Join thousands of partners already earning with JS TECH SOLUTION
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={handleJoin}
                            className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-2"
                        >
                            <MessageCircle className="h-5 w-5" />
                            Join via WhatsApp
                        </button>
                        <a
                            href={`tel:+91${WHATSAPP_NUMBER}`}
                            className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                        >
                            <Phone className="h-5 w-5" />
                            Call: +91-{WHATSAPP_NUMBER}
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ReferralProgram;
