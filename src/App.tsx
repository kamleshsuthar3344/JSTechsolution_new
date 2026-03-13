import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import ScrollToTop from './components/ScrollToTop';
import AdUnit from './components/AdUnit';
import ContactPopup from './components/ContactPopup';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Home from './pages/Home';
import SchemaMarkup from './components/SchemaMarkup';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import OnboardingAgreement from './pages/OnboardingAgreement';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';
import Offer from './pages/Offer';
import GrowthServices from './pages/GrowthServices';
import CareersNew from './pages/CareersNew';
import ShopifyDevelopment from './pages/ShopifyDevelopment';
import DigitalMarketing from './pages/DigitalMarketing';
import DigitalAcademy from './pages/DigitalAcademy';
import Blog from './pages/Blog';
import ReferralProgram from './pages/ReferralProgram';
const SeoServices = lazy(() => import('./pages/SeoServices'));
const Backlink = lazy(() => import('./pages/Backlink'));
import Wordpress from './pages/Wordpress';
import UiUxDesign from './pages/UiUxDesign';
import WebsiteDevelopment from './pages/WebsiteDevelopment';
// WhatsApp Business API & Sub-pages
import WhatsAppBusinessAPI from './pages/WhatsAppBusinessAPI';
import SetupOnboarding from './pages/whatsapp/SetupOnboarding';
import ChatbotDev from './pages/whatsapp/ChatbotDev';
import BulkMessaging from './pages/whatsapp/BulkMessaging';
import SupportAutomation from './pages/whatsapp/SupportAutomation';
import CRMIntegration from './pages/whatsapp/CRMIntegration';
import CampaignAnalytics from './pages/whatsapp/CampaignAnalytics';
// Reverting to static imports for stability testing
import Returns from './pages/policies/Returns';
import Refund from './pages/policies/Refund';
import Cancellation from './pages/policies/Cancellation';
import FAQ from './pages/FAQ';
import Login from './pages/dashboard/Login';
import Signup from './pages/dashboard/Signup';
import Dashboard from './pages/dashboard/Dashboard';
import { AuthProvider } from './contexts/AuthContext';
import { TEL_LINK, waLink } from './config/contact';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          <Router>
            <ScrollToTop />
            {/* Google Tag Manager */}
            <Helmet>
              {/* GTM Script */}
              <script>
                {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MQWHT9DZ');
          `}
              </script>

              {/* Primary Meta Tags */}
              <title>JS TECH SOLUTION - Top Website Development & Digital Marketing Company in India | Jaipur, Rajasthan</title>
              <meta name="description" content="JS TECH SOLUTION provides professional digital marketing, branding, and web development services in India, including Jaipur, Rajasthan, and Rajasthan. Grow your business online with our expert solutions." />
              <meta name="keywords" content="digital marketing, web development, branding, SEO, social media marketing, e-commerce, Jaipur, Rajasthan, NCR, India, Jaipur, Rajasthan, website design, logo design, top agency" />
              <meta name="author" content="JSTECHSOLUTION" />

              {/* Careers Page Meta Tags */}
              <meta name="careers" content="Explore career opportunities at JSTECHSOLUTION. Join our team of digital marketing and web development professionals in Rajasthan." />
              <meta property="og:title" content="Careers at JSTECHSOLUTION - Join Our Team" />
              <meta property="og:description" content="Explore open positions and career opportunities at JSTECHSOLUTION, a leading digital marketing and web development company in Rajasthan." />
              <meta property="og:url" content="https://JSTECHSOLUTION.in/careers" />
              <meta property="og:image" content="https://JSTECHSOLUTION.in/og-image-careers.jpg" />
              <meta property="twitter:title" content="Careers at JSTECHSOLUTION - Join Our Team" />
              <meta property="twitter:description" content="Explore open positions and career opportunities at JSTECHSOLUTION, a leading digital marketing and web development company in Rajasthan." />
              <meta property="twitter:image" content="https://JSTECHSOLUTION.in/og-image-careers.jpg" />

              {/* Open Graph / Facebook */}
              <meta property="og:type" content="website" />
              <meta property="og:url" content="https://JSTECHSOLUTION.in/" />
              <meta property="og:title" content="JS TECH SOLUTION - Top Website Development & Digital Marketing Company" />
              <meta property="og:description" content="Professional digital marketing, web development, and branding services in Rajasthan and across India. Transform your online presence with JS TECH SOLUTION." />
              <meta property="og:image" content="https://JSTECHSOLUTION.in/og-image.jpg" />

              {/* Twitter */}
              <meta property="twitter:card" content="summary_large_image" />
              <meta property="twitter:url" content="https://JSTECHSOLUTION.in/" />
              <meta property="twitter:title" content="JSTECHSOLUTION - Digital Marketing & Web Development Company" />
              <meta property="twitter:description" content="Professional digital marketing, web development, and branding services in Jaipur, Rajasthan." />
              <meta property="twitter:image" content="https://JSTECHSOLUTION.in/og-image.jpg" />

              {/* Canonical URL */}
              <link rel="canonical" href="https://JSTECHSOLUTION.in/" />

              {/* ✅ Razorpay Script for Payment Functionality */}
              <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
            </Helmet>

            {/* GTM Noscript - for browsers without JavaScript */}
            <noscript>
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-MQWHT9DZ"
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
              />
            </noscript>

            <div className="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
              <Header />
              <SchemaMarkup />
              <main>
                <Suspense fallback={<div className="min-h-[40vh] flex items-center justify-center">Loading…</div>}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/onboarding-agreement" element={<OnboardingAgreement />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/growth-services" element={<GrowthServices />} />
                    <Route path="/offer" element={<Offer />} />
                    <Route path="/careers" element={<CareersNew />} />
                    <Route path="/shopify-development" element={<ShopifyDevelopment />} />
                    <Route path="/website-development" element={<WebsiteDevelopment />} />
                    <Route path="/wordpress-development" element={<Wordpress />} />
                    <Route path="/ui-ux-design" element={<UiUxDesign />} />
                    <Route path="/digital-marketing" element={<DigitalMarketing />} />
                    <Route path="/digital-academy" element={<DigitalAcademy />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/referral-program" element={<ReferralProgram />} />
                    <Route path="/seo-services" element={<SeoServices />} />
                    <Route path="/backlink" element={<Backlink />} />
                    <Route path="/whatsapp-business-api" element={<WhatsAppBusinessAPI />} />
                    <Route path="/whatsapp-api-setup" element={<SetupOnboarding />} />
                    <Route path="/whatsapp-chatbot" element={<ChatbotDev />} />
                    <Route path="/whatsapp-bulk-messaging" element={<BulkMessaging />} />
                    <Route path="/whatsapp-support" element={<SupportAutomation />} />
                    <Route path="/whatsapp-crm-integration" element={<CRMIntegration />} />
                    <Route path="/whatsapp-analytics" element={<CampaignAnalytics />} />

                    <Route path="/policy-returns" element={<Returns />} />
                    <Route path="/policy-refund" element={<Refund />} />
                    <Route path="/policy-cancellation" element={<Cancellation />} />
                    <Route path="/faq" element={<FAQ />} />

                    {/* ✅ PAYMENT SUCCESS PAGE */}
                    <Route path="/payment/success" element={
                      <div className="min-h-screen flex items-center justify-center bg-green-50 py-12">
                        <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md mx-4">
                          <div className="text-green-500 text-6xl mb-4">✅</div>
                          <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
                          <p className="text-gray-600 mb-6">
                            Thank you for your payment. We've received your order and will contact you within 24 hours.
                          </p>
                          <div className="space-y-3">
                            <a
                              href="/"
                              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors block"
                            >
                              Return to Home
                            </a>
                            <a
                              href={waLink()}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors block"
                            >
                              💬 WhatsApp Support
                            </a>
                          </div>
                        </div>
                      </div>
                    } />

                    {/* ✅ PAYMENT FAILED PAGE */}
                    <Route path="/payment/failed" element={
                      <div className="min-h-screen flex items-center justify-center bg-red-50 py-12">
                        <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md mx-4">
                          <div className="text-red-500 text-6xl mb-4">❌</div>
                          <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Failed</h1>
                          <p className="text-gray-600 mb-6">
                            Your payment could not be processed. Please try again or contact our support team.
                          </p>
                          <div className="space-y-3">
                            <a
                              href="/pricing"
                              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors block"
                            >
                              Try Again
                            </a>
                            <a
                              href={waLink()}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors block"
                            >
                              💬 WhatsApp Support
                            </a>
                            <a
                              href={waLink()}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors block"
                            >
                              💬 WhatsApp Support
                            </a>
                            <a
                              href={TEL_LINK}
                              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors block"
                            >
                              📞 Call Support
                            </a>
                          </div>
                        </div>
                      </div>
                    } />

                    {/* Dashboard Auth Routes */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/dashboard" element={<Dashboard />} />

                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </main>
              <AdUnit />
              <Footer />
              <WhatsAppFloat />
              <ContactPopup />
            </div>
          </Router>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
