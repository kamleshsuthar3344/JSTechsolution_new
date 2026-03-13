import { TEL_LINK, PHONE_DISPLAY } from '../config/contact';

import React from "react";
import { Helmet } from "react-helmet";

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Helmet>
        <title>Terms of Service | JSTECHSOLUTION - Digital Marketing & Web Development Company</title>
        <meta
          name="description"
          content="Read JSTECHSOLUTION's Terms of Service for digital marketing, branding, and web development services. Understand our policies, payments, and client agreements."
        />
        <meta
          name="keywords"
          content="terms of service, digital marketing terms, web development agreement, branding contract, SEO services terms, Jaipur digital marketing"
        />
        <link rel="canonical" href="https://JSTECHSOLUTION.in/terms" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Terms of Service</h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-2">
            Digital Marketing, Branding & Web Development Services
          </p>
          <p className="text-lg text-blue-200">Clear, Fair, and Professional Terms</p>
          <div className="mt-6 text-sm text-blue-300 bg-blue-900 bg-opacity-50 inline-block px-4 py-2 rounded-full">
            Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-ul:text-gray-700 prose-li:text-gray-700">
            
            {/* Important Notice */}
            <div className="mb-12 p-6 bg-blue-50 rounded-xl border border-blue-200 shadow-sm">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-lg text-gray-700 mb-0">
                    <strong>Important Notice:</strong> Please read these Terms of Service carefully before using our services. 
                    By engaging with JSTECHSOLUTION, you agree to be bound by these terms and conditions.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              {/* Section 1 */}
              <section className="border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-colors duration-300">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 shadow-sm">1</span>
                  Acceptance of Terms
                </h2>
                <p className="leading-relaxed">
                  By accessing or using the services provided by <strong>JSTECHSOLUTION</strong> ("we", "us", "our"), 
                  you ("Client", "you") acknowledge that you have read, understood, and agree to 
                  be bound by these Terms of Service. If you do not agree with any part of these terms, 
                  please refrain from using our services immediately.
                </p>
              </section>

              {/* Section 2 */}
              <section className="border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-colors duration-300">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 shadow-sm">2</span>
                  Scope of Services
                </h2>
                <p className="mb-4 text-gray-700">
                  We provide comprehensive digital services including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-3 mb-4">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Branding & Design (Logo design, brand identity, visual assets)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Digital Marketing (SEO, Social Media Marketing, Google/Meta Ads)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Web Development & E-commerce Solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Analytics & Performance Tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Digital Strategy Consulting</span>
                  </li>
                </ul>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="font-semibold text-gray-800 mb-2">Key Points:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Exact project scope is defined in the proposal, Statement of Work (SOW), or estimate</li>
                    <li>Deliverables include designs, creatives, ad assets, landing pages, websites, and reports</li>
                    <li>Exclusions: Third-party costs, premium plugins, paid stock media, and hosting fees unless explicitly included</li>
                    <li>Change requests outside initial scope require separate estimates and approval</li>
                  </ul>
                </div>
              </section>

              {/* Section 3 */}
              <section className="border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-colors duration-300">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 shadow-sm">3</span>
                  Timelines & Client Responsibilities
                </h2>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Project timelines are estimates and may vary based on dependencies</li>
                  <li>Client must provide required content, assets, and information in a timely manner</li>
                  <li>Approvals and feedback should be provided within 2-3 business days</li>
                  <li>Delays in client responses may impact project schedules</li>
                  <li>Client must provide necessary access to accounts and platforms as required</li>
                </ul>
              </section>

              {/* Section 4 */}
              <section className="border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-colors duration-300">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 shadow-sm">4</span>
                  Revisions Policy
                </h2>
                <p className="mb-3 text-gray-700">
                  Unless otherwise specified in the project agreement, each major deliverable includes 
                  <strong className="text-blue-600"> 2 rounds of revisions</strong> at no additional cost.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Feedback should be consolidated and provided in a single communication</li>
                  <li>Additional revisions or scope changes may incur extra charges</li>
                  <li>Major changes in direction or new features require separate estimates</li>
                </ul>
              </section>

              {/* Section 5 */}
              <section className="border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-colors duration-300">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 shadow-sm">5</span>
                  Fees, Payments & Refunds
                </h2>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Project-based work typically requires 50% advance payment with balance due before final delivery</li>
                  <li>Retainer services are pre-paid monthly and auto-renew unless cancelled with 7 days notice</li>
                  <li>Advertising spend is billed directly by platforms to client's payment method</li>
                  <li>Invoices are due within 7 days of issuance unless otherwise specified</li>
                  <li>Late payments may result in service suspension</li>
                  <li>Fees are generally non-refundable once work has commenced</li>
                </ul>
              </section>

              {/* Section 6 */}
              <section className="border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-colors duration-300">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 shadow-sm">6</span>
                  Content & Intellectual Property
                </h2>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Client warrants that all provided content does not infringe third-party rights</li>
                  <li>Upon full payment, ownership of final deliverables is transferred to the client</li>
                  <li>We retain rights to pre-existing IP, frameworks, libraries, and design systems</li>
                  <li>Third-party assets (fonts, plugins, stock media) are subject to their respective licenses</li>
                  <li>We may use completed work in our portfolio unless otherwise agreed</li>
                </ul>
              </section>

              {/* Section 7 */}
              <section className="border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-colors duration-300">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 shadow-sm">7</span>
                  Third-Party Platforms & Integrations
                </h2>
                <p className="mb-3 text-gray-700">
                  We integrate with various platforms including Google, Meta, Shopify, WordPress, 
                  and payment gateways. Please note:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We are not responsible for third-party platform policies, uptime, or fees</li>
                  <li>Client is responsible for compliance with platform policies and guidelines</li>
                  <li>Platform outages, policy changes, or account restrictions are beyond our control</li>
                </ul>
              </section>

              {/* Section 8 */}
              <section className="border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-colors duration-300">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 shadow-sm">8</span>
                  Performance & Disclaimers
                </h2>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Digital marketing results are probabilistic and cannot be guaranteed</li>
                  <li>We employ industry best practices and continuous optimization</li>
                  <li>Forecasts and estimates are informational and subject to market conditions</li>
                  <li>Final outcomes depend on multiple external factors beyond our control</li>
                </ul>
              </section>

              {/* Section 9 */}
              <section className="border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-colors duration-300">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 shadow-sm">9</span>
                  Confidentiality & Data Protection
                </h2>
                <ul className="list-disc pl-6 space-y-3">
                  <li>We treat all client information as confidential</li>
                  <li>Personal data handling complies with applicable privacy laws</li>
                  <li>Secure methods for credential sharing are recommended</li>
                  <li>We implement reasonable security measures to protect client data</li>
                </ul>
              </section>

              {/* Section 10 */}
              <section className="border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-colors duration-300">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 shadow-sm">10</span>
                  Portfolio & Credits
                </h2>
                <ul className="list-disc pl-6 space-y-3">
                  <li>We may showcase completed work in our portfolio and marketing materials</li>
                  <li>Client attribution may be used unless requested otherwise</li>
                  <li>Website credit in footer can be modified or removed upon client request</li>
                </ul>
              </section>

              {/* Section 11 */}
              <section className="border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-colors duration-300">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 shadow-sm">11</span>
                  Warranties & Limitation of Liability
                </h2>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Services are provided "as-is" without implied warranties</li>
                  <li>Our total liability is limited to fees paid in the preceding 3 months</li>
                  <li>We are not liable for indirect, incidental, or consequential damages</li>
                  <li>Client agrees to use services at their own risk</li>
                </ul>
              </section>

              {/* Section 12 */}
              <section className="border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-colors duration-300">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 shadow-sm">12</span>
                  Indemnification
                </h2>
                <p className="text-gray-700">
                  Client agrees to indemnify and hold harmless <strong>JSTECHSOLUTION</strong> from any claims, damages, 
                  or losses arising from client-provided content, policy violations, or illegal use 
                  of our services.
                </p>
              </section>

              {/* Section 13 */}
              <section className="border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-colors duration-300">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 shadow-sm">13</span>
                  Termination
                </h2>
                <ul className="list-disc pl-6 space-y-3">
                  <li>Projects may be terminated with written notice; completed work remains billable</li>
                  <li>Retainer services require 7-day notice for cancellation</li>
                  <li>We reserve the right to suspend services for non-payment or policy violations</li>
                  <li>Upon termination, client must settle all outstanding payments</li>
                </ul>
              </section>

              {/* Section 14 */}
              <section className="border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-colors duration-300">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 shadow-sm">14</span>
                  Force Majeure
                </h2>
                <p className="text-gray-700">
                  We are not liable for delays or failures in performance resulting from circumstances 
                  beyond our reasonable control, including natural disasters, internet outages, 
                  regulatory actions, or other force majeure events.
                </p>
              </section>

              {/* Section 15 */}
              <section className="border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-colors duration-300">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 shadow-sm">15</span>
                  Governing Law & Dispute Resolution
                </h2>
                <p className="text-gray-700">
                  These Terms are governed by the laws of India. Any disputes shall first be attempted 
                  to be resolved amicably. If resolution fails, the competent courts in 
                  <strong> Jaipur, Rajasthan</strong> shall have exclusive jurisdiction.
                </p>
              </section>

              {/* Section 16 */}
              <section className="border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-colors duration-300">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 shadow-sm">16</span>
                  Changes to Terms
                </h2>
                <p className="text-gray-700">
                  We reserve the right to modify these Terms at any time. Updated terms become 
                  effective upon posting on our website. Continued use of our services constitutes 
                  acceptance of the modified terms.
                </p>
              </section>

              {/* Contact Information */}
              <section className="border-t pt-8 mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Contact Information</h2>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                  <p className="text-lg text-gray-700 mb-4 text-center">
                    For any questions regarding these Terms of Service, please contact us:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 text-center md:text-left">
                    <div className="space-y-3">
                        <div className="flex items-center justify-center md:justify-start">
                        <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a href="mailto:contact@jstechsolution.in" className="text-blue-600 hover:text-blue-700 underline font-medium">
                          contact@jstechsolution.in
                        </a>
                      </div>
                      <div className="flex items-center justify-center md:justify-start">
                        <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <a href={TEL_LINK} className="text-blue-600 hover:text-blue-700 underline font-medium">
                          {PHONE_DISPLAY}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center justify-center md:justify-start">
                      <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-gray-700 font-medium">Jaipur, Rajasthan, India</span>
                    </div>
                  </div>
                </div>
                {/* Department Emails */}
                <div className="mt-6 bg-white p-4 rounded-lg border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-3">Department Emails</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    {[
                      { label: 'Support', email: 'support@jstechsolution.in' },
                      { label: 'Help', email: 'help@jstechsolution.in' },
                      { label: 'Information', email: 'info@jstechsolution.in' },
                      { label: 'Contact', email: 'contact@jstechsolution.in' },
                      { label: 'Careers', email: 'hr@jstechsolution.in' },
                      { label: 'Affiliate', email: 'affilate@jstechsolution.in' },
                      { label: 'B2B', email: 'B2B@jstechsolution.in' },
                      { label: 'White Label', email: 'partner@jstechsolution.in' },
                      { label: 'Reseller', email: 'partner@jstechsolution.in' }
                    ].map(d => (
                      <a key={d.email} href={`mailto:${d.email}`} className="flex justify-between p-2 rounded hover:bg-gray-50">
                        <span className="text-gray-700">{d.label}</span>
                        <span className="text-blue-600 underline">{d.email}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </section>

              {/* Final Disclaimer */}
              <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 mt-8">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-800">
                      <strong>Legal Disclaimer:</strong> This document is provided for informational purposes only 
                      and does not constitute legal advice. We recommend consulting with legal 
                      professionals for specific contractual agreements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;