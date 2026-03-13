import React from 'react';
import {
    Search, TrendingUp, Award, Crown, ThumbsUp, MapPin, Trash2, Shield,
    Instagram, Facebook, Rocket, Video, Sparkles, Mail, MessageCircle,
    BarChart3, Zap, Target
} from 'lucide-react';
import { Plan, ServiceCategory } from './types';

// SEO Services
export const seoServices: Plan[] = [
    {
        name: 'BASIC SEO', price: '₹4,999', originalPrice: '₹6,000', currentPrice: 4999,
        popular: true, badge: 'BEST VALUE', duration: 'per month', icon: <Search className="h-5 w-5" />,
        features: ['Comprehensive Website Audit', '10 Keyword Research & Optimization', 'Basic On-Page SEO',
            'Technical SEO Analysis', 'Google Analytics Setup', 'Google Search Console Setup', 'Monthly Performance Report',
            'Basic Backlink Analysis', 'Local SEO Setup', '24/7 Support']
    },
    {
        name: 'PROFESSIONAL SEO', price: '₹5,500', originalPrice: '₹12,000', currentPrice: 5500,
        popular: false, badge: 'RECOMMENDED', duration: 'per month', icon: <TrendingUp className="h-5 w-5" />,
        features: ['Advanced Website Audit', '25+ Keyword Research & Strategy', 'Complete On-Page Optimization',
            'Advanced Technical SEO', 'Competitor Analysis', 'Content Strategy Planning', 'Monthly Backlink Building',
            'Local SEO Optimization', 'E-commerce SEO', 'Priority Support']
    },
    {
        name: 'PREMIUM SEO', price: '₹11,000', originalPrice: '₹25,000', currentPrice: 11000,
        popular: false, badge: 'PREMIUM', duration: 'per month', icon: <Award className="h-5 w-5" />,
        features: ['Enterprise-level SEO Audit', '50+ Comprehensive Keyword Strategy', 'International SEO Setup',
            'Advanced Technical Optimization', 'Competitor Intelligence', 'Custom Content Strategy', 'Premium Backlink Building',
            'Voice Search Optimization', 'AI-powered SEO Analysis', 'Dedicated Account Manager']
    },
    {
        name: 'ENTERPRISE SEO', price: '₹27,000', originalPrice: '₹55,000', currentPrice: 27000,
        popular: false, badge: 'ENTERPRISE', duration: 'per month', icon: <Crown className="h-5 w-5" />,
        features: ['Comprehensive SEO Audit', '100+ Enterprise Keyword Strategy', 'Global SEO Implementation',
            'Enterprise Technical SEO', 'Market Leader Analysis', 'AI-Powered Content Strategy', 'Enterprise Backlink Building',
            'Video SEO Optimization', 'Custom Analytics Dashboard', '24/7 Dedicated Support Team']
    }
];

