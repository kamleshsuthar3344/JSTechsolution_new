import React from 'react';
import { Monitor, CreditCard } from 'lucide-react';
import { ServiceCategory } from './types';

export const platformServices: ServiceCategory[] = [
    {
        category: "WordPress Website",
        icon: <Monitor className="h-6 w-6" />,
        plans: [
            {
                name: 'Basic', price: '₹12,499', originalPrice: '₹25,000', currentPrice: 12499,
                popular: false, badge: null, features: ['5–7 Pages', 'Custom Design', 'Mobile Responsive', 'Essential Plugins Setup', 'Basic SEO', 'Inquiry Form']
            },
            {
                name: 'Standard', price: '₹18,749', originalPrice: '₹37,500', currentPrice: 18749,
                popular: true, badge: 'POPULAR', features: ['10–12 Pages', 'Custom Theme Setup', 'Blog Configuration', 'On-Page SEO', 'Security Hardening', 'Speed Optimization']
            },
            {
                name: 'Premium', price: '₹27,499', originalPrice: '₹55,000', currentPrice: 27499,
                popular: false, badge: 'PREMIUM', features: ['Unlimited Pages', 'E-commerce Setup (WooCommerce)', 'Advanced Filtering', 'Multi-Language Support', 'Ongoing Support (3 Months)']
            },
            {
                name: 'Enterprise', price: '₹39,999+', originalPrice: '₹80,000', currentPrice: 39999,
                popular: false, badge: 'ENTERPRISE', features: ['Custom Plugin Development', 'High-Traffic Scaling', 'CRM Integration', 'Dedicated Account Manager']
            }
        ]
    },
    {
        category: "Shopify Store",
        icon: <CreditCard className="h-6 w-6" />,
        plans: [
            {
                name: 'Basic', price: '₹18,749', originalPrice: '₹37,500', currentPrice: 18749,
                popular: false, badge: null, features: ['Store Setup', 'Theme Installation', 'Up to 25 Products', 'Payment Gateway Integration', 'Basic SEO Setup']
            },
            {
                name: 'Standard', price: '₹27,499', originalPrice: '₹55,000', currentPrice: 27499,
                popular: true, badge: 'POPULAR', features: ['Custom Theme Tweaks', '100+ Products', 'App Integration (Reviews, Chat)', 'On-Page SEO', 'Inventory Setup']
            },
            {
                name: 'Premium', price: '₹43,749', originalPrice: '₹87,500', currentPrice: 43749,
                popular: false, badge: 'PREMIUM', features: ['Advanced Customization', 'Unlimited Products', 'Marketing Automation Setup', 'Advanced Analytics Dashboard', 'Speed Optimization']
            },
            {
                name: 'Enterprise', price: '₹62,499+', originalPrice: '₹125,000', currentPrice: 62499,
                popular: false, badge: 'ENTERPRISE', features: ['Custom App Development', 'Wholesale/B2B Setup', 'ERP Integration', 'Strategic Growth Consulting']
            }
        ]
    }
];
