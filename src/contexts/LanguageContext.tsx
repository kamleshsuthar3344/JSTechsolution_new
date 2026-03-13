import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface Translations {
    [key: string]: {
        en: string;
        hi: string;
    };
}

// Common translations across the website
export const translations: Translations = {
    // Header
    home: { en: 'Home', hi: 'होम' },
    about: { en: 'About', hi: 'हमारे बारे में' },
    services: { en: 'Services', hi: 'सेवाएं' },
    portfolio: { en: 'Portfolio', hi: 'पोर्टफोलियो' },
    pricing: { en: 'Pricing', hi: 'मूल्य' },
    blog: { en: 'Blog', hi: 'ब्लॉग' },
    backlink: { en: 'Backlink', hi: 'बैकलिंक' },
    careers: { en: 'Careers', hi: 'करियर' },
    contact: { en: 'Contact', hi: 'संपर्क' },

    // Common phrases
    getStarted: { en: 'Get Started', hi: 'शुरू करें' },
    learnMore: { en: 'Learn More', hi: 'और जानें' },
    contactUs: { en: 'Contact Us', hi: 'संपर्क करें' },
    whatsappNow: { en: 'WhatsApp Now', hi: 'व्हाट्सएप करें' },
    callNow: { en: 'Call Now', hi: 'अभी कॉल करें' },
    submit: { en: 'Submit', hi: 'जमा करें' },

    // Hero section
    trustedBy: { en: 'Trusted by 150+ Businesses', hi: '150+ व्यवसायों द्वारा विश्वसनीय' },
    launchBusiness: { en: 'Launch Your Business Online', hi: 'अपना व्यवसाय ऑनलाइन शुरू करें' },
    websiteFrom: { en: 'Website from ₹2,500', hi: 'वेबसाइट ₹2,500 से' },
    freeConsultation: { en: 'Free Consultation', hi: 'मुफ्त परामर्श' },

    // Sections
    startupSolutions: { en: 'Startup Business Solutions', hi: 'स्टार्टअप बिजनेस समाधान' },
    growthPackages: { en: 'Complete Growth Packages', hi: 'संपूर्ण विकास पैकेज' },
    whyChooseUs: { en: 'Why Choose Us', hi: 'हमें क्यों चुनें' },
    howWeWork: { en: 'How We Work', hi: 'हम कैसे काम करते हैं' },
    testimonials: { en: 'Client Testimonials', hi: 'ग्राहक प्रशंसापत्र' },

    // CTA
    readyToStart: { en: 'Ready to Start Your Online Journey?', hi: 'ऑनलाइन यात्रा शुरू करने के लिए तैयार?' },
    getPackage: { en: 'Get This Package', hi: 'यह पैकेज लें' },

    // Digital Marketing page (demo keys)
    dm_hero_badge: { en: '10X Your Digital Growth', hi: 'अपनी डिजिटल वृद्धि 10X करें' },
    dm_hero_title_main: { en: 'Digital Marketing', hi: 'डिजिटल मार्केटिंग' },
    dm_hero_title_sub: { en: 'That Delivers Results', hi: 'जो परिणाम देता है' },
    dm_hero_paragraph: { en: 'From strategy to execution, we provide comprehensive digital marketing solutions that drive real business growth.', hi: 'रणनीति से लेकर निष्पादन तक, हम व्यापक डिजिटल मार्केटिंग समाधान प्रदान करते हैं जो वास्तविक व्यावसायिक वृद्धि लाते हैं।' },
    dm_get_free: { en: 'Get Free Strategy Call', hi: 'मुफ्त रणनीति कॉल प्राप्त करें' },
    dm_explore_services: { en: 'Explore Services', hi: 'सेवाओं का अन्वेषण करें' },

    // Services (titles/descriptions) - demo
    service_paid_title: { en: 'Paid Marketing', hi: 'पेड मार्केटिंग' },
    service_paid_description: { en: 'Strategic paid advertising campaigns across Google, Facebook, Instagram & more to drive instant results.', hi: 'तुरंत परिणाम लाने के लिए Google, Facebook, Instagram और अधिक पर रणनीतिक पेड विज्ञापन अभियान।' },
    service_custom_title: { en: 'Custom Digital Marketing', hi: 'कस्टम डिजिटल मार्केटिंग' },
    service_custom_description: { en: 'Tailored digital marketing strategies designed specifically for your business goals and target audience.', hi: 'आपके व्यवसाय के लक्ष्यों और लक्षित दर्शकों के लिए विशेष रूप से डिजाइन की गई अनुकूल डिजिटल मार्केटिंग रणनीतियाँ।' },

    // Footer
    quickLinks: { en: 'Quick Links', hi: 'त्वरित लिंक' },
    ourServices: { en: 'Our Services', hi: 'हमारी सेवाएं' },
    followUs: { en: 'Follow Us', hi: 'हमें फॉलो करें' },
    allRightsReserved: { en: 'All Rights Reserved', hi: 'सर्वाधिकार सुरक्षित' },

    // Forms
    yourName: { en: 'Your Name', hi: 'आपका नाम' },
    yourEmail: { en: 'Your Email', hi: 'आपका ईमेल' },
    yourPhone: { en: 'Your Phone', hi: 'आपका फोन' },
    message: { en: 'Message', hi: 'संदेश' },

    // Pricing
    mostPopular: { en: 'Most Popular', hi: 'सबसे लोकप्रिय' },
    save: { en: 'Save', hi: 'बचाएं' },
    perMonth: { en: '/month', hi: '/महीना' },
    oneTime: { en: 'one-time', hi: 'एक बार' },
};

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('language') as Language;
            return saved || 'en';
        }
        return 'en';
    });

    useEffect(() => {
        localStorage.setItem('language', language);
        document.documentElement.lang = language;
    }, [language]);

    const t = (key: string): string => {
        const translation = translations[key];
        if (translation) {
            return translation[language];
        }
        return key; // Return key if translation not found
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export default LanguageContext;