// Backlink Services
export const backlinkServices: Plan[] = [
    {
        name: 'BASIC BACKLINKS', price: '₹4,999', originalPrice: '₹6,000', currentPrice: 4999,
        popular: true, badge: 'POPULAR', duration: 'one-time', icon: <ThumbsUp className="h-5 w-5" />,
        features: ['10 High DA Backlinks', 'DA 30+ Websites', 'Relevant Niche Sites', 'DoFollow & NoFollow Mix',
            'Anchor Text Diversity', 'Quality Content Creation', 'Manual Link Building', 'White Hat Techniques',
            'Link Placement Report', '30 Days Link Monitoring']
    },
    {
        name: 'PROFESSIONAL BACKLINKS', price: '₹5,500', originalPrice: '₹12,000', currentPrice: 5500,
        popular: false, badge: null, duration: 'one-time', icon: <TrendingUp className="h-5 w-5" />,
        features: ['25 High DA Backlinks', 'DA 40+ Websites', 'Authority Site Links', 'Guest Post Opportunities',
            'Content Outreach', 'Competitor Backlink Analysis', 'Link Quality Audit', 'Monthly Link Building',
            'Detailed Performance Report', '60 Days Link Monitoring']
    },
    {
        name: 'PREMIUM BACKLINKS', price: '₹11,000', originalPrice: '₹25,000', currentPrice: 11000,
        popular: false, badge: 'PREMIUM', duration: 'one-time', icon: <Award className="h-5 w-5" />,
        features: ['50+ High DA Backlinks', 'DA 50+ Premium Sites', 'Featured Guest Posts', 'Industry Authority Links',
            'Press Release Distribution', 'Influencer Collaborations', 'Link Velocity Management', 'Quarterly Strategy Review',
            'Competitor Intelligence', '90 Days Premium Support']
    },
    {
        name: 'ENTERPRISE BACKLINKS', price: '₹25,000', originalPrice: '₹55,000', currentPrice: 25000,
        popular: false, badge: 'ENTERPRISE', duration: 'one-time', icon: <Crown className="h-5 w-5" />,
        features: ['100+ High DA Backlinks', 'DA 60+ Premium Sites', 'Featured Articles', 'Media Coverage',
            'Digital PR Campaign', 'Brand Mention Building', 'Advanced Link Strategy', 'Weekly Progress Reports',
            'Dedicated Account Manager', '180 Days Extended Support']
    }
];

// GMB Services
export const gmbServices: Plan[] = [
    {
        name: 'GMB PROFILE SETUP', price: '₹1,250', originalPrice: '₹3,000', currentPrice: 1250,
        popular: true, badge: 'POPULAR', duration: 'one-time', icon: <MapPin className="h-5 w-5" />,
        features: ['GMB Account Creation & Verification', 'Complete Business Profile Optimization', 'Category & Attribute Setup',
            'Business Description & Hours', 'Professional Photo Gallery Setup', 'Products/Services Menu Setup',
            'Booking/Appointment System', 'Review Management Setup', 'Google Posts Integration', 'Basic SEO for GMB']
    },
    {
        name: 'GMB RANKING STARTER', price: '₹4,449', originalPrice: '₹9,000', currentPrice: 4449,
        popular: false, badge: null, duration: 'per month', icon: <TrendingUp className="h-5 w-5" />,
        features: ['Advanced GMB Optimization', 'Local Citation Building', 'Review Generation Strategy', 'Regular Google Posts',
            'Photo Updates', 'Q&A Management', 'Local SEO Optimization', 'Monthly Performance Report', 'Competitor Analysis',
            'Basic Reputation Management']
    },
    {
        name: 'GMB RANKING PRO', price: '₹9,999', originalPrice: '₹20,000', currentPrice: 9999,
        popular: true, badge: 'BEST VALUE', duration: 'per month', icon: <Award className="h-5 w-5" />,
        features: ['Premium GMB Optimization', 'Advanced Local Citation Building', 'Review Marketing Campaign', 'Daily Google Posts',
            'Video Content Integration', 'Advanced Q&A Management', 'Local Backlink Building', 'Detailed Analytics & Reporting',
            'Competitor Monitoring', 'Reputation Management']
    },
    {
        name: 'GMB RANKING ENTERPRISE', price: '₹14,999', originalPrice: '₹30,000', currentPrice: 14999,
        popular: false, badge: 'ENTERPRISE', duration: 'per month', icon: <Crown className="h-5 w-5" />,
        features: ['Enterprise GMB Management', 'Comprehensive Local SEO', 'Advanced Review Marketing', 'Multi-location Management',
            'Video Marketing Integration', 'Premium Reputation Management', 'Competitor Intelligence', 'Custom Reporting Dashboard',
            'Dedicated Account Manager', '24/7 Priority Support']
    }
];

