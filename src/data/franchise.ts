export interface FranchisePackage {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  popular?: boolean;
  description: string;
  features: string[];
  includes: string[];
  roi?: string;
  period?: string;
}

export const franchisePackages: FranchisePackage[] = [
  {
    id: 'starter',
    name: 'Paket Starter',
    price: 15000000,
    originalPrice: 20000000,
    description: 'Paket paling hemat untuk memulai usaha kopi dengan gerobak portable',
    features: [
      'Gerobak Premium Full Branding',
      'Peralatan Kopi Lengkap',
      'Bahan Baku Awal',
      'Menu & SOP',
      'Training Barista',
      'Marketing Support',
      '3 Bulan Support'
    ],
    includes: [
      'Mesin Kopi Manual',
      'Grinder Kopi',
      'Peralatan Barista',
      'Packaging Full Branding',
      'Bahan Baku 2 Minggu',
      'Seragam 2 Set',
      'Menu Digital',
      'SOP Operasional'
    ],
    roi: '3-4 Bulan',
    period: '6 Bulan'
  },
  {
    id: 'standard',
    name: 'Paket Standard',
    price: 25000000,
    originalPrice: 35000000,
    popular: true,
    description: 'Paket standar dengan perlengkapan lebih lengkap untuk operasional maksimal',
    features: [
      'Semua Fitur Starter',
      'Gerobak Premium Full Branding',
      'Mesin Kopi Semi-Auto',
      'Bahan Baku Awal Lebih Banyak',
      'Menu & SOP Lengkap',
      'Training Barista Intensif',
      'Marketing Support Full',
      '6 Bulan Support',
      'Prioritas Restock'
    ],
    includes: [
      'Mesin Kopi Semi-Auto',
      'Grinder Kopi Profesional',
      'Peralatan Barista Lengkap',
      'Packaging Premium Full Branding',
      'Bahan Baku 3 Minggu',
      'Seragam 3 Set',
      'Menu Digital Premium',
      'SOP Operasional Lengkap',
      'Promo Material',
      'Digital Marketing Kit'
    ],
    roi: '2-3 Bulan',
    period: '6 Bulan'
  },
  {
    id: 'premium',
    name: 'Paket Premium',
    price: 40000000,
    originalPrice: 60000000,
    description: 'Paket lengkap dengan mesin premium dan support maksimal untuk pertumbuhan cepat',
    features: [
      'Semua Fitur Standard',
      'Mesin Kopi Auto',
      'Bahan Baku Awal Paling Banyak',
      'Support Full 12 Bulan',
      'Prioritas Segala Hal',
      'Marketing Campaign',
      'Consulting Rutin',
      'Event Support',
      'Exclusive Access'
    ],
    includes: [
      'Mesin Kopi Automatic',
      'Grinder Kopi Commercial',
      'Peralatan Barista Premium',
      'Packaging Exclusive Full Branding',
      'Bahan Baku 1 Bulan',
      'Seragam 5 Set',
      'Menu Digital Exclusive',
      'SOP Operasional Premium',
      'Promo Material Lengkap',
      'Digital Marketing Advanced Kit',
      'Branding Video',
      'Consulting Sessions',
      'Promo Event Support'
    ],
    roi: '2-3 Bulan',
    period: '12 Bulan'
  }
];
