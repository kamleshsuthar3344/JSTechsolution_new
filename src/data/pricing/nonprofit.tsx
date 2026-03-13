import React from 'react';
import { HeartHandshake, Coins, Sun } from 'lucide-react';
import { ServiceCategory } from './types';

export const nonprofitServices: ServiceCategory[] = [
    {
        category: "NGO & Charity Website",
        icon: <HeartHandshake className="h-6 w-6" />,
        plans: [
            {
                name: 'Basic', price: '₹9,999', originalPrice: '₹20,000', currentPrice: 9999,
                popular: false, badge: null, features: ['Mission & Vision', 'Donation Info', 'Contact & Volunteer Form']
            },
            {
                name: 'Standard', price: '₹14,999', originalPrice: '₹30,000', currentPrice: 14999,
                popular: true, badge: 'POPULAR', features: ['Online Donation Gateway', 'Events Gallery', 'Blog/News']
            },
            {
                name: 'Premium', price: '₹22,499', originalPrice: '₹45,000', currentPrice: 22499,
                popular: false, badge: 'PREMIUM', features: ['Donor Management', 'Recurring Donations', 'Impact Reports']
            },
            {
                name: 'Enterprise', price: '₹37,499+', originalPrice: '₹75,000', currentPrice: 37499,
                popular: false, badge: 'ENTERPRISE', features: ['Crowdfunding Module', 'Multi-Chapter Management', 'Custom CRM']
            }
        ]
    },
    {
        category: "Crowdfunding Website",
        icon: <Coins className="h-6 w-6" />,
        plans: [
            {
                name: 'Basic', price: '₹24,999', originalPrice: '₹50,000', currentPrice: 24999,
                popular: false, badge: null, features: ['Campaign Page', 'Payment Gateway', 'Social Share']
            },
            {
                name: 'Standard', price: '₹37,499', originalPrice: '₹75,000', currentPrice: 37499,
                popular: true, badge: 'POPULAR', features: ['User Dashboard', 'Fund Tracking', 'Update Updates']
            },
            {
                name: 'Premium', price: '₹54,999', originalPrice: '₹110,000', currentPrice: 54999,
                popular: false, badge: 'PREMIUM', features: ['Rewards System', 'All-or-Nothing Logic', 'Email Automation']
            },
            {
                name: 'Enterprise', price: '₹87,499+', originalPrice: '₹175,000', currentPrice: 87499,
                popular: false, badge: 'ENTERPRISE', features: ['White Lake Platform', 'Mobile App', 'Advanced Admin Control']
            }
        ]
    },
    {
        category: "Religious / Spiritual Website",
        icon: <Sun className="h-6 w-6" />,
        plans: [
            {
                name: 'Basic', price: '₹11,249', originalPrice: '₹22,500', currentPrice: 11249,
                popular: false, badge: null, features: ['Worship Times', 'About Us', 'Contact & Location']
            },
            {
                name: 'Standard', price: '₹16,249', originalPrice: '₹32,500', currentPrice: 16249,
                popular: true, badge: 'POPULAR', features: ['Events Calendar', 'Sermon/Audio Library', 'Donation Link']
            },
            {
                name: 'Premium', price: '₹24,999', originalPrice: '₹50,000', currentPrice: 24999,
                popular: false, badge: 'PREMIUM', features: ['video Streaming', 'Membership/Community', 'Store (Books/Items)']
            },
            {
                name: 'Enterprise', price: '₹39,999+', originalPrice: '₹80,000', currentPrice: 39999,
                popular: false, badge: 'ENTERPRISE', features: ['App for Daily Quotes', 'Online Pujas/Services', 'Member Directory']
            }
        ]
    }
];