// Backlink Removal Services
export const backlinkRemovalServices: Plan[] = [
    {
        name: 'BASIC REMOVAL', price: '₹14,999', originalPrice: '₹30,000', currentPrice: 14999,
        popular: true, badge: 'POPULAR', duration: 'one-time', icon: <Trash2 className="h-5 w-5" />,
        features: ['Comprehensive Backlink Audit', 'Identify 100+ Toxic Backlinks', 'Manual Removal Outreach',
            'Disavow File Creation', 'Link Quality Analysis', 'Risk Assessment Report', 'Removal Progress Tracking',
            'Google Disavow Tool Setup', '30 Days Monitoring', 'Basic Support']
    },
    {
        name: 'ADVANCED REMOVAL', price: '₹37,000', originalPrice: '₹75,000', currentPrice: 37000,
        popular: false, badge: 'PREMIUM', duration: 'one-time', icon: <Shield className="h-5 w-5" />,
        features: ['Enterprise Backlink Audit', 'Identify 300+ Toxic Backlinks', 'Premium Removal Outreach',
            'Advanced Disavow Strategy', 'Link Velocity Management', 'Competitor Toxic Link Analysis', 'Weekly Progress Reports',
            'Google Penalty Recovery', '90 Days Extended Monitoring', 'Priority Support', 'Preventive Strategy', 'Brand Protection']
    }
];

// Social Media Services
export const socialMediaServices: ServiceCategory[] = [
    {
        category: "Social Media Marketing",
        icon: <Instagram className="h-6 w-6" />,
        plans: [
            {
                name: 'STARTER', price: '₹5,500', originalPrice: '₹12,000', currentPrice: 5500,
                popular: false, badge: null, duration: 'Monthly', features: ['Account Setup and Optimization',
                    'Creative Post designs', 'Reel / Video Content', 'Story Highlight Design', 'Content Calendar & Strategy',
                    'Hashtag & Caption Writing', 'Ad campaign', 'Lead generation', 'Influencer Collaboration', 'Community Management']
            },
            {
                name: 'STANDARD', price: '₹11,000', originalPrice: '₹22,000', currentPrice: 11000,
                popular: false, badge: null, duration: 'Monthly', features: ['Account Setup and Optimization',
                    'Creative Post designs', 'Reel / Video Content', 'Story Highlight Design', 'Content Calendar & Strategy',
                    'Hashtag & Caption Writing', 'Ad campaign', 'Basic Lead generation', 'Influencer Collaboration', 'Community Management']
            },
            {
                name: 'PROFESSIONAL', price: '₹22,000', originalPrice: '₹40,000', currentPrice: 22000,
                popular: true, badge: 'MOST POPULAR', duration: 'Monthly', features: ['Account Setup and Optimization',
                    'Creative Post designs', 'Reel / Video Content', 'Story Highlight Design', 'Content Calendar & Strategy',
                    'Hashtag & Caption Writing', 'Ad campaign', 'Targeted Lead generation', 'Influencer Collaboration (Optional)', 'Community Management']
            },
            {
                name: 'PREMIUM', price: '₹33,000', originalPrice: '₹60,000', currentPrice: 33000,
                popular: false, badge: 'PREMIUM', duration: 'Monthly', features: ['Account Setup and Optimization',
                    'Creative Post designs', 'Reel / Video Content', 'Story Highlight Design', 'Content Calendar & Strategy',
                    'Hashtag & Caption Writing', 'Ad campaign', 'Advanced Lead generation', 'Influencer Collaboration', 'Community Management']
            }
        ]
    },
    {
        category: "Social Media Management",
        icon: <Facebook className="h-6 w-6" />,
        plans: [
            {
                name: 'STARTER', price: '₹4,999', originalPrice: '₹8,000', currentPrice: 4999,
                popular: false, badge: null, duration: 'Monthly', features: ['1 Platforms Managed', 'Creative Post designs',
                    'Reel / Video Content', 'Story Highlight Design', 'Content Calendar & Strategy', 'Engagement', 'Ad campaign',
                    'Lead generation', 'Influencer Collaboration', 'Community Management']
            },
            {
                name: 'STANDARD', price: '₹5,000', originalPrice: '₹15,000', currentPrice: 5000,
                popular: true, badge: 'BEST VALUE', duration: 'Monthly', features: ['2 Platforms managed', 'Creative Post designs',
                    'Reel / Video Content', 'Story Highlight Design', 'Content Calendar & Strategy', 'Hashtag & Caption Writing',
                    'Ad campaign', 'Basic Lead generation', 'Influencer Collaboration', 'Community Management']
            },
            {
                name: 'PROFESSIONAL', price: '₹7,500', originalPrice: '₹20,000', currentPrice: 7500,
                popular: false, badge: null, duration: 'Monthly', features: ['3 Platforms Managed', 'Creative Post designs',
                    'Reel / Video Content', 'Story Highlight Design', 'Content Calendar & Strategy', 'Hashtag & Caption Writing',
                    'Ad campaign', 'Targeted Lead generation', 'Influencer Collaboration (Optional)', 'Community Management']
            },
            {
                name: 'PREMIUM', price: '₹7,500', originalPrice: '₹25,000', currentPrice: 7500,
                popular: false, badge: 'PREMIUM', duration: 'Monthly', features: ['4 Platforms Managed', 'Creative Post designs',
                    'Reel / Video Content', 'Story Highlight Design', 'Content Calendar & Strategy', 'Hashtag & Caption Writing',
                    'Ad campaign', 'Advanced Lead generation', 'Influencer Collaboration', 'Community Management']
            }
        ]
    }
];

