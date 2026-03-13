import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, Package, Clock, CheckCircle, MessageCircle } from 'lucide-react';
import { waLink, TEL_LINK, PHONE_DISPLAY } from '../../config/contact';

const Returns: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <Helmet>
                <title>Returns Policy | JS TECH SOLUTION</title>
                <meta name="description" content="Learn about our returns policy for digital marketing services at JS TECH SOLUTION." />
            </Helmet>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to="/" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Home
                </Link>

                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                            <Package className="h-8 w-8 text-purple-600" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Returns Policy</h1>
                        <p className="text-gray-600">Last updated: December 2025</p>
                    </div>

                    <div className="prose max-w-none">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Digital Services Nature</h2>
                        <p className="text-gray-700 mb-6">
                            As we provide digital marketing and web development services, traditional product returns do not apply. However, we are committed to your satisfaction.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Satisfaction Guarantee</h2>
                        <div className="space-y-4 mb-6">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Revision Rights</h3>
                                    <p className="text-gray-700">Unlimited revisions within project scope until you're satisfied</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Quality Assurance</h3>
                                    <p className="text-gray-700">All deliverables are tested and reviewed before final delivery</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Support Period</h3>
                                    <p className="text-gray-700">Free support included for specified period after project completion</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Eligibility</h2>
                        <p className="text-gray-700 mb-4">
                            Refunds may be considered in the following cases:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                            <li>Service not delivered as per agreed timeline without valid reason</li>
                            <li>Deliverables do not match the agreed specifications</li>
                            <li>Technical issues that cannot be resolved</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                        <p className="text-gray-700 mb-4">
                            For any concerns regarding our services, please contact us:
                        </p>
                        <a
                            href={waLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
                        >
                            <MessageCircle className="h-5 w-5" />
                            Contact on WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Returns;
