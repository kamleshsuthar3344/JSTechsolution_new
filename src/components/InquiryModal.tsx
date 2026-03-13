import React, { useState } from 'react';
import { waLink } from '../config/contact';
import { X, Send, User, Phone, Mail, FileText } from 'lucide-react';

interface InquiryModalProps {
    isOpen: boolean;
    onClose: () => void;
    serviceName: string;
}

const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose, serviceName }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        requirements: ''
    });

    if (!isOpen) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const message = `*New Inquiry from Website*
    
*Service/Package:* ${serviceName}

*Client Details:*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

*Requirements:*
${formData.requirements}`;

        window.open(waLink(message), '_blank');
        onClose();

        // Reset form after submission
        setFormData({
            name: '',
            phone: '',
            email: '',
            requirements: ''
        });
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl transform transition-all scale-100 border border-white/20 max-h-[90vh] flex flex-col">
                <div className="flex justify-between items-center p-5 border-b border-gray-100 flex-shrink-0">
                    <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Get Free Quote</h3>
                        <p className="text-xs sm:text-sm text-gray-500 mt-1 line-clamp-1">Fill the form to discuss {serviceName}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-2 rounded-full transition-all duration-200"
                    >
                        <X size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-5 space-y-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                    {/* Name */}
                    <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                            <User size={16} className="text-blue-600" /> Name
                        </label>
                        <input
                            required
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-gray-400 text-sm sm:text-base"
                            placeholder="Enter your full name"
                        />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                            <Phone size={16} className="text-blue-600" /> Contact Number
                        </label>
                        <input
                            required
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-gray-400 text-sm sm:text-base"
                            placeholder="Enter your mobile number"
                        />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                            <Mail size={16} className="text-blue-600" /> Email Address
                        </label>
                        <input
                            required
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-gray-400 text-sm sm:text-base"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Requirements */}
                    <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                            <FileText size={16} className="text-blue-600" /> Requirements
                        </label>
                        <textarea
                            required
                            name="requirements"
                            value={formData.requirements}
                            onChange={handleChange}
                            rows={3}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all resize-none placeholder:text-gray-400 text-sm sm:text-base"
                            placeholder="Describe your requirements..."
                        />
                    </div>

                    <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-xl shadow-blue-500/25 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group mt-2">
                        <Send size={18} className="group-hover:translate-x-1 transition-transform" /> Submit Inquiry
                    </button>
                </form>
            </div>
        </div>
    );
};

export default InquiryModal;
