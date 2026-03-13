import React from 'react';
import { Utensils, Truck, CakeSlice } from 'lucide-react';
import { ServiceCategory } from './types';

export const foodServices: ServiceCategory[] = [
    {
        category: "Restaurant & Cafe Website",
        icon: <Utensils className="h-6 w-6" />,
        plans: [
            {
                name: 'Basic', price: '₹11,249', originalPrice: '₹22,500', currentPrice: 11249,
                popular: false, badge: null, features: ['Digital Menu', 'About Us', 'Contact & Location', 'Gallery']
            },
            {
                name: 'Standard', price: '₹16,249', originalPrice: '₹32,500', currentPrice: 16249,
                popular: true, badge: 'POPULAR', features: ['Table Booking Form', 'Reviews Integration', 'Blog', 'QR Code Menu']
            },
            {
                name: 'Premium', price: '₹24,999', originalPrice: '₹50,000', currentPrice: 24999,
                popular: false, badge: 'PREMIUM', features: ['Online Ordering', 'Payment Gateway', 'Customer Database']
            },
            {
                name: 'Enterprise', price: '₹37,499+', originalPrice: '₹75,000', currentPrice: 37499,
                popular: false, badge: 'ENTERPRISE', features: ['POS Integration', 'Kitchen Display System', 'Loyalty Program']
            }
        ]
    },
    {
        category: "Food Delivery Website",
        icon: <Truck className="h-6 w-6" />,
        plans: [
            {
                name: 'Basic', price: '₹24,999', originalPrice: '₹50,000', currentPrice: 24999,
                popular: false, badge: null, features: ['Menu Setup', 'Delivery Areas', 'COD', 'Basic Admin Panel']
            },
            {
                name: 'Standard', price: '₹34,999', originalPrice: '₹70,000', currentPrice: 34999,
                popular: true, badge: 'POPULAR', features: ['Live Order Tracking (Basic)', 'Discount Coupons', 'Online Payments']
            },
            {
                name: 'Premium', price: '₹49,999', originalPrice: '₹100,000', currentPrice: 49999,
                popular: false, badge: 'PREMIUM', features: ['Delivery Boy App', 'Advanced Tracking', 'Push Notifications']
            },
            {
                name: 'Enterprise', price: '₹74,999+', originalPrice: '₹150,000', currentPrice: 74999,
                popular: false, badge: 'ENTERPRISE', features: ['Multi-Restaurant Platform', 'AI Recommendations', 'Heatmap Analytics']
            }
        ]
    },
    {
        category: "Bakery & Cake Shop Website",
        icon: <CakeSlice className="h-6 w-6" />,
        plans: [
            {
                name: 'Basic', price: '₹12,499', originalPrice: '₹25,000', currentPrice: 12499,
                popular: false, badge: null, features: ['Product Gallery', 'Flavor Menu', 'Inquiry Form']
            },
            {
                name: 'Standard', price: '₹17,499', originalPrice: '₹35,000', currentPrice: 17499,
                popular: true, badge: 'POPULAR', features: ['Custom Cake Orders', 'Delivery Slot Picker', 'Reviews']
            },
            {
                name: 'Premium', price: '₹27,499', originalPrice: '₹55,000', currentPrice: 27499,
                popular: false, badge: 'PREMIUM', features: ['Online Payment', 'Inventory Management', 'Subscription Boxes']
            },
            {
                name: 'Enterprise', price: '₹42,499+', originalPrice: '₹85,000', currentPrice: 42499,
                popular: false, badge: 'ENTERPRISE', features: ['Franchise Management', 'Mobile App', 'Custom Features']
            }
        ]
    }
];