// Other Digital Services
export const uiuxServices: ServiceCategory[] = [{
    category: "UI/UX Design Services",
    icon: <Award className="h-6 w-6" />,
    plans: [
        { name: 'BASIC', price: '₹7,999', originalPrice: '₹15,000', currentPrice: 7999, popular: false, badge: null, features: ['5 Screen Designs', 'Wireframes', 'Basic Prototyping', 'Color Palette', 'Typography Guide', '2 Revisions', 'Source Files'] },
        { name: 'STANDARD', price: '₹14,999', originalPrice: '₹28,000', currentPrice: 14999, popular: true, badge: 'POPULAR', features: ['10 Screen Designs', 'Wireframes', 'Interactive Prototype', 'Design System', 'Icon Set', '5 Revisions', 'Source Files', 'Developer Handoff'] },
        { name: 'PREMIUM', price: '₹24,999', originalPrice: '₹45,000', currentPrice: 24999, popular: false, badge: 'PREMIUM', features: ['20+ Screen Designs', 'Complete Wireframes', 'Advanced Prototype', 'Full Design System', 'Custom Icons', 'Unlimited Revisions', 'All Source Files', 'Developer Support'] }
    ]
}];

export const mobileAppServices: ServiceCategory[] = [{
    category: "Mobile App Development",
    icon: <Rocket className="h-6 w-6" />,
    plans: [
        { name: 'BASIC', price: '₹29,999', originalPrice: '₹60,000', currentPrice: 29999, popular: false, badge: null, features: ['Android App', 'Up to 5 Screens', 'Basic Features', 'Admin Panel', 'Play Store Upload', '3 Months Support', 'Source Code'] },
        { name: 'STANDARD', price: '₹49,999', originalPrice: '₹95,000', currentPrice: 49999, popular: true, badge: 'POPULAR', features: ['Android + iOS', 'Up to 10 Screens', 'Advanced Features', 'Admin Panel', 'Both Store Upload', '6 Months Support', 'Source Code', 'API Integration'] },
        { name: 'PREMIUM', price: '₹89,999', originalPrice: '₹1,50,000', currentPrice: 89999, popular: false, badge: 'PREMIUM', features: ['Android + iOS', 'Unlimited Screens', 'Custom Features', 'Advanced Admin Panel', 'Both Store Upload', '12 Months Support', 'Source Code', 'Full API Integration', 'Payment Gateway'] }
    ]
}];

