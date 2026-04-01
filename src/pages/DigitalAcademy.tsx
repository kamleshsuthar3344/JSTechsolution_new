import React from 'react';
import { Helmet } from 'react-helmet';
import {
    CheckCircle,
    MessageCircle,
    ArrowRight,
    Award,
    Briefcase,
    Users,
    Search,
    PlayCircle,
    Zap,
    Layout,
    TrendingUp
} from 'lucide-react';
import AcademyEnrollmentModal from '../components/AcademyEnrollmentModal';
import { academyCourses } from '../data/pricing';

import { waLink } from '../config/contact';

const DigitalAcademy: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [selectedCourse, setSelectedCourse] = React.useState<string | undefined>(undefined);

    const handleEnrollClick = (courseName?: string) => {
        setSelectedCourse(courseName);
        setIsModalOpen(true);
    };

    const handleWhatsApp = (courseName?: string) => {
        const message = courseName
            ? `Hi JS TECH SOLUTION! I'm interested in the ${courseName} course. Please share more details.`
            : `Hi JS TECH SOLUTION! I'm interested in joining the Digital Academy. Please share more details.`;
        window.open(waLink(message), '_blank');
    };

    const courses = academyCourses;

    const whyChoose = [
        '100% practical and hands-on training',
        'Live projects and real industry use cases',
        'Industry-relevant curriculum',
        'Beginner to advanced level learning',
        'Career guidance and freelancing support'
    ];

    const whoCanEnroll = [
        { role: 'Students and Freshers', icon: <Users className="h-6 w-6" /> },
        { role: 'Freelancers', icon: <Briefcase className="h-6 w-6" /> },
        { role: 'Working Professionals', icon: <PlayCircle className="h-6 w-6" /> },
        { role: 'Business Owners', icon: <Layout className="h-6 w-6" /> },
        { role: 'Job Seekers', icon: <Search className="h-6 w-6" /> }
    ];

    return (
        <div className="min-h-screen bg-slate-50 overflow-x-hidden text-slate-900">
            <Helmet>
                <title>Digital Academy | Master High-Income Skills | JS TECH SOLUTION</title>
                <meta name="description" content="Join Rajasthan's leading digital hub. Learn Web Development, SEO, and Graphic Design from industry experts. 100% placement support and certification." />
                <meta name="keywords" content="digital marketing course Jaipur, learn web development India, SEO training certification, high income skills academy, JS TECH SOLUTION digital academy" />
                <link rel="canonical" href="https://JSTECHSOLUTION.in/digital-academy" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://JSTECHSOLUTION.in/digital-academy" />
                <meta property="og:title" content="JS TECH SOLUTION | Digital Academy" />
                <meta property="og:description" content="Launch your digital career today. Practical skills for the modern economy." />
                <meta property="og:image" content="https://JSTECHSOLUTION.in/og-academy.jpg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Master Digital Skills" />
                <meta name="twitter:description" content="Industry-ready certification programs at Rajasthan's top digital hub." />
            </Helmet>

            {/* Hero Section */}
            <section className="relative bg-slate-950 text-white pt-32 pb-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-transparent to-purple-900/40 opacity-70"></div>
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -ml-64 -mb-64"></div>
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-indigo-500/10 backdrop-blur-md px-5 py-2 rounded-full mb-8 border border-white/10">
                            <Zap className="h-4 w-4 text-indigo-400" />
                            <span className="font-semibold text-indigo-200 text-sm uppercase tracking-wider">Education & Certification Programs</span>
                        </div>
                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black mb-8 tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-indigo-100 italic">
                            Master High-Income <span className="text-indigo-400 italic">Digital Skills</span>
                        </h1>
                        <p className="text-lg md:text-2xl mb-12 text-slate-300 leading-relaxed font-light">
                            Practical, job-oriented training to build your digital career. Starting from just <span className="text-white font-bold">₹1,100</span>.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <button
                                onClick={() => handleEnrollClick()}
                                className="px-10 py-5 rounded-2xl font-bold transition-all hover:scale-105 shadow-2xl shadow-indigo-500/20 bg-indigo-600 text-white flex items-center justify-center gap-3 active:scale-95"
                            >
                                Enroll Now
                                <ArrowRight className="h-5 w-5" />
                            </button>
                            <button
                                onClick={() => handleWhatsApp()}
                                className="px-10 py-5 rounded-2xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-3 backdrop-blur-md bg-white/5 border border-white/20 hover:bg-white/10 text-white"
                            >
                                <MessageCircle className="h-6 w-6" />
                                WhatsApp Inquiry
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Courses Section */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20 px-4">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Our Courses & Fees</h2>
                        <div className="h-2 w-24 bg-indigo-600 mx-auto rounded-full mb-8"></div>
                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-light">Industry-focused curriculum designed for real-world application.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {courses.map((course, index) => (
                            <div key={index} className={`p-6 lg:p-8 bg-white rounded-[2rem] lg:rounded-[2.5rem] border ${course.borderColor} shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 transition-all hover:-translate-y-2 group flex flex-col`}>
                                <div className={`${course.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-lg`}>
                                    {course.icon}
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4 leading-none tracking-tight">{course.title}</h3>
                                <p className="text-slate-500 text-md bg-slate-50 p-4 rounded-2xl mb-6 italic leading-snug flex-grow border border-slate-100">
                                    {course.description}
                                </p>
                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-3xl font-black text-indigo-600">{course.price}</span>
                                    <button
                                        onClick={() => handleEnrollClick(course.title)}
                                        className="p-4 bg-indigo-50 text-indigo-600 rounded-2xl hover:bg-indigo-600 hover:text-white transition-all transform hover:scale-110"
                                    >
                                        <ArrowRight className="h-6 w-6" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 opacity-5 blur-[120px] -mr-48 -mt-48"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <span className="text-indigo-600 font-black tracking-widest text-[10px] uppercase mb-4 block underline decoration-indigo-600 underline-offset-8">Academy Features</span>
                            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight leading-none italic">Why Choose Our<br /><span className="text-indigo-600 italic text-4xl sm:text-6xl">Certification?</span></h2>
                            <div className="space-y-6">
                                {whyChoose.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-4 group">
                                        <div className="shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-xl shadow-sm border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                            <CheckCircle className="h-5 w-5 lg:h-6 lg:w-6" />
                                        </div>
                                        <span className="text-lg lg:text-xl text-slate-700 font-bold group-hover:text-indigo-600 transition-colors">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-2 gap-6 relative">
                            <div className="space-y-6 mt-12">
                                <div className="p-8 bg-indigo-600 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group hover:scale-105 transition-all">
                                    <div className="absolute top-0 right-0 p-4 opacity-20"><Award size={80} /></div>
                                    <div className="text-4xl font-black mb-2">100%</div>
                                    <div className="text-sm font-bold uppercase tracking-widest opacity-80">Practical</div>
                                </div>
                                <div className="p-8 bg-slate-900 rounded-[3rem] text-white shadow-2xl transition-all hover:scale-105">
                                    <div className="text-2xl font-black mb-1">Live</div>
                                    <div className="text-xs uppercase tracking-widest opacity-60">Projects</div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="p-8 bg-white border border-slate-100 rounded-[3rem] text-slate-900 shadow-2xl transition-all hover:scale-105">
                                    <div className="text-2xl font-black mb-1">3-6 Mo.</div>
                                    <div className="text-xs uppercase tracking-widest opacity-60 text-slate-400">Duration</div>
                                </div>
                                <div className="p-8 bg-indigo-50 border border-indigo-100 rounded-[3rem] text-indigo-900 shadow-2xl relative overflow-hidden transition-all hover:scale-105">
                                    <div className="absolute bottom-0 right-0 p-4 opacity-10"><Zap size={80} /></div>
                                    <div className="text-4xl font-black mb-2">Real</div>
                                    <div className="text-sm font-bold uppercase tracking-widest opacity-60">Outcomes</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Career Support Section */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-indigo-950 rounded-[4rem] p-10 md:p-20 text-white relative overflow-hidden shadow-4xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-transparent"></div>
                        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500 opacity-10 blur-[120px]"></div>

                        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                            <div>
                                <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tight leading-none italic">
                                    100% Placement<br /><span className="text-indigo-400 italic">Support</span>
                                </h2>
                                <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-12 italic">
                                    We don’t just train you; we launch your career. Join the growing list of JS TECH SOLUTION success stories.
                                </p>
                                <div className="inline-flex items-center gap-4 bg-white/10 px-8 py-5 rounded-3xl border border-white/10 backdrop-blur-md">
                                    <div className="bg-indigo-500 p-3 rounded-2xl"><TrendingUp className="h-6 w-6" /></div>
                                    <div>
                                        <div className="text-sm uppercase tracking-widest opacity-60 font-black">Starting Salary Potential</div>
                                        <div className="text-3xl font-black text-white">₹14K – ₹75K / Mo.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-[3rem] p-12 text-slate-900 shadow-2xl">
                                <h3 className="text-3xl font-black mb-8 leading-tight tracking-tight">Who Can Enroll?</h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {whoCanEnroll.map((item, index) => (
                                        <div key={index} className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-slate-100 transition-colors group">
                                            <div className="text-indigo-600 text-indigo-500 group-hover:scale-110 transition-transform">{item.icon}</div>
                                            <span className="font-bold text-slate-700">{item.role}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-8 text-center text-slate-400 text-xs font-black uppercase tracking-widest opacity-60">Anyone with a passion for digital growth*</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-white relative text-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight leading-none">Enroll Now & Start Your <span className="text-indigo-600">Digital Career</span> Today</h2>
                    <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed italic">Gain practical skills, earn certifications, and unlock high-growth career opportunities in the digital industry.</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button
                            onClick={() => handleEnrollClick()}
                            className="px-12 py-6 bg-indigo-600 text-white rounded-3xl font-black text-xl hover:bg-indigo-700 transition-all hover:scale-105 shadow-xl shadow-indigo-500/30 flex items-center justify-center gap-4 active:scale-95"
                        >
                            <ArrowRight className="h-8 w-8" />
                            Enroll Today
                        </button>
                        <button
                            onClick={() => handleWhatsApp()}
                            className="px-12 py-6 bg-white border-4 border-slate-900 rounded-3xl font-black text-xl hover:bg-slate-900 hover:text-white transition-all hover:scale-105 flex items-center justify-center gap-4 active:scale-95"
                        >
                            <MessageCircle className="h-8 w-8" />
                            Chat on WhatsApp
                        </button>
                    </div>
                    <div className="mt-12 text-slate-400 font-bold uppercase tracking-[0.2em] text-xs">Join Rajasthan's Leading Digital Hub</div>
                </div>
            </section>

            <AcademyEnrollmentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                courseName={selectedCourse}
            />
        </div>
    );
};

export default DigitalAcademy;
