import { useState, useMemo, useEffect } from 'react';
import { waLink, TEL_LINK } from '../config/contact';
import { ExternalLink, Filter, Star, TrendingUp, Users, Play, Award, Target, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isVisible, setIsVisible] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filters = ['All', 'Branding', 'Digital Marketing', 'Websites', 'E-commerce', 'SEO', 'Social Media'];

  const projects = [
    {
      id: 1,
      title: 'TechStart Solutions',
      category: 'Websites',
      description: 'Complete website redesign for a technology startup focusing on user experience and conversion optimization. Implemented advanced analytics and A/B testing.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-digital-wireframe-technology-129-large.mp4',
      tags: ['WordPress', 'Responsive', 'SEO', 'Analytics', 'A/B Testing'],
      results: '300% increase in conversions',
      duration: '4 Weeks',
      client: 'Tech Startup',
      rating: 5,
      budget: '₹1,50,000',
      technologies: ['React', 'Node.js', 'MongoDB'],
      achievements: ['Best UX Award 2024', 'Top 10 Startups']
    },
    {
      id: 2,
      title: 'Fashion Hub Brand Identity',
      category: 'Branding',
      description: 'Complete brand identity design for fashion retailer including logo, packaging, and brand guidelines with 3D mockups.',
      image: 'https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=600',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-digital-wireframe-technology-129-large.mp4',
      tags: ['Logo Design', 'Brand Guidelines', 'Packaging', '3D Mockups'],
      results: 'Brand recognition increased by 250%',
      duration: '6 Weeks',
      client: 'Fashion Retail',
      rating: 5,
      budget: '₹2,00,000',
      technologies: ['Adobe Creative Suite', 'Blender'],
      achievements: ['Design Excellence Award']
    },
    {
      id: 3,
      title: 'FoodieDelight E-commerce',
      category: 'E-commerce',
      description: 'Custom Shopify store for food delivery service with integrated payment, mobile app, and AI recommendations.',
      image: 'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=600',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-digital-wireframe-technology-129-large.mp4',
      tags: ['Shopify Plus', 'Payment Gateway', 'Mobile App', 'AI Integration'],
      results: '500% increase in online orders',
      duration: '8 Weeks',
      client: 'Food Delivery',
      rating: 5,
      budget: '₹3,50,000',
      technologies: ['Shopify', 'React Native', 'Firebase'],
      achievements: ['E-commerce Excellence 2024']
    },
    {
      id: 4,
      title: 'Digital Marketing Campaign',
      category: 'Digital Marketing',
      description: 'Comprehensive social media and PPC campaign strategy for local business expansion with real-time analytics.',
      image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=600',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-digital-wireframe-technology-129-large.mp4',
      tags: ['Facebook Ads', 'Google Ads', 'SEO', 'Analytics'],
      results: '400% ROI on ad spend',
      duration: '12 Weeks',
      client: 'Local Business',
      rating: 5,
      budget: '₹1,80,000',
      technologies: ['Google Analytics', 'Meta Ads'],
      achievements: ['ROI Champion Award']
    },
    {
      id: 5,
      title: 'HealthCare Plus Website',
      category: 'Websites',
      description: 'Professional website for healthcare provider with booking system, HIPAA compliance, and telemedicine integration.',
      image: 'https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=600',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-digital-wireframe-technology-129-large.mp4',
      tags: ['WordPress', 'Booking System', 'HIPAA Compliant', 'Telemedicine'],
      results: '200% increase in appointments',
      duration: '5 Weeks',
      client: 'Healthcare',
      rating: 5,
      budget: '₹2,80,000',
      technologies: ['PHP', 'MySQL', 'WebRTC'],
      achievements: ['Healthcare Innovation Award']
    },
    {
      id: 6,
      title: 'Luxury Watches Brand',
      category: 'Branding',
      description: 'Premium brand identity for luxury watch retailer with photography, catalog design, and AR try-on feature.',
      image: 'https://images.pexels.com/photos/1697911/pexels-photo-1697911.jpeg?auto=compress&cs=tinysrgb&w=600',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-digital-wireframe-technology-129-large.mp4',
      tags: ['Luxury Branding', 'Photography', 'Catalog Design', 'AR Integration'],
      results: 'Premium positioning achieved',
      duration: '7 Weeks',
      client: 'Luxury Retail',
      rating: 5,
      budget: '₹4,20,000',
      technologies: ['AR Kit', 'Adobe Suite'],
      achievements: ['Luxury Brand Award']
    },
    {
      id: 7,
      title: 'E-learning Platform',
      category: 'Websites',
      description: 'Custom learning management system with video streaming, user management, and AI-powered recommendations.',
      image: 'https://images.pexels.com/photos/4050320/pexels-photo-4050320.jpeg?auto=compress&cs=tinysrgb&w=600',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-digital-wireframe-technology-129-large.mp4',
      tags: ['Custom Development', 'LMS', 'Video Streaming', 'AI Recommendations'],
      results: '10,000+ active learners',
      duration: '10 Weeks',
      client: 'Education',
      rating: 5,
      budget: '₹5,00,000',
      technologies: ['React', 'Node.js', 'AWS', 'AI/ML'],
      achievements: ['EdTech Innovation Award']
    },
    {
      id: 8,
      title: 'Real Estate Marketing',
      category: 'Digital Marketing',
      description: 'Complete digital marketing strategy for real estate with lead generation, virtual tours, and automated follow-ups.',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-digital-wireframe-technology-129-large.mp4',
      tags: ['Lead Generation', 'Virtual Tours', 'Social Media', 'Automation'],
      results: '150% increase in qualified leads',
      duration: '8 Weeks',
      client: 'Real Estate',
      rating: 5,
      budget: '₹2,20,000',
      technologies: ['CRM Integration', 'Virtual Tour Software'],
      achievements: ['Real Estate Excellence']
    },
    {
      id: 9,
      title: 'Organic Beauty Store',
      category: 'E-commerce',
      description: 'Shopify store for organic beauty products with subscription model, influencer integration, and sustainability focus.',
      image: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=600',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-digital-wireframe-technology-129-large.mp4',
      tags: ['Shopify Plus', 'Subscription Model', 'Influencer Integration', 'Sustainability'],
      results: '600% growth in 6 months',
      duration: '6 Weeks',
      client: 'Beauty & Cosmetics',
      rating: 5,
      budget: '₹3,00,000',
      technologies: ['Shopify', 'Subscription Apps'],
      achievements: ['Sustainable Business Award']
    }
  ];

  const filteredProjects = useMemo(() =>
    activeFilter === 'All'
      ? projects
      : projects.filter(project => project.category === activeFilter),
    [activeFilter]
  );

  const stats = [
    { icon: TrendingUp, value: '150+', label: 'Projects Completed', color: 'from-blue-500 to-blue-600' },
    { icon: Users, value: '98%', label: 'Client Satisfaction', color: 'from-green-500 to-green-600' },
    { icon: Star, value: '350%', label: 'Average ROI Increase', color: 'from-purple-500 to-purple-600' },
    { icon: Award, value: '25+', label: 'Industry Awards', color: 'from-yellow-500 to-yellow-600' },
    { icon: Target, value: '50+', label: 'Happy Clients', color: 'from-red-500 to-red-600' },
    { icon: Zap, value: '24/7', label: 'Support Available', color: 'from-indigo-500 to-indigo-600' }
  ];

  const achievements = [
    { title: 'Best Digital Agency 2024', icon: '🏆', description: 'Recognized as top digital agency in North India' },
    { title: 'Google Partner', icon: '🔍', description: 'Certified Google Ads and Analytics partner' },
    { title: 'UI/UX Excellence', icon: '🎨', description: 'Awarded for outstanding user experience design' },
    { title: 'E-commerce Specialist', icon: '🛒', description: 'Certified Shopify and WooCommerce experts' }
  ];

  const TestimonialSection = () => (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Client <span className="text-purple-600">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear what our clients have to say about their journey with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Rajesh Sharma",
              company: "TechStart Solutions",
              text: "DiziGrow transformed our online presence completely. The website redesign resulted in 300% more conversions and significantly improved user engagement!",
              rating: 5,
              image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600"
            },
            {
              name: "Priya Patel",
              company: "Fashion Hub",
              text: "Their branding expertise helped us stand out in a crowded market. Brand recognition skyrocketed and we're now considered a premium fashion destination!",
              rating: 5,
              image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
            },
            {
              name: "Amit Kumar",
              company: "FoodieDelight",
              text: "The e-commerce store they built increased our orders by 500%. Exceptional work, timely delivery, and outstanding after-sales support!",
              rating: 5,
              image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image.replace('auto=compress', 'auto=format&fm=webp')}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-purple-100"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold text-gray-900 text-lg">{testimonial.name}</p>
                  <p className="text-purple-600 font-medium">{testimonial.company}</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6 italic leading-relaxed">"{testimonial.text}"</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>✅ Project Completed</span>
                <span>⭐ 5/5 Rating</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const ProjectVideo = ({ project }: { project: any }) => (
    <div className="relative rounded-2xl overflow-hidden group cursor-pointer"
      onClick={() => setVideoPlaying(videoPlaying === project.id ? null : project.id)}>
      {videoPlaying === project.id ? (
        <video
          src={project.video}
          className="w-full h-64 object-cover rounded-2xl"
        />
      ) : (
        <>
          <img
            src={project.image.replace('auto=compress', 'auto=format&fm=webp')}
            alt={project.title}
            className="w-full h-64 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-20">
            <div className="bg-white bg-opacity-90 rounded-full p-4 transform transition-all duration-300 group-hover:scale-110">
              <Play className="h-8 w-8 text-purple-600 fill-current" />
            </div>
          </div>
        </>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Our Portfolio | Proven Digital Success Stories | JS TECH SOLUTION</title>
        <meta name="description" content="Explore our extensive portfolio of web development, e-commerce, and digital marketing projects. See how we've helped 150+ clients achieve 5x growth through innovation and result-oriented strategies." />
        <meta name="keywords" content="digital marketing portfolio, web development case studies, e-commerce success stories, JS TECH SOLUTION projects, Jaipur digital agency portfolio" />
        <link rel="canonical" href="https://JSTECHSOLUTION.in/portfolio" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://JSTECHSOLUTION.in/portfolio" />
        <meta property="og:title" content="JS TECH SOLUTION | Our Work & Case Studies" />
        <meta property="og:description" content="Witness the transformation. Explore our award-winning digital projects and see the results we deliver." />
        <meta property="og:image" content="https://JSTECHSOLUTION.in/og-portfolio.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="JS TECH SOLUTION Portfolio" />
        <meta name="twitter:description" content="Check out our latest masterpieces in web and marketing." />
      </Helmet>

      {/* Enhanced Hero Section with Animation */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Our <span className="text-yellow-400 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-4xl mx-auto text-purple-100 leading-relaxed">
              Where <span className="font-semibold text-yellow-300">Innovation</span> Meets <span className="font-semibold text-yellow-300">Results</span>.
              Explore Our Award-Winning Digital Success Stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#portfolio-grid"
                className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg flex items-center space-x-3 group"
              >
                <span>🚀 Explore Masterpieces</span>
                <div className="group-hover:translate-x-1 transition-transform">↓</div>
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 flex items-center space-x-3"
              >
                <span>💬 Get Free Strategy Session</span>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              By The <span className="text-purple-600">Numbers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quantifying our impact and celebrating milestones achieved together
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${stat.color} rounded-2xl p-8 text-white transform transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
              >
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className="h-12 w-12 text-white opacity-90" />
                  <div className="text-4xl font-bold">{stat.value}</div>
                </div>
                <div className="text-lg font-semibold opacity-90">{stat.label}</div>
                  <div className="w-full bg-white bg-opacity-20 h-1 rounded-full mt-3">
                  <div
                    className="bg-white h-1 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: '0%' }}
                    onMouseEnter={(e) => { (e.target as HTMLElement).style.width = '100%' }}
                    onMouseLeave={(e) => { (e.target as HTMLElement).style.width = '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Filter Section */}
      <section id="portfolio-grid" className="py-8 bg-white sticky top-0 z-50 border-b shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-3">
              <Filter className="h-7 w-7 text-purple-600" />
              <span className="text-xl font-bold text-gray-800">Filter Masterpieces:</span>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 ${activeFilter === filter
                      ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-2xl scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-600 hover:shadow-lg'
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Portfolio Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured <span className="text-purple-600">Masterpieces</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {activeFilter === 'All'
                ? 'Curated collection of our most impactful digital transformations across industries'
                : `Specialized ${activeFilter} solutions delivering exceptional business outcomes`
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:scale-105 group"
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Project Media */}
                <div className="relative">
                  <ProjectVideo project={project} />

                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 flex space-x-1">
                    {[...Array(project.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current drop-shadow-lg" />
                    ))}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <span className="bg-black bg-opacity-70 text-white px-3 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                      ⏱️ {project.duration}
                    </span>
                    <span className="bg-green-600 text-white px-3 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                      💰 {project.budget}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-lg">
                    {project.description}
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-xl">
                    <span className="text-sm font-medium text-gray-700">
                      👤 {project.client}
                    </span>
                    <div className="flex space-x-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gradient-to-r from-purple-100 to-purple-50 text-purple-700 px-3 py-2 rounded-full text-sm font-semibold border border-purple-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl mb-4 border border-green-200">
                    <p className="text-green-800 font-bold text-lg flex items-center">
                      🎯 {project.results}
                    </p>
                  </div>

                  {/* Achievements */}
                  {project.achievements && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.achievements.map((achievement, achievementIndex) => (
                          <span key={achievementIndex} className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium">
                            🏆 {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA Button */}
                  <a
                    href={waLink(`Hello JS TECH SOLUTION! I want to create a project similar to ${project.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-4 px-6 rounded-xl font-bold transition-all duration-300 hover:shadow-xl flex items-center justify-center space-x-3 group"
                  >
                    <span>Start Similar Project</span>
                    <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-2xl text-gray-600 mb-4">No projects found in this category.</p>
              <p className="text-gray-500">Try selecting a different filter or contact us for custom solutions.</p>
            </div>
          )}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-yellow-400">Achievements</span>
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Recognized for excellence and innovation in digital solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 text-center hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
                <p className="text-purple-100 text-sm leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Ready to Write Your <span className="text-yellow-400">Success Story</span>?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-purple-100 leading-relaxed">
            Let's collaborate to create digital experiences that drive real business results and set new industry standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href={waLink("Hello JS TECH SOLUTION! I want to start my success story with you!")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 px-12 py-6 rounded-2xl text-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg flex items-center justify-center space-x-4 group"
            >
              <span>🚀 Start Your Project Today</span>
              <ExternalLink className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={TEL_LINK}
              className="border-2 border-white hover:bg-white hover:text-purple-600 px-12 py-6 rounded-2xl text-xl font-bold transition-all duration-300 flex items-center justify-center space-x-4 group"
            >
              <span>📞 Schedule Free Call</span>
            </a>
          </div>
          <p className="mt-8 text-purple-200 text-lg">
            ⚡ Get comprehensive strategy session within 24 hours
          </p>
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .bg-grid-slate-100 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(148 163 184 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
      `}</style>
    </div>
  );
};

export default Portfolio;