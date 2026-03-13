import React, { useState } from 'react';
import { Calculator, TrendingUp, IndianRupee, RefreshCw } from 'lucide-react';

const ROICalculator: React.FC = () => {
    const [budget, setBudget] = useState<number>(5000);
    const [cpc, setCpc] = useState<number>(20); // Cost Per Click
    const [conversionRate, setConversionRate] = useState<number>(2.5); // %
    const [averageOrderValue, setAverageOrderValue] = useState<number>(1000);

    // Calculations
    const clicks = Math.floor(budget / cpc);
    const leads = Math.floor(clicks * (conversionRate / 100));
    const revenue = leads * averageOrderValue;
    const profit = revenue - budget;
    const roi = budget > 0 ? ((profit / budget) * 100).toFixed(1) : "0";

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                    <Calculator className="h-6 w-6" />
                    <h3 className="text-xl font-bold">ROI Calculator</h3>
                </div>
                <p className="text-blue-100 text-sm">
                    Estimate your potential returns with our digital marketing services.
                </p>
            </div>

            <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Inputs */}
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Monthly Ad Budget (₹)
                            </label>
                            <div className="relative">
                                <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input
                                    type="number"
                                    value={budget}
                                    onChange={(e) => setBudget(Number(e.target.value))}
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                />
                            </div>
                            <input
                                type="range"
                                min="1000"
                                max="100000"
                                step="500"
                                value={budget}
                                onChange={(e) => setBudget(Number(e.target.value))}
                                className="w-full mt-2 h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Expected Conversion Rate (%)
                            </label>
                            <div className="flex items-center gap-4">
                                <input
                                    type="number"
                                    value={conversionRate}
                                    onChange={(e) => setConversionRate(Number(e.target.value))}
                                    step="0.1"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                                <span className="text-gray-500 font-bold">%</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Typical rate is 2% - 5%</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Average Value per Sale (₹)
                            </label>
                            <div className="relative">
                                <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input
                                    type="number"
                                    value={averageOrderValue}
                                    onChange={(e) => setAverageOrderValue(Number(e.target.value))}
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Results */}
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 flex flex-col justify-center">
                        <h4 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                            <TrendingUp className="h-5 w-5 text-green-600" />
                            Projected Results
                        </h4>

                        <div className="space-y-6">
                            <div className="flex justify-between items-end border-b border-gray-200 pb-3">
                                <span className="text-gray-600">Estimated Clicks</span>
                                <span className="text-xl font-bold text-gray-900">{clicks.toLocaleString()}</span>
                            </div>

                            <div className="flex justify-between items-end border-b border-gray-200 pb-3">
                                <span className="text-gray-600">Estimated Leads/Sales</span>
                                <span className="text-2xl font-bold text-blue-600">{leads.toLocaleString()}</span>
                            </div>

                            <div className="flex justify-between items-end border-b border-gray-200 pb-3">
                                <span className="text-gray-600">Projected Revenue</span>
                                <span className="text-2xl font-bold text-green-600">₹{revenue.toLocaleString()}</span>
                            </div>

                            <div className="pt-2">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-gray-600 font-medium">ROI</span>
                                    <span className={`text-2xl font-bold ${Number(roi) > 0 ? 'text-green-600' : 'text-red-500'}`}>
                                        {roi}%
                                    </span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div
                                        className={`h-2.5 rounded-full ${Number(roi) > 0 ? 'bg-green-500' : 'bg-red-500'}`}
                                        style={{ width: `${Math.min(Number(roi), 100)}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-4 border-t border-gray-200 text-center">
                            <p className="text-xs text-gray-500 mb-3">Estimates based on industry averages.</p>
                            <button
                                onClick={() => setBudget(5000) || setConversionRate(2.5)}
                                className="text-blue-600 text-sm font-semibold hover:text-blue-800 flex items-center justify-center gap-1 mx-auto"
                            >
                                <RefreshCw className="h-4 w-4" /> Reset Calculator
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ROICalculator;
