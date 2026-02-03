'use client';

// Obbel Coffee - Home Page
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Coffee, TrendingUp, Users, CheckCircle2, Star, Quote, MapPin, Phone, Clock } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import GoFoodButton from '@/components/ui/GoFoodButton';
import PrimaryButton from '@/components/ui/PrimaryButton';
import WhatsAppFloatButton from '@/components/ui/WhatsAppFloatButton';
import { getBestSellers, type MenuItem } from '@/data/menu';
import { testimonials } from '@/data/testimonials';
import { outlets } from '@/data/outlets';
import { SITE_CONFIG } from '@/data/constants';

const features = [
  {
    icon: TrendingUp,
    title: 'Kopi Terbukti Laku',
    description: 'Bukan cuma wacana, kopi Obbel sudah terbukti laku di lapangan dengan pelanggan setia.'
  },
  {
    icon: Users,
    title: 'Sistem Sudah Jalan',
    description: 'Semua sistem operasional sudah siap dan terbukti efektif. Tinggal jalanin.'
  },
  {
    icon: CheckCircle2,
    title: 'Mudah Dijalankan',
    description: 'Cocok untuk anak muda yang pengen mulai usaha kopi tanpa ribet.'
  }
];

const whyObbel = [
  'Rasa kopi yang konsisten dan enak',
  'Modal terjangkau, profit maksimal',
  'Sistem sudah tested and proven',
  'Support dari tim profesional',
  'Target market jelas dan luas'
];