export const contentServices: ServiceCategory[] = [{
    category: "Content Writing Services",
    icon: <Video className="h-6 w-6" />,
    plans: [
        { name: 'STARTER', price: '₹2,999', originalPrice: '₹6,000', currentPrice: 2999, popular: false, badge: null, duration: 'Monthly', features: ['5 Blog Posts', 'SEO Optimized', 'Keyword Research', 'Meta Descriptions', 'Plagiarism Free', '2 Revisions'] },
        { name: 'STANDARD', price: '₹5,999', originalPrice: '₹12,000', currentPrice: 5999, popular: true, badge: 'BEST VALUE', duration: 'Monthly', features: ['10 Blog Posts', 'SEO Optimized', 'Keyword Research', 'Meta Descriptions', 'Plagiarism Free', '3 Revisions', 'Image Sourcing'] },
        { name: 'PREMIUM', price: '₹9,999', originalPrice: '₹20,000', currentPrice: 9999, popular: false, badge: 'PREMIUM', duration: 'Monthly', features: ['20 Blog Posts', 'Advanced SEO', 'Keyword Research', 'Meta Descriptions', 'Plagiarism Free', 'Unlimited Revisions', 'Image Sourcing', 'Content Calendar'] }
    ]
}];

export const videoServices: ServiceCategory[] = [{
    category: "Video Marketing Services",
    icon: <Video className="h-6 w-6" />,
    plans: [
        { name: 'BASIC', price: '₹4,999', originalPrice: '₹10,000', currentPrice: 4999, popular: false, badge: null, features: ['2 Videos/Month', 'Script Writing', 'Professional Editing', 'Background Music', 'Subtitles', 'HD Quality', 'Social Media Format'] },
        { name: 'STANDARD', price: '₹9,999', originalPrice: '₹18,000', currentPrice: 9999, popular: true, badge: 'POPULAR', features: ['5 Videos/Month', 'Script Writing', 'Professional Editing', 'Background Music', 'Subtitles', '4K Quality', 'All Social Formats', 'Thumbnail Design'] },
        { name: 'PREMIUM', price: '₹16,999', originalPrice: '₹30,000', currentPrice: 16999, popular: false, badge: 'PREMIUM', features: ['10 Videos/Month', 'Script Writing', 'Professional Editing', 'Licensed Music', 'Subtitles', '4K Quality', 'All Formats', 'Thumbnail Design', 'Video SEO'] }
    ]
}];

export const graphicServices: ServiceCategory[] = [{
    category: "Graphic Design Services",
    icon: <Sparkles className="h-6 w-6" />,
    plans: [
        { name: 'STARTER', price: '₹3,999', originalPrice: '₹8,000', currentPrice: 3999, popular: false, badge: null, duration: 'Monthly', features: ['10 Social Media Posts', 'Brand Colors', 'Stock Images', '2 Revisions', 'PNG/JPG Format'] },
        { name: 'STANDARD', price: '₹7,999', originalPrice: '₹15,000', currentPrice: 7999, popular: true, badge: 'BEST VALUE', duration: 'Monthly', features: ['20 Social Media Posts', 'Brand Guidelines', 'Custom Graphics', '5 Revisions', 'All Formats', 'Story Templates'] },
        { name: 'PREMIUM', price: '₹12,999', originalPrice: '₹25,000', currentPrice: 12999, popular: false, badge: 'PREMIUM', duration: 'Monthly', features: ['40 Social Media Posts', 'Full Brand Kit', 'Custom Illustrations', 'Unlimited Revisions', 'All Formats', 'Story + Reel Templates', 'Print Ready Files'] }
    ]
}];

export const emailServices: ServiceCategory[] = [{
    category: "Email Marketing Services",
    icon: <Mail className="h-6 w-6" />,
    plans: [
        { name: 'STARTER', price: '₹4,999', originalPrice: '₹10,000', currentPrice: 4999, popular: false, badge: null, duration: 'Monthly', features: ['4 Email Campaigns', 'Template Design', 'List Management', 'Basic Analytics', 'Up to 5,000 Subscribers'] },
        { name: 'STANDARD', price: '₹8,999', originalPrice: '₹16,000', currentPrice: 8999, popular: true, badge: 'POPULAR', duration: 'Monthly', features: ['8 Email Campaigns', 'Custom Templates', 'List Segmentation', 'Advanced Analytics', 'Up to 15,000 Subscribers', 'A/B Testing'] },
        { name: 'PREMIUM', price: '₹14,999', originalPrice: '₹28,000', currentPrice: 14999, popular: false, badge: 'PREMIUM', duration: 'Monthly', features: ['12 Email Campaigns', 'Custom Templates', 'Advanced Segmentation', 'Full Analytics', 'Up to 50,000 Subscribers', 'A/B Testing', 'Automation Workflows'] }
    ]
}];

