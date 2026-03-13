import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, XCircle, CheckCircle, AlertCircle, MessageCircle } from 'lucide-react';
import { waLink, TEL_LINK, PHONE_DISPLAY } from '../../config/contact';

const Cancellation: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <Helmet>
                <title>Cancellation Policy | JS TECH SOLUTION</title>
                <meta name="description" content="Learn about our project cancellation policy and procedures." />
            </Helmet>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to="/" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Home
                </Link>

                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                            <XCircle className="h-8 w-8 text-red-600" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cancellation Policy</h1>
                        <p className="text-gray-600">Last updated: December 2025</p>
                    </div>

                    <div className="prose max-w-none">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Cancellation Terms</h2>

                        <div className="space-y-4 mb-6">
                            <div className="bg-green-50 border-l-4 border-green-500 p-4">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Before Work Starts (0-24 hours)</h3>
                                        <p className="text-gray-700">Full refund minus payment gateway charges (2-3%)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                                <div className="flex items-start gap-3">
                                    <AlertCircle className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Work in Progress (25-50% complete)</h3>
                                        <p className="text-gray-700">50% refund after deducting work completed</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
                                <div className="flex items-start gap-3">
                                    <AlertCircle className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">More Than 50% Complete</h3>
                                        <p className="text-gray-700">No refund, but you receive all completed work</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-red-50 border-l-4 border-red-500 p-4">
                                <div className="flex items-start gap-3">
                                    <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Project Completed</h3>
                                        <p className="text-gray-700">No cancellation or refund available</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Cancel</h2>
                        <ol className="list-decimal list-inside text-gray-700 space-y-3 mb-6">
                            <li>Contact us immediately via WhatsApp or email</li>
                            <li>Provide your order/project ID and reason for cancellation</li>
                            <li>We'll review and respond within 24 hours</li>
                            <li>Refund (if applicable) will be processed within 5-7 business days</li>
                        </ol>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Important Notes</h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                            <li>Third-party costs (domains, hosting, ads) are non-refundable</li>
                            <li>Completed deliverables remain our intellectual property until full payment</li>
                            <li>Monthly subscription services require 30 days notice for cancellation</li>
                            <li>Cancellation doesn't affect your right to use delivered work (if paid for)</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                        <p className="text-gray-700 mb-4">
                            To cancel your project or for any questions:
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

export default Cancellation;
