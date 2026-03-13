import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { heroSlides, startupSolutions, growthPackages, whyChooseUs, processSteps, testimonials, clientLogos } from '../data/content';
import ROICalculator from '../components/ROICalculator';
import { Helmet } from "react-helmet";
import { ArrowRight, CheckCircle, Star, MessageCircle, Phone, Gift } from "lucide-react";
import InquiryModal from '../components/InquiryModal';
import { TEL_LINK, PHONE_DISPLAY, waLink, WHATSAPP_NUMBER } from '../config/contact';
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryService, setInquiryService] = useState("");

  // Auto slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleWhatsApp = (message = "General Inquiry") => {
    setInquiryService(message);
    setIsInquiryOpen(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 overflow-hidden transition-colors duration-300">
      <Helmet>
        <title>India's Top Website Development & Digital Marketing Company | Jaipur, Rajasthan</title>
        <meta name="description" content="JS TECH SOLUTION: The best digital marketing and website development company in Rajasthan. Affordable e-commerce stores from ₹4,999. Grow your business nationwide with our expert SEO and marketing." />
        <meta name="keywords" content="top website development company India, best digital marketing company Jaipur, web design Gurugram, SEO services Noida, e-commerce website development India" />
        <link rel="canonical" href="https://JSTECHSOLUTION.in/" />
      </Helmet>

      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        serviceName={inquiryService}
      />

      {/* === MODERN HERO SECTION - MOBILE OPTIMIZED === */}
      <section className="relative h-[650px] sm:h-[700px] lg:h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          {heroSlides.map((slide, index) => (
            index === currentSlide && (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 flex items-center"
                style={{ background: slide.bg }}
              >
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative w-full pt-0 pb-12 sm:pt-12 sm:pb-16 lg:py-0">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                      {/* Left Content - Mobile Optimized */}
                      <div className="text-white text-center lg:text-left pt-0">
                        <motion.div
                          className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1 sm:px-4 sm:py-2 mb-4 sm:mb-6"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <Star className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 text-yellow-400" />
                          <span className="text-[10px] sm:text-sm font-semibold tracking-wide uppercase">Trusted by 250+ Businesses</span>
                        </motion.div>

                        <motion.h1
                          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          {slide.title}
                          <span className="block text-yellow-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-2 sm:mt-3">
                            {slide.highlight}
                          </span>
                        </motion.h1>

                        <motion.p
                          className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 lg:mb-8 text-white/90 leading-relaxed text-center lg:text-left max-w-[320px] sm:max-w-none mx-auto"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          {slide.tagline}
                        </motion.p>

                        <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8 max-w-[350px] sm:max-w-none mx-auto lg:mx-0">
                          {slide.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-white/80 justify-center lg:justify-start">
                              <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 mr-1.5 sm:mr-2 text-green-400 flex-shrink-0" />
                              <span className="text-[11px] sm:text-sm md:text-base whitespace-nowrap">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center lg:justify-start">
                          <button
                            onClick={() => handleWhatsApp(`I'm interested in ${slide.title} - ${slide.highlight}`)}
                            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-5 py-3 lg:px-7 lg:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 shadow-2xl"
                          >
                            <span>🚀 {slide.cta}</span>
                            <ArrowRight className="h-4 w-4" />
                          </button>
                          <a
                            href={TEL_LINK}
                            className="border-2 border-white/50 text-white hover:bg-white hover:text-gray-900 px-5 py-3 lg:px-7 lg:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 backdrop-blur-sm"
                          >
                            <Phone className="h-4 w-4" />
                            <span className="whitespace-nowrap">Call {PHONE_DISPLAY}</span>
                          </a>
                        </div>
                      </div>

                      {/* Right Content - Hidden on mobile, shown on desktop */}
                      <div className="hidden lg:block relative">
                        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 lg:p-8 border border-white/20 frosted-ice shadow-2xl">
                          <h3 className="text-xl lg:text-2xl font-bold text-white mb-6">Get Free Consultation</h3>
                          <div className="space-y-4">
                            <div className="bg-white/20 rounded-xl p-4 transition-all duration-300 hover:bg-white/30">
                              <div className="text-white/80 text-sm">Website Development</div>
                              <div className="text-yellow-400 font-bold text-lg lg:text-xl">Starting at ₹8,749</div>
                            </div>
                            <div className="bg-white/20 rounded-xl p-4 transition-all duration-300 hover:bg-white/30">
                              <div className="text-white/80 text-sm">E-commerce Store</div>
                              <div className="text-yellow-400 font-bold text-lg lg:text-xl">Only ₹18,749</div>
                            </div>
                            <div className="bg-white/20 rounded-xl p-4 transition-all duration-300 hover:bg-white/30">
                              <div className="text-white/80 text-sm">Digital Marketing</div>
                              <div className="text-yellow-400 font-bold text-lg lg:text-xl">From ₹4,999/month</div>
                            </div>
                          </div>
                          <button
                            onClick={() => handleWhatsApp("I want free consultation about website and digital marketing services.")}
                            className="w-full bg-green-500 hover:bg-green-600 text-white py-4 lg:py-5 rounded-2xl font-bold text-base lg:text-lg transition-all duration-300 mt-6 lg:mt-8 flex items-center justify-center space-x-2 shadow-xl hover:scale-102"
                          >
                            <MessageCircle className="h-5 w-5 lg:h-6 lg:w-6" />
                            <span>💬 WhatsApp Now</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>

        {/* Slide Indicators - Mobile Optimized */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentSlide
                ? 'bg-yellow-400 scale-125 shadow-lg'
                : 'bg-white/50 hover:bg-white/80'
                }`}
            />
          ))}
        </div>
      </section>

      {/* === TRUSTED BY BUSINESSES === */}
      <section className="py-8 sm:py-12 bg-white dark:bg-slate-800 border-b border-gray-100 dark:border-slate-700 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base font-medium uppercase tracking-wider">
              Trusted by 150+ Businesses Across India
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-3 sm:p-4 bg-gray-50 dark:bg-slate-700 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-600 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-lg sm:text-xl font-bold mb-2 group-hover:scale-110 transition-transform">
                  {client.name.charAt(0)}
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 text-center line-clamp-1">{client.industry}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 sm:mt-8 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                50K+ Orders Delivered
              </span>
              <span className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-500" />
                4.9/5 Customer Rating
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                100% Safe & Secure
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* === STARTUP SOLUTIONS - MOBILE OPTIMIZED === */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8 sm:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              🚀 STARTUP BUSINESS SOLUTIONS
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Launch Your Business <span className="text-blue-600">Online</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              Professional websites and digital solutions at startup-friendly prices.
              Everything you need to establish your online presence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {startupSolutions.map((solution, index) => (
              <div
                key={index}
                className={`frosted-ice bg-white/30 dark:bg-slate-800/30 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 border-2 ${solution.popular ? 'border-yellow-400 ring-1 sm:ring-2 ring-yellow-200' : 'border-white/20 dark:border-white/10'
                  } overflow-hidden`}
              >
                {solution.popular && (
                  <div className="bg-yellow-500 text-gray-900 py-2 sm:py-3 px-3 sm:px-4 text-center font-bold text-xs sm:text-sm">
                    ⭐ MOST POPULAR
                  </div>
                )}

                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className="text-3xl sm:text-4xl">{solution.icon}</div>
                    {solution.badge && (
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-bold">
                        {solution.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">{solution.description}</p>

                  <div className="flex items-baseline mb-3 sm:mb-4">
                    <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">{solution.price}</span>
                    <span className="text-sm sm:text-lg text-gray-400 line-through ml-2">{solution.originalPrice}</span>
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold ml-auto">
                      {solution.savings}
                    </span>
                  </div>

                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                        <span className="text-xs sm:text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => handleWhatsApp(`I'm interested in ${solution.title} for ${solution.price}`)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 sm:py-3 px-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Get This Package</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-green-200">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                🤝 You are starting a business, we will help you.
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-6">
                Call now for free consultation and custom solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <a
                  href={TEL_LINK}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2 w-full sm:w-auto justify-center"
                >
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>Call {PHONE_DISPLAY}</span>
                </a>
                <button
                  onClick={() => handleWhatsApp("I want to discuss my business requirements and get a custom solution.")}
                  className="border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-4 py-3 sm:px-6 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 flex items-center space-x-2 w-full sm:w-auto justify-center"
                >
                  <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>WhatsApp Consultation</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* === ROI CALCULATOR SECTION === */}
      <section className="py-12 bg-white dark:bg-slate-800 border-b border-gray-100 dark:border-slate-700 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Calculate Your <span className="text-blue-600">Growth Potential</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              See how much revenue you can generate with our digital marketing services.
            </p>
          </div>
          <ROICalculator />
        </div>
      </section>

      {/* === GROWTH PACKAGES - MOBILE OPTIMIZED === */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white dark:bg-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              📈 GROWTH PACKAGES
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Plans Built for <span className="text-purple-600">Scaling</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 sm:mb-12">
              Choose the right package to take your business to the next level.
              Transparent pricing with no hidden costs.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {growthPackages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br ${pkg.color} rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl transform transition-all duration-300 hover:scale-105 ${pkg.popular ? 'ring-2 sm:ring-4 ring-yellow-400 ring-opacity-50' : ''
                  }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-yellow-500 text-gray-900 px-4 py-1 sm:px-6 sm:py-2 rounded-full font-bold text-xs sm:text-sm">
                      ⭐ RECOMMENDED
                    </div>
                  </div>
                )}

                <div className="p-6 sm:p-8 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline mb-3 sm:mb-4">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-bold">{pkg.price}</span>
                    <span className="text-sm sm:text-lg opacity-80 line-through ml-2">{pkg.originalPrice}</span>
                  </div>
                  <div className="bg-white/20 rounded-lg px-2 py-1 sm:px-3 sm:py-1 inline-block mb-4 sm:mb-6">
                    <span className="text-xs sm:text-sm font-semibold">Save {pkg.savings}</span>
                  </div>

                  <p className="text-white/90 text-sm sm:text-base mb-4 sm:mb-6">{pkg.description}</p>

                  <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-300 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-white/90 text-xs sm:text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => handleWhatsApp(`I'm interested in ${pkg.name} package for ${pkg.price}`)}
                    className="w-full bg-white text-gray-900 hover:bg-gray-100 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Get This Package</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === WHY CHOOSE US - MOBILE OPTIMIZED === */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-10 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-white/15 border border-white/30 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 shadow-sm">
              ✨ WHY CHOOSE US
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight">
              We Don't Just Build Websites, <br className="hidden sm:block" />
              We Build <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Digital Futures</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Combining technical expertise with business strategy to deliver results that actually matter to your bottom line.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white p-2 sm:p-3 lg:p-4 rounded-xl sm:rounded-2xl w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-3 sm:mb-4 lg:mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 lg:mb-4">{item.title}</h3>
                  <p className="text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === PROCESS - MOBILE OPTIMIZED === */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8 sm:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              How We <span className="text-green-600">Work</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Simple, transparent process to get your project from idea to launch
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 sm:top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 -z-10"></div>
                )}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border-2 border-blue-100 hover:border-blue-300 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3 lg:mb-4">{step.icon}</div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-600 mb-1 sm:mb-2">{step.number}</div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* === REFERRAL PROGRAM === */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🎁 EARN REWARDS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Refer & Earn <span className="text-yellow-300">₹5,000+</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
              Refer your friends and businesses to us. Earn attractive rewards for every successful referral.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center">
              <div className="text-5xl mb-4">1️⃣</div>
              <h3 className="text-xl font-bold mb-3">Share Your Link</h3>
              <p className="text-white/80">Get your unique referral link and share it with your network.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center">
              <div className="text-5xl mb-4">2️⃣</div>
              <h3 className="text-xl font-bold mb-3">They Purchase</h3>
              <p className="text-white/80">When someone buys through your link, you earn rewards.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center">
              <div className="text-5xl mb-4">3️⃣</div>
              <h3 className="text-xl font-bold mb-3">Get Paid</h3>
              <p className="text-white/80">Receive your rewards directly in your bank account.</p>
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Referral Rewards</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-yellow-300 font-bold text-lg mb-2">Website Development</div>
                <div className="text-2xl font-bold">₹500 - ₹2,000</div>
                <div className="text-sm text-white/70">Per successful referral</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-yellow-300 font-bold text-lg mb-2">Digital Marketing</div>
                <div className="text-2xl font-bold">₹1,000 - ₹5,000</div>
                <div className="text-sm text-white/70">Per successful referral</div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              to="/referral-program"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <Gift className="h-5 w-5" />
              <span>More Information</span>
            </Link>
            <button
              onClick={() => {
                const message = `🎁 Referral Program Join Request - JS TECH SOLUTION\n\nI want to join the referral program and earn commission per referral!\n\nPlease share the details.`;
                window.open(waLink(message), '_blank');
              }}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Contact Us</span>
            </button>
            <a
              href={`tel:+91${WHATSAPP_NUMBER}`}
              className="bg-white hover:bg-gray-50 text-orange-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2 border-2 border-orange-100"
            >
              <Phone className="h-5 w-5" />
              <span>Call Us Now</span>
            </a>
          </div>
        </div>
      </section>

      {/* === TESTIMONIALS - ENHANCED WITH PHOTOS === */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8 sm:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              ⭐ CLIENT SUCCESS STORIES
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              What Our <span className="text-purple-600">Clients Say</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Real stories from real businesses. See how we've helped them grow online.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-slate-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 border border-gray-100 dark:border-slate-600">
                <div className="flex items-center mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3 sm:gap-4">
                  {testimonial.image && (
                    <img
                      src={testimonial.image.replace('auto=compress', 'auto=format&fm=webp')}
                      alt={testimonial.name}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-purple-200"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  )}
                  <div>
                    <p className="font-bold text-gray-900 text-base sm:text-lg">{testimonial.name}</p>
                    <p className="text-purple-600 text-sm sm:text-base">{testimonial.business}</p>
                    {testimonial.location && (
                      <p className="text-gray-500 text-xs sm:text-sm">📍 {testimonial.location}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
              <CheckCircle className="h-5 w-5" />
              150+ Happy Clients & Growing
            </div>
          </div>
        </div>
      </section>

      {/* === FINAL CTA - MOBILE OPTIMIZED === */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6">
            Ready to Start Your <span className="text-yellow-400">Online Journey</span>?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 lg:mb-8 text-white/90">
            Get your professional website from <strong className="text-yellow-400">₹8,749</strong> with
            FREE domain & hosting. Limited time offer!
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={() => handleWhatsApp("I'm ready to start my website project. Please help me get started.")}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-3 sm:px-6 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Start My Project</span>
            </button>
            <a
              href={TEL_LINK}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-4 py-3 sm:px-6 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Call Now</span>
            </a>
          </div>

          <p className="text-white/80 mt-4 sm:mt-6 lg:mt-8 text-xs sm:text-sm lg:text-lg">
            ✅ Free Consultation ✅ 1 Year Support ✅ Money-Back Guarantee
          </p>
        </div>
      </section>

      {/* Floating WhatsApp Button - Mobile Optimized */}
      <button
        onClick={() => handleWhatsApp()}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 animate-bounce"
      >
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>
    </div >
  );
};

export default Home;
