import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { LogOut, User, LayoutDashboard, Settings, FileText } from 'lucide-react';

const Dashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-gray-50 flex">
            <Helmet>
                <title>Dashboard | JS TECH SOLUTION Partner</title>
            </Helmet>

            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 hidden md:block">
                <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                        <LayoutDashboard className="text-blue-600" />
                        Partner Panel
                    </h2>
                </div>
                <nav className="px-4 space-y-2">
                    <a href="#" className="flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-700 rounded-xl font-medium">
                        <LayoutDashboard size={20} /> Overview
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl font-medium transition-colors">
                        <FileText size={20} /> Reports
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl font-medium transition-colors">
                        <User size={20} /> Profile
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl font-medium transition-colors">
                        <Settings size={20} /> Settings
                    </a>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user?.displayName || 'Partner'}!</h1>
                        <p className="text-gray-500">Here's what's happening with your partnership.</p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 px-4 py-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors font-medium"
                    >
                        <LogOut size={18} /> Logout
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-gray-500 font-medium mb-2">Total Earnings</h3>
                        <p className="text-3xl font-bold text-gray-900">₹0.00</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-gray-500 font-medium mb-2">Active Referrals</h3>
                        <p className="text-3xl font-bold text-gray-900">0</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-gray-500 font-medium mb-2">Pending Payouts</h3>
                        <p className="text-3xl font-bold text-gray-900">₹0.00</p>
                    </div>
                </div>

                <div className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
                    <div className="max-w-md mx-auto">
                        <img src="https://illustrations.popsy.co/gray/success.svg" alt="Success" className="h-48 mx-auto mb-6 opacity-80" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">You're all set!</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Your dashboard is ready. As you refer clients and close deals, your statistics will appear here in real-time.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
