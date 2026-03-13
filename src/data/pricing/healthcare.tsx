import React from 'react';
import { Stethoscope, Activity, Pill, Dumbbell, Smile, Scissors, Heart } from 'lucide-react';
import { ServiceCategory } from './types';

export const healthcareServices: ServiceCategory[] = [
    {
        category: "Hospital & Clinic Website",
        icon: <Stethoscope className="h-6 w-6" />,
        plans: [
            {
                name: 'Basic', price: '₹14,999', originalPrice: '₹30,000', currentPrice: 14999,
                popular: false, badge: null, features: ['Departments Info', 'Doctor Profiles', 'Contact & Map', 'Emergency Number']
            },
            {
                name: 'Standard', price: '₹24,999', originalPrice: '₹50,000', currentPrice: 24999,
                popular: true, badge: 'POPULAR', features: ['Online Appointment', 'Health Blog', 'Gallery', 'Feedback Form']
            },
            {
                name: 'Premium', price: '₹37,499', originalPrice: '₹75,000', currentPrice: 37499,
                popular: false, badge: 'PREMIUM', features: ['Patient Portal', 'Lab Reports Online', 'Telemedicine Integration', 'SEO']
            },
            {
                name: 'Enterprise', price: '₹62,499+', originalPrice: '₹125,000', currentPrice: 62499,
                popular: false, badge: 'ENTERPRISE', features: ['HIMS Integration', 'Multi-location', 'Advanced Patient Management']
            }
        ]
    },
    {
        category: "Doctor & Dentist Website",
        icon: <Activity className="h-6 w-6" />,
        plans: [
            {
                name: 'Basic', price: '₹9,999', originalPrice: '₹20,000', currentPrice: 9999,
                popular: false, badge: null, features: ['Profile & Bio', 'Services List', 'Contact Form', 'Clinic Hours']
            },
            {
                name: 'Standard', price: '₹14,999', originalPrice: '₹30,000', currentPrice: 14999,
                popular: true, badge: 'POPULAR', features: ['Appointment Booking', 'Patient Testimonials', 'Before/After Gallery']
            },
            {
                name: 'Premium', price: '₹22,499', originalPrice: '₹45,000', currentPrice: 22499,
                popular: false, badge: 'PREMIUM', features: ['Health Tips Blog', 'Video Consult Integration', 'Social Media Feeds']
            },
            {
                name: 'Enterprise', price: '₹34,999+', originalPrice: '₹70,000', currentPrice: 34999,
                popular: false, badge: 'ENTERPRISE', features: ['Custom Clinic Management', 'Patient History', 'App Integration']
            }
        ]
    },
    {
        category: "Pharmacy & Lab Website",
        icon: <Pill className="h-6 w-6" />,
        plans: [
            {
                name: 'Basic', price: '₹18,749', originalPrice: '₹37,500', currentPrice: 18749,
                popular: false, badge: null, features: ['Medicine List', 'Store Locator', 'Contact Info', 'Upload Prescription Form']
            },
            {
                name: 'Standard', price: '₹24,999', originalPrice: '₹50,000', currentPrice: 24999,
                popular: true, badge: 'POPULAR', features: ['Online Ordering', 'Home Delivery Info', 'Lab Test Booking']
            },
            {
                name: 'Premium', price: '₹34,999', originalPrice: '₹70,000', currentPrice: 34999,
                popular: false, badge: 'PREMIUM', features: ['Inventory Management', 'User Accounts', 'Discount Coupons']
            },
            {
                name: 'Enterprise', price: '₹49,999+', originalPrice: '₹100,000', currentPrice: 49999,
                popular: false, badge: 'ENTERPRISE', features: ['ePharmacy Platform', 'Doctor Consultation', 'Mobile App']
            }
        ]
    },
    {
        category: "Gym & Fitness Website",
        icon: <Dumbbell className="h-6 w-6" />,
        plans: [
            {
                name: 'Basic', price: '₹11,249', originalPrice: '₹22,500', currentPrice: 11249,
                popular: false, badge: null, features: ['Facilities Gallery', 'Trainer Profiles', 'Contact Info']
            },
            {
                name: 'Standard', price: '₹16,249', originalPrice: '₹32,500', currentPrice: 16249,
                popular: true, badge: 'POPULAR', features: ['Class Schedule', 'Membership Plans', 'BMI Calculator']
            },
            {
                name: 'Premium', price: '₹24,999', originalPrice: '₹50,000', currentPrice: 24999,
                popular: false, badge: 'PREMIUM', features: ['Online Signup', 'Member Dashboard', 'Diet Charts']
            },
            {
                name: 'Enterprise', price: '₹37,499+', originalPrice: '₹75,000', currentPrice: 37499,
                popular: false, badge: 'ENTERPRISE', features: ['Franchise Management', 'Custom Fitness App', 'Merchandise Store']
            }
        ]
    },
    {
        category: "Yoga & Wellness Website",
        icon: <Heart className="h-6 w-6" />,
        plans: [
            {
                name: 'Basic', price: '₹9,999', originalPrice: '₹20,000', currentPrice: 9999,
                popular: false, badge: null, features: ['Class Info', 'Instructor Bios', 'Contact Form']
            },
            {
                name: 'Standard', price: '₹14,999', originalPrice: '₹30,000', currentPrice: 14999,
                popular: true, badge: 'POPULAR', features: ['Workshop Booking', 'Blog', 'Gallery', 'Testimonials']
            },
            {
                name: 'Premium', price: '₹22,499', originalPrice: '₹45,000', currentPrice: 22499,
                popular: false, badge: 'PREMIUM', features: ['Membership Plans', 'Video Classes', 'Newsletter']
            },
            {
                name: 'Enterprise', price: '₹34,999+', originalPrice: '₹70,000', currentPrice: 34999,
                popular: false, badge: 'ENTERPRISE', features: ['Online Course Platform', 'Live Streaming', 'Community Forum']
            }
        ]
    },
    {
        category: "Spa & Salon Website",
        icon: <Scissors className="h-6 w-6" />,
        plans: [
            {
                name: 'Basic', price: '₹12,499', originalPrice: '₹25,000', currentPrice: 12499,
                popular: false, badge: null, features: ['Services Menu', 'Pricing', 'Location/Hours', 'Contact']
            },
            {
                name: 'Standard', price: '₹18,749', originalPrice: '₹37,500', currentPrice: 18749,
                popular: true, badge: 'POPULAR', features: ['Book Appointment', 'Staff Gallary', 'Offers Section']
            },
            {
                name: 'Premium', price: '₹27,499', originalPrice: '₹55,000', currentPrice: 27499,
                popular: false, badge: 'PREMIUM', features: ['Gift Cards', 'Membership System', 'Product Shop']
            },
            {
                name: 'Enterprise', price: '₹42,499+', originalPrice: '₹85,000', currentPrice: 42499,
                popular: false, badge: 'ENTERPRISE', features: ['Multi-Branch Management', 'CRM Integration', 'Custom Loyalty App']
            }
        ]
    }
];
