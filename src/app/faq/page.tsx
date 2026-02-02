'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronUp, Mail } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import { faqs, faqCategories } from '@/data/faq';

export default function FAQPage() {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  const [faqCategory, setFaqCategory] = useState('all');

  const filteredFaqs = faqCategory === 'all'
    ? faqs
    : faqs.filter(faq => faq.category === faqCategory);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-amber-50 to-green-50 py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-green-100 rounded-full mb-6">
                <HelpCircle className="w-8 h-8 text-amber-600" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                Pertanyaan Umum
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Temukan jawaban untuk pertanyaan yang sering ditanyakan tentang Obbel Coffee
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Categories */}
        <Section className="py-8 bg-white border-b border-gray-100 sticky top-16 md:top-20 z-40 bg-white/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide justify-center flex-wrap"
            >
              {faqCategories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setFaqCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    px-6 py-3 rounded-full font-medium whitespace-nowrap transition-all
                    ${faqCategory === category.id
                      ? 'bg-amber-500 text-white shadow-lg shadow-amber-200'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                  `}
                >
                  {category.name}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </Section>

        {/* FAQ Accordion */}
        <Section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-4">
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100"
                >
                  <motion.button
                    onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}
                    className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-amber-50 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        {faq.category === 'franchise' && (
                          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded">💼</span>
                        )}
                        {faq.category === 'produk' && (
                          <span className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded">☕</span>
                        )}
                        {faq.category === 'umum' && (
                          <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">📝</span>
                        )}
                        {faq.category === 'lokasi' && (
                          <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-2 py-1 rounded">📍</span>
                        )}
                      </div>
                      <h3 className="font-bold text-gray-900 text-base">{faq.question}</h3>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                      {activeFaq === faq.id ? (
                        <ChevronUp className="w-6 h-6 text-amber-600" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                  </motion.button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: activeFaq === faq.id ? 'auto' : 0,
                      opacity: activeFaq === faq.id ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-16 max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-br from-amber-100 to-green-100 rounded-3xl p-8 text-center border-2 border-amber-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Masih Punya Pertanyaan?
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Jangan ragu untuk bertanya! Kami siap membantu Anda.
                </p>
                <motion.a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full px-8 py-4 text-lg transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Chat WhatsApp Kami
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
