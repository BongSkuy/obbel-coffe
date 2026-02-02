'use client';

import { motion } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppFloatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = '6281234567890';
  const whatsappMessage = encodeURIComponent('Halo Obbel Coffee! Aku mau tanya tentang...');

  const handleOpenWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Chat Bubble */}
      <motion.div
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={isOpen ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0, y: 20 }}
        className="fixed bottom-24 right-6 z-50 bg-white rounded-2xl shadow-2xl p-4 max-w-xs border-2 border-green-100"
      >
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-gray-900 text-sm mb-1">Halo! 👋</h4>
            <p className="text-xs text-gray-600 leading-relaxed mb-3">
              Ada yang bisa kami bantu? Chat dengan kami sekarang!
            </p>
            <button
              onClick={handleOpenWhatsApp}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg px-4 py-2 text-sm transition-colors"
            >
              Chat Sekarang
            </button>
          </div>
        </div>
      </motion.div>

      {/* WhatsApp Float Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all ${
          isOpen
            ? 'bg-gray-700 hover:bg-gray-800'
            : 'bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700'
        }`}
      >
        {isOpen ? (
          <X className="w-7 h-7 text-white" />
        ) : (
          <MessageCircle className="w-8 h-8 text-white" />
        )}
      </motion.button>
    </>
  );
}
