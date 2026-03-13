import { Zap, Shield, TrendingUp, Users } from "lucide-react";

// Unique Hero Slides
export const heroSlides = [
  {
    title: "India's Top Website Development",
    highlight: "Custom Website from ₹8,749",
    tagline: "Professional Website + FREE Domain & Hosting for 1 Year. Jaipur Choice.",
    features: ["Mobile Responsive", "SEO Optimized", "Fast Loading", "1 Year Support"],
    bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    cta: "Get Started Now"
  },
  {
    title: "Best Digital Marketing Company",
    highlight: "SEO + Ads from ₹4,999/mo",
    tagline: "Grow Your Brand in Rajasthan with Data-Driven Expert Strategies.",
    features: ["Google Ranking", "Social Media", "Lead Generation", "Monthly Reports"],
    bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    cta: "Get Started Now"
  },
  {
    title: "India's Best E-commerce Solutions",
    highlight: "Online Store @ ₹18,749",
    tagline: "Complete Online Store with Payment Gateway & Multi-City Reach.",
    features: ["Product Management", "Payment Gateway", "Order Tracking", "Inventory Sync"],
    bg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    cta: "Start Selling"
  }
];

// Startup Business Solutions
export const startupSolutions = [
  {
    icon: "💼",
    title: "Business Website",
    price: "₹9,999",
    originalPrice: "₹19,999",
    description: "Professional Business Website with FREE Domain & Hosting",
    features: ["1 Year Free Hosting", "Free Domain", "Responsive Design", "SEO Ready"],
    popular: false,
    savings: "50% OFF",
    badge: "Most Affordable"
  },
  {
    icon: "🛒",
    title: "E-commerce Store",
    price: "₹18,749",
    originalPrice: "₹37,499",
    description: "Complete Online Store with Payment Integration",
    features: ["10+ Products", "Payment Gateway", "Order Management", "1 Year Support"],
    popular: true,
    savings: "50% OFF",
    badge: "BEST VALUE"
  },
  {
    icon: "🏠",
    title: "Real Estate Website",
    price: "₹16,249",
    originalPrice: "₹32,499",
    description: "Advanced Property Listing & Management System",
    features: ["Property Listings", "Lead Management", "Contact Forms", "Admin Panel"],
    popular: false,
    savings: "50% OFF",
    badge: "Premium"
  },
  {
    icon: "📰",
    title: "News Portal",
    price: "₹16,249",
    originalPrice: "₹32,499",
    description: "Dynamic News & Blog Publishing Platform",
    features: ["Unlimited Articles", "Category Management", "Author Panel", "SEO Optimized"],
    popular: false,
    savings: "50% OFF",
    badge: "Great Deal"
  },
  {
    icon: "🎓",
    title: "School/College Website",
    price: "₹14,999",
    originalPrice: "₹29,998",
    description: "Educational Institute Website Solution",
    features: ["Student Management", "Event Calendar", "Gallery", "Contact Forms"],
    popular: false,
    savings: "50% OFF",
    badge: "Special Offer"
  },
  {
    icon: "🔍",
    title: "SEO Services",
    price: "₹4,999",
    originalPrice: "₹9,999",
    description: "Professional SEO Services for Business Growth",
    features: ["Website Audit", "Keyword Research", "On-Page SEO", "Monthly Reports"],
    popular: false,
    savings: "50% OFF",
    badge: "Quick Service"
  }
];

