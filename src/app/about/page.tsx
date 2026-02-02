'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Users, Coffee, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Section from '@/components/ui/Section';
import PrimaryButton from '@/components/ui/PrimaryButton';
import WhatsAppFloatButton from '@/components/ui/WhatsAppFloatButton';
import { teamMembers } from '@/data/team';
import { SITE_CONFIG } from '@/data/constants';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-3 mb-4">
                <Coffee className="w-10 h-10" />
                <span className="text-3xl md:text-4xl font-bold">Tentang Obbel Coffee</span>
              </div>
              <p className="text-lg text-green-100 leading-relaxed mb-6">
                {SITE_CONFIG.tagline}
              </p>
              <p className="text-green-50 leading-relaxed">
                Usaha kopi bergerak yang sudah terbukti laku di lapangan dengan sistem yang sudah teruji dan efektif.
                Kami hadir untuk memberikan kopi berkualitas dengan harga terjangkau bagi semua kalangan.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <Section className="py-20 md:py-28 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Tim Kami
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Orang-orang berdedikasi di balik kesuksesan Obbel Coffee
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white border-2 border-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl hover:border-green-200 transition-all group"
                >
                  <div className="relative h-64 bg-gradient-to-br from-green-100 to-amber-50 flex items-center justify-center overflow-hidden">
                    <div className="w-24 h-24 text-green-400 group-hover:scale-110 transition-transform flex items-center justify-center">
                      <Users className="w-12 h-12" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <h3 className="text-white font-bold text-lg">{member.name}</h3>
                      <p className="text-green-100 text-sm">{member.role}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {member.bio}
                    </p>

                    {member.social && (
                      <div className="flex gap-3 mt-4 pt-4 border-t border-gray-100">
                        {member.social.instagram && (
                          <a
                            href={member.social.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-500 hover:text-pink-500 transition-colors text-sm"
                          >
                            <Instagram className="w-4 h-4" />
                            <span>Instagram</span>
                          </a>
                        )}
                        {member.social.linkedin && (
                          <a
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors text-sm"
                          >
                            <Linkedin className="w-4 h-4" />
                            <span>LinkedIn</span>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-12 max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-br from-amber-100 to-green-50 rounded-2xl p-6 text-center border-2 border-amber-200">
                <Users className="w-12 h-12 text-amber-600 mx-auto mb-3" />
                <p className="text-gray-700 font-medium">
                  Foto tim akan segera diperbarui dengan foto asli tim Obbel Coffee!
                </p>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="py-16 md:py-20 bg-green-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ingin Bergabung dengan Tim Kami?
              </h2>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                Jadi bagian dari kesuksesan Obbel Coffee dan mulai perjalanan karir Anda di industri kopi.
              </p>
              <Link href="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <PrimaryButton variant="green" size="lg">
                    Hubungi Kami
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </PrimaryButton>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </Section>
      </main>

      <WhatsAppFloatButton />
      <Footer />
    </div>
  );
}
