import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Instagram, Star, Zap, Shield, Users } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { waLink, TEL_LINK, PHONE_DISPLAY, WHATSAPP_NUMBER } from '../config/contact';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form processing
    await new Promise(resolve => setTimeout(resolve, 1000));

    const whatsappMessage = `Hello JS TECH SOLUTION! 

*🎯 New Project Inquiry*

*Name:* ${formData.fullName}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Service Interested:* ${formData.service}
*Project Details:* ${formData.message}

I'm excited to discuss my project with you and get started!`;

    window.open(waLink(whatsappMessage), '_blank');
    setIsSubmitting(false);
  };

  const services = [
    'Website Development',
    'E-commerce Store',
    'SEO Services',
    'Social Media Marketing',
    'Google & Meta Ads',
    'Branding & Logo Design',
    'Digital Marketing Package',
    'Custom Software Development',
    'Mobile App Development',
    'Other Service'
  ];

  const contactInfo = [
    {
      icon: <Phone className="h-7 w-7" />,
      title: 'Call Us Now',
      content: PHONE_DISPLAY,
      link: TEL_LINK,
      description: 'Available 24/7 for urgent queries',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Mail className="h-7 w-7" />,
      title: 'Email Us',
      content: 'info@jstechsolution.in',
      link: 'mailto:info@jstechsolution.in',
      description: 'Response within 2 hours',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <MapPin className="h-7 w-7" />,
      title: 'Visit Us',
      content: 'Jaipur, Rajasthan',
      link: '#',
      description: 'Digital agency serving globally',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Clock className="h-7 w-7" />,
      title: 'Working Hours',
      content: '24/7 Support',
      link: '#',
      description: 'Always available for our clients',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Lightning Fast Response',
      description: 'Get instant replies on WhatsApp within minutes'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: '100% Secure',
      description: 'Your information is safe and confidential'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Expert Team',
      description: 'Work with certified digital marketing professionals'
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: 'Proven Results',
      description: '150+ successful projects delivered'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Contact Us | Get a Free Digital Strategy Consultation | JS TECH SOLUTION</title>
        <meta
          name="description"
          content="Ready to grow your business? Contact JS TECH SOLUTION today. Get a free consultation for website development, SEO, and digital marketing. Reach us at +91 82399 33344."
        />
        <meta name="keywords" content="contact JS TECH SOLUTION, digital marketing consultant Jaipur, web development inquiry, free SEO consultation India, business growth contact" />
        <link rel="canonical" href="https://JSTECHSOLUTION.in/contact" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://JSTECHSOLUTION.in/contact" />
        <meta property="og:title" content="Contact JS TECH SOLUTION | Let's Talk Growth" />
        <meta property="og:description" content="Reach out to the experts. Start your project with a free strategy session today." />
        <meta property="og:image" content="https://JSTECHSOLUTION.in/og-contact.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Get in Touch - JS TECH SOLUTION" />
        <meta name="twitter:description" content="Professional digital solutions are just a message away." />
      </Helmet>

      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Let's Create <span className="text-yellow-400 frozen-text" data-text="Magic">Magic</span> Together
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-purple-100 leading-relaxed">
              Ready to transform your business? Share your vision, and we'll build the digital solution that drives your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={waLink("Hello JS TECH SOLUTION! I want to discuss my project and get started.")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center space-x-3 shadow-lg"
              >
                <MessageCircle className="h-6 w-6" />
                <span>💬 Instant WhatsApp Connect</span>
              </a>
              <a
                href="#contact-form"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 flex items-center space-x-3"
              >
                <span>📝 Fill Project Form</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-purple-600">JS TECH SOLUTION</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're not just another agency - we're your growth partners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section id="contact-form" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Start Your <span className="text-purple-600">Project</span>
                </h2>
                <p className="text-lg text-gray-600">
                  Fill this form and we'll connect within 30 minutes with a custom proposal
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="+91 XXX XXX XXXX"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select your required service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                    Project Details *
                  </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                    />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-8 py-5 rounded-xl text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-3 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>🚀 Send Project Details</span>
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  📞 We'll call you within 30 minutes to discuss your project in detail
                </p>
                {/* Department Emails (moved here from Contact info column) */}
                <div className="bg-white rounded-2xl p-6 shadow-lg mt-6">
                  <h3 className="font-bold text-gray-900 text-xl mb-4">Department Emails</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { label: 'Info & Support', email: 'info@jstechsolution.in' },
                      { label: 'Help', email: 'jstechsolution@zohomail.in' },
                      { label: 'Contact', email: 'kamleshsuthar3344@gmail.com' }
                    ].map((d) => (
                      <div key={d.email} className="space-y-1">
                        <div className="text-xs font-semibold text-gray-700">{d.label}</div>
                        <a
                          href={`mailto:${d.email}`}
                          className="block p-2 border rounded-lg hover:shadow-md transition-all duration-200 text-xs text-blue-600 break-words"
                        >
                          {d.email}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Get In <span className="text-purple-600">Touch</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We're here to help you succeed. Choose the most convenient way to reach out, and let's start building something amazing together.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link !== '#' ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className={`block bg-gradient-to-br ${info.color} text-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 group`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-white bg-opacity-20 p-3 rounded-xl group-hover:scale-110 transition-transform">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-1">{info.title}</h3>
                        <p className="text-white text-opacity-90 text-lg font-semibold mb-2">
                          {info.content}
                        </p>
                        <p className="text-white text-opacity-70 text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              
              {/* Social Media & Quick Actions */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="font-bold text-gray-900 text-xl mb-6">Connect With Us</h3>

                {/* Social Links */}
                <div className="flex space-x-4 mb-8">
                  <a
                    href={waLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white p-4 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 group"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span className="font-semibold">WhatsApp</span>
                  </a>
                  <a
                    href="#"
                    className="flex-1 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white p-4 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 group"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="font-semibold">Instagram</span>
                  </a>
                </div>

                {/* Quick Response Promise */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-3 flex items-center text-lg">
                    <Zap className="h-5 w-5 mr-2" />
                    Quick Response Guarantee
                  </h4>
                  <div className="space-y-2 text-green-700">
                    <div className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      WhatsApp: Instant response (1-5 minutes)
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Email: Within 2 hours during business hours
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Phone: 24/7 for urgent project discussions
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 border border-purple-200">
                <h4 className="font-semibold text-purple-800 mb-4 text-lg">Why Clients Trust Us</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">150+ Projects</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">24/7 Support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">50-70% Savings</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Money Back Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-purple-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know before starting your project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How quickly can you start my project?",
                answer: "We can typically start within 24 hours! For urgent projects, we offer same-day onboarding and kickoff."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes! We provide 30 days free support after project completion, plus affordable monthly maintenance plans."
              },
              {
                question: "What's your pricing structure?",
                answer: "We offer transparent pricing starting from ₹4,999 for websites. Custom quotes based on project scope with 50-70% savings."
              },
              {
                question: "Can I see your previous work?",
                answer: "Absolutely! Check our portfolio section with 150+ successful projects and client testimonials."
              },
              {
                question: "Do you work with startups?",
                answer: "Yes! We specialize in helping startups with affordable packages and scalable solutions."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept UPI, bank transfer, credit cards, and offer flexible payment plans for larger projects."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
                <h3 className="font-bold text-gray-900 mb-3 text-lg group-hover:text-purple-600 transition-colors">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to <span className="text-yellow-400">Begin</span>?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-purple-100 leading-relaxed">
            Don't let your ideas wait. Let's turn your vision into reality starting today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={waLink("Hello JS TECH SOLUTION! I'm ready to start my project right now!")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-600 text-purple-900 px-8 py-5 rounded-xl text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-3"
            >
              <MessageCircle className="h-6 w-6" />
              <span>🚀 Start Instant Chat</span>
            </a>
            <a
              href={`tel:+91${WHATSAPP_NUMBER}`}
              className="border-2 border-white hover:bg-white hover:text-purple-600 px-8 py-5 rounded-xl text-lg font-bold transition-all duration-300 flex items-center justify-center space-x-3"
            >
              <Phone className="h-6 w-6" />
              <span>📞 Call Now</span>
            </a>
          </div>
          <p className="mt-6 text-purple-200 text-lg">
            ⚡ Free consultation & project estimate included
          </p>
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default Contact;