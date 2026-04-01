import React, { useState } from 'react';
import {
  Check, Zap, Shield, Clock, Users, TrendingUp, Video, Mail,
  MessageCircle, CreditCard, Crown, Rocket, Award, Sparkles, Phone,
  Search, ThumbsUp, MapPin, BarChart3, Instagram, Gift, X, Smartphone, Copy
} from 'lucide-react';
import { Helmet } from 'react-helmet';
import InquiryModal from '../components/InquiryModal';
import { PHONE_NUMBER, WHATSAPP_NUMBER } from '../config/contact';
import {
  websiteIndustryPackages,
  seoServices,
  backlinkServices,
  gmbServices,
  backlinkRemovalServices,
  socialMediaServices,
  uiuxServices,
  mobileAppServices,
  contentServices,
  videoServices,
  graphicServices,
  emailServices,
  whatsappServices,
  seoAuditService,
  quickServices,
  Plan, ServiceCategory
} from '../data/pricing';
import { usePartnerTracking } from '../hooks/usePartnerTracking';



interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
  description: string;
}

const Pricing: React.FC = () => {
  const [isPaymentOpen, setIsPaymentOpen] = useState<boolean>(false);
  const [paymentService, setPaymentService] = useState<string>("");
  const [paymentAmount, setPaymentAmount] = useState<number>(0);
  const [originalAmount, setOriginalAmount] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<string>('website');
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const [manualRefCode, setManualRefCode] = useState<string>('');
  const { getCookie } = usePartnerTracking();

  // Handle Direct Purchase & Category Navigation
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const action = params.get('action');
    const service = params.get('service');
    const amount = params.get('amount');
    const category = params.get('category');

    // Handle Category Auto-Switch
    if (category) {
      const normalizedCat = category.toLowerCase().split('-')[0];
      if (normalizedCat) {
        const match = tabs.find(t => t.id.includes(normalizedCat) || normalizedCat.includes(t.id));
        if (match) setActiveTab(match.id);
      }
    }

    if (action === 'buy' && service && amount) {
      setTimeout(() => {
        const parsedAmount = parseFloat(amount);
        if (!isNaN(parsedAmount)) {
          setPaymentAmount(parsedAmount);
          setOriginalAmount(parsedAmount);
          setPaymentService(decodedService(service));
          setIsPaymentOpen(true);
        }
      }, 500);
    }
  }, []);

  const decodedService = (str: string) => {
    try { return decodeURIComponent(str); } catch (e) { return str; }
  };

  // Inquiry Modal State
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryService, setInquiryService] = useState("");

  const handleInquiry = (serviceName: string) => {
    setInquiryService(serviceName);
    setIsInquiryOpen(true);
  };



  const openPaymentModal = (serviceName: string, currentPrice: number, planName?: string): void => {
    const discountedPrice = Math.floor(currentPrice * 0.95);
    setPaymentAmount(discountedPrice);
    setOriginalAmount(currentPrice);
    setPaymentService(serviceName);
    setSelectedPlan(planName || '');

    const existingRef = getCookie('es_referral');
    const existingAff = getCookie('es_affiliate');

    if (existingRef) {
      setManualRefCode(existingRef);
    } else if (existingAff) {
      setManualRefCode(existingAff);
    }

    setIsPaymentOpen(true);
  };

  // Nav Tabs
  const tabs: Tab[] = [
    { id: 'website', label: '🌐 Website Development', icon: <Rocket className="h-4 w-4" />, description: 'Professional websites that convert visitors into customers' },
    { id: 'seo', label: '🔍 SEO Packages', icon: <Search className="h-4 w-4" />, description: 'Complete SEO solutions to boost your search rankings' },
    { id: 'backlinks', label: '⚡ Backlink Packages', icon: <ThumbsUp className="h-4 w-4" />, description: 'Build high-quality backlinks for better domain authority' },
    { id: 'gmb', label: '📍 GMB Services', icon: <MapPin className="h-4 w-4" />, description: 'Google My Business setup and ranking services' },
    { id: 'uiux', label: '🎨 UI/UX Design', icon: <Award className="h-4 w-4" />, description: 'User-centered design for websites and applications' },
    { id: 'app', label: '📱 App Dev', icon: <Rocket className="h-4 w-4" />, description: 'Custom mobile application development' },
    { id: 'content', label: '📝 Content Writing', icon: <Video className="h-4 w-4" />, description: 'Engaging content for your brand' },
    { id: 'video', label: '🎥 Video Marketing', icon: <Video className="h-4 w-4" />, description: 'Professional video production and editing' },
    { id: 'graphic', label: '✨ Graphic Design', icon: <Sparkles className="h-4 w-4" />, description: 'Creative visual designs for your business' },
    { id: 'email', label: '📧 Email Marketing', icon: <Mail className="h-4 w-4" />, description: 'Effective email campaigns that convert' },
    { id: 'whatsapp', label: '💬 WhatsApp Marketing', icon: <MessageCircle className="h-4 w-4" />, description: 'Direct customer engagement via WhatsApp' },
    { id: 'removal', label: '🛡️ Backlink Removal', icon: <Shield className="h-4 w-4" />, description: 'Remove toxic backlinks and protect your website' },
    { id: 'social', label: '📱 Social Media', icon: <Instagram className="h-4 w-4" />, description: 'Grow your social presence and engage your audience' },
    { id: 'audit', label: '📊 SEO Audit', icon: <BarChart3 className="h-4 w-4" />, description: 'Comprehensive website analysis and recommendations' },
    { id: 'quick', label: '🚀 Quick Services', icon: <Zap className="h-4 w-4" />, description: 'Get started quickly with our essential digital services' }
  ];

  const benefitItems = [
    { icon: <Shield className="h-6 w-6" />, text: "30-Day Money Back Guarantee" },
    { icon: <Zap className="h-6 w-6" />, text: "24/7 Priority Support" },
    { icon: <Award className="h-6 w-6" />, text: "Certified Experts" },
    { icon: <Clock className="h-6 w-6" />, text: "Quick Delivery" }
  ];

  const calculateDiscount = (currentPrice: number, originalPrice: number): number => {
    if (!originalPrice || originalPrice === 0) return 0;
    return Math.round((1 - currentPrice / originalPrice) * 100);
  };

  const getOriginalPriceNumber = (priceString?: string): number => {
    if (!priceString) return 0;
    return parseInt(priceString.toString().replace(/[^0-9]/g, '')) || 0;
  };

  const getWhatsAppUrl = (message: string): string => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  // Section Components
  const WebsiteDevelopmentSection = () => (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Professional Website Development</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Get stunning, responsive websites tailored for your industry</p>
        </div>
        <div className="space-y-24">
          {websiteIndustryPackages.map((group, groupIndex) => (
            <div key={groupIndex} className="scroll-mt-24" id={group.title.toLowerCase().replace(/\s/g, '-')}>
              <div className="flex items-center justify-center mb-12">
                <span className="bg-blue-100 text-blue-800 px-6 py-2 rounded-full text-lg font-bold uppercase tracking-wider">
                  {group.title}
                </span>
              </div>
              <div className="space-y-20">
                {group.services.map((service, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200">
                    <div className="text-center mb-12">
                      <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="bg-blue-100 text-blue-600 p-3 rounded-2xl">{service.icon}</div>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{service.category}</h3>
                      </div>
                      <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {service.plans.map((plan, planIndex) => (
                        <PlanCard key={planIndex} plan={plan} service={service} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const SEOSection = () => (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Professional SEO Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Boost your Google rankings and drive organic traffic</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {seoServices.map((service, index) => (
            <PlanCard key={index} plan={service} service={{ category: 'SEO Service' }} />
          ))}
        </div>
      </div>
    </section>
  );

  const BacklinksSection = () => (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Premium Backlink Packages</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Build high-quality backlinks from authoritative websites</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {backlinkServices.map((service, index) => (
            <PlanCard key={index} plan={service} service={{ category: 'Backlink Service' }} />
          ))}
        </div>
      </div>
    </section>
  );

  const GMBSection = () => (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Google My Business Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Dominate local search results with professional GMB setup</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {gmbServices.map((service, index) => (
            <PlanCard key={index} plan={service} service={{ category: 'GMB Service' }} />
          ))}
        </div>
      </div>
    </section>
  );

  const RemovalSection = () => (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Toxic Backlink Removal Service</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Protect your website from Google penalties</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {backlinkRemovalServices.map((service, index) => (
            <PlanCard key={index} plan={service} service={{ category: 'Backlink Removal' }} />
          ))}
        </div>
      </div>
    </section>
  );

  const SocialMediaSection = () => (
    <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Social Media Marketing & Management</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Grow your social presence, engage your audience, and drive conversions</p>
        </div>
        <div className="space-y-16">
          {socialMediaServices.map((service, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="bg-pink-100 text-pink-600 p-3 rounded-2xl">{service.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{service.category}</h3>
                </div>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.plans.map((plan, planIndex) => (
                  <PlanCard key={planIndex} plan={plan} service={service} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const AuditSection = () => (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Professional Website SEO Audit</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive analysis of your website's SEO health</p>
        </div>
        <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-blue-200">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-blue-100 text-blue-600 p-4 rounded-2xl">{seoAuditService.icon}</div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">{seoAuditService.name}</h3>
              <p className="text-gray-600">{seoAuditService.duration}</p>
            </div>
          </div>
          <div className="text-center mb-8">
            <div className="flex items-baseline justify-center gap-4 mb-4">
              <span className="text-5xl font-bold text-blue-600">{seoAuditService.price}</span>
              <span className="text-2xl text-gray-400 line-through">{seoAuditService.originalPrice}</span>
            </div>
            <div className="space-y-2">
              <span className="bg-red-500 text-white px-6 py-2 rounded-full text-lg font-bold inline-block">
                SAVE {calculateDiscount(seoAuditService.currentPrice, getOriginalPriceNumber(seoAuditService.originalPrice))}%
              </span>
              <div className="bg-green-500 text-white px-6 py-2 rounded-full text-lg font-bold">
                Advance: ₹{Math.floor(seoAuditService.currentPrice * 0.95).toLocaleString()} (5% OFF)
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {seoAuditService.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3 bg-gray-50 p-4 rounded-2xl">
                <Check className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => openPaymentModal(`Website SEO Audit`, seoAuditService.currentPrice, seoAuditService.name)} className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 px-6 rounded-2xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-3 text-lg">
              <CreditCard className="h-6 w-6" /> Pay Advance - Save 5%
            </button>
            <button
              onClick={() => handleInquiry(`Website SEO Audit`)}
              className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 px-6 rounded-2xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-3 text-lg"
            >
              <MessageCircle className="h-6 w-6" /> Get Free Sample Report
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  const GenericServiceSection = ({ title, subtitle, services, bgClass = "bg-white" }: { title: string, subtitle: string, services: ServiceCategory[], bgClass?: string }) => (
    <section className={`py-16 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>
        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-2xl">{service.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{service.category}</h3>
                </div>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {service.plans.map((plan, planIndex) => (
                  <PlanCard key={planIndex} plan={plan} service={service} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const QuickServicesSection = () => (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Quick Digital Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Get started quickly with our essential digital services</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {quickServices.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-2xl border-2 border-gray-200 hover:border-blue-300 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-blue-100 text-blue-600 p-4 rounded-2xl">{service.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                  <div className="flex items-baseline space-x-2 mt-1">
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                    <span className="text-sm text-gray-400 line-through">{service.originalPrice}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold inline-block mb-6">
                SAVE {calculateDiscount(service.currentPrice, getOriginalPriceNumber(service.originalPrice))}%
              </div>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3 text-sm text-gray-700">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-3">
                <button onClick={() => openPaymentModal(service.name, service.currentPrice, service.name)} className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-4 rounded-xl font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2">
                  <CreditCard className="h-4 w-4" /> Pay Advance - Save 5%
                </button>
                <button
                  onClick={() => handleInquiry(service.name)}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-2 px-4 rounded-xl font-medium transition-all hover:scale-105 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" /> Get Instant Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const PlanCard = ({ plan, service }: { plan: Plan; service: any }) => (
    <div className={`relative bg-white/40 dark:bg-slate-800/40 frosted-ice rounded-3xl shadow-2xl border-2 ${plan.popular ? 'border-yellow-400 transform hover:scale-105' : 'border-white/20 dark:border-white/10 hover:border-blue-300'
      } transition-all duration-300 hover:shadow-2xl group`}>
      {plan.popular && plan.badge && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-2 shadow-lg">
            <Crown className="h-4 w-4 fill-current" />
            <span>{plan.badge}</span>
          </span>
        </div>
      )}
      <div className="p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-blue-100 text-blue-600 p-3 rounded-2xl">{plan.icon}</div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
            <p className="text-gray-500 text-sm">{plan.duration}</p>
          </div>
        </div>
        <div className="text-center mb-8">
          <div className="flex items-baseline justify-center gap-3 mb-2">
            <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
            <span className="text-xl text-gray-400 line-through">{plan.originalPrice}</span>
          </div>
          <div className="space-y-2">
            <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold inline-block">
              SAVE {calculateDiscount(plan.currentPrice, getOriginalPriceNumber(plan.originalPrice || plan.price))}%
            </span>
            <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              Advance: ₹{Math.floor(plan.currentPrice * 0.95).toLocaleString()} (5% OFF)
            </div>
          </div>
        </div>
        <ul className="space-y-4 mb-8">
          {plan.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-start space-x-3">
              <Check className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0 bg-green-50 p-1 rounded-full" />
              <span className="text-gray-700 leading-relaxed text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="space-y-4">
          <button onClick={() => openPaymentModal(`${service.category} - ${plan.name}`, plan.currentPrice, plan.name)} className={`w-full py-4 px-6 rounded-2xl font-bold transition-all hover:scale-105 group-hover:shadow-lg ${plan.popular ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900' : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white'
            }`}>
            <div className="flex items-center justify-center gap-2">
              <CreditCard className="h-5 w-5" /> Pay Advance - Save 5%
            </div>
          </button>
          <button
            onClick={() => handleInquiry(`${service.category} - ${plan.name}`)}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 px-6 rounded-2xl font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            <MessageCircle className="h-5 w-5" /> WhatsApp for Details
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Helmet>
        <title>Affordable Pricing for Web Development & SEO | JS TECH SOLUTION</title>
        <meta name="description" content="Check our low-cost digital marketing packages. Website development starting from ₹2,499. SEO, GMB, and Backlink services at unbeatable prices. 70% OFF + 5% extra on advance!" />
        <meta name="keywords" content="web development pricing, SEO package cost, digital marketing price India, budget SEO services, JS TECH SOLUTION pricing" />
        <link rel="canonical" href="https://JSTECHSOLUTION.in/pricing" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://JSTECHSOLUTION.in/pricing" />
        <meta property="og:title" content="Budget-Friendly Digital Marketing Prices | JS TECH SOLUTION" />
        <meta property="og:description" content="Save big on high-quality web and SEO services. Packages starting from ₹2,499." />
        <meta property="og:image" content="https://JSTECHSOLUTION.in/og-pricing.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Marketing Pricing - JS TECH SOLUTION" />
        <meta name="twitter:description" content="View our low-cost, high-value digital service packages." />
      </Helmet>

      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        serviceName={inquiryService}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 2%, transparent 20%),
                             radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 1%, transparent 25%),
                             radial-gradient(circle at 40% 40%, rgba(255,255,255,0.1) 1%, transparent 15%)`,
          }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center frosted-ice p-12 rounded-3xl m-8">
          <div className="inline-flex items-center gap-2 bg-yellow-500 text-blue-900 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg animate-frost-breath">
            <Sparkles className="h-4 w-4" /> 🎉 SPECIAL OFFER: 70% OFF + 5% EXTRA ON ADVANCE PAYMENT
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Complete Digital Marketing
            <span className="block bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent mt-2">
              Services & Pricing
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100 leading-relaxed">
            Get all digital marketing services under one roof. From website development to SEO, backlinks, and social media.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {benefitItems.map((item, index) => (
              <div key={index} className="flex items-center justify-center gap-3 bg-white/20 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20 ice-shimmer">
                <div className="text-yellow-400">{item.icon}</div>
                <span className="text-blue-100 font-semibold">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-20 z-40 bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 space-x-2 scrollbar-hide">
            {tabs.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap text-sm ${activeTab === tab.id ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md' : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50 border border-gray-200'
                }`}>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Description */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="text-center">
            <p className="text-lg text-gray-600 font-medium">
              {tabs.find(tab => tab.id === activeTab)?.description}
            </p>
          </div>
        </div>
      </section>

      {/* Dynamic Sections */}
      {activeTab === 'website' && <WebsiteDevelopmentSection />}
      {activeTab === 'seo' && <SEOSection />}
      {activeTab === 'backlinks' && <BacklinksSection />}
      {activeTab === 'gmb' && <GMBSection />}
      {activeTab === 'removal' && <RemovalSection />}
      {activeTab === 'social' && <SocialMediaSection />}
      {activeTab === 'uiux' && <GenericServiceSection title="UI/UX Design Services" subtitle="User-centered design for high-converting interfaces" services={uiuxServices} />}
      {activeTab === 'app' && <GenericServiceSection title="Mobile App Development" subtitle="Native Android & iOS apps for your business" services={mobileAppServices} bgClass="bg-gradient-to-br from-blue-50 to-indigo-50" />}
      {activeTab === 'content' && <GenericServiceSection title="Content Writing Services" subtitle="SEO-optimized content that ranks and engages" services={contentServices} />}
      {activeTab === 'video' && <GenericServiceSection title="Video Marketing Services" subtitle="Professional video production to tell your story" services={videoServices} bgClass="bg-gradient-to-br from-purple-50 to-pink-50" />}
      {activeTab === 'graphic' && <GenericServiceSection title="Graphic Design Services" subtitle="Stunning visuals for your brand identity" services={graphicServices} />}
      {activeTab === 'email' && <GenericServiceSection title="Email Marketing Services" subtitle="Automated campaigns that drive revenue" services={emailServices} bgClass="bg-gradient-to-br from-yellow-50 to-orange-50" />}
      {activeTab === 'whatsapp' && <GenericServiceSection title="WhatsApp Marketing" subtitle="Direct engagement with your customers" services={whatsappServices} bgClass="bg-gradient-to-br from-green-50 to-emerald-50" />}
      {activeTab === 'audit' && <AuditSection />}
      {activeTab === 'quick' && <QuickServicesSection />}

      {/* Referral Section */}
      <section className="py-16 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-[3rem] p-8 md:p-12 border-2 border-orange-200 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform">
              <Gift size={200} />
            </div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="text-center lg:text-left lg:max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
                  <Gift className="h-4 w-4" /> REFER & EARN 25%
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                  Share the Success, <span className="text-orange-600">Earn Together!</span>
                </h2>
                <p className="text-xl text-slate-600 mb-8 font-light italic">
                  Refer a friend to any of our services and earn <strong className="text-orange-600">25% instant commission</strong> in your wallet when they make a purchase.
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <a
                    href="https://www.JSTECHSOLUTION.in/partnership/register.php?type=referral"
                    className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-black text-lg shadow-xl shadow-orange-500/20 transition-all hover:scale-105"
                  >
                    Get My Referral Link
                  </a>
                  <a
                    href="https://www.JSTECHSOLUTION.in/partnership/login.php"
                    className="bg-white border-2 border-orange-200 text-orange-600 px-8 py-4 rounded-xl font-black text-lg transition-all hover:bg-orange-50"
                  >
                    Partner Login
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
                {[
                  { label: 'Commission', value: '25%', icon: <TrendingUp /> },
                  { label: 'Payout', value: 'Instant', icon: <Zap /> },
                  { label: 'Partners', value: '500+', icon: <Users /> },
                  { label: 'Min. Pay', value: '₹500', icon: <Shield /> }
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-orange-100 shadow-sm text-center transform hover:-translate-y-1 transition-transform">
                    <div className="text-orange-500 mb-2 flex justify-center">{stat.icon}</div>
                    <div className="text-2xl font-black text-slate-900 leading-none mb-1">{stat.value}</div>
                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join 500+ satisfied clients who've scaled their business with JSTECHSOLUTION
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href={getWhatsAppUrl("Hello JSTECHSOLUTION! I want to discuss digital marketing services for my business. Please share the best package for me.")} target="_blank" rel="noopener noreferrer" className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-10 py-5 rounded-2xl text-lg font-bold transition-all hover:scale-105 flex items-center justify-center space-x-3 shadow-2xl">
              <MessageCircle className="h-6 w-6" /> <span className="text-xl">💬 WhatsApp for 70% OFF</span>
            </a>
            <a href={`tel:${PHONE_NUMBER.replace(/-/g, '')}`} className="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all hover:scale-105 flex items-center justify-center space-x-3 shadow-2xl">
              <Phone className="h-6 w-6" /> <span className="text-xl">📞 Call: {PHONE_NUMBER}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      {isPaymentOpen && (
        <div className="fixed inset-0 bg-slate-900/90 backdrop-blur-md flex justify-center z-[9999] overflow-y-auto pt-6 pb-20 px-4 md:items-center md:pt-10">
          <div className="bg-white rounded-[2.5rem] p-6 md:p-10 max-w-xl w-full shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] border border-blue-100 animate-pop-in relative my-auto">
            {/* Close Button */}
            <button
              onClick={() => setIsPaymentOpen(false)}
              className="absolute top-4 right-4 md:top-6 md:right-6 text-slate-400 hover:text-red-500 p-2 hover:bg-red-50 rounded-full transition-all group z-10"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="flex flex-col gap-8">
              {/* Header */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 flex flex-col md:flex-row items-center gap-3">
                  <CreditCard className="h-8 w-8 text-blue-600" />
                  Advance Payment Upgrade
                </h3>
                <div className="mt-4 p-4 bg-blue-50 rounded-2xl border border-blue-100 inline-block w-full">
                  <p className="text-blue-700 font-black text-lg">{paymentService}</p>
                  {selectedPlan && <p className="text-blue-600/70 text-sm font-bold uppercase tracking-widest mt-1">PLAN: {selectedPlan}</p>}
                </div>
              </div>

              {/* Price Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 rounded-3xl border-2 border-slate-100 bg-slate-50 text-center relative overflow-hidden group">
                  <div className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-1">Standard Price</div>
                  <div className="text-2xl font-bold text-gray-500 line-through">₹{originalAmount.toLocaleString()}</div>
                  <div className="absolute top-0 right-0 p-2 bg-slate-200 text-slate-500 text-[10px] font-black rounded-bl-xl">FULL PRICE</div>
                </div>
                <div className="p-6 rounded-3xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 text-center relative overflow-hidden ring-4 ring-green-50">
                  <div className="text-green-600 text-sm font-black uppercase tracking-wider mb-1">Advance Offer</div>
                  <div className="text-3xl font-black text-green-700">₹{paymentAmount.toLocaleString()}</div>
                  <div className="absolute top-0 right-0 p-2 bg-green-500 text-white text-[10px] font-black rounded-bl-xl">5% OFF</div>
                </div>
              </div>

              {/* Referral Code Section */}
              <div className="space-y-3">
                <div className="flex items-center justify-between px-1">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Referral Link / Code</label>
                  <span className="text-[10px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-bold">OPTIONAL</span>
                </div>
                <div className="relative group">
                  <input
                    type="text"
                    value={manualRefCode}
                    onChange={(e) => setManualRefCode(e.target.value)}
                    placeholder="Paste referral link or enter code here..."
                    className="w-full bg-slate-50 border-2 border-slate-100 focus:border-blue-500 focus:bg-white rounded-2xl py-5 px-14 text-base transition-all text-slate-700 font-bold placeholder:text-slate-300 placeholder:font-normal"
                  />
                  <Gift className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                </div>
                <p className="text-[11px] text-slate-400 italic leading-relaxed px-2">
                  <Sparkles className="inline h-3 w-3 mr-1" />
                  Paste your partner link or code here to ensure they get credited instantly!
                </p>
              </div>

              {/* UPI Payment Section */}
              <div className="bg-white border-2 border-slate-100 rounded-3xl p-5 shadow-sm text-center mt-2">
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

              {/* Discussion CTA */}
              <div className="mt-2">
                <a
                  href={getWhatsAppUrl(`Hello JSTECHSOLUTION! I want to discuss "${paymentService}" before making payment. Please provide more details.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white border-2 border-slate-100 hover:border-blue-500 hover:bg-blue-50 text-slate-600 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-3"
                >
                  <MessageCircle className="h-5 w-5 text-green-500" /> Discuss on WhatsApp
                </a>
              </div>

              <div className="flex items-center justify-center gap-2 mt-4 text-slate-400 text-xs font-bold">
                <Shield className="h-4 w-4" /> 🔒 Secure Payments via BHIM, GPay, PhonePe, Paytm
              </div>
            </div>
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
        .frosted-ice {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
};

export default Pricing;
