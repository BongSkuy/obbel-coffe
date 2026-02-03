'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import PrimaryButton from '@/components/ui/PrimaryButton';
import WhatsAppFloatButton from '@/components/ui/WhatsAppFloatButton';
import { CheckCircle2, ArrowRight, TrendingUp, Users, Target, Zap, Award, Coffee, MessageCircle, Crown, Check } from 'lucide-react';
import { CONTACT_INFO } from '@/data/constants';
import { franchisePackages } from '@/data/franchise';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Kopi Terbukti Laku',
    description: 'Bukan konsep di atas kertas, tapi kopi yang sudah terbukti diminati dan laku di lapangan.'
  },
  {
    icon: Users,
    title: 'Sistem Sudah Jalan',
    description: 'Semua operasional sudah terstruktur dan tested. Kamu tinggal menjalankan sistemnya.'
  },
  {
    icon: Target,
    title: 'Modal Terjangkau',
    description: 'Investasi awal yang masuk akal untuk anak muda yang mau mulai usaha.'
  },
  {
    icon: Award,
    title: 'Quality Kontrol',
    description: 'Standar rasa yang konsisten dengan bahan baku berkualitas dari supplier terpercaya.'
  },
  {
    icon: Zap,
    title: 'Quick Start',
    description: 'Siap jualan dalam waktu singkat dengan training dan support penuh dari tim kami.'
  },
  {
    icon: Coffee,
    title: 'Brand Growing',
    description: 'Ikut tumbuh bersama brand yang sedang naik daun di kalangan anak muda.'
  }
];

const steps = [
  {
    step: '01',
    title: 'Konsultasi',
    description: 'Diskusikan kebutuhan dan lokasi target kamu dengan tim kami.'
  },
  {
    step: '02',
    title: 'Survey Lokasi',
    description: 'Tim kami akan survey lokasi untuk memastikan potensi pasar.'
  },
  {
    step: '03',
    title: 'Perjanjian',
    description: 'Tanda tangan perjanjian kemitraan dan pembayaran investasi.'
  },
  {
    step: '04',
    title: 'Training',
    description: 'Ikut training intensif tentang cara membuat kopi dan menjalankan usaha.'
  },
  {
    step: '05',
    title: 'Persiapan',
    description: 'Persiapan gerobak/kios, perlengkapan, dan bahan baku.'
  },
  {
    step: '06',
    title: 'Grand Opening',
    description: 'Buka usaha dan mulai raih profit dengan support penuh dari kami!'
  }
];

const requirements = [
  'Semangat dan komitmen kuat untuk berbisnis',
  'Waktu yang cukup untuk mengelola usaha',
  'Lokasi strategis atau potensial untuk usaha',
  'Siap mengikuti sistem dan SOP yang sudah ditetapkan',
  'Modal investasi sesuai paket kemitraan yang dipilih'
];