export const whatsappServices: ServiceCategory[] = [{
    category: "WhatsApp Marketing Services",
    icon: <MessageCircle className="h-6 w-6" />,
    plans: [
        { name: 'BASIC', price: '₹3,999', originalPrice: '₹8,000', currentPrice: 3999, popular: false, badge: null, duration: 'Monthly', features: ['WhatsApp Business Setup', '2 Broadcast Campaigns', 'Template Messages', 'Basic Analytics', 'Up to 1,000 Contacts'] },
        { name: 'STANDARD', price: '₹7,999', originalPrice: '₹14,000', currentPrice: 7999, popular: true, badge: 'POPULAR', duration: 'Monthly', features: ['WhatsApp API Setup', '5 Broadcast Campaigns', 'Custom Templates', 'Advanced Analytics', 'Up to 5,000 Contacts', 'Chatbot Integration'] },
        { name: 'PREMIUM', price: '₹12,999', originalPrice: '₹22,000', currentPrice: 12999, popular: false, badge: 'PREMIUM', duration: 'Monthly', features: ['WhatsApp API Setup', '10 Broadcast Campaigns', 'Custom Templates', 'Full Analytics', 'Up to 20,000 Contacts', 'Advanced Chatbot', 'CRM Integration'] }
    ]
}];

export const seoAuditService: Plan = {
    name: 'WEBSITE SEO AUDIT', price: '₹1,850', originalPrice: '₹4,000', currentPrice: 1850,
    popular: true, badge: 'INSTANT REPORT', duration: 'one-time', icon: <BarChart3 className="h-5 w-5" />,
    features: ['Comprehensive Technical SEO Audit', 'On-Page SEO Analysis', 'Website Performance Audit',
        'Mobile Friendliness Check', 'Security & HTTPS Analysis', 'Structured Data Audit', 'Core Web Vitals Analysis',
        'Competitor SEO Analysis', 'Keyword Gap Analysis', 'Actionable Recommendations', 'Priority Fix Checklist',
        'Detailed Audit Report (PDF)']
};

export const quickServices = [
    {
        name: 'Logo Design Service', price: '₹799', originalPrice: '₹2,999', currentPrice: 799,
        description: 'Professional logo design with multiple concepts', icon: <Target className="h-8 w-8" />,
        features: ['3 Unique Logo Concepts', 'Unlimited Revisions', 'Vector File (AI, EPS)', 'PNG & JPEG Files',
            'Source Files Delivery', '3-5 Days Delivery', 'Money Back Guarantee']
    },
    {
        name: 'Google Business Profile', price: '₹999', originalPrice: '₹2,999', currentPrice: 999,
        description: 'Complete GMB setup and optimization', icon: <MapPin className="h-8 w-8" />,
        features: ['GMB Account Creation', 'Complete Profile Optimization', 'Category & Attribute Setup',
            'Posts & Updates Setup', 'Photo Gallery Setup', 'Review Management Setup', '24/7 Support']
    },
    {
        name: 'Business WhatsApp', price: '₹999', originalPrice: '₹2,499', currentPrice: 999,
        description: 'Professional WhatsApp Business setup', icon: <MessageCircle className="h-8 w-8" />,
        features: ['WhatsApp Business API Setup', 'Business Profile Optimization', 'Catalog Setup',
            'Quick Replies Setup', 'Automated Greeting Message', 'Away Message Setup', '24/7 Technical Support']
    }
];
