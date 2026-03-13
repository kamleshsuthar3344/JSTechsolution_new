import React from 'react';
import { Newspaper, Heart, Users } from 'lucide-react';
import { ServiceCategory } from './types';

export const mediaServices: ServiceCategory[] = [
    {
        category: "News Portal Website",
        icon: <Newspaper className="h-6 w-6" />,
        plans: [
            {
                name: 'Basic', price: '₹11,249', originalPrice: '₹22,500', currentPrice: 11249,
                popular: false, badge: null, features: ['Local News Layout', 'Categories', 'Breaking News Ticker']
            },
            {
                name: 'Standard', price: '₹16,249', originalPrice: '₹32,500', currentPrice: 16249,
                popular: true, badge: 'POPULAR', features: ['Video News Support', 'Ad Management', 'Reporter Login']
            },
            {
                name: 'Premium', price: '₹24,999', originalPrice: '₹50,000', currentPrice: 24999,
                popular: false, badge: 'PREMIUM', features: ['ePaper Integration', 'Live TV Streaming Integration', 'Mobile App Ready']
            },
            {
                name: 'Enterprise', price: '₹39,999+', originalPrice: '₹80,000', currentPrice: 39999,
                popular: false, badge: 'ENTERPRISE', features: ['AI News Recommendations', 'Big Data Analytics', 'High Traffic Server Setup']
            }
        ]
    },
    {
        category: "Matrimonial Website",
        icon: <Heart className="h-6 w-6" />,
        plans: [
            {
                name: 'Basic', price: '₹24,999', originalPrice: '₹50,000', currentPrice: 24999,
                popular: false, badge: null, features: ['Profile Creation', 'Search Filters', 'Express Interest']
            },
            {
                name: 'Standard', price: '₹37,499', originalPrice: '₹75,000', currentPrice: 37499,
                popular: true, badge: 'POPULAR', features: ['Membership Plans', 'Chat System', 'Privacy Controls']
            },
            {
                name: 'Premium', price: '₹62,499', originalPrice: '₹125,000', currentPrice: 62499,
                popular: false, badge: 'PREMIUM', features: ['Horoscope Matching', 'Success Stories', 'Verified Profiles Badge']
            },
            {
                name: 'Enterprise', price: '₹99,999+', originalPrice: '₹200,000', currentPrice: 99999,
                popular: false, badge: 'ENTERPRISE', features: ['Mobile App', 'Wedding Planner Service Integration', 'Franchise Module']
            }
        ]
    },
    {
        category: "Social Network / Community Website",
        icon: <Users className="h-6 w-6" />,
        plans: [
            {
                name: 'Basic', price: '₹29,999', originalPrice: '₹60,000', currentPrice: 29999,
                popular: false, badge: null, features: ['User Profiles', 'Friend Requests', 'Activity Feed (Basic)']
            },
            {
                name: 'Standard', price: '₹49,999', originalPrice: '₹100,000', currentPrice: 49999,
                popular: true, badge: 'POPULAR', features: ['Groups & Forums', 'Private Messaging', 'Photo/Video Sharing']
            },
            {
                name: 'Premium', price: '₹74,999', originalPrice: '₹150,000', currentPrice: 74999,
                popular: false, badge: 'PREMIUM', features: ['Marketplace Integration', 'Events System', 'Polls & Quizzes']
            },
            {
                name: 'Enterprise', price: '₹124,999+', originalPrice: '₹250,000', currentPrice: 124999,
                popular: false, badge: 'ENTERPRISE', features: ['Live Streaming', 'Mobile App', 'Monetization (Ads/Membership)']
            }
        ]
    }
];
