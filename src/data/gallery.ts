export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  description: string;
  category: 'interior' | 'exterior' | 'products' | 'events';
}

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    image: '/images/gallery/interior-1.jpg',
    title: 'Suasana Kedai Utama',
    description: 'Interior modern dengan sentuhan hangat kopi',
    category: 'interior'
  },
  {
    id: '2',
    image: '/images/gallery/products-1.jpg',
    title: 'Menu Signature',
    description: 'Kopi dan minuman terbaik kami',
    category: 'products'
  },
  {
    id: '3',
    image: '/images/gallery/exterior-1.jpg',
    title: 'Facade Kedai',
    description: 'Tampilan modern dan eye-catching',
    category: 'exterior'
  },
  {
    id: '4',
    image: '/images/gallery/interior-2.jpg',
    title: 'Duduk Nyaman',
    description: 'Area duduk yang nyaman untuk ngopi',
    category: 'interior'
  },
  {
    id: '5',
    image: '/images/gallery/products-2.jpg',
    title: 'Barista In Action',
    description: 'Proses pembuatan kopi profesional',
    category: 'products'
  },
  {
    id: '6',
    image: '/images/gallery/events-1.jpg',
    title: 'Live Music Night',
    description: 'Hiburan live setiap weekend',
    category: 'events'
  },
  {
    id: '7',
    image: '/images/gallery/interior-3.jpg',
    title: 'Private Room',
    description: 'Ruang untuk meeting private',
    category: 'interior'
  },
  {
    id: '8',
    image: '/images/gallery/products-3.jpg',
    title: 'Signature Drinks',
    description: 'Minuman khas Obbel Coffee',
    category: 'products'
  },
  {
    id: '9',
    image: '/images/gallery/exterior-2.jpg',
    title: 'Outdoor Seating',
    description: 'Area outdoor yang asri',
    category: 'exterior'
  }
];

export const galleryCategories = [
  { id: 'all', name: 'Semua' },
  { id: 'interior', name: 'Interior' },
  { id: 'exterior', name: 'Eksterior' },
  { id: 'products', name: 'Produk' },
  { id: 'events', name: 'Events' }
];
