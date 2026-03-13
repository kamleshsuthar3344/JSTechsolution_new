import {
    Eye,
    ThumbsUp,
    Users,
    Send,
    Target,
    MessageCircle,
    Rocket,
    Globe,
    Phone,
    Link as LinkIcon
} from 'lucide-react';
import { GrowthService } from './types';

// Helper to handle Heart icon which is sometimes imported as Heart
const HeartIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24" height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
);

export const instagramServices: GrowthService[] = [
    {
        id: "ig-views",
        name: "Instagram Reels Views",
        price: 10,
        min: 100,
        max: 1000000,
        description: "High-quality Instagram Reel views with fast delivery",
        features: ["Super Fast Speed", "Lifetime Non Drop", "Instant Start"],
        icon: <Eye className="h-6 w-6" />,
        category: "instagram"
    },
    {
        id: "ig-likes",
        name: "Instagram Likes",
        price: 200,
        min: 100,
        max: 50000,
        description: "Premium Instagram likes from real accounts",
        features: ["Real Accounts", "Fast Delivery", "Non Drop"],
        icon: <ThumbsUp className="h-6 w-6" />,
        category: "instagram"
    },
    {
        id: "ig-post-views",
        name: "Instagram Post Views",
        price: 10,
        min: 100,
        max: 100000,
        description: "Boost your post visibility with genuine views",
        features: ["Genuine Views", "Quick Start", "24/7 Support"],
        icon: <Eye className="h-6 w-6" />,
        category: "instagram"
    },
    {
        id: "ig-followers",
        name: "Instagram Followers",
        price: 879.06,
        min: 100,
        max: 10000,
        description: "Grow your Instagram with real followers",
        features: ["Real Followers", "Gradual Growth", "Safe & Secure"],
        icon: <Users className="h-6 w-6" />,
        category: "instagram"
    },
    {
        id: "ig-likes-indian",
        name: "Instagram Likes ~ Indian",
        price: 500,
        min: 100,
        max: 50000,
        description: "Indian targeted likes for better engagement",
        features: ["Indian Accounts", "Targeted Engagement", "High Quality"],
        icon: <ThumbsUp className="h-6 w-6" />,
        category: "instagram"
    },
    {
        id: "ig-story-views",
        name: "Instagram Story Views",
        price: 50,
        min: 100,
        max: 100000,
        description: "Increase your story reach with genuine views",
        features: ["Real Views", "Quick Delivery", "Non Drop"],
        icon: <Eye className="h-6 w-6" />,
        category: "instagram"
    },
    {
        id: "ig-shares",
        name: "Instagram Shares",
        price: 10,
        min: 100,
        max: 50000,
        description: "Boost your content sharing",
        features: ["Organic Shares", "Real Accounts", "Safe Service"],
        icon: <Send className="h-6 w-6" />,
        category: "instagram"
    },
    {
        id: "ig-reach",
        name: "Instagram Reach + Impression",
        price: 30,
        min: 100,
        max: 100000,
        description: "Increase your post reach and impressions",
        features: ["Increased Reach", "Better Engagement", "Real Results"],
        icon: <Target className="h-6 w-6" />,
        category: "instagram"
    },
    {
        id: "ig-comments",
        name: "Instagram Comments",
        price: 300,
        min: 10,
        max: 1000,
        description: "Genuine comments on your posts",
        features: ["Custom Comments", "Real Accounts", "Quality Engagement"],
        icon: <MessageCircle className="h-6 w-6" />,
        category: "instagram"
    },
    {
        id: "ig-reel-promotion",
        name: "Instagram Reel Promotion",
        price: 2601.00,
        min: 100,
        max: 10000,
        description: "Professional reel promotion service",
        features: ["Professional Promotion", "Better Visibility", "Guaranteed Results"],
        icon: <Rocket className="h-6 w-6" />,
        category: "instagram"
    },
    {
        id: "ig-channel-members",
        name: "Instagram Channel Members",
        price: 199.18,
        min: 100,
        max: 5000,
        description: "Increase your channel membership",
        features: ["Real Members", "Active Community", "Sustainable Growth"],
        icon: <Users className="h-6 w-6" />,
        category: "instagram"
    },
    {
        id: "ig-live-stream",
        name: "Instagram Live Stream",
        price: 266.56,
        min: 100,
        max: 10000,
        description: "Boost your live stream viewers",
        features: ["Live Viewers", "Real Engagement", "Instant Start"],
        icon: <Eye className="h-6 w-6" />,
        category: "instagram"
    }
];

export const facebookServices: GrowthService[] = [
    {
        id: "fb-followers",
        name: "Facebook All Type Followers",
        price: 300,
        min: 100,
        max: 10000,
        description: "Genuine Facebook followers for all page types",
        features: ["Real Followers", "All Page Types", "Safe Delivery"],
        icon: <Users className="h-6 w-6" />,
        category: "facebook"
    },
    {
        id: "fb-likes",
        name: "Facebook Likes",
        price: 100,
        min: 100,
        max: 50000,
        description: "Increase your Facebook page likes",
        features: ["Real Likes", "Fast Delivery", "Non Drop"],
        icon: <ThumbsUp className="h-6 w-6" />,
        category: "facebook"
    },
    {
        id: "fb-post-reaction",
        name: "Facebook Post Reaction",
        price: 150,
        min: 100,
        max: 50000,
        description: "Get genuine reactions on your Facebook posts",
        features: ["Various Reactions", "Real Accounts", "Quick Start"],
        icon: <HeartIcon className="h-6 w-6" />,
        category: "facebook"
    },
    {
        id: "fb-story-reaction",
        name: "Facebook Story Reaction",
        price: 200,
        min: 100,
        max: 100000,
        description: "Boost your Facebook story engagement",
        features: ["Story Reactions", "Real Engagement", "Instant Delivery"],
        icon: <HeartIcon className="h-6 w-6" />,
        category: "facebook"
    },
    {
        id: "fb-page-likes",
        name: "Facebook Page Likes & Followers",
        price: 300,
        min: 100,
        max: 10000,
        description: "Grow your Facebook page audience",
        features: ["Page Likes", "Followers Growth", "Organic Growth"],
        icon: <Users className="h-6 w-6" />,
        category: "facebook"
    }
];

export const linkedinServices: GrowthService[] = [
    {
        id: "li-followers",
        name: "LinkedIn Company Page Followers",
        price: 5224.18,
        min: 100,
        max: 5000,
        description: "Professional LinkedIn company page followers",
        features: ["Professional Accounts", "Company Page", "Worldwide"],
        icon: <Users className="h-6 w-6" />,
        category: "linkedin"
    }
];

export const websiteServices: GrowthService[] = [
    {
        id: "web-traffic",
        name: "Website Organic Traffic - Worldwide",
        price: 109,
        min: 1000,
        max: 100000,
        description: "Organic website traffic from worldwide real sources",
        features: ["Worldwide Traffic", "Real Visitors", "Safe Referral", "Organic Growth"],
        icon: <Globe className="h-6 w-6" />,
        category: "website"
    },
    {
        id: "android-traffic",
        name: "Android Phone Traffic - Worldwide",
        price: 99,
        min: 1000,
        max: 100000,
        description: "Real Android phone traffic from worldwide sources",
        features: ["Android Devices", "Worldwide Traffic", "Real Visitors", "Mobile Optimized"],
        icon: <Phone className="h-6 w-6" />,
        category: "website"
    },
    {
        id: "desktop-traffic",
        name: "Desktop Traffic - Worldwide",
        price: 149,
        min: 1000,
        max: 100000,
        description: "Desktop computer traffic from worldwide sources",
        features: ["Desktop Devices", "Worldwide Traffic", "Real Visitors", "High Quality"],
        icon: <Globe className="h-6 w-6" />,
        category: "website"
    },
    {
        id: "ios-traffic",
        name: "iOS Traffic - Worldwide",
        price: 299,
        min: 1000,
        max: 100000,
        description: "Premium iOS device traffic from worldwide sources",
        features: ["iOS Devices", "Premium Traffic", "Worldwide", "High Quality"],
        icon: <Phone className="h-6 w-6" />,
        category: "website"
    }
];

export const growthSeoServices: GrowthService[] = [
    {
        id: "seo-backlinks-basic",
        name: "SEO Backlinks - Basic Package",
        price: 3,
        min: 1,
        max: 1000,
        description: "High-quality basic SEO backlinks for better ranking",
        features: ["High Quality Backlinks", "Better SEO Ranking", "Safe & Natural", "Google Approved"],
        icon: <LinkIcon className="h-6 w-6" />,
        category: "seo"
    },
    {
        id: "seo-backlinks-premium",
        name: "SEO Backlinks - Premium Package",
        price: 699,
        min: 300,
        max: 300,
        description: "Premium SEO backlinks package - Limited Time Offer!",
        features: ["300 Premium Backlinks", "DR 50+ Websites", "Instant Indexing", "Lifetime Support"],
        icon: <LinkIcon className="h-6 w-6" />,
        category: "seo"
    }
];

export const allGrowthServices = [
    ...instagramServices,
    ...facebookServices,
    ...linkedinServices,
    ...websiteServices,
    ...growthSeoServices
];
