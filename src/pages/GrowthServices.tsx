import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { waLink, TEL_LINK, PHONE_DISPLAY } from "../config/contact";
import {
  Check,
  Star,
  Rocket,
  Clock,
  Users,
  MessageCircle,
  Phone,
  X,
  Send,
  CreditCard,
  Shield,
  Search,
  Globe,
  ShoppingCart,
  ThumbsUp,
  Eye,
  Target,
  Sparkles,
  Gift,
  Award,
  Heart,
  Quote,
  ChevronDown,
  MapPin,
  Mail,
  Zap,
  Instagram,
  Facebook,
  Linkedin,
  TrendingUp,
  DollarSign,
  BadgeCheck,
} from "lucide-react";
import {
  instagramServices,
  facebookServices,
  linkedinServices,
  websiteServices,
  growthSeoServices as seoServices,
  allGrowthServices as allServices,
  GrowthService as Service
} from "../data/pricing";
import { usePartnerTracking } from "../hooks/usePartnerTracking";

const GrowthServices: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isSuccessFormOpen, setIsSuccessFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [quantity, setQuantity] = useState(1000);
  const [timeLeft, setTimeLeft] = useState(180);
  const [flashSaleTime, setFlashSaleTime] = useState(30);
  const [isSpecialPrice, setIsSpecialPrice] = useState(true);
  const [isFlashSale, setIsFlashSale] = useState(true);
  const [hasFlashSaleOccurred, setHasFlashSaleOccurred] = useState(false);
  const [offerExpired, setOfferExpired] = useState(false);
  const [activeCategory, setActiveCategory] = useState("instagram");
  const { recordCommission } = usePartnerTracking();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const [successFormData, setSuccessFormData] = useState({
    name: "",
    email: "",
    utr: "",
    service: "",
    amount: "",
    quantity: "",
    link: ""
  });

  const [paymentService, setPaymentService] = useState("");
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [originalAmount, setOriginalAmount] = useState(0);

  // ✅ Environment variables
  const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID;

  const categories = [
    { id: "instagram", name: "Instagram", icon: <Instagram className="h-4 w-4 md:h-5 md:w-5" />, color: "bg-pink-600" },
    { id: "facebook", name: "Facebook", icon: <Facebook className="h-4 w-4 md:h-5 md:w-5" />, color: "bg-blue-600" },
    { id: "linkedin", name: "LinkedIn", icon: <Linkedin className="h-4 w-4 md:h-5 md:w-5" />, color: "bg-blue-800" },
    { id: "website", name: "Traffic", icon: <Globe className="h-4 w-4 md:h-5 md:w-5" />, color: "bg-green-600" },
    { id: "seo", name: "SEO", icon: <Search className="h-4 w-4 md:h-5 md:w-5" />, color: "bg-purple-600" }
  ];

  const categoryServices = {
    instagram: instagramServices,
    facebook: facebookServices,
    linkedin: linkedinServices,
    website: websiteServices,
    seo: seoServices
  };


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

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const calculatePrice = (service: Service, qty: number) => {
    const pricePerUnit = service.price / (service.id.includes('seo-backlinks-premium') ? 300 : 1000);
    let total = pricePerUnit * qty;

    // Apply flash sale discount
    if (isFlashSale && !offerExpired) {
      total = total * 0.8; // 20% off
    }

    return Math.round(total);
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSuccessFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setSuccessFormData({
      ...successFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `🎯 JS TECH SOLUTION Growth Services Inquiry 🎯\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nMessage: ${formData.message}`;

    window.open(waLink(whatsappMessage), '_blank');

    setIsFormOpen(false);
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleSuccessSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `✅ JS TECH SOLUTION Payment Success 🎯\n\nPayment Details:\nName: ${successFormData.name}\nEmail: ${successFormData.email}\nUTR Number: ${successFormData.utr}\nService: ${successFormData.service}\nQuantity: ${successFormData.quantity}\nAmount Paid: ₹${successFormData.amount}\nLink: ${successFormData.link}\n\nPlease verify my payment and start the service!`;

    window.open(waLink(whatsappMessage), '_blank');

    setIsSuccessFormOpen(false);
    setSuccessFormData({ name: "", email: "", utr: "", service: "", amount: "", quantity: "", link: "" });
    alert("Thank you! We'll verify your payment and start your service within 24 hours. 🎉");
  };

  const openQuickForm = (serviceName: string) => {
    setFormData(prev => ({ ...prev, service: serviceName }));
    setIsFormOpen(true);
  };

  const openPaymentModal = (service: Service) => {
    setSelectedService(service);
    setQuantity(service.min);
    const calculatedAmount = calculatePrice(service, service.min);
    setPaymentAmount(calculatedAmount);
    setOriginalAmount(Math.round((service.price / (service.id.includes('seo-backlinks-premium') ? 300 : 1000)) * service.min));
    setPaymentService(service.name);
    setIsPaymentOpen(true);
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (selectedService) {
      const clampedQuantity = Math.max(selectedService.min, Math.min(selectedService.max, newQuantity));
      setQuantity(clampedQuantity);
      const calculatedAmount = calculatePrice(selectedService, clampedQuantity);
      setPaymentAmount(calculatedAmount);
      setOriginalAmount(Math.round((selectedService.price / (selectedService.id.includes('seo-backlinks-premium') ? 300 : 1000)) * clampedQuantity));
    }
  };

  const initiateRazorpayPayment = async () => {
    try {
      if (!window.Razorpay) {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);

        await new Promise((resolve) => {
          script.onload = resolve;
        });
      }

      const options = {
        key: RAZORPAY_KEY_ID,
        amount: paymentAmount * 100,
        currency: 'INR',
        name: 'JS TECH SOLUTION - Premium Growth Services',
        description: `${selectedService?.name} - Quantity: ${quantity}`,
        image: '/logo.png',
        handler: async function (response: any) {
          // Open success form after payment
          setIsSuccessFormOpen(true);
          setSuccessFormData(prev => ({
            ...prev,
            service: paymentService,
            amount: paymentAmount.toString(),
            quantity: quantity.toString()
          }));
          setIsPaymentOpen(false);

          // Record commission
          await recordCommission(paymentAmount, paymentService, response.razorpay_payment_id);

          // Mark flash sale as used
          if (isFlashSale) {
            setHasFlashSaleOccurred(true);
            localStorage.setItem('flashSaleOccurred', 'true');
          }
        },
        prefill: {
          name: formData.name || 'Customer',
          email: formData.email || 'customer@example.com',
          contact: formData.phone || ''
        },
        notes: {
          service: paymentService,
          quantity: quantity.toString(),
          type: 'Growth Service'
        },
        theme: {
          color: '#F59E0B'
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();

    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again or contact us on WhatsApp.');
    }
  };

  // Sparkles Component
  const SparklesEffect = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(10)].map((_, i) => (
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

  // Reset everything (for testing)
  const resetAll = () => {
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50" style={{ fontFamily: "'Haboro Serif', serif" }}>
      <Helmet>
        <title>Premium Growth Services - Instagram, Facebook, LinkedIn, SEO | JS TECH SOLUTION</title>
        <meta name="description" content="Premium growth services: Instagram followers, likes, views | Facebook services | LinkedIn followers | Website traffic | SEO Backlinks. Boost your social media growth with JS TECH SOLUTION!" />
        <link href="https://fonts.googleapis.com/css2?family=Haboro+Serif:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>

      {/* Developer Reset Button (Hidden in production) */}
      {process.env.NODE_ENV === 'development' && (
        <button
          onClick={resetAll}
          className="fixed bottom-4 left-4 z-50 bg-red-500 text-white px-3 py-2 rounded-lg text-xs opacity-50 hover:opacity-100"
        >
          Reset All
        </button>
      )}

      {/* Flash Sale Banner */}
      {isFlashSale && !offerExpired && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 text-center animate-pulse">
          <div className="flex items-center justify-center gap-3 text-sm md:text-base">
            <Zap className="h-4 w-4 md:h-5 md:w-5 animate-bounce" />
            <span className="font-bold">FLASH SALE: 20% OFF - Ends in {flashSaleTime}s!</span>
            <Zap className="h-4 w-4 md:h-5 md:w-5 animate-bounce" />
          </div>
        </div>
      )}

      {/* Floating Timer */}
      <div className="fixed top-4 right-4 z-40">
        <div className={`bg-gradient-to-r ${offerExpired ? 'from-gray-500 to-gray-700' : isSpecialPrice ? 'from-green-500 to-emerald-500' : 'from-red-500 to-orange-500'} text-white px-4 py-2 rounded-full shadow-2xl animate-pulse border-2 border-yellow-300`}>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 animate-spin" />
            <div className="text-center">
              <div className="text-xs font-semibold">
                {offerExpired ? '❌ OFFER EXPIRED' : isSpecialPrice ? '⏰ ENDS IN' : '⏰ ENDED'}
              </div>
              <div className={`text-sm font-bold ${offerExpired && 'line-through'}`}>
                {offerExpired ? '00:00' : formatTime(timeLeft)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 text-white pt-16 pb-12 md:py-20 overflow-hidden">
        <SparklesEffect />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          {!offerExpired && (
            <div className={`mb-4 md:mb-6 p-3 md:p-4 rounded-2xl ${isSpecialPrice ? 'bg-green-500/20 border border-green-300' : 'bg-red-500/20 border border-red-300'} backdrop-blur-sm`}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 md:h-6 md:w-6 animate-pulse" />
                  <span className="text-sm md:text-lg font-bold">{isSpecialPrice ? '⏰ SPECIAL OFFER ENDS IN:' : '❌ OFFER EXPIRED'}</span>
                </div>
                <div className={`text-xl md:text-2xl font-bold ${isSpecialPrice ? 'text-yellow-300' : 'text-red-300'} font-mono`}>
                  {formatTime(timeLeft)}
                </div>
              </div>
            </div>
          )}

          {isFlashSale && !offerExpired && (
            <div className="bg-purple-500 text-white px-4 py-2 rounded-full text-xs md:text-sm font-bold inline-block mb-4 md:mb-6 animate-pulse border-2 border-yellow-300">
              ⚡ FLASH SALE: 20% OFF - {flashSaleTime}s LEFT!
            </div>
          )}

          <div className="mb-4 md:mb-6">
            <div className="flex items-center justify-center gap-2 mb-3">
              <DollarSign className="h-6 w-6 md:h-8 md:w-8 text-yellow-300" />
              <h1 className="text-2xl md:text-4xl font-bold text-yellow-300">JS TECH SOLUTION</h1>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              {offerExpired ? (
                <>
                  Premium <span className="text-yellow-300">Growth</span><br />
                  <span className="text-blue-300">Services</span>
                </>
              ) : (
                <>
                  Premium <span className="text-yellow-300">Growth</span><br />
                  <span className="text-blue-300">Services</span>
                </>
              )}
            </h2>
          </div>

          <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-purple-100 max-w-4xl mx-auto font-medium">
            {offerExpired ? (
              "Get the best growth services for Instagram, Facebook, LinkedIn, SEO and more!"
            ) : (
              "Boost your social media presence with our premium growth services at unbeatable prices!"
            )}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <button onClick={scrollToServices} className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-bold transition-all hover:scale-105 hover:shadow-xl flex items-center gap-2 shadow-lg justify-center">
              <Rocket className="h-4 w-4 md:h-5 md:w-5" />
              View Growth Services
            </button>
            <button onClick={() => setIsFormOpen(true)} className="bg-green-500 hover:bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-bold transition-all hover:scale-105 hover:shadow-xl flex items-center gap-2 shadow-lg justify-center">
              <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
              Get Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-200">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">5000+</h3>
              </div>
              <p className="text-sm md:text-base text-gray-600">Happy Clients</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200">
              <div className="flex items-center justify-center gap-2 mb-2">
                <BadgeCheck className="h-5 w-5 text-green-600" />
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">50K+</h3>
              </div>
              <p className="text-sm md:text-base text-gray-600">Orders Completed</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-200">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="h-5 w-5 text-purple-600" />
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">4.9/5</h3>
              </div>
              <p className="text-sm md:text-base text-gray-600">Customer Rating</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border-2 border-orange-200">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="h-5 w-5 text-orange-600" />
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">24/7</h3>
              </div>
              <p className="text-sm md:text-base text-gray-600">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <DollarSign className="h-8 w-8 text-green-600" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                JS TECH SOLUTION <span className="text-blue-500">Services</span>
              </h2>
            </div>
            <p className="text-lg md:text-xl text-gray-600">
              Boost your social media presence with our premium growth services
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold transition-all ${activeCategory === category.id
                  ? `${category.color} text-white shadow-lg transform scale-105`
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categoryServices[activeCategory as keyof typeof categoryServices]?.map((service) => (
              <div key={service.id} className="bg-gradient-to-br from-white to-gray-50 border-2 border-blue-200 rounded-2xl p-6 relative overflow-hidden transform hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl">
                {!offerExpired && isFlashSale && (
                  <div className="absolute -top-2 -right-2 bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold rotate-12 shadow-lg z-10 animate-pulse">
                    ⚡ 20% OFF
                  </div>
                )}

                {/* Special badge for SEO Premium Package */}
                {service.id === 'seo-backlinks-premium' && (
                  <div className="absolute -top-2 -left-2 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold rotate-12 shadow-lg z-10 animate-pulse">
                    🔥 HOT DEAL
                  </div>
                )}

                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{service.name}</h3>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  {service.id === 'seo-backlinks-premium' ? (
                    <>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-2xl font-bold text-gray-900">
                          ₹{service.price}
                        </div>
                        <div className="text-lg text-gray-500 line-through">
                          ₹2999
                        </div>
                        <div className="text-sm font-bold text-green-600 bg-green-100 px-2 py-1 rounded">
                          Save 77%
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        For 300 Premium Backlinks
                      </div>
                    </>
                  ) : service.id.includes('seo-backlinks-basic') ? (
                    <div className="text-2xl font-bold text-gray-900 mb-2">
                      ₹{service.price} / backlink
                    </div>
                  ) : (
                    <>
                      <div className="text-2xl font-bold text-gray-900 mb-2">
                        ₹{service.price} / 1000
                      </div>
                      {!offerExpired && isFlashSale && (
                        <div className="text-green-600 font-semibold text-sm">
                          Flash Sale: ₹{(service.price * 0.8).toFixed(2)} / 1000
                        </div>
                      )}
                    </>
                  )}
                </div>

                <ul className="space-y-2 mb-4 text-sm text-gray-700">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <button
                    onClick={() => openPaymentModal(service)}
                    className={`w-full py-3 rounded-xl font-bold transition-all hover:scale-105 text-center ${offerExpired
                      ? 'bg-blue-500 hover:bg-blue-600 text-white'
                      : isFlashSale
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white'
                        : service.id === 'seo-backlinks-premium'
                          ? 'bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white'
                          : 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white'
                      }`}
                  >
                    {offerExpired
                      ? 'Order Now'
                      : isFlashSale
                        ? '⚡ Grab 20% OFF Now!'
                        : service.id === 'seo-backlinks-premium'
                          ? '🔥 Grab 77% OFF Now!'
                          : 'Order Now'
                    }
                  </button>
                  <button
                    onClick={() => openQuickForm(service.name)}
                    className="w-full py-2 rounded-xl font-bold transition-all hover:scale-105 text-center bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-sm"
                  >
                    💬 Get More Info
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <BadgeCheck className="h-8 w-8 text-green-600" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Why Choose <span className="text-blue-500">JS TECH SOLUTION</span>?
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-2xl border-2 border-green-200 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">100% Safe & Secure</h3>
              <p className="text-gray-600">All our services are completely safe with guaranteed results and secure payment methods.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border-2 border-blue-200 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Delivery</h3>
              <p className="text-gray-600">Instant start with super fast delivery. Most services begin within minutes of order confirmation.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border-2 border-purple-200 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support via WhatsApp and phone calls to assist you anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-blue-500 to-purple-500 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <DollarSign className="h-8 w-8 text-yellow-300" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Ready to Boost Your Social Media Growth?
            </h2>
          </div>
          <p className="text-lg md:text-xl mb-6">
            Contact JS TECH SOLUTION now and get the best growth services!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <button
              onClick={() => window.open(waLink(), '_blank')}
              className="bg-green-500 hover:bg-green-600 text-white px-6 md:px-8 py-3 rounded-xl font-bold transition-all hover:scale-105 flex items-center gap-2 justify-center"
            >
              <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
              WhatsApp Now
            </button>
            <button
              onClick={() => window.open(TEL_LINK, '_blank')}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 md:px-8 py-3 rounded-xl font-bold transition-all hover:scale-105 flex items-center gap-2 justify-center"
            >
              <Phone className="h-4 w-4 md:h-5 md:w-5" />
              Call: {PHONE_DISPLAY}
            </button>
          </div>
        </div>
      </section>



      {/* Payment Modal */}
      {isPaymentOpen && selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border-2 border-purple-300">
            <div className="flex justify-between items-center mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <DollarSign className="h-5 w-5 text-purple-500" />
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">JS TECH SOLUTION</h3>
                </div>
                <h4 className="text-lg font-bold text-gray-700 flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-purple-500" />
                  Order {selectedService.name}
                </h4>
                <p className="text-purple-600 font-semibold text-sm mt-1">{selectedService.description}</p>
              </div>
              <button onClick={() => setIsPaymentOpen(false)} className="text-gray-500 hover:text-gray-700 p-1 hover:bg-gray-100 rounded-full">
                <X className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            </div>

            <div className="space-y-4">
              {/* Quantity Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleQuantityChange(quantity - (selectedService.id.includes('seo-backlinks-premium') ? 300 : 100))}
                    disabled={quantity <= selectedService.min}
                    className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center disabled:opacity-50"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => handleQuantityChange(parseInt(e.target.value) || selectedService.min)}
                    min={selectedService.min}
                    max={selectedService.max}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-center"
                  />
                  <button
                    onClick={() => handleQuantityChange(quantity + (selectedService.id.includes('seo-backlinks-premium') ? 300 : 100))}
                    disabled={quantity >= selectedService.max}
                    className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center disabled:opacity-50"
                  >
                    +
                  </button>
                </div>
                <div className="text-xs text-gray-500 mt-1 text-center">
                  Min: {selectedService.min} - Max: {selectedService.max.toLocaleString()}
                </div>
              </div>

              {/* Price Display */}
              <div className={`p-4 rounded-xl border-2 ${isFlashSale && !offerExpired ? 'bg-purple-50 border-purple-200' :
                selectedService.id === 'seo-backlinks-premium' ? 'bg-red-50 border-red-200' : 'bg-green-50 border-green-200'
                }`}>
                <div className="text-center">
                  <div className={`text-2xl md:text-3xl font-bold mb-2 ${isFlashSale && !offerExpired ? 'text-purple-600' :
                    selectedService.id === 'seo-backlinks-premium' ? 'text-red-600' : 'text-green-600'
                    }`}>
                    ₹{paymentAmount.toLocaleString()}
                  </div>
                  <div className="font-semibold text-sm md:text-base">
                    {isFlashSale && !offerExpired ? 'Flash Sale 20% OFF!' :
                      selectedService.id === 'seo-backlinks-premium' ? '77% OFF Premium Package!' : 'Total Amount'}
                  </div>
                  {(isFlashSale && !offerExpired) || selectedService.id === 'seo-backlinks-premium' ? (
                    <div className="text-gray-500 text-sm line-through mt-1">
                      Original: ₹{originalAmount.toLocaleString()}
                    </div>
                  ) : null}
                  <div className="text-gray-600 text-sm mt-1">
                    {quantity.toLocaleString()} {selectedService.name}
                  </div>
                </div>
              </div>

              <button
                onClick={initiateRazorpayPayment}
                className={`w-full py-3 md:py-4 rounded-xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-2 md:gap-3 text-base md:text-lg shadow-lg ${isFlashSale && !offerExpired
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white'
                  : selectedService.id === 'seo-backlinks-premium'
                    ? 'bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white'
                    : 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white'
                  }`}
              >
                <CreditCard className="h-4 w-4 md:h-5 md:w-5" />
                Pay ₹{paymentAmount.toLocaleString()} Now
              </button>

              <button
                onClick={() => { setIsPaymentOpen(false); setIsFormOpen(true); }}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-2 md:py-3 rounded-xl font-bold transition-all hover:scale-105 text-center block border-2 border-blue-300 text-sm md:text-base"
              >
                💬 Contact First Instead
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Form Modal - Opens after payment */}
      {isSuccessFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border-2 border-green-300">
            <div className="flex justify-between items-center mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <DollarSign className="h-5 w-5 text-green-500" />
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">JS TECH SOLUTION</h3>
                </div>
                <h4 className="text-lg font-bold text-gray-700 flex items-center gap-2">
                  <Check className="h-5 w-5 md:h-6 md:w-6 text-green-500" />
                  Payment Successful! 🎉
                </h4>
                <p className="text-green-600 font-semibold text-sm mt-1">Complete your details to start service</p>
              </div>
              <button onClick={() => setIsSuccessFormOpen(false)} className="text-gray-500 hover:text-gray-700 p-1 hover:bg-gray-100 rounded-full">
                <X className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            </div>

            <form onSubmit={handleSuccessSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={successFormData.name}
                  onChange={handleSuccessFormChange}
                  className="w-full px-4 py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={successFormData.email}
                  onChange={handleSuccessFormChange}
                  className="w-full px-4 py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">UTR Number *</label>
                <input
                  type="text"
                  name="utr"
                  required
                  value={successFormData.utr}
                  onChange={handleSuccessFormChange}
                  className="w-full px-4 py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter UTR number from payment"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Profile/Link *</label>
                <input
                  type="text"
                  name="link"
                  required
                  value={successFormData.link}
                  onChange={handleSuccessFormChange}
                  className="w-full px-4 py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your Instagram/Facebook profile link"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Service</label>
                  <input
                    type="text"
                    name="service"
                    required
                    value={successFormData.service}
                    onChange={handleSuccessFormChange}
                    className="w-full px-4 py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-50"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                  <input
                    type="text"
                    name="quantity"
                    required
                    value={successFormData.quantity}
                    onChange={handleSuccessFormChange}
                    className="w-full px-4 py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-50"
                    readOnly
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Amount Paid</label>
                <input
                  type="text"
                  name="amount"
                  required
                  value={successFormData.amount}
                  onChange={handleSuccessFormChange}
                  className="w-full px-4 py-3 border border-green-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-50"
                  readOnly
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 md:py-4 rounded-xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-2 md:gap-3 text-base md:text-lg shadow-lg bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white border-2 border-green-300"
              >
                <Send className="h-4 w-4 md:h-5 md:w-5" />
                Submit & Start Service
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Contact Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl border-2 border-purple-300">
            <div className="flex justify-between items-center mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <DollarSign className="h-5 w-5 text-purple-500" />
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">JS TECH SOLUTION</h3>
                </div>
                <h4 className="text-lg font-bold text-gray-700">Get Free Growth Consultation</h4>
                <p className="text-purple-600 font-semibold text-sm mt-1">We'll help you choose the right growth service</p>
              </div>
              <button onClick={() => setIsFormOpen(false)} className="text-gray-500 hover:text-gray-700 p-1 hover:bg-gray-100 rounded-full">
                <X className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your WhatsApp number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Interested In</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select a growth service</option>
                  {allServices.map(service => (
                    <option key={service.id} value={service.name}>
                      {service.name} - {service.id.includes('seo-backlinks-premium') ? '₹699 for 300' : service.id.includes('seo-backlinks-basic') ? '₹3 per backlink' : `₹${service.price}/1000`}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Requirements</label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Tell us about your growth requirements..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 md:py-4 rounded-xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-2 md:gap-3 text-base md:text-lg shadow-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-2 border-purple-300"
              >
                <Send className="h-4 w-4 md:h-5 md:w-5" />
                Send Growth Inquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default GrowthServices;