// Growth Packages
export const growthPackages = [
  {
    name: "STARTUP GROWTH",
    price: "₹9,999",
    duration: "one-time",
    originalPrice: "₹19,998",
    description: "Perfect for new businesses starting online",
    features: [
      "Business Website Development",
      "Google Business Setup",
      "Basic SEO Setup",
      "Social Media Profiles",
      "3 Months Technical Support",
      "Free Domain & Hosting (1 Year)"
    ],
    popular: false,
    savings: "₹9,999",
    color: "from-blue-500 to-blue-600"
  },
  {
    name: "BUSINESS GROWTH",
    price: "₹24,999",
    duration: "one-time",
    originalPrice: "₹49,998",
    description: "Complete digital presence for growing businesses",
    features: [
      "Professional Website",
      "Advanced SEO (3 Months)",
      "Social Media Marketing (3 Months)",
      "Google Ads Setup",
      "6 Months Support",
      "Free Domain & Hosting (1 Year)",
      "Monthly Performance Reports"
    ],
    popular: true,
    savings: "₹24,999",
    color: "from-purple-500 to-purple-600"
  },
  {
    name: "ENTERPRISE GROWTH",
    price: "₹49,999",
    duration: "one-time",
    originalPrice: "₹99,998",
    description: "Premium solutions for established businesses",
    features: [
      "Custom Website Development",
      "Complete SEO (6 Months)",
      "Social Media Management (6 Months)",
      "Google & Meta Ads Management",
      "12 Months Priority Support",
      "Free Domain & Hosting (2 Years)",
      "Dedicated Account Manager"
    ],
    popular: false,
    savings: "₹49,999",
    color: "from-green-500 to-green-600"
  }
];

// Why Choose Us
export const whyChooseUs = [
  {
    icon: <Zap className="h-6 w-6 sm:h-8 sm:w-8" />,
    title: "Lightning Fast Delivery",
    description: "Get your website live in 3-7 days without compromising quality"
  },
  {
    icon: <Shield className="h-6 w-6 sm:h-8 sm:w-8" />,
    title: "1 Year Free Support",
    description: "We provide complete technical support for 1 year after delivery"
  },
  {
    icon: <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8" />,
    title: "Growth Focused",
    description: "Every solution is designed to help your business grow online"
  },
  {
    icon: <Users className="h-6 w-6 sm:h-8 sm:w-8" />,
    title: "Expert Team",
    description: "Work with certified professionals with 3+ years experience"
  }
];

// Process Steps
export const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description: "Free business analysis and strategy session",
    icon: "💬"
  },
  {
    number: "02",
    title: "Planning",
    description: "Custom project plan with timeline and pricing",
    icon: "📋"
  },
  {
    number: "03",
    title: "Development",
    description: "Professional implementation with regular updates",
    icon: "⚡"
  },
  {
    number: "04",
    title: "Launch & Grow",
    description: "Go live and continue growing with our support",
    icon: "🚀"
  }
];

// Testimonials
export const testimonials = [
  {
    name: "Rajesh Kumar",
    business: "Local Restaurant Owner",
    location: "Jaipur",
    text: "Got my restaurant website at just ₹4,999! Professional work and great support. Online orders increased by 40%.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  },
  {
    name: "Priya Sharma",
    business: "Fashion Boutique",
    location: "Mumbai",
    text: "E-commerce store developed in 5 days. Sales started from day one. Excellent service!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    name: "Amit Patel",
    business: "Real Estate Agent",
    location: "Ahmedabad",
    text: "Professional real estate website with property management. Getting quality leads daily.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
  },
  {
    name: "Sunita Verma",
    business: "Coaching Institute",
    location: "Lucknow",
    text: "Our coaching website brought us 200+ new student inquiries in just 2 months. Amazing ROI!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  },
  {
    name: "Vikram Singh",
    business: "Hotel Owner",
    location: "Rudraprayag",
    text: "Best investment for my hotel. Direct bookings increased significantly. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
  },
  {
    name: "Neha Gupta",
    business: "Jewelry Store",
    location: "Jaipur",
    text: "Beautiful e-commerce store that showcases our jewelry perfectly. Customer feedback is amazing!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop"
  }
];

// Client Logos - Trusted Brands
export const clientLogos = [
  { name: "Tech Startup", industry: "Technology" },
  { name: "Fashion Brand", industry: "Retail" },
  { name: "Restaurant Chain", industry: "Food & Beverage" },
  { name: "Real Estate Agency", industry: "Real Estate" },
  { name: "Education Institute", industry: "Education" },
  { name: "Healthcare Clinic", industry: "Healthcare" },
  { name: "Travel Agency", industry: "Travel" },
  { name: "Fitness Studio", industry: "Health & Wellness" }
];
