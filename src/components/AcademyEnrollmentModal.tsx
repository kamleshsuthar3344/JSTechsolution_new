import React, { useState, useRef } from 'react';
import { X, Send, User, Phone, Mail, FileText, Calendar, MapPin, GraduationCap, Upload, CheckCircle } from 'lucide-react';

interface AcademyEnrollmentModalProps {
    isOpen: boolean;
    onClose: () => void;
    courseName?: string;
}

const AcademyEnrollmentModal: React.FC<AcademyEnrollmentModalProps> = ({ isOpen, onClose, courseName }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        dob: '',
        city: '',
        state: '',
        qualification: '',
        message: ''
    });
    const [cvFile, setCvFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    if (!isOpen) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setCvFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const submissionData = new FormData();
            submissionData.append('_subject', `Digital Academy Enrollment: ${courseName || 'General Inquiry'}`);
            submissionData.append('Course', courseName || 'Digital Academy');
            submissionData.append('Name', formData.name);
            submissionData.append('Phone', formData.phone);
            submissionData.append('Email', formData.email);
            submissionData.append('DOB', formData.dob);
            submissionData.append('City', formData.city);
            submissionData.append('State', formData.state);
            submissionData.append('Qualification', formData.qualification);
            submissionData.append('Message', formData.message || 'No additional message.');
            submissionData.append('_template', 'table');

            if (cvFile) {
                submissionData.append('CV_Attachment', cvFile);
            }

            const response = await fetch("https://formsubmit.co/ajax/contact@jstechsolution.in", {
                method: "POST",
                body: submissionData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    name: '', phone: '', email: '', dob: '',
                    city: '', state: '', qualification: '', message: ''
                });
                setCvFile(null);
                setTimeout(() => {
                    setSubmitStatus('idle');
                    onClose();
                }, 4000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error("Submission error:", error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-white rounded-[2.5rem] w-full max-w-lg shadow-2xl transform transition-all scale-100 border border-slate-100 max-h-[90vh] flex flex-col overflow-hidden">
                <div className="flex justify-between items-center p-8 border-b border-slate-50 flex-shrink-0 bg-slate-50/50">
                    <div>
                        <h3 className="text-2xl font-black text-slate-900 tracking-tight">Enrollment Inquiry</h3>
                        <p className="text-sm text-slate-500 mt-1 line-clamp-1 font-bold">Joining: <span className="text-indigo-600 italic font-black">{courseName || 'Digital Academy'}</span></p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-slate-400 hover:text-slate-900 hover:bg-white p-3 rounded-2xl transition-all duration-200 shadow-sm border border-transparent hover:border-slate-100"
                    >
                        <X size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-5 overflow-y-auto custom-scrollbar">
                    {submitStatus === 'success' ? (
                        <div className="py-12 text-center animate-in zoom-in duration-300">
                            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle size={40} className="animate-bounce" />
                            </div>
                            <h4 className="text-2xl font-black text-slate-900 mb-2">Application Sent!</h4>
                            <p className="text-slate-500 font-bold px-4">
                                Your inquiry and CV have been submitted successfully. We will reach out to you within 24 hours.
                            </p>
                        </div>
                    ) : (
                        <>
                            {/* Personal Info Group */}
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 px-1">
                                        <User size={14} className="text-indigo-600" /> Full Name
                                    </label>
                                    <input required type="text" name="name" value={formData.name} onChange={handleChange}
                                        className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-indigo-600 outline-none transition-all font-bold placeholder:text-slate-300"
                                        placeholder="Your Name" />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 px-1">
                                            <Phone size={14} className="text-indigo-600" /> Phone
                                        </label>
                                        <input required type="tel" name="phone" value={formData.phone} onChange={handleChange}
                                            className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-indigo-600 outline-none transition-all font-bold placeholder:text-slate-300"
                                            placeholder="+91 XXXX" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 px-1">
                                            <Calendar size={14} className="text-indigo-600" /> Date of Birth
                                        </label>
                                        <input required type="date" name="dob" value={formData.dob} onChange={handleChange}
                                            className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-indigo-600 outline-none transition-all font-bold" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 px-1">
                                        <Mail size={14} className="text-indigo-600" /> Email Address
                                    </label>
                                    <input required type="email" name="email" value={formData.email} onChange={handleChange}
                                        className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-indigo-600 outline-none transition-all font-bold placeholder:text-slate-300"
                                        placeholder="name@email.com" />
                                </div>
                            </div>

                            {/* Location & Qualification */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 px-1">
                                        <MapPin size={14} className="text-indigo-600" /> City
                                    </label>
                                    <input required type="text" name="city" value={formData.city} onChange={handleChange}
                                        className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-indigo-600 outline-none transition-all font-bold placeholder:text-slate-300"
                                        placeholder="City" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 px-1">
                                        <MapPin size={14} className="text-indigo-600" /> State
                                    </label>
                                    <input required type="text" name="state" value={formData.state} onChange={handleChange}
                                        className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-indigo-600 outline-none transition-all font-bold placeholder:text-slate-300"
                                        placeholder="State" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 px-1">
                                    <GraduationCap size={14} className="text-indigo-600" /> Highest Qualification
                                </label>
                                <input required type="text" name="qualification" value={formData.qualification} onChange={handleChange}
                                    className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-indigo-600 outline-none transition-all font-bold placeholder:text-slate-300"
                                    placeholder="e.g. Graduate, MBA, etc." />
                            </div>

                            {/* CV Upload */}
                            <div className="space-y-2">
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 px-1">
                                    <Upload size={14} className="text-indigo-600" /> Upload CV (PDF/Image)
                                </label>
                                <div
                                    onClick={() => fileInputRef.current?.click()}
                                    className={`w-full border-2 border-dashed rounded-2xl p-4 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all ${cvFile ? 'border-indigo-600 bg-indigo-50 shadow-inner' : 'border-slate-200 hover:border-indigo-400 bg-slate-50/30'}`}
                                >
                                    <Upload size={24} className={cvFile ? 'text-indigo-600' : 'text-slate-400'} />
                                    <span className={`text-sm font-bold ${cvFile ? 'text-indigo-600' : 'text-slate-500'}`}>
                                        {cvFile ? cvFile.name : 'Click to select CV file'}
                                    </span>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Supports PDF, DOC, Images</p>
                                    <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept=".pdf,.doc,.docx,image/*" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2 px-1">
                                    <FileText size={14} className="text-indigo-600" /> Message (Optional)
                                </label>
                                <textarea name="message" value={formData.message} onChange={handleChange} rows={2}
                                    className="w-full px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-indigo-600 outline-none transition-all resize-none font-bold placeholder:text-slate-300"
                                    placeholder="Any questions?" />
                            </div>

                            {submitStatus === 'error' && (
                                <p className="text-red-500 text-xs font-bold text-center">Sorry, something went wrong. Please try again.</p>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full bg-slate-900 hover:bg-black text-white font-black py-5 rounded-2xl shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group mt-4 active:scale-95 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                        <span>Submitting Inquiry...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        Submit Enrollment
                                    </>
                                )}
                            </button>
                            <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest leading-loose">
                                We'll process your application and CV immediately.
                            </p>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
};

export default AcademyEnrollmentModal;
