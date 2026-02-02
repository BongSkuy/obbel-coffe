export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  content: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ahmad Fauzi',
    role: 'Pelanggan Setia',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad',
    rating: 5,
    content: 'Kopi Obbel juara banget! Rasanya konsisten dari awal buka sampai sekarang. Baristanya juga ramah banget. Tiap hari pasti mampir.',
    date: 'Januari 2025'
  },
  {
    id: '2',
    name: 'Siti Nurhaliza',
    role: 'Mahasiswa UNS',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Siti',
    rating: 5,
    content: 'Tempatnya nyaman banget buat nugas atau meeting sama temen. Kopi Susu Gula Aren favorit aku sejauh ini!',
    date: 'Januari 2025'
  },
  {
    id: '3',
    name: 'Budi Santoso',
    role: 'Wiraswasta',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Budi',
    rating: 5,
    content: 'Sudah jadi mitra Obbel sejak 2023. Alhamdulillah bisnisnya berkembang pesat. Support dari tim Obbel sangat memuaskan!',
    date: 'Desember 2024'
  },
  {
    id: '4',
    name: 'Rina Wati',
    role: 'Ibu Rumah Tangga',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rina',
    rating: 5,
    content: 'Suamiku dan aku suka banget ngopi di sini bareng anak-anak. Tempatnya ramah keluarga dan kopinya enak semua.',
    date: 'Januari 2025'
  },
  {
    id: '5',
    name: 'Dedy Prasetyo',
    role: 'Freelancer',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dedy',
    rating: 4,
    content: 'Wifi kenceng, kopinya enak, harga terjangkau. Perfect combination buat kerja remote. Recommended!',
    date: 'Januari 2025'
  },
  {
    id: '6',
    name: 'Maya Putri',
    role: 'Pelanggan Baru',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maya',
    rating: 5,
    content: 'Baru pertama coba kemaren dan langsung jatuh cinta! Kopi Susu Coklatnya juara. Pasti bakal balik lagi!',
    date: 'Januari 2025'
  }
];
