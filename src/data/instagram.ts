export interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  date: string;
  link: string;
}

export const instagramPosts: InstagramPost[] = [
  {
    id: '1',
    imageUrl: '/images/instagram/post-1.jpg',
    caption: 'Kopi Susu Gula Aren terbaik di Boyolali! ☕✨ #ObbelCoffee #KopiSusus',
    likes: 234,
    comments: 45,
    date: '2 jam yang lalu',
    link: 'https://instagram.com/p/C-123456789'
  },
  {
    id: '2',
    imageUrl: '/images/instagram/post-2.jpg',
    caption: 'Grand outlet baru! 🎉 Datang dan rasakan kopi terbaik kami di lokasi baru.',
    likes: 567,
    comments: 89,
    date: '1 hari yang lalu',
    link: 'https://instagram.com/p/C-987654321'
  },
  {
    id: '3',
    imageUrl: '/images/instagram/post-3.jpg',
    caption: 'Promo spesial minggu ini! Buy 1 Get 1 untuk semua menu Kopi Susu 🎁',
    likes: 892,
    comments: 156,
    date: '2 hari yang lalu',
    link: 'https://instagram.com/p/C-111111111'
  },
  {
    id: '4',
    imageUrl: '/images/instagram/post-4.jpg',
    caption: 'Suasana kedai yang nyaman buat ngopi dan nugas 📚☕',
    likes: 445,
    comments: 67,
    date: '3 hari yang lalu',
    link: 'https://instagram.com/p/C-222222222'
  },
  {
    id: '5',
    imageUrl: '/images/instagram/post-5.jpg',
    caption: 'Barista kami sedang in action! 🔥 Cek skill mereka langsung di kedai',
    likes: 678,
    comments: 92,
    date: '4 hari yang lalu',
    link: 'https://instagram.com/p/C-333333333'
  },
  {
    id: '6',
    imageUrl: '/images/instagram/post-6.jpg',
    caption: 'Thank you pelanggan setia Obbel Coffee! 💚 50K followers!',
    likes: 1234,
    comments: 234,
    date: '1 minggu yang lalu',
    link: 'https://instagram.com/p/C-444444444'
  }
];