export default function FranchisePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-600 to-green-800 text-white py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
                ☕ Peluang Usaha Nyata
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Jadi Mitra Obbel Coffee
              </h1>
              <p className="text-lg sm:text-xl text-green-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Sistem sudah jalan, kopi sudah terbukti laku. Sekarang giliran kamu yang sukses bersama Obbel Coffee!
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PrimaryButton className="bg-white text-green-700 hover:bg-green-50" size="lg">
                  Daftar Sekarang
                  <ArrowRight className="w-5 h-5 ml-2" />
                </PrimaryButton>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Why Franchise Section */}
        <Section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Kenapa Gabung Obbel Coffee?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Keuntungan nyata yang akan kamu dapatkan sebagai mitra
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow group"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                    <benefit.icon className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Pricing Packages Section */}
        <Section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-amber-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              >
                Paket Franchise
              </motion.span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Pilih Paket yang Cocok
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Investasi terjangkau dengan ROI cepat dan support penuh
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {franchisePackages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -12 }}
                  className={`relative rounded-3xl overflow-hidden ${
                    pkg.popular
                      ? 'bg-gradient-to-br from-green-600 to-green-700 text-white shadow-2xl scale-105'
                      : 'bg-white text-gray-900 shadow-lg hover:shadow-2xl border border-gray-100'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-amber-400 to-orange-400 text-white text-center py-2 text-sm font-bold">
                      <Crown className="w-4 h-4 inline mr-1" />
                      Paling Populer
                    </div>
                  )}

                  <div className={`p-8 ${pkg.popular ? 'pt-12' : ''}`}>
                    <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>
                      {pkg.name}
                    </h3>
                    <p className={`text-sm mb-6 ${pkg.popular ? 'text-green-100' : 'text-gray-600'}`}>
                      {pkg.description}
                    </p>

                    <div className="mb-6">
                      {pkg.originalPrice && (
                        <div className={`text-sm line-through mb-1 ${pkg.popular ? 'text-green-200' : 'text-gray-400'}`}>
                          Rp {pkg.originalPrice.toLocaleString('id-ID')}
                        </div>
                      )}
                      <div className={`text-4xl font-bold ${pkg.popular ? 'text-white' : 'text-green-600'}`}>
                        Rp {pkg.price.toLocaleString('id-ID')}
                      </div>
                      <div className={`text-sm mt-2 ${pkg.popular ? 'text-green-100' : 'text-gray-500'}`}>
                        ROI dalam <span className="font-semibold">{pkg.roi}</span>
                      </div>
                    </div>

                    <div className={`space-y-3 mb-6 ${pkg.popular ? 'text-green-100' : 'text-gray-700'}`}>
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pkg.popular ? 'text-white' : 'text-green-600'}`} />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className={`border-t pt-4 ${pkg.popular ? 'border-green-500' : 'border-gray-200'}`}>
                      <p className={`text-xs mb-3 font-medium ${pkg.popular ? 'text-green-100' : 'text-gray-500'}`}>
                        Termasuk:
                      </p>
                      <div className={`space-y-2 ${pkg.popular ? 'text-green-50' : 'text-gray-600'}`}>
                        {pkg.includes.slice(0, 5).map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs">
                            <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                              pkg.popular ? 'bg-white' : 'bg-green-600'
                            }`} />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <motion.a
                      href={CONTACT_INFO.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`mt-6 block w-full text-center font-semibold py-4 rounded-full transition-colors ${
                        pkg.popular
                          ? 'bg-white text-green-700 hover:bg-green-50'
                          : 'bg-green-600 text-white hover:bg-green-700'
                      }`}
                    >
                      Pilih Paket Ini
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-12 text-center max-w-4xl mx-auto"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold text-green-600">💡 Tips:</span> Semakin tinggi paket yang dipilih, semakin cepat ROI dan semakin lengkap supportnya.
                </p>
                <p className="text-sm text-gray-500">
                  *Harga dapat berubah sewaktu-waktu. Harga yang tertera sudah termasuk PPN.
                </p>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Steps Section */}
        <Section className="py-20 md:py-28 bg-green-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Alur Jadi Mitra
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Enam langkah sederhana untuk mulai usaha kopi impianmu
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow flex gap-6 items-start"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Requirements Section */}
        <Section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-black to-gray-900 rounded-3xl p-8 md:p-12 text-white"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Apa yang Kamu Butuhkan?
                </h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Untuk jadi mitra Obbel Coffee, kamu hanya perlu memenuhi syarat-syarat sederhana ini
                </p>

                <ul className="space-y-4 mb-8">
                  {requirements.map((req, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-200">{req}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href={CONTACT_INFO.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full px-8 py-4 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat WhatsApp
                  </motion.a>
                  <Link href="/contact">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <PrimaryButton className="bg-white text-gray-900 hover:bg-gray-100" size="lg">
                        Hubungi Kami
                      </PrimaryButton>
                    </motion.div>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="py-20 md:py-28 bg-green-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Coffee className="w-20 h-20 text-green-600 mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Siap Mulai Usaha Kopi Impianmu?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Jangan tunda lagi. Sistem sudah siap, kopi sudah terbukti. Sekarang giliran kamu yang sukses!
              </p>
              <motion.a
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full px-10 py-5 text-lg transition-colors"
              >
                Jadi Mitra Sekarang
                <ArrowRight className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </div>
        </Section>
      </main>

      <WhatsAppFloatButton />
      <Footer />
    </div>
  );
}
