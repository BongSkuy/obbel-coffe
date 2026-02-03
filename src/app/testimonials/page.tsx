'use client';

import { motion } from 'framer-motion';
import { Star, Quote, Users } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import GoFoodButton from '@/components/ui/GoFoodButton';
import WhatsAppFloatButton from '@/components/ui/WhatsAppFloatButton';
import { testimonials } from '@/data/testimonials';

export default function TestimonialsPage() {
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
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6">
                <Star className="w-8 h-8 text-amber-600" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                Testimoni Pelanggan
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Apa kata mereka tentang Obbel Coffee? Ribuan pelanggan sudah membuktikan kualitas kami.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <Section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 md:p-12 shadow-2xl text-white text-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold mb-2">4.9</div>
                    <div className="flex gap-1 justify-center mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-current text-yellow-300" />
                      ))}
                    </div>
                    <div className="text-green-200 text-sm">Google Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold mb-2">2,500+</div>
                    <div className="text-green-200 text-sm">Review Positif</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
                    <div className="text-green-200 text-sm">Pelanggan Puas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold mb-2">5+</div>
                    <div className="text-green-200 text-sm">Tahun Berdiri</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Testimonials Grid */}
        <Section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-amber-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Apa Kata Mereka?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Cerita nyata dari pelanggan setia Obbel Coffee
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

                  <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <div className="flex-1">
                      <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-full w-14 h-14 flex items-center justify-center">
                        <span className="text-2xl font-bold text-gray-600">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="text-xs text-gray-400">
                      {testimonial.date}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Sudah Coba Kopi Kami?
              </h2>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                Pesan sekarang dan rasakan sendiri kenapa ribuan pelanggan puas dengan Obbel Coffee!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <GoFoodButton size="lg" />
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full px-8 py-4 transition-colors"
                >
                  <Users className="w-5 h-5" />
                  Chat WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </Section>
      </main>

      <WhatsAppFloatButton />
      <Footer />
    </div>
  );
}
