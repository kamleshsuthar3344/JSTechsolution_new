
import React, { useRef, useState } from 'react';
import InquiryModal from '../components/InquiryModal';
import { Helmet } from 'react-helmet';
import {
  Monitor,
  Search,
  CheckCircle,
  MessageCircle,
  Rocket,
  ChevronLeft,
  ChevronRight,
  Megaphone,
  ShoppingBag,
  ShoppingCart,
  Handshake,
  Gift,
  Link as LinkIcon,
  BookOpen,
  Plane,
  Sparkles,
  Users,
  Layout,
  Zap,
  Globe,
  PenTool
} from 'lucide-react';
import { Link } from 'react-router-dom';



const Services: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Industry/Service Cards for Carousel
  const servingCards = [
    { title: "Hospitality Services", icon: <Users className="h-6 w-6 text-blue-500" />, link: "/services" },
    { title: "Real Estate", icon: <Layout className="h-6 w-6 text-green-500" />, link: "/services" },
    { title: "Education", icon: <BookOpen className="h-6 w-6 text-yellow-500" />, link: "/services" },
    { title: "Travel & Tourism", icon: <Plane className="h-6 w-6 text-sky-500" />, link: "/services" },
    { title: "SEO Services", icon: <Search className="h-6 w-6 text-purple-500" />, link: "/seo-services" },
    { title: "Digital Marketing", icon: <Megaphone className="h-6 w-6 text-pink-500" />, link: "/digital-marketing" },
    { title: "Shopify Development", icon: <ShoppingBag className="h-6 w-6 text-green-600" />, link: "/shopify-development" },
    { title: "Wordpress Website", icon: <Globe className="h-6 w-6 text-blue-600" />, link: "/wordpress-development" },
    { title: "UI/UX Design", icon: <PenTool className="h-6 w-6 text-orange-500" />, link: "/ui-ux-design" },
    { title: "Backlink Services", icon: <LinkIcon className="h-6 w-6 text-indigo-500" />, link: "/backlink" },
    { title: "Partnership Program", icon: <Handshake className="h-6 w-6 text-teal-500" />, link: "/partnership" },
    { title: "Referral Program", icon: <Gift className="h-6 w-6 text-red-500" />, link: "/referral-program" },
    { title: "E-Commerce", icon: <ShoppingCart className="h-6 w-6 text-blue-400" />, link: "/services" },
    { title: "Health & Fitness", icon: <Zap className="h-6 w-6 text-red-400" />, link: "/services" },
    { title: "Legal Services", icon: <CheckCircle className="h-6 w-6 text-slate-500" />, link: "/services" },
    { title: "Website Development", icon: <Monitor className="h-6 w-6 text-indigo-500" />, link: "/website-development" },
    { title: "Growth Services", icon: <Rocket className="h-6 w-6 text-rose-500" />, link: "/growth-services" },
    { title: "Pricing", icon: <Sparkles className="h-6 w-6 text-yellow-500" />, link: "/pricing" },
    { title: "Portfolio", icon: <BookOpen className="h-6 w-6 text-teal-500" />, link: "/portfolio" }
  ];

  // Manual scroll functions only (auto-scroll removed as requested)

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleContact = (service: string) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <Helmet>
        <title>Our Digital Services | Complete Web & Marketing Solutions | JS TECH SOLUTION</title>
        <meta
          name="description"
          content="Explore our wide range of professional digital services including custom Web Development, data-driven SEO, Social Media Marketing, and specialized Growth Services."
        />
        <meta name="keywords" content="digital services agency, web development services, SEO marketing solutions, social media management, business growth services Jaipur" />
        <link rel="canonical" href="https://JSTECHSOLUTION.in/services" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://JSTECHSOLUTION.in/services" />
        <meta property="og:title" content="JS TECH SOLUTION | Full-Service Digital Agency" />
        <meta property="og:description" content="One-stop shop for all your digital needs. From design to deployment." />
        <meta property="og:image" content="https://JSTECHSOLUTION.in/og-services.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Digital Services" />
        <meta name="twitter:description" content="Elevate your brand with our expert digital solutions." />
      </Helmet>

      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceName={selectedService}
      />

      {/* Enhanced Hero Section matching Digital Marketing Style */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 lg:py-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.3) 2%, transparent 20%),
                radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.2) 1%, transparent 25%),
                radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.1) 1%, transparent 15%)`,
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center frosted-ice p-10 rounded-3xl m-10">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-bold mb-6">
            <Sparkles className="h-4 w-4" />
            <span>One-Stop Digital Solutions</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Empowering Your Business With <br />
            <span className="text-yellow-400 frozen-text" data-text="Complete Digital Services">Complete Digital Services</span>
          </h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
            From custom websites to strategic marketing, we provide everything you need to grow your online presence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => handleContact("General Inquiry")}
              className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Get Free Quote
            </button>
            <Link to="/contact" className="flex items-center gap-2 text-blue-100 underline hover:text-white transition-colors">
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation Buttons */}
      <section className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 sticky top-[72px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
          <div className="flex space-x-2 py-4 min-w-max">
            <Link to="/services" className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2 bg-blue-600 text-white shadow-md transform scale-105`}>
              <Sparkles className="w-4 h-4" />
              All Services
            </Link>
            <Link to="/website-development" className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600`}>
              <Monitor className="w-4 h-4" />
              Website Development
            </Link>
            <Link to="/digital-marketing" className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600`}>
              <Megaphone className="w-4 h-4" />
              Digital Marketing
            </Link>
            <Link to="/seo-services" className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600`}>
              <Search className="w-4 h-4" />
              SEO Services
            </Link>
            <Link to="/shopify-development" className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600`}>
              <ShoppingBag className="w-4 h-4" />
              Shopify Website
            </Link>
            <Link to="/wordpress-development" className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600`}>
              <Globe className="w-4 h-4" />
              Wordpress Website
            </Link>
            <Link to="/ui-ux-design" className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 flex items-center gap-2 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600`}>
              <PenTool className="w-4 h-4" />
              UI/UX Design
            </Link>
          </div>
        </div>
      </section>

      {/* Serving Industry Carousel */}
      <section className="py-12 bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 overflow-hidden relative group">
        <div className="max-w-7xl mx-auto px-4 mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">We are Serving for 15+ different work</h2>
            <p className="text-gray-600 dark:text-gray-400">explore our diverse range of services and industries</p>
          </div>
          <div className="flex gap-2">
            <button onClick={scrollLeft} className="p-1.5 rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={scrollRight} className="p-1.5 rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden pb-8 px-4 snap-x"
          style={{ scrollBehavior: 'smooth' }}
        >
          {servingCards.map((card, index) => (
            <div key={index} className="min-w-[280px] bg-white/40 dark:bg-slate-800/40 frosted-ice rounded-xl p-6 shadow-lg border border-white/20 dark:border-white/10 flex flex-col items-center text-center gap-4 hover:shadow-xl transition-all duration-300 snap-center">
              <div className="w-14 h-14 rounded-full bg-gray-50 dark:bg-slate-700 flex items-center justify-center p-3">
                {card.icon}
              </div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">{card.title}</h3>
              <Link
                to={card.link}
                className="w-full bg-blue-50 dark:bg-slate-700 text-blue-600 dark:text-blue-400 py-2 rounded-lg font-semibold hover:bg-blue-100 dark:hover:bg-slate-600 transition-colors"
                onClick={(e) => {
                  if (card.link === "/services") {
                    e.preventDefault();
                    handleContact(card.title);
                  }
                }}
              >
                Book your service
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleContact("Project Inquiry")}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

