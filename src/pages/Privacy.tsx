import React, { useState } from "react";
import { TEL_LINK, PHONE_DISPLAY } from '../config/contact';

const Privacy: React.FC = () => {
  const lastUpdated = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  const [activeTab, setActiveTab] = useState("privacy");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Privacy Policy & Policies</h1>
          <p className="text-blue-100 text-lg md:text-xl">
            How JSTECHSOLUTION collects, uses, protects your information and our business policies.
          </p>
          <p className="text-sm text-blue-200 mt-2">Last updated: {lastUpdated}</p>
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mt-8 gap-4">
            <button
              onClick={() => setActiveTab("privacy")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "privacy" 
                ? "bg-white text-blue-600 shadow-lg" 
                : "bg-blue-700 text-white hover:bg-blue-600"
              }`}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveTab("refund")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "refund" 
                ? "bg-white text-blue-600 shadow-lg" 
                : "bg-blue-700 text-white hover:bg-blue-600"
              }`}
            >
              Refund Policy
            </button>
            <button
              onClick={() => setActiveTab("cancellation")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "cancellation" 
                ? "bg-white text-blue-600 shadow-lg" 
                : "bg-blue-700 text-white hover:bg-blue-600"
              }`}
            >
              Cancellation Policy
            </button>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      {activeTab === "privacy" && (
        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 space-y-10">
            {/* Intro */}
            <div>
              <p className="text-lg leading-relaxed">
                This Privacy Policy explains how <strong>JSTECHSOLUTION</strong> ("we", "us", "our") collects,
                uses, discloses, and safeguards personal information when you visit our website, engage
                with our digital marketing campaigns, or use our services. By using our website/services,
                you agree to this Policy. If you do not agree, please discontinue use.
              </p>
              <div className="mt-4 bg-blue-50 border border-blue-200 rounded-xl p-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="ml-3">
                    <p className="text-blue-900 font-medium">Regulatory Note:</p>
                    <p className="text-sm text-blue-800 mt-1">
                      We strive to comply with applicable laws, including India's Digital Personal Data 
                      Protection (DPDP) Act and, where relevant, GDPR. References below to "lawful basis" 
                      and "data principal rights" reflect these standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What we collect */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">1</span>
                Information We Collect
              </h2>
              <ul className="list-disc pl-6 space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Identity & Contact:</strong> name, email, phone, company, role.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Business & Content:</strong> project brief, brand assets you share.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Technical:</strong> IP address, device/browser info, pages viewed, referrer URLs, session data.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Usage & Analytics:</strong> interactions with pages, forms, CTAs; events/pixels (GA4, Meta, etc.).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Marketing:</strong> preferences, consent, campaign engagement (opens, clicks, conversions).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Payment/Commercial:</strong> invoices, transaction metadata (processed via third-party gateways; we do not store card data).</span>
                </li>
              </ul>
              <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-600">
                  Sensitive personal data is not intentionally collected. Please avoid sharing it.
                </p>
              </div>
            </div>

            {/* Sources */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">2</span>
                Sources of Data
              </h2>
              <ul className="list-disc pl-6 space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Direct:</strong> forms, emails, WhatsApp, calls, meetings.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Automated:</strong> cookies, tags, analytics, pixels.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Third-Party:</strong> ad platforms, CRM or lead gen tools you connect/provide.</span>
                </li>
              </ul>
            </div>

            {/* Cookies */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">3</span>
                Cookies & Similar Technologies
              </h2>
              <p className="mb-4 text-gray-700">
                We use cookies, pixels, and tags to enable site functionality, remember preferences,
                analyze performance, and measure/optimize campaigns.
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Essential:</strong> required for core functionality.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Analytics:</strong> GA4/GTM events, traffic sources, on-site behavior.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Marketing:</strong> remarketing/conversion pixels (e.g., Google Ads, Meta).</span>
                </li>
              </ul>
              <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-600">
                  You can manage cookies via your browser settings. Some features may not work without certain cookies.
                </p>
              </div>
            </div>

            {/* How we use */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">4</span>
                How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Provide, operate, and improve our website and services.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Respond to inquiries, proposals, and support requests.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Plan, execute, and optimize campaigns; measure performance/ROI.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Personalize experiences and recommend relevant services.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Security, fraud prevention, troubleshooting, and diagnostics.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Legal compliance and enforcement of our Terms/Agreement.</span>
                </li>
              </ul>
            </div>

            {/* Lawful basis */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">5</span>
                Legal Bases / Consent
              </h2>
              <ul className="list-disc pl-6 space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Consent:</strong> marketing communications, non-essential cookies.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Contract:</strong> to deliver services requested/paid for.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Legitimate Interest:</strong> analytics, security, product improvement.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Legal Obligation:</strong> taxation, accounting, compliance.</span>
                </li>
              </ul>
              <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-600">
                  You may withdraw consent at any time (see "Your Rights" below).
                </p>
              </div>
            </div>

            {/* Sharing */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">6</span>
                How We Share Information
              </h2>
              <p className="mb-4 text-gray-700">
                We do not sell personal data. We may share limited information with:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Processors/Vendors:</strong> hosting, CDN, analytics (GA4/GTM), ad platforms (Google, Meta), CRM/email tools, payment gateways, project tools.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Partners/Sub-contractors:</strong> only as needed for agreed work, under confidentiality and DP terms.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Legal/Compliance:</strong> when required by law or to protect rights/safety.</span>
                </li>
              </ul>
            </div>

            {/* International transfer */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">7</span>
                International Transfers
              </h2>
              <p className="text-gray-700">
                Vendors may process data in other countries. We take reasonable steps to ensure appropriate
                safeguards (e.g., contractual protections) consistent with applicable law.
              </p>
            </div>

            {/* Retention */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">8</span>
                Data Retention
              </h2>
              <p className="text-gray-700">
                We retain data only for as long as necessary for the purposes above or as required by law.
                Typical retention: marketing contacts up to 24 months of last interaction; project records
                aligned with statutory/accounting obligations.
              </p>
            </div>

            {/* Security */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">9</span>
                Security
              </h2>
              <p className="text-gray-700">
                We use reasonable technical and organizational measures to protect data (access controls,
                encryption in transit, least-privilege practices). No system is 100% secure; please share
                credentials via secure methods (password managers).
              </p>
            </div>

            {/* Children */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">10</span>
                Children's Privacy
              </h2>
              <p className="text-gray-700">
                Our services are intended for business users. We do not knowingly collect data from
                children under applicable age thresholds.
              </p>
            </div>

            {/* Your rights */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">11</span>
                Your Rights
              </h2>
              <p className="mb-4 text-gray-700">
                Subject to law, you may have the right to: access, correct, update, delete, restrict or
                object to processing, withdraw consent, and request data portability.
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Access/Correction:</strong> get a copy of your data or ask us to fix inaccuracies.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Deletion ("Right to be Forgotten"):</strong> request erasure where legally permitted.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Consent Management:</strong> opt-out of marketing or withdraw cookie consent.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Objection/Restriction:</strong> where we rely on legitimate interests.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span><strong>Portability:</strong> receive data in a commonly used format where feasible.</span>
                </li>
              </ul>
              <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-600">
                  We may verify your identity before actioning requests and may retain limited data as required by law.
                </p>
              </div>
            </div>

            {/* How to exercise */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">12</span>
                How to Contact / Exercise Rights
              </h2>
                <p className="text-gray-700">
                Email <a className="text-blue-700 underline font-medium" href="mailto:contact@jstechsolution.in">contact@jstechsolution.in</a> or call {" "}
                <a className="text-blue-700 underline font-medium" href={TEL_LINK}>{PHONE_DISPLAY}</a>. We aim to respond within 7 business days.
              </p>
              <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-600">
                  Address: JSTECHSOLUTION, Jaipur, Rajasthan, India
                </p>
              </div>
            </div>

            {/* Marketing choices */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">13</span>
                Marketing Preferences
              </h2>
              <p className="text-gray-700">
                You can unsubscribe from emails using the footer link or by contacting us. For ads
                preferences, adjust settings in Google/Meta or your device's ad settings.
              </p>
            </div>

            {/* Third-party links */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">14</span>
                Third-Party Websites
              </h2>
              <p className="text-gray-700">
                Our site may link to external sites we do not control. Their privacy practices apply to
                their content and services.
              </p>
            </div>

            {/* Changes */}
            <div className="border-l-4 border-blue-500 pl-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">15</span>
                Changes to This Policy
              </h2>
              <p className="text-gray-700">
                We may update this Policy from time to time. Material changes will be posted here with an
                updated "Last updated" date. Continued use signifies acceptance.
              </p>
            </div>

            {/* Summary card */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Quick Summary</h3>
              <ul className="list-disc pl-6 space-y-3 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>We collect contact, usage/analytics, and project data to deliver & improve services.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>We use cookies/pixels (GA4, Google/Meta) with consent and provide opt-outs.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>We don't sell personal data; we share with vetted processors/vendors as needed.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>You have rights to access, correct, delete, object/restrict, and withdraw consent.</span>
                </li>
              </ul>
            </div>

            {/* Disclaimer */}
            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <div className="ml-3">
                  <p className="text-xs text-yellow-800">
                    <strong>Disclaimer:</strong> This template is for general guidance and not legal advice. 
                    Please review with legal counsel if needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Refund Policy Tab */}
      {activeTab === "refund" && (
        <section className="py-14 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Refund Policy</h2>
            
            <div className="space-y-8">
              {/* General Refund Policy */}
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">General Refund Policy</h3>
                <p className="text-gray-700 mb-4">
                  At JSTECHSOLUTION, we strive to deliver exceptional digital marketing services. 
                  Due to the nature of digital services and the resources invested immediately upon 
                  project commencement, we have the following refund policy:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                  <li>Full refunds are available only if requested within 24 hours of payment and before any work has commenced</li>
                  <li>Once work has started, refunds are provided on a pro-rata basis for work not yet completed</li>
                  <li>No refunds are provided for completed work or delivered deliverables</li>
                  <li>Setup fees and third-party costs are non-refundable</li>
                </ul>
              </div>

              {/* Service-Specific Policies */}
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Service-Specific Refund Policies</h3>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Digital Marketing Services</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
                      <li>Monthly retainers: Refund for unused portion of the month if cancelled before the 15th</li>
                      <li>Campaign management: No refunds for ad spend or platform fees</li>
                      <li>Performance-based services: Refunds considered only if service level agreements are not met</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Web Development</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
                      <li>50% refund if project cancelled during design phase</li>
                      <li>25% refund if project cancelled during development phase</li>
                      <li>No refund after project completion and delivery</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Branding & Design</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
                      <li>Refund available only if no concepts have been presented</li>
                      <li>Once concepts are presented and reviewed, only partial refunds considered</li>
                      <li>No refunds after final design approval</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Refund Process */}
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Refund Process</h3>
                <div className="space-y-4 text-gray-700">
                  <p>To request a refund, please contact us with:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Your project details and invoice number</li>
                    <li>Reason for refund request</li>
                    <li>Any supporting documentation</li>
                  </ul>
                  <p>Refund requests are processed within 7-10 business days. Approved refunds will be credited to the original payment method.</p>
                </div>
              </div>

              {/* Contact for Refunds */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-3">Refund Inquiries</h3>
                <p className="text-blue-100 mb-4">
                  Have questions about our refund policy? Contact us directly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a 
                    href="mailto:contact@jstechsolution.in"
                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Us
                  </a>
                  <a 
                    href={TEL_LINK}
                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Cancellation Policy Tab */}
      {activeTab === "cancellation" && (
        <section className="py-14 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Cancellation Policy</h2>
            
            <div className="space-y-8">
              {/* General Cancellation */}
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">General Cancellation Policy</h3>
                <p className="text-gray-700 mb-4">
                  We understand that circumstances may change. Our cancellation policy is designed to be 
                  fair to both parties while ensuring we can maintain the quality of our services.
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-700">
                  <li>Project-based services can be cancelled with written notice</li>
                  <li>Completed work up to the cancellation date remains billable</li>
                  <li>Retainer services require 7-day written notice for cancellation</li>
                  <li>Setup fees and third-party costs are non-refundable upon cancellation</li>
                </ul>
              </div>

              {/* Service Cancellation Details */}
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Cancellation Details</h3>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Monthly Retainer Services</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
                      <li>7-day written notice required for cancellation</li>
                      <li>Services continue until the end of the current billing cycle</li>
                      <li>No prorated refunds for partial months</li>
                      <li>All deliverables and work completed up to cancellation date remain our property</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Project-Based Work</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
                      <li>Cancellation accepted with written notice</li>
                      <li>Client responsible for payment of all work completed up to cancellation date</li>
                      <li>Any upfront payments for work not yet started may be refunded</li>
                      <li>All project materials and work completed remain our property until full payment</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Emergency Cancellation</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm">
                      <li>We reserve the right to cancel services for non-payment</li>
                      <li>Services may be suspended for policy violations</li>
                      <li>Repeated missed payments may result in service termination</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Cancellation Process */}
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cancellation Process</h3>
                <div className="space-y-4 text-gray-700">
                  <p>To cancel services, please:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Send written notice to info@jstechsolution.in</li>
                    <li>Include your account/project details</li>
                    <li>Specify the effective cancellation date</li>
                    <li>Clear any outstanding payments</li>
                  </ul>
                  <p>We will acknowledge your cancellation request within 2 business days and provide a final invoice if applicable.</p>
                </div>
              </div>

              {/* Contact Section */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-3">Need to Cancel Services?</h3>
                <p className="text-blue-100 mb-4">
                  Contact us directly to discuss cancellation options.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a 
                    href="mailto:contact@jstechsolution.in?subject=Service Cancellation Request"
                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Cancellation
                  </a>
                  <a 
                    href={TEL_LINK}
                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call to Discuss
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Privacy;