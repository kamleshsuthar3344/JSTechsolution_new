import React from 'react';
import { Building, Briefcase, Rocket, Landmark, Scale, Users, Calendar, Search } from 'lucide-react';
import { ServiceCategory } from './types';

export const businessServices: ServiceCategory[] = [
    {
        category: "Business Consulting Website",
        icon: <Briefcase className="h-6 w-6" />,
        plans: [
            {
                name: 'Basic', price: '₹9,999', originalPrice: '₹20,000', currentPrice: 9999,
                popular: false, badge: null, features: ['One Page Website', 'Service Section', 'Contact Form', 'Mobile Friendly']
            },
            {
                name: 'Standard', price: '₹14,999', originalPrice: '₹30,000', currentPrice: 14999,
                popular: true, badge: 'POPULAR', features: ['5–6 Pages', 'Blog Section', 'Testimonials', 'Appointment Booking (Basic)']
            },
            {
                name: 'Premium', price: '₹24,999', originalPrice: '₹50,000', currentPrice: 24999,
                popular: false, badge: 'PREMIUM', features: ['10+ Pages', 'Case Studies', 'Advanced Booking', 'Newsletter Integration']
            },
            {
                name: 'Enterprise', price: '₹39,999+', originalPrice: '₹80,000', currentPrice: 39999,
                popular: false, badge: 'ENTERPRISE', features: ['Custom Functionality', 'Client Portal', 'Advanced SEO']
            }
        ]
    },
    {
        category: "Corporate Website",
        icon: <Building className="h-6 w-6" />,
        plans: [
            {
                name: 'Basic', price: '₹12,499', originalPrice: '₹25,000', currentPrice: 12499,
                popular: false, badge: null, features: ['Home & About', 'Services', 'Contact Info', 'Professional Layout']
            },
            {
                name: 'Standard', price: '₹18,749', originalPrice: '₹37,500', currentPrice: 18749,
                popular: true, badge: 'POPULAR', features: ['Team Page', 'Careers Section', 'Lead Inquiry Forms', 'SEO Basics']
            },
            {
                name: 'Premium', price: '₹29,999', originalPrice: '₹60,000', currentPrice: 29999,
                popular: false, badge: 'PREMIUM', features: ['Investor Relations', 'Media/Press Room', 'Advanced Security', 'Integration']
            },
            {
                name: 'Enterprise', price: '₹49,999+', originalPrice: '₹100,000', currentPrice: 49999,
                popular: false, badge: 'ENTERPRISE', features: ['Global/Multi-Site', 'Intranet Portal', 'Custom Enterprise Solutions']
            }
        ]
    },
    {
        category: "Startup Website",
        icon: <Rocket className="h-6 w-6" />,
        plans: [
            {
                name: 'MVP', price: '₹11,249', originalPrice: '₹22,500', currentPrice: 11249,
                popular: false, badge: null, features: ['Landing Page', 'Core Features Showcase', 'Email Capture', 'Fast Loading']
            },
            {
                name: 'Growth', price: '₹17,499', originalPrice: '₹35,000', currentPrice: 17499,
                popular: true, badge: 'POPULAR', features: ['5 Pages', 'Blog for SEO', 'Analytics Setup', 'Social Media Feeds']
            },
            {
                name: 'Scale-Up', price: '₹27,499', originalPrice: '₹55,000', currentPrice: 27499,
                popular: false, badge: 'PREMIUM', features: ['Product Demos', 'Integration (CRM/Mailchimp)', 'User Accounts']
            },
            {
                name: 'Unicorn', price: '₹44,999+', originalPrice: '₹90,000', currentPrice: 44999,
                popular: false, badge: 'ENTERPRISE', features: ['Custom Web App Features', 'Complex Backend', 'High Scalability']
            }
        ]
    },
    {
        category: "Finance & Fintech Website",
        icon: <Landmark className="h-6 w-6" />,
        plans: [
            {
                name: 'Basic', price: '₹18,749', originalPrice: '₹37,500', currentPrice: 18749,
                popular: false, badge: null, features: ['Service Info', 'Contact Form', 'Trust Badges', 'Secure Hosting Info']
            },
            {
                name: 'Standard', price: '₹24,999', originalPrice: '₹50,000', currentPrice: 24999,
                popular: true, badge: 'POPULAR', features: ['Loan/EMI Calculators', 'Application Forms', 'Blog & Insights']
            },
            {
                name: 'Premium', price: '₹37,499', originalPrice: '₹75,000', currentPrice: 37499,
                popular: false, badge: 'PREMIUM', features: ['Client Login', 'Document Upload', 'API Integration', 'Advanced Security']
            },
            {
                name: 'Enterprise', price: '₹59,999+', originalPrice: '₹120,000', currentPrice: 59999,
                popular: false, badge: 'ENTERPRISE', features: ['Banking Grade Security', 'Real-Time Data', 'Custom Fintech Modules']
            }
        ]
    },
    {
        category: "Legal & Law Firm Website",
        icon: <Scale className="h-6 w-6" />,
        plans: [
            {
                name: 'Basic', price: '₹11,249', originalPrice: '₹22,500', currentPrice: 11249,
                popular: false, badge: null, features: ['Practice Areas', 'Attorney Profiles', 'Contact Info']
            },
            {
                name: 'Standard', price: '₹16,249', originalPrice: '₹32,500', currentPrice: 16249,
                popular: true, badge: 'POPULAR', features: ['Consultation Booking', 'Case Results', 'Blog/News']
            },
            {
                name: 'Premium', price: '₹24,999', originalPrice: '₹50,000', currentPrice: 24999,
                popular: false, badge: 'PREMIUM', features: ['Client Portal', 'Document Resources', 'Live Chat Integration']
            },
            {
                name: 'Enterprise', price: '₹37,499+', originalPrice: '₹75,000', currentPrice: 37499,
                popular: false, badge: 'ENTERPRISE', features: ['Case Management System', 'Advanced Search', 'Intranet']
            }
        ]
    },
    {
        category: "Co-Working Space Website",
        icon: <Users className="h-6 w-6" />,
        plans: [
            {
                name: 'Basic', price: '₹14,999', originalPrice: '₹30,000', currentPrice: 14999,
                popular: false, badge: null, features: ['Location Showcase', 'Amenities List', 'Inquiry Form']
            },
            {
                name: 'Standard', price: '₹22,499', originalPrice: '₹45,000', currentPrice: 22499,
                popular: true, badge: 'POPULAR', features: ['Desk/Room Booking', 'Pricing Plans', 'Virtual Tour']
            },
            {
                name: 'Premium', price: '₹32,499', originalPrice: '₹65,000', currentPrice: 32499,
                popular: false, badge: 'PREMIUM', features: ['Member Login', 'Event Calendar', 'Payment Integration']
            },
            {
                name: 'Enterprise', price: '₹49,999+', originalPrice: '₹100,000', currentPrice: 49999,
                popular: false, badge: 'ENTERPRISE', features: ['Multi-Location Management', 'CRM Connection', 'Community App']
            }
        ]
    },
    {
        category: "Event Management Website",
        icon: <Calendar className="h-6 w-6" />,
        plans: [
            {
                name: 'Basic', price: '₹13,749', originalPrice: '₹27,500', currentPrice: 13749,
                popular: false, badge: null, features: ['Portfolio Gallery', 'Services List', 'Contact Form']
            },
            {
                name: 'Standard', price: '₹19,999', originalPrice: '₹40,000', currentPrice: 19999,
                popular: true, badge: 'POPULAR', features: ['Event Scheduling', 'Blog/Updates', 'Video Gallery']
            },
            {
                name: 'Premium', price: '₹29,999', originalPrice: '₹60,000', currentPrice: 29999,
                popular: false, badge: 'PREMIUM', features: ['Ticket Booking', 'Countdown Timer', 'Speaker Profiles']
            },
            {
                name: 'Enterprise', price: '₹44,999+', originalPrice: '₹90,000', currentPrice: 44999,
                popular: false, badge: 'ENTERPRISE', features: ['Virtual Event Platform', 'Live Streaming Setup', 'Advanced Registration']
            }
        ]
    },
    {
        category: "Job Portal Website",
        icon: <Search className="h-6 w-6" />,
        plans: [
            {
                name: 'Basic', price: '₹24,999', originalPrice: '₹50,000', currentPrice: 24999,
                popular: false, badge: null, features: ['Job Listings', 'Search Filters', 'Company Profiles']
            },
            {
                name: 'Standard', price: '₹37,499', originalPrice: '₹75,000', currentPrice: 37499,
                popular: true, badge: 'POPULAR', features: ['Resume Upload', 'Candidate Dashboard', 'Employer Dashboard']
            },
            {
                name: 'Premium', price: '₹54,999', originalPrice: '₹110,000', currentPrice: 54999,
                popular: false, badge: 'PREMIUM', features: ['Job Alerts', 'Application Tracking', 'Paid Listings']
            },
            {
                name: 'Enterprise', price: '₹79,999+', originalPrice: '₹160,000', currentPrice: 79999,
                popular: false, badge: 'ENTERPRISE', features: ['AI Recommendations', 'Skill Testing', 'Mobile App Integration']
            }
        ]
    }
];
