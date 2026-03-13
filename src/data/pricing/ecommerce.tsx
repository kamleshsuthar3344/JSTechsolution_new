import React from 'react';
import { ShoppingCart, Globe, ShoppingBag, Truck, BookOpen } from 'lucide-react';
import { ServiceCategory } from './types';

export const ecommerceServices: ServiceCategory[] = [
    {
        category: "E-Commerce Website",
        icon: <ShoppingCart className="h-6 w-6" />,
        plans: [
            {
                name: 'Basic', price: '₹18,749', originalPrice: '₹37,500', currentPrice: 18749,
                popular: false, badge: null, features: ['Up to 50 Products', '5–7 Pages', 'Mobile Responsive Design', 'Cart & Checkout', 'WhatsApp Inquiry Button', 'Payment Gateway Integration', 'Basic SEO']
            },
            {
                name: 'Standard', price: '₹24,999', originalPrice: '₹50,000', currentPrice: 24999,
                popular: true, badge: 'POPULAR', features: ['Up to 200 Products', 'Custom UI Design', 'Coupon & Discount Setup', 'Order Management Panel', 'Email Notifications', 'On-Page SEO']
            },
            {
                name: 'Premium', price: '₹32,499', originalPrice: '₹65,000', currentPrice: 32499,
                popular: false, badge: 'PREMIUM', features: ['Unlimited Products', 'Advanced UI/UX', 'Multiple Payment Options', 'Inventory Management', 'Speed & Security Optimization']
            },
            {
                name: 'Enterprise', price: '₹44,999+', originalPrice: '₹90,000', currentPrice: 44999,
                popular: false, badge: 'ENTERPRISE', features: ['Custom Features', 'API / CRM Integration', 'Automation & Reports', 'High-Traffic Optimization']
            }
        ]
    },
    {
        category: "Multi-Vendor Marketplace",
        icon: <Globe className="h-6 w-6" />,
        plans: [
            {
                name: 'Basic', price: '₹37,499', originalPrice: '₹75,000', currentPrice: 37499,
                popular: false, badge: null, features: ['Vendor Registration', 'Admin Dashboard', 'Product Upload System', 'Commission Setup', 'Secure Payments']
            },
            {
                name: 'Standard', price: '₹49,999', originalPrice: '₹100,000', currentPrice: 49999,
                popular: true, badge: 'POPULAR', features: ['Vendor Wallet System', 'Order Tracking', 'Vendor Reviews & Ratings', 'Email & SMS Alerts']
            },
            {
                name: 'Premium', price: '₹64,999', originalPrice: '₹130,000', currentPrice: 64999,
                popular: false, badge: 'PREMIUM', features: ['Advanced Vendor Analytics', 'Multiple Commission Rules', 'Vendor Subscription Plans']
            },
            {
                name: 'Enterprise', price: '₹89,999+', originalPrice: '₹180,000', currentPrice: 89999,
                popular: false, badge: 'ENTERPRISE', features: ['Fully Custom Marketplace', 'Mobile App API Ready', 'Scalability & Automation']
            }
        ]
    },
    {
        category: "Fashion Store Website",
        icon: <ShoppingBag className="h-6 w-6" />,
        plans: [
            {
                name: 'Basic', price: '₹16,249', originalPrice: '₹32,500', currentPrice: 16249,
                popular: false, badge: null, features: ['30 Products', 'Category Filters', 'Size & Color Options', 'Mobile Responsive']
            },
            {
                name: 'Standard', price: '₹22,499', originalPrice: '₹45,000', currentPrice: 22499,
                popular: true, badge: 'POPULAR', features: ['100 Products', 'Wishlist & Coupons', 'Advanced Filters', 'SEO Setup']
            },
            {
                name: 'Premium', price: '₹29,999', originalPrice: '₹60,000', currentPrice: 29999,
                popular: false, badge: 'PREMIUM', features: ['Unlimited Products', 'Lookbook & Style Pages', 'Inventory Automation']
            },
            {
                name: 'Enterprise', price: '₹39,999+', originalPrice: '₹80,000', currentPrice: 39999,
                popular: false, badge: 'ENTERPRISE', features: ['Custom UI & Branding', 'Influencer / Affiliate Integration']
            }
        ]
    },
    {
        category: "Jewelry Store Website",
        icon: <ShoppingBag className="h-6 w-6" />,
        plans: [
            {
                name: 'Basic', price: '₹18,749', originalPrice: '₹37,500', currentPrice: 18749,
                popular: false, badge: null, features: ['Product Showcase', 'Secure Checkout', 'Inquiry & Call Buttons']
            },
            {
                name: 'Standard', price: '₹26,249', originalPrice: '₹52,500', currentPrice: 26249,
                popular: true, badge: 'POPULAR', features: ['Zoom-in Product View', 'Price Calculator', 'Custom Categories']
            },
            {
                name: 'Premium', price: '₹34,999', originalPrice: '₹70,000', currentPrice: 34999,
                popular: false, badge: 'PREMIUM', features: ['Certification Upload', 'Inventory Management', 'Advanced Security']
            },
            {
                name: 'Enterprise', price: '₹49,999+', originalPrice: '₹100,000', currentPrice: 49999,
                popular: false, badge: 'ENTERPRISE', features: ['Custom Design', 'High-Security Architecture']
            }
        ]
    },
    {
        category: "Electronic Store Website",
        icon: <ShoppingCart className="h-6 w-6" />,
        plans: [
            {
                name: 'Basic', price: '₹21,249', originalPrice: '₹42,500', currentPrice: 21249,
                popular: false, badge: null, features: ['Product Comparison', 'Basic Inventory', 'Payment Gateway']
            },
            {
                name: 'Standard', price: '₹28,749', originalPrice: '₹57,500', currentPrice: 28749,
                popular: true, badge: 'POPULAR', features: ['Warranty & Specs Section', 'Advanced Filters', 'SEO Optimization']
            },
            {
                name: 'Premium', price: '₹36,999', originalPrice: '₹74,000', currentPrice: 36999,
                popular: false, badge: 'PREMIUM', features: ['Bulk Upload System', 'Stock Alerts', 'Speed Optimization']
            },
            {
                name: 'Enterprise', price: '₹54,999+', originalPrice: '₹110,000', currentPrice: 54999,
                popular: false, badge: 'ENTERPRISE', features: ['ERP / CRM Integration', 'Custom Modules']
            }
        ]
    },
    {
        category: "Grocery Delivery Website",
        icon: <Truck className="h-6 w-6" />,
        plans: [
            {
                name: 'Basic', price: '₹24,999', originalPrice: '₹50,000', currentPrice: 24999,
                popular: false, badge: null, features: ['Product Categories', 'Delivery Slot Selection', 'COD & Online Payments']
            },
            {
                name: 'Standard', price: '₹34,999', originalPrice: '₹70,000', currentPrice: 34999,
                popular: true, badge: 'POPULAR', features: ['Location-Based Delivery', 'Coupon & Offers', 'Order Notifications']
            },
            {
                name: 'Premium', price: '₹44,999', originalPrice: '₹90,000', currentPrice: 44999,
                popular: false, badge: 'PREMIUM', features: ['Inventory Automation', 'Subscription Orders', 'Admin Reports']
            },
            {
                name: 'Enterprise', price: '₹69,999+', originalPrice: '₹140,000', currentPrice: 69999,
                popular: false, badge: 'ENTERPRISE', features: ['Multi-Store Management', 'Delivery Partner Integration']
            }
        ]
    },
    {
        category: "Book Store Website",
        icon: <BookOpen className="h-6 w-6" />,
        plans: [
            {
                name: 'Basic', price: '₹14,999', originalPrice: '₹30,000', currentPrice: 14999,
                popular: false, badge: null, features: ['Book Listing', 'Search & Categories', 'Inquiry Button']
            },
            {
                name: 'Standard', price: '₹19,999', originalPrice: '₹40,000', currentPrice: 19999,
                popular: true, badge: 'POPULAR', features: ['Online Purchase', 'Reviews & Ratings', 'SEO Setup']
            },
            {
                name: 'Premium', price: '₹26,999', originalPrice: '₹54,000', currentPrice: 26999,
                popular: false, badge: 'PREMIUM', features: ['Digital Book Downloads', 'Inventory Management']
            },
            {
                name: 'Enterprise', price: '₹39,999+', originalPrice: '₹80,000', currentPrice: 39999,
                popular: false, badge: 'ENTERPRISE', features: ['Subscription / Membership', 'LMS / Reading Portal Integration']
            }
        ]
    }
];
