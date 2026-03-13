import React from "react";
import { TEL_LINK, PHONE_DISPLAY } from '../config/contact';

const OnboardingAgreement: React.FC = () => {
  const lastUpdated = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 animate-fade-in">
            Onboarding Agreement
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto">
            A clear process to kickstart your Digital Marketing, Branding & Web Development engagement.
          </p>
          <div className="mt-4 text-sm text-blue-200 bg-blue-900 bg-opacity-50 inline-block px-4 py-2 rounded-full">
            Last updated: {lastUpdated}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 space-y-6">
          <p className="text-lg leading-relaxed">
            This Onboarding Agreement ("Agreement") outlines how <strong>JSTECHSOLUTION</strong> ("we", "us", "our") will
            initiate and deliver services to the Client ("you", "your"). It defines scope, access,
            approvals, timelines, deliverables, and responsibilities so your project can launch smoothly
            and achieve measurable outcomes.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="ml-3">
                <p className="text-blue-900 font-medium">
                  Important Note:
                </p>
                <p className="text-sm text-blue-800 mt-1">
                  This Agreement is an operational guide for onboarding. It is used together with any 
                  Proposal/Quotation/SOW and our Terms of Service. If there's a conflict, the Proposal/SOW 
                  prevails for scope & pricing; Terms of Service prevail for legal terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-6 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-700 space-y-12">
          
          {/* Section 1 */}
          <div className="border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 shadow-sm">1</span>
              Scope of Services
            </h2>
            <p className="mb-4 text-gray-700">
              Your Proposal/SOW specifies exactly what's included. Typical service categories:
            </p>
            <ul className="list-disc pl-6 space-y-3 mb-4">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Branding & Design:</strong> Logo, brand identity, social templates, ads creatives.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Digital Marketing:</strong> SEO, Google & Meta Ads, Social Media Management, email flows.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Web Development:</strong> Website/Landing pages, e-commerce, performance & analytics setup.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Analytics & Reporting:</strong> KPI framework, dashboards, campaign reports.</span>
              </li>
            </ul>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-600 font-medium">
                Exclusions: hosting fees, premium plugins/apps, paid stock assets, 3rd-party SaaS costs,
                editorial/legal reviews—unless explicitly included.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 shadow-sm">2</span>
              Access & Assets (Client To Provide)
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Brand assets: logo (vector), color palette, fonts, brand guidelines.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Copy & content: product/service descriptions, policies, legal text (e.g., Privacy, Terms).</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Accounts/permissions (as applicable): domain/hosting, CMS, Google Analytics/Tag Manager/Search Console, Google Ads, Meta Business Manager, email marketing, payment gateways, CRM, marketplace accounts.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Point of contact for timely feedback & approvals.</span>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 shadow-sm">3</span>
              Deliverables, Milestones & Timelines
            </h2>
            <p className="mb-4 text-gray-700">
              We share a kickoff timeline with milestones (design, build, content, QA, launch). Timelines
              are estimates and depend on asset delivery, approvals, and third-party policies.
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Design/Copy rounds:</strong> Unless stated, up to <strong className="text-blue-600">2 revision rounds</strong> per major item.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Approvals:</strong> Please review and respond within 2–3 business days to maintain schedule.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Delays:</strong> Missing inputs or late approvals may shift target dates.</span>
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 shadow-sm">4</span>
              Change Requests
            </h2>
            <p className="text-gray-700">
              Any request outside the approved scope will be quoted separately. We'll confirm effort,
              cost, and new timelines before proceeding.
            </p>
          </div>

          {/* Section 5 */}
          <div className="border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 shadow-sm">5</span>
              Payments & Ad Spend
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Projects:</strong> Typically 50% advance to start, balance before handover/deployment.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Retainers:</strong> Pre-paid monthly and auto-renew unless cancelled (7-day prior notice).</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span><strong>Ad Spend:</strong> Paid directly by client platform-side; our management fee is separate.</span>
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 shadow-sm">6</span>
              KPIs, Tracking & Reporting
            </h2>
            <p className="mb-4 text-gray-700">
              We align KPIs during kickoff (e.g., leads, ROAS, CTR, conversions). We'll set up tracking
              (GA4/GTM, pixels, events) where access permits and provide periodic performance reports.
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Attribution depends on platform policies, user consent, and technical constraints.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Data integrity relies on correct implementation and third-party systems.</span>
              </li>
            </ul>
          </div>

          {/* Section 7 */}
          <div className="border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 shadow-sm">7</span>
              Communication & SLA
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Primary channel: email and an agreed project board/chat group.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Response times: within 1–2 business days (Mon–Fri IST), unless marked urgent.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Weekly/bi-weekly syncs for active retainers or complex builds.</span>
              </li>
            </ul>
          </div>

          {/* Section 8 */}
          <div className="border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 shadow-sm">8</span>
              Compliance & Platform Policies
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>All campaigns and content must comply with Google, Meta, and other platform policies.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Client is responsible for legal and regulatory compliance of business claims and content.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>We do not control platform decisions such as disapprovals, bans, or outages.</span>
              </li>
            </ul>
          </div>

          {/* Section 9 */}
          <div className="border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 shadow-sm">9</span>
              Intellectual Property & Licensing
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Upon full payment, final deliverables (designs/code excluding paid components) are licensed or assigned to you as per Proposal/SOW.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Our pre-existing frameworks, libraries, and templates remain our IP; you receive a license to use them within the deliverables.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Paid fonts, stock media, and plugins follow their vendor licenses.</span>
              </li>
            </ul>
          </div>

          {/* Section 10 */}
          <div className="border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 shadow-sm">10</span>
              Confidentiality & Data Protection
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>We treat your business data as confidential and use it only for agreed services.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>We follow reasonable security practices. Personal data handling will align with applicable laws (e.g., India DPDP / GDPR where relevant).</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Use a password manager or secure method for sharing credentials.</span>
              </li>
            </ul>
          </div>

          {/* Section 11 */}
          <div className="border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 shadow-sm">11</span>
              Acceptance, Launch & Handover
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>We share a preview/staging link for review. After approval & final payment, we proceed to launch/handover.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Handover items may include: source files/repo access, CMS/admin credentials, tracking docs, brand files, and a short care guide.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Post-launch warranty (minor bug fixes) up to 14 calendar days unless otherwise stated.</span>
              </li>
            </ul>
          </div>

          {/* Section 12 */}
          <div className="border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 shadow-sm">12</span>
              Pause, Cancellation & Termination
            </h2>
            <ul className="list-disc pl-6 space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Retainers can be cancelled for the next cycle with 7-day prior notice.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Projects can be cancelled with written notice; completed milestones/work to-date remain billable.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Non-payment or policy breach may lead to suspension/termination.</span>
              </li>
            </ul>
          </div>

          {/* Section 13 */}
          <div className="border-l-4 border-blue-500 pl-6 hover:border-blue-600 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 shadow-sm">13</span>
              Force Majeure & Dispute Resolution
            </h2>
            <p className="mb-4 text-gray-700">
              We are not liable for delays caused by events beyond reasonable control (e.g., outages,
              regulatory actions, disasters).
            </p>
            <p className="text-gray-700">
              Disputes will be addressed in good faith discussions first. Failing settlement, competent
              courts at <strong>Jaipur, Rajasthan</strong> will have exclusive jurisdiction (unless your SOW
              states otherwise).
            </p>
          </div>

          {/* Kickoff Checklist */}
          <div className="border-t pt-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Kickoff Checklist</h2>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
              <ul className="list-disc pl-6 space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Approved Proposal/SOW & initial invoice paid.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Primary contact details & communication channel confirmed.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Brand assets + copy provided.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Access shared: Analytics, Ads, CMS/Hosting, Domain/DNS, CRM, Email tools.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>KPIs & reporting cadence agreed.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-3">Ready to Get Started?</h3>
            <p className="text-blue-100 mb-4 text-lg">
              Have questions about this agreement? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="mailto:contact@jstechsolution.in"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contact@jstechsolution.in
              </a>
              <a 
                href={TEL_LINK}
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {PHONE_DISPLAY}
              </a>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              Jaipur, Rajasthan, India
            </p>
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
                  Please review with your legal counsel if needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnboardingAgreement;