import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
    BookOpen,
    Calendar,
    User,
    Clock,
    ArrowRight,
    Search,
    Tag,
    TrendingUp,
    Lightbulb,
    Code,
    Megaphone,
    Palette,
    Filter,
    X,
    ChevronDown
} from "lucide-react";

interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    image: string;
    featured?: boolean;
}

const Blog: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string>("all");
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

    const categories = [
        { id: "all", name: "All Posts", icon: <BookOpen className="h-4 w-4" /> },
        { id: "seo", name: "SEO", icon: <TrendingUp className="h-4 w-4" /> },
        { id: "marketing", name: "Marketing", icon: <Megaphone className="h-4 w-4" /> },
        { id: "development", name: "Development", icon: <Code className="h-4 w-4" /> },
        { id: "design", name: "Design", icon: <Palette className="h-4 w-4" /> },
        { id: "business", name: "Business Tips", icon: <Lightbulb className="h-4 w-4" /> }
    ];

    const blogPosts: BlogPost[] = [
        {
            id: "1",
            title: "10 SEO Strategies to Boost Your Rankings in 2024",
            excerpt: "Discover the latest SEO techniques that will help your website rank higher on Google and drive more organic traffic.",
            category: "seo",
            author: "JS TECH SOLUTION Team",
            date: "Dec 15, 2024",
            readTime: "8 min read",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
            featured: true
        },
        {
            id: "2",
            title: "Complete Guide to Social Media Marketing for Small Businesses",
            excerpt: "Learn how to leverage social media platforms to grow your small business and connect with your target audience.",
            category: "marketing",
            author: "JS TECH SOLUTION Team",
            date: "Dec 12, 2024",
            readTime: "12 min read",
            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600",
            featured: true
        },
        {
            id: "3",
            title: "How to Build a High-Converting Landing Page",
            excerpt: "Step-by-step guide to creating landing pages that convert visitors into customers with proven design principles.",
            category: "development",
            author: "JS TECH SOLUTION Team",
            date: "Dec 10, 2024",
            readTime: "10 min read",
            image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600"
        },
        {
            id: "4",
            title: "Understanding Google Analytics 4: A Beginner's Guide",
            excerpt: "Everything you need to know about GA4 and how to use it to track your website's performance effectively.",
            category: "seo",
            author: "JS TECH SOLUTION Team",
            date: "Dec 8, 2024",
            readTime: "15 min read",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600"
        },
        {
            id: "5",
            title: "Logo Design Trends for 2024",
            excerpt: "Explore the hottest logo design trends that are shaping brand identities this year.",
            category: "design",
            author: "JS TECH SOLUTION Team",
            date: "Dec 5, 2024",
            readTime: "6 min read",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600"
        },
        {
            id: "6",
            title: "5 Ways to Increase Your Business Revenue Online",
            excerpt: "Practical strategies to boost your online business revenue through digital marketing and optimization.",
            category: "business",
            author: "JS TECH SOLUTION Team",
            date: "Dec 1, 2024",
            readTime: "9 min read",
            image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600"
        }
    ];

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = activeCategory === "all" || post.category === activeCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const featuredPosts = blogPosts.filter(post => post.featured);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
            <Helmet>
                <title>Blog - Digital Marketing, SEO & Business Tips | JS TECH SOLUTION</title>
                <meta name="description" content="Read the latest articles on SEO, digital marketing, web development, design, and business growth tips from JS TECH SOLUTION experts." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white py-20 overflow-hidden">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

                <div className="relative max-w-7xl mx-auto px-4 text-center">
                    <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
                        <BookOpen className="h-5 w-5 text-yellow-400 mr-2" />
                        <span className="text-sm font-semibold">Learn & Grow with Us</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        JS TECH SOLUTION
                        <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                            Blog
                        </span>
                    </h1>

                    <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                        Insights, tips, and strategies on digital marketing, SEO, web development, and business growth
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-xl mx-auto relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-4 lg:py-8 bg-white dark:bg-slate-800 sticky top-20 z-40 shadow-sm transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Mobile Filter Toggle */}
                    <div className="lg:hidden mb-4">
                        <button
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            className="w-full flex items-center justify-between px-6 py-3 bg-gray-100 dark:bg-slate-700 rounded-xl font-semibold text-gray-900 dark:text-white"
                        >
                            <span className="flex items-center gap-2">
                                <Filter className="h-5 w-5" />
                                Filter Articles
                            </span>
                            {isFilterOpen ? <X className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                        </button>
                    </div>

                    {/* Categories List */}
                    <div className={`flex flex-wrap justify-center gap-3 transition-all duration-300 ${isFilterOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden lg:max-h-none lg:opacity-100 lg:overflow-visible'
                        }`}>
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => {
                                    setActiveCategory(category.id);
                                    setIsFilterOpen(false);
                                }}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all whitespace-nowrap ${activeCategory === category.id
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                                    : 'bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600'
                                    }`}
                            >
                                {category.icon}
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Posts */}
            {activeCategory === "all" && searchQuery === "" && (
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Featured Articles</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {featuredPosts.map((post) => (
                                <article key={post.id} className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                                                Featured
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                                            <span className="flex items-center gap-1">
                                                <Tag className="h-4 w-4" />
                                                {post.category}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Calendar className="h-4 w-4" />
                                                {post.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="h-4 w-4" />
                                                {post.readTime}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                                        <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all">
                                            Read More <ArrowRight className="h-4 w-4" />
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* All Posts */}
            <section className="py-16 bg-gray-50 dark:bg-slate-900">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                        {activeCategory === "all" ? "Latest Articles" : `${categories.find(c => c.id === activeCategory)?.name} Articles`}
                    </h2>

                    {filteredPosts.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-gray-500 dark:text-gray-400 text-lg">No articles found matching your criteria.</p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts.map((post) => (
                                <article key={post.id} className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
                                            <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-xs font-semibold capitalize">
                                                {post.category}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="h-3 w-3" />
                                                {post.readTime}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                                                <Calendar className="h-3 w-3" />
                                                {post.date}
                                            </span>
                                            <button className="flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 transition-all">
                                                Read <ArrowRight className="h-3 w-3" />
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Stay Updated
                    </h2>
                    <p className="text-xl mb-8 text-white/90">
                        Get the latest digital marketing tips delivered to your inbox
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                        <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-xl font-bold transition-all hover:scale-105">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
