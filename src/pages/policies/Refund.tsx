import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, DollarSign, CheckCircle, XCircle, Clock, MessageCircle } from 'lucide-react';
import { waLink, TEL_LINK, PHONE_DISPLAY } from '../../config/contact';

const Refund: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <Helmet>
                <title>Refund Policy | JS TECH SOLUTION</title>
                <meta name="description" content="Our refund policy for digital marketing and web development services." />
            </Helmet>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to="/" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Home
                </Link>

                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                            <DollarSign className="h-8 w-8 text-green-600" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Refund Policy</h1>
                        <p className="text-gray-600">Last updated: December 2025</p>
                    </div>

                    <div className="prose max-w-none">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Eligibility</h2>
                        <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Eligible for Refund:</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>Service not started within 7 days of payment (full refund)</li>
                                        <li>Project cancelled before work begins (90% refund)</li>
                                        <li>Deliverables not matching agreed specifications (partial/full refund)</li>
                                        <li>Technical issues preventing service delivery (full refund)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                            <div className="flex items-start gap-3">
                                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Not Eligible for Refund:</h3>
                                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                                        <li>Work already completed and delivered</li>
                                        <li>Change of mind after project initiation</li>
                                        <li>Completed SEO/marketing campaigns</li>
                                        <li>Domain/hosting purchases made on your behalf</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Process</h2>
                        <div className="space-y-4 mb-6">
                            <div className="flex items-start gap-3">
                                <div className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Submit Request</h3>
                                    <p className="text-gray-700">Contact us via WhatsApp or email with refund request</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Review Process</h3>
                                    <p className="text-gray-700">We review your request within 24-48 hours</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Refund Processing</h3>
                                    <p className="text-gray-700">Approved refunds processed within 5-7 business days</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                            <div className="flex items-start gap-3">
                                <Clock className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Processing Time:</h3>
                                    <p className="text-gray-700">Refunds are processed to the original payment method within 5-7 business days after approval.</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact for Refund</h2>
                        <p className="text-gray-700 mb-4">
                            To request a refund, please contact our support team:
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href={waLink()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
                            >
                                <MessageCircle className="h-5 w-5" />
                                WhatsApp Support
                            </a>
                            <a
                                href="mailto:contact@jstechsolution.in"
                                className="inline-flex items-center justify-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
                            >
                                Email Support
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Refund;
