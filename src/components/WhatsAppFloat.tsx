import React from 'react';
import { MessageCircle } from 'lucide-react';
import { waLink } from '../config/contact';

const WhatsAppFloat = () => {
  return (
    <a
      href={waLink("Hello JS TECH SOLUTION, I want to learn about earning opportunities.")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 animate-pulse"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppFloat;