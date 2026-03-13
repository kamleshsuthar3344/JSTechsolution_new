import React from 'react';
import { GraduationCap, BookOpen, MonitorPlay, Baby, Library } from 'lucide-react';
import { ServiceCategory } from './types';

export const educationServices: ServiceCategory[] = [
    {
        category: "School & College Website",
        icon: <GraduationCap className="h-6 w-6" />,
        plans: [
            {
                name: 'Basic', price: '₹14,999', originalPrice: '₹30,000', currentPrice: 14999,
                popular: false, badge: null, features: ['About Us', 'Admissions Info', 'Events Gallery', 'Contact Form']
            },
            {
                name: 'Standard', price: '₹24,999', originalPrice: '₹50,000', currentPrice: 24999,
                popular: true, badge: 'POPULAR', features: ['Online Admissions', 'Results Portal', 'Notice Board', 'Faculty Profiles']
            },
            {
                name: 'Premium', price: '₹37,499', originalPrice: '₹75,000', currentPrice: 37499,
                popular: false, badge: 'PREMIUM', features: ['Fee Payment Gateway', 'Student Login', 'Attendance Integration']
            },
            {
                name: 'Enterprise', price: '₹62,499+', originalPrice: '₹125,000', currentPrice: 62499,
                popular: false, badge: 'ENTERPRISE', features: ['Complete School Management System', 'LMS Integration', 'App Support']
            }
        ]
    },
    {
        category: "Coaching Institute Website",
        icon: <BookOpen className="h-6 w-6" />,
        plans: [
            {
                name: 'Basic', price: '₹11,249', originalPrice: '₹22,500', currentPrice: 11249,
                popular: false, badge: null, features: ['Courses List', 'Success Stories', 'Registration Form']
            },
            {
                name: 'Standard', price: '₹18,749', originalPrice: '₹37,500', currentPrice: 18749,
                popular: true, badge: 'POPULAR', features: ['Online Test Series Integration', 'Student Portal', 'Download Notes']
            },
            {
                name: 'Premium', price: '₹29,999', originalPrice: '₹60,000', currentPrice: 29999,
                popular: false, badge: 'PREMIUM', features: ['Live Class Integration', 'Fee Management', 'Video Library']
            },
            {
                name: 'Enterprise', price: '₹49,999+', originalPrice: '₹100,000', currentPrice: 49999,
                popular: false, badge: 'ENTERPRISE', features: ['Custom eLearning Platform', 'Mobile App', 'Marketing Automation']
            }
        ]
    },
    {
        category: "Online Course (LMS) Website",
        icon: <MonitorPlay className="h-6 w-6" />,
        plans: [
            {
                name: 'Basic', price: '₹24,999', originalPrice: '₹50,000', currentPrice: 24999,
                popular: false, badge: null, features: ['Course Listing', 'User Registration', 'PayPal/Stripe Integration']
            },
            {
                name: 'Standard', price: '₹37,499', originalPrice: '₹75,000', currentPrice: 37499,
                popular: true, badge: 'POPULAR', features: ['Quizzes & Assignments', 'Certificate Generation', 'Drip Content']
            },
            {
                name: 'Premium', price: '₹62,499', originalPrice: '₹125,000', currentPrice: 62499,
                popular: false, badge: 'PREMIUM', features: ['Live Webinars', 'Community/Forum', 'Affiliate System']
            },
            {
                name: 'Enterprise', price: '₹87,499+', originalPrice: '₹175,000', currentPrice: 87499,
                popular: false, badge: 'ENTERPRISE', features: ['Custom Learning Path', 'Gamification', 'Mobile Learning App']
            }
        ]
    },
    {
        category: "Preschool & Daycare Website",
        icon: <Baby className="h-6 w-6" />,
        plans: [
            {
                name: 'Basic', price: '₹9,999', originalPrice: '₹20,000', currentPrice: 9999,
                popular: false, badge: null, features: ['Programs', 'Gallery', 'Contact Us', 'Inquiry Form']
            },
            {
                name: 'Standard', price: '₹14,999', originalPrice: '₹30,000', currentPrice: 14999,
                popular: true, badge: 'POPULAR', features: ['Event Calendar', 'Parent Reviews', 'Download Brochure']
            },
            {
                name: 'Premium', price: '₹19,999', originalPrice: '₹40,000', currentPrice: 19999,
                popular: false, badge: 'PREMIUM', features: ['Admission Portal', 'Live Camera Access (Integration)', 'Fee Info']
            },
            {
                name: 'Enterprise', price: '₹32,499+', originalPrice: '₹65,000', currentPrice: 32499,
                popular: false, badge: 'ENTERPRISE', features: ['Parent App', 'Daily Activity Tracker', 'Franchise Model']
            }
        ]
    },
    {
        category: "Library & Booking Website",
        icon: <Library className="h-6 w-6" />,
        plans: [
            {
                name: 'Basic', price: '₹14,999', originalPrice: '₹30,000', currentPrice: 14999,
                popular: false, badge: null, features: ['Book Catalog', 'Membership Info', 'Contact Form']
            },
            {
                name: 'Standard', price: '₹19,999', originalPrice: '₹40,000', currentPrice: 19999,
                popular: true, badge: 'POPULAR', features: ['Search Books', 'Check Availability', 'Reserve Online']
            },
            {
                name: 'Premium', price: '₹29,999', originalPrice: '₹60,000', currentPrice: 29999,
                popular: false, badge: 'PREMIUM', features: ['Member Dashboard', 'Fine Calculation', 'eBook Support']
            },
            {
                name: 'Enterprise', price: '₹44,999+', originalPrice: '₹90,000', currentPrice: 44999,
                popular: false, badge: 'ENTERPRISE', features: ['Inter-Library Loan', 'Digital Archive', 'RFID Integration Support']
            }
        ]
    }
];
