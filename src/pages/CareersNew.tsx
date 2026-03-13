import React, { useState } from "react";
import { waLink, TEL_LINK, PHONE_DISPLAY } from '../config/contact';
import { Helmet } from "react-helmet";
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Users,
  Award,
  Send,
  Phone,
  Mail,
  CheckCircle,
  Star,
  GraduationCap,
  Code,
  TrendingUp,
  Heart,
  Rocket,
  Building,
  Target,
  Zap,
  Crown,
  Palette,
  Camera,
  BarChart3,
  PhoneCall,
  Video,
  Megaphone
} from "lucide-react";

interface JobOpening {
  id: string;
  title: string;
  type: string;
  location: string;
  experience: string;
  salary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  perks: string[];
  category: "tech" | "marketing" | "design" | "sales" | "operations" | "hr";
  urgent?: boolean;
  featured?: boolean;
  openings: number;
}

interface FormData {
  name: string;
  qualification: string;
  mobile: string;
  email: string;
  skills: string;
  about: string;
  experience: string;
  currentPackage: string;
  expectedPackage: string;
  portfolio: string;
  position: string;
  noticePeriod: string;
}

const CareersNew: React.FC = () => {
  const [activeJob, setActiveJob] = useState<string>("website-developer");
  const [activeCategory, setActiveCategory] = useState<"all" | "tech" | "marketing" | "design" | "sales" | "operations" | "hr">("all");
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    qualification: "",
    mobile: "",
    email: "",
    skills: "",
    about: "",
    experience: "",
    currentPackage: "",
    expectedPackage: "",
    portfolio: "",
    position: "Website Developer",
    noticePeriod: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `🌟 *Job Application - JS TECH SOLUTION* 🌟

*Position Applied For:* ${formData.position}

*Personal Information:*
👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Mobile:* ${formData.mobile}

*Education & Qualification:*
🎓 *Qualification:* ${formData.qualification}

*Professional Details:*
💼 *Total Experience:* ${formData.experience}
⏰ *Notice Period:* ${formData.noticePeriod || "Immediate"}
💰 *Current Package:* ${formData.currentPackage || "Fresher"}
🎯 *Expected Package:* ${formData.expectedPackage}

*Skills & Expertise:*
🛠️ *Skills:* ${formData.skills}

*Portfolio/Links:* 
🔗 ${formData.portfolio || "Not provided"}

*About Candidate:*
📝 ${formData.about}

I'm excited to join the JS TECH SOLUTION team and contribute to your growth journey! 🚀`;

    window.open(waLink(message), '_blank');

    // Show success message
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);

    // Reset form
    setFormData({
      name: "",
      qualification: "",
      mobile: "",
      email: "",
      skills: "",
      about: "",
      experience: "",
      currentPackage: "",
      expectedPackage: "",
      portfolio: "",
      position: "Website Developer",
      noticePeriod: ""
    });
  };

  // Current Job Openings with all positions
  const jobOpenings: JobOpening[] = [
    // Tech Roles
    {
      id: "website-developer",
      title: "Website Developer",
      type: "Full Time",
      location: "Remote/On-site",
      experience: "0-3 Years",
      salary: "₹15,000 - ₹40,000 / month",
      category: "tech",
      urgent: true,
      featured: true,
      openings: 8,
      description: "We are looking for skilled Website Developers to join our team. You will be responsible for building and maintaining responsive websites for our clients using modern technologies.",
      responsibilities: [
        "Develop responsive websites using HTML, CSS, JavaScript, React.js",
        "Implement SEO best practices and optimize website performance",
        "Collaborate with design team to create pixel-perfect implementations",
        "Test and debug websites across multiple browsers and devices",
        "Client communication and project management",
        "Stay updated with latest web technologies and trends"
      ],
      requirements: [
        "Strong knowledge of HTML5, CSS3, JavaScript ES6+",
        "Experience with React.js/Next.js frameworks",
        "Understanding of responsive design and cross-browser compatibility",
        "Basic knowledge of SEO principles",
        "Familiarity with Git version control",
        "Good communication and problem-solving skills"
      ],
      perks: [
        "Flexible working hours",
        "Learning & development opportunities",
        "Performance bonuses",
        "Certificate of experience",
        "Career growth path",
        "Project-based incentives"
      ]
    },
    {
      id: "seo-expert",
      title: "SEO Expert",
      type: "Full Time",
      location: "Remote/On-site",
      experience: "1-4 Years",
      salary: "₹18,000 - ₹45,000 / month",
      category: "tech",
      featured: true,
      openings: 4,
      description: "Join as SEO Expert to optimize client websites, improve search rankings, and drive organic growth through technical and content SEO strategies.",
      responsibilities: [
        "Perform comprehensive SEO audits and competitor analysis",
        "Implement on-page and technical SEO optimizations",
        "Develop and execute link building strategies",
        "Create SEO-friendly content strategies",
        "Monitor rankings and performance metrics",
        "Client consultation and strategy presentations"
      ],
      requirements: [
        "Proven experience in SEO with successful case studies",
        "Knowledge of SEO tools (Ahrefs, SEMrush, Google Search Console)",
        "Understanding of technical SEO aspects",
        "Content strategy and keyword research skills",
        "Analytical mindset with attention to detail",
        "Up-to-date with latest SEO trends and algorithm changes"
      ],
      perks: [
        "Performance-linked bonuses",
        "SEO tool subscriptions",
        "Industry conference opportunities",
        "Flexible remote work",
        "Diverse client portfolio",
        "Continuous learning environment"
      ]
    },
    {
      id: "backlink-expert",
      title: "Backlink Expert",
      type: "Full Time",
      location: "Remote",
      experience: "1-3 Years",
      salary: "₹15,000 - ₹35,000 / month",
      category: "tech",
      openings: 4,
      description: "We need a Backlink Expert to build high-quality backlinks and improve domain authority for our client websites through strategic link building.",
      responsibilities: [
        "Develop and execute backlink building strategies",
        "Outreach to relevant websites for guest posting",
        "Monitor backlink quality and disavow toxic links",
        "Build relationships with webmasters and bloggers",
        "Track and report on link building progress",
        "Stay updated with link building best practices"
      ],
      requirements: [
        "Proven experience in link building and outreach",
        "Knowledge of backlink analysis tools",
        "Excellent communication and negotiation skills",
        "Understanding of SEO and domain authority",
        "Persistent and results-driven approach",
        "Portfolio of successful link building campaigns"
      ],
      perks: [
        "Performance-based incentives",
        "Flexible work timing",
        "Remote work options",
        "Skill development programs",
        "Creative freedom in strategies",
        "Growth opportunities"
      ]
    },
    {
      id: "data-analyst",
      title: "Data Analyst",
      type: "Full Time",
      location: "Remote/On-site",
      experience: "1-3 Years",
      salary: "₹25,000 - ₹50,000 / month",
      category: "tech",
      openings: 2,
      description: "Join our team as Data Analyst to analyze business data, generate insights, and help make data-driven decisions for our clients and internal projects.",
      responsibilities: [
        "Collect, process, and analyze large datasets",
        "Create dashboards and reports for stakeholders",
        "Identify trends and patterns in data",
        "Collaborate with teams to implement data-driven solutions",
        "Develop predictive models and algorithms",
        "Ensure data accuracy and integrity"
      ],
      requirements: [
        "Proficiency in SQL, Python/R, Excel",
        "Experience with data visualization tools (Tableau, Power BI)",
        "Strong analytical and problem-solving skills",
        "Knowledge of statistical analysis methods",
        "Attention to detail and accuracy",
        "Degree in Statistics, Mathematics, or related field"
      ],
      perks: [
        "Competitive salary package",
        "Health insurance benefits",
        "Remote work options",
        "Data science certification support",
        "Exposure to diverse datasets",
        "Career advancement opportunities"
      ]
    },

    // Marketing Roles
    {
      id: "social-media-manager",
      title: "Social Media Manager",
      type: "Full Time",
      location: "Remote/On-site",
      experience: "1-3 Years",
      salary: "₹20,000 - ₹45,000 / month",
      category: "marketing",
      urgent: true,
      featured: true,
      openings: 6,
      description: "We need a creative Social Media Manager to develop and implement social media strategies, manage online presence, and drive engagement across platforms.",
      responsibilities: [
        "Develop and execute social media strategies",
        "Create and schedule engaging content across platforms",
        "Manage social media advertising campaigns",
        "Monitor analytics and optimize performance",
        "Engage with community and respond to comments",
        "Stay updated with social media trends"
      ],
      requirements: [
        "Experience managing social media for brands",
        "Knowledge of major social media platforms",
        "Content creation and copywriting skills",
        "Analytical skills and experience with social media tools",
        "Creative thinking and trend awareness",
        "Excellent communication skills"
      ],
      perks: [
        "Performance-based bonuses",
        "Creative freedom",
        "Brand collaboration opportunities",
        "Flexible work environment",
        "Skill development programs",
        "Industry event participation"
      ]
    },
    {
      id: "video-maker-editor",
      title: "Video Maker & Editor",
      type: "Full Time",
      location: "Remote/On-site",
      experience: "1-3 Years",
      salary: "₹18,000 - ₹40,000 / month",
      category: "marketing",
      openings: 5,
      description: "Join as Video Maker & Editor to create engaging video content for social media, marketing campaigns, and client projects.",
      responsibilities: [
        "Plan, shoot, and edit video content",
        "Create motion graphics and animations",
        "Collaborate with marketing team on video strategy",
        "Manage video production from concept to delivery",
        "Optimize videos for different platforms",
        "Stay updated with video trends and techniques"
      ],
      requirements: [
        "Proficiency in video editing software (Premiere Pro, After Effects)",
        "Experience with camera equipment and shooting",
        "Knowledge of motion graphics and animation",
        "Creative storytelling abilities",
        "Portfolio of previous work",
        "Time management and meeting deadlines"
      ],
      perks: [
        "Creative project freedom",
        "Latest equipment access",
        "Portfolio building opportunities",
        "Flexible work schedule",
        "Performance incentives",
        "Skill enhancement programs"
      ]
    },

    // Design Roles
    {
      id: "graphics-designer",
      title: "Graphics Designer",
      type: "Full Time",
      location: "Remote/On-site",
      experience: "1-3 Years",
      salary: "₹15,000 - ₹35,000 / month",
      category: "design",
      urgent: true,
      openings: 4,
      description: "We are looking for a creative Graphics Designer to create visually appealing designs for digital and print media across client projects.",
      responsibilities: [
        "Create designs for social media, websites, and marketing materials",
        "Develop brand identities and visual guidelines",
        "Collaborate with marketing and development teams",
        "Prepare designs for print and digital publication",
        "Maintain brand consistency across all designs",
        "Stay updated with design trends and tools"
      ],
      requirements: [
        "Proficiency in Adobe Creative Suite (Photoshop, Illustrator)",
        "Strong portfolio showcasing design skills",
        "Understanding of design principles and typography",
        "Creativity and attention to detail",
        "Time management and meeting deadlines",
        "Good communication and collaboration skills"
      ],
      perks: [
        "Creative freedom",
        "Diverse project exposure",
        "Skill development opportunities",
        "Flexible work arrangements",
        "Portfolio enhancement",
        "Design tool subscriptions"
      ]
    },

    // Sales Roles
    {
      id: "bda",
      title: "Business Development Associate (BDA)",
      type: "Full Time",
      location: "Remote/On-site",
      experience: "0-2 Years",
      salary: "₹15,000 - ₹30,000 / month + Incentives",
      category: "sales",
      featured: true,
      openings: 5,
      description: "Join as BDA to generate new business opportunities, build client relationships, and contribute to company growth through sales initiatives.",
      responsibilities: [
        "Identify and generate new business opportunities",
        "Reach out to potential clients through various channels",
        "Conduct product demonstrations and presentations",
        "Build and maintain client relationships",
        "Achieve sales targets and KPIs",
        "Collaborate with marketing and delivery teams"
      ],
      requirements: [
        "Excellent communication and negotiation skills",
        "Basic understanding of digital services",
        "Goal-oriented and self-motivated",
        "Ability to handle rejection and persist",
        "Good organizational and time management skills",
        "Freshers with good communication welcome"
      ],
      perks: [
        "Uncapped incentives",
        "Performance bonuses",
        "Career growth opportunities",
        "Sales training programs",
        "Flexible work environment",
        "Recognition and rewards"
      ]
    },
    {
      id: "tele-caller",
      title: "Tele Caller",
      type: "Full Time",
      location: "On-site",
      experience: "0-1 Years",
      salary: "₹12,000 - ₹20,000 / month + Incentives",
      category: "sales",
      openings: 5,
      description: "We need Tele Callers to connect with potential clients, understand their requirements, and generate qualified leads for our business.",
      responsibilities: [
        "Make outbound calls to potential clients",
        "Explain company services and offerings",
        "Generate and qualify leads",
        "Maintain customer database and call records",
        "Follow up with interested prospects",
        "Achieve daily calling targets"
      ],
      requirements: [
        "Good communication skills in Hindi and English",
        "Pleasant and confident phone voice",
        "Basic computer knowledge",
        "Ability to handle objections",
        "Fresh graduates welcome",
        "Willingness to learn and grow"
      ],
      perks: [
        "Fixed salary + incentives",
        "Product training",
        "Career advancement opportunities",
        "Supportive work environment",
        "Regular performance feedback",
        "Skill development"
      ]
    },
    {
      id: "sales-manager",
      title: "Sales Manager",
      type: "Full Time",
      location: "Remote/On-site",
      experience: "3-5 Years",
      salary: "₹40,000 - ₹80,000 / month + Performance Bonus",
      category: "sales",
      featured: true,
      openings: 5,
      description: "Lead our sales team as Sales Manager, develop sales strategies, manage key accounts, and drive revenue growth for the organization.",
      responsibilities: [
        "Develop and implement sales strategies",
        "Lead and mentor sales team members",
        "Manage key client accounts and relationships",
        "Set sales targets and monitor performance",
        "Analyze market trends and competitor activities",
        "Collaborate with other departments for business growth"
      ],
      requirements: [
        "Proven sales management experience",
        "Strong leadership and team management skills",
        "Excellent negotiation and communication skills",
        "Experience in digital services sales",
        "Analytical and strategic thinking",
        "Track record of achieving sales targets"
      ],
      perks: [
        "Lucrative performance bonuses",
        "Leadership role",
        "Career growth opportunities",
        "Team incentive trips",
        "Professional development",
        "Stock options potential"
      ]
    },
    {
      id: "team-leader",
      title: "Team Leader",
      type: "Full Time",
      location: "On-site",
      experience: "2-4 Years",
      salary: "₹30,000 - ₹50,000 / month + Bonus",
      category: "sales",
      openings: 4,
      description: "Take on leadership role as Team Leader to guide and motivate team members, ensure target achievement, and maintain team performance.",
      responsibilities: [
        "Lead and supervise team of executives",
        "Monitor team performance and provide feedback",
        "Conduct training and development sessions",
        "Ensure team meets daily/weekly targets",
        "Handle escalated customer queries",
        "Prepare performance reports and analysis"
      ],
      requirements: [
        "Previous team handling experience",
        "Excellent communication and leadership skills",
        "Problem-solving and decision-making abilities",
        "Knowledge of sales processes",
        "Motivational and mentoring skills",
        "Experience in target-driven environment"
      ],
      perks: [
        "Leadership role experience",
        "Performance bonuses",
        "Career advancement opportunities",
        "Skill development programs",
        "Team management exposure",
        "Recognition and rewards"
      ]
    },

    // Operations Roles
    {
      id: "project-operation",
      title: "Project Operation Executive",
      type: "Full Time",
      location: "On-site",
      experience: "1-3 Years",
      salary: "₹20,000 - ₹35,000 / month",
      category: "operations",
      openings: 3,
      description: "Manage project operations, coordinate between teams, ensure timely delivery, and maintain quality standards across all projects.",
      responsibilities: [
        "Coordinate project activities and timelines",
        "Communicate with clients and internal teams",
        "Monitor project progress and report updates",
        "Ensure quality standards are maintained",
        "Handle project documentation and reporting",
        "Identify and resolve operational issues"
      ],
      requirements: [
        "Experience in project coordination",
        "Excellent organizational skills",
        "Good communication abilities",
        "Problem-solving mindset",
        "Attention to detail",
        "Multitasking capabilities"
      ],
      perks: [
        "Stable working hours",
        "Learning opportunities",
        "Career growth path",
        "Professional environment",
        "Skill development",
        "Job security"
      ]
    },

    // HR Roles
    {
      id: "hr-manager",
      title: "HR Manager",
      type: "Full Time",
      location: "On-site",
      experience: "3-5 Years",
      salary: "₹35,000 - ₹60,000 / month",
      category: "hr",
      featured: true,
      openings: 2,
      description: "Lead HR functions including recruitment, employee relations, performance management, and organizational development.",
      responsibilities: [
        "Manage end-to-end recruitment process",
        "Develop and implement HR policies",
        "Handle employee relations and engagement",
        "Conduct performance appraisals",
        "Manage training and development programs",
        "Ensure compliance with labor laws"
      ],
      requirements: [
        "Proven experience as HR Manager",
        "Knowledge of HR systems and processes",
        "Excellent interpersonal skills",
        "Understanding of labor legislation",
        "Leadership and decision-making abilities",
        "Relevant degree in Human Resources"
      ],
      perks: [
        "Leadership position",
        "Professional development",
        "Competitive compensation",
        "Work-life balance",
        "Career advancement",
        "Comprehensive benefits"
      ]
    }
  ];

  const filteredJobs = activeCategory === "all"
    ? jobOpenings
    : jobOpenings.filter(job => job.category === activeCategory);

  const currentJob = jobOpenings.find(job => job.id === activeJob);

  const totalOpenings = jobOpenings.reduce((sum, job) => sum + job.openings, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-x-hidden">
      <Helmet>
        <title>Careers - Join JS TECH SOLUTION Team | 50+ Job Openings</title>
        <meta name="description" content="Join JS TECH SOLUTION team! 50+ openings in Website Development, Digital Marketing, Sales, Design, HR and more. Apply now for exciting career opportunities!" />
      </Helmet>

      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg z-50 animate-bounce">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5" />
            <span className="font-semibold">Application sent successfully!</span>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-800 to-indigo-900 text-white py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 border border-white/20 max-w-full">
            <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 mr-2 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-semibold truncate">We're Hiring! {totalOpenings}+ Open Positions</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Build Your
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Career
            </span>
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed px-4">
            Join <span className="font-bold text-yellow-400">JS TECH SOLUTION</span> - Work on exciting projects, grow your skills, and shape the digital future with us.
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 px-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-3 sm:px-6 py-3 sm:py-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 inline mr-2 text-blue-300" />
              <span className="font-semibold text-sm sm:text-base">{totalOpenings}+ Open Positions</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-3 sm:px-6 py-3 sm:py-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <MapPin className="h-5 w-5 sm:h-6 sm:w-6 inline mr-2 text-green-300" />
              <span className="font-semibold text-sm sm:text-base">Remote & On-site</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-3 sm:px-6 py-3 sm:py-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Users className="h-5 w-5 sm:h-6 sm:w-6 inline mr-2 text-purple-300" />
              <span className="font-semibold text-sm sm:text-base">Great Team Culture</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#apply"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center space-x-2"
            >
              <Target className="h-5 w-5" />
              <span>Apply Now</span>
            </a>
            <a
              href="#openings"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center space-x-2"
            >
              <Building className="h-5 w-5" />
              <span>View {totalOpenings}+ Openings</span>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">3+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="openings" className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-6 py-3 rounded-2xl font-bold text-base transition-all duration-300 transform hover:scale-105 ${activeCategory === "all"
                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-2xl"
                : "bg-white text-gray-700 hover:bg-purple-50 border-2 border-gray-200 shadow-lg"
                }`}
            >
              <Rocket className="h-4 w-4 inline mr-2" />
              All Positions
            </button>
            <button
              onClick={() => setActiveCategory("tech")}
              className={`px-6 py-3 rounded-2xl font-bold text-base transition-all duration-300 transform hover:scale-105 ${activeCategory === "tech"
                ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-2xl"
                : "bg-white text-gray-700 hover:bg-blue-50 border-2 border-gray-200 shadow-lg"
                }`}
            >
              <Code className="h-4 w-4 inline mr-2" />
              Tech Roles
            </button>
            <button
              onClick={() => setActiveCategory("marketing")}
              className={`px-6 py-3 rounded-2xl font-bold text-base transition-all duration-300 transform hover:scale-105 ${activeCategory === "marketing"
                ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-2xl"
                : "bg-white text-gray-700 hover:bg-green-50 border-2 border-gray-200 shadow-lg"
                }`}
            >
              <Megaphone className="h-4 w-4 inline mr-2" />
              Marketing
            </button>
            <button
              onClick={() => setActiveCategory("design")}
              className={`px-6 py-3 rounded-2xl font-bold text-base transition-all duration-300 transform hover:scale-105 ${activeCategory === "design"
                ? "bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-2xl"
                : "bg-white text-gray-700 hover:bg-pink-50 border-2 border-gray-200 shadow-lg"
                }`}
            >
              <Palette className="h-4 w-4 inline mr-2" />
              Design
            </button>
            <button
              onClick={() => setActiveCategory("sales")}
              className={`px-6 py-3 rounded-2xl font-bold text-base transition-all duration-300 transform hover:scale-105 ${activeCategory === "sales"
                ? "bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-2xl"
                : "bg-white text-gray-700 hover:bg-orange-50 border-2 border-gray-200 shadow-lg"
                }`}
            >
              <TrendingUp className="h-4 w-4 inline mr-2" />
              Sales
            </button>
            <button
              onClick={() => setActiveCategory("operations")}
              className={`px-6 py-3 rounded-2xl font-bold text-base transition-all duration-300 transform hover:scale-105 ${activeCategory === "operations"
                ? "bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-2xl"
                : "bg-white text-gray-700 hover:bg-teal-50 border-2 border-gray-200 shadow-lg"
                }`}
            >
              <BarChart3 className="h-4 w-4 inline mr-2" />
              Operations
            </button>
            <button
              onClick={() => setActiveCategory("hr")}
              className={`px-6 py-3 rounded-2xl font-bold text-base transition-all duration-300 transform hover:scale-105 ${activeCategory === "hr"
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-2xl"
                : "bg-white text-gray-700 hover:bg-indigo-50 border-2 border-gray-200 shadow-lg"
                }`}
            >
              <Users className="h-4 w-4 inline mr-2" />
              HR
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Job Listings */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl shadow-2xl p-6 sticky top-6 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Briefcase className="h-6 w-6 mr-3 text-purple-600" />
                  Current Openings
                  <span className="ml-auto bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-bold">
                    {filteredJobs.length}
                  </span>
                </h2>
                <div className="space-y-4 max-h-[600px] overflow-y-auto">
                  {filteredJobs.map((job) => (
                    <button
                      key={job.id}
                      onClick={() => setActiveJob(job.id)}
                      className={`w-full text-left p-3 sm:p-5 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg ${activeJob === job.id
                        ? 'border-purple-500 bg-gradient-to-r from-purple-50 to-blue-50 shadow-lg'
                        : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'
                        }`}
                    >
                      <div className="flex justify-between items-start mb-3 gap-2">
                        <h3 className="font-bold text-base sm:text-lg text-gray-900 min-w-0 flex-1">{job.title}</h3>
                        <div className="flex flex-wrap gap-1 flex-shrink-0">
                          {job.featured && (
                            <Crown className="h-4 w-4 text-yellow-500" />
                          )}
                          {job.urgent && (
                            <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold animate-pulse whitespace-nowrap">
                              URGENT
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${job.type === "Internship"
                          ? "bg-orange-100 text-orange-800"
                          : "bg-blue-100 text-blue-800"
                          }`}>
                          {job.type}
                        </span>
                        <span className="bg-green-100 text-green-800 px-2 sm:px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                          {job.location}
                        </span>
                        <span className="bg-purple-100 text-purple-800 px-2 sm:px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                          {job.openings} Openings
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center text-xs sm:text-sm text-gray-600 gap-2">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1 flex-shrink-0" />
                          <span className="whitespace-nowrap">{job.experience}</span>
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1 flex-shrink-0" />
                          <span className="font-semibold text-green-700 text-xs sm:text-sm">{job.salary}</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Job Details & Application Form */}
            <div className="lg:col-span-2">
              {currentJob && (
                <>
                  {/* Job Details */}
                  <div className="bg-white rounded-3xl shadow-2xl p-4 sm:p-8 mb-8 border border-gray-100">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-8">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                          {currentJob.featured && (
                            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold flex items-center">
                              <Crown className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                              FEATURED
                            </div>
                          )}
                          {currentJob.urgent && (
                            <div className="bg-red-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold flex items-center">
                              <Zap className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                              URGENT HIRING
                            </div>
                          )}
                          <div className="bg-purple-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold flex items-center">
                            <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                            {currentJob.openings} OPENINGS
                          </div>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                          {currentJob.title}
                        </h2>
                        <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
                          <span className="bg-blue-100 text-blue-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium flex items-center">
                            <Briefcase className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 flex-shrink-0" />
                            {currentJob.type}
                          </span>
                          <span className="bg-green-100 text-green-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium flex items-center">
                            <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 flex-shrink-0" />
                            {currentJob.location}
                          </span>
                          <span className="bg-purple-100 text-purple-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium flex items-center">
                            <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 flex-shrink-0" />
                            {currentJob.experience}
                          </span>
                          <span className="bg-orange-100 text-orange-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium flex items-center">
                            <DollarSign className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 flex-shrink-0" />
                            <span className="truncate">{currentJob.salary}</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 text-lg mb-8 leading-relaxed bg-blue-50 p-6 rounded-2xl border border-blue-200">
                      {currentJob.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <Briefcase className="h-5 w-5 mr-3 text-purple-600" />
                          Key Responsibilities
                        </h3>
                        <ul className="space-y-3">
                          {currentJob.responsibilities.map((item, index) => (
                            <li key={index} className="flex items-start bg-gray-50 p-4 rounded-xl hover:bg-purple-50 transition-colors">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <Award className="h-5 w-5 mr-3 text-blue-600" />
                          Requirements
                        </h3>
                        <ul className="space-y-3">
                          {currentJob.requirements.map((item, index) => (
                            <li key={index} className="flex items-start bg-gray-50 p-4 rounded-xl hover:bg-blue-50 transition-colors">
                              <Star className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <Heart className="h-5 w-5 mr-3 text-green-600" />
                        Perks & Benefits
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {currentJob.perks.map((perk, index) => (
                          <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 text-gray-800 p-4 rounded-xl text-center border border-green-200 hover:shadow-lg transition-all duration-300">
                            <div className="text-sm font-semibold">{perk}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Application Form */}
                  <div id="apply" className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-3">Apply for {currentJob.title}</h2>
                      <p className="text-gray-600 text-lg">
                        Fill the form below and we'll contact you via WhatsApp for the next steps.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                      {/* Personal Information */}
                      <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-2xl border border-purple-200">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                          <Users className="h-5 w-5 mr-3 text-purple-600" />
                          Personal Information
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 bg-white"
                              placeholder="Enter your full name"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                              Highest Qualification *
                            </label>
                            <input
                              type="text"
                              name="qualification"
                              value={formData.qualification}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 bg-white"
                              placeholder="e.g., B.Tech, BCA, Diploma, etc."
                            />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6 mt-6">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                              Mobile Number *
                            </label>
                            <input
                              type="tel"
                              name="mobile"
                              value={formData.mobile}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 bg-white"
                              placeholder="+91 XXXXX XXXXX"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-300 bg-white"
                              placeholder="your.email@example.com"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Professional Details */}
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                          <Briefcase className="h-5 w-5 mr-3 text-green-600" />
                          Professional Details
                        </h3>

                        <div className="mb-6">
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            Skills & Expertise *
                          </label>
                          <textarea
                            name="skills"
                            value={formData.skills}
                            onChange={handleInputChange}
                            required
                            rows={4}
                            className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-300 bg-white"
                            placeholder="List your technical skills, programming languages, tools, frameworks, marketing skills, etc."
                          />
                        </div>

                        <div className="grid sm:grid-cols-3 gap-6">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                              Total Experience *
                            </label>
                            <input
                              type="text"
                              name="experience"
                              value={formData.experience}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-300 bg-white"
                              placeholder="e.g., 2 years, Fresher"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                              Notice Period
                            </label>
                            <input
                              type="text"
                              name="noticePeriod"
                              value={formData.noticePeriod}
                              onChange={handleInputChange}
                              className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-300 bg-white"
                              placeholder="e.g., Immediate, 15 days"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                              Position Applying For *
                            </label>
                            <select
                              name="position"
                              value={formData.position}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-300 bg-white"
                            >
                              {jobOpenings.map(job => (
                                <option key={job.id} value={job.title}>{job.title}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6 mt-6">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                              Current Package (Annual)
                            </label>
                            <input
                              type="text"
                              name="currentPackage"
                              value={formData.currentPackage}
                              onChange={handleInputChange}
                              className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-300 bg-white"
                              placeholder="e.g., ₹3,00,000 or Fresher"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                              Expected Package (Annual) *
                            </label>
                            <input
                              type="text"
                              name="expectedPackage"
                              value={formData.expectedPackage}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-300 bg-white"
                              placeholder="e.g., ₹4,00,000"
                            />
                          </div>
                        </div>

                        <div className="mt-6">
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            Portfolio/GitHub/LinkedIn Link
                          </label>
                          <input
                            type="url"
                            name="portfolio"
                            value={formData.portfolio}
                            onChange={handleInputChange}
                            className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-300 bg-white"
                            placeholder="https://github.com/yourusername or LinkedIn profile URL"
                          />
                        </div>

                        <div className="mt-6">
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            Tell Us About Yourself *
                          </label>
                          <textarea
                            name="about"
                            value={formData.about}
                            onChange={handleInputChange}
                            required
                            rows={5}
                            className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-300 bg-white"
                            placeholder="Share your background, career goals, achievements, and why you want to join JS TECH SOLUTION..."
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-5 px-8 rounded-2xl font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-3 shadow-lg"
                      >
                        <Send className="h-6 w-6" />
                        <span>Submit</span>
                      </button>

                      <p className="text-center text-gray-600 text-sm">
                        By applying, you agree to be contacted via WhatsApp for the recruitment process.
                        Your information is secure with us.
                      </p>
                    </form>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Start Your Career Journey?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our HR team is here to help you find the perfect role and guide you through the application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href={TEL_LINK}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-3"
            >
              <Phone className="h-6 w-6" />
              <span>Call HR: {PHONE_DISPLAY}</span>
            </a>
            <a
              href="mailto:hr@jstechsolution.in"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3"
            >
              <Mail className="h-6 w-6" />
              <span>Email HR: hr@jstechsolution.in</span>
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="text-center">
              <div className="bg-blue-500/20 p-4 rounded-2xl inline-block mb-4">
                <Clock className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quick Response</h3>
              <p className="text-gray-400">We respond to all applications within 24 hours</p>
            </div>
            <div className="text-center">
              <div className="bg-green-500/20 p-4 rounded-2xl inline-block mb-4">
                <Users className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Supportive Team</h3>
              <p className="text-gray-400">Join a collaborative and growth-oriented environment</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-500/20 p-4 rounded-2xl inline-block mb-4">
                <Rocket className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Career Growth</h3>
              <p className="text-gray-400">Continuous learning and advancement opportunities</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersNew;