export default function Home() {
  const bestSellers = getBestSellers().slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white"></div>
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-600 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-20">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6"
                >
                  ☕ Usaha Kopi Nyata, Bukan Wacana
                </motion.span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
              >
                {SITE_CONFIG.tagline}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
              >
                Kualitas kopi premium dengan harga terjangkau. Sudah terbukti laku di lapangan, 
                sistem sudah jalan, siap untuk kamu jalankan!
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <GoFoodButton size="lg" />
                <Link href="/franchise">
                  <PrimaryButton variant="black" size="lg">
                    Lihat Franchise
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </PrimaryButton>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="mt-12 flex items-center justify-center gap-6 text-sm text-gray-500"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Sistem Teruji</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Kopi Berkualitas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>Profitable</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ duration: 1.5, delay: 1.5, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-gray-400 rounded-full"></div>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <Section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Kenapa Obbel Coffee?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Bukan sekadar bisnis kopi biasa, tapi sistem usaha yang sudah terbukti berhasil
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white border border-gray-200 rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                    <feature.icon className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* Why Obbel Section */}
        <Section className="py-20 md:py-28 bg-green-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Gue Kebayang Jalaninnya!
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Itulah yang sering kami dengar dari mereka yang melihat Obbel Coffee beraksi. 
                    Sistem yang simpel, kopi yang enak, dan hasil yang nyata bikin siapa saja 
                    kepikiran untuk mulai usaha kopi.
                  </p>

                  <ul className="space-y-4 mb-8">
                    {whyObbel.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Link href="/franchise">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <PrimaryButton variant="green" size="lg">
                        Jadi Mitra Obbel Coffee
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </PrimaryButton>
                    </motion.div>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <div className="bg-green-100 rounded-3xl p-8 relative">
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-600 rounded-full opacity-20"></div>
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-600 rounded-full opacity-20"></div>

                    <div className="relative z-10 text-center">
                      <Coffee className="w-24 h-24 mx-auto text-green-600 mb-6" />
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Sistem Siap, Kamu Siap?
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Join mitra Obbel Coffee dan mulai usaha kopi kamu sekarang. 
                        Kami bantu dari awal sampai sukses!
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </Section>

        {/* Best Seller Preview Section */}
        <Section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-2.5 rounded-full text-sm font-bold mb-6 shadow-lg">
                <Star className="w-4 h-4 inline mr-2 fill-current" />
                Best Seller
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Favorit Pelanggan
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Menu yang paling dicari dan selalu habis setiap hari
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-16">
              {bestSellers.map((item: MenuItem, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white border-2 border-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl hover:border-green-200 transition-all group"
                >
                  <div className="relative h-56 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = '/images/menu/coffee-milk-category.jpg';
                      }}
                    />
                    {item.isBestSeller && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                        <Star className="w-3 h-3 inline mr-1 fill-current" />
                        Best Seller
                      </div>
                    )}
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">{item.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 min-h-[44px]">{item.description}</p>
                    <div className="mt-4">
                      <div className="flex items-center justify-between relative">
                        <div className="flex-1 pr-4">
                          {item.promoPrice ? (
                            <div className="space-y-1">
                              <div className="flex items-baseline gap-2">
                                <span className="text-2xl font-bold text-green-600">
                                  Rp {item.promoPrice.toLocaleString('id-ID')}
                                </span>
                                <span className="absolute -top-2 right-16 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                                  Promo
                                </span>
                              </div>
                              <div className="text-sm text-gray-400 line-through">
                                Rp {item.price.toLocaleString('id-ID')}
                              </div>
                            </div>
                          ) : (
                            <div className="text-2xl font-bold text-green-600">
                              Rp {item.price.toLocaleString('id-ID')}
                            </div>
                          )}
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <GoFoodButton size="sm" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/menu">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <PrimaryButton variant="black" size="lg">
                    Lihat Semua Menu
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </PrimaryButton>
                </motion.div>
              </Link>
            </div>
          </div>
        </Section>

        {/* Testimonials Section */}
        <Section className="py-24 md:py-32 bg-gradient-to-br from-gray-50 to-amber-50">
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
                Testimoni Pelanggan
              </motion.span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Apa Kata Mereka?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ribuan pelanggan puas dengan kopi dan pelayanan Obbel Coffee
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 relative"
                >
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-amber-100" />

                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-200'
                        }`}
                      />
                    ))}
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-100 to-orange-100"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-12 text-center"
            >
              <div className="inline-flex items-center gap-8 bg-white rounded-2xl px-8 py-6 shadow-lg border border-gray-100">
                <div>
                  <div className="text-3xl font-bold text-amber-600">4.9</div>
                  <div className="flex gap-1 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">Google Rating</div>
                </div>
                <div className="h-12 w-px bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold text-green-600">2,500+</div>
                  <div className="text-sm text-gray-500 mt-1">Review Positif</div>
                </div>
                <div className="h-12 w-px bg-gray-200"></div>
                <div>
                  <div className="text-3xl font-bold text-amber-600">50K+</div>
                  <div className="text-sm text-gray-500 mt-1">Pelanggan Puas</div>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Location Section */}
        <Section className="py-24 md:py-32 bg-white">
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
                className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              >
                Lokasi Kami
              </motion.span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Kunjungi Kedai Kami
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Datang langsung ke lokasi dan nikmati suasana nyaman Obbel Coffee
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-100"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.3215860268364!2d110.59265301476845!3d-7.538861494668937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5bb5a0e8b093%3A0x6c5e3e8a1a1a1a1a!2sBoyolali%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1703970000000!5m2!1sen!2sid"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  />
                </motion.div>
              </div>

              <div className="lg:col-span-1 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Lokasi Outlet</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {outlets.map((outlet, index) => (
                    <motion.div
                      key={outlet.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-6 border-2 border-green-100 shadow-lg hover:shadow-xl transition-all"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-1">{outlet.name}</h4>
                          <p className="text-gray-600 text-sm">{outlet.address}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 pt-3 border-t border-green-100">
                        <Clock className="w-5 h-5 text-amber-600" />
                        <div className="flex-1">
                          <div className="text-xs text-gray-500">{outlet.hours.days}</div>
                          <div className="text-sm font-semibold text-green-600">
                            {outlet.hours.open} - {outlet.hours.close}
                          </div>
                        </div>
                        <a
                          href={outlet.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg px-4 py-2 transition-colors"
                        >
                          <MapPin className="w-4 h-4" />
                          Maps
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Franchise CTA Section */}
        <Section className="py-24 md:py-32 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-orange-900 to-yellow-950"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-amber-600 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-yellow-500 rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Siap Jadi Bagian dari<br />Obbel Coffee?
                </h2>
                <p className="text-xl sm:text-2xl text-orange-100 mb-10 leading-relaxed font-medium">
                  Sistem sudah jalan, kopi sudah terbukti laku. Tinggal kamu yang putuskan 
                  untuk mulai usaha kopi impianmu.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Link href="/franchise">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button className="bg-white text-amber-900 hover:bg-orange-50 font-bold rounded-full px-10 py-5 text-lg shadow-2xl transition-all">
                      Jadi Mitra Sekarang
                      <ArrowRight className="w-6 h-6 ml-2 inline" />
                    </button>
                  </motion.div>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8"
              >
                {[
                  'Modal Terjangkau',
                  'Sistem Siap Pakai',
                  'Support Full',
                  'Profit Maksimal'
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="text-center"
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-500 mx-auto mb-2" />
                    <span className="text-sm text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </Section>
      </main>

      <WhatsAppFloatButton />
      <Footer />
    </div>
  );
}
