'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Coffee, Instagram, MessageCircle, Mail, Phone, Store, Send } from 'lucide-react';
import { CONTACT_INFO, SITE_CONFIG } from '@/data/constants';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubscribed(true);
    setIsLoading(false);
    setEmail('');
  };

  return (
    <footer className="bg-gradient-to-br from-green-900 via-green-800 to-amber-700 text-white mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="w-8 h-8 text-amber-300" />
              <span className="text-2xl font-bold text-white">{SITE_CONFIG.name}</span>
            </div>
            <p className="text-amber-100 text-sm leading-relaxed">
              {SITE_CONFIG.tagline}
            </p>
            <p className="text-amber-200 text-sm mt-3">
              Usaha kopi keliling yang sudah terbukti laku di lapangan. Sistem sudah jalan, 
              cocok untuk anak muda yang mau mulai usaha kopi.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-4 text-amber-200">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', href: '/' },
                { name: 'Menu', href: '/menu' },
                { name: 'Franchise', href: '/franchise' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'About', href: '/about' },
                { name: 'Testimonials', href: '/testimonials' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-amber-100 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-4 text-amber-200">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-amber-100 text-sm">
                <Phone className="w-4 h-4 text-amber-300" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-amber-100 text-sm">
                <Mail className="w-4 h-4 text-amber-300" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-4 pt-2">
                <a
                  href={CONTACT_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-100 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={CONTACT_INFO.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-100 hover:text-white transition-colors"
                  aria-label="TikTok"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-4 text-amber-200">Newsletter</h3>
            <p className="text-amber-100 text-sm mb-4 leading-relaxed">
              Dapatkan promo terbaru dan info menarik dari Obbel Coffee!
            </p>
            {isSubscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-800/50 border border-green-600/50 rounded-lg p-4 text-center"
              >
                <Mail className="w-6 h-6 text-green-300 mx-auto mb-2" />
                <p className="text-green-100 text-sm font-medium">
                  Terima kasih! Kamu berhasil berlangganan.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email kamu..."
                  required
                  className="w-full bg-green-800/50 border-2 border-green-600/50 rounded-lg px-4 py-3 text-sm text-white placeholder-green-400/50 focus:outline-none focus:border-amber-300 transition-colors"
                  disabled={isLoading}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isLoading}
                  className="w-full bg-amber-500 hover:bg-amber-400 disabled:bg-green-800 disabled:cursor-not-allowed text-white font-semibold rounded-lg px-4 py-3 text-sm transition-colors flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Memproses...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Langganan</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-green-600/30 mt-10 pt-6 text-center"
        >
          <p className="text-amber-200 text-sm">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
