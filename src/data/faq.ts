export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'umum' | 'franchise' | 'produk' | 'lokasi';
}

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'Apakah Obbel Coffee membuka franchise?',
    answer: 'Ya, Obbel Coffee membuka kesempatan untuk menjadi mitra franchise. Kami punya beberapa paket investasi mulai dari Rp 15 juta hingga Rp 40 juta. Semua paket sudah termasuk gerobak, peralatan, bahan baku awal, training, dan support penuh.',
    category: 'franchise'
  },
  {
    id: '2',
    question: 'Berapa lama untuk ROI (balik modal)?',
    answer: 'Berdasarkan pengalaman mitra kami yang sudah bergabung, ROI bisa dicapai dalam 2-4 bulan tergantung lokasi dan paket yang dipilih. Paket Premium biasanya lebih cepat ROI karena support dan perlengkapan lebih lengkap.',
    category: 'franchise'
  },
  {
    id: '3',
    question: 'Apa saja syarat untuk jadi mitra franchise?',
    answer: 'Syaratnya cukup sederhana: memiliki semangat dan komitmen kuat untuk berbisnis, waktu yang cukup untuk mengelola usaha, lokasi strategis atau potensial, siap mengikuti sistem dan SOP yang sudah ditetapkan, dan modal investasi sesuai paket yang dipilih.',
    category: 'franchise'
  },
  {
    id: '4',
    question: 'Berapa lama proses sampai bisa jualan?',
    answer: 'Proses dari konsultasi sampai grand opening biasanya memakan waktu 2-4 minggu. Ini termasuk survey lokasi, perjanjian, training, persiapan gerobak dan perlengkapan, serta bahan baku.',
    category: 'franchise'
  },
  {
    id: '5',
    question: 'Apakah ada dukungan dari tim Obbel Coffee?',
    answer: 'Tentu! Kami memberikan support penuh termasuk training barista intensif, supply bahan baku berkualitas, marketing campaign, menu digital, SOP operasional lengkap, dan konsultasi rutin. Tim kami selalu siap membantu jika ada kendala.',
    category: 'franchise'
  },
  {
    id: '6',
    question: 'Dimana lokasi Obbel Coffee?',
    answer: 'Outlet utama kami berlokasi di Jl. Raya Boyolali - Solo Km. 5, Boyolali, Jawa Tengah 57311. Kami buka setiap hari dari jam 06:30 - 22:00 WIB. Kamu juga bisa cek lokasi di Google Maps.',
    category: 'lokasi'
  },
  {
    id: '7',
    question: 'Apakah bisa pesan via GoFood?',
    answer: 'Ya, tentu! Kami tersedia di GoFood. Kamu bisa memesan semua menu Obbel Coffee melalui aplikasi GoFood dan kami akan mengirimkannya langsung ke lokasi kamu.',
    category: 'produk'
  },
  {
    id: '8',
    question: 'Menu apa saja yang tersedia?',
    answer: 'Kami punya berbagai menu kopi seperti Kopi Susu Gula Aren, Kopi Susu Coklat, Americano, Latte, dan lainnya. Selain kopi, kami juga punya non-coffee drinks seperti Tea dan Chocolate. Semua menu bisa dipesan via GoFood!',
    category: 'produk'
  },
  {
    id: '9',
    question: 'Apakah bisa request gula/sugar level?',
    answer: 'Untuk saat ini, kami bisa menerima request gula/sugar level untuk pesanan langsung di kedai. Untuk pesanan via GoFood, kami menggunakan standar gula yang sudah diukur. Namun, kamu bisa mencantumkan catatan di pesanan GoFood.',
    category: 'produk'
  },
  {
    id: '10',
    question: 'Apakah Obbel Coffee halal?',
    answer: 'Ya, semua produk Obbel Coffee menggunakan bahan-bahan yang halal dan tersertifikasi. Kami sangat memperhatikan kehalalan produk untuk kenyamanan semua pelanggan kami.',
    category: 'umum'
  },
  {
    id: '11',
    question: 'Bagaimana jika ada kendala atau pertanyaan?',
    answer: 'Kamu bisa langsung menghubungi kami melalui WhatsApp di +62 812-3456-7890 atau menggunakan tombol WhatsApp yang ada di website. Tim kami akan segera membantu menjawab pertanyaan atau menyelesaikan kendala kamu.',
    category: 'umum'
  },
  {
    id: '12',
    question: 'Apakah ada promo khusus?',
    answer: 'Kami sering mengadakan promo khusus baik untuk pelanggan maupun calon mitra. Pantau terus website dan sosial media kami untuk info promo terbaru. Beberapa menu juga punya harga promo reguler.',
    category: 'umum'
  }
];

export const faqCategories = [
  { id: 'all', name: 'Semua' },
  { id: 'umum', name: 'Umum' },
  { id: 'franchise', name: 'Franchise' },
  { id: 'produk', name: 'Produk' },
  { id: 'lokasi', name: 'Lokasi' }
];
