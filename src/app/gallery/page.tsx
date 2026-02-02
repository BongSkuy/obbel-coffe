'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import WhatsAppFloatButton from '@/components/ui/WhatsAppFloatButton';
import { instagramPosts, type InstagramPost } from '@/data/instagram';
import { Instagram as InstagramIcon, Heart, MessageCircle, Clock, ExternalLink, X } from 'lucide-react';

export default function GalleryPage() {
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-pink-50 via-purple-50 to-white py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full mb-6">
                <InstagramIcon className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                Instagram Feed
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Lihat update terbaru, promo spesial, dan momen seru di Instagram <span className="font-semibold">@obbelcoffee</span>
              </p>
              <motion.a
                href="https://instagram.com/obbelcoffee"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 mt-6 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold rounded-full px-6 py-3 transition-colors"
              >
                <InstagramIcon className="w-5 h-5" />
                Ikuti Kami di Instagram
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Instagram Feed Grid */}
        <Section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
            >
              {instagramPosts.map((post: InstagramPost, index: number) => (
                <motion.div
                  layout
                  key={post.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative h-64 bg-gradient-to-br from-pink-100 to-purple-50 flex items-center justify-center overflow-hidden">
                    <InstagramIcon className="w-16 h-16 text-pink-400 group-hover:scale-110 transition-transform" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <div className="flex items-center gap-4 text-white text-sm">
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4 fill-current" />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4 fill-current" />
                          <span>{post.comments}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <p className="text-gray-700 text-sm line-clamp-2 mb-3">
                      {post.caption}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-500 text-xs">
                        <Clock className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <motion.button
                        onClick={() => setSelectedPost(post)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-pink-500 hover:text-pink-600 text-sm font-semibold flex items-center gap-1"
                      >
                        Lihat Detail
                        <ExternalLink className="w-3 h-3" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center">
                <InstagramIcon className="w-16 h-16 mx-auto mb-6" />
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Follow Instagram Kami!
                </h3>
                <p className="text-pink-100 text-lg mb-6 leading-relaxed">
                  Dapatkan update terbaru, promo spesial, dan momen seru setiap hari di Instagram kami. 
                  Jangan sampai ketinggalan informasi terbaru dari Obbel Coffee!
                </p>
                <motion.a
                  href="https://instagram.com/obbelcoffee"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-white text-pink-600 font-semibold rounded-full px-8 py-4 transition-colors"
                >
                  <InstagramIcon className="w-5 h-5" />
                  @obbelcoffee
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Instagram Post Modal */}
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedPost(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <div className="max-w-4xl w-full">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="bg-white rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="h-80 bg-gradient-to-br from-pink-100 to-purple-50 flex items-center justify-center relative">
                  <InstagramIcon className="w-32 h-32 text-pink-400" />
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1 text-gray-700">
                      <Heart className="w-5 h-5 text-pink-500 fill-current" />
                      <span className="font-semibold">{selectedPost.likes}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-700">
                      <MessageCircle className="w-5 h-5 text-purple-500 fill-current" />
                      <span className="font-semibold">{selectedPost.comments}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500 text-sm ml-auto">
                      <Clock className="w-4 h-4" />
                      <span>{selectedPost.date}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {selectedPost.caption}
                  </p>
                  <a
                    href={selectedPost.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold rounded-full px-6 py-3 transition-colors"
                  >
                    <InstagramIcon className="w-5 h-5" />
                    Lihat di Instagram
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </main>

      <WhatsAppFloatButton />
      <Footer />
    </div>
  );
}
