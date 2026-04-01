import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  Check,
  Rocket, // Kept one Rocket
  Clock,
  MessageCircle,
  X,
  Smartphone,
  Copy,
  Zap,
  ArrowRight,
  Shield,
  Award,
  TrendingUp,
  Gift,
  Sparkles,
  Crown,
  Phone,
  Mail,
  MapPin,
  CreditCard,
  Send
} from "lucide-react";
import { WHATSAPP_NUMBER } from '../config/contact';



interface PriceData {
  [key: string]: {
    special: number;
    regular: number;
    save: string;
    name: string;
    features: string[];
    icon: string;
    gradient: string;
    popular?: boolean;
    badge?: string;
  };
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface SuccessFormData {
  name: string;
  email: string;
  utr: string;
  service: string;
  amount: string;
}

const Offer: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState<boolean>(false);
  const [isSuccessFormOpen, setIsSuccessFormOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<string>("");
  const [timeLeft, setTimeLeft] = useState<number>(180); // 3 minutes timer
  const [flashSaleTime, setFlashSaleTime] = useState<number>(30); // 30 seconds flash sale
  const [isSpecialPrice, setIsSpecialPrice] = useState<boolean>(true);
  const [isFlashSale, setIsFlashSale] = useState<boolean>(true);
  const [hasFlashSaleOccurred, setHasFlashSaleOccurred] = useState<boolean>(false);
  const [offerExpired, setOfferExpired] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [successFormData, setSuccessFormData] = useState<SuccessFormData>({
    name: "",
    email: "",
    utr: "",
    service: "",
    amount: ""
  });
  const [paymentService, setPaymentService] = useState<string>("");
  const [paymentAmount, setPaymentAmount] = useState<number>(0);
  const [originalAmount, setOriginalAmount] = useState<number>(0);
  const [isGoogleService, setIsGoogleService] = useState<boolean>(false);

  // const WHATSAPP_NUMBER = "9521281509"; // Removed local constant to use imported config

  // Initialize timers from localStorage
  useEffect(() => {
    const savedTime = localStorage.getItem('specialOfferTime');
    const savedFlashSale = localStorage.getItem('flashSaleOccurred');
    const savedOfferExpired = localStorage.getItem('offerExpired');

    if (savedTime) {
      const remainingTime = parseInt(savedTime);
      setTimeLeft(remainingTime);
      if (remainingTime <= 0) {
        setOfferExpired(true);
        setIsSpecialPrice(false);
      }
    }

    if (savedFlashSale === 'true') {
      setHasFlashSaleOccurred(true);
      setIsFlashSale(false);
    }

    if (savedOfferExpired === 'true') {
      setOfferExpired(true);
      setIsSpecialPrice(false);
    }
  }, []);

  // Main Timer Effect - 3 minutes
  useEffect(() => {
    if (timeLeft <= 0) {
      setOfferExpired(true);
      setIsSpecialPrice(false);
      localStorage.setItem('offerExpired', 'true');
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft(prev => {
        const newTime = prev - 1;
        localStorage.setItem('specialOfferTime', newTime.toString());

        if (newTime <= 0) {
          setOfferExpired(true);
          setIsSpecialPrice(false);
          localStorage.setItem('offerExpired', 'true');
          return 0;
        }

        return newTime;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  // Flash Sale Timer - 30 seconds with 20% discount
  useEffect(() => {
    if (flashSaleTime <= 0 || hasFlashSaleOccurred) {
      setIsFlashSale(false);
      setHasFlashSaleOccurred(true);
      localStorage.setItem('flashSaleOccurred', 'true');
      return;
    }

    const flashTimerId = setInterval(() => {
      setFlashSaleTime(prev => {
        if (prev <= 1) {
          setIsFlashSale(false);
          setHasFlashSaleOccurred(true);
          localStorage.setItem('flashSaleOccurred', 'true');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(flashTimerId);
  }, [flashSaleTime, hasFlashSaleOccurred]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Enhanced Price Data with better structure
  const priceData: PriceData = {
    smo: {
      special: 4999,
      regular: 9999,
      save: "₹5,000",
      name: "Social Media Optimization",
      features: [
        "3 Social Media Platforms Management",
        "15 Creative Posts/Month",
        "Content Strategy & Calendar",
        "Hashtag Research & Optimization",
        "Audience Engagement Management",
        "Monthly Performance Analytics",
        "Competitor Analysis",
        "Growth Strategy Planning"
      ],
      icon: "📱",
      gradient: "bg-gradient-to-r from-pink-500 to-rose-500",
      popular: true,
      badge: "MOST POPULAR"
    },
    seo: {
      special: 9999,
      regular: 19999,
      save: "₹10,000",
      name: "Search Engine Optimization",
      features: [
        "50+ Comprehensive Keyword Research",
        "Complete On-Page SEO Optimization",
        "Technical SEO Audit & Fixes",
        "Google Business Profile Optimization",
        "Monthly Ranking Progress Reports",
        "Content Optimization Strategy",
        "Backlink Building Strategy",
        "Local SEO Implementation"
      ],
      icon: "🔍",
      gradient: "bg-gradient-to-r from-purple-500 to-indigo-500",
      popular: false,
      badge: "BEST FOR GROWTH"
    },
    web: {
      special: 9999,
      regular: 19999,
      save: "₹10,000",
      name: "Professional Website Development",
      features: [
        "5 Page Responsive Website",
        "Mobile-First Design Approach",
        "SEO Optimized Structure",
        "Contact & Lead Generation Forms",
        "1 Year Free Hosting Included",
        "3 Months Technical Support",
        "Google Analytics Integration",
        "SSL Certificate Security"
      ],
      icon: "💻",
      gradient: "bg-gradient-to-r from-blue-500 to-cyan-500",
      popular: true,
      badge: "HOT DEAL"
    },
    ecommerce: {
      special: 18749,
      regular: 37499,
      save: "₹18,750",
      name: "E-commerce Management",
      features: [
        "Multi-Platform Account Creation",
        "AMAZON • FLIPKART • MEESHO Setup",
        "Professional Product Listing Support",
        "Professional Photography Guidance",
        "Complete Catalog Management",
        "Sales & Performance Optimization",
        "Inventory Management Setup",
        "Customer Review Management"
      ],
      icon: "🛒",
      gradient: "bg-gradient-to-r from-orange-500 to-red-500",
      popular: false,
      badge: "BEST SELLER"
    },
    social: {
      special: 1999,
      regular: 3999,
      save: "₹2,000",
      name: "Social Account Creation",
      features: [
        "META Business Account Setup",
        "INSTAGRAM Professional Account",
        "TWITTER (X) Business Profile",
        "Complete Profile Branding & Setup",
        "Bio & Description Optimization",
        "Profile Verification Support",
        "Cross-platform Consistency",
        "Initial Content Strategy"
      ],
      icon: "👥",
      gradient: "bg-gradient-to-r from-green-500 to-emerald-500",
      popular: false,
      badge: "QUICK START"
    },
    google: {
      special: 999,
      regular: 1999,
      save: "₹1,000",
      name: "Google Business Setup",
      features: [
        "GOOGLE BUSINESS Profile Creation",
        "Google Map Listing Optimization",
        "BUSINESS WHATSAPP Integration",
        "10 Free Product Listings Setup",
        "YOUTUBE CHANNEL Creation & Setup",
        "Basic SEO Optimization",
        "Review Management Setup",
        "Local SEO Implementation"
      ],
      icon: "🌐",
      gradient: "bg-gradient-to-r from-yellow-500 to-amber-500",
      popular: true,
      badge: "SPECIAL OFFER"
    },
    consultation: {
      special: 1,
      regular: 999,
      save: "₹998",
      name: "Expert Digital Consultation",
      features: [
        "30-Minute Strategy Session",
        "Complete Digital Audit Report",
        "Custom Business Growth Plan",
        "Competitor Analysis Report",
        "ROI Optimization Strategies",
        "Priority Support Access",
        "Actionable Recommendations",
        "Follow-up Support"
      ],
      icon: "💬",
      gradient: "bg-gradient-to-r from-purple-500 to-pink-500",
      popular: true,
      badge: "LIMITED TIME"
    }
  };

  const scrollToOffer = (): void => {
    document.getElementById('offers')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSuccessFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    setSuccessFormData({
      ...successFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    const whatsappMessage = `🎯 Special Offer Inquiry - JSTECHSOLUTION 🎯\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nMessage: ${formData.message}\n\nI'm interested in your special offer!`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/91${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');

    setIsFormOpen(false);
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleSuccessSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    const whatsappMessage = `✅ Payment Success - JSTECHSOLUTION 🎯\n\nPayment Details:\nName: ${successFormData.name}\nEmail: ${successFormData.email}\nUTR Number: ${successFormData.utr}\nService: ${successFormData.service}\nAmount Paid: ₹${successFormData.amount}\n\nPlease verify my payment and start the service!`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/91${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');

    setIsSuccessFormOpen(false);
    setSuccessFormData({ name: "", email: "", utr: "", service: "", amount: "" });
    alert("🎉 Thank you! We'll verify your payment and start your service within 24 hours.");
  };

  const openQuickForm = (service: string): void => {
    setSelectedService(service);
    setFormData(prev => ({ ...prev, service }));
    setIsFormOpen(true);
  };

  // Payment Functions
  const openPaymentModal = (serviceKey: string): void => {
    const service = priceData[serviceKey];
    if (!service) return;
    const isConsultation = serviceKey === 'consultation';
    const isGoogle = serviceKey === 'google';

    setIsGoogleService(isGoogle);

    if (offerExpired) {
      setPaymentAmount(service.regular);
      setOriginalAmount(service.regular);
    } else if (isConsultation) {
      setPaymentAmount(service.special);
      setOriginalAmount(service.regular);
    } else if (isGoogle) {
      setPaymentAmount(service.special);
      setOriginalAmount(service.regular);
    } else {
      let originalPrice = isSpecialPrice ? service.special : service.regular;
      let discountedPrice = Math.floor(originalPrice * 0.9);

      if (isFlashSale) {
        discountedPrice = Math.floor(originalPrice * 0.8);
      }

      setPaymentAmount(discountedPrice);
      setOriginalAmount(originalPrice);
    }

    setPaymentService(service.name);
    setIsPaymentOpen(true);
  };



  const getServicePrice = (serviceKey: string): number => {
    const service = priceData[serviceKey];
    if (!service) return 0;

    if (offerExpired) {
      return service.regular!;
    }

    if (serviceKey === 'consultation') return 1;
    if (serviceKey === 'google') return 999;

    if (isFlashSale) {
      return Math.floor(service.special! * 0.8);
    }

    return isSpecialPrice ? service.special! : service.regular!;
  };

  const getDiscountedPrice = (serviceKey: string): number => {
    const service = priceData[serviceKey];
    if (!service) return 0;

    if (offerExpired) {
      return service.regular!;
    }

    if (serviceKey === 'consultation') return 1;
    if (serviceKey === 'google') return 999;

    const originalPrice = getServicePrice(serviceKey);
    return Math.floor(originalPrice * 0.9);
  };

  const servicesList = [
    { key: 'smo', label: 'Social Media' },
    { key: 'seo', label: 'SEO' },
    { key: 'web', label: 'Website' },
    { key: 'ecommerce', label: 'E-commerce' },
    { key: 'social', label: 'Social Setup' },
    { key: 'google', label: 'Google Business' },
    { key: 'consultation', label: 'Consultation' }
  ];

  // Sparkles Effect Component
  const SparklesEffect: React.FC = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-ping text-yellow-300"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        >
          ✨
        </div>
      ))}
    </div>
  );

  // Reset function for development
  const resetAll = (): void => {
    localStorage.removeItem('specialOfferTime');
    localStorage.removeItem('flashSaleOccurred');
    localStorage.removeItem('offerExpired');
    setTimeLeft(180);
    setFlashSaleTime(30);
    setIsSpecialPrice(true);
    setIsFlashSale(true);
    setHasFlashSaleOccurred(false);
    setOfferExpired(false);
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Helmet>
        <title>Limited Time Service Offers & Discounts | JS TECH SOLUTION</title>
        <meta name="description" content="Grab exclusive discounts on digital marketing and web development. Basic plans starting at ₹4,999. Limited time flash sale - extra 20% off!" />
        <meta name="keywords" content="digital marketing offers, website development discount, flash sale SEO, affordable digital services India" />
        <link rel="canonical" href="https://JSTECHSOLUTION.in/offer" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://JSTECHSOLUTION.in/offer" />
        <meta property="og:title" content="Exclusive Digital Service Offers | JS TECH SOLUTION" />
        <meta property="og:description" content="Limited time deals on Web Dev, SEO, and Marketing. Start your project for less." />
        <meta property="og:image" content="https://JSTECHSOLUTION.in/og-offer.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Limited Time Offer - JS TECH SOLUTION" />
        <meta name="twitter:description" content="Don't miss out on these exclusive digital service discounts." />
      </Helmet>

      {/* Developer Reset Button */}
      {process.env.NODE_ENV === 'development' && (
        <button
          onClick={resetAll}
          className="fixed bottom-4 left-4 z-50 bg-red-500 text-white px-3 py-2 rounded-lg text-xs opacity-50 hover:opacity-100 transition-opacity"
        >
          Reset All
        </button>
      )}

      {/* Flash Sale Banner */}
      {isFlashSale && !offerExpired && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 text-center animate-pulse shadow-lg">
          <div className="flex items-center justify-center gap-3 text-sm md:text-base font-bold">
            <Zap className="h-4 w-4 md:h-5 md:w-5 animate-bounce" />
            <span>⚡ FLASH SALE: 20% EXTRA OFF - Ends in {flashSaleTime}s! ⚡</span>
            <Zap className="h-4 w-4 md:h-5 md:w-5 animate-bounce" />
          </div>
        </div>
      )}

      {/* Floating Timer */}
      <div className="fixed top-20 right-4 z-40">
        <div className={`bg-gradient-to-r ${offerExpired ? 'from-gray-600 to-gray-800' : isSpecialPrice ? 'from-green-600 to-emerald-600' : 'from-red-600 to-orange-600'} text-white px-6 py-3 rounded-2xl shadow-2xl animate-pulse border-2 border-yellow-400 backdrop-blur-sm`}>
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 animate-spin" />
            <div className="text-center">
              <div className="text-xs font-semibold text-yellow-200">
                {offerExpired ? '❌ OFFER EXPIRED' : isSpecialPrice ? '⏰ SPECIAL OFFER ENDS IN' : '⏰ OFFER ENDED'}
              </div>
              <div className={`text-lg font-bold font-mono ${offerExpired && 'line-through'}`}>
                {offerExpired ? '00:00' : formatTime(timeLeft)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white pt-20 pb-16 md:py-24 overflow-hidden">
        <SparklesEffect />
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative max-w-7xl mx-auto px-4 text-center">
          {/* Offer Status Banner */}
          {!offerExpired && (
            <div className={`mb-6 p-4 rounded-2xl backdrop-blur-sm border-2 ${isSpecialPrice ? 'bg-green-500/20 border-green-400' : 'bg-red-500/20 border-red-400'} transform hover:scale-105 transition-transform duration-300`}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 md:h-6 md:w-6 animate-pulse" />
                  <span className="text-lg md:text-xl font-bold">
                    {isSpecialPrice ? '⏰ LIMITED TIME OFFER:' : '❌ OFFER ENDED'}
                  </span>
                </div>
                <div className={`text-2xl md:text-3xl font-bold font-mono ${isSpecialPrice ? 'text-yellow-300' : 'text-red-300'}`}>
                  {formatTime(timeLeft)}
                </div>
              </div>
            </div>
          )}

          {/* Flash Sale Badge */}
          {isFlashSale && !offerExpired && (
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm md:text-base font-bold inline-block mb-6 animate-pulse border-2 border-yellow-300 shadow-lg">
              ⚡ FLASH SALE ACTIVE - 20% EXTRA OFF! ⚡
            </div>
          )}

          {/* Main Offer Badge */}
          {!offerExpired && (
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 px-6 py-3 rounded-full text-sm md:text-base font-bold inline-block mb-6 animate-bounce border-2 border-white shadow-lg">
              🎯 EXPERT CONSULTATION AT JUST ₹1! 🎯
            </div>
          )}

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {offerExpired ? (
              <>
                Offer <span className="text-red-300">Expired</span>
                <br />
                <span className="text-yellow-300 text-3xl md:text-5xl">Contact for Current Prices</span>
              </>
            ) : isSpecialPrice ? (
              <>
                Digital Success
                <br />
                <span className="text-yellow-300">Made Affordable</span>
              </>
            ) : (
              <>
                Special Offer
                <br />
                <span className="text-red-300">Has Ended</span>
              </>
            )}
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-blue-100 max-w-4xl mx-auto font-medium leading-relaxed">
            {offerExpired ? (
              "The special offer period has ended. Contact us for current pricing and new offers!"
            ) : isSpecialPrice ? (
              isFlashSale ?
                "🎯 Expert Consultation at ₹1 + ⚡ 20% FLASH SALE on All Premium Services!" :
                "Complete Digital Solution Package - Expert Consultation at ₹1 + 10% Advance Discount!"
            ) : (
              "Special offer period has ended. Contact us for current professional services pricing."
            )}
          </p>

          {/* Quick Price Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-8 max-w-6xl mx-auto">
            {servicesList.map((service) => {
              const data = priceData[service.key];
              if (!data) return null;
              return (
                <div key={service.key} className={`${data.gradient} text-white p-3 rounded-xl transform hover:scale-110 transition-all duration-300 shadow-lg border-2 border-white/30 text-center backdrop-blur-sm`}>
                  <div className="text-2xl mb-2">{data.icon}</div>
                  <div className="text-lg font-bold mb-1">
                    ₹{getServicePrice(service.key).toLocaleString()}
                  </div>
                  <div className="text-xs font-medium opacity-90">{service.label}</div>
                  {!offerExpired && isSpecialPrice && !['consultation', 'google'].includes(service.key) && !isFlashSale && (
                    <div className="text-[10px] bg-white/20 rounded px-1 mt-2 font-semibold">
                      Advance: ₹{getDiscountedPrice(service.key).toLocaleString()}
                    </div>
                  )}
                  {!offerExpired && isFlashSale && !['consultation', 'google'].includes(service.key) && (
                    <div className="text-[10px] bg-purple-500/80 rounded px-1 mt-2 text-white font-semibold">
                      FLASH SALE!
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToOffer}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-purple-900 px-8 py-4 rounded-2xl text-lg font-bold transition-all hover:scale-105 hover:shadow-2xl flex items-center gap-3 shadow-lg"
            >
              <Rocket className="h-5 w-5" />
              {offerExpired ? 'View Services' : 'Explore All Offers'}
              <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsFormOpen(true)}
              className={`px-8 py-4 rounded-2xl text-lg font-bold transition-all hover:scale-105 hover:shadow-2xl flex items-center gap-3 shadow-lg ${offerExpired
                ? 'bg-blue-500 hover:bg-blue-600 text-white'
                : isSpecialPrice
                  ? 'bg-green-500 hover:bg-green-600 text-white border-2 border-green-300'
                  : 'bg-gray-500 hover:bg-gray-600 text-white'
                }`}
            >
              <MessageCircle className="h-5 w-5" />
              {offerExpired ? '📞 Contact Now' : isSpecialPrice ? '💬 Get Special Offer' : '📞 Contact Us'}
            </button>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {[
              { icon: <Shield className="h-5 w-5" />, text: "Secure Payment" },
              { icon: <Check className="h-5 w-5" />, text: "30-Day Support" },
              { icon: <Award className="h-5 w-5" />, text: "Expert Team" },
              { icon: <TrendingUp className="h-5 w-5" />, text: "Proven Results" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <div className="text-yellow-300">
                  {item.icon}
                </div>
                <span className="text-white text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      {!offerExpired && (
        <section className="py-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white relative overflow-hidden">
          <SparklesEffect />
          <div className="relative max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Gift className="h-6 w-6 md:h-8 md:w-8 text-yellow-300 animate-pulse" />
                <div>
                  <div className="text-lg md:text-xl font-bold">Expert Digital Consultation at Just ₹1!</div>
                  <div className="text-sm md:text-base opacity-90">Limited Time Exclusive Offer</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-yellow-300" />
                <span className="text-base md:text-lg font-semibold">
                  {isFlashSale ? '+ 20% FLASH SALE on All Services!' : '+ 10% Extra on Advance Booking'}
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Enhanced Services Section */}
      <section id="offers" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {offerExpired ? (
                <>Our <span className="text-blue-600">Professional</span> Services</>
              ) : (
                <>🎯 Special <span className="text-blue-600">Offer</span> Services 🎯</>
              )}
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              {offerExpired
                ? "Premium digital services designed to accelerate your business growth"
                : "Transform your digital presence with our premium services at special prices"
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {servicesList.map((service) => (
              <div key={service.key} className={`bg-white border-2 ${offerExpired ? 'border-gray-300' : 'border-blue-200'} rounded-3xl p-6 relative overflow-hidden transform hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl group`}>

                {/* Popular Badge */}
                {priceData[service.key]?.popular && !offerExpired && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-4 py-2 rounded-full text-sm font-bold rotate-12 shadow-lg z-10 animate-pulse">
                    <Crown className="h-3 w-3 inline mr-1" />
                    {priceData[service.key]?.badge}
                  </div>
                )}

                {/* Special Offer Badges */}
                {!offerExpired && service.key === 'consultation' && isSpecialPrice && (
                  <div className="absolute -top-2 -left-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold rotate-12 shadow-lg z-10 animate-pulse">
                    🎯 Special
                  </div>
                )}

                {!offerExpired && service.key === 'google' && isSpecialPrice && (
                  <div className="absolute top-2 -left-2 bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-4 py-2 rounded-full text-sm font-bold rotate-12 shadow-lg z-10 animate-pulse">
                    🔥 Hot Deal
                  </div>
                )}

                {!offerExpired && isFlashSale && !['consultation', 'google'].includes(service.key) && (
                  <div className="absolute top-12 -left-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold rotate-12 shadow-lg z-10 animate-pulse">
                    ⚡ 20% OFF
                  </div>
                )}

                {offerExpired && (
                  <div className="absolute -top-2 -right-2 bg-gray-500 text-white px-4 py-2 rounded-full text-sm font-bold rotate-12 shadow-lg z-10">
                    Standard
                  </div>
                )}

                {/* Service Header */}
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-gray-800 mb-3">
                    ₹{getServicePrice(service.key).toLocaleString()}
                  </div>
                  <div className="text-xl font-semibold text-gray-900 mb-2">{priceData[service.key]?.name}</div>
                  {!offerExpired && priceData[service.key] && (
                    <div className="text-gray-500 line-through text-lg">₹{priceData[service.key]?.regular.toLocaleString()}</div>
                  )}

                  {/* Discount Badges */}
                  {!offerExpired && isSpecialPrice && !['consultation', 'google'].includes(service.key) && !isFlashSale && (
                    <div className="mt-3 p-3 bg-green-500/10 rounded-xl border border-green-200">
                      <div className="text-green-700 font-bold text-sm">Advance Booking Discount:</div>
                      <div className="text-green-600 font-bold text-2xl">₹{getDiscountedPrice(service.key).toLocaleString()}</div>
                      <div className="text-green-500 text-sm">Save 10% Extra!</div>
                    </div>
                  )}

                  {!offerExpired && isFlashSale && !['consultation', 'google'].includes(service.key) && (
                    <div className="mt-3 p-3 bg-purple-500/10 rounded-xl border-2 border-purple-300">
                      <div className="text-purple-700 font-bold text-sm">FLASH SALE PRICE:</div>
                      <div className="text-purple-600 font-bold text-2xl">₹{getServicePrice(service.key).toLocaleString()}</div>
                      <div className="text-purple-500 text-sm">20% Instant Discount!</div>
                    </div>
                  )}
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-6 text-sm">
                  {priceData[service.key]?.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 group-hover:translate-x-2 transition-transform duration-300">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={() => openPaymentModal(service.key)}
                    className={`w-full py-4 rounded-2xl font-bold transition-all hover:scale-105 text-center text-base ${offerExpired
                      ? 'bg-blue-500 hover:bg-blue-600 text-white border-2 border-blue-300'
                      : service.key === 'consultation'
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-2 border-purple-300'
                        : service.key === 'google'
                          ? 'bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white border-2 border-yellow-300'
                          : isFlashSale
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-2 border-purple-300'
                            : isSpecialPrice
                              ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white border-2 border-green-300'
                              : 'bg-gray-500 hover:bg-gray-600 text-white'
                      } shadow-lg hover:shadow-xl`}
                  >
                    {offerExpired
                      ? '💳 Book Service'
                      : service.key === 'consultation'
                        ? '🎯 Get Consultation for ₹1!'
                        : service.key === 'google'
                          ? '🔥 Get for ₹999 Now!'
                          : isFlashSale
                            ? '⚡ Grab 20% OFF Now!'
                            : isSpecialPrice
                              ? '💳 Book Now - Save 10%'
                              : '📞 Contact for Price'
                    }
                  </button>
                  <button
                    onClick={() => openQuickForm(priceData[service.key]?.name || '')}
                    className="w-full py-3 rounded-2xl font-bold transition-all hover:scale-105 text-center bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-sm border-2 border-blue-300 shadow-lg hover:shadow-xl"
                  >
                    💬 {offerExpired ? 'Get Detailed Quote' : 'Free Expert Consultation'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white text-center relative overflow-hidden">
        <SparklesEffect />
        <div className="relative max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {offerExpired ? 'Ready to Grow Your Business?' : 'Ready to Transform Your Digital Presence?'}
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            {offerExpired
              ? 'Contact us now for professional digital marketing services!'
              : 'Don\'t miss this limited time opportunity! Start your digital journey today.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open(`https://wa.me/91${WHATSAPP_NUMBER}`, '_blank')}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105 flex items-center gap-3 justify-center shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Now
            </button>
            <button
              onClick={() => window.open(`tel:+91${WHATSAPP_NUMBER}`, '_blank')}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105 flex items-center gap-3 justify-center shadow-lg hover:shadow-xl"
            >
              <Phone className="h-5 w-5" />
              Call: +91 {WHATSAPP_NUMBER}
            </button>
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105 flex items-center gap-3 justify-center shadow-lg hover:shadow-xl"
            >
              <Mail className="h-5 w-5" />
              Email Inquiry
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-blue-400">JSTECHSOLUTION</h3>
              <p className="text-gray-400 text-lg">
                Your trusted partner for digital growth and online business success.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Contact Information</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span className="text-lg">+91 {WHATSAPP_NUMBER}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span className="text-lg">contact@jstechsolution.in</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span className="text-lg">India</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                <button
                  onClick={() => window.open(`https://wa.me/91${WHATSAPP_NUMBER}`, '_blank')}
                  className="bg-green-500 hover:bg-green-600 p-3 rounded-xl transition-all hover:scale-110"
                >
                  <MessageCircle className="h-6 w-6" />
                </button>
                <button
                  onClick={() => window.open(`tel:+91${WHATSAPP_NUMBER}`, '_blank')}
                  className="bg-blue-500 hover:bg-blue-600 p-3 rounded-xl transition-all hover:scale-110"
                >
                  <Phone className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-lg">
              © 2024 JSTECHSOLUTION. All rights reserved. | {offerExpired ? 'Professional Digital Services' : 'Special Limited Time Offer'}
            </p>
          </div>
        </div>
      </footer>

      {/* Payment Modal */}
      {isPaymentOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl border-2 border-purple-400 animate-pop-in">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <CreditCard className="h-6 w-6 text-purple-500" />
                  {offerExpired ? 'Service Booking' : isGoogleService ? 'Special ₹999 Offer' : paymentService.includes('Consultation') ? '₹1 Consultation' : isFlashSale ? 'Flash Sale 20% OFF' : 'Advance Booking'}
                </h3>
                <p className="text-purple-600 font-semibold text-sm mt-2">{paymentService}</p>
              </div>
              <button onClick={() => setIsPaymentOpen(false)} className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-xl transition-colors">
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-6">
              <div className={`p-6 rounded-2xl border-2 ${offerExpired
                ? 'bg-blue-50 border-blue-300'
                : paymentService.includes('Consultation')
                  ? 'bg-purple-50 border-purple-300'
                  : isGoogleService
                    ? 'bg-yellow-50 border-yellow-300'
                    : isFlashSale
                      ? 'bg-purple-50 border-purple-300'
                      : 'bg-green-50 border-green-300'
                }`}>
                <div className="text-center">
                  <div className={`text-3xl font-bold mb-3 ${offerExpired
                    ? 'text-blue-600'
                    : paymentService.includes('Consultation')
                      ? 'text-purple-600'
                      : isGoogleService
                        ? 'text-yellow-600'
                        : isFlashSale
                          ? 'text-purple-600'
                          : 'text-green-600'
                    }`}>
                    ₹{paymentAmount.toLocaleString()}
                  </div>
                  <div className={`font-semibold text-lg ${offerExpired
                    ? 'text-blue-700'
                    : paymentService.includes('Consultation')
                      ? 'text-purple-700'
                      : isGoogleService
                        ? 'text-yellow-700'
                        : isFlashSale
                          ? 'text-purple-700'
                          : 'text-green-700'
                    }`}>
                    {offerExpired
                      ? 'Service Price'
                      : paymentService.includes('Consultation')
                        ? 'Special Consultation Price!'
                        : isGoogleService
                          ? 'Special Limited Price!'
                          : isFlashSale
                            ? 'Flash Sale Price - 20% OFF!'
                            : 'After 10% Advance Discount'
                    }
                  </div>
                  {!offerExpired && !paymentService.includes('Consultation') && !isGoogleService && (
                    <div className="text-gray-500 text-sm line-through mt-2">
                      Original: ₹{originalAmount.toLocaleString()}
                    </div>
                  )}
                </div>
              </div>

              {/* UPI Payment Section */}
              <div className="bg-white border-2 border-slate-100 rounded-3xl p-5 shadow-sm text-center">
                <div className="text-slate-500 font-bold text-sm mb-4 uppercase tracking-wider">Pay securely via UPI</div>
                <div className="flex justify-center mb-6">
                  <img 
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(`upi://pay?pa=kamleshks123@ybl&pn=JS%20Tech%20Solution&am=${paymentAmount}&cu=INR`)}`} 
                    alt="Scan to Pay"
                    className="w-40 h-40 md:w-48 md:h-48 object-contain rounded-2xl border-4 border-slate-50 p-2 shadow-inner"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <a
                    href={`upi://pay?pa=kamleshks123@ybl&pn=JS%20Tech%20Solution&am=${paymentAmount}&cu=INR`}
                    className="w-full py-4 rounded-[1.5rem] font-black text-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-3 shadow-[0_10px_20px_-10px_rgba(34,197,94,0.4)] bg-gradient-to-r from-green-500 to-emerald-600 text-white active:scale-95"
                    onClick={() => {
                        // Mark as success intent so user can fill the success form immediately upon click
                        setIsSuccessFormOpen(true);
                        setSuccessFormData(prev => ({ ...prev, service: paymentService, amount: paymentAmount.toString() }));
                        setIsPaymentOpen(false);
                    }}
                  >
                    <Smartphone className="h-6 w-6" /> Pay ₹{paymentAmount.toLocaleString()} via UPI App
                  </a>
                  <button
                    onClick={() => {
                       navigator.clipboard.writeText('kamleshks123@ybl');
                       alert("UPI ID copied: kamleshks123@ybl");
                    }}
                    className="w-full py-3 rounded-xl font-bold text-sm text-slate-600 bg-slate-50 border border-slate-200 hover:bg-slate-100 hover:text-slate-800 flex justify-center items-center gap-2 transition-colors"
                  >
                    <Copy className="h-4 w-4" /> Copy UPI ID: kamleshks123@ybl
                  </button>
                </div>
              </div>

              <button
                onClick={() => { setIsPaymentOpen(false); setIsFormOpen(true); }}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-3 rounded-2xl font-bold transition-all hover:scale-105 text-center block border-2 border-blue-400 text-base"
              >
                💬 Contact Expert First
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Form Modal */}
      {isSuccessFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl border-2 border-green-400 animate-pop-in">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <Check className="h-6 w-6 text-green-500" />
                  Payment Successful! 🎉
                </h3>
                <p className="text-green-600 font-semibold text-sm mt-2">Complete your details to start service</p>
              </div>
              <button onClick={() => setIsSuccessFormOpen(false)} className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-xl transition-colors">
                <X className="h-6 w-6" />
              </button>
            </div>

            <form onSubmit={handleSuccessSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={successFormData.name}
                  onChange={handleSuccessFormChange}
                  className="w-full px-4 py-3 border border-green-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-base"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={successFormData.email}
                  onChange={handleSuccessFormChange}
                  className="w-full px-4 py-3 border border-green-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-base"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">UTR Number *</label>
                <input
                  type="text"
                  name="utr"
                  required
                  value={successFormData.utr}
                  onChange={handleSuccessFormChange}
                  className="w-full px-4 py-3 border border-green-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-base"
                  placeholder="Enter UTR number from payment"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service *</label>
                <input
                  type="text"
                  name="service"
                  required
                  value={successFormData.service}
                  onChange={handleSuccessFormChange}
                  className="w-full px-4 py-3 border border-green-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-base bg-gray-50"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Amount Paid *</label>
                <input
                  type="text"
                  name="amount"
                  required
                  value={successFormData.amount}
                  onChange={handleSuccessFormChange}
                  className="w-full px-4 py-3 border border-green-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-base bg-gray-50"
                  readOnly
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-2xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-3 text-lg shadow-lg bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white border-2 border-green-400"
              >
                <Send className="h-5 w-5" />
                Submit & Start Service
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Contact Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl border-2 border-purple-400">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {offerExpired ? '📞 Contact Us' : '🎯 Special Offer Application'}
                </h3>
                {selectedService && <p className="text-purple-600 font-semibold text-sm mt-2">{selectedService}</p>}
              </div>
              <button onClick={() => setIsFormOpen(false)} className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-xl transition-colors">
                <X className="h-6 w-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-purple-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-base"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-purple-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-base"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-purple-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-base"
                  placeholder="Enter your WhatsApp number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In *</label>
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-purple-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-base"
                >
                  <option value="">Select your service</option>
                   {servicesList.filter(s => !!priceData[s.key]).map(service => (
                    <option key={service.key} value={priceData[service.key]?.name}>
                      {priceData[service.key]?.name} - ₹{getServicePrice(service.key).toLocaleString()}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Requirements</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-purple-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-base"
                  placeholder="Tell us about your requirements..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-2xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-3 text-lg shadow-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-2 border-purple-400"
              >
                <Send className="h-5 w-5" />
                {offerExpired ? 'Send Inquiry' : 'Send Special Offer Request'}
              </button>
            </form>
          </div>
        </div>
      )}

      <style>{`
        @keyframes pop-in {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-pop-in {
          animation: pop-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Offer;