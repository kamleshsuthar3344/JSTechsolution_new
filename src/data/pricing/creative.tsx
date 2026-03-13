import React from 'react';
import { User, Camera, Music, Newspaper } from 'lucide-react';
import { ServiceCategory } from './types';

export const creativeServices: ServiceCategory[] = [
    {
        category: "Portfolio Website",
        icon: <User className="h-6 w-6" />,
        plans: [
            {
                name: 'Basic', price: '₹8,749', originalPrice: '₹17,500', currentPrice: 8749,
                popular: false, badge: null, features: ['Bio Section', 'Project Gallery', 'Contact Form', 'Resume Download']
            },
            {
                name: 'Standard', price: '₹13,749', originalPrice: '₹27,500', currentPrice: 13749,
                popular: true, badge: 'POPULAR', features: ['Blog Integration', 'Testimonials', 'Service Detail Pages']
            },
            {
                name: 'Premium', price: '₹19,999', originalPrice: '₹40,000', currentPrice: 19999,
                popular: false, badge: 'PREMIUM', features: ['Case Study Layouts', 'Client Login', 'Newsletter Signup']
            },
            {
                name: 'Enterprise', price: '₹29,999+', originalPrice: '₹60,000', currentPrice: 29999,
                popular: false, badge: 'ENTERPRISE', features: ['Custom Interactive Resume', 'Advanced Animations', 'eCommerce for Digital Products']
            }
        ]
    },
    {
        category: "Photography Website",
        icon: <Camera className="h-6 w-6" />,
        plans: [
            {
                name: 'Basic', price: '₹11,249', originalPrice: '₹22,500', currentPrice: 11249,
                popular: false, badge: null, features: ['Photo Gallery (Standard)', 'Service Pricing', 'Contact Form']
            },
            {
                name: 'Standard', price: '₹16,249', originalPrice: '₹32,500', currentPrice: 16249,
                popular: true, badge: 'POPULAR', features: ['Client Proofing Area', 'Booking System', 'High-Res Download Option']
            },
            {
                name: 'Premium', price: '₹24,999', originalPrice: '₹50,000', currentPrice: 24999,
                popular: false, badge: 'PREMIUM', features: ['Print Store (eCommerce)', 'Private Galleries', 'Blog']
            },
            {
                name: 'Enterprise', price: '₹37,499+', originalPrice: '₹75,000', currentPrice: 37499,
                popular: false, badge: 'ENTERPRISE', features: ['Stock Photo Marketplace', 'Advanced Rights Management', 'Volume Licensing']
            }
        ]
    },
    {
        category: "Artist & Musician Website",
        icon: <Music className="h-6 w-6" />,
        plans: [
            {
                name: 'Basic', price: '₹9,999', originalPrice: '₹20,000', currentPrice: 9999,
                popular: false, badge: null, features: ['Bio & Discography', 'Event List', 'Contact Form']
            },
            {
                name: 'Standard', price: '₹14,999', originalPrice: '₹30,000', currentPrice: 14999,
                popular: true, badge: 'POPULAR', features: ['Music/Video Player', 'Merch Store (Basic)', 'Tour Dates']
            },
            {
                name: 'Premium', price: '₹22,499', originalPrice: '₹45,000', currentPrice: 22499,
                popular: false, badge: 'PREMIUM', features: ['Fan Club Membership', 'Advanced Merch Store', 'Newsletter']
            },
            {
                name: 'Enterprise', price: '₹34,999+', originalPrice: '₹70,000', currentPrice: 34999,
                popular: false, badge: 'ENTERPRISE', features: ['Streaming Integration', 'NFT Gallery', 'Virtual Concert Setup']
            }
        ]
    },
    {
        category: "Blog & News Website",
        icon: <Newspaper className="h-6 w-6" />,
        plans: [
            {
                name: 'Basic', price: '₹9,999', originalPrice: '₹20,000', currentPrice: 9999,
                popular: false, badge: null, features: ['Blog Layout', 'Categories', 'Comment System', 'Social Share']
            },
            {
                name: 'Standard', price: '₹14,999', originalPrice: '₹30,000', currentPrice: 14999,
                popular: true, badge: 'POPULAR', features: ['AdSense Spaces', 'Newsletter Integration', 'Advanced SEO']
            },
            {
                name: 'Premium', price: '₹22,499', originalPrice: '₹45,000', currentPrice: 22499,
                popular: false, badge: 'PREMIUM', features: ['Guest Post Submission', 'Membership Content', 'Podcast Support']
            },
            {
                name: 'Enterprise', price: '₹37,499+', originalPrice: '₹75,000', currentPrice: 37499,
                popular: false, badge: 'ENTERPRISE', features: ['Multi-Author Platform', 'News Aggregation', 'Custom CMS Features']
            }
        ]
    }
];
