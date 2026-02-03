'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import GoFoodButton from '@/components/ui/GoFoodButton';
import WhatsAppFloatButton from '@/components/ui/WhatsAppFloatButton';
import { menuData, type MenuItem } from '@/data/menu';
import { Star, Coffee } from 'lucide-react';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('coffee-milk');

  const activeCategoryData = menuData.find(cat => cat.id === activeCategory);
  const items = activeCategoryData?.items || [];

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
              className="text-center"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                Menu Kami
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Nikmati kopi berkualitas dengan harga terjangkau. Semua menu bisa dipesan langsung di GoFood!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Tabs */}
        <Section className="py-8 bg-white border-b border-gray-100 sticky top-16 md:top-20 z-40 bg-white/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide"
            >
              {menuData.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    px-6 py-3 rounded-full font-medium whitespace-nowrap transition-all
                    ${activeCategory === category.id
                      ? 'bg-green-600 text-white shadow-lg shadow-green-200'
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

        {/* Menu Grid */}
        <Section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto"
            >
              <AnimatePresence mode="wait">
                {items.map((item: MenuItem, index: number) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group"
                  >
                    {/* Image */}
                    <div className="relative h-48 bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.src = '/images/menu/coffee-milk-category.jpg';
                        }}
                      />
                      {item.isBestSeller && (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 + 0.2 }}
                          className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1"
                        >
                          <Star className="w-3 h-3 fill-current" />
                          Best Seller
                        </motion.div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2 min-h-[40px]">
                        {item.description}
                      </p>
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
              </AnimatePresence>
            </motion.div>

            {/* Empty State */}
            {items.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <Coffee className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">Belum ada menu di kategori ini</p>
              </motion.div>
            )}

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 text-center"
            >
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-8 md:p-12 max-w-3xl mx-auto border-2 border-amber-200 shadow-lg">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                  Ngopi Yuk? Pesan Sekarang di GoFood!
                </h3>
                <p className="text-gray-700 mb-6 text-lg">
                  Dapatkan kopi terbaik Obbel Coffee langsung di lokasi kamu
                </p>
                <GoFoodButton size="lg" />
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
