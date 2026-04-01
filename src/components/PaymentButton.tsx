import React, { useState } from 'react';
import { X, Smartphone, Copy, CheckCircle2 } from 'lucide-react';

interface PaymentButtonProps {
  amount: number;
  currency?: string;
  buttonText?: string;
  className?: string;
  planName?: string;
}

const PaymentButton: React.FC<PaymentButtonProps> = ({
  amount,
  buttonText = 'Pay Now',
  className = 'bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors',
  planName = 'Service'
}) => {
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const upiId = 'kamleshks123@ybl';
  const payeeName = 'JS Tech Solution';
  const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiUrl)}`;

  const handleCopyUPI = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className={className}
        type="button"
      >
        {buttonText} - ₹{amount}
      </button>

      {/* Payment Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm transition-opacity">
          <div 
            className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white text-center relative">
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-xl font-bold mb-1">Complete Your Payment</h3>
              <p className="text-purple-100/90 text-sm">Scan QR or use a UPI app to pay</p>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 flex flex-col items-center">
              {/* Amount Display */}
              <div className="mb-6 text-center">
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Amount to Pay</span>
                <div className="text-4xl font-black text-slate-800 dark:text-white mt-1">
                  ₹{amount}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">for {planName}</div>
              </div>

              {/* QR Code container */}
              <div className="mb-6 p-4 bg-white border-2 border-slate-100 rounded-2xl shadow-sm">
                <img 
                  src={qrCodeUrl} 
                  alt="UPI Payment QR Code" 
                  className="w-48 h-48 object-contain"
                />
              </div>

              {/* UPI ID Copy block */}
              <div className="w-full flex items-center justify-between p-3 sm:px-4 sm:py-3 bg-slate-50 dark:bg-slate-800 rounded-xl mb-6 border border-slate-100 dark:border-slate-700">
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">UPI ID</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300 select-all">{upiId}</span>
                </div>
                <button 
                  onClick={handleCopyUPI}
                  className="flex items-center justify-center p-2 text-indigo-600 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors"
                  title="Copy UPI ID"
                >
                  {copied ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>

              {/* Direct UPI App Button (visible mostly on mobile) */}
              <a 
                href={upiUrl}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
              >
                <Smartphone className="w-5 h-5" />
                Pay via UPI App
              </a>
            </div>
            
            {/* Footer Note */}
            <div className="bg-slate-50 dark:bg-slate-800/50 px-6 py-4 text-center border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
              Payment is 100% secure via BHIM, GPay, PhonePe, Paytm, or any UPI app.
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentButton;