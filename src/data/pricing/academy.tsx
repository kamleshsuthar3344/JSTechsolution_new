import { Layout, Code, Smartphone, Megaphone, TrendingUp, Search, Palette } from 'lucide-react';
import { AcademyCourse } from './types';

export const academyCourses: AcademyCourse[] = [
    {
        title: 'Website Development (WordPress)',
        price: '₹2,500',
        description: 'Learn to build professional WordPress websites including themes, plugins, hosting, security, and client-ready projects.',
        icon: <Layout className="h-8 w-8" />,
        color: 'bg-blue-500',
        borderColor: 'border-blue-100'
    },
    {
        title: 'Website Development (Coding)',
        price: '₹25,000',
        description: 'Complete website development training using coding languages such as HTML, CSS, JavaScript, and backend fundamentals.',
        icon: <Code className="h-8 w-8" />,
        color: 'bg-indigo-600',
        borderColor: 'border-indigo-100'
    },
    {
        title: 'Social Media Marketing (SMM)',
        price: '₹1,100',
        description: 'Master Instagram, Facebook, and LinkedIn marketing, content planning, audience growth strategies, and brand building.',
        icon: <Smartphone className="h-8 w-8" />,
        color: 'bg-pink-500',
        borderColor: 'border-pink-100'
    },
    {
        title: 'Digital Marketing',
        price: '₹2,500',
        description: 'Comprehensive digital marketing training covering SEO, SMM, paid ads, analytics, and lead generation strategies.',
        icon: <Megaphone className="h-8 w-8" />,
        color: 'bg-purple-500',
        borderColor: 'border-purple-100'
    },
    {
        title: 'Meta Ads Expert',
        price: '₹2,500',
        description: 'Learn campaign creation, audience targeting, creative strategy, budget planning, and performance optimization.',
        icon: <TrendingUp className="h-8 w-8" />,
        color: 'bg-blue-600',
        borderColor: 'border-blue-200'
    },
    {
        title: 'Google Ads Expert',
        price: '₹2,500',
        description: 'In-depth training on Search Ads, Display Ads, keyword research, conversion tracking, and ROI-driven campaigns.',
        icon: <Search className="h-8 w-8" />,
        color: 'bg-orange-500',
        borderColor: 'border-orange-100'
    },
    {
        title: 'Graphic Designing',
        price: '₹2,500',
        description: 'Learn Canva and core graphic design principles for social media creatives, branding, and marketing materials.',
        icon: <Palette className="h-8 w-8" />,
        color: 'bg-teal-500',
        borderColor: 'border-teal-100'
    }
];
