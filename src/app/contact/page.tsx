'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import GoFoodButton from '@/components/ui/GoFoodButton';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { CONTACT_INFO, SITE_CONFIG } from '@/data/constants';
import { Phone, Mail, Instagram, MessageCircle, MapPin, Clock, Coffee, ShoppingBag } from 'lucide-react';

const contactMethods = [
  {
    icon: Phone,
    title: 'Telepon',
    value: CONTACT_INFO.phone,
    link: `tel:${CONTACT_INFO.phone}`,
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: Mail,
    title: 'Email',
    value: CONTACT_INFO.email,
    link: `mailto:${CONTACT_INFO.email}`,
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: Instagram,
    title: 'Instagram',
    value: '@obbelcoffee',
    link: CONTACT_INFO.instagram,
    color: 'bg-pink-100 text-pink-600'
  },
  {
    icon: MessageCircle,
    title: 'TikTok',
    value: '@obbelcoffee',
    link: CONTACT_INFO.tiktok,
    color: 'bg-gray-100 text-gray-600'
  }
];

const locations = [
  {
    area: 'Solo',
    address: 'Jl. Polo Pulisen, Solo',
    hours: '07:00 - 21:00'
  },
  {
    area: 'Lokasi Keliling',
    address: 'Berbagai lokasi strategis',
    hours: '07:00 - 21:00'
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-green-50 to-white py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                Hubungi Kami
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Mau pesan kopi atau jadi mitra? Kami siap membantu. Hubungi kami melalui 
                berbagai cara atau langsung pesan di GoFood!
              </p>
            </motion.div>
          </div>
        </section>

        {/* GoFood CTA Section */}
        <Section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-8 md:p-12 text-white text-center">
                <ShoppingBag className="w-16 h-16 mx-auto mb-6 opacity-90" />
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Pesan Kopi di GoFood
                </h2>
                <p className="text-green-100 text-lg mb-8 leading-relaxed">
                  Nikmati kopi Obbel Coffee favoritmu langsung di lokasi kamu. 
                  Cukup buka GoFood, cari Obbel Coffee, dan pesan!
                </p>
                <GoFoodButton className="bg-white text-green-700 hover:bg-green-50" />
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Contact Methods */}
        <Section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Cara Menghubungi Kami
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Pilih cara yang paling nyaman untukmu
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.link}
                  target={method.title === 'Telefon' ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className={`w-14 h-14 ${method.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <method.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 text-sm break-words">{method.value}</p>
                </motion.a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <div className="bg-white rounded-3xl p-8 md:p-12 text-center shadow-sm">
                <MessageCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Chat di WhatsApp
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  Punya pertanyaan tentang franchise? Atau ingin kustom order? 
                  Chat langsung dengan tim kami!
                </p>
                <motion.a
                  href={CONTACT_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full px-8 py-4 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat WhatsApp
                </motion.a>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Locations */}
        <Section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Lokasi & Jam Operasional
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Temukan kami di lokasi terdekat
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {locations.map((location, index) => (
                <motion.div
                  key={location.area}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{location.area}</h3>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2 text-gray-600">
                          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{location.address}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="w-4 h-4 flex-shrink-0" />
                          <span className="text-sm">{location.hours}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Franchise CTA */}
        <Section className="py-16 md:py-20 bg-black text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <Coffee className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Tertarik Jadi Mitra?
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Sistem sudah jalan, kopi sudah terbukti laku. Jadi mitra Obbel Coffee 
                dan mulai usaha kopi impianmu sekarang!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/franchise">
                  <PrimaryButton variant="green" size="lg">
                    Lihat Info Franchise
                  </PrimaryButton>
                </Link>
                <motion.a
                  href={CONTACT_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-black font-semibold rounded-full px-8 py-4 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat WhatsApp
                </motion.a>
              </div>
            </motion.div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
