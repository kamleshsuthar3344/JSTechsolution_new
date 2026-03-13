import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, HelpCircle, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

import { waLink, PHONE_DISPLAY } from '../config/contact';

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            category: "General",
            questions: [
                {
                    q: "What services does JS TECH SOLUTION provide?",
                    a: "We offer complete digital marketing solutions including Website Development, SEO Services, Social Media Marketing, Google & Meta Ads, Shopify/WordPress Development, UI/UX Design, Backlink Services, Email Marketing, WhatsApp Marketing, and more."
                },
                {
                    q: "Where are you located?",
                    a: "We are based in Jaipur, Rajasthan, India. However, we serve clients across India and internationally through online collaboration."
                },
                {
                    q: "How can I contact you?",
                    a: `You can reach us via WhatsApp at ${PHONE_DISPLAY}, email at contact@jstechsolution.in, or through our contact form on the website.`
                }
            ]
        },
        {
            category: "Pricing & Payment",
            questions: [
                {
                    q: "What are your website development prices?",
                    a: "Our website development starts from just ₹4,999 for basic websites. Prices vary based on features, complexity, and requirements. Check our Pricing page for detailed packages."
                },
                {
                    q: "Do you offer payment plans?",
                    a: "Yes! We offer flexible payment options including milestone-based payments for larger projects. Contact us to discuss your requirements."
                },
                {
                    q: "What payment methods do you accept?",
                    a: "We accept UPI, bank transfers, credit/debit cards, and online payment gateways (Razorpay). International payments via PayPal are also accepted."
                }
            ]
        },
        {
            category: "Services & Delivery",
            questions: [
                {
                    q: "How long does it take to build a website?",
                    a: "Basic websites: 3-5 days, E-commerce websites: 7-10 days, Custom websites: 10-15 days. Timeline depends on complexity and your feedback response time."
                },
                {
                    q: "Do you provide website maintenance?",
                    a: "Yes! We offer monthly maintenance packages starting from ₹999/month including updates, backups, security monitoring, and technical support."
                },
                {
                    q: "Will my website be mobile-friendly?",
                    a: "Absolutely! All our websites are fully responsive and optimized for mobile, tablet, and desktop devices."
                },
                {
                    q: "Do you provide SEO services?",
                    a: "Yes, we offer comprehensive SEO services including on-page SEO, off-page SEO, technical SEO, local SEO, and monthly SEO packages starting from ₹2,999/month."
                }
            ]
        },
        {
            category: "Referral Program",
            questions: [
                {
                    q: "What is your Referral Program?",
                    a: "Refer clients to us and earn ₹500-₹5,000 per successful referral. It's free to join and you get paid for every sale made through your referral link."
                }
            ]
        },
        {
            category: "Refunds & Cancellations",
            questions: [
                {
                    q: "What is your refund policy?",
                    a: "Refunds are available if service is not delivered as agreed or doesn't match specifications. Full refund if work hasn't started, partial refund for work in progress. See our Refund Policy page for details."
                },
                {
                    q: "Can I cancel my project?",
                    a: "Yes, you can cancel anytime. Refund amount depends on project completion stage: Full refund (before work starts), 50% refund (25-50% complete), no refund (50%+ complete). See Cancellation Policy for details."
                },
                {
                    q: "How long does refund processing take?",
                    a: "Approved refunds are processed within 5-7 business days to your original payment method."
                }
            ]
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <Helmet>
                <title>Frequently Asked Questions (FAQ) | JS TECH SOLUTION</title>
                <meta name="description" content="Find answers to common questions about our digital marketing and web development services." />
            </Helmet>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to="/" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Home
                </Link>

                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                        <HelpCircle className="h-8 w-8 text-purple-600" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
                    <p className="text-xl text-gray-600">Find answers to common questions about our services</p>
                </div>

                {faqs.map((category, catIndex) => (
                    <div key={catIndex} className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">{category.category}</h2>
                        <div className="space-y-4">
                            {category.questions.map((faq, qIndex) => {
                                const globalIndex = catIndex * 100 + qIndex;
                                const isOpen = openIndex === globalIndex;

                                return (
                                    <div key={qIndex} className="bg-white rounded-xl shadow-md overflow-hidden">
                                        <button
                                            onClick={() => toggleFAQ(globalIndex)}
                                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                                        >
                                            <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                                            {isOpen ? (
                                                <ChevronUp className="h-5 w-5 text-purple-600 flex-shrink-0" />
                                            ) : (
                                                <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                                            )}
                                        </button>
                                        {isOpen && (
                                            <div className="px-6 pb-4">
                                                <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}

                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white mt-12">
                    <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
                    <p className="text-purple-100 mb-6">Our team is here to help! Contact us anytime.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={waLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
                        >
                            <MessageCircle className="h-5 w-5" />
                            WhatsApp Us
                        </a>
                        <a
                            href="mailto:contact@jstechsolution.in"
                            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-purple-600 px-6 py-3 rounded-lg font-semibold transition-all"
                        >
                            Email Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
